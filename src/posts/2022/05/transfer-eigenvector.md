---
title: 転送行列の固有ベクトルがエルミートかつ半正定値であること
date: '2022-05-21'
tags:
  - math
  - matrix
  - tensor
---

$A_1,\dots,A_D, v\in \mathrm{M}(D, \C)$と$\eta\in \R$があって
\begin{align}
  \sum_i A_ivA_i^\dagger = \eta v\label{eq:original}
\end{align}
が満たされているとする。ただし、$\eta$は転送行列の絶対値最大の固有値で、かつ縮退しておらず、他の固有値の絶対値は$\abs{\eta}$未満とする（したがって、両辺のエルミート共役を取ることを考えれば$\eta\in \R$となる）。

両辺のエルミート共役を取ると
\begin{align}
  \sum_i A_iv^\dagger A_i^\dagger =\eta v^\dagger
\end{align}
となる。いま$\eta$は縮退していないと仮定しているので$v=v^\dagger$となり、固有ベクトル$v$がエルミート行列であることが分かる。従ってあるユニタリ行列$U$が存在して
\begin{align}
  UvU^{-1}=\mqty[\dmat{\lambda_1,\ddots,\lambda_D}]
\end{align}
と対角化できる。$\lambda_1,\dots,\lambda_D$は$v$の固有値である。また、
\begin{align}
  UA_iU^{-1}=\mqty[\alpha^i_{11}&\cdots&\alpha^i_{1D}\\
  \vdots& \ddots &\vdots\\
  \alpha^i_{D1}&\cdots &\alpha^i_{DD}]
\end{align}
と置けば\eqref{eq:original}は
\begin{align}
  \sum_i \mqty[\alpha^i_{11}&\cdots&\alpha^i_{1D}\\
  \vdots& \ddots &\vdots\\
  \alpha^i_{D1}&\cdots &\alpha^i_{DD}]
  \mqty[\dmat{\lambda_1,\ddots,\lambda_D}]
  \mqty[\alpha^{i\ast}_{11}&\cdots&\alpha^{i\ast}_{D1}\\
  \vdots& \ddots &\vdots\\
  \alpha^{i\ast}_{1D}&\cdots &\alpha^{i\ast}_{DD}]
   = \eta \mqty[\dmat{\lambda_1,\ddots,\lambda_D}]\label{eq:diagonalize}
\end{align}
となるような$\alpha^i_{jk},\lambda_i,\eta$が存在するということと同値である。両辺の対角成分だけ比べると
\begin{align}
  \sum_i\mqty[\lambda_1\abs{\alpha^i_{11}}^2+\dots+\lambda_D\abs{\alpha^i_{1D}}^2\\
  \vdots\\\lambda_1\abs{\alpha^i_{D1}}^2+\dots+\lambda_D\abs{\alpha^i_{DD}}^2]
  =\eta \mqty[\lambda_1\\\vdots\\\lambda_D]\label{eq:diagonal-eq}
\end{align}
が必要である（\eqref{eq:diagonalize}の左辺の非対角成分は$0$とは限らないので十分ではない）ことが分かる。$\sum_i\abs{\alpha^i_{jk}}^2$を$(j,k)$成分に持つ行列を$B$とおくと\eqref{eq:diagonal-eq}は
\begin{align}
  B\mqty[\lambda_1\\\vdots\\\lambda_D]=\eta \mqty[\lambda_1\\\vdots\\\lambda_D]
\end{align}
と同値である。ここで$B$は全ての成分が非負の行列である。Perron-Frobeniusの定理より、$B$の固有ベクトルの成分は全て非負である。すなわち、$\lambda_1\ge 0,\dots,\lambda_D\ge 0$で、$v$は半正定値行列であることが言えた。

# 正定値とは言えないこと

$A=\mqty[1 & 0\\4 & 2]$とすると
\begin{align}
  A\mqty[1&-4\\-4&16]A^\dagger&=1\mqty[1&-4\\-4&16]\\
A\mqty[0&-1\\0&4]A^\dagger&=2\mqty[0&-1\\0&4]\\
A\mqty[0&0\\-1&4]A^\dagger&=2\mqty[0&0\\-1&4]\\
A\mqty[0&0\\0&1]A^\dagger&=4\mqty[0&0\\0&1]
\end{align}
となり、最大固有値$4$以外の固有値の絶対値は$4$未満で、$4$も縮退していないが、固有ベクトル$\mqty[0&0\\0&1]$は正定値ではない。

半正定値であっても、エルミートであることから、ユニタリ行列による対角化を考えれば$XX^\dagger$と分解することはたやすい。


