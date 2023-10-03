---
title: 自由ボゾン場のCFT
date: '2023-10-02'
tags:
  - CFT
description: "江口・菅原CFT1.8.1に沿っています。"
---

$$
\def\nprod#1{{\colon{#1}\colon}}
\def\wt#1{\widetilde{#1}}
$$

massless実スカラー場の作用は
\begin{align*}
  S=\dfrac{1}{4\pi\alpha'}\int\dd[2]{\sigma}\,(\partial_aX)^2=\dfrac{1}{\pi\alpha'}\int\dd[2]{z}\partial X\bar{\partial}X
\end{align*}
である（質量$0$でないと共形不変じゃないらしい？）。（↑の座標変換による係数の違いは本当は測度に吸収されるべきだがなぜか$\dd[2]{\sigma}=\dd[2]{z}$という定義を江口・菅原は採用している。）

運動方程式は$\partial\bar{\partial}X=0$となるから古典解は$X(z,\bar{z})=X(z)+\bar{X}(\bar{z})$に分解される。

[生成汎関数](/2023/10/gen-func)の公式において、この場合は
\begin{align*}
  K(x,y)&=-\dfrac{\delta^2(x-y)}{2\pi\alpha'}\partial^{(x)}_a\partial^{(y)a}\\
  &=-\dfrac{\delta^2(z-w,\bar{z}-\bar{w})}{\pi\alpha'}(\partial_z\partial_{\bar{w}}+\partial_{\bar{z}}\partial_w)\eqqcolon K(z,\bar{z},w,\bar{w})
\end{align*}
が相当する。

この場合のGreen関数$K^{-1}(z,\bar{z},w,\bar{w})$を求めれば相関関数が求まる。天下り的に$\ln\abs{z-w}^2$だと思ってみる。ここでGreen関数と言っているのは
$$
\int\dd[2]{w}K(z',\bar{z}',w,\bar{w})K^{-1}(w,\bar{w},z,\bar{z})=\delta^2(z-z',\bar{z}-\bar{z}')
$$
が成り立つことを指すので、$w$と$\prime{z}$について積分して$1$になることと、$z\neq z'$なら$0$になることを確かめればよい。後者については明らかである。前者については
\begin{align*}
  &\quad\int\dd[2]{z'}\dd{w}\wedge\dd{\bar{w}}\delta^2(z'-w,\bar{z}'-\bar{w})(\partial_{z'}\partial_{\bar{w}}+\partial_{\bar{z}'}\partial_w)\ln\abs{z-w}^2\\
  &=\int\dd{w}\wedge\dd{\bar{w}}2\partial_w\partial_{\bar{w}}\ln\abs{w-z}^2\\
  &=2\oint_{w\in\partial D}\dd{\bar{w}}\dfrac{1}{\bar{w}-\bar{z}}=-4\pi\i
\end{align*}
となり、$\dd[2]{w}$で換算すれば$2\pi$となる。ちゃんと定数になって安心した。微分演算子の方を$-1/\pi\alpha'$倍すると$K$になるわけなので、$\ln\abs{z-w}^2/2\pi$を$-\pi\alpha'$倍して
\begin{align*}
  \ev{X(z,\bar{z})X(w,\bar{w})}\equiv K^{-1}(z,\bar{z},w,\bar{w})=-\dfrac{\alpha'}{2}\ln\abs{z-w}^2
\end{align*}
が得られる。$z,w$依存性と$\bar{z},\bar{w}$依存性を考えると
$$
\ev{X(z)X(w)}=-\dfrac{\alpha'}{2}\ln(z-w)\qc\ev{\bar{X}(\bar{z})\bar{X}(\bar{w})}=-\dfrac{\alpha'}{2}\ln(\bar{z}-\bar{w})
$$
のように正則部と反正則部に分解できる。

カレント
$$
J(z)=\sqrt{\dfrac{2}{\alpha'}}\i\partial X(z)
$$
を定義する。$X$の相関関数を2階微分して
$$
J(z)X(w)\sim-\i\sqrt{\dfrac{\alpha'}{2}}\dfrac{1}{z-w} \qc J(z)J(w)\sim \dfrac{1}{(z-w)^2}.
$$
（この時点で場を量子化していることになる？）

ところで先の作用は
$$
S=\dfrac{1}{2\pi\alpha'}\int\dd[2]{z}g^{ab}\partial_a X\partial_b X\quad(a,b\in\qty{z,\bar{z}})
$$
と書き直せる。$g^{zz}\to g^{zz}+\delta g^{zz}$となったとき作用の変化は
\begin{align*}
  \delta S&=\dfrac{1}{2\pi\alpha'}\int\dd[2]{z}\delta g^{zz}\partial_z X\partial_z X\\
  &=-\dfrac{1}{4\pi}\int\dd[2]{z}\delta g^{zz} J(z)J(z)
\end{align*}
である。これとEMTの定義
$$
\delta S=-\dfrac{1}{4\pi}\int\dd[d]{x}\sqrt{g}T_{\mu\nu}(x)\delta g^{\mu\nu}(x)
$$
を見比べると$T(z)\sim J(z)J(z)$となるはずだが(1.142)では
$$
T(z)=\dfrac{1}{2}\nprod{J(z)J(z)}\equiv\dfrac{1}{2}\lim_{w\to z}\qty[J(w)J(z)-\dfrac{1}{(w-z)^2}]
$$
となっている。まあ$J$の定義を適当に変えれば合うので気にしないことにする。正規積を取っているのは不定性がない方がうれしいため（この項は元の作用には入っていないのである程度自由に決められる？）

$J(z)$の$0$周りでのLaurent展開係数（演算子）を$\alpha_n$とする：
$$
J(z)=\sum_{n\in\mathbb{N}}\alpha_n z^{-n-1}.
$$
あるいは積分して
$$
X(z)=\sqrt{\dfrac{\alpha'}{2}}\qty[\phi_0-\i\alpha_0\ln z+\i\sum_{n\neq 0}\dfrac{\alpha_n}{n}z^{-n}].
$$

$$
\alpha_n=\oint\dfrac{\dd{z}}{2\pi\i}z^nJ(z)\qc \phi_0=\sqrt{\dfrac{2}{\alpha'}}\oint\dfrac{\dd{z}}{2\pi\i}\dfrac{X(z)}{z}
$$
より展開演算子の交換関係は
\begin{align*}
  \comm{\alpha_m}{\alpha_n}&=\oint_0\dfrac{\dd{w}}{2\pi\i}\oint_w\dfrac{\dd{z}}{2\pi\i}z^mw^n\underbrace{J(z)J(w)}_{\sim (z-w)^{-2}}\\
  &=\oint\dfrac{\dd{w}}{2\pi\i}mw^{m+n-1}=m\delta_{m+n,0}
\end{align*}
および
\begin{align*}
  \comm{\alpha_m}{\phi_0}&=\sqrt{\dfrac{2}{\alpha'}}\oint_0\dfrac{\dd{w}}{2\pi\i}\oint_w\dfrac{\dd{z}}{2\pi\i}\dfrac{z^m}{w}\underbrace{J(z)X(w)}_{\sim -\i\sqrt{(\alpha'/2)}(z-w)^{-1}}\\
  &=-\i\oint_0\dfrac{\dd{w}}{2\pi\i}w^{m-1}=\i\delta_{m,0}
\end{align*}
と求まる（後者は$\comm{p,x}=-\i$のアナロジー）。

$\alpha_n\coloneqq\sqrt{n} a_n\qc \alpha_{-n}\coloneqq\sqrt{n}a_n^\dagger\ (n\ge 1)$とすると生成消滅演算子の$\mathbb{Z}\setminus\qty{0}$個のペアが得られる。$\alpha_0, \wt{\alpha}_0$は$\phi_0$以外の任意の演算子と交換するので
\begin{gather*}
  \alpha_n\ket{p_L,p_R}=\wt\alpha_n\ket{p_L,p_R}=0\quad(n\ge 1)\\
  \alpha_n\ket{p_L,p_R}=p_L\ket{p_L,p_R}\qc \wt\alpha_n\ket{p_L,p_R}=p_R\ket{p_L,p_R}
\end{gather*}
を満たすようにフォック真空を作れる。フォック空間の基底はフォック真空に任意の個数の生成演算子を作用させて得られる。

ところで
\begin{align*}
  \comm{\alpha_0}{\e^{\i p\phi_0}}=p\e^{\i p\phi_0}
\end{align*}
なので
\begin{align*}
  \ket{p_L,p_R}=\e^{\i p_L\phi_0}\e^{\i p_R\bar{\phi}_0}\ket{0,0}
\end{align*}
と見なせる。

Virasoro演算子を求めよう。その前に
\begin{align*}
  J(z)J(z)=\sum_{m,n}\alpha_m\alpha_nz^{-m-n-2}=\sum_{n,m}\alpha_{m}\alpha_{n-m}z^{-n-2}\quad(n\to n-m)
\end{align*}
に注意する。また正規積では生成演算子が左に来ることを思い出すと
\begin{align*}
  L_n&=\oint\dfrac{\dd{z}}{2\pi\i}z^{n+1}T(z)=\dfrac{1}{2}\sum_{m\in\mathbb{Z}}\nprod{\alpha_{n-m}\alpha_m}\\
  &=\left\{\begin{array}{ll} \dfrac{1}{2}\sum_{m\in\mathbb{Z}}\alpha_{n-m}\alpha_m & (n\neq 0)\\ \dfrac{1}{2}\alpha_0^2 + \sum_{m\ge 1}\alpha_{-m}\alpha_m & (n=0)   \end{array}\right..
\end{align*}
この表式を用いるとフォック真空をVirasoro演算子の言葉で特徴づけられる：
\begin{gather*}
  L_n\ket{p_L,p_R}=\wt{L}_n\ket{p_L,p_R}=0\quad(n\ge 1)\quad(\text{消滅演算子が右に来るので})\\
  L_0\ket{p_L,p_R}=\dfrac{p_L^2}{2}\ket{p_L,p_R}\qc \wt{L}_0\ket{p_L,p_R}=\dfrac{p_R^2}{2}\ket{p_L,p_R}.
\end{gather*}
また$p_L=p_R=0$のフォック真空は共形不変。

カレントの共形ウェイトを調べる。
\begin{align*}
  T(z)J(w)=\lim_{y\to z}\dfrac{1}{2}\qty[J(y)J(z)-\ev{J(y)J(z)}]J(w)
\end{align*}
である。
\begin{align*}
  T(z)J(w)&=\dfrac{1}{2}\lim_{y\to z}(\nprod{J(y)J(z)J(w)}+\ev{J(z)J(w)}J(y)+\ev{J(y)J(w)}J(z))\\
  &\sim \dfrac{J(z)}{(z-w)^2}\sim \dfrac{J(w)}{(z-w)^2}+\dfrac{\partial_w J(w)}{z-w}\quad (J(z)\sim J(w)+(z-w)\partial_w J(w))
\end{align*}
となり、カレント$J$は共形ウェイト$1$の共形場であるとわかる。

この理論のセントラルチャージを調べる。
\begin{align*}
  T(z)T(w)&=\dfrac{1}{4}\qty(J(z)J(z')-\ev{J(z)J(z')})(J(w)J(w')-\ev{J(w)J(w')})\\
  &=\dfrac{1}{4}\qty[\ev{J(z)J(w)}\ev{J(z')J(w')}+\ev{J(z)J(w')}\ev{J(z')J(w)}
  +4\ev{J(z)J(w)}\nprod{J(z')J(w')}]\\
  &=\dfrac{1/2}{(z-w)^2}+\dfrac{2T(w)}{(z-w)^2}+\dfrac{\partial_wT(w)}{z-w}\quad(\text{$T(z')$を$w$付近で展開}).
\end{align*}
よって$c=1$と分かった。

## 頂点作用素（Vertex operator）

電荷（運動量）$p$の頂点作用素を以下で定義する
\begin{align*}
  V_p(z)&\coloneqq \nprod{\exp\qty[\i\sqrt{\dfrac{2}{\alpha'}}pX(z)]}\\
  &\coloneqq \exp\qty[p\sum_{n=1}^\infty \dfrac{\alpha_{-n}}{n}z^n]\exp\qty[-p\sum_{n=1}^\infty\dfrac{\alpha_n}{n}z^{-n}]\e^{\i p\phi_0}z^{p\alpha_0}.
\end{align*}

\begin{align*}
  \ket{p_L,p_R}=\lim_{z,\bar{z}\to 0}V_{p_L}(z)\overline{V_{P_R}}(\bar{z})\ket{0}
\end{align*}
を示す。頂点演算子のうち$\alpha_n\ (n\ge 1)$の部分はその右側と可換で$\ket{0}$にかかって消える。よって$z\to 0$の極限が正当化される。また$z^{p\alpha_0}=\e^{p\alpha_0\ln z}$と見ると、$\alpha_0\ket{0}=0$だから結局$\e^{\i p\phi_0}$の項しか残らない。

頂点演算子がカレントに対して電荷$p$を持つことを示す。
\begin{align*}
  J(z)V_p(w)=J(z)\nprod{\sum_{n=0}^\infty\dfrac{1}{n!}\qty(\i\sqrt{\dfrac{2}{\alpha'}}p{X(w)})^n}.
\end{align*}
ここで$J(z)X(w)\sim -\i\sqrt{\dfrac{\alpha'}{2}}\dfrac{1}{z-w}$を思い出す。
\begin{align*}
  J(z)\nprod{X(w)^n}&=J(z)X(w)^n-J(z)\ev{X(w)^n}\\
  &=\nprod{J(z)X(w)^n}+n\ev{J(z)X(w)}\nprod{X(w)^{n-1}}\\
  &\sim \sqrt{\dfrac{\alpha'}{2}}\dfrac{-\i n}{z-w}\nprod{X(w)^{n-1}}
\end{align*}
となるので
$$
J(z)V_p(w)=\dfrac{p}{z-w}V_p(w)
$$
が得られた。

頂点作用素が共形ウェイト$p^2/2$のプライマリー場であることを示す。
\begin{align*}
  T(z)V_p(w)&=\dfrac{1}{2}\nprod{J(z)J(z)}\nprod{\sum_{n=0}^\infty\dfrac{1}{n!}\qty(\i\sqrt{\dfrac{2}{\alpha'}}p{X(w)})^n}.
\end{align*}
ここで$\nprod{JJ}\nprod{X^n}$について（また$J=\sqrt{\dfrac{2}{\alpha'}}\i\partial X$より）
\begin{align*}
  \dfrac{n(n-1)}{2}\ev{JX}\ev{JX}\nprod{X^{n-2}}&=-\dfrac{n(n-1)\alpha'}{4(z-w)^2}\nprod{X^{n-2}}\\
  2n\ev{JX}\nprod{JX^{n-1}}&=\dfrac{2n}{z-w}\nprod{\partial X(z)\cdot X(w)^{n-1}}\sim\dfrac{2}{z-w}\partial\nprod{X(w)^n}\quad((\partial X)(z)=\partial X(w)+(z-w)\partial^2X(w))
\end{align*}
となるので（$2n$の$2$はどっちの$J$が2点関数に入るか）
\begin{align*}
  T(z)V_p(w)&\sim\dfrac{p^2/2}{(z-w)^2}V_p(w)+\dfrac{\partial_w V_p(w)}{z-w}
\end{align*}
が得られる。

頂点演算子同士のOPEを計算しておく。
\begin{align*}
  V_{p}(z)V_{q}(w)&=\nprod{\sum_{m=0}^\infty \dfrac{1}{m!}\qty[\i\sqrt{\dfrac{2}{\alpha'}}p{X(z)}]^m}
  \nprod{\sum_{n=0}^\infty \dfrac{1}{n!}\qty[\i\sqrt{\dfrac{2}{\alpha'}}q{X(w)}]^n}.
\end{align*}
かけた後出てくる、$m+n$次の正規積$\nprod{X(z)^mX(w)^n}$の含まれる項に着目する。係数には$X(z)$と$X(w)$の2点関数がいくつか出てくるはず。それが$k$個あるとする（つまりもともと$\nprod{X(z)^{m+k}}$と$\nprod{X(w)^{n+k}}$の積だったところから出てきた項とする）と、その項は
\begin{align*}
  &\quad\dfrac{\qty(\i\sqrt{2/\alpha'})^{k+m}p^{k+m}}{(k+m)!}\dfrac{\qty(\i\sqrt{2/\alpha'})^{k+n}q^{k+n}}{(k+n)!}
  \dfrac{(k+m)!}{k!m!}\dfrac{(k+n)!}{k!n!}k!\qty(-\dfrac{\alpha'}{2}\ln(z-w))^{k}\nprod{X(z)^mX(w)^n}\\
  &=\dfrac{1}{k!}\qty(pq\ln(z-w))^{k}\cdot \qty(\i\sqrt{\dfrac{2}{\alpha'}})^{m+n} \dfrac{p^mq^n}{n!m!}\nprod{X(z)^mX(w)^n}
\end{align*}
と変形できる。ここまで来ればほぼ明らかで、まず$k$は各$m+n$に対して$0$から$\infty$まで取れるのでその部分で$\e^{pq\ln(z-w)}=(z-w)^{pq}$となる。次に決まった$l$を$m+n$に分割する方法は$l+1$通りあって、
\begin{align*}
  \sum_{\substack{m,n\\m+n=l}}\qty(\i\sqrt{\dfrac{2}{\alpha'}})^{m+n} \dfrac{p^mq^n}{n!m!}\nprod{X(z)^mX(w)^n}
  =\qty(\i\sqrt{\dfrac{2}{\alpha'}})^{l} \dfrac{(p+q)^l}{l!}\nprod{X(w)^l}
\end{align*}
とまとめられる（$X(z)$をTaylor展開して出てくる$(z-w)$次以降の項はどうあっても特異性を打ち消すので、$z\sim w$付近での特異性を考える場合においては$X(z)$は$X(w)$で置き換えてよい）。以上から
$$
V_p(z)V_q(w)\sim (z-w)^{pq}V_{p+q}(w)
$$
が分かる。$V_0(w)$だけは$\ket{0}$にかけても$0$にならないので
$$
\mel{0}{V_p(z)V_{-p}(w)}{0}=\dfrac{1}{(z-w)^{p^2}}
$$
となり、$p+q\neq 0$なら
$$
\mel{0}{V_p(z)V_{q}(w)}{0}=0
$$
となる。


