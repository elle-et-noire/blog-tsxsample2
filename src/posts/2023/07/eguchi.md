---
title: 江口CFT1.7.3~1.7.5
date: '2023-07-20'
tags:
  - CFT
description: "江口CFT1.7.3~1.7.5のゼミ資料です。"
---

## $Q$が生成する有限の共形変換

たとえば量子力学では、
\[
\begin{gathered}
  \i \dv{\hat{O}(t)}{t}=\comm{\hat{O}(t)}{\hat{H}}\quad\text{(微分形)}\\
  \hat{O}(t)=\e^{\i Ht}\hat{O}(0)\e^{-\i Ht}\quad\text{(積分形)}
\end{gathered}
\]
の対応があった。ここでの時間発展を共形変換に一般化したものを考えたい。

微分形に対応するのは何といっても無限小共形変換の生成子が$Q$であるという式だろう：
\[
  -\delta_u\varPhi(z)=\comm{Q(u)}{\varPhi(z)}.
\]
これを時間発展の場合と見比べて積分形を推測すると
\[
  F^\ast\varPhi(z)=\e^{-Q(u)}\varPhi(z)\e^{Q(u)}
\]
となる。ただし$F$は$u$によって生成される有限の共形変換である。実際$F(z)=z+u^z(z),\ u\ll 1$の微小な場合には上の式は
\begin{align*}
  F^\ast\varPhi(z)&=\delta_u\varPhi(z)\quad(\text{(1.31)より})\\
  \e^{-Q(u)}\varPhi(z)\e^{Q(u)}&=(1-Q(u))\varPhi(z)(1+Q(u))=-\comm{Q(u)}{\varPhi(z)}=\delta_u\varPhi(z)
\end{align*}
となって微分形に一致する。$e^{-Q(u)}$がユニタリかどうかよく知らないが、$F$が決まれば（それを生成するベクトル場が一意に決まるので）$\e^{-Q(u)}$は一意に決まるという意味で$U(F)\coloneqq \e^{-Q(u)}$と書く。つまり
\[
  F^\ast\varPhi(z)=U(F)\varPhi(z)U(F)^{-1}
\]
となる。

## プライマリー場の変換則

プライマリー場$\stackrel{\mathrm{def}}{\iff}$共形変換（つまり正則関数による変換）$z\to z'$で$\varPhi(z)\dd{z}^h=\varPhi'(z')\dd{z'}^h$が不変に保たれる。

また共形変換$F$の場への作用が$F^\ast\varPhi(z)=\varPhi(F(z))(\dv*{F}{z})^h$で定義されていた。

これらを見比べると、共形座標変換$z\xrightarrow{F}z'$で$\varPhi(z)=F^\ast\varPhi'(z)$となることが分かる。ところで$F^\ast$は$U(F)$で挟んで表現できることが上で分かったので
\[
  \varPhi(z)=U(F)\varPhi'(z)U(F)^{-1}
\]
あるいは
\[
  \varPhi'(z)=U(F)^{-1}\varPhi(z)U(F)
\]
となり、共形座標変換による場の変換則が求まった。$F$が逆関数を持つならこれは$(F^{-1})^\ast\varPhi(z)$に一致する。つまり、場は座標変換と「逆向き」に変換するし、座標変換をうまいこと打ち消すように共形変換の場への作用$^\ast$が決められているとも言える。


<details>
<summary>
↑の$(F^{-1})^\ast\varPhi(z)$に一致することについて
</summary>
$w\mapsto z=F(w)$なる変換において
\[
  \varPhi'(z)\qty(\dv{z}{w})^h=\varPhi(w).
\]
$w=F^{-1}(z)$なので
\[
  \varPhi'(z)=\varPhi(F^{-1}(z))\qty(\eval{\dv{F(w)}{w}}_{w=F^{-1}(z)})^{-h}=(F^{-1})^\ast\varPhi(z)
\]
が共形座標変換$F$によって場$\varPhi$が受ける変換である。
</details>


## $T(z)$の変換則

