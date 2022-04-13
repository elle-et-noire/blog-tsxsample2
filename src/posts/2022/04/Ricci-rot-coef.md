---
title: 中トポ7.8.4節の行間 - Ricci回転係数の反対称性
date: "2022-04-11"
description: 計量接続に対するRicci回転係数の反対称性の計算を追ってみました。
---


# ここって行間ですよね...?

　理論物理学のための幾何学とトポロジー（通称『中トポ』）I[原著第2版]の7.8.4節で、計量の両立性からRicci回転係数は

> \begin{align*}
  \varGamma_{\alpha\beta\gamma}&=\delta_{\alpha\delta}e^\delta{}_\lambda e_\beta{}^\mu\nabla_\mu e_\gamma{}^\lambda=-\delta_{\alpha\delta}e_\gamma{}^\lambda e_\beta{}^\mu\nabla_\mu e^\delta{}_\lambda\\
  &=-\delta_{\gamma\delta}e^\delta{}_\lambda e_\beta{}^\mu \nabla_\mu e_\alpha{}^\lambda=-\varGamma_{\gamma\beta\alpha}.\tag{7.154}
\end{align*}
ここで$\nabla_\mu g=0$を使った。

と、$\alpha,\gamma$について反対称になることが言及されている。しかし簡単に書かれているこの式変形は（少なくとも自分には）簡単には埋まらない行間をはらんでいる。そもそも、$\nabla_\mu e_\gamma{}^\lambda$という記法は7.8.2節で定義されている一方で~$\nabla_\mu e^\delta{}_\lambda$なる記法はここまでで定義されていないはずである。~テンソルの成分の微分が定義されていたのでこれも定義されているとも言える。

# ここまでのあらすじ（抄）

## 共変微分

　接続は
\begin{align}
  \nabla_\nu e_\mu&\coloneqq \nabla_{e_\nu}e_\mu=e_\lambda\varGamma^\lambda{}_{\nu\mu}
\end{align}
と定義する。須藤 靖『一般相対論入門』とは下付き添字の順番が異なることに注意。共変微分は
\begin{align}
  \nabla_X(Y+Z)&=\nabla_XY+\nabla_XZ\\
  \nabla_{X+Y}Z&=\nabla_XZ+\nabla_YZ\\
  \nabla_{fX}Y&=f\nabla_XY\\
  \nabla_X(fY)&=\nabla_X(f)Y+f\nabla_XY=X[f]Y+f\nabla_XY
\end{align}
と、（ベクトル同士の和および多様体上の関数倍についての）線形性が成り立つことを要請されることから、基底同士の共偏微分を定める接続さえ決まれば共偏微分全体が定まることになる。
　共変微分が1形式とベクトルの積に作用してもLeibniz則が成り立つという自然な要請をすると
\begin{align}
  0=\partial_\mu\delta^\nu_\rho=\nabla_\mu \delta^\nu_\rho=\ev*{\nabla_\mu \dd{x}^\nu,e_\rho}+\ev*{\dd{x}^\nu,\nabla_\mu e_\rho}
\end{align}
より
\begin{align}
  \nabla_\mu \dd{x}^\nu=-\varGamma^\nu{}_{\mu\lambda}\dd{x^\lambda}
\end{align}
と、1形式の共偏微分も定まる。
　接続を定めれば、ベクトル場$X$が多様体上の曲線$c(t)$に沿って平行移動されていることを
\begin{align}
  \nabla_{(\dv*{c^\mu(t)}{t})e_\mu}X=0
\end{align}
と表せる。共変微分は、$q$でのベクトルと、$p$にあるベクトルを平行移動して$q$に持ってきたベクトルの差（そして$p$に対して$q$がどの方向にあるかは$\nabla_V$の$V$で指定される）を考えている。共変微分が$0$になるということは、$q$にあるベクトルがそもそも$p$でのベクトルを平行移動してきたものになっていることを意味し、曲線$c(t)$に沿って共変微分$0$が成り立っていれば曲線に沿ってずっと平行移動してきていることになる。
　また、「2つのベクトルの内積は平行移動のもとで一定」という条件も課すと、内積の曲線に沿った微分は$0$となり、Leibniz則から
\begin{align}
  0=\nabla_V[g(X,Y)]&=(\nabla_V g)(X,Y)+g(\nabla_V X,Y)+g(X,\nabla_V Y)
\end{align}
と変形できる。条件の内容は$X$,$Y$というベクトル場が$V$の表す曲線に沿った平行移動になっているというものなので
\begin{align}
  \nabla_VX=\nabla_VY=0\therefore 0=(\nabla_V g)(X,Y)
\end{align}
であり、$V,X,Y$は任意なので
\begin{align}
  (\nabla_\kappa g)_{\mu\nu}=0
