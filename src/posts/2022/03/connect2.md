---
title: ファイバー束上の接続（江口5章）
date: '2022-03-09'
tags: algebra
---

Levi-Civita接続$\nabla_{\partial_\lambda}$はパラメータ微分$\partial_\lambda$を接平面に射影したもの。Christoffel記号の定義は
\begin{align}
  \nabla_{\partial_i}(\partial_j)\eqqcolon \varGamma^k{}_{ij}\partial_k.
\end{align}
例：
\begin{align}
  \bm{x}&=\mqty[\sin\theta\cos\phi\\\sin\theta\sin\phi\\\cos\theta]\\
  \bm{u}_1\coloneqq \partial_\theta\bm{x}&=\mqty[\cos\theta\cos\phi\\\cos\theta\sin\phi\\-\sin\theta]\\
  \bm{u}_2\coloneqq\partial_\phi\bm{x}&=\mqty[-\sin\theta\sin\phi\\\sin\theta\cos\phi\\0]\\
  g_{ij}&=\mqty[\bm{u}_1\cdot\bm{u}_1&\bm{u}_1\cdot\bm{u}_2\\\bm{u}_2\cdot\bm{u}_1&\bm{u}_2\cdot\bm{u}_2]=\mqty[1&\\&\sin^2\theta]\\
  \partial_\theta\bm{u}_1&=-\bm{x}\\
  \partial_\phi\bm{u}_1&=\partial_\theta\bm{u}_2=\cot\theta\bm{u}_2\\
  \partial_\phi\bm{u}_2&=-\sin^2\theta\bm{x}-\cos\theta\sin\theta\bm{u}_1\\
  \nabla_{\partial_\theta}(\partial_\theta)&=0\\
  \nabla_{\partial_\phi}(\partial_\theta)&=\nabla_{\partial_\theta}(\partial_\phi)=\underbrace{\cot\theta}_{\varGamma^2{}_{12}}\partial_\phi\\
  \nabla_{\partial_\phi}(\partial_\phi)&=\underbrace{-\cos\theta\sin\theta}_{\varGamma^1{}_{22}}\partial_\theta\\
\end{align}


> $x(t)\,\text{が測地線}\iff\nabla_{\dot{x}}(\dot{x})=0.$

上の例では緯線の速度ベクトルは$\bm{u}_2$となって$\nabla_{\dot{x}}(\dot{x})=-\cos\theta_0\sin\theta_0\bm{u}_1$。よって赤道では測地線となる（極は特異点なので考えない）。経線はいつでも測地線。

> ベクトル$s(t)$が曲線$x(t)$に沿って平行移動する$\iff \nabla_{\dot{x}}(s)=0.$

$S^2$上で$(1,0,0),(0,1,0),(0,0,1)$を測地線で結んだ三角形の周りを平行移動で一周させると$\pi/2$回転して戻ってくる。これは三角形の面積に等しい。

