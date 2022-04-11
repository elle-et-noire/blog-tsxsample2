---
title: $\Z$と$\Z\oplus\Z$が同型でない証明
date: "2022-02-28"
tags: algebra
---

# 命題
> $\Z\ncong \Z\oplus\Z$

# 証明

仮に同型写像$f\colon \Z\oplus\Z\to\Z$が構成できたとする。$f$は単射なので$f((0,0))=0$であり、$f((1,0))\eqqcolon a\neq 0,\\,f((0,1))\eqqcolon b\neq 0$が成り立つ。このとき$f((b,0))=bf((1,0))=ba=ab=af((0,1))=f((0,a))$となり、$f$が単射であることに矛盾。