\end{align}
あるいは
\begin{align}
  \partial_\lambda g_{\mu\nu}-\varGamma^\kappa{}_{\lambda\mu}g_{\kappa\nu}-\varGamma^\kappa{}_{\lambda\nu}g_{\kappa\mu}=0\label{eq:nabla-g-zero}
\end{align}
が得られる。この条件を満たす接続は**計量接続**と呼ばれる。

## 正規直交標構

　基底$\qty{e_\mu}=\qty{\pdv*{x^\mu}}$についての計量の成分$g_{\mu\nu}$は一般に単位行列ではないが、
\begin{align}
  \hat{e}_\alpha=e_\alpha{}^\mu e_\mu\quad(\det e_\alpha{}^\mu>0)
\end{align}
と、基底に向きを保った線形変換を施して
\begin{align}
  \delta_{\alpha\beta}=g(\hat{e}_\alpha,\hat{e}_\beta)=e_\alpha{}^\mu e_\beta{}^\nu g_{\mu\nu}
\end{align}
と、計量の成分が単位行列で表されるような標構(frame)を得る。変換係数$e_\alpha{}^\mu$は4次元なら**4脚場**、高次なら**多脚場**と呼ばれる。逆行列$e^\alpha{}_\mu$は
\begin{gather}
  e^\alpha{}_\mu e_\alpha{}^\nu=\delta_\mu^\nu\qc e^\alpha{}_\mu e_\beta{}^\mu=\delta^\alpha_\beta\\
  g_{\mu\nu}=e^\alpha{}_\mu e^\beta{}_\nu\delta_{\alpha\beta}\label{eq:g-is-eedelta}
\end{gather}
を満たす。また双対基底$\hat{\theta}^\alpha$を
\begin{align}
  \ev*{\hat{\theta}^\alpha,\hat{e}_\beta}=\delta^\alpha_\beta
\end{align}
あるいは
\begin{align}
  \hat{\theta}^\alpha=e^\alpha{}_\mu\dd{x^\mu}
\end{align}
で定める。計量は
\begin{align}
  g=g_{\mu\nu}\dd{x^\mu}\otimes\dd{x^\nu}=\delta_{\alpha\beta}\hat{\theta}^\alpha\otimes\hat{\theta}^\beta
\end{align}
と表せる。つまり、ギリシャ文字のうち$\kappa$以降は一般に『曲がった空間』を表す添字で、それが多脚場という緩衝材によって『平坦な空間』を担う添字（$\alpha$以降の文字を使う）に置き換えられるということである。

## 接続 with 平坦な添字

\begin{align}
  \nabla_\alpha \hat{e}_\beta\coloneqq \nabla_{\hat{e}_\alpha}\hat{e}_\beta\eqqcolon\varGamma^\gamma{}_{\alpha\beta}\hat{e}_\gamma=e_\gamma{}^\nu e_\nu
\end{align}
によって平坦な添字を持つ接続を定義する。中辺を展開すると
\begin{align}
  \nabla_{\hat{e}_\alpha}\hat{e}_\beta&=e_\alpha{}^\mu (\partial_\mu e_\beta{}^\nu+e_\beta{}^\lambda\varGamma^\nu{}_{\mu\lambda})e_\nu
\end{align}
となり、ここから
\begin{align}
  \varGamma^\gamma{}_{\alpha\beta}&=e^\gamma{}_\nu e_\alpha{}^\mu(\partial_\mu e_\beta{}^\nu +e_\beta{}^\lambda\varGamma^\nu{}_{\mu\lambda})\\
  &=e^\gamma{}_\nu e_\alpha{}^\mu(\nabla_\mu \hat{e}_\beta)^\nu\eqqcolon e^\gamma{}_\nu e_\alpha{}^\mu\nabla_\mu e_\beta{}^\nu
\end{align}
となる。最後の$\eqqcolon$は中トポがこの表記を採用しているという意味だが、この表記がそもそも混乱の元だと思っているので以下ではその直前の表記を用いる。
　**Ricci回転係数**は
\begin{align}
  \varGamma_{\alpha\beta\gamma}\coloneqq \delta_{\alpha\delta}\varGamma^\delta{}_{\beta\gamma}
\end{align}
で定められる。

# 私的噛み砕いた式変形

