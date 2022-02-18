import rehypeExternalLinks from 'rehype-external-links'
import remarkRehype from 'remark-rehype'
import gfm from "remark-gfm";
import rehypeStringify from "rehype-stringify"
import rehypeFormat from "rehype-format"
import { unified } from "unified"
import remarkParse from "remark-parse"

function decorateMath(text: string): [string, string[]] {
  let result = "";
  let mathdepth = 0; // inline or display の数式の中の数式
  let endsymbol = false;
  let mathmode = false;
  const opendisplaymath = "\n<address>";
  const closedisplaymath = "</address>\n";
  const openinlinemath = "";
  const closeinlinemath = "";
  const mathblocks: { [label: string]: string } = {};
  text.match(/\\(eq)?ref\{[^}]+\}/g)?.forEach(label => mathblocks[label.substring(7, label.length - 1)] = "");
  let mathbegin = 0;
  for (let i = 0; i < text.length; i++) {
    const substr = (n: number) => (i + n - 1 < text.length ? text.substring(i, i + n) : text[i])

    if (substr(2) == "\\(" || substr(2) == "\\)" || (substr(1) == "$" && substr(2) != "$$")) {
      mathmode = !mathmode;
      mathmode ? ++mathdepth : --mathdepth;
      if (mathmode && mathdepth == 1 || !mathmode && mathdepth == 0)
        result += (mathmode ? openinlinemath + "$" : "$" + closeinlinemath);
      else
        result += (mathmode ? "$" : "$");
      if (substr(1) != "$")
        ++i;
      continue;
    }

    if (substr(2) == "\\[" || substr(6) == "\\begin") {
      ++mathdepth;
      mathmode = true;
      if (mathdepth == 1) {
        result += opendisplaymath; // \begin{} の場合終わり際が非確定なのでcontinueせずそのままにしておく
        mathbegin = result.length;
      }
    }

    if (substr(2) == "\\]" || substr(4) == "\\end") {
      --mathdepth;
      mathmode = false;
      if (mathdepth == 0) {
        if (substr(2) == "\\]") {
          const mathend = result.length + 2;

          result += "\\]" + closedisplaymath;
          ++i;

          const mathblock = result.substring(mathbegin, mathend);
          const labels = mathblock.match(/\\label\{[^}]+\}/g)?.map(label => label.substring(7, label.length - 1));
          labels?.forEach(label => mathblocks[label] && (mathblocks[label] = mathblock.replace(/\\label\{[^}]+\}/g, '')));
          continue;
        }
        endsymbol = true;
      }
    }

    if (substr(2) == "$$") {
      // mathdepth == 0 or 1 のはず
      mathdepth = 1 - mathdepth;
      mathmode = !mathmode;
      result += (mathdepth == 1 ? opendisplaymath + "\\[" : "\\]" + closedisplaymath);
      ++i;
      continue;
    }

    if (mathmode && substr(5) == "\\text") {
      mathmode = false;
    }

    if (substr(1) == "}") {
      if (endsymbol) {
        const mathend = result.length + 1;

        endsymbol = false;
        result += "}" + closedisplaymath;

        const mathblock = result.substring(mathbegin, mathend);
        const labels = mathblock.match(/\\label\{[^}]+\}/g)?.map(label => label.substring(7, label.length - 1));
        labels?.forEach(label => {
          label in mathblocks && (mathblocks[label] = mathblock.replace(/\\label\{[^}]+\}/g, ''))
        });
        continue;
      }
      if (!mathmode && mathdepth > 0) // \text の閉じ括弧のはず
        mathmode = true;
    }

    if (substr(1) == '_' && mathmode) {
      if (i + 1 >= text.length) // あってはならない
        continue;
      result += "\\underscore";
      if (substr(2) == '_\\' || substr(2) == '_{')
        continue;
      ++i;
      result += "{" + substr(1) + "}";
      continue;
    }

    result += substr(1);
  }
  Object.entries(mathblocks).forEach(([key, value]) => {
    result += `
<div id="preview-mjx-${encodeURIComponent(key)}" class="window" style="position:fixed">
${value}
</div>
    `
  });
  // result += `\nあうあう<span class='has-tooltip relative items-center'><span class='flex tooltip balloon'>\\begin{align}\\int\\underscore{\\mathbb{M}^{1,3}}\\dd[4]{p'}\\theta(p'^0)\\delta(p'^\\mu p'\\underscore\\mu-m^2c^2)A(\\bm{p}')=\\int\\underscore{\\mathbb{R}^3}\\dfrac{c\\dd[3]{\\bm{p}'}}{2E(\\bm{p}')}A(\\bm{p}').\\tag{10}\\end{align}</span>\n\\eqref{eq:original}</span>お～もちかえりぃ～。`;
  // console.log(result);
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
