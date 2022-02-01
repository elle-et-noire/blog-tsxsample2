---
title: ローレンツ変換
date: "2022-02-01"
tags:
    - phys
---


$K$系に対する$K'$系の速さを$v$、方向を$x$軸にとる。Minkowski時空内の回転はMinkowski時空での距離を不変にする：
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
  \dfrac{v}{c}=\eval{\dfrac{x}{ct}}_{K'\text{の原点}}=\tanh\phi
\end{align}
と$v$と$\phi$が対応する（$\phi$はrapidityと呼ばれる）。ここで $\cosh^2-\sinh^2=1$に気を付けて
\begin{align}
  \beta\coloneqq \dfrac{v}{c}=\tanh\phi,\ \gamma\coloneqq \dfrac{1}{\sqrt{1-\beta^2}}=\cosh\phi
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
