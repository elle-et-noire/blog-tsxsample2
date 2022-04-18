---
title: Lorentz変換
date: "2022-02-01"
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
  \mqty[ct\\x\\y\\z]&=\mqty[\dmat{\gamma & \gamma\beta \\ \gamma\beta & \gamma, 1, 1}]\mqty[ct'\\x'\\y'\\z']
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
  \dv{v}{t}&=\dfrac{1}{2v}\dv{v^2}{t}=\dv{\bm{v}}{t}\cdot\dfrac{\bm{v}}{v}=\bm{a}\cdot\dfrac{\bm{v}}{v}\quad(\text{ほんと？})\\
  \dv{u^i}{s}&=\dfrac{\gamma_v}{c}\dv{(v^i\gamma_v/c)}{t}=\dfrac{\gamma_v^4v^i}{c^4}\bm{v}\cdot\bm{a}+\dfrac{\gamma_v^2}{c^2}a^i
\end{align}
に気を付けると4元加速度
\begin{align}
  w^\mu\coloneqq \dv[2]{x^\mu}{s}=\dv{u^\mu}{s}=\dfrac{\gamma_v^4}{c^3}\bm{v}\cdot\bm{a}\mqty[1\\\bm{v}/c]+\dfrac{\gamma_v^2}{c^2}\mqty[0\\\bm{a}]
\end{align}
の表式が分かる（ほんと？）。$\dd{x^\mu}\dd{x_\mu}=\dd{s^2}$より$u^\mu u_\mu=1$であり、さらに微分して$u_\mu w^\mu=0$も分かる（成分で内積を計算しても確かめられる）。