---
title: Perron-Frobeniusの定理
date: '2022-05-19'
tags:
  - math
  - matrix
---

# 記法

$$
\norm\big{x}\coloneqq \max_i x^i
$$


# 正行列に対するPerron-Frobeniusの定理

> 全ての成分が正の正方行列$A$について、正の固有値$\alpha$が存在して
> 1. $A$の固有値$\beta$で$\alpha$と異なるものは$\abs{\beta}<\alpha$を満たす。
> 2. 固有値$\alpha$は縮退せず、固有ベクトルの成分はすべて正。
> 3. $\alpha$以外の固有値に属する固有ベクトルは正ではない成分を持つ。

## 補題1
> $u_{n+1}=\dfrac{Au_n}{\norm{Au_n}},\quad \norm{u_n}=1$なる正ベクトルの列$\{u_n\}_{n=0}^\infty$が存在する。

### 証明
$u_0=[1,\dots,1]^\mathrm{T}$とすると$\norm{u_0}=1$で正ベクトル。また、$A$が正行列であることから$Au_n$も正ベクトルであり、$\norm{u_{n+1}}=\norm\Big{Au_n/\norm{Au_n}}=1$より、求めたい$\{u_n\}_n$の列が得られた。

## 補題2
> $f(x)\coloneqq \min_j (A^j{}_k x^k/x^j)$とすると、$\alpha\coloneqq \lim_{n\to\infty}f(u_n)$が存在して$\alpha>0$となる。