![english](https://user-images.githubusercontent.com/51241098/157424196-734c0cd8-c41a-4b32-8f24-87979a0c4b2e.png)
ホロノミーは曲率に関係している。

## 一般化

### ・前提

\begin{align}
  E&\colon \text{ベクトル束}\\
  \qty{\bm{e}_i}_i&\colon \text{$U$近傍の局所フレーム（切断の集まり）}\\
  Z=\bm{e}_iz^i&\colon \pi^{-1}(U)\text{のベクトル（ファイバー）の局所的な表現}\\
  (x,z)&\colon\text{局所自明化}\\
  s(x)=\bm{e}_iz^i(x)&\colon\text{局所切断とベクトル値関数$M\to\mathbb{R}^k$の同一視}\\
  TE&\colon(\partial/\partial x^\mu,\partial/\partial z^i)\\
  T^\ast E&\colon (\dd{x^\mu},\dd{z^i})
\end{align}

### ・平行移動
> $s$が$x$に沿って平行移動する$\iff \underbrace{\nabla_{\dot{x}}s=0}_{\text{初期条件に対して解が一意}}$

\begin{align}
  \nabla_{\partial_\mu}\bm{e}_i&\eqqcolon\bm{e}_j\varGamma^j{}_{\mu i}\label{eq:christoffeldef}\\
  \nabla_{\dot{x}}s&=\nabla_{\dot{x}^\mu\partial_\mu}(\bm{e}_iz^i)\\
  &=\dot{x}^\mu[(\nabla_{\partial_\mu}\bm{e}_i)z^i+\bm{e}_j\partial_\mu z^j]\\
  &=\dot{x}^\mu\bm{e}_j[\varGamma^i_{\mu i}z^i+\partial_\mu z^j]=0\label{eq:paratrans}
\end{align}

### ・接平面

\begin{align}
  x(t)\in M\xrightarrow{\text{持ち上げ}}c(t)=(x^\mu(t),z^i(t))\in M\times F
\end{align}

$\dot{z}^i$は\eqref{eq:paratrans}で決まり、
\begin{align}
  \dv{t}&=\dot{x}^\mu\pdv{x^\mu}+\dot{z}^i\pdv{z^i}\eqqcolon \dot{x}^\mu D_\mu
\end{align}

\begin{align}
  T_x(E)&=V_x(E)\oplus H_x(E)=\ev{\pdv{z^i}}\oplus\ev{D_\mu}
\end{align}

### ・余接空間的

\begin{align}
  \omega^i&=\dd{z}^i+\varGamma^i{}_{\mu j}\dd{x}^\mu z^j\in T^\ast E\label{eq:omegadef}
\end{align}
で定める（平行移動方程式の左辺に対応）。
\begin{align}
  \ev{\omega^i,D_\mu}&=0\\
  \ev{\omega^i,\partial_{z^j}}&=\delta_{ij}\quad(\text{$z$と$x$は直交})
\end{align}
つまり$\omega^i$は$T(E)$のうち$V(E)$だけを取り出す射影。
\begin{align}
  \varGamma^i{}_j&\coloneqq\varGamma^i{}_{\mu j}\dd{x}^\mu\\
  \nabla s&=\bm{e}_i\otimes(\dd{z}^i(x)+\varGamma^i{}_jz^j(x))\in E\otimes T^\ast M\eqref{eq:totaldiffdef}\\
  \nabla Z&=\bm{e}_i\otimes \omega^i\in E\otimes T^\ast E\qqtext{where}Z=\bm{e}_iz^i\in\pi^{-1}(U)
\end{align}
$$
\def\uo{{\text{ファイバー}\,Z}}
\def\uon{{\text{}\,s}}
$$
\begin{xy}
*[white]\xymatrix{\uo \ar[r] & \text{共変微分}\nabla(Z),\,\text{接続形式}\,\omega^i \ar[d]^{\text{引き戻し}} \\\uon \ar[u]^{\text{局所切断}\,z_i(x)} \ar[r] & \nabla(s),\dd{z}^i(x)+\varGamma^i{}_jz^j(x)}
\end{xy}

### ・公理的

方向共変微分が満たすべき性質：
\begin{align}
  \nabla_X(s+s')&=\nabla_Xs+\nabla_Xs'\\
  \nabla_{X+X'}s&=\nabla_Xs+\nabla_{X'}s\\
  \nabla_X(sf)&=s\cdot X(f)+(\nabla_Xs)f\\
  \nabla_{fX}(s)&=f\nabla_X(s)\\
  s&\colon M\to E\\
  X&\colon M\text{上のベクトル場}\\
  f&\colon M\to \mathbb{R}
\end{align}

全共変微分が満たすべき性質
\begin{align}
  \nabla(s+s')&=\nabla s+\nabla{s'}\\
  \nabla(sf)&=s\otimes\dd{f}+(\nabla{s})f
\end{align}

上2つの関係：
\begin{align}
  \nabla s&=\nabla_{\partial^\mu}s\otimes\dd{x^\mu}\\
  \nabla_Xs&=\ev{\nabla{s},X}\\
  X&\in C^\infty(TM)\\
  \nabla{s}&\in C^\infty(E\otimes T^\ast M)
\end{align}

$p$形式の切断に対して
\begin{align}
  \nabla(s\otimes \theta)&=\nabla s\wedge\theta+s\otimes\dd{\theta}\label{eq:pformdiff}\\
  s&\in C^\infty(E)\\
  \theta&\in C^\infty (\Lambda^p M)\quad(\text{$M$上の$p$形式})
\end{align}

### ・フレームの変換的

\begin{align}
  \bm{e}'_j&=\bm{e}_i\otimes\varPhi^{-1}_{ij}(x)\\
  z'^i&=\varPhi_{ij}(x)z^j\\
  s(x)&=s'(x)\\
  \nabla \bm{e}'_j&=\nabla\bm{e}_i\otimes \varPhi^{-1}_{ij}+\bm{e}_i\otimes\dd{\varPhi^{-1}_{ij}}\\
  &=\bm{e}'_l\varPhi_{lk}\varGamma^k{}_i\otimes \varPhi^{-1}_{ij}+\bm{e}'_{l}\varPhi_{li}\otimes\dd{\varPhi^{-1}_{ij}}\quad\eqref{eq:christoffeldef}\\
  &=\bm{e}'_i\otimes \underbrace{(\varPhi_{ik}\varGamma^k{}_l\varPhi^{-1}_{lj}+\varPhi_{ik}\dd{\varPhi^{-1}_{kj}})}_{\varGamma'^i{}_j}
\end{align}
この変換則に従うものを$\varGamma^i{}_j$と定義する。共変微分はフレームの選び方に依らない。

# 5.2 曲率

### ・平行移動的

曲率は平行移動の経路依存度。

### ・接空間的

\begin{align}
  \comm{D_\mu}{D_\nu}&=-R^i_{j\mu\nu}z^j\pdv{z^i}\quad(\text{垂直成分しかない})
\end{align}
$R^i_{j\mu\nu}$は$\varGamma^i_{\mu j}$を用いてリーマンテンソルのように決まる。

### ・余接空間的

\begin{align}
  R^i{}_j&=\dd{\varGamma}+\varGamma\wedge\varGamma=\dfrac{1}{2}R\dd{x}\wedge\dd{x}\\
  R^i{}_jz^j&=\dd{\omega^i}+\varGamma^i{}_j\wedge\omega^j\quad\eqref{eq:omegadef}\\
  \because \dd{\omega}&=\dd{\varGamma}z-\varGamma\wedge\dd{z},\,\varGamma\wedge\omega=\varGamma\wedge\dd{z}+\varGamma\wedge\varGamma z
\end{align}

### ・公理的

曲率は共変微分の非可換度。(5.15)の確認には\eqref{eq:totaldiffdef}を使おう。

\begin{align}
  R&=\dfrac{1}{2}R(\partial_\mu,\partial_\nu)\dd{x^\mu}\wedge\dd{x^\nu}\quad(\text{ベクトルかける2形式？})
\end{align}

### ・フレーム変換的

\begin{align}
  \varGamma'&=\varPhi\varGamma\varPhi^{-1}\underbrace{+\varPhi\dd{\varPhi^{-1}}}_{-\dd{\varPhi}\varPhi^{-1}}\\
  \dd{\varGamma'}+\varGamma'\wedge\varGamma'&=\dd(\varPhi\varGamma\varPhi^{-1}+\varPhi\dd{\varPhi^{-1}})+(\varGamma')\wedge(\varGamma')\\
  &=\dd\varPhi\wedge\varGamma\varPhi^{-1}+\underbrace{\varPhi\dd{\varGamma}\varPhi^{-1}}_{\text{残る}}-\varPhi\varGamma\wedge\dd{\varPhi^{-1}}+\dd{\varPhi}\wedge\dd{\varPhi^{-1}}\\
  &\quad +\underbrace{\varPhi\varGamma\wedge\varGamma\varPhi^{-1}}_{\text{残る}}+\varPhi\varGamma\wedge\dd{\varPhi^{-1}}-\dd{\varPhi}\wedge\varGamma\varPhi^{-1}-\dd{\varPhi}\wedge\dd{\varPhi^{-1}}
\end{align}

曲率は平坦な座標を得る手がかり。

$\varGamma$ is a pure gauge（$-\dd{\varPhi^{-1}}^i{}_k\varPhi^k{}_j$）なら平坦な座標が陽に得られるし、逆にフロベニウスの定理から、平坦な座標が得られれば曲率は pure gauge として表せる（らしい）。

# 5.3 接束の捩率と接続

共変微分の成分を考えるには$TM$上の接続が必要（$T^\ast M$上の接続と同値）。

曲率2形式の定義で登場した$\laplacian$は接続に依存しないので$;\mu;\nu$とは違うし空間も違う。

$TM$で計量が決まれば、捩率$0$と計量が共変微分で不変の条件からLevi-Civita接続が一意に決まる。

# 5.4 同伴束上の接続

### 双対束

> $\nabla$がRiemannian$\iff \varGamma^i{}_{\mu j}=-\varGamma^j{}_{\mu i}$

### Whitney束

### 引き戻し束

$R$は反可換性が保たれるように引き戻す。

### 射影された接続

$\nabla\equiv 0$でも$\nabla^\pi\equiv0$とは限らない。

$\pi$があるファイバー計量に対する直交射影(?)で$\nabla$がRiemannianなら$\nabla^\pi$もRiemannianらしい。

# 5.5 主束上の接続

## Maurer-Cartan形式

$g^{-1}\dd{g}$は左不変。
\begin{align}
  \underbrace{\dd{g^{-1}}}_{-g^{-1}\dd{g}g^{-1}}\wedge\dd{g}+g^{-1}\dd{g}\wedge g^{-1}\dd{g}&=0\\
  \dd{\qty(\varPhi_a\dfrac{\lambda_a}{2\i})}+\qty(\varPhi_b\dfrac{\lambda_b}{2\i})\wedge\qty(\varPhi_c\dfrac{\lambda_c}{2\i})&=0\\
  \dfrac{\lambda_a}{2\i}\qty(\dd{\varPhi_a}+\dfrac{1}{2}f_{abc}\varPhi_b\wedge\varPhi_c)&=0\\
  \lambda_af_{abc}&=-\i\lambda_b\lambda_c\quad(\text{ここでの構造定数の定義})
\end{align}

## 平行移動的

\begin{align}
  A(x)&=A^a{}_\mu(x)\dfrac{\lambda_a}{2\i}\dd{x^\mu}\in T^\ast M\\
  x(t)&\colon \text{$M$上の曲線}\\
  g_{ij}(t)&\colon \text{切断（行列）}
\end{align}

> $\dot{g}_{ik}+A_{\mu ij}(x)\dot{x}^\mu g_{jk}=0\implies g_{ij}$は$x$に沿って平行移動する。

$i,j,k$は行列添字。$A_\mu = A^a{}_\mu\dfrac{\lambda_a}{2\i}$と思われる。
あるいは
\begin{align}
  g^{-1}\dd{g}{t}+g^{-1}\qty(A^a{}_\mu(x)\dfrac{\lambda_a}{2\i}\dd{x^\mu}{t})g=0.
\end{align}

## 接空間的

\begin{align}
  \dd{t}&=\dot{x}^\mu\underbrace{\qty(\pdv{x^\mu}-A^a{}_\mu(x)\overline{L}_a)}_{D_\mu}\\
  T(P)&=H(P)\oplus V(P)
\end{align}
右作用で分解は不変（後述）。

## 余接空間的

\begin{align}
  \omega&=g^{-1}Ag+\underbrace{g^{-1}\dd{g}}_{\text{垂直成分}}\in T^\ast P\\
  g\to gg_0&\implies \omega\to g_0^{-1}\omega g_0\quad(\because\text{$A$は$g$への右作用で不変})
\end{align}
$H(P)=\operatorname{Ker}\omega$なので分解も右作用で不変。

曲率2形式
\begin{align}
  \varOmega&=\dd{\omega}+\omega\wedge\omega=g^{-1}Fg\quad(\text{垂直成分を持たない})\\
  F&=\dd{A}+A\wedge A\\
  \varOmega&\to g_0^{-1}\varOmega g_0\quad(\text{$A$が不変なので$F$も不変})\\
  \text{Bianchi恒等式}&\colon \dd{\varOmega}+\omega\wedge\varOmega-\varOmega\wedge\omega=0
\end{align}

## ゲージ変換

変換関数はファイバーの左作用としてはたらく。

ベクトル束と主束で変換の仕方が似ているもの：
\begin{align}
  z\leftrightarrow g\\
  \varGamma\leftrightarrow A\\
  R\leftrightarrow F
\end{align}

$A$は$\omega$の、$F$は$\varOmega$の引き戻し。