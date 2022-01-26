---
title: Next.js を触り始めた
date: "2022-01-26"
tags:
    - next
---

## はじめに

html+MathJax ベタ書きだとスマホでの表示が崩れて困っていた。
Next.js ならスマホでも崩れないという風の噂を聞いて導入してみた。

## 環境

- Host: GitHub Pages
- Framework: Next.js
- CSS: TailwindCSS
- Formula: MathJax

$a$

https://event.phys.s.u-tokyo.ac.jp/physlab2021/advent-calendar/

[物理学科 Advent Calendar 2021](https://event.phys.s.u-tokyo.ac.jp/physlab2021/advent-calendar/)

\\( a\\)
\\[ a \\]
,\,,\,,\\,
$$
\int_{-\infty}^\infty dx\,e^{-ax^2}=\sqrt{\dfrac{\pi}{a}}
$$

$$
\int_{-\infty}^\infty \dd{x}e^{-ax^2}=\sqrt{\dfrac{\pi}{a}}
$$

$$
\begin{align}
\int_{-\infty}^\infty \dd{x}e^{-ax^2}&=\sqrt{\dfrac{\pi}{a}}\\\\
y&=x\\\\
z\in\mathbb{C}, x\in\R
\end{align}
$$

# 表
| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       | This        | This         |
| column     | column      | column       |
| will       | will        | will         |
| be         | be          | be           |
| left       | right       | center       |
| aligned    | aligned     | aligned      |

うおお

<script>
MathJax = {
        loader: {load: ['[tex]/physics', '[tex]/mathtools', '[tex]/color', '[tex]/upgreek', '[tex]/centernot']},
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          packages: { '[+]': ['physics', 'mathtools', 'color', 'upgreek', 'centernot'] },
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
        }
      };
</script>
<script id="MathJax-script"
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
</script>