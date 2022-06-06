---
title: 仕様確認
date: "2022-02-20"
tags:
  - md
  - next
---

# 見出し

```
# 見出し
## 見出し2
### 見出し3
#### 見出し4
見出し
=
見出し2
---
```


# リスト

```markdown
- Hello!
- Hola!
  - Bonjour!
  * Hi!
    - 3rd
```

- Hello!
- Hola!
  - Bonjour!
  * Hi!
    - 3rd

## 番号付きリスト
```markdown
1. First
1. Second
   1. うお

1986\. What a great season. ← olキャンセル
```
1. First
1. Second
   1. うお

1986\. What a great season. ← olキャンセル

# テキストリンク
```markdown
[ZennのMarkdown記法一覧](https://zenn.dev/zenn/articles/markdown-guide)
[Markdown文法まとめ](https://qiita.com/higuma/items/3344387e0f2cce7f2cfe "よくまとまっている")
Markdown記法：[「みんな抱きしめて、銀河の果てまで！」は何がすごいのか](/2022/02/embrace-me/)
`#a`を指定：[ローレンツ不変な体積要素](/2022/01/lorentz-invar-element#a)
`#blank`を指定：[ローレンツ不変な体積要素](/2022/01/lorentz-invar-element#blank)
```

[ZennのMarkdown記法一覧](https://zenn.dev/zenn/articles/markdown-guide)
[Markdown文法まとめ](https://qiita.com/higuma/items/3344387e0f2cce7f2cfe "よくまとまっている")
Markdown記法：[「みんな抱きしめて、銀河の果てまで！」は何がすごいのか](/2022/02/embrace-me/)
`#a`を指定：[ローレンツ不変な体積要素](/2022/01/lorentz-invar-element#a)
`#blank`を指定：[ローレンツ不変な体積要素](/2022/01/lorentz-invar-element#blank)


# 画像
```markdown
![altテキスト](https://画像のURL)
![altテキスト](/images/画像のURL)
```
![C.C.png](https://pbs.twimg.com/media/EXpim-pUcAASSlH?format=png&name=900x900 "Do you know, C.C.?")
![mc-diamond](/images/mc-diamond.gif)

## 画像の横幅を指定する、キャプションをつける
```markdown
![altテキスト](画像のURL#{width}_{height})[キャプション]
```
![C.C.はしっているか](https://pbs.twimg.com/media/D6lyI11UwAARUXm?format=png&name=small#450_150)[Do you know, **C.C.**?$\int \dd{x}$]

## 画像にリンクを貼る
```markdown
[![altテキスト](画像のURL)](リンクのURL)
```
[![C.C. knows](https://pbs.twimg.com/media/D6lyI11UwAARUXm?format=png&name=small)](https://pbs.twimg.com/media/D6lyI11UwAARUXm?format=png&name=small)

[![mc-diamond](/images/mc-diamond.gif#350_350)](/images/mc-diamond.gif#blank)

# テーブル
```markdown
| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| Left       | Right       | Center       |
```

| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| Left       | Right       | Center       |

# コードブロック

## ファイル名を表示する

````markdown
```js:ファイル名
内容
```
````

```js:fooBar.js
const great = () => {
  console.log("Awesome");
};
```

## diffのシンタックスハイライト

````markdown
```diff js:ファイル名
内容
```
````

```diff js
@@ -4,6 +4,5 @@
+  const foo = bar.baz([1, 2, 3]) + 1;
-  let foo = bar.baz([1, 2, 3]);
+  const foo = bar.baz([1, 2, 3]) + 1;
-  let foo = bar.baz([1, 2, 3]);
   uouo;
   uouo;
```


```diff js:fooBar.js
@@ -4,6 +4,5 @@
+    const foo = bar.baz([1, 2, 3]) + 1;
-    let foo = bar.baz([1, 2, 3]);
```

## コードの言語を指定しないとなぜか文字化けする

```js
   return shell_exec("echo input | markdown_script");
```
```
   return shell_exec("echo input | markdown_script");
```

```latex
Campbell-Baker-Hausdorff の公式は，演算子 $\hat{A},\hat{B}$ を用いて次のように書ける：
\begin{equation}
e^{\hat{A}}\hat{B}e^{-\hat{A}}=\hat{B}+[\hat{A},\hat{B}]+\frac{1}{2}[\hat{A},[\hat{A},\hat{B}]]+\cdots.\label{eq1}
\end{equation}

式\eqref{eq1}を用いて，演算子 $\hat{V}$ の相互作用表示は次のように書くことができる．
```



# 数式
$$
e^{i\theta} = \cos\theta + i\sin\theta\\
=\operatorname{cis}\theta
$$
のように数式を書ける。

\begin{align}
  \eval{\delta(f(x))}_{x\simeq\alpha_i}&=\lim_{\ve\to 0}\dfrac{1}{\sqrt{2\pi\ve}}\exp\qty[-\dfrac{(x-\alpha_i)^2\abs{f'(\alpha_i)}^2}{2\ve}\qty[1+\order{x-\alpha_i}]]\label{eq:a}\\
  &=\lim_{\ve'\to 0}\dfrac{1}{\sqrt{2\pi\ve'}\abs{f'(\alpha_i)}}\exp\qty[-\dfrac{(x-\alpha_i)^2}{2\ve'}\qty[1+\order{x-\alpha_i}]]\ \qty(\ve'=\dfrac{\ve}{\abs{f'(\alpha_i)}^2})\label{eq:b}\\
  &=\dfrac{\delta(x-\alpha_i)}{\abs{f'(\alpha_i)}}\\
  f(x)\delta(x-a)&=f(a)\delta(x-a)\label{eq:delta-convolute}
\end{align}
と式番号も打てるし、\eqref{eq:a}のように参照し、マウスオーバーでプレビューウィンドウも現れる。1つの数式の塊で1つのプレビューウィンドウなので\eqref{eq:b}でも同じウィンドウになる。
\begin{align}
&\theta(p'^0)\delta(p'^\mu p'_\mu-m^2c^2)\dd[4]{p'}\\
&=\theta(\gamma p^0+\gamma\beta p^1)\delta(p^\mu p_\mu-m^2c^2)\dd[4]{p}\\
&=\theta(\gamma p^0+\gamma\beta p^1)\dfrac{c}{2E(\bm{p})}\qty[\delta(p^0-E(\bm{p})/c))+\delta(p^0+E(\bm{p})/c))]\dd[4]{p}\\
&=\dfrac{c}{2E(\bm{p})}[\underbrace{\theta(\gamma E(\bm{p})/c+\gamma\beta p^1)}_{=1\ \because E/c=\sqrt{\bm{p}^2+m^2c^2}>\abs{p^1}}\delta(p^0-E(\bm{p})/c)\notag\\
&\qquad+\underbrace{\theta(-\gamma E(\bm{p})/c+\gamma\beta p^1)}_{=0}\:\underbrace{\delta(p^0+E(\bm{p})/c)}_{=0}]\dd[4]{p}\ (\eqref{eq:delta-convolute}\text{を用いた})\\
&=\dfrac{c}{2E(\bm{p})}\delta(p^0-E(\bm{p})/c)\dd[4]{p}\label{eq:uooo}
\end{align}
\eqref{eq:uooo}を見ればわかるように、ウィンドウ中の式番号をマウスオーバーしても新たなウィンドウは現れない。

インラインでも$a=0$のように書ける。
* うおお。$a=0$。
* うおおお$a=0$。

を見比べると、全角文字などで空いているように見える場合は文中数式のスペースは詰められる。また$r$-単体のようにハイフンの前後でもスペースは詰められる。それ以外でスペースを詰めたい場合は$\hspace{-0.2em}a=0$のように手動で詰められる。

- `\mqty()`, `\mqty[]` など：行列が書けます．列は `&` で，行は `\\` で区切ります．
- `\dmat{}`, `\dmat[]{}`：対角行列を出してくれます．`\dmat[0]{a}` のように `0` を渡せば，ゼロで埋めてくれます．

```latex
\[
\mqty[0&1\\2&0],\quad
\mqty[\dmat{1,-1}],\quad
\mqty[\dmat[0]{1,-1}]
\]
```

# 引用

> 引用文
>> 引用文

ネスト出来る。

> More is different.
>
>    P. W. Anderson

空行は無視されないが冒頭のスペースは無視される。

> ## This is a header.
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:
> ```
>   return shell_exec("echo $input | $markdown_script");
> ```


# 注釈

```markdown
脚注の例^[脚注の内容その1。*うおおお*おおおお]です。
別の書き方[^sink]です。
[^sink]: 艱難辛苦に身躯をやつし 真紅の海にSINKしろ！
```

脚注の例^[脚注の内容その1。*うおおお*おおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおうおうおうおうおうおうおうお]です。インラインで書くことによってマウスオーバーしたときにプレビューが表示されます。脚注^[$\ds\int\dd{x}=x+C$]の中に数式も書けます。別行立て数式^[\begin{align}a\\b\end{align}]も書けます。うおお^[うおお$$\begin{aligned}a\\b\end{aligned}$$ぐえ]

別の書き方[^sink]です。

[^sink]: 艱難辛苦に身躯をやつし 真紅の海にSINKしろ！


# 区切り線

```markdown
---
```

---

# インラインスタイル

```markdown
*イタリック*
**太字**
~~打ち消し線~~
インラインで`code`を挿入する。``files = `ls`.split``とか`` `ps` ``とか。
```
*イタリック*
**太字**
~~打ち消し線~~
インラインで`code`を挿入する。``files = `ls`.split``とか`` `ps` ``とか。

# インラインのコメント
```markdown
<!-- TODO: ◯◯について追記する -->
```
<!-- TODO: ◯◯について追記する -->

# チェックボックス
```markdown
- [ ] タスク1
- [x] タスク2
```

- [ ] タスク1
- [x] タスク2


# ツールチップ
```markdown
文章中で[うおうお]{gueee}というようにツールチップを付けられる。
```
文章中で[うおうお]{gueee}というようにツールチップを付けられる。

# アコーディオン（トグル）

<details><summary>うおうお</summary>Something small enough to escape casual notice.<br>
\begin{align}
  \int\dd{x}
\end{align}
</details>

:::details sample
$A$ の相異なる固有値を $\qty{a_i}_i$ とし、$a_i$ に対応する固有空間への射影演算子を $\mathcal{P}_i$ とする。同様に $B$ の相異なる固有値 $\qty{b_j}_j$ および対応する射影演算子 $\qty{\mathcal{Q}_j}_j$ も定める。すると
\begin{align}
  A&=\sum_i a_i\mathcal{P}_i,& \sum_i\mathcal{P}_i&=I,&\mathcal{P}_i\mathcal{P}_{i'}&=\delta_{ii'}\mathcal{P}_i\\
  B&=\sum_j b_j\mathcal{Q}_j,& \sum_j\mathcal{Q}_j&=I,&\mathcal{Q}_j\mathcal{Q}_{j'}&=\delta_{jj'}\mathcal{Q}_j
\end{align}
より
\begin{align}
  \mathcal{P}_i&=\dfrac{\prod_{l\neq i}(A-a_lI)}{\prod_{l\neq i}(a_i-a_l)}\\
  \mathcal{Q}_j&=\dfrac{\prod_{m\neq j}(B-b_mI)}{\prod_{m\neq j}(b_j-b_m)}
\end{align}
と表せる。
:::

# 囲み
<div className="def">
<span className="def-title">要請I：平衡状態</span>
1. [**平衡状態への移行**] 系を孤立させて（静的な外場だけはあってもよい）十分長いが有限の時間放置すれば、マクロに見て時間変化しない特別な状態へと移行する。このときの系の状態を平衡状態と呼ぶ。
</div>

# Mermaid

```mermaid
graph TB
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

うおうお

```mermaid
graph LR
    A --- B
    B-->C[あいうえお]
    B-->D(かきくけこ)
```

うお

```mermaid
graph TB
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

```mermaid
sequenceDiagram
    participant bss as boot-shim.S
    participant bsc as boot-shim.c
    participant zbi as zbi.c
    participant dt as devicetree.c
    Note over bss: QEMU から起動
    activate bss
    bss ->> bsc: boot_shim()
    activate bsc
    bsc ->> dt: dt_walk()
    bsc ->> zbi: zbi_check()
    bsc ->> zbi: zbi_create_entry_with_payload()
    deactivate bsc
    deactivate bss
    Note over bss: physboot へジャンプ
```