ここでは本質的でない煩雑さ回避のために$e_\beta{}^\mu\nabla_\mu$を$\nabla_\beta$と書く。
\begin{align}
  \varGamma_{\alpha\beta\gamma}&=\delta_{\alpha\delta}\ev*{\hat{\theta}^\delta,\nabla_\beta\hat{e}_\gamma}\\
  &=\delta_{\alpha\delta}\ev*{e^\delta{}_\lambda\dd{x^\lambda},\nabla_\beta\hat{e}_\gamma}\\
  &=\delta_{\alpha\delta}e^\delta{}_\lambda(\nabla_\beta\hat{e}_\gamma)^\lambda\\
  -\varGamma_{\alpha\beta\gamma}&=\delta_{\alpha\delta}\ev*{\nabla_\beta\hat{\theta}^\delta,\hat{e}_\gamma}\quad(\because \nabla_\beta\ev*{\hat{\theta}^\delta,\hat{e}_\alpha}=0)\\
  &=\delta_{\alpha\delta}\ev*{\nabla_\beta\hat{\theta}^\delta,e_\gamma{}^\lambda e_\lambda}\\
  &=\delta_{\alpha\delta}e_\gamma{}^\lambda(\nabla_\beta\hat{\theta}^\delta)_\lambda
\end{align}
ここまではほぼ定義通りである。ここで$e_\gamma{}^\lambda$を除いた部分は
\begin{align}
  \delta_{\alpha\delta}(\nabla_\beta\hat{\theta}^\delta)_\lambda&=\nabla_\beta(\delta_{\alpha\delta}e^\delta{}_\kappa\dd{x^\kappa})_\lambda\\
  &=\nabla_\beta(e_\alpha{}^\mu g_{\mu\kappa} \dd{x^\kappa})_\lambda\quad(\eqref{eq:g-is-eedelta}\text{を用いた})\\
  \nabla_\beta(e_\alpha{}^\mu g_{\mu\kappa} \dd{x^\kappa})&=[\partial_\beta(e_\alpha{}^\mu g_{\mu\lambda})-e_\alpha{}^\mu g_{\mu\kappa}\varGamma^\kappa{}_{\beta\lambda}]\dd{x^\lambda}\\
  &=\underbrace{[g_{\mu\lambda}\partial_\beta e_\alpha{}^\mu+g_{\lambda\kappa}e_\alpha{}^\mu\varGamma^\kappa{}_{\beta\mu}]}_{\ds\delta_{\alpha\delta}(\nabla_\beta\hat{\theta}^\delta)_\lambda}\dd{x^\lambda}\quad (\eqref{eq:nabla-g-zero}\text{を用いた})
\end{align}
と変形できる。ここに除いていた$e_\gamma{}^\lambda$を掛けると
\begin{align}
  -\varGamma_{\alpha\beta\gamma}&=\delta_{\gamma\lambda}e^\lambda{}_\mu\partial_\beta e_\alpha{}^\mu+\delta_{\gamma\lambda}e^\lambda{}_\kappa e_\alpha{}^\mu\varGamma^\kappa{}_{\beta\mu}\quad(\eqref{eq:g-is-eedelta}\text{を用いた})\\
  &=\delta_{\gamma\lambda}e^\lambda{}_\kappa(\nabla_\beta\hat{e}_\alpha)^\kappa\\
  &=\varGamma_{\gamma\beta\alpha}
\end{align}
となり、計量接続から得られるRicci回転係数は1つ目と3つ目の添字について反対称であることが示せた。なんとなく添字を下げるためだけに掛けているかに見えた$\delta_{\alpha\delta}$が多脚場と反応して計量$g$を登場させる様子は激アツでしたね。また、\eqref{eq:nabla-g-zero}で$g_{\mu\nu}\equiv\delta_{\mu\nu}$の場合が示したい式であることを考えれば、計量接続としての自然な性質だと言えそうです。

# 追記(2022/04/12) - 簡単な計算

結局は同じことですが見通しのいい（そして中トポの意図していそうな）書き方が降ってきたので追記します。

\begin{align}
  e_\alpha{}^\mu g_{\mu\nu}=e^\beta{}_\nu\delta_{\alpha\beta}
\end{align}
の両辺を共偏微分して
\begin{align}
  g_{\mu\nu}\nabla_\kappa e_\alpha{}^\mu=\delta_{\alpha\beta}\nabla_\kappa e^\beta{}_\nu.
\end{align}
\eqref{eq:g-is-eedelta}を代入して
\begin{align}
  \delta_{\gamma\delta}e^\gamma{}_\mu e^\delta{}_\nu\nabla_\kappa e_\alpha{}^\mu=\delta_{\alpha\beta}\nabla_\kappa e^\beta{}_\nu
\end{align}
となり、$e_\delta{}^\nu$をかけて
\begin{align}
  \delta_{\gamma\delta}e^\gamma{}_\mu\nabla_\kappa e_\alpha{}^\mu=\delta_{\alpha\beta}e_\delta{}^\nu \nabla_\kappa e^\beta{}_\nu
\end{align}
が得られる。