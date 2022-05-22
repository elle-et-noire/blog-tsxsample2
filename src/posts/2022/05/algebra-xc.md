---
title: 環論メモ
date: '2022-05-20'
tags:
  - math
  - algebra
---

$$
\def\zero{\{0\}}
\def\defiff{\stackrel{\mathrm{def}}{\iff}}
$$

$A$を整域とし、$a\in A\setminus(A^\times \cup\zero)$とする。
\begin{align}
  \text{$a$が既約元}\defiff \qty({}^\exists b,c\in A,a=bc\implies (b\in A^\times \mid c\in A^\times))\\
  \text{$a$が素元}\defiff (a)=\qty{ax\mid x\in A}\text{が$A$の素イデアル}
\end{align}

注：$(a)=(a')\iff {}^\exists u\in A^\times,\, a'=au$より
\begin{align}
  \text{$a$が既約元}&\iff \text{$a'$が既約元}\\
  \text{$a$が素元}&\iff \text{$a'$が素元}
\end{align}
が成り立つ。

> $a$が素元$\implies a$が既約元

実際$b,c\in A$が存在して$a=bc$と書けるなら、$(a)$が素イデアルであることから（一般性を失わずに）$b\in (a)$が言える。よって$b'\in A$が存在して$b=ab'$であり、$a=ab'c$。$A$が聖域であることから$b'c=1$となり、$c\in A^\times$。よって$a$は既約元。

ちなみに逆は一般に不成立で、例えば$\Z[\sqrt{-5}]$において$2\cdot 3$は$(1+\sqrt{-5})(1-\sqrt{-5}$とも因数分解できるので$2$は素元ではない（$1+\sqrt{-5}$も$1-\sqrt{-5}$も$(2)\subset\Z[\sqrt{-5}]$に含まれない）。一方で$2$は既約元（←PIDだから？）。

再び$A$を整域とする。
\begin{align}
  \text{$A$がUFD}\defiff {}^\forall a\in A\setminus(A^\times\cup\zero)\text{は素元の積に分解できる}
\end{align}

定理1
> (1)$A$がUFDならば$A$の素元と$A$の既約元の集合は一致する。

素元$\implies$既約元であることはすでに示した。$a\in A\setminus(A^\times$が既約元だとする。$(a)\neq A$である。$A$がUFDであることから素元$p_i$たちが存在して$a=p_1(p_2\dots p_l)$と分解できる。$l\ge 2$だと仮定すると、$a$が既約元であることから（一般性を失わずに）$p_2\dots p_l\in A^\times$が言えるが、これは$p_2\in A^\times$を意味し、$p_2$が素元であることに矛盾する。したがって$l=1$であり、$a=p_1$となって既約元$\implies$素元も言えた。

> (2)$A$がUFD$\iff {}^\forall a\in A\setminus(A^\times\cup\zero)$は①既約元の積に分解できる。②既約元の積への分解は同伴を除いて一意。
> すなわち、①既約元$q_i$たちがあって$a=q_1\dots q_l$。②$a=q_1\dots q_l =q_1'\dots q_l' \implies l=l'$かつ番号を付け替えれば$u_i\in A^\times$があって$q_i'=q_i u_i$。

**$\implies$**：①$A$がUFDであること、素元は既約元であることから言える。②既約元$q_i,q_i'$があって$a=q_1\dots q_l =q_1'\dots q'_{l'}$と分解できるとする。$A$がUFDなので$q_i,q'_i$は素元でもある。すると$(q_1)\ni q_1\dots q_l =q_1'\dots q'_{l'}$が言える。$(q_1)が素イデアルであることから（添字を付け替えて）${}^\exists q_1'\in(q_1)$が言える。すなわち${}^\exists u_1\in A, q_1'=q_1u_1$。また$q_1'$が既約元でかつ$q_1\notin A^\times$より$u_1\in A^\times$が分かる。$q_1\neq 0$かつ$A$が整域であることから$q_2\dots q_l=(u_1 q_2')\dots q'_{l'}$が言え、（$l=1$の場合は既約元の定義そのものなので）$l$についての帰納法から$l=l'$が言え、以降も添字を付け替えることによって${}^\exists u_i\in A^\times, q_i'=q_iu_i$が成り立つ。

**$\impliedby$**：$a$を$Aの既約元とする。$a$が素元であると言いたい。${}^\exists b,c,y\in A, bc=ay$と書けるとする（つまり$bc\in(a)$）。①より既約元$q_i,q'_i,q''_i$があって$y=q''_1\dots q''_n, b=q_1\dots q_l, c=q_1'\dots q_m'$とそれぞれ分解できる（？$b,c$は単元でもありうるのでは）。