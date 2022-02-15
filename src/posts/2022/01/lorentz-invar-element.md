---
title: ローレンツ不変な体積要素
date: "2022-01-31"
tags:
    - phys
---

# 命題

> $\dfrac{c\dd[3]{\bm{p}}}{2E(\bm{p})}$ はLorentz不変である。

# 準備
## デルタ函数との合成

\begin{align}
\delta(f(x))&=\sum_i\dfrac{\delta(x-\alpha_i)}{\abs{f'(\alpha_i)}}\quad(\text{$f$は重解を持たず、$\qty{\alpha_i}_i$は$f$の零点を尽くす})\label{eq:delta-compose}
\end{align}
が成り立つ。このことは、デルタ函数の1つの表示
\begin{align}
  \delta(x)=\lim_{\ve\to 0}\dfrac{1}{\sqrt{2\pi\ve}}\e^{-x^2/2\ve}\label{eq:delta}
\end{align}
を用いて確かめられる。$x\simeq\alpha_i$において
\begin{align}
  f(x)=f'(\alpha_i)(x-\alpha_i)+\order{(x-\alpha_i)^2}
\end{align}
と展開でき、\eqref{eq:delta}に代入すると
<address class='xscroll'>
$$
\begin{aligned}
  \eval{\delta(f(x))}_{x\simeq\alpha_i}&=\lim_{\ve\to 0}\dfrac{1}{\sqrt{2\pi\ve}}\exp\qty[-\dfrac{(x-\alpha_i)^2\abs{f'(\alpha_i)}^2}{2\ve}\qty[1+\order{x-\alpha_i}]]\\
  &=\lim_{\ve'\to 0}\dfrac{1}{\sqrt{2\pi\ve'}\abs{f'(\alpha_i)}}\exp\qty[-\dfrac{(x-\alpha_i)^2}{2\ve'}\qty[1+\order{x-\alpha_i}]]\ \qty(\ve'=\dfrac{\ve}{\abs{f'(\alpha_i)}^2})\\
  &=\dfrac{\delta(x-\alpha_i)}{\abs{f'(\alpha_i)}}
\end{aligned}
$$
</address>
となる。全ての$\alpha_i$について和を取れば\eqref{eq:delta-compose}となる。

## デルタ函数の性質

\begin{align}
  \int_{-\infty}^\infty\dd{x} f(x)\delta(x-a)&=f(a)=f(a)\int_{-\infty}^\infty\dd{x}\delta(x-a)
\end{align}
であることを
\begin{align}
  f(x)\delta(x-a)=f(a)\delta(x-a)\label{eq:delta-convolute}
\end{align}
と書く。デルタ函数は積分されて初めて意味を持つのだ。

## Lorentz変換

$K$系内で速さ$v$で動く質量$m$の粒子について、粒子の進む向きを$K$系の$x$軸に取ることで
\begin{align}
\varLambda^\mu{}_\nu&=\mqty[\dmat{\gamma & \gamma\beta \\ \gamma\beta & \gamma, 1, 1}]
\ \mathrm{where}\ \beta = \dfrac{v}{c}=\dfrac{\abs{\bm{p}}}{\sqrt{\bm{p}^2+m^2c^2}},\ \gamma=\dfrac{1}{\sqrt{1-\beta^2}}\label{eq:lorentz-standard}
\end{align}
によって粒子の静止系$K'$からの変換が与えられる：
\begin{align}
  p^\mu=\mqty(E(\bm{p})/c,\bm{p})^\mathrm{T}=\varLambda^\mu{}_\nu p'^\nu=\varLambda\mqty(E(\bm{p}')/c,\bm{0})^\mathrm{T}.
\end{align}

# 証明

ここでは計量を $(+,-,-,-)$ とする。$\dfrac{c\dd[3]{\bm{p}}}{2E(\bm{p})}$ は、$E(\bm{p})=c\sqrt{\bm{p}^2+m^2c^2}$ より3次元空間内の回転で不変であることは明らかである。よって\eqref{eq:lorentz-standard}の変換で不変であることを示せばよい。

まず$K'$系で考える（全体での式中の$\prime$の数を減らしたいので）。$\bm{p}'$ を固定し、$p'^0$ の関数として見ると
\begin{align}
\theta(p'^0)\delta(p'^\mu p'_\mu-m^2c^2)&=\theta(p'^0)\delta((p'^0)^2-E^2(\bm{p}')/c^2)\\
&=\dfrac{c}{2E(\bm{p}')}\theta(p'^0)\qty\big[\delta(p'^0-E(\bm{p}')/c)+\underbrace{\delta(p'^0+E(\bm{p}')/c)}_{=0\ \text{due to}\theta(p'^0)}]
\end{align}
である（$\theta(p'^0)$がかかっているのは、物理的には$p'^0>0$であることを反映させるため）。$\dd[4]{p'}$ およびLorentz不変な量 $A(\bm{p}')$ をかけて全時空 $p'^\mu\in(-\infty,\infty)^4$ で積分すれば
\begin{align}
  \int_{\mathbb{M}^{1,3}}\dd[4]{p'}\theta(p'^0)\delta(p'^\mu p'_\mu-m^2c^2)A(\bm{p}')&=\int_{\mathbb{R}^3}\dfrac{c\dd[3]{\bm{p}'}}{2E(\bm{p}')}A(\bm{p}').\label{eq:original}
\end{align}

ローレンツ変換\eqref{eq:lorentz-standard}によって\eqref{eq:original}の左辺の各々は
\begin{align}
\dd[4]{p'}&=\det \varLambda^\mu{}_\nu \dd[4]{p}=\dd[4]{p}\\
p'^\mu p'_\mu&=p^\mu p_\mu\\
p'^0&=\gamma p^0+\gamma\beta p^1
\end{align}
と変換される。これらより[不変規格化因子 - EMANの素粒子論](https://eman-physics.net/elementary/invariant_factor.html)
\begin{align}
&\theta(p'^0)\delta(p'^\mu p'_\mu-m^2c^2)\dd[4]{p'}\\
&=\theta(\gamma p^0+\gamma\beta p^1)\delta(p^\mu p_\mu-m^2c^2)\dd[4]{p}\\
&=\theta(\gamma p^0+\gamma\beta p^1)\dfrac{c}{2E(\bm{p})}\qty[\delta(p^0-E(\bm{p})/c))+\delta(p^0+E(\bm{p})/c))]\dd[4]{p}\\
&=\dfrac{c}{2E(\bm{p})}[\underbrace{\theta(\gamma E(\bm{p})/c+\gamma\beta p^1)}_{=1\ \because E/c=\sqrt{\bm{p}^2+m^2c^2}>\abs{p^1}}\delta(p^0-E(\bm{p})/c)\notag\\
&\qquad+\underbrace{\theta(-\gamma E(\bm{p})/c+\gamma\beta p^1)}_{=0}\:\underbrace{\delta(p^0+E(\bm{p})/c)}_{=0}]\dd[4]{p}\ (\eqref{eq:delta-convolute}\text{を用いた})\\
&=\dfrac{c}{2E(\bm{p})}\delta(p^0-E(\bm{p})/c)\dd[4]{p}
\end{align}
となる。こちらもLorentz不変な量 $A(\bm{p})$ をかけて全時空 $p'^\mu\in(-\infty,\infty)^4$（$\iff p^\mu\in(-\infty,\infty)^4$）で積分すれば
\begin{align}
\int_{\mathbb{M}^{1,3}} \dd[4]{p'}\theta(p'^0)\delta(p'^\mu p'_\mu-m^2c^2)A(\bm{p})&=\int_{\mathbb{R}^3}A(\bm{p})\dfrac{c\dd[3]{\bm{p}}}{2E(\bm{p})}\label{eq:comp2}
\end{align}
となる。<span class='has-tooltip relative items-center'><span class='flex tooltip balloon'>$\ds\int\underscore{\mathbb{M}^{1,3}}\dd[4]{p'}\theta(p'^0)\delta(p'^\mu p'\underscore\mu-m^2c^2)A(\bm{p}')=\int\underscore{\mathbb{R}^3}\dfrac{c\dd[3]{\bm{p}'}}{2E(\bm{p}')}A(\bm{p}').$</span>\eqref{eq:original}</span>と<span class='has-tooltip relative items-center'><span class='flex tooltip balloon'>ゲルフォントシュナイダーくぁｗせｄｒｆｔｇｙふじこｌｐ；くぁｗせｄｒｆｔｇｙふじこｌｐ；くぁｗせｄｒｆｔｇｙふじこｌｐ；</span>\eqref{eq:comp2}</span>を見比べて、$A(\bm{p})=A(\bm{p}')$なので体積要素$\dfrac{c\dd[3]{\bm{p}}}{2E(\bm{p})}$も空間$\mathbb{R}^3$全体での積分という意味でLorentz不変である。Minkowski時空のうちどの部分が空間となるかはLorentz変換によって変わることに注意。<span class='has-tooltip relative items-center'><span class='flex tooltip balloon'>$\ds\int\underscore{\mathbb{M}^{1,3}}\dd[4]{p'}\theta(p'^0)\delta(p'^\mu p'\underscore\mu-m^2c^2)A(\bm{p}')=\int\underscore{\mathbb{R}^3}\dfrac{c\dd[3]{\bm{p}'}}{2E(\bm{p}')}A(\bm{p}').$</span>\eqref{eq:original}</span>と<span class='has-tooltip relative items-center'><span class='flex tooltip balloon'>ゲルフォントシュナイダーくぁｗせｄｒｆｔｇｙふじこｌｐ；くぁｗせｄｒｆｔｇｙふじこｌｐ；くぁｗせｄｒｆｔｇｙふじこｌｐ；</span>\eqref{eq:comp2}</span>


# 参考文献

1. 柏 太郎『新版　演習場の量子論』
1. [不変規格化因子 - EMANの素粒子論](https://eman-physics.net/elementary/invariant_factor.html)
1. [ランダウ＝リフシッツ『場の古典論』（前半）（PDF）](http://everything-arises-from-the-principle-of-physics.com/wp-content/uploads/2021/03/classical-theory-of-field-Merged.pdf)
1. ランダウ＝リフシッツ『場の古典論』
1. [特殊相対性理論（PDF）](https://www.astr.tohoku.ac.jp/~chinone/pdf/Special_theory_of_relativity.pdf)
