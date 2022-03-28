---
title: Lie括弧積の押し出し
date: '2022-03-28'
tags: math
---

成分表示に頼らずに書く。

## 接ベクトル

\begin{align}
  \qq*{曲線}c&\colon (a,b)\to M\quad(a<0<b)\\
  \qq*{多様体上の関数}f&\colon M\to\R
\end{align}
を用いて
\begin{align}
  X&\in T_{c(0)}M\\
  \eval{\dv{f(c(t))}{t}}_{t=0}&\eqqcolon X[f]\in \R
\end{align}
によって点$c(0)$における接ベクトルを定義する。$M$上のベクトル場は
\begin{align}
  \mathfrak{X}(M)\ni X&\colon M\to TM\qc p\mapsto \eval{X}_p
\end{align}
と、多様体上の各点に接ベクトルを対応付ける関数と見なせる。$f$を作用させたものは
\begin{align}
  X&\in \mathfrak{X}(M)\\
  f&\colon M\to\R\\
  X[f]&\colon M\to\R\qc p\mapsto \eval{\dv{f(c(t))}{t}}_{c^{-1}(p)}
\end{align}
と見なせる。


## 微分写像

$f\colon M\to N$に対して微分写像
\begin{align}
  f_\ast&\colon T_pM\to T_{f(p)}N
\end{align}
が誘導出来て
\begin{align}
  g&\colon N\to \R\\
  \qq*{ベクトル}V&\in T_pM\\
  \qq*{ベクトル}f_\ast V&\in T_{f(p)}N\\
  (f_\ast V)[g]&\coloneqq V[g\circ f]\in\R
\end{align}
と定義される。

ベクトル場の押し出しは
\begin{align}
  f&\colon M\to N\\
  g&\colon N\to \R\\
  X&\in \mathfrak{X}(M)\\
  X[g\circ f]&=f_\ast X[g]\circ f\colon M\to\R\\
  f_\ast X[g]&\colon N\to \R
\end{align}
と見なせる。

## Lie括弧積

\begin{align}
  \qq*{ベクトル場}X,Y,\comm{X}{Y}&\in\mathfrak{X}(M)\\
  f&\colon M\to\R\\
  \comm{X}{Y}f&\coloneqq X[Y[f]]-Y[X[f]]\colon M\to\R
\end{align}

Lie括弧積が1階微分になることを成分に依らず示すことはできるのだろうか。

## Lie括弧積の押し出し

> $f_\ast\comm{X}{Y}=\comm{f_\ast X}{f_\ast Y}$


\begin{align}
  g&\colon N\to\R\\
  (f_\ast\comm{X}{Y})[g]\circ f&=\comm{X}{Y}(g\circ f)\\
  &=X[Y[g\circ f]]-Y[X[g\circ f]]\\
  &=X[f_\ast Y[g]\circ f]-Y[f_\ast X[g]\circ f]\\
  &=f_\ast X[f_\ast Y[g]]\circ f-f_\ast Y[f_\ast X[g]]\circ f\\
  &=(\comm{f_\ast X}{f_\ast Y}g)\circ f
\end{align}
ただし等号は関数としてのものである。

## 引き戻し

ベクトルについては
\begin{align}
  V&\in T_pM\qc \omega\in T^\ast_{f(p)}N\\
  f&\colon M\to N\\
  \ev{f^\ast \omega, V}&\coloneqq \ev{\omega, f_\ast V}\in\R
\end{align}
であり、ベクトル場については
\begin{align}
  V&\in \mathfrak{X}(M)\qc \omega\in \Omega(N)\\
  f&\colon M\to N\\
  \ev{f^\ast \omega, V}&=\ev{\omega, f_\ast V}\circ f\colon M\to\R
\end{align}
と見なせる。

$r$-形式については
\begin{align}
  f&\colon M\to N\qc\omega\in\Omega^r(M)\\
  (f^\ast\omega)(X_1,\dots,X_r)&\coloneqq \omega(f_\ast X_1,\dots,f_\ast X_r)\in\R\quad(X_i\in T_pM)\\
  (f^\ast\omega)(X_1,\dots,X_r)&= \omega(f_\ast X_1,\dots,f_\ast X_r)\circ f\colon M\to\R\quad(X_i\in\mathfrak{X}(M))
\end{align}
と見なせる。

## 外微分

\begin{align}
  \dd{\omega}(X,Y)&=X[\omega(Y)]-Y[\omega(X)]-\omega(\comm{X}{Y})
\end{align}
と展開できることを用いて
\begin{align}
  \omega&\in \Omega^2(N)\qc X,Y\in \mathfrak{X}(M)\qc f\colon M\to N\\
  \dd(f^\ast\omega)(X,Y)&=X[f^\ast\omega(Y)]-Y[f^\ast\omega(X)]\circ f-f^\ast\omega(\comm{X}{Y})\\
  &=X[\omega(f_\ast Y)\circ f]-Y[\omega(f_\ast X)\circ f]-\omega(f_\ast\comm{X}{Y}\circ f)\\
  &=f_\ast X[\omega(f_\ast Y)]\circ f-f_\ast Y[\omega(f_\ast X)]\circ f-\omega(\comm{f_\ast X}{f_\ast Y}\circ f)\\
  &=\dd{\omega}(f_\ast X,f_\ast Y)\circ f\\
  &=f^\ast(\dd{\omega})(X,Y)
\end{align}
と、外微分と引き戻しが可換であることが分かる。