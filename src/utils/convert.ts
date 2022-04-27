import rehypeExternalLinks from 'rehype-external-links'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import gfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'

// TODO:\text{}以外にテキストモードになる命令なかったっけ？（\mathrm, \substack）

export const markdownToHtml = async (text: string): Promise<[MDXRemoteSerializeResult, string[]]> => {
  let mathdepth = 0; // 数式の中の数式の深さ（\text{}中の$はclosemdblockしてはいけないので文中数式中でも必要）
  let endsymbol = false; // \end{hoge} の中
  let mathmode = false; // mathdepth > 0 でも \text{} の中なら false
  const opendisplaymath = "";
  const closedisplaymath = "";
  const spacer = "\\hspace{0.2em}";
  const rsmashers = ["。", "、", "）", "，", "．", " ", "　", "-", "："];
  const lsmashers = ["（", "-"];
  const mathblocks: string[] = [];
  const labelsinuse = new Set<string>();
  let inmathcounter = 0;
  let dispmathcounter = 0;
  let textcounter = 0;
  let quotecounter = 0;
  let aloneref = false;
  // 参照される式ラベルを調べておく。matchAll を使わせろ！
  text.match(/\\(eq)?ref\{([^}]+)\}/g)?.forEach(label => {
    const l = label.match(/\\(eq)?ref\{([^}]+)\}/);
    if (l != null && l.length >= 3) labelsinuse.add(l[2]);
  });
  // mathpreview に表示するために数式を切り出す開始位置
  let mathbegin = 0;

  const mdblocks: { [label: string]: string } = {};
  let mdblock = "";
  const closemdblock = (mode: string) => { mdblocks[mode] = mdblock; mdblock = ""; }

  for (let i = 0; i < text.length; i++) {
    const substr = (pos: number, n: number) => pos > 0 ? (pos < text.length ? pos + n - 1 < text.length ? text.substring(pos, pos + n) : text[pos] : text[text.length - 1]) : text[0]
    const isinmathopener = (str: string) => (str[0] == "$" && str[1] != "$") || str.substring(0, 2) == "\\("
    const isinmathcloser = (str: string) => (str[0] == "$" && str[1] != "$") || str.substring(0, 2) == "\\)"

    if (substr(i, 3) == "```") {
      const j = text.indexOf("```", i + 1);
      if (j > i) {
        closemdblock("text" + textcounter++);
        mdblocks["quote" + quotecounter++] = text.substring(i, j + 3);
        i = j + 2;
      }
      continue;
    }
    if (substr(i, 2) == "``") {
      const j = text.indexOf("``", i + 1);
      if (j > i) {
        closemdblock("text" + textcounter++);
        mdblocks["quote" + quotecounter++] = text.substring(i, j + 2);
        i = j + 1;
      }
      continue;
    }
    if (substr(i, 1) == "`") {
      const j = text.indexOf("`", i + 1);
      if (j > i) {
        closemdblock("text" + textcounter++);
        mdblocks["quote" + quotecounter++] = text.substring(i, j + 1);
        i = j;
      }
      continue;
    }

    // 文中数式開閉
    if (isinmathopener(substr(i, 2)) || isinmathcloser(substr(i, 2))) {
      mathmode = !mathmode;
      // 開
      if (mathmode) {
        ++mathdepth;
        if (mathdepth <= 1) closemdblock("text" + textcounter++);
        mdblock += "$";
        if (i >= 1 && !rsmashers.includes(substr(i - 1, 1)))
          mdblock += spacer;
      }
      // \( or \) ならあらかじめ1文字分進めておく
      if (substr(i, 1) != "$") ++i;
      // 閉
      if (!mathmode) {
        --mathdepth;
        if (i + 2 <= text.length && !lsmashers.includes(substr(i + 1, 1)))
          mdblock += spacer;
        mdblock += "$";
        if (mathdepth <= 0) closemdblock("inmath" + inmathcounter++);
      }
      continue;
    }

    // 別行立て数式開
    if (substr(i, 2) == "\\[" || substr(i, 6) == "\\begin") {
      ++mathdepth;
      mathmode = true;
      if (mathdepth == 1) {
        closemdblock("text" + textcounter++);
        mdblock += opendisplaymath; // \begin{} の場合終わり際が非確定なのでcontinueせずそのままにしておく
        mathbegin = mdblock.length;
      }
    }

    // 別行立て数式閉
    if (substr(i, 2) == "\\]" || substr(i, 4) == "\\end") {
      --mathdepth;
      mathmode = false;
      if (mathdepth == 0) {
        if (substr(i, 2) == "\\]") {
          const mathend = mdblock.length + 2;

          mdblock += "\\]" + closedisplaymath;
          ++i;

          const mathblock = mdblock.substring(mathbegin, mathend);
          const labels = mathblock.match(/\\label\{[^}]+\}/g)?.map(label => label.substring(7, label.length - 1));
          let added = false;
          labels?.forEach(label => {
            if (!added && labelsinuse.has(label)) {
              mathblocks.push(mathblock.replace(/\\tag\{([^}]+)\}/g, '').replace(/\\label\{([^}]+)\}/g, '\\tag*{\\eqref{$1}}'));
              added = true;
            }
          });

          closemdblock("dispmath" + dispmathcounter++);
          continue;
        }
        // 環境名が分からないので \end{} の終わり際が分からない
        endsymbol = true;
      }
    }

    // 別行立て数式開閉（$$ バージョン）
    if (substr(i, 2) == "$$") {
      // mathdepth == 0 or 1 のはず
      mathdepth = 1 - mathdepth;
      mathmode = !mathmode;
      if (mathmode) closemdblock("text" + textcounter++);
      mdblock += (mathmode ? opendisplaymath + "\\[" : "\\]" + closedisplaymath);
      if (!mathmode) closemdblock("dispmath" + dispmathcounter++);
      ++i;
      continue;
    }

    // \text{} 中は数式モードじゃない（けど数式の中なのでHTMLタグは使えない）
    if (mathmode && substr(i, 5) == "\\text") {
      mathmode = false;
    }

    if (mathdepth == 0 && substr(i, 6) == "\\eqref" || substr(i, 4) == "\\ref") {
      closemdblock("text" + textcounter++);
      aloneref = true;
    }

    if (substr(i, 1) == "}") {
      // \end{} の終わり
      if (endsymbol) {
        const mathend = mdblock.length + 1;

        endsymbol = false;
        mdblock += "}" + closedisplaymath;

        const mathblock = mdblock.substring(mathbegin, mathend);
        const labels = mathblock.match(/\\label\{[^}]+\}/g)?.map(label => label.substring(7, label.length - 1));
        let added = false;
        labels?.forEach(label => {
          if (!added && labelsinuse.has(label)) {
            mathblocks.push(mathblock.replace(/\\tag\{([^}]+)\}/g, '').replace(/\\label\{([^}]+)\}/g, '\\tag*{\\eqref{$1}}'));
            added = true;
          }
        });

        closemdblock("dispmath" + dispmathcounter++);
        continue;
      }
      // \text の閉じ括弧のはず
      if (!mathmode && mathdepth > 0)
        mathmode = true;

      if (aloneref) {
        mdblock += "}";
        closemdblock("inmath" + inmathcounter++);
        aloneref = false;
        continue;
      }
    }

    mdblock += substr(i, 1);
  }
  closemdblock("text" + textcounter++);

  let decoratedText = "";
  Object.entries(mdblocks).forEach(([mode, block]) => {
    if (mode.substring(0, 4) == "text") {
      decoratedText += block;
    }
    if (mode.substring(0, 6) == "inmath" || mode.substring(0, 8) == "dispmath" || mode.substring(0,5) == "quote") {
      decoratedText += `<${mode}/>`;
    }
  });

  let footnotes = "\n";
  let footnum = 0;
  decoratedText = decoratedText.replace(/<br>/g, "<br/>")
    .replace(/\[([^\]]+)\]\{([^}]+)\}/g, "<span className='has-tooltip relative items-center'><span className='inline-block tooltip balloon'>$2</span>$1</span>")
    .replace(/\^\[([^\]]+)\]/g, (_, p1: string): string => {
      footnotes += `\n[^${++footnum}]: ${p1}\n`;
      return `<span className='has-tooltip relative items-center no-underline'><span className='inline-block tooltip balloon'>${p1}</span>[^${footnum}]</span>`;
    });
  decoratedText += footnotes;
  decoratedText = decoratedText.replace(/(<(?:inmath|dispmath)\d+\/>)\r?\n/g, "$1") // 数式と文章の間の改行による隙間を消す
    .replace(/<((?:inmath|dispmath)\d+)\/>/g, (_, mode: string): string => {
      if (mode.substring(0, 6) == "inmath") return "<span>{`" + mdblocks[mode].replace(/\\/g, "\\\\") + "`}</span>";
      if (mode.substring(0, 8) == "dispmath") return "<div className='scrollable'>{`" + mdblocks[mode].replace(/\\/g, "\\\\") + "`}</div>";
      return "";
    })
    .replace(/<(quote\d+)\/>/g, (_, mode: string) => mdblocks[mode])
    .replace(/```mermaid([^`]+)```/g, "\n<div className='mermaid'>{`%%{init:{'theme':'base','themeVariables':{'primaryColor':'#007777','primaryTextColor':'#f0f6fc','primaryBorderColor':'#008888','secondaryColor':'#145055','tertiaryColor': '#fff0f0','edgeLabelBackground':'#002b3600','lineColor':'#007777CC','noteTextColor':'#e2e8f0','noteBkgColor':'#007777BB','textColor':'#f0f6fc','fontSize':'16px'},'themeCSS':'text.actor {font-size:20px !important;}'}}%%$1`}</div>\n")
    // .replace(/```([^`\n]+)/g, (_, p1: string): string => {
    //   const titles = p1.split(':');
    //   return (titles.length > 1 ? `<div className='code-title'>{\`${titles[1]}\`}</div>\n\n` : '') + '```' + titles[0];
    // })
    .replace(/```(.+)/g, (_, p1: string): string => {
      const titles = p1.split(':');
      return '```' + titles[0] + (titles.length > 1 ? ("[data-file='" + titles[1] + "']") : '');
    });

  const mdxSource = await serialize(decoratedText, {
    mdxOptions: {
      remarkPlugins: [
        gfm,
        [require('remark-prism'), {
          plugins: [
            // 'autolinker',
            // 'command-line',
            // 'data-uri-highlight',
            'diff-highlight',
            // 'inline-color',
            // 'keep-markup',
            // 'line-numbers',
            // 'show-invisibles',
            // 'treeview',
          ]
        },
        remarkUnwrapImages]
      ],
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] }],
      ],
    },
  });

  return [mdxSource, mathblocks];
};
