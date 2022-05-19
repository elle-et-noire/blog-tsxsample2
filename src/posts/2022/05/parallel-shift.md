---
title: ベクトルの曲面上の平行移動@ℝ³
date: '2022-05-19'
tags:
  - math
---

<div className="hidden">$$\def\ee{\mathbb{e}}$$</div>

# 接平面間のベクトルの平行移動

　曲面上の曲線$R(t)$に沿って平面上の接ベクトルを平行移動することを考える。$t$を指定すれば曲面上の点が定まり、したがってその点における局所的な正規直交基底$\ee_1,\ee_2,\ee_3$を指定できる。これらのベクトルは、曲面が埋め込まれている$\R^3$内のベクトルである。ただし$\ee_1\cross\ee_2=\ee_3,\norm{\ee_i}=1$。$t$が変化して曲線上で点が移動するにつれて、基底ベクトルも変化することになるので、基底ベクトルは時間依存性を持つ。
　曲線上の各点において接ベクトル
\begin{align}
\bm{v}(t)\coloneqq\cos\alpha(t)\ee_1(t)+\sin\alpha(t)\ee_2(t)
\end{align}
を定められる。全ての$t$について集めれば、これは曲線$R(t)$上のベクトル場をなすことになる。さらに
\begin{align}
\bm{w}(t)\coloneqq\ee_3(t)\cross\bm{v}(t)\label{eq:w-def}
\end{align}
と定めれば、$(\bm{v},\bm{w},\ee_3)$は正規直交基底をなす。以降で、$(\bm{v},\bm{w},\ee_3)$を平行移動させるには$\alpha(t)$をどう定めればよいか考える。

　平行移動させるにはそもそも平行移動を定義する必要がある。ここでは
\begin{align}
\text{$(\bm{v},\bm{w},\ee_3)$が平行移動する}\iff \ee_3\cross \dd{\bm{v}}=0\label{eq:parallel-cond-real}
\end{align}
とする。つまり$\bm{v}$の変化を$\ee_3$に平行な方向のみに制限する。これに左から$\ee_1\cross$をかけるとベクトル解析の公式より
$$
0=\ee_1\cross (\ee_3\cross\dd{\bm{v}})=(\ee_1\cdot\dd{\bm{v}})\ee_3-(\ee_1\cdot\ee_3)\dd{\bm{v}}
$$
となり（あるいは$\ee_3$方向に制限された移動は$\ee_1$とは直交するという理解もできる）、
$$
\ee_1\cdot\dd{\bm{v}}=0
$$
が分かる。ところで
\begin{align*}
\dd{\bm{v}}&=-\sin\alpha(t)\dd{\alpha(t)}\ee_1(t)+\cos\alpha(t)\dd{\ee_1}\\
&\quad +\cos\alpha(t)\dd{\alpha(t)}\ee_2(t)+\sin\alpha(t)\dd{\ee_2}
\end{align*}
なので、$\norm{\ee_1}^2=1$を微分して$\dd{\ee_1}\cdot\ee_1=0$が成り立つことに気をつければ
\begin{align}
\ee_1\cdot\dd{\bm{v}}=0\iff \dd{\alpha}=\ee_1\cdot\dd{\ee_2}\eqqcolon \omega_{21}
\end{align}
と、平行移動するための$\alpha(t)$の条件が決まる。つまり、$\dd{\ee_2}$は$\ee_2$と直交しているので$\ee_1,\ee_3$成分しか持たないが、そのうち$\ee_1$成分だけで$\dd{\alpha}$が決まる（変化の$\ee_3$成分は$\bm{v}$もその方向に動くことで打ち消す）、というのが平行移動の条件である。この$\omega_{21}$を**接続**と呼ぶ。$\ee_1\cdot\ee_2=0$を微分して
\begin{align}
  \omega_{12}=-\dd{\ee_1}\cdot\ee_2
\end{align}
も分かる。これはスピン接続の反対称性そのものである。

# 複素ベクトル表示

　量子力学へ近づけていくためにベクトルを複素表示する。すなわち局所座標系を
\begin{align}
  \bm{n}&=\dfrac{\ee_1(t)+\i\ee_2(t)}{\sqrt{2}}
\end{align}
という1つの複素ベクトルで表し、平行移動する座標系は
\begin{align}
  \psi&=\dfrac{\bm{v}(t)+\i\bm{w}(t)}{\sqrt{2}}=\bm{n}(t)\e^{-\i\alpha(t)}
\end{align}
と表すことにする。

　平行移動の条件\eqref{eq:parallel-cond-real}より
\begin{align}
\ee_3\cross \dd{\bm{v}}=0\iff \dd{\bm{w}}=\dd{\ee_3}\cross\bm{v}\stackrel{\cssId{parallel-iff}{(\ast)}}{\implies} \bm{v}\cdot \dd{\bm{w}}=0\stackrel{\bm{v}\cdot\bm{w}=0}{\iff} \bm{w}\cdot \dd{\bm{v}}=0\label{eq:parallel-cond-iff}
% \ee_3\cross \dd{\bm{v}}\implies 0=\bm{w}\cross(\ee_3\cross \dd{\bm{v}})=(\bm{w}\cdot\dd{\bm{v}})\ee_3\iff \bm{w}\cdot \dd{\bm{v}}=0
\end{align}
という条件が得られる。一方で、$\href{#parallel-iff}{(\ast)}$は同値条件である。つまり、まず\eqref{eq:w-def}に左から$\bm{v}\cross$をかけて
\begin{align}
  \ee_3=\bm{v}\cross\bm{w}
\end{align}
が分かる。微分して
\begin{align}
  \dd{\ee_3}=\dd{\bm{v}}\cross\bm{w}+\bm{v}\cross\dd{\bm{w}}
\end{align}
なので、
\begin{align}
  \bm{v}\cdot\dd{\bm{w}}=0\implies \bm{v}\cross\dd{\ee_3}&=0+\bm{v}\cross(\bm{v}\cross\dd{\bm{w}})=-\dd{\bm{w}}
\end{align}
となる。つまり、実は\eqref{eq:parallel-cond-iff}で
\begin{align}
  \dd{\ee_3}\cross\bm{v}\implies \bm{v}\cdot \dd{\bm{w}}=0
\end{align}
は同値条件だったのだ。

\eqref{eq:parallel-cond-iff}より平行移動の条件を
\begin{align}
  \Im (\psi^\ast\dd{\psi})=\dfrac{1}{2}[\bm{v}(t)\cdot\dd{\bm{w}}(t)-\bm{w}(t)\cdot\dd{\bm{v}(t)}]=0
\end{align}
と定められる。また、$\norm{\psi}^2=1$より
\begin{align}
  \Re (\psi^\ast\dd{\psi})=0
\end{align}
も成り立つ。