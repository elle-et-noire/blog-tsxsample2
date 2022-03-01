import rehypeExternalLinks from 'rehype-external-links'
import remarkRehype from 'remark-rehype'
import gfm from "remark-gfm";
import rehypeStringify from "rehype-stringify"
import rehypeFormat from "rehype-format"
import { unified } from "unified"
import remarkParse from "remark-parse"

// TODO:\text{}以外にテキストモードになる命令なかったっけ？（\mathrm, \substack）

export const markdownToHtml = async (text: string): Promise<[string, string[]]> => {

  // const text = file;

  let mathdepth = 0; // 数式の中の数式の深さ（\text{}中の$はclosemdblockしてはいけないので文中数式中でも必要）
  let endsymbol = false; // \end{hoge} の中
  let mathmode = false; // mathdepth > 0 でも \text{} の中なら false
  const opendisplaymath = "\n<address>";
  const closedisplaymath = "</address>\n";
  const spacer = "\\hspace{0.2em}";
  const rspacedchars = ["。", "、", "）", "，", "．", " ", "　"];
  const lspacedchars = ["（"];
  const mdcontrolls = [">", ".", "*", "-", ":"];
  const mathblocks: { [label: string]: string } = {};
  let inmathcounter = 0;
  let dispmathcounter = 0;
  let textcounter = 0;
  // 参照される式ラベルを調べておく。matchAll を使わせろ！
  text.match(/\\(eq)?ref\{([^}]+)\}/g)?.forEach(label => {
    const l = label.match(/\\(eq)?ref\{([^}]+)\}/);
    if (l != null && l.length >= 3) mathblocks[l[2]] = "";
  });
  // tooltip に表示するために数式を切り出す開始位置
  let mathbegin = 0;

  const mdblocks: { [label: string]: string } = {};
  let mdblock = "";
  const closemdblock = (mode: string) => { mdblocks[mode] = mdblock; mdblock = ""; }

  for (let i = 0; i < text.length; i++) {
    const substr = (pos: number, n: number) => pos > 0 ? (pos < text.length ? pos + n - 1 < text.length ? text.substring(pos, pos + n) : text[pos] : text[text.length - 1]) : text[0]
    const isinmathopener = (str: string) => (str[0] == "$" && str[1] != "$") || str.substring(0, 2) == "\\("
    const isinmathcloser = (str: string) => (str[0] == "$" && str[1] != "$") || str.substring(0, 2) == "\\)"

    // pos の前に1つ空白があってかつ詰めるべき
    const topresmashed = (pos: number) => pos == 0 || substr(pos - 1, 1) == " " && (pos == 1 || !mdcontrolls.includes(substr(i - 2, 1)))
    const topostsmashed = (pos: number) => pos == text.length - 1 || substr(pos + 1, 1) == " "
    // 文中数式前後の空白を1つ吸収する
    if (!mathmode && (i + 1 < text.length && isinmathopener(substr(i + 1, 1)) && topresmashed(i + 1) || i > 0 && isinmathcloser(substr(i - 1, 1)) && topostsmashed(i - 1)))
      continue;

    // 文中数式開閉
    if (isinmathopener(substr(i, 2)) || isinmathcloser(substr(i, 2))) {
      mathmode = !mathmode;
      // 開
      if (mathmode) {
        ++mathdepth;
        if (mathdepth <= 1) closemdblock("text" + textcounter++);
        mdblock += "$";
        // rspacedchars は " " を含む前提
        if (i == 1 && !rspacedchars.includes(substr(i - 1, 1)) || i >= 2 && !rspacedchars.includes(substr(topresmashed(i) ? i - 2 : i - 1, 1)))
          mdblock += spacer;
      }
      // \( or \) ならあらかじめ1文字分進めておく
      if (substr(i, 1) != "$") ++i;
      // 閉
      if (!mathmode) {
        --mathdepth;
        if (i + 2 == text.length && !lspacedchars.includes(substr(i + 1, 1)) || i + 3 <= text.length && !lspacedchars.includes(substr(topostsmashed(i) ? i + 2 : i + 1, 1)))
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
          labels?.forEach(label => {
            label in mathblocks && (mathblocks[label] = mathblock.replace(/\\tag\{([^}]+)\}/g, '').replace(/\\label\{([^}]+)\}/g, '\\tag*{\\eqref{$1}}'))
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

    if (substr(i, 1) == "}") {
      // \end{} の終わり
      if (endsymbol) {
        const mathend = mdblock.length + 1;

        endsymbol = false;
        mdblock += "}" + closedisplaymath;

        const mathblock = mdblock.substring(mathbegin, mathend);
        const labels = mathblock.match(/\\label\{[^}]+\}/g)?.map(label => label.substring(7, label.length - 1));
        labels?.forEach(label => {
          label in mathblocks && (mathblocks[label] = mathblock.replace(/\\tag\{([^}]+)\}/g, '').replace(/\\label\{([^}]+)\}/g, '\\tag*{\\eqref{$1}}'))
        });

        closemdblock("dispmath" + dispmathcounter++);
        continue;
      }
      // \text の閉じ括弧のはず
      if (!mathmode && mathdepth > 0)
        mathmode = true;
    }

    // 斜体化け回避
    // if (substr(i, 1) == '_' && mathmode) {
    //   if (i + 1 >= text.length) // あってはならない
    //     continue;
    //   mdblock += "\\underscore";
    //   if (substr(i, 2) == '_\\' || substr(i, 2) == '_{')
    //     continue;
    //   ++i;
    //   mdblock += "{" + substr(i, 1) + "}";
    //   continue;
    // }

    mdblock += substr(i, 1);
  }
  // mdblocks.push(["text" + textcounter++, mdblock]);
  closemdblock("text" + textcounter++);

  let decoratedText = "";
  Object.entries(mdblocks).forEach(([mode, block]) => {
    if (mode.substring(0, 4) == "text") {
      decoratedText += block.replace(/\[([^\]]+)\]\{([^}]+)\}/g, "<span class='has-tooltip relative items-center'><span class='flex tooltip balloon'>$2</span>$1</span>");
    }
    if (mode.substring(0, 6) == "inmath" || mode.substring(0, 8) == "dispmath") {
      decoratedText += `<${mode}/>`;
    }
    // decoratedText += block;
  });

  // console.log(result);
  // return [result, Object.keys(mathblocks)];


  // const [text, labels] = decorateMath(file);
  const undoneHtml = await unified()
    .use(remarkParse)
    .use(gfm)
    .use(require("remark-prism")) // eslint-disable-line
    .use(remarkRehype, {
      allowDangerousHtml: true
    })
    .use(rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] })
    .use(rehypeStringify, {
      allowDangerousHtml: true
    })
    .use(rehypeFormat, {
      indent: 2,
      indentInitial: true
    })
    .process(decoratedText);
  
  let result = undoneHtml.toString().replace(/<((?:inmath|dispmath)\d+)\/>/g, (_, mode: string) => mdblocks[mode])
  Object.entries(mathblocks).forEach(([key, value]) => {
    result += `
<p id="preview-mjx-${encodeURIComponent(key)}" class="window" style="position:fixed">
${value}
</p>
`
  });
  // console.log(result.toString());
  console.log(result)
  return [result, Object.keys(mathblocks)];
};
