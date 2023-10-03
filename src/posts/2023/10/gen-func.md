---
title: 生成汎関数
date: '2023-10-02'
tags:
  - qft
description: "母艦数の力で相関関数が計算できる。"
---

分配関数が
\begin{align*}
  Z=\int\mathcal{D}\phi\e^{\frac{1}{2}\int\dd[4]{x}\dd[4]{y}\phi(x)K(x,y)\phi(y)}
\end{align*}
と表されるとする。外場$J$を入れて
\begin{align*}
  Z(J)=\int\mathcal{D}\phi\e^{\frac{1}{2}\int\dd[4]{x}\dd[4]{y}\phi(x)K(x,y)\phi(y)+\int\dd[4]{x}J(x)\phi(x)}
\end{align*}
とする。簡単な計算から
\begin{align*}
  Z(J)=\mathcal{N}\e^{\frac{1}{2}\int\dd[4]{x}\dd[4]{y}J(x)K^{-1}(x,y)J(y)}
\end{align*}
となり、2点関数は
\begin{align*}
  \ev{\phi(x)\phi(y)}=\eval{\fdv{J(x)}\fdv{J(y)}Z(J)}_{J=0}=K^{-1}(x,y)
\end{align*}
と簡単に計算できる。
