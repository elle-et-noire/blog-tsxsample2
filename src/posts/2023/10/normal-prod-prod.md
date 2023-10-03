---
title: 正規積同士の積
date: '2023-10-03'
tags:
  - qft
description: "正規積同士をかける公式の説明。"
---

$$
\def\nprod#1{{\colon{#1}\colon}}
$$

正規積は次のように定義していいだろう：
$$
X = \ev{X} + \nprod{X}.
$$
ただし$X$には局所演算子の積が入る。

またWickの定理も重要である：
$$
\prod_{i}A_i=\nprod{\prod_i A_i}+\sum_{i\neq j}\ev{A_iA_j}\nprod{\prod{l\neq i,j}A_l}+\sum_{i,j,k,l}\ev{A_iA_j}\ev{A_kA_l}\nprod{\prod_{m\neq i,j,k,l}A_m}+\cdots.
$$

ここから
$$
\ev{\prod_i A_i}=\prod_i A_i-\nprod{\prod_i A_i}
$$
を用いて真空期待値を2点相関関数と正規積で表せる。

正規積同士の積が次のようになることを（なんとなく）示す：
$$
\nprod{\prod_i A_i}\nprod{\prod_j B_j}=\sum_{i,j}\ev{A_i B_j}\nprod{\prod_{k\neq i,l\neq j}A_kB_l}.
$$
それぞれ2つずつくらいならすぐに確かめられる。

左辺は
$$
\qty(\prod_i A_i-\ev{\prod_i A_i})\qty(\prod_j B_j-\ev{\prod_j B_j})
$$
と言っている。初項同士の積に含まれていて他の項に含まれていないものが残る項である（末項同士がプラスで違和感があるかもしれないが、二重に引いてしまう項を付け加えているだけのことである）。

そのような項はずばり、2点相関関数として$A_i$と$B_j$の間のもののみを含み、残りがすべて正規積になっている項である。$\nprod{\prod_i A_i\prod_j B_j}$とか$\ev{A_1B_2}\nprod{A_2A_3\cdots B_1B_3\cdots}$とか$\ev{A_1B_3}\ev{A_2B_1}\nprod{A_3\cdots B_2\cdots}$とかである。

例えば初項同士から出てくる$\ev{A_1B_1}{A_2A_3}\nprods{\cdots}$のような項はどうか。この項は$\ev{\prod_i A_i}\prod_jB_j$も含む。$\ev{\prod_iA_i}$から出てくる$\ev{A_2A_3}\nprod{A_1\cdots}$と$B_1\cdots$から出てくる$\nprod{B_1\cdots}$の掛け算で、帰納的に正規積同士の積が$\ev{A_2A_3}\ev{A_1B_1}\nprod{\cdots}$となって出てくる。そしてこのような項は1回しか出てこず、きれいに打ち消してしまう。

したがって残るのは上で述べたようなものだけである。
