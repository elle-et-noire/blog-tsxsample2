import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "~/layouts/layout";
import { Loading } from "~/layouts/loading";
import "~/styles/app.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";

export default function MyApp({ Component, pageProps }: AppProps) {
  const config = {
    loader: { load: ["[tex]/html", '[tex]/physics', '[tex]/mathtools', '[tex]/color', '[tex]/upgreek', '[tex]/centernot'] },
    tex: {
      packages: { "[+]": ["html", 'physics', 'mathtools', 'color', 'upgreek', 'centernot'] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ],
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
        underscore: '_'
      },
      physics: {
        italicdiff: true,
        arrowdel: false,
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
    },
    startup: {
      typeset: false
    }
  };

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <Loading />
      <MathJaxContext version={3} config={config}>
        <MathJax hideUntilTypeset={"first"}>
          <Component {...pageProps} />
        </MathJax>
      </MathJaxContext>
    </Layout>
  );
}
