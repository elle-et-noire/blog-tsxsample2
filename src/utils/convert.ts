import rehypeExternalLinks from 'rehype-external-links'
import remarkRehype from 'remark-rehype'
import gfm from "remark-gfm";
import rehypeStringify from "rehype-stringify"
import rehypeFormat from "rehype-format"
import { unified } from "unified"
import remarkParse from "remark-parse"
import { resolveNaptr } from 'dns';

function decorateMath(text: string): [string, string[]] {
  let result = "";
  let mathdepth = 0; // inline or display の数式の中の数式
  let endsymbol = false; // \end{hoge} の中
  let mathmode = false; // mathdepth > 0 でも \text{} の中なら false
  const opendisplaymath = "\n<p>";
  const closedisplaymath = "</p>\n";
  const openinlinemath = "";
  const closeinlinemath = "";
  const spacer = "\\hspace{0.2em}";
  const rspacedchars = ["。", "、", "）", "，", "．", " ", "　"];
  const lspacedchars = ["（"];
  const mdcontrolls = [">", ".", "*", "-", ":"];
  const mathblocks: { [label: string]: string } = {};
  text.match(/\\(eq)?ref\{[^}]+\}/g)?.forEach(label => mathblocks[label.substring(7, label.length - 1)] = "");
  let mathbegin = 0;
  for (let i = 0; i < text.length; i++) {
    const substr = (pos: number, n: number) => pos > 0 ? (pos < text.length ? pos + n - 1 < text.length ? text.substring(pos, pos + n) : text[pos] : text[text.length - 1]) : text[0]
    const isinmathopener = (str: string) => (str[0] == "$" && str[1] != "$") || str.substring(0, 2) == "\\("
    const isinmathcloser = (str: string) => (str[0] == "$" && str[1] != "$") || str.substring(0, 2) == "\\)"

    if (mathdepth == 0 && substr(i, 1) == " ") {
      if (i + 1 < text.length && isinmathopener(substr(i + 1, 1))) {
        if (i == 0 || !mdcontrolls.includes(substr(i - 1, 1)))
          continue;
      }
      if (i > 0 && isinmathcloser(substr(i - 1, 1))) {
        continue;
      }
    }

    if (isinmathopener(substr(i, 2)) || isinmathcloser(substr(i, 2))) {
      mathmode = !mathmode;
      mathmode ? ++mathdepth : --mathdepth;
      if (mathmode) {
        const needspacer = (i > 0 && !rspacedchars.includes(result.substring(result.length - 1, 1)))
        if (mathdepth == 1)
          result += openinlinemath
        result += "$";
        if (needspacer)
          result += spacer;
      }
      if (substr(i, 1) != "$")
        ++i;
      if (!mathmode) {
        if (i + 1 < text.length && !lspacedchars.includes(result.substring(result.length + 1, 1)))
          result += spacer;
        result += "$";
        if (mathdepth == 0)
          result += closeinlinemath;
      }
      continue;
    }

    if (substr(i, 2) == "\\[" || substr(i, 6) == "\\begin") {
      ++mathdepth;
      mathmode = true;
      if (mathdepth == 1) {
        result += opendisplaymath; // \begin{} の場合終わり際が非確定なのでcontinueせずそのままにしておく
        mathbegin = result.length;
      }
    }

    if (substr(i, 2) == "\\]" || substr(i, 4) == "\\end") {
      --mathdepth;
      mathmode = false;
      if (mathdepth == 0) {
        if (substr(i, 2) == "\\]") {
          const mathend = result.length + 2;

          result += "\\]" + closedisplaymath;
          ++i;

          const mathblock = result.substring(mathbegin, mathend);
          const labels = mathblock.match(/\\label\{[^}]+\}/g)?.map(label => label.substring(7, label.length - 1));
          labels?.forEach(label => mathblocks[label] && (mathblocks[label] = mathblock.replace(/\\label\{([^}]+)\}/g, '\\tag*{\\eqref{$1}}')));
          continue;
        }
        endsymbol = true;
      }
    }

    if (substr(i, 2) == "$$") {
      // mathdepth == 0 or 1 のはず
      mathdepth = 1 - mathdepth;
      mathmode = !mathmode;
      result += (mathdepth == 1 ? opendisplaymath + "\\[" : "\\]" + closedisplaymath);
      ++i;
      continue;
    }

    if (mathmode && substr(i, 5) == "\\text") {
      mathmode = false;
    }

    if (substr(i, 1) == "}") {
      if (endsymbol) {
        const mathend = result.length + 1;

        endsymbol = false;
        result += "}" + closedisplaymath;

        const mathblock = result.substring(mathbegin, mathend);
        const labels = mathblock.match(/\\label\{[^}]+\}/g)?.map(label => label.substring(7, label.length - 1));
        labels?.forEach(label => {
          label in mathblocks && (mathblocks[label] = mathblock.replace(/\\label\{([^}]+)\}/g, '\\tag*{\\eqref{$1}}'))
        });
        continue;
      }
      if (!mathmode && mathdepth > 0) // \text の閉じ括弧のはず
        mathmode = true;
    }

    if (substr(i, 1) == '_' && mathmode) {
      if (i + 1 >= text.length) // あってはならない
        continue;
      result += "\\underscore";
      if (substr(i, 2) == '_\\' || substr(i, 2) == '_{')
        continue;
      ++i;
      result += "{" + substr(i, 1) + "}";
      continue;
    }

    result += substr(i, 1);
  }
  Object.entries(mathblocks).forEach(([key, value]) => {
    result += `
<p id="preview-mjx-${encodeURIComponent(key)}" class="window" style="position:fixed">
${value}
</p>
    `
  });
  return [result, Object.keys(mathblocks)];
}

export const markdownToHtml = async (file: string): Promise<[string, string[]]> => {
  const [text, labels] = decorateMath(file);
  const result = await unified()
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
  .process(text);
  return [result.toString(), labels];
};
