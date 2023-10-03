---
title: 江口・菅原記法のもとでの2次元複素関数論
date: '2023-10-02'
tags:
  - cft
description: "自明なメモ。"
---

## 座標の取り方

\begin{align*}
  z=x+\i y&\qc \bar{z}=x-\i y\\
  \partial_z=\dfrac{x-\i y}{2}&\qc\partial_{\bar{z}}=\dfrac{x+\i y}{2}.
\end{align*}
これを使って計算すると$\dd{x}\wedge\dd{y}=\dfrac{\i}{2}\dd{z}\wedge\dd{\bar{z}}$となる。なぜか江口・菅原では$\dd[2]{x}\eqqcolon\dd[2]{z}$。ちなみにPolchinskiでは$\dd[2]{z}\sqrt{\abs{\det g}}=\dd{\sigma^1}\dd{\sigma^2}$より$\dd[2]{z}\coloneqq \dfrac{\dd{\sigma^1}\dd{\sigma^2}}{2}$。これは理がある。

## Greenの定理

実座標では
\begin{align*}
  \int_D\dd{x}\wedge\dd{y}\,(\partial_x Q-\partial_y P)=\oint_{\partial D}P\dd{x}+Q\dd{y}.
\end{align*}
地道に計算してもいいが、結局測度の変換と打ち消すので
\begin{align*}
  \int_D \dd{z}\wedge\dd{\bar{z}}\,(\partial_z A+\partial_{\bar{z}}B)=\oint_{z\in\partial D}\dd{\bar{z}}A-\dd{z}B.
\end{align*}
ただし$A=Q-\i P,\ B=Q+\i P$。

江口・菅原版測度では
\begin{align*}
  \int_D \dd[2]{z}\,(\partial_z A+\partial_{\bar{z}}B)=\oint_{z\in\partial D}\dd{\bar{z}}A-\dd{z}B.
\end{align*}

## Green関数

実座標でGreen関数が$\ln r$であることは知っているので（謎の係数以外は）自明。
\begin{align*}
  \int\dd{z}\wedge\dd{\bar{z}}\partial_z\partial_{\bar{z}}\ln\abs{z}&=\oint_{z\in\partial D}\dd{\bar{z}}\partial_{\bar{z}}\ln{\abs{z}}\\
  &=\oint_{z\in\partial D}\dd{\bar{z}}\dfrac{1}{2\bar{z}}=-\pi\i\quad(\text{$\bar{z}$の周回は時計回り})
\end{align*}
となり、謎の係数を考慮すると
\begin{align*}
  \int\dd[2]{z}\partial_z\partial_{\bar{z}}\ln{\abs{z}}=\dfrac{\pi}{2}.
\end{align*}
一方でデルタ関数は
\begin{align*}
  \int\dd[2]{z}\delta^2(z,\bar{z})=1
\end{align*}
を満たすのが望ましいので、
\begin{align*}
  4\partial_z\partial_{\bar{z}}\ln\abs{z}=2\pi\delta^2(z,\bar{z})
\end{align*}
という(1.137)が得られる。
