---
title: Lorentz変換
date: "2022-02-01"
description: Lorentz変換に関する基本的なあれこれをまとめています。
tags:
    - phys
---

# Lorentz変換

$K$系に対する$K'$系の速さを$V$、方向を$x$軸にとる。Minkowski時空内の回転はMinkowski時空での距離を不変にする：
\begin{align}
(ct)^2-\bm{x}^2&=(ct')^2-\bm{x}'^2
\end{align}
ので、ある角度$\phi$を用いて
\begin{align}
  ct&=ct'\cosh\phi+x'\sinh\phi\\
  x&=ct'\sinh\phi+x'\cosh\phi\\
  y&=y',\ z=z'\ (\text{$K$に対して$K'$は$y,z$方向には動かない})
\end{align}
と表せる。$K'$系の原点の運動に着目すれば、$\bm{x}'=0$より
\begin{align}
  \dfrac{V}{c}=\eval{\dfrac{x}{ct}}_{K'\text{の原点}}=\tanh\phi
\end{align}
と$V$と$\phi$が対応する（$\phi$はrapidityと呼ばれる）。ここで $\cosh^2\phi-\sinh^2\phi=1$に気を付けて
\begin{align}
  \beta\coloneqq \dfrac{V}{c}=\tanh\phi,\ \gamma\coloneqq \dfrac{1}{\sqrt{1-\beta^2}}=\cosh\phi
\end{align}
なるLorentzパラメータを導入すれば$\sinh=\beta\gamma$となり、
\begin{align}
  \mqty[ct\\x\\y\\z]&=\mqty[\dmat{\gamma & \gamma\beta \\ \gamma\beta & \gamma, 1, 1}]\mqty[ct'\\x'\\y'\\z']\label{eq:x-lorentz}
\end{align}
とLorentz変換が行列にまとまる。$\gamma^2(1-\beta^2)=1$より
\begin{align}
  \mqty[\gamma &\gamma\beta\\\gamma\beta&\gamma]\mqty[\gamma&-\gamma\beta\\-\gamma\beta&\gamma]=\mqty[\dmat{1,1}]
\end{align}
となって逆変換もわかる。

# 速度の変換

Minkowski時空内の粒子の運動を表す4元ベクトル
\begin{align}
  \mqty[ct& x(t) & y(t) & z(t)]^\mathrm{T}
\end{align}
のLorentz変換の式を思い浮かべ、両辺を$ct'$で微分すれば
\begin{align}
  \mqty[\dv*{t}{t'}\\\dv*{x}{(ct')}\\\dv*{y}{(ct')}\\\dv*{z}{(ct')}]&=\mqty[\dmat{\gamma & \gamma\beta \\ \gamma\beta & \gamma, 1, 1}]\mqty[1\\v_x'/c\\v_y'/c\\v_z'/c]
\end{align}
となる。よって
\begin{align}
  \dfrac{v_x}{c}&=\dv{x}{(ct)}=\dfrac{\dv*{x}{(ct')}}{\dv*{t}{t'}}=\dfrac{\beta + v_x'/c}{1+v_x'\beta/c}=\dfrac{1}{c}\dfrac{v_x'+V}{1+v_x'V/c^2}\\
  \dfrac{v_y}{c}&=\dv{y}{(ct)}=\dfrac{\dv*{y}{(ct')}}{\dv*{t}{t'}}=\dfrac{v_y'/c}{\gamma(1+v_x'\beta/c)}\\
  \dfrac{v_z}{c}&=\dv{z}{(ct)}=\dfrac{\dv*{z}{(ct')}}{\dv*{t}{t'}}=\dfrac{v_z'/c}{\gamma(1+v_x'\beta/c)}
\end{align}

# 4元速度

\begin{align}
  u^\mu\coloneqq \dv{x^\mu}{s}
\end{align}
とすれば、$\dd{s}$はスカラーなので$u^\mu$は4元ベクトルである。$\dd{s}$が粒子の静止系での$c\dd{t}$であることに留意すればLorentz変換から、粒子が速度$\bm{v}$で動いているように見える慣性系においては
\begin{align}
  \dd{s}=c\dd{t}\sqrt{1-v^2/c^2}\eqqcolon \dfrac{c\dd{t}}{\gamma_v}
\end{align}
と書ける。これを用いると
\begin{align}
  u^\mu=\mqty[\gamma_v&\bm{v}\gamma_v/c]^\mathrm{T}
\end{align}
と4元速度が表せる。さらに
\begin{align}
  \dv{\gamma_v}{t}&=\dfrac{\bm{v}/c^2}{(1-v^2/c^2)^{3/2}}\cdot\dv{\bm{v}}{t}=(\gamma_v^3/c^2)\bm{v}\cdot\bm{a}\\
  \dv{u^i}{s}&=\dfrac{\gamma_v}{c}\dv{(v^i\gamma_v/c)}{t}=\dfrac{\gamma_v^4v^i}{c^4}\bm{v}\cdot\bm{a}+\dfrac{\gamma_v^2}{c^2}a^i
\end{align}
に気を付けると4元加速度
\begin{align}
  w^\mu\coloneqq \dv[2]{x^\mu}{s}=\dv{u^\mu}{s}=\dfrac{\gamma_v^4}{c^3}\bm{v}\cdot\bm{a}\mqty[1\\\bm{v}/c]+\dfrac{\gamma_v^2}{c^2}\mqty[0\\\bm{a}]\label{eq:w-general}
\end{align}
の表式が分かる（ほんと？）。$\dd{x^\mu}\dd{x_\mu}=\dd{s^2}$より$u^\mu u_\mu=1$であり、さらに微分して$u^\mu w_\mu=0$も分かる（成分で内積を計算しても確かめられる）。

# 等加速度運動

等加速度運動する粒子の速度$v=0$の慣性系（各瞬間ごとに与えられる）において4元加速度は、$x$軸を上手く（加速度のかかる向きに）取れば
\begin{align}
  w^\mu=\mqty[0&w/c^2&0&0]^\mathrm{T}\quad(w\ge 0)\label{eq:w-special}
\end{align}
と表せる。このとき
\begin{align}
  w^\mu w_\mu=-w^2/c^4\label{eq:w-invariant}
\end{align}
となり、これはLorentz不変な条件になっている（逆にこの条件をみたすどんな4元加速度ベクトルにもLorentz変換によって移れることはLorentz変換が$\eta$を保つという条件のみで定義されることから明らか）。粒子に対して$x$軸方向に動く慣性系における4元加速度は、\eqref{eq:w-special}に\eqref{eq:x-lorentz}と同じLorentz変換を施して得られ、\eqref{eq:w-general}の$y,z$成分が$0$となった形を持つ。それが\eqref{eq:w-invariant}の条件を満たすことから、
\begin{align}
  -\dfrac{w^2}{c^4}&=(w^0)^2-(w^1)^2\label{eq:w-scalar-equalize}\\
  &=\qty(\dfrac{\gamma_v^4vw'}{c^3})^2-\qty(\dfrac{\gamma_v^4v^2w'}{c^4}+\dfrac{\gamma_v^2w'}{c^2})^2\\
  &=\qty(\dfrac{\gamma_v^2w'}{c^2})^2\qty[\qty(\dfrac{\gamma_v^2v}{c})^2-\qty(\dfrac{\gamma_v^2v^2}{c^2}+1)^2]\\
  &=\qty(\dfrac{\gamma_v^2w'}{c^2})^2\qty[\qty(\dfrac{\gamma_v^2v}{c})^2\dfrac{1}{\gamma_v^2}-2\dfrac{\gamma_v^2v^2}{c^2}-1]\\
  &=-\qty(\dfrac{\gamma_v^2w'}{c^2})^2\qty[\dfrac{\gamma_v^2v^2}{c^2}+1]\\
  &=-\dfrac{\gamma_v^6w'^2}{c^4}\\
  \therefore \abs{w}&=\gamma_v^3\abs{w'}\quad(\text{慣性系の$x$軸の向きを揃えれば絶対値が外れる})\label{eq:wlen-lorentz-change}
\end{align}
と、3次元の加速度がLorentz変換によってどのように変化するかが分かる（これは等加速度運動でなくとも成り立つ？）。
　ここで
\begin{align}
  \bigstar\coloneqq \dv{t}(\gamma_vv)
\end{align}
と置き、再び\eqref{eq:w-scalar-equalize}を、今度は4元加速度の定義に（一部）戻って計算すると
\begin{align}
  -\dfrac{w^2}{c^4}&=(w^0)^2-\qty\bigg[\dfrac{\gamma_v}{c^2}\underbrace{\dv{(\gamma_vv)}{t}}_{\bigstar}]^2=\underbrace{\mqty(\dfrac{\gamma_v^4vw'}{c^3})^2}_{\substack{\ds=\gamma_v^8v^2w'^2/c^6\\\ds=\gamma_v^2v^2w^2/c^6\eqref{eq:wlen-lorentz-change}}}-\dfrac{\gamma_v^2}{c^4}\bigstar^2\\
  \therefore \bigstar^2&=\dfrac{w^2}{\gamma_v^2}\qty(1+\gamma_v^2\dfrac{v^2}{c^2})=w^2\\
  \therefore \dv{t}(\gamma_vv)&=\bigstar=w\quad(\text{慣性系の$x$軸の向きを揃えたものとする})
\end{align}
となる。積分して
\begin{align}
  wt&=\dfrac{v}{\sqrt{1-v^2/c^2}}\\
  \therefore v^2&=w^2t^2(1-v^2/c^2)\\
  \therefore v&=\dfrac{wt}{\sqrt{1+w^2t^2/c^2}}
\end{align}