記憶の喚起のため、交換子と動径順序の重要な公式を再度掲げる：
\[
  \comm{\oint \dfrac{\dd{z}}{2\pi\i}A(z)}{B(w)}=\oint_w\dfrac{\dd{z}}{2\pi\i}\mathrm{R}[A(z)B(w)].
\]
この動径順序の記号は普段は略される。

準プライマリー場$T(z)$の変換則を
\[
  U(F)T(z)U(F)^{-1}=T(F(z))\qty(\dv{F}{z})^2+\varTheta[F](z)
\]
と推測する。これが満たすべき要請は3つある：

1. 無限小共形変換で$T(z)$の変換則を再現する：
\begin{align*}
  (\mathrm{LHS})&=-\comm{Q(u)}{T(z)}=\comm{\oint\dfrac{\dd{w}}{2\pi\i}u^w(w)T(w)}{T(z)}\\
  &=\oint_z\dfrac{\dd{w}}{2\pi\i}u^w(w)T(w)T(z)\stackrel{(1.96)}{=}\delta_uT(z)\equiv u^z\partial_zT+2\partial_zu^zT+\dfrac{c}{12}\partial_z^3 u^z
\end{align*}
つまり
\[
  \varTheta[z\mapsto z+u^z(z)](z)=\dfrac{c}{12}\partial_z^3u^z(z).
\]

1. 共形変換に対する$T(z)$の変換が自然に行われる（$U(F\circ G)=U(F)U(G)$）。つまり
\begin{align*}
  U(F\circ G)T(z)U(F\circ G)&=T(F\circ G(z))\qty(\dv{(F\circ G)}{z})^2+\varTheta[F\circ G](z)\\
  U(F)U(G)T(z)U(G)^{-1}U(F)^{-1}&=U(F)\qty{T(G(z))\qty(\dv{G}{z})^2+\varTheta[G](z)}U(F)^{-1}\\
  &=\qty{T(F(G(z)))\qty(\dv{F(G(z))}{G(z)})^2+\varTheta[F](G(z))}\qty(\dv{G}{z})^2+\varTheta[G](z)
\end{align*}
合成した微分同相でまとめて変換した結果が都度変換した結果に一致していてほしいので
\[
  \varTheta[F\circ G](z)=\qty(\dv{G}{z})^2\varTheta[F](G(z))+\varTheta[G](z)
\]
が要請される。

1. 大域的共形変換についてはプライマリー場の変換則のように見えてほしい。つまり大域的共形変換$F$について$\varTheta[F]=0$。

1\. より$\varTheta[F](z)$は高々$F$の3階微分まで含む局所的に正則なc数。2., 3. より
\begin{align*}
  \varTheta[F\circ T_a]=\varTheta[F](z+a)\qc \varTheta[T_a\circ F]=\varTheta[F]\quad (T_a(z)\coloneqq z+a, a\in \mathbb{C})\\
  \varTheta[F\circ D_a](z)=a^2\varTheta[F](a^2z)\qc \varTheta[D_a\circ F]=\varTheta[F]\quad(D_a(z)\coloneqq az, a\in\mathbb{C})
\end{align*}
が成り立つ必要があり、想像力を駆使すると
\[
  \varTheta[F](z)=A\dfrac{F^{(3)}(z)}{F'(z)}+B\qty(\dfrac{F^{(2)}(z)}{F'(z)})^2
\]
と形が決まる。$\varTheta[z\mapsto 1/z]=0$より$B=-(3/2)A$。また微小な場合のことを考えると$A=c/12$。まとめると
\[
  \varTheta[F](z)=\dfrac{c}{12}\qty[\dfrac{F^{(3)}(z)}{F'(z)}-\dfrac{3}{2}\qty(\dfrac{F^{(2)}}{F'(z)})^2]
