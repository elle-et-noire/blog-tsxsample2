---
title: 江口7章
date: '2022-03-31'
tags: geometry
---

$$
\def\Im{\operatorname{Im}}
\def\Ker{\operatorname{Ker}}
\def\Td{\operatorname{Td}}
\def\ch{\operatorname{ch}}
$$

> $\Delta_p=D_p^\ast D_p+D_{p-1}D^\ast_{p-1}$が単射$\iff \Ker D_p=\Im D_{p-1}$.

\begin{align}
  \Ker D_p\ni f&=f_1+f_2\in \underbrace{\Ker D^\ast_{p-1}\oplus\Im D_{p-1}=C^\infty(E_p)}_{\eqref{eq:adjoint-oplus}}\\
  \ev{D_{p-1}^\ast f,g}&=\ev{f,D_{p-1}g}\therefore \Ker D_{p-1}^\ast=(\Im D_{p-1})^\perp\label{eq:adjoint-oplus}\\
  \text{冪零性より}D_pf_2&=0\therefore D_pf_1=0\therefore f_1\in \Ker D_p\cap\Ker D^\ast_{p-1}\text{より}\Delta_pf_1=0.
\end{align}
冪零性から来る$\Ker D_p\supset \Im D_{p-1}$に気を付ければ
\begin{align}
  \Delta_p\text{が単射}\iff \Ker D^\ast_{p-1}=\{0\}\iff \Ker D_p=\Im D_{p-1}
\end{align}
参考：[幾何学A 多様体上の楕円型微分作用素 -Hodge theorem-](http://www.f.waseda.jp/homma_yasushi/homma2/download/hodge-kougi.pdf)
全射性は言えていないが、$E_{p-1}$,$E_p$,$E_{p+1}$のファイバー次元が等しければ、表象がfull rankの行列になるので楕円型作用素と言えよう。

と書いたけれど、\eqref{eq:adjoint-oplus}が危うい。$\dim \Ker D^\ast = \dim\Ker D$なら次元定理$\dim \Ker D_{p-1}+\dim\Im D_{p-1}=C^\infty(E_{p-1})$および各ファイバーの次元が等しいという仮定の下直和分解が言えるが、$\operatorname{ind}D=\dim\Ker D-\dim\Ker D^\ast$などもあることから一般には一致しなさそう。でも正方行列ならエルミート転置を取っても階数は変わらないから一致する気もする。

## 捻れDolbeault複体

\begin{align}
  \Td(\mathcal{F})&=1+\dfrac{1}{2}c_1(\mathcal{F})+\cdots\\
  \ch{\mathcal{F}}&=\dim V+c_1(\mathcal{F})+\dots\\
  \operatorname{ind}(\overline{\partial}_V)&=\dfrac{1}{2}\dim V\int_M c_1(TM^+)+\int_Mc_1(V)
\end{align}

## $S^4$上の$\mathrm{SU}(2)$主束

\begin{align}
  \nu_+-\nu_-=-\int_Mc_2(V)=-\dfrac{1}{8\pi^2}\int_M\Tr(\varOmega\wedge\varOmega)=\mp\dfrac{1}{8\pi^2}\int_M\Tr(\varOmega\wedge\ast\varOmega)
\end{align}
$\ds\int_M\varOmega\wedge\ast\varOmega<0$でないとおかしい？

自己双対の場合は$\nu_-=0$、反自己双対の場合は$\nu_+=0$となるらしい。

## $\C P^1=S^2$

$\C P^1$は$(z_0,z_1)\in\C^2\setminus\{0\}$と$(\alpha z_0,\alpha z_1)\ (\alpha\in\C\setminus\{0\})$を同一視したもので、$z_1/z_0\in\C\cup\{\infty\}$と同一視できる（はず）。