---
title: テンソル積は双線形形式の双対、外積はその部分空間
date: '2022-08-06'
tags:
  - math
  - manifold
description: "テンソル積、外積代数の1つの厳密な定式化。フランケンシュタインみたいな記事です。"
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
\newcommand{\span}[1]{\left\langle#1\right\rangle}
\newcommand{\Hom}{\operatorname{Hom}}
\newcommand{\L}{\mathcal{L}}
$$</div>

- ここでは多重線形写像を$\L(V,W;U)$のように書く。これは「$V\times W\to U$で双線形なもの」という言い方もするが、それは$V,W$の線形構造を保つという意味であり、積空間としての線形構造は関係ない。
- 断らない限り体の標数は任意で、線形空間の次元は無限でも有限でもありうるとする。
- 気分で双対の作用を$\ev{\bullet,\bullet}$のように書く。
- 線形空間を表す記号に$\ast$がつく場合は双対空間を表す。無限次元線形空間の双対空間は元の空間と同型ではない（Wikipediaによると必ず大きくなる）ことに注意。有限次元なら基底を定めることで同型になる。
- 定義を行う部分は$\coloneqq$を用い、定義の再登場や定義から等しいことを表す場合は$\equiv$を用いる。

# 直和は安全な直積

$I$を任意の添字集合とする。$k$線形空間の族$(V_i)_{i\in I}$の積集合$\prod_{i\in I}V_i$に、$(x_i)_i+(y_i)_i=(x_i+y_i)_i$および$a(x_i)_i=(ax_i)_i$で線形構造を定めた空間を$(V_i)_i$の**直積**と呼ぶ。また
\[\bigoplus_{i\in I}V_i\coloneqq \qty{(x_i)_i\in \prod_{i\in I}V_i\relmiddle{|}\text{有限個の$i$を除いて$x_i=0$}}\]
は直積の部分空間であり、$(V_i)_i$の**直和**と呼ぶ。$k^I\coloneqq \prod_{i\in I}k$および$k^{(I)}\coloneqq \bigoplus_{i\in I}k$と表す（$I$の各元について$k$の各元通りの選び方がある）。$I$が有限集合なら直和と直積は一致し、無限集合なら直和は直積の真部分空間である。

また$V$の元の族$(x_i)_{i\in I}$について
\[\span{x_i\relmiddle{|}i\in I}_k\coloneqq \qty{\sum_{i\in I}a_ix_i\relmiddle{|}(a_i)_i\in k^{(I)}}\]
で線形包を表す。$(a_i)_i\in k^{(I)}$より有限和しか取られないことに注意。

# 射影による直和分解

線形空間$V$の線形写像$f\colon V\to V$が$f^2=f$を満たすとする（このような$f$を**射影**という）。$\eval{f}_{\Im f}$（始域を制限した写像）は$\Im f$の恒等写像で特に全射である。よって任意の$v\in V$について$v'\in \Im f$が存在して$f(v)=f(v')$つまり$v-v'\in \Ker f$となる。よって$v=v'+(v-v')$となり、$V=\Im f\oplus \Ker f$と直和分解できる。またここから$\Ker f=\Im(\id- f)$も分かる。

# テンソル積は積空間の商空間

線形空間は体が係数（当然標数$0$でないこともある）、加群は環が係数。ここでは明記しない限り無限次元線形空間も考慮に入れる。

$V\times W$に、まず全ての元を基底とする線形構造を入れたいが、それは$V\times W$の全ての元に係数を対応させることで成される。また無限和は考えたくないので、$k^{(V\times W)}$を採用する（$V,W$が無限次元のとき、有限和だけ考えることを正確に記述するためにこの考え方が必要）。
\[k^{(V\times W)}\ni e_{v,w}\colon (v',w')\mapsto\delta_{vv'}\delta_{ww'}\]
なる写像（これが$(v,w)$に一対一対応する）を定義すると$k^{(V\times W)}=\span{e_{v,w}\relmiddle{|}v\in V,w\in W}_k$が成り立つ。また
\begin{align*}
  R_1&\coloneqq \span{e_{v+v',w}-e_{v,w}-e_{v',w}\relmiddle{|}v,v'\in V,w\in W}_k\\
  R_2&\coloneqq \span{e_{v,w+w'}-e_{v,w}-e_{v,w'}\relmiddle{|}v\in V,w,w'\in W}_k\\
  R_3&\coloneqq \span{e_{av,w}-ae_{v,w}, e_{v,aw}-ae_{v,w}\relmiddle{|}a\in k,v\in V,w\in W}_k\\
  R&\coloneqq R_1+R_2+R_3
\end{align*}
とし、$V\otimes W\coloneqq k^{(V\times W)}/R$でテンソル積空間を定める（4行目の$+$は$\cup$と考えてもその線形包と考えても、商として得られる空間は同じはず）。$V\otimes W$には商空間としての$k$線形構造が入っている。またテンソル積は
\[\otimes\colon V\times W\to V\otimes W\qst (v,w)\mapsto v\otimes w\coloneqq \overline{e_{v,w}}\]
と、代表元で定める。$\otimes$は生成系への全射である。

# テンソル積空間の普遍性は双線形写像を保つ

$U$を任意の$k$線形空間、$\pi\colon k^{(V\times W)}\to k^{(V\times W)}/R$を自然な全射、$e\colon V\times W\to k^{(V\times W)},\, (v,w)\mapsto e_{v,w}$とすると以下のような系列が考えられる。
\begin{array}{ccccc}
  \Hom(k^{(V\times W)}/R,U)&\xrightarrow{\pi^\ast}&\Hom(k^{(V\times W)},U)&\xrightarrow[\ \cong\ ]{e^\ast}&(V\times W\to U)&\supset \L(V,W;U)\\
  (v\otimes w\mapsto u)&\longmapsto&(e_{v,w}\mapsto u)&\longmapsto&((v,w)\mapsto u)&
\end{array}
ここでの$e^\ast$による同型は、$k^{(V\times W)}$の各基底$\qty{e_{v,w}}$の移る先を決めること（それらを線形に拡張すれば$\Hom(k^{(V\times W)},U)$の元が1つ決まる）と、対応する$\qty{(v,w)}$の移る先を決めることとが一対一対応する、ということから来る。$\pi^\ast(\Hom(K^{(V\times W)}/R,U))=\qty{h\relmiddle{|}h(R)=\qty{0}}$である（$\subset$は自明。$\supset$は準同型定理より）。$h(R)=\qty{0}$は$e^\ast h\in \L(V,W;U)$を意味し、逆に$g\in \L(V,W;U)$ならば$(e^{-1})^\ast g(R)=\qty{0}$が成り立つので、$\Hom(V\otimes W,U)$と$\L(V,W;U)$は一対一対応する。すなわち$B\in \L(V,W;U)$に対して
\begin{xy}
*[white]\xymatrix{V\times W \ar[r]^{\otimes} \ar[rd]_{B} & V\otimes W \ar[d]^{\beta} \\ & U}
\end{xy}
を可換にする線形写像$\beta\in\Hom(V\otimes W,U)$が一意に存在し、逆もまた然りである（一意性は$e^\ast$の同型から来る。一般に写像の同一性は始域の全ての元について移す先が同じであるかによって判断される。ここでの一意性は$\otimes$が生成系への全射であることによると見ることもできる）。これがテンソル積空間の普遍性である。

テンソル積空間の普遍性を満たす線形空間$T$は$V\otimes W$と同型である。以下説明。$T$もテンソル積空間の普遍性を満たすなら、（$V\otimes W$もやはり$k$線形空間であることから）普遍性の図の$U$の部分に$V\otimes W$を入れることで次の左側の可換図式が得られる。
\begin{array}{cc|c}{\begin{xy}
*[white]\xymatrix{V\times W \ar[r]^{B} \ar[rd]_{\otimes} & T \ar[d]^{\gamma} \\   & V\otimes W}
\end{xy}}\ \mqty{\\[25pt]\implies} &{\begin{xy}
*[white]\xymatrix{V\times W \ar[r]^{\otimes} \ar[d]_{\otimes} \ar[rd]_{B} & V\otimes W \ar[d]^{\beta} \\ V\otimes W & T \ar[l]^{\gamma}}
\end{xy}}&{\begin{xy}
*[white]\xymatrix{V\times W \ar[r]^{\otimes} \ar[rd]_{\otimes} & V\otimes W \ar[d]^{\operatorname{id}} \\ & V\otimes W}
\end{xy}}\end{array}
左の図を利用して真ん中の図を得る。つまり$\otimes =\gamma\circ B=\gamma\circ\beta\circ\otimes$となり、右の図の$\otimes=\operatorname{id}\circ\otimes$および一意性から$\gamma\circ\beta=\id$が成り立つ。同様にして$\beta\circ\gamma=\id$も得られ、$T\cong V\otimes W$となる。すなわちテンソル積空間の普遍性を満たす線形空間は同型を除いて一意。また、右の図の$\id$が線形写像であることから$\otimes$は双線形写像であることも分かる。

ちなみに係数体は大事で、$\sqrt{-1}\otimes_\C\sqrt{-1}=-1\otimes_\C 1\in\C\otimes_\C\C$だが$\sqrt{-1}\otimes_\R\sqrt{-1}\neq -1\otimes_\R 1\in\C\otimes_\R\C$である。

# テンソル積空間のAnother sky（有限次元）

$V,W$を$k$上の有限次元線形空間とする。このとき、$\L(V,W;k)^\ast$はテンソル積空間の普遍性を満たし
\[V\otimes W\cong \L(V,W;k)^\ast\quad (\dim V,\dim W<\infty)\]
である。以下はその説明を延々としている。

$\otimes'\colon V\times W\to (\L(V,W;k)\to k),\, (v,w)\mapsto v\otimes' w$を
\[v\in V,w\in W;\ v\otimes' w\colon \L(V,W;k)\to k\qst B\mapsto B(v,w)\]
によって定義する。$\L(V,W;k)$の線形構造によって$v\otimes' w$は線形写像となり、$v\otimes' w\in \L(V,W;k)^\ast$となる。すなわち$\qty{v\otimes' w}\eqqcolon V\otimes' W\subset \L(V,W;k)^\ast$。ところで
\[
  \ev{(c_1v_1+c_2v_2)\otimes' w,B}=B(c_1v_1+c_2v_2,w)=c_1B(v_1,w)+c_2B(v_2,w)=\ev{c_1(v_1\otimes' w)+c_2(v_2\otimes' w),B}
\]
で、$w$についても同様なので$\otimes'$の双線形性が確かめられる。$\qty{v_i}_i,\qty{w_j}_j$をそれぞれ$V,W$の基底とし、$B^{kl}\in \L(V,W; k)$を$B^{kl}(v_i,w_j)=\delta_i^k\delta_j^l$とすると$\qty{B^{kl}}_{kl}$は$\L(V,W;k)$の基底をなす（双線形形式は各引数基底に対するその作用が決まれば一意に定まるので。双対基底の双線形版）。したがって、有限次元線形空間の双対空間は同じ次元を持つので、
\[\dim \L(V,W;k)^\ast=\dim  \L(V,W;k)=\dim V\dim W.\]
また、$\qty{v_i\otimes' w_j}_{ij}$は$V\otimes' W$の基底をなす（任意の$v\otimes' w$は$v_i\otimes' w_j$の線形和に分解できるし、$c^{ij}v_i\otimes' w_j=0$ならば$0=(c^{ij}v_i\otimes' w_j)(B^{kl})=c^{ij}B^{kl}(v_i,w_j)=c^{kl}$より線形独立である）。よって$\dim V\otimes' W=\dim V\dim W$であり、部分空間で次元が等しいので
\[
  V\otimes' W= \L(V,W;k)^\ast.
\]
つまり$\otimes'$は生成系への全射である。

この$V\otimes' W$はテンソル積空間の普遍性を満たす。以下証明。$B\in \L(V,W;U)$を定めると
\begin{align*}
  {}^t\beta\colon U^\ast\to \L(V,W;k),\ \xi\mapsto \xi\circ B
\end{align*}
なる${}^t\beta$が（当然$B$に対して一意に）定まる。またその双対写像
\begin{align*}
  \beta\colon V\otimes' W\to U,\ \phi\mapsto \phi\circ{}^t\beta
\end{align*}
も（当然$B$に対して一意に）定まり、任意の$\xi\in U^\ast$に対して
\begin{align*}
  \span{\beta(v\otimes' w),\xi}=\span{v\otimes' w,{}^t\beta(\xi)}=\span{v\otimes' w,\xi\circ B}=(\xi\circ B)(v,w)\equiv \span{\xi,B(v,w)}
\end{align*}
となって$\beta(v\otimes' w)=B(v,w)$が成り立つ（一意性も言えたのは$V\otimes' W$が双線形形式の双対空間であることを既に示しているおかげである）。

# 蒐集してテンソル代数とする
再び$V$は任意の$k$線形空間とする（無限次元でも可）。テンソル積空間の普遍性は次のように有用である。

1. $i\colon k\times V\to V,(a,v)\mapsto av$とする。$B\in \L(k,V;U)$に対して$\beta=B(1,\bullet)$とおくことで$\beta\in\Hom(V,U)$が$B$に対して一対一に決まるので、$(i,V)$はテンソル積空間の普遍性を満たす。他方で$(\otimes, k\otimes V)$も当然普遍性を満たすので$k\otimes V\cong V$が成り立つ。
1. \[\varPhi\colon (V_1\otimes V_2)\times V_3\to V_1\otimes (V_2\otimes V_3),\ (v_1\otimes v_2,v_3)\mapsto v_1\otimes (v_2\otimes v_3)\]
なる双線形写像を考えると、普遍性より$F\colon (V_1\otimes V_2)\otimes V_3 \to V_1\otimes (V_2\otimes V_3)$で$F((v_1\otimes v_2)\otimes v_3)=v_1\otimes(v_2\otimes v_3)$なるものが存在する。同様に$G(v_1\otimes(v_2\otimes v_3))=(v_1\otimes v_2)\otimes v_3$なる線形写像も存在し、$G\circ F=\operatorname{id},\,F\circ G=\operatorname{id}$より$(V_1\otimes V_2)\otimes V_3\cong V_1\otimes (V_2\otimes V_3)$が成り立つ。

この同型を同一視することでテンソル積は結合的となり、$V^{\otimes p}=\underbrace{V\otimes \dots \otimes V}_{p\text{個}}$を考えることができる。また$V^{\otimes 1}=V,V^{\otimes 0}=k$とし、ついでに$k\otimes k\cong k,k\otimes V\cong V$も同一視する。ここでの$p$をテンソルの次数（order, degree）と呼ぶ。かき集めて直和を取ると
\[T(V)\coloneqq \bigoplus_{r=0}^\infty V^{\otimes p}=k\oplus V\oplus (V\otimes V)\oplus\cdots\]
なる無限次元線形空間が得られ、$V$に対する**テンソル代数**と呼ぶ（線形空間の無限個の直和は、無限個の直積の元のうち有限個を除いて$0$であるようなものを集めて和とスカラー倍を定めたものなので、有限和しか考えない。また有限階テンソルの直和なので元としても無限階テンソルは考えない）。すなわち、結合的な積としてテンソル積を採用した（当然非可換な）代数である。$T(V)$は$k$上の代数として$\qty{V\text{の基底}}\cup\qty{1_k}$から生成される。テンソル代数の元は次数によって直和分解できる。

テンソル代数の階数は行列の階数に当たるもので、単純テンソルの和として表すときの項数の最小値である（テンソル分解？）。

# 線形写像もテンソる！

$f\in \Hom(V,V'),g\in\Hom(W,W')$の組$(f,g)$を$v\otimes w\mapsto f(v)\otimes g(w)$なる写像（これはwell-defined）に移す写像$B_0$を考える。$B_0$は$f,g$について双線形であり、
\begin{xy}
*[white]\xymatrix{\Hom(V,V')\times \Hom(W,W') \ar[r]^{\otimes} \ar[rd]_{B_0} & \Hom(V,V')\otimes \Hom(W,W') \ar[d]^{\beta_0} \\ & \Hom(V\otimes W,V'\otimes W')}
\end{xy}
より対応する$\Hom(V,V')\otimes \Hom(W,W')$からの線形写像$\beta_0$が存在する。ここで$\beta_0(f\otimes g)$と$f\otimes g$を同一視する、すなわち$(f\otimes g)(v\otimes w)\coloneqq f(v)\otimes g(w)$と定義することで線形写像のテンソル積の作用を定める（有限次元の場合は次元を考えると同型であることが分かる。無限次元は知らん）。

特に$V'=W'=k$のときを考えると、$V^\ast\otimes W^\ast$を$(V\otimes W)^\ast$と同一視することになる。

# 外積代数はテンソル代数の商代数

再び$V$は任意の$k$線形空間とする。
\[I(V)\coloneqq \left(v\otimes v\relmiddle{|} v\in V\right)\equiv\span{s\otimes v\otimes v\otimes t\relmiddle{|}v\in V,s,t\in T(V)}_k\]
はテンソル代数$T(V)$における両側イデアルである。
\[\varLambda(V)\coloneqq T(V)/I(V)\]
として**外積代数**が定義される。自然な全射を$\pi\colon T(V)\to \varLambda(V)$とする。$V^{\wedge p}\coloneqq\pi(V^{\otimes p})$。また$\alpha=\pi(a),\beta=\pi(b)\in\varLambda(V)$に対して
\[\alpha\wedge\beta\coloneqq \pi(a\otimes b)\]
として**ウェッジ積**を定める。つまり$\wedge=\pi\circ\otimes$である。$\pi$の線形性と$\otimes$の線形性、結合性から$\wedge$も線形で結合的である。

# 外積代数は交代テンソル代数

ここでは$V$の係数体$k$の標数を$0$とする。

テンソル積空間の普遍性を利用して
\[\varPsi\colon V\otimes W\to W\otimes V\qst v\otimes w\mapsto w\otimes v\]
が同型でかつ$\varPsi$は一意であることを示せる（$F(v,w)=w\otimes v$と$G(w,v)=v\otimes w$は双線形写像）。これと任意の置換は互換の積で表せることから
\[\sigma\in \mathfrak{S}_p;\ P_\sigma\colon V^{\otimes p}\to V^{\otimes p}\qst v_1\otimes\dots\otimes v_p\mapsto v_{\sigma(1)}\otimes\dots\otimes v_{\sigma(p)}\]
なる自己同型が一意に定まる（$p\le 1$なら恒等写像に同じ）。
\[\Alt_p\coloneqq \dfrac{1}{p!}\sum_{\sigma\in \mathfrak{S}_p}\sgn\sigma\cdot P_\sigma\]
と定める（標数が$p$以下の正の数なら$p!$で割るという操作が行えないことに注意）と、これは射影になっている：
\[(\Alt_p)^2=\dfrac{1}{(p!)^2}\sum_{\sigma,\tau\in\mathfrak{S}_p}\sgn\sigma\sgn\tau\cdot P_\sigma\circ P_\tau=\dfrac{1}{(p!)^2}\sum_{\sigma,\upsilon\in\mathfrak{S}_p}\sgn\upsilon\cdot\upsilon^\ast=\Alt_p.\]
これもかき集めて
\[\Alt\coloneqq \bigoplus_{p=0}^\infty \Alt_p=\id\oplus\id\oplus \Alt_2\oplus\cdots\]
とする（つまりそれぞれのテンソル積空間に作用する。演算子の直和は、行列の直和をイメージすればたやすい）。交代テンソル空間を
\[A^p(V)\coloneqq\qty{t\in V^{\otimes p}\relmiddle{|} {}^\forall\sigma\in\mathfrak{S}_p,\,P_\sigma(t)=(\sgn\sigma) t}\qc A(V)\coloneqq\bigoplus_{p=0}^\infty A^p(V)\]
と定めると、
\begin{gather*}
  t\in A^p(V);\ \Alt_p(t)=\dfrac{1}{p!}\sum_{\sigma\in\mathfrak{S}_p}\sgn\sigma\cdot P_\sigma(t)=t\\
  \sigma\in\mathfrak{S}_p;\ P_\sigma\Alt_p=\dfrac{1}{p!}\sum_{\tau\in\mathfrak{S}_p}\sgn\tau\cdot P_\sigma\circ P_\tau=\sgn\sigma\Alt_p
\end{gather*}
より
\[
  A^p(V)= \Im\Alt_p\qc A(V)= \Im\Alt
\]
が成り立つ。

\[
  X\subset\mathfrak{S}_p;\ N_X^p\coloneqq \big\langle t{\mathrel{}\big|\mathrel{}} t\in\bigcup_{\sigma\in X}\Im(\id_{V^{\otimes p}}-\sgn\sigma\cdot P_\sigma)\big\rangle_k
\]
として$V^{\otimes p}$の部分空間を定める。
\begin{gather*}
  \Alt_p\circ(\id-\sgn\sigma\cdot P_\sigma)=\Alt_p-\dfrac{1}{p!}\sum_{\tau\in\mathfrak{S}_p}\sgn\tau\sgn\sigma\cdot P_\tau\circ P_\sigma=\Alt_p-\Alt_p=0
\end{gather*}
より$N_{\mathfrak{S}_p}^p\subset \Ker\Alt_p$で、かつ$N_{\mathfrak{S}_p}^p\supset \Im(\id-\Alt_p)=\Ker\Alt_p$より$N_{\mathfrak{S}_p}^p=\Ker\Alt_p$が成り立つ。

$N_{\ev{X}}^p=N_X^p$を示す。ここで$\ev{X}$は置換群として$X$の元によって生成される$\mathfrak{S}_p$の部分群。言い換えると$\ev{X}$は$X$の元の（$\mathfrak{S}_p$が有限群なので当然有限個の）積で表される元の集合。$\tau,\sigma\in X, t\in V^{\otimes p}$として
\[t-\sgn{\tau\sigma}\cdot P_{\tau\sigma}(t)=\underbrace{t+\sgn\sigma\cdot P_\sigma(t)-\sgn\tau\cdot P_\tau(t+\sgn\sigma\cdot P_\sigma(t))}_{\text{$s-\sgn\tau\cdot P_\tau(s)$の形で$N_X^p$の元}}-(t-\sgn\tau\cdot P_\tau(t))+(t-\sgn\sigma\cdot P_\sigma(t))\]
より$t-\sgn{\tau\sigma}\cdot P_{\tau\sigma}(t)\in N_X^p$となり、帰納的に$N_{\ev{X}}^p\subset N_X^p$となる。逆は自明なので$N_{\ev{X}}^p=N_X^p$。

\[X_p\coloneqq \qty{(12),(23),\dots,(p-1\,p)}\]
とすると$\ev{X_p}=\mathfrak{S}_p$となる（任意の互換を隣接互換で作れるので）（ここでの$X$は隣接互換を象っている）ので$N_{X_p}^p=\Ker\Alt_p$。一方で
\begin{align*}
  N_{X_p}^p&=\span{t-\sgn\sigma\cdot P_\sigma(t)\relmiddle{|}t\in V^{\otimes p},\sigma\in X_0}_k\\
  &=\span{v_1\otimes\dots\otimes(v_i\otimes v_{i+1}+v_{i+1}\otimes v_i)\otimes\dots\otimes v_p\relmiddle{|}i\in\qty{1,\dots,p-1},(v_j)_j\in V^p}_k
\end{align*}
となり、$v\otimes w+w\otimes v=(v+w)\otimes (v+w)-v\otimes v-w\otimes w\in I(V)$で、$I(V)$は両側イデアルなので$N_{X_p}^p\subset I(V)$。逆に$v_{i}=v_{i+1}$のときを考えれば$v\otimes v$の両側に適当に何かかけたものは$N_{X_p}^p$に含まれている。つまり${}^\forall t\in I(V),{}^\exists p,t\in N_{X_p}^p$であり、合わせて
\begin{align}
  \Ker\Alt=\bigoplus_{p=0}^\infty\Ker\Alt_p=\bigoplus_{p=0}^\infty N_{X_p}^p=I(V)
\end{align}
となる。準同型定理より
\[A(V)=\Im\Alt\cong T(V)/\Ker\Alt=T(V)/I(V)\equiv \varLambda(V)\qc A^p(V)=\Im\Alt_p=V^{\wedge p}\]
が成り立つ（後半は次数ごとに直和分解して分かる）。すなわち外積代数は交代テンソル空間と同型である。

$v,w\in V=V^{\wedge 1}$について$v\otimes w+w\otimes v\in I(V)$よりウェッジ積の反可換性が確かめられる。$\alpha\in V^{\wedge p},\beta\in V^{\wedge q}$なら$\alpha\wedge\beta=(-1)^{pq}\beta\wedge\alpha$である。

# 参考文献

1. 本間 泰史『スピン幾何学 ―スピノール場の数学―』（2016、森北出版株式会社） - この記事をまとめたくなった原因。「テンソル積は双線形形式の双対」とはいいスローガンだなあ。
1. [ベクトル空間のテンソル積とテンソル空間（PDF）](http://daisy.math.sci.ehime-u.ac.jp/users/tsuchiya/math/fem/exterior/section1.pdf) - 記法とかいろいろ参考にさせていただいた。
1. [交代テンソルと外積代数（PDF）](http://daisy.math.sci.ehime-u.ac.jp/users/tsuchiya/math/fem/exterior/section2.pdf)
1. 斎藤 毅『線形代数の世界 抽象数学の入り口』（2007、東京大学出版会） - 無限次元や任意の標数でも通用する定義ということでパk...参考にさせていただいた。
1. [テンソル積の存在と一意性（と自己紹介）](https://mathlog.info/articles/140) - 準同型定理が必要であることに気付かせていただいた。
1. [テンソル -テンソルの対称性-（PDF）](https://168iroha.net/blog/PDF.php?path=math/algebra/linear_algebra/tensor/te-2.pdf&name=tensor-2) - $\Ker\Alt$の表示を参考にさせていただいた。