\]
となる。これはコサイクル条件を満たす：
\begin{align*}
  (F\circ G(z))'&\to F'\circ G\cdot G'\to F''\circ G\cdot G'^2+F'\circ G\cdot G''\\
    &\to F'''\circ G\cdot G'^3+3F''\circ G\cdot G'G''+F'\circ G\cdot G'''\\
  \varTheta[F\circ G](z)&\propto \dfrac{F'''\circ G}{F'\circ G}G'^2+3\dfrac{F''\circ G}{F'\circ G}G''+\dfrac{G'''}{G'}
    -\dfrac{3}{2}\underbrace{\qty(\dfrac{F''\circ G}{F'\circ G}G'+\dfrac{G''}{G'})^2}_{\ds =\qty(\dfrac{F''\circ G}{F'\circ G}G')^2+2\dfrac{F''\circ G}{F'\circ G}G''+\qty(\dfrac{G''}{G'})^2}\\
  G'^2\varTheta[F](G(z))&\propto G'^2\qty{\dfrac{F'''\circ G}{F'\circ G}-\dfrac{3}{2}\qty(\dfrac{F''\circ G}{F'\circ G})^2}\\
  \varTheta[G](z)&\propto \dfrac{G'''}{G'}-\dfrac{3}{2}\qty(\dfrac{G''}{G'})^2.
\end{align*}
以上より$T(z)$の共形変換則は
\begin{align*}
  U(F)T(z)U(F)^{-1}&=T(F(z))\qty(\dv{F}{z})^2+\dfrac{c}{12}S[F(z),z]\\
  S[w,z]&\coloneqq \dfrac{\dv*[3]{w}{z}}{\dv*{w}{z}}-\dfrac{3}{2}\qty(\dfrac{\dv*[2]{w}{z}}{\dv*{w}{z}})^2
\end{align*}
と定まった。

$\ds\dv{w}{z}\cdot\dv{z}{w}=1$より
\begin{align*}
  \dv[2]{w}{z}\dv{z}{w}+\dv{w}{z}\dv{z}\dv{z}{w}&=0\\
  \therefore \underbrace{\dv{z}\dv{z}{w}}_{=\dv{w}{z}\dv[2]{z}{w}}&=-\dv[2]{w}{z}\qty(\dv{z}{w})^2\\
  \dfrac{\dv*[2]{z}{w}}{\dv*{z}{w}}&=-\dfrac{\dv*[2]{w}{z}}{\dv*{w}{z}}\cdot\dv{z}{w}.
\end{align*}
また$\ds\dv[2]{z}{w}=-\dv[2]{w}{z}\qty(\dv{z}{w})^3$より
\begin{align*}
  \underbrace{\dv{z}\dv[2]{z}{w}}_{\ds=\dfrac{\dv*[3]{z}{w}}{\dv*{z}{w}}}&=-\dv[3]{w}{z}\qty(\dv{z}{w})^3-3\dv[2]{w}{z}\qty(\dv{z}{w})^2\dv{z}\dv{z}{w}\\
    &=-\dfrac{\dv*[3]{w}{z}}{\dv*{w}{z}}\qty(\dv{z}{w})^2+3\qty(\dfrac{\dv*[2]{w}{z}}{\dv*{w}{z}})^2\qty(\dv{z}{w})^2.
\end{align*}
以上より
\[
  S[w,z]\qty(\dv{z}{w})^2=-S[z,w]
\]
が分かる。つまり$T'(z)\coloneqq U(F)^{-1}T(z)U(F)$と定義すると
\[
  T'(z')=T(z)\qty(\dv{z}{z'})^2+\dfrac{c}{12}S[z,z']
\]
となって、共形座標変換に対する$T(z)$の変換則がプライマリー場の発展形になっていることが分かる。

### 例1：$\mathbb{C}\mathrm{P}^1$上の無限遠点

大域的共形変換$z\mapsto w=1/z$に対するSchwarzianは0だった。$T(z)=\sum_n z^{-n-2}L_n$に対する$w$での展開を求めると
\[
  T^{(w)}(w)=z^4T(z)=w^{-4}T(1/w)=\sum_n w^{n-2}L_n
\]
となる。これを用いて無限遠点におけるHamiltonianを再構成できる。

### 例2：シリンダーへの変換

シリンダーから$\mathbb{C}\mathrm{P}^1$への共形変換$w\mapsto z=e^w$におけるSchwarzianは$\ds\dv[n]{z}{w}=e^w=z$より$S[z,w]=-1/2$である。よって
\[
  T^{(\mathrm{cyl})}(w)=z^2T(z)-\dfrac{c}{12}
\]
となり、シリンダー上のEMTを
\[
  T^{(\mathrm{cyl})}(w)=\sum_{n\in\mathbb{z}}L_n^{(\mathrm{cyl})}\e^{-nw}
\]
と展開するとVirasoro演算子の関係
\[
  L_n^{(\mathrm{cyl})}=L_n-\dfrac{c}{24}\delta_{n,0}
\]
が定まる。

## 共形不変な真空

立ち返るべきはWard-高橋恒等式である：
\[
  \oint_C\dfrac{\dd[2]{z}}{2\pi\i}\ev{\varepsilon^z(z)T(z)X}=\ev{\delta_\varepsilon X}\quad(\varepsilon^z(z)\text{は少なくとも$X$の挿入点近傍で正則}).
\]
ここでの期待値は経路積分の文脈だったが、これを演算子形式に読み替える：
\[
  \ev{\varPhi_1\cdots\varPhi_N}=\mel{0}{R[\varPhi_1\cdots\varPhi_N]}{0}.
\]
$u^z(z)$を原点で正則とすると、状態-演算子対応で$\ds\oint_0\dfrac{\dd{z}}{2\pi\i}u^z(z)T(z)I(0)=\delta_uI=0$と解釈できるので
\[
  0=\oint_0\dfrac{\dd{z}}{2\pi\i}u^z(z)T(z)\ket{0}\stackrel{u^z(z)=z^{n+1}, n\ge -1}=L_n\ket{0}.
\]
となる。

同じように無限の未来に対する$L_n$の作用も調べる。$T^{(w)}(w)=\sum_nw^{n-2}L_n$より
\begin{align*}
  \bra{0}L_n&=\bra{0}\oint_0 \dfrac{\dd{w}}{2\pi\i}w^{-n+1}T^{(w)}(w)\stackrel{n\le 1}{=}0\quad \\
\end{align*}
となる。

大域的共形変換についてはin-stateもout-stateも$0$になる。これはWard-高橋恒等式の右辺にあたるもので、つまり大域的共形変換に対して不変であることを意味する。それ以外のVirasoro operatorについては片方のstateのみを不変にする。

## プライマリー状態

\[
  \ket{h}\coloneqq \lim_{z\to 0}\varPhi(z)\ket{0}
\]
とする。$T(z)\varPhi(w)=\ds\dfrac{h\varPhi(w)}{(z-w)^2}+\dfrac{\partial_w\varPhi(w)}{z-w}+\cdots$より
\begin{align*}
  L_n\ket{h}=\oint_0\dfrac{\dd{z}}{2\pi\i} z^{n+1}T(z)\varPhi(0)\ket{0}=\left\{\begin{aligned}&0&(n\ge 1)\\&h\ket{h}&(n=0)\end{aligned}\right.
\end{align*}
となる。これが**最高ウェイト条件**である（$n<0$についてはOPEだけからは分からない）。

無限の未来についても同じようにする。$w=1/z$として
\[
  \bra{h}\propto \lim_{w\to 0}\bra{0}\varPhi^{(w)}(w)\propto\lim_{z\to \infty}\bra{0}z^{2h}\varPhi(z)
\]
となる。位相因子がノルムの半正定値性から決まる。このとき最高ウェイト条件は
\begin{align*}
  \bra{h}L_n=\bra{0}\varPhi^{(w)}(w=0)\oint_0 \dfrac{\dd{w}}{2\pi\i}w^{-n+1}T^{(w)}(w)=\left\{\begin{aligned}&0&(n\le -1)\\&h\bra{h}&(n=0)\end{aligned}\right.
\end{align*}
となる。また$L_n^\dagger=L_{-n}$と推測できる。












