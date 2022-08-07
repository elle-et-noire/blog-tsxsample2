---
title: テンソル積は双線形形式の双対、外積はその部分空間
date: '2022-08-06'
tags:
  - math
  - manifold
description: "形式的定義。"
---

<div className="hidden">$$
\definecolor{bg}{rgb}{0, 0.168, 0.212}
\newcommand{\lointerv}{[\kern -0.32em\raise 0.1ex{\scriptsize\bullet}\kern -0.37em\raise -0.32ex{\color{bg}\Large\cdot}}
\newcommand{\rointerv}{\kern 0.15em]\kern -0.32em\raise 0.1ex{\scriptsize\bullet}\kern -0.37em\raise -0.31ex{\color{bg}\Large\cdot}\kern -0.07em}
\DeclarePairedDelimiters{\IntervalOO}{\lointerv}{\rointerv}
\newcommand{\ivo}[2]{\IntervalOO{#1, #2}}
\newcommand{\relmiddle}[1]{\mathrel{}\middle#1\mathrel{}}
\newcommand{\bilintouo}{\stackrel{\text{双線形}}{\longrightarrow}}
\newcommand{\bilinto}{\xrightarrow{\text{双線形}}}
\newcommand{\linto}{\xrightarrow{\text{Hom}}}
\newcommand{\qst}{\qq{s.t.}}
\newcommand{\Alt}{\operatorname{Alt}}
$$</div>

ここでは双対の作用を$\ev{\bullet,\bullet}$のように書き（dual pairing）、前後の順番は区別しない（ここでは有限次元ベクトル空間のみを考える。すると$V^{\ast\ast}\cong V$は標準的な同型であり、$V$と$V^\ast$のどちらが他方の双対であるかというのは些細な違いでしかない）。例えば$v\in V,f\in V^\ast$なら$\ev{v,f}=\ev{f,v}=f(v)$である。

また$V\times W\to U$なる双線形写像を$V\times W\bilinto U$と書く。

# テンソル積は双線形形式の双対

ベクトル空間は体が係数（当然標数$0$でないこともある）、加群は環が係数。

$k$を体、$V,W$を$K$上の有限次元ベクトル空間とする。このとき$V\cross W\bilinto k$はベクトル空間であり、その双対空間$\qty(V\cross W\bilinto k)^\ast$もベクトル空間である。

**テンソル積**$\otimes\colon V\cross W\ni (v,w)\mapsto v\otimes w$を
\[v\in V,w\in W;\ v\otimes w\colon \qty(V\cross W\bilinto k)\to k\qst B\mapsto B(v,w)\]
によって定義する。$V\cross W\bilinto k$の線形構造によって$v\otimes w$は線形写像となり、$v\otimes w\in \qty(V\cross W\bilinto k)^\ast$となる。すなわち$\qty{v\otimes w}\eqqcolon V\otimes W\subset \qty(V\cross W\bilinto k)^\ast$。ところで
\[
  \ev{(c_1v_1+c_2v_2)\otimes w,B}=B(c_1v_1+c_2v_2,w)=c_1B(v_1,w)+c_2B(v_2,w)=\ev{c_1(v_1\otimes w)+c_2(v_2\otimes w),B}
\]
で、$w$についても同様なのでテンソル積$\otimes$の双線形性が確かめられる。$\qty{v_i}_i,\qty{w_j}_j$をそれぞれ$V,W$の基底とし、$B^{kl}\colon V\cross W\bilinto k$を$B^{kl}(v_i,w_j)=\delta_i^k\delta_j^l$とすると$\qty{B^{kl}}_{kl}$は$V\cross W\bilinto k$の基底をなす（双線形形式は各引数基底に対するその作用が決まれば一意に定まるので。双対基底の双線形版）。したがって、有限次元ベクトル空間の双対空間は同じ次元を持つので、
\[\dim\qty(V\cross W\bilinto k)^\ast=\dim \qty(V\cross W\bilinto k)=\dim V\dim W.\]
また、$\qty{v_i\otimes w_j}_{ij}$は$V\otimes W$の基底をなす（任意の$v\otimes w$は$v_i\otimes w_j$の線形和に分解できるし、$c^{ij}v_i\otimes w_j=0$ならば$0=(c^{ij}v_i\otimes w_j)(B^{kl})=c^{ij}B^{kl}(v_i,w_j)=c^{kl}$より線形独立である）。よって$\dim V\otimes W=\dim V\dim W$であり、部分空間で次元が等しいので
\[
  V\otimes W=\qty(V\cross W\bilinto k)^\ast.
\]
つまり$\otimes$は全射であり、テンソル積空間とは双線形形式の双対空間である。

ちなみに係数体は大事で、$\sqrt{-1}\otimes_\C\sqrt{-1}=-1\otimes_\C 1\in\C\otimes_\C\C$だが$\sqrt{-1}\otimes_\R\sqrt{-1}\neq -1\otimes_\R 1\in\C\otimes_\R\C$である。

# テンソル積の普遍性は双線形写像を保つ

普遍性と言えば図式の可換性。圏論をやりましょう（自戒）。$k$上のベクトル空間$U$（双対空間を考えるので有限じゃないとまずい？）、双線形写像（形式ではない！）$B\colon V\times W\bilinto U$に対して
\begin{xy}
*[white]\xymatrix{V\times W \ar[r]^{\otimes} \ar[rd]_{B} & V\otimes W \ar[d]^{\beta} \\ & U}
\end{xy}
を可換にする線形写像$\beta\colon V\otimes W\linto U$が一意に存在する（写像の同一性は始域の全ての元について移す先が同じであるかによって判断される）。これがテンソル積空間の普遍性である。以下証明。$B$を定めると
\begin{align*}
  {}^t\beta\colon U^\ast\to \qty(V\cross W\bilinto k),\ \xi\mapsto \xi\circ B
\end{align*}
なる${}^t\beta$が（当然$B$に対して一意に）定まる。またその双対写像
\begin{align*}
  \beta\colon V\otimes W\to U,\ \phi\mapsto \phi\circ{}^t\beta
\end{align*}
も（当然$B$に対して一意に）定まり、任意の$\xi\in U^\ast$に対して
\begin{align*}
  \ev{\beta(v\otimes w),\xi}=\ev{v\otimes w,{}^t\beta(\xi)}=\ev{v\otimes w,\xi\circ B}=(\xi\circ B)(v,w)\equiv \ev{\xi,B(v,w)}
\end{align*}
となって$\beta(v\otimes w)=B(v,w)$が成り立つ（一意性も言えたのはテンソル積空間が双線形形式の双対空間であることを既に示しているおかげである）。

テンソル積空間の普遍性を満たすベクトル空間$T$は$V\otimes W$と同型である。以下説明。$T$もテンソル積空間の普遍性を満たすなら、（$V\otimes W$もやはり$k$上有限次元ベクトル空間であることから）普遍性の図の$U$の部分に$V\otimes W$を入れることで次の左側の可換図式が得られる。
\begin{array}{cc|c}{\begin{xy}
*[white]\xymatrix{V\times W \ar[r]^{B} \ar[rd]_{\otimes} & T \ar[d]^{\gamma} \\   & V\otimes W}
\end{xy}}\ \mqty{\\[25pt]\implies} &{\begin{xy}
*[white]\xymatrix{V\times W \ar[r]^{\otimes} \ar[d]_{\otimes} \ar[rd]_{B} & V\otimes W \ar[d]^{\beta} \\ V\otimes W & T \ar[l]^{\gamma}}
\end{xy}}&{\begin{xy}
*[white]\xymatrix{V\times W \ar[r]^{\otimes} \ar[rd]_{\otimes} & V\otimes W \ar[d]^{\operatorname{id}} \\ & V\otimes W}
\end{xy}}\end{array}
左の図を利用して真ん中の図が得られて$\otimes =B\circ\gamma=\gamma\circ\beta\circ\otimes$となり、右の図の$\otimes=\operatorname{id}\circ\otimes$および一意性から$\gamma\circ\beta=\id$が成り立つ。同様にして$\beta\circ\gamma=\id$も得られ、$T\cong V\otimes W$となる。すなわちテンソル積空間の普遍性を満たすベクトル空間は同型を除いて一意。

# 蒐集してテンソル代数とする

上記の普遍性は次のように有用である。
\[\varPhi\colon (V_1\otimes V_2)\times V_3\to V_1\otimes (V_2\otimes V_3),\ (v_1\otimes v_2,v_3)\mapsto v_1\otimes (v_2\otimes v_3)\]
なる双線形写像を考えると、普遍性より$F\colon (V_1\otimes V_2)\otimes V_3 \to V_1\otimes (V_2\otimes V_3)$で$F((v_1\otimes v_2)\otimes v_3)=v_1\otimes(v_2\otimes v_3)$なるものが存在する。同様に$G(v_1\otimes(v_2\otimes v_3))=(v_1\otimes v_2)\otimes v_3$なる線形写像も存在し、$G\circ F=\operatorname{id},\,F\circ G=\operatorname{id}$より$(V_1\otimes V_2)\otimes V_3\cong V_1\otimes (V_2\otimes V_3)$が成り立つ。

この同型を同一視することでテンソル積は結合的となり、$V^{\otimes d}=\underbrace{V\otimes \dots \otimes V}_{d\text{個}}$を考えることができる。ここでの$d$をテンソルの次数（order, degree）と呼ぶかき集めて直和を取ると
\[T(V)\coloneqq \bigoplus_{r=0}^\infty V^{\otimes d}=k\oplus V\oplus (V\otimes V)\oplus\cdots\]
なる無限次元ベクトル空間が得られ、$V$に対する**テンソル代数**と呼ぶ(ベクトル空間の無限個の直和は、無限個の直積の元のうち有限個を除いて$0$であるようなものを集めて和とスカラー倍を定めたものなので、有限和しか考えない。また有限階テンソルの直和なので元としても無限階テンソルは考えない)。すなわち、結合的な積としてテンソル積を採用した（当然非可換な）代数である。$T(V)$は$k$上の代数として$\qty{V\text{の基底}}\cup\qty{1_k}$から生成される。テンソル代数の元は次数によって直和分解できる。

テンソル代数の階数は行列の階数に当たるもので、単純テンソルの和として表すときの項数の最小値である（テンソル分解？）。

# 外積代数は交代テンソル代数

以降は$V$の係数体$k$の標数を$0$とする。

テンソル積空間の普遍性を利用して
\[\varPsi\colon V\otimes W\to W\otimes V\qst v\otimes w\mapsto w\otimes v\]
が同型であることを示せる。これと任意の置換は互換の積で表せることから
\[\sigma\in \mathfrak{S}_d;\ \sigma^\ast\colon V^{\otimes d}\to V^{\otimes d}\qst v_1\otimes\dots\otimes v_d\mapsto v_{\sigma(1)}\otimes\dots\otimes v_{\sigma(d)}\]
なる自己同型が定まる（$d\le 1$なら恒等写像に同じ）。
\[\Alt_d\coloneqq \dfrac{1}{d!}\sum_{\sigma\in \mathfrak{S}_d}\sgn\sigma\cdot \sigma^\ast\]
と定めると、これは射影になっている：
\[(\Alt_d)^2=\dfrac{1}{(d!)^2}\sum_{\sigma,\tau\in\mathfrak{S}_d}\sgn\sigma\sgn\tau\cdot \sigma^\ast\circ\tau^\ast=\dfrac{1}{(d!)^2}\sum_{\sigma,\upsilon\in\mathfrak{S}_d}\sgn\upsilon\cdot\upsilon^\ast=\Alt_d.\]
これもかき集めて
\[\Alt\coloneqq \bigoplus_{d=0}^\infty \Alt_d=\id\oplus\id\oplus \Alt_2\oplus\cdots\]
とする（つまりそれぞれのテンソル積空間に作用する。演算子の直和は、行列の直和をイメージすればたやすい）。交代テンソル空間を
\[
  A^d(V)\coloneqq \Im\Alt_d\qc A(V)\coloneqq \Im\Alt
\]
と定める。そしてここではこれを外積代数の定義ともする：
\[\varLambda^d(V)\coloneqq A^d(V)\qc \varLambda(V)\coloneqq A(V).\]
（標数$0$でない場合も通用する定義は$\varLambda(V)\coloneqq T(V)/I(V)$で、$I(V)$はテンソル代数において$\qty{v\otimes v\relmiddle{|}v\in V}$の生成する両側イデアルである。標数が$d$以下なら$d!$で割るという操作が行えないことに注意）。またウェッジ積は
\[\wedge\colon \varLambda(V)\times \varLambda(V)\to\varLambda(V)\qst (v,w)\mapsto v\wedge w= \Alt(i(v)\otimes i(w))\]
と定義される。ただし$i\colon \varLambda(V)\to T(V)$は包含写像。テンソル積の結合性と$\Alt$が射影であることからウェッジ積$\wedge$も結合的となる。たとえば
\begin{align*}
  v_1\wedge v_2&=\dfrac{1}{2}(v_1\otimes v_2-v_2\otimes v_1)\\
  (v_1\wedge v_2)\wedge v_3&=\Alt(\Alt(v_1\otimes v_2)\otimes v_3)=\Alt()
\end{align*}

# 参考文献

1. 本間 泰史『スピン幾何学 ―スピノール場の数学―』（2016、森北出版株式会社）
2. [交代テンソルと外積代数（PDF）](http://daisy.math.sci.ehime-u.ac.jp/users/tsuchiya/math/fem/exterior/section2.pdf)
