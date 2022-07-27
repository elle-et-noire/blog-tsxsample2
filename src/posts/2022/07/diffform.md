---
title: テンソル積、外積代数
date: '2022-07-27'
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
\def\defiff{\stackrel{\mathrm{def}}{\iff}}
$$</div>

# テンソル積の定義

ベクトル空間は体が係数、加群は環が係数。加群はよく知らない。

$V,W$を$\R$上有限次元ベクトル空間とする。$B\colon V\times W\to \R$が双線形形式とは、$B(v,w)$が$v$についても$w$についても線形であることである。「形式」とは実数値関数のことだろう。
\[B_{V,W}\coloneqq \qty{B\mid B\colon V\times W\to R\text{で双線形形式であるもの}}\]
とすればその双対空間としてテンソル積空間
\[V\otimes W\coloneqq (B_{V,W})^\ast\]
を定めることができる。ここでは双対の作用を$\ev{\bullet,\bullet}$のように書き、前後の順番は区別しない（$V^{\ast\ast}\cong V$は標準的な同型であり、$V$と$V^\ast$のどちらが他方の双対であるかというのは些細な違いでしかない）。任意の$z\in V\otimes W$に対して$v\in V,w\in W$が存在して、任意の$B\in B_{V,W}$について（$\Im　B=\R$なので）$\ev{z,B}=B(v,w)$をみたす。この元を$z\eqqcolon v\otimes w$と書くことにする（したがって$z$のテンソル積への分解は一意ではなく$av\otimes(w/a)\ (a\in \R^\times)$の自由度がある）。双対空間もベクトル空間で、$\ev{c_1z_1+c_2z_2,B}=c_1\ev{z_1,B}+c_2\ev{z_2,B}$となるように和とスカラー倍が定まっている。このとき
\begin{align*}
  \ev{(c_1v_1+c_2v_2)\otimes w,B}&=c_1B(v_1,w)+c_2B(v_2,w)\\
  &=c_1\ev{v_1\otimes w,B}+c_2\ev{v_2\otimes w,B}\\
  &=\ev{c_1(v_1\otimes w)+c_2(v_2\otimes w),B}
\end{align*}
となり、テンソル積の線形性が確かめられる。

$v_1,\dots,v_n,w_1,\dots,w_m$を$V,W$の基底とすると、基底における$B\in B_{V,W}$の値が定まれば$B$が完全に定まることから、$V\otimes W$は$\qty{v_i\otimes w_j}_{i,j}$によって張られる。

# テンソル積の普遍性

普遍性と言えば図式の可換性。圏論をやりましょう。$\R$上ベクトル空間$U$、双線形写像（形式ではない！）$B\colon V\times W\to U$について

\begin{xy}
*[white]\xymatrix{V\times W \ar[r]^{\otimes} \ar[rd]_{B} & V\otimes W \ar[d]^{\beta} \\ & U}
\end{xy}
を可換にする$\beta\colon V\otimes W\to U$が存在する。以下説明。$B$を定めると
\begin{align*}
  {}^t\beta\colon U^\ast\to B_{V,W},\ \xi\mapsto \xi\circ B
\end{align*}
なる${}^t\beta$が定まる。またその双対写像
\begin{align*}
  \beta\colon V\otimes W\to U,\ \phi\mapsto \phi\circ{}^t\beta
\end{align*}
も定まり（双対写像の存在は、基底についての行列で考えればただ線形変換の行列の転置を取るだけであることから分かる）、
\begin{align*}
  \ev{\xi,\beta(v\otimes w)}=\ev{{}^t\beta(\xi),v\otimes w}=\xi\circ B(v,w)
\end{align*}
となって$\beta(v\otimes w)=B(v,w)$が成り立つ。

# テンソル代数

上記の普遍性は次のように有用である。$V\otimes W$もやはり$\R$上有限次元ベクトル空間であることから、
\[\varPhi\colon (V_1\times V_2)\times V_3\to V_1\otimes (V_2\otimes V_3),\ (v_1,v_2,v_3)\mapsto v_1\otimes (v_2\otimes v_3)\]
なる鼎線形写像を考えると、普遍性より$F\colon (V_1\otimes V_2)\otimes V_3 \to V_1\otimes (V_2\otimes V_3)$で$F((v_1\otimes v_2)\otimes v_3)=v_1\otimes(v_2\otimes v_3)$なるものが存在する。同様に$G(v_1\otimes(v_2\otimes v_3))=(v_1\otimes v_2)\otimes v_3$なる線形写像も存在し、$G\circ F=\operatorname{id},\,F\circ G=\operatorname{id}$より$(V_1\otimes V_2)\otimes V_3\cong V_1\otimes (V_2\otimes V_3)$が成り立つ。

この同型を同一視することでテンソル積は結合的となり、$T^p(V)\coloneqq \otimes ^p V=V\otimes \dots \otimes V$が定義できる。かき集めて直和を取ると
\[T^\ast(V)\coloneqq \bigoplus_{p=0}^\infty T^p(V)\]
なる無限次元ベクトル空間が得られ、$V$に対するテンソル代数と呼ぶ(ベクトル空間の無限個の直和は、無限個の直積の元のうち有限個を除いて$0$であるようなものを集めて和とスカラー倍を定めたものなので、有限和しか考えない。また有限階テンソルの直和なので元としても無限階テンソルは考えない)。すなわち、結合的な積としてテンソル積を採用した（当然非可換な）代数である。$T^\ast(V)$は$\R$上代数として$V$の基底から生成される。

# 外積代数

\[S=\qty{v\otimes v\mid v\in V}\subset T^\ast(V)\]
から生成される両側イデアル$I(V)$（すなわち$S$の現に両側から$T^\ast(V)$の元を掛け（テンソル積）、線形結合を取ったもの）で$T^\ast(V)$を割ると外積代数が得られる。
\[\varLambda^\ast(V)\coloneqq T^\ast(V)/I(V)\]
自然な射影を$\pi\colon T^\ast(V) \to\varLambda^\ast(V)$とし、$\varLambda^p(V)\coloneqq \pi(\otimes^pV)$が定まる。また$\alpha=\pi(a),\beta=\pi(b)$に対し$\alpha\wedge\beta=\pi(a\otimes b)$として外積が定まっている。テンソル積が結合的なので外積も結合的である。

このように定めると$v,w\in V=\varLambda^1(V)$に対して
\begin{align*}
  0=\pi((v+w)\otimes(v+w))=\pi(v\otimes v+v\otimes w+w\otimes v+w\otimes w)=0+v\wedge w+w\wedge v+0
\end{align*}
となって外積の反可換性が確かめられる。




# 参考文献

1. 本間 泰史『スピン幾何学 ―スピノール場の数学―』（2016、森北出版株式会社）
