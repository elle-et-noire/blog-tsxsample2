import rehypeExternalLinks from 'rehype-external-links'
import remarkRehype from 'remark-rehype'
import gfm from "remark-gfm";
import rehypeStringify from "rehype-stringify"
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
          section: 1,
          tagformat: {
            // number: (n) => MathJax.config.section + '.' + n,
            number: (n) => n.toString(),
            // tag:    (tag) => '(' + tag + ')',
            id:     (tag) => 'eqn-id:' + tag,
            url:    (id, base) => base + '#' + encodeURIComponent(id),
          },
          tags: 'ams',
          tagSide: 'right',
          tagIndent: '0.8em',
          processRefs: true,
          useLabelIds: false,         // use label name rather than tag for ids
        },
        svg: {
          fontCache: 'global'
        },
        chtml: {
          displayAlign: 'left',
          displayIndent: '2em',
          mtextInheritFont: true,
        },
        startup: {
          ready() {
            const Configuration = MathJax._.input.tex.Configuration.Configuration;
            const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
            new CommandMap('sections', {
              nextSection: 'NextSection',
              setSection: 'SetSection',
            }, {
              NextSection(parser, name) {
                MathJax.config.section++;
                parser.tags.counter = parser.tags.allCounter = 0;
              },
              SetSection(parser, name) {
                const n = parser.GetArgument(name);
                MathJax.config.section = parseInt(n);
              }
            });
            Configuration.create(
              'sections', {handler: {macro: ['sections']}}
            );
            MathJax.startup.defaultReady();
            MathJax.startup.input[0].preFilters.add(({math}) => {
              if (math.inputData.recompile) {
                MathJax.config.section = math.inputData.recompile.section;
              }
            });
            MathJax.startup.input[0].postFilters.add(({math}) => {
              if (math.inputData.recompile) {
                math.inputData.recompile.section = MathJax.config.section;
              }
            });
          }
        }
      };
</script>
<script id="MathJax-script"
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-chtml.min.js?config=TeX-AMS_HTML">
</script>
`

const stylescript = `
<style>
.xscroll {
  overflow-x: scroll;
}
::-webkit-scrollbar {
  width: 10px,
  height: 10px
}
::-webkit-scrollbar-thumb {
  background: #145055,
  border-radius: 5px
},
::-webkit-scrollbar-track {
  background: transparent
}
</style>
`

function surroundMath(text: string) {
  text = text.replace(/\\\(/g, "\\\\(").replace(/\\\)/g, "\\\\)").replace(/\\begin{align}/g, "\n<address>\\begin{align}").replace(/\\end{align}/g, "\\end{align}</address>\n").replace(/\\begin{align\*}/g, "<p>\\begin{align*}").replace(/\\end{align\*}/g, "\\end{align*}</p>");
  let inlinemath = false;
  let ret = ""
  for (let i = 0; i < text.length; i++)
  {
    if (text[i] == " " && ((i - 1 >= 0 && text[i - 1] == "$") || (i + 1 < text.length && text[i + 1] == "$")))
      continue;

    if (text[i] == "$" && (i - 1 < 0 || text[i - 1] != "$") && (i + 1 >= text.length || text[i + 1] != "$")) {
      inlinemath = !inlinemath;
      // 文中数式と地の文の間隔
      if (inlinemath)
        ret += "$\\hspace{0.2em}";
      else
        ret += "\\hspace{0.2em}$";
      continue;
    }

    // 斜体化け対策
    if (text[i] == "_" && inlinemath) {
      if (i + 1 >= text.length) // あってはならない
        continue;
      ret += "\\underscore";
      if (text[i + 1] == "\\" || text[i + 1] == "{")
        continue;
      // アンダースコアの後の下付きとしては1文字だけが続くはず
      ret += "{" + text[i++ + 1] + "}";
      continue;
    }

    ret += text[i];
  }
  return ret;
}

export const markdownToHtml = async (file: string) => {
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
  .process(surroundMath(file) + mathjaxScript.replace(/\\/g, "\\\\"));
  return result.toString();
};
