---
title: 清水熱力学1章メモ
date: '2022-06-05'
tags:
  - phys
  - thermodynamics
description: "清水熱力学1章のメモ。"
---

<div className="hidden">$$
\definecolor{bg}{rgb}{0, 0.168, 0.212}
\newcommand{\lointerv}{[\kern -0.32em\raise 0.1ex{\scriptsize\bullet}\kern -0.37em\raise -0.32ex{\color{bg}\Large\cdot}}
\newcommand{\rointerv}{\kern 0.15em]\kern -0.32em\raise 0.1ex{\scriptsize\bullet}\kern -0.37em\raise -0.31ex{\color{bg}\Large\cdot}\kern -0.07em}
\DeclarePairedDelimiters{\IntervalOO}{\lointerv}{\rointerv}
\newcommand{\ivo}[2]{\IntervalOO{#1, #2}}
$$</div>

- [x] この本では平衡系の熱力学を扱う。
## 1.1 ミクロ・マクロと陥りやすい幻想
- [x] 「すべての自然現象はミクロな世界の基本法則に支配されている」は正しそう
- [x] 「初期条件を与えれば、マクロ系のこともミクロ系の運動方程式を解いて予言することが原理的にできる」は幻想
  - 原理的に解けない（例えば三体問題は、解析的に表される非自明な運動の積分が存在しないので求積法によって解が求められないらしい。）
  - 近似的に解くことも不可能（「原理的に」を否定したいので計算機は関係ないのでは？カオスになるから摂動論でも近似的に解けない、とかなら納得。三体問題が解けないのも、可積分系の摂動系である条件を満たすものは非可積分、という話らしいので繋がってそう。）
  - 初期条件のわずかな差で結果が著しく変わる（初期条件を正確に知るのは原理的には可能と想定すべきでは？「初期条件を与えれば原理的に運動方程式を解ける」に対して「初期条件を与えられない」はむしろ肯定。）

カオス、エルゴード性（混合性はよく知らない）と関連している。あとエルゴード性が「統計力学が**現実の**系で成立していることの理由」というのは本当ですか？

- [x] 扱いたいスケールを決めてから**有効理論**で記述する。

## 1.2 熱力学の意義
- [x] 熱力学は少ない変数でマクロ系の「本質」（平衡状態とその間の遷移）を記述したもの。
- [x] 操作限界（不可逆性）を記述（熱力学第二法則）
- [x] マクロレベルの堅牢な理論

## 1.3 熱力学の様々な流儀
大きく分けて2つの流儀がある。
1. 相加変数（またの名を示量変数。エネルギー、物質量 etc.）を基本変数とする。Gibbs が創始。よさげ。
2. 一部の変数が狭義示強変数（示量変数の密度などを除いた示強変数。温度、圧力 etc.）になったもの。一次相転移がある場合不完全。相対論的重力の効果があってもだめらしい。

ここでは1.の流儀を採用する。先入観を捨てよう。

## 1.4 用語や記号に関する注意
言葉の使い方は人それぞれ。
「狭義増加関数」の方が一般的？

## 付録A
:::def $o$（スモールオー）
$a\in \R\cup\qty{\pm\infty}$について、ある$\ve>0$が存在して、任意の$x\in U(a,\ve)\setminus\qty{a}$で$g(x)\neq 0$のとき
\begin{align}
  \lim_{\substack{x\to a\\ x\neq a}}\dfrac{f(x)}{g(x)}=0\stackrel{\mathrm{def}}{\iff}f(x)=o(g(x))\quad(x\to a)
\end{align}
:::

:::def $O$（ラージオー）
$a\in \R\cup\qty{\pm\infty}$について、ある$\ve>0$が存在して、任意の$x\in U(a,\ve)\setminus\qty{a}$で$g(x)\neq 0$のとき
\begin{align}
  {}^\exists c\in\R\setminus\qty{0},\,\lim_{\substack{x\to a\\ x\neq a}}\dfrac{f(x)}{g(x)}=c\stackrel{\mathrm{def}}{\iff}f(x)=\order{g(x)}\quad(x\to a)
\end{align}
:::

$x$がどこへ近づくときの話か、が大事。

## 1.5 微分と偏微分
左微係数、右微係数はそれぞれ
\begin{align}
  D_x^-f(x)\coloneqq \lim_{\ve\to+0}\dfrac{f(x)-f(x-\ve)}{\ve}\qc D_x^+f(x)\coloneqq \lim_{\ve\to+0}\dfrac{f(x+\ve)-f(x)}{\ve}
\end{align}
と定義される。$D^-_xf(x)=D^+_xf(x)$ならば$f(x)$は$x=x$において微分可能といい、$f'(x)=D_x^-f(x)=D_x^+f(x)$。微分可能$\implies$連続だが逆は真ならず。

:::thm 問題1.1
$\R$の開区間$I$で定義された実数値関数$f$と$a\in I$および$c\in \R$について以下は同値。
1. $f(x)$は$x=a$で微分可能で$f'(a)=c$。
2. $f(x)=f(a)+c(x-a)+o(x-a)\quad (x\to a)$。
:::

:::proof
\begin{align}
  &\lim_{\ve\to +0}\dfrac{f(x)-f(x-\ve)}{\ve}=\lim_{\ve\to +0}\dfrac{f(x+\ve)-f(x)}{\ve}\\
  \iff&\lim_{\ve\to -0}\dfrac{f(x+\ve)-f(x)}{\ve}=\lim_{\ve\to +0}\dfrac{f(x+\ve)-f(x)}{\ve}\\
  \iff& {}^\exists c\in\R,\,\lim_{\ve\to 0}\dfrac{f(x+\ve)-f(x)}{\ve}=c
\end{align}
に気を付ける。
\begin{align}
  \lim_{\ve\to 0}\dfrac{f(a+\ve)-f(a)}{\ve}=c\iff f(a+\ve)-f(a)-c\ve=o(\ve)\quad(\ve\to 0)
\end{align}
であり、右側の式で$\ve=x-a$を代入すれば示せた。
:::

偏微分は他の変数を固定した微分。何を固定するかには気をつけねばならない。

:::details 問題1.5 回答
$(x,y)\in\R^2$で定義された$Z=x^2\e^y$について、$\eta\coloneqq y-x$とする。
$Z=x^2\e^{x+\eta}$に気を付けて
\begin{align}
  \qty(\pdv{Z}{x})_\eta&=(2x+x^2)\e^{x+\eta}=x(x+2)\e^y\\
  \qty(\pdv{Z}{x})_y&=2x\e^y
\end{align}
違いますね。
:::

:::details 問題1.6 回答
$Z(x,y)=W(\xi,\eta)$と記号を変えれば混乱が少ない。

(i) 合成関数の微分法を適用して
\begin{align}
  \qty(\pdv{Z}{\xi})_\eta&=\qty(\pdv{Z}{x})_y\qty(\pdv{x}{\xi})_\eta+\qty(\pdv{Z}{y})_x\qty(\pdv{y}{\xi})_\eta
\end{align}
と分かる。$\ds\qty(\pdv{Z}{\eta})_\xi$は上の式の$\xi,\eta$を入れ替えただけ。

(ii) 納得しました。

(iii)
\begin{align}
  f(x,y)&=(x+1)(x-y+1)\\
  g(x,\eta)&=(x+1)(\eta+1)
\end{align}
について
\begin{align}
  \qty(\pdv{g}{x})_\eta&=\eta+1=x+y-1.
\end{align}

(iv) $Z(x_1,\dots,x_n)=W(\xi_1,\dots,\xi_n)$と表せる（拘束条件とかがなければ自由度$n$は一致していないといけない気がする）とき
\begin{align}
  \qty(\pdv{Z}{\xi_1})_{\xi_2,\dots,\xi_n}&=\sum_{i=1}^n\qty(\pdv{Z}{x_i})_{\qty{x_j}_j\setminus\qty{x_i}}\qty(\pdv{x_i}{\xi_1})_{\xi_2,\dots,\xi_n}
\end{align}
となる。
:::


:::def 定義（$\R^m$上の関数の微分可能性）
$\R^m$上の開領域$U$で$f(x_1,\dots,x_m)$の$n$階までのすべての偏導関数が存在して、それらがすべて連続$\stackrel{\mathrm{def}}{\iff} f(x_1,\dots,x_m)$は$U$上で$C^n$級（$n$階連続的微分可能）。
:::

:::details 問題1.3 回答
\begin{align}
  f(x,y)=\left\{\begin{aligned}
  &xy\dfrac{x^2-y^2}{x^2+y^2}&(x,y)\neq(0,0)\\
  &0 & (x,y)=(0,0)
  \end{aligned}\right.
\end{align}
この関数は連続である（極座標表示すれば自明）。とりあえず$(x,y)\neq(0,0)$において偏微分して
\begin{align}
  \pdv{f}{x}&=y\dfrac{x^2-y^2}{x^2+y^2}+xy\dfrac{4xy^2}{(x^2+y^2)^2}=\dfrac{y(x^4-y^4)+4x^2y^3}{(x^2+y^2)^2}
  =y\qty(1+2y^2\dfrac{x^2-y^2}{(x^2+y^2)^2})
\end{align}
となる。一方$(x,y)=(0,0)$においては$\partial_x f(0,0)=\lim_{\ve\to 0}(f(\ve,0)-f(0,0))/\ve=0$である（$y=0$で固定すれば常に$0$なので）。
よって$\partial_xf(x,y)$は$\R^2$上で連続である（$-1$倍すれば$\partial_yf(x,y)$も連続なことが分かるので$C^1$級ではある）。さらに$(x,y)\neq(0,0)$において偏微分すれば
\begin{align}
  \pdv{f}{y}{x}&=1+\dfrac{6x^2y^2-10y^4}{(x^2-y^2)^2}-2\dfrac{2y^3(x^2-y^2)}{(x^2+y^2)^2}2y\\
  &=1+2\sin^2\theta(3\cos^2\theta-5\sin^2\theta)-8\sin^3\theta(\cos^2\theta-\sin^2\theta)\quad(x,y)\neq (0,0)
\end{align}
となる。明らかに原点に近づく方向に極限値が依存しており、原点で不連続となるため$C^2$級ではない。

もっと穏便に示したければ、後で証明する定理1.2を用いる。原点において
\begin{align}
  \pdv{f}{y}{x}&=\lim_{\ve\to 0}\dfrac{\partial_x f(0,\ve)-\partial_xf(0,0)}{\ve}=\dfrac{-\ve-0}{\ve}=-1\\
  \pdv{f}{x}{y}&=\lim_{\ve\to 0}\dfrac{\partial_y f(\ve, 0)-\partial_yf(0,0)}{\ve}=\dfrac{\ve-0}{\ve}=1
\end{align}
となり、微分が可換ではないため、定理1.2から少なくとも原点を含む任意の開領域では$f$が$C^2$級ではないことが分かる。
:::

:::thm 数学の定理1.1
$\bm{a}$の開近傍$U\subset \R^m$において実数値関数$f$が連続的微分可能であるとする。$\nabla f(\bm{a})\coloneqq \mqty({\partial_{x_1}f(\bm{a})}&\dots&{\partial_{x_m}f(\bm{a})})$と定義すると
\begin{align}
  f(\bm{x})&=f(\bm{a})+\nabla f(\bm{a})\cdot(\bm{x}-\bm{a})+o(\abs{\bm{x}-\bm{a}})\quad(\bm{x}\to\bm{a})\label{eq:thm1-1}
\end{align}
が成り立つ。
:::
:::proof
$U$が開集合であることから${}^\exists \ve>0,\,U(\bm{a},\ve)\subset U$。したがって$\abs{\bm{h}}<\ve\implies \bm{a+h}\in U$となる（平均値の定理を使うのに大事）。
ここでは
\begin{align}
  f(\bm{a}+\bm{h})-f(\bm{a})=\nabla f(\bm{a})\cdot\bm{h}+o(\abs{\bm{h}})\quad(\bm{h}\to 0)
\end{align}
を示す。
\begin{align}
  \bm{h}(i)&\coloneqq \mqty(0&\dots&0&h_i&\dots&h_m)^\mathrm{T}=\sum_{k=i}^mh_k\mathbb{e}_k\quad(i=1,\dots,m)\\
  \bm{h}(m+1)&\coloneqq 0
\end{align}
と定義すれば、平均値の定理を$m$回適用することにより
\begin{align}
  f(\bm{a+h})-f(\bm{a})&=f(\bm{a}+\bm{h}(1))-f(\bm{a}+\bm{h}(m+1))\\
  &=\sum_{i=1}^{m}\qty[f(\bm{a+h}(i))-f(\bm{a+h}(i+1))]\\
  &=\sum_{i=1}^mh_i{\pdv{f}{x_i}}(\bm{a}+\underbrace{\bm{a}+\theta_ih_i\mathbb{e}_i+\bm{h}(i+1)}_{\ds\eqqcolon\tilde{\bm{h}}(i)})
\end{align}
を満たす$\theta_1,\dots,\theta_m\in\ivo{0}{1}$が存在することが言える。このとき
\begin{align}
  &\dfrac{1}{\abs{\bm{h}}}\abs{f(\bm{a+h})-f(\bm{a})-\nabla f(\bm{a})\cdot \bm{h}}\\
  &=\dfrac{1}{\abs{\bm{h}}}\abs{\sum_{i=1}^mh_i\qty[{\pdv{f}{x_i}}(\bm{a+\tilde{h}}(i))-\pdv{f}{x_i}(\bm{a})]}\quad\mqty(\text{分子は内積の形をしているので}\\\text{Schwarzの不等式を使える})\\
  &\le\qty[\sum_{i=1}^m\qty[{\pdv{f}{x_i}}(\bm{a+\tilde{h}}(i))-\pdv{f}{x_i}(\bm{a})]^2]^{1/2}\to 0\quad(\bm{h}\to 0)
\end{align}
となる。実際、$\bm{h}\to 0$で$\tilde{\bm{h}}\to 0$となるし、連続的微分可能の条件から$\ds\pdv{f}{x_i}$は$\bm{a}$において連続である。

（実は縦ベクトル、横ベクトルに気を遣っている（添字の上下は気を遣っていない）。$\nabla f$は共変ベクトルなので横ベクトルになっており、$\cdot$を打たなくとも行列積として捉えられる。）
:::

\eqref{eq:thm1-1}は問題1.1の2.の条件を一般化した形をしている。熱力学でよく使う形は
\begin{align}
  \dd{f}&\coloneqq\nabla f(\bm{x})\cdot\dd{\bm{x}}\\
  f(\bm{x}+\dd{\bm{x}})-f(\bm{x})&=\dd{f}+o(\abs{\dd{\bm{x}}})
\end{align}
らしい。

:::thm 数学の定理1.2
開領域$U\subset\R^m$において$f$が$C^n$級であれば、$U$における$n$階までのすべての偏導関数は偏微分の順序に依らない。
:::
:::proof
$n=2$について示せば、あとは任意の置換が互換の積で書けることと、$C^n$級なら$n-2$階偏導関数は$C^2$級であることから従う。
また、$n=2$で示す場合は他の座標は固定されるので$\R^2$で考えても同じことである。以下では$(a,b)$の任意の開近傍$V\subset\R^2$について、$V$上で$f(x,y)$が$C^2$級ならば$\partial_x\partial_y f(a,b)=\partial_y\partial_x f(a,b)$を示す。
\begin{align}
  \varDelta(h,k)&\coloneqq f(a+h,b+k)-f(a+h,b)-f(a,b+k)+f(a,b)\\
  &=\varphi(a+h)-\varphi(a)\quad(\varphi(x)\coloneqq f(x,b+k)-f(x,b))\\
  &=h(\partial_x\varphi(a+\theta_xh))\\
  &=h(\partial_x f(a+\theta_xh,b+k)-\partial_xf(a+\theta_xh,b))\\
  &=hk\partial_y\partial_xf(a+\theta_xh,b+\theta_yk)
\end{align}
となる$\theta_x,\theta_y\in\ivo{0}{1}$が存在することが平均値の定理から言える。$\partial_y\partial_xf$は$(a,b)$において連続なので
\begin{align}
  \lim_{\substack{(h,k)\to 0\\hk\neq0}}\dfrac{\varDelta(h,k)}{hk}&=\partial_y\partial_xf(a,b)
\end{align}
となる。一方、
\begin{align}
  \varDelta(h,k)&=\psi(b+k)-\psi(b)\quad(\psi(y)\coloneqq f(a+h,y)-f(a,y))\\
  &=k(\partial_y\varphi(b+\theta'_yk))\\
  &=kh\partial_x\partial_yf(a+\theta'_xh,b+\theta'_yk)
\end{align}
より
\begin{align}
  \lim_{\substack{(h,k)\to 0\\hk\neq0}}\dfrac{\varDelta(h,k)}{hk}&=\partial_x\partial_yf(a,b)
\end{align}
となり、偏微分が交換できることが示せた。
:::

熱力学に現れる関数は、相転移領域以外では$C^\infty$級らしい。

:::details 問題1.4 回答
$(x,y)\in\R^2$で定義された$f(x,y)=x^2\e^y$について
(i)
\begin{align}
  \dd{f}&=2x\e^y\dd{x}+x^2\e^y\dd{y}\\
  &\stackrel{(x,y)=(0,0)}{=}0\\
  &\stackrel{(x,y)=(1,1)}{=}2\e\dd{x}+\e\dd{y}
\end{align}
(ii),(iii) $f_{xx}=2\e^y,f_{xy}=f_{yx}=2x\e^y,f_{yy}=x^2\e^y$はいずれも$\R^2$全体で連続なので$f$は$\R^2$で$C^2$級。
:::

$f(x)$が$x=a$の近傍で$x-a$の収束する冪級数で展開できる$\stackrel{\mathrm{def}}{\iff}f(x)$は$x=a$で解析的。
\begin{align}
  \left\{\begin{aligned}
  &\e^{-1/x^2}&(x\neq 0)\\
  &0 & (x=0)
  \end{aligned}\right.
\end{align}
や
\begin{align}
  \left\{\begin{aligned}
  &\e^{-1/x}&(x>0)\\
  &0 & (x\le0)
  \end{aligned}\right.
\end{align}
は$C^\infty$級だが解析的でない関数の例。

# 参考文献

1. 清水 明『熱力学の基礎 第2版 I 熱力学の基本構造』（2021、東京大学出版会）
1. [ハミルトン系の非可積分性の証明（PDF）](https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/1827-01.pdf)
1. 杉浦 光男『解析入門I』（1980、東京大学出版会）
