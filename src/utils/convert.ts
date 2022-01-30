import { remark } from "remark";
// import externalLinks from "remark-external-links";
import rehypeExternalLinks from 'rehype-external-links'
import remarkRehype from 'remark-rehype'
import gfm from "remark-gfm";
import html from "remark-html";
import rehypeStringify from "rehype-stringify"
// import rehypeMathjax from "rehype-mathjax"
// import rehypeMathjaxChtml from "rehype-mathjax/chtml.js"
// import remarkMath from "remark-math"
// import rehypeDocument from "rehype-document"
import rehypeFormat from "rehype-format"
import { unified } from "unified"
import remarkParse from "remark-parse"

const mathjaxScript = `<script>
MathJax = {
        loader: {load: ['[tex]/physics', '[tex]/mathtools', '[tex]/color', '[tex]/upgreek', '[tex]/centernot', '[tex]/tagformat']},
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          packages: { '[+]': ['physics', 'mathtools', 'color', 'upgreek', 'centernot', 'tagformat'] },
          color: {
            padding: '5px',
            borderWidth: '2px',
          },
          macros: {
            parn: ["\\biggl(#1\\biggr)", 1],
            sqbr: ["\\biggl[#1\\biggr]", 1],
            pfrac: ["\\biggl(\\dfrac{#1}{#2}\\biggr)", 2],
            ds: "\\displaystyle",
            C: '{\\mathbb C}',
            R: '{\\mathbb R}',
            Q: '{\\mathbb Q}',
            Z: '{\\mathbb Z}',
            ssqrt: ['\\sqrt{\\smash[b]{\\mathstrut #1}}', 1],
            tcdegree: ['\\unicode{xb0}'],
            tccelsius: ['\\unicode{x2103}'],
            tcperthousand: ['\\unicode{x2030}'],
            tcmu: ['\\unicode{x3bc}'],
            tcohm: ['\\unicode{x3a9}'],
            bm: ['\\boldsymbol{#1}', 1],
            ol: ['\\overline{#1}', 1],
            ul: ['\\underline{#1}', 1],
            ub: ['\\underbrace{#1}', 1],
            ubt: ['\\underbrace{#1}_{\\text{#2}}', 2],
            i: '{\\mathrm{i}}',
            e: '{\\mathrm{e}}',
            ve: '{\\varepsilon}',
            slashed: ['{{#1\\!\\!\\!/}}', 1],
            underscore: '_',
          },
          physics: {
            italicdiff: true,
            arrowdel: false,
          },
          tagformat: {
            number: (n) => MathJax.config.section + '.' + n,
            tag:    (tag) => '(' + tag + ')',
            id:     (id) => 'mjx-eqn:' + id.replace(/\\s/g, '_'),
            url:    (id, base) => base + '#' + encodeURIComponent(id),
          },
          tags: 'ams',
          tagSide: 'right',
          tagIndent: '0.8em',
          processRefs: true,
        },
        svg: {
          fontCache: 'global'
        },
        chtml: {
          displayAlign: 'left',
          displayIndent: '2em',
          mtextInheritFont: true,
        }
      };
</script>
<script id="MathJax-script"
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
</script>
`

function surroundMath(text: string) {
  text = text.replace(/\\,/g, "\\\\,").replace(/\\\(/g, "\\\\(").replace(/\\\)/g, "\\\\)").replace(/\\begin{align}/g, "<p>\\begin{align}").replace(/\\end{align}/g, "\\end{align}</p>").replace(/\\begin{align\*}/g, "<p>\\begin{align*}").replace(/\\end{align\*}/g, "\\end{align*}</p>");
  let inlinemath = false;
  let ret = ""
  for (let i = 0; i < text.length; i++)
  {
    if (text[i] == "$")
      inlinemath = !inlinemath;
    if (text[i] == "_" && inlinemath) {
      if (i + 1 >= text.length) // あってはならない
        continue;
      ret += "\\underscore";
      if (text[i + 1] == "\\" || text[i + 1] == "{")
        continue;
      // アンダースコアの後の下付きとしては1文字だけが続くはず
      ret += "{" + text[i + 1] + "}";
      i++;
      continue;
    }
    ret += text[i];
  }
  return ret;
}

export const markdownToHtml = async (file: string) => {
  const result = await unified()
    // .use(html, { sanitize: false })
    .use(remarkParse)
    .use(gfm)
    .use(require("remark-prism")) // eslint-disable-line
    // .use(remarkMath)
    .use(remarkRehype, {
      allowDangerousHtml: true
    })
    .use(rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] })
    // .use(rehypeMathjax, {
    //   tex: {
    //     inlineMath: [['$', '$'], ['\\(', '\\)']],
    //   }
    // })
    // .use(rehypeDocument, {
    //   js: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js',
    //   script: `MathJax = {
    //     loader: {load: ['[tex]/physics', '[tex]/mathtools', '[tex]/color', '[tex]/upgreek', '[tex]/centernot']},
    //     tex: {
    //       inlineMath: [['$', '$'], ['\\(', '\\)']],
    //       packages: { '[+]': ['physics', 'mathtools', 'color', 'upgreek', 'centernot'] },
    //       color: {
    //         padding: '5px',
    //         borderWidth: '2px',
    //       },
    //       macros: {
    //         parn: ["\\biggl(#1\\biggr)", 1],
    //         sqbr: ["\\biggl[#1\\biggr]", 1],
    //         pfrac: ["\\biggl(\\dfrac{#1}{#2}\\biggr)", 2],
    //         ds: "\\displaystyle",
    //         C: '{\\mathbb C}',
    //         R: '{\\mathbb R}',
    //         Q: '{\\mathbb Q}',
    //         Z: '{\\mathbb Z}',
    //         ssqrt: ['\\sqrt{\\smash[b]{\\mathstrut #1}}', 1],
    //         tcdegree: ['\\unicode{xb0}'],
    //         tccelsius: ['\\unicode{x2103}'],
    //         tcperthousand: ['\\unicode{x2030}'],
    //         tcmu: ['\\unicode{x3bc}'],
    //         tcohm: ['\\unicode{x3a9}'],
    //         bm: ['\\boldsymbol{#1}', 1],
    //         ol: ['\\overline{#1}', 1],
    //         ul: ['\\underline{#1}', 1],
    //         ub: ['\\underbrace{#1}', 1],
    //         ubt: ['\\underbrace{#1}_{\\text{#2}}', 2],
    //         i: '{\\mathrm{i}}',
    //         e: '{\\mathrm{e}}',
    //         ve: '{\\varepsilon}',
    //         slashed: ['{{#1\\!\\!\\!/}}', 1],
    //       },
    //       physics: {
    //         italicdiff: true,
    //         arrowdel: false,
    //       },
    //       tags: 'ams',
    //       tagSide: 'right',
    //       tagIndent: '0.8em',
    //       processRefs: true,
    //     },
    //     svg: {
    //       fontCache: 'global'
    //     },
    //     chtml: {
    //       displayAlign: 'left',
    //       displayIndent: '2em',
    //       mtextInheritFont: true,
    //     }
    //   };`
    // })
    .use(rehypeStringify, {
      allowDangerousHtml: true
    })
    .use(rehypeFormat, {
      indent: 2,
      indentInitial: true
    })
    // .process(file.replace(/\\,/g, "\\\\,").replace(/\\\(/g,"\\\\(").replace(/\\\)/g,"\\\\)").replace(/\\begin{align}/g, "<p>\\begin{align}").replace(/\\end{align}/g, "\\end{align}</p>").replace(/\\begin{align\*}/g, "<p>\\begin{align*}").replace(/\\end{align\*}/g, "\\end{align*}</p>") + mathjaxScript.replace(/\\/g, "\\\\"));
  .process(surroundMath(file) + mathjaxScript.replace(/\\/g, "\\\\"));
  // .process(file.replaceAll("\\,", "\\\\,"));
  // console.log(file.replaceAll("\\,", "\\\\,") + mathjaxScript.replaceAll("\\", "\\\\"));
  console.log(surroundMath(file) + mathjaxScript.replace(/\\/g, "\\\\"));

  return result.toString();
};
