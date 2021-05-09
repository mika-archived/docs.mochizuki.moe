---
title: Synchronized Animator の設定方法
---

# Synchronized Animator の設定方法

ここでは、 Synchronized Animator の設定方法について解説しています。

## ダウンロード

BOOTH から最新の UnityPackage をダウンロードしてください。

-   [BOOTH](https://natsuneko.booth.pm/items/2504988){target=\_blank}

なお、インストール方法については、[こちら](/ja-jp/udon-rabbit/guides/getting-started)にて解説しています。  
インストール方法で分からない部分がありましたら上記ページを参照ください。

## 導入方法

ここでは、[atsuki shop さんの「シャイニングスター」パーティクルライブ](https://atsuki17173305.booth.pm/items/1960238){target=\_blank}を例に説明していきます。

## 設定方法 (備え付けのボタンを使用する)

UnityPackage に付属している Prefab を使う方法です。  
こちらの方法は楽ですが、再生開始ボタンは Unity の Default Cube になります。

まずは、 Prefabs フォルダーの中にある SynchronizedAnimatorButton をシーン中の任意の場所に設置してください。  
シーン内に設置したら、 `SynchronizedAnimatorState` がアタッチされている Udon Behaviour について設定を行います。  
このとき、他の項目は変更しないでください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/synchronized-animator/synchronized-animator-pattern1-step-1.png" width="300px" data-zoomable="true">
  <figcaption>丸の部分が <code>SynchronizedAnimatorState</code> になっているものを選んでください</figcaption>
</figure>

それぞれ以下の項目を変更します。

| プロパティ名          | 設定するもの                                                             |
| --------------------- | ------------------------------------------------------------------------ |
| `Interaction Text`    | フォーカスしたときに表示されるテキスト                                   |
| `Game Object`         | 再生状態を同期したい Animator Controller を含んでいるルートの GameObject |
| `Target Animators`    | 再生状態を同期したい Animator Controller すべて[^1]                      |
| `Target Audio Source` | 再生状態を同期したい Audio Source                                        |

今回の例の場合は、それぞれ以下を設定します。

| プロパティ名          | 設定するもの                         |
| --------------------- | ------------------------------------ |
| `Game Object`         | `Particle Live (World)/Shining star` |
| `Target Animators`    | `Particle Live (World)/Shining star` |
| `Target Audio Source` | `Particle Live (World)/Shining star` |

設定が終わったら、まずは Local Build でテストした後、問題が無ければアップロードしてください。  
これで作業は完了です。

## 設定方法 (自身で用意したボタンを使用する)

ボタンに Unity の Default Cube 以外を使用したい場合は、自身である程度の設定を行う必要があります。

まず、ボタンとして使用したい GameObject に対して、以下の Udon Behaviour をアタッチします。
上記の例の場合は、 `Particle Live (World)/logo` に対してアタッチします。

-   `KitsuneTime`
-   `SynchronizedAnimatorState`
-   `SyncBool`

アタッチするには、以下の操作を行います。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/synchronized-animator/synchronized-animator-pattern2-step-1.png" width="300px" data-zoomable="true">
  <figcaption>
    <code>Udon Behaviour</code> から、 <code>Program Source</code> へ <code>SynchronizedAnimatorState</code> をドラッグアンドドロップする<br>
    このとき、下のドロップダウンが <code>Udon C# Program Asset</code> になっている必要がある
  </figcaption>
</figure>

アタッチした後、それぞれ以下の値を設定してください。

### Synchronized Animator State (Udon Behaviour)

| プロパティ                 | 例                                   | 値                                                  |
| -------------------------- | ------------------------------------ | --------------------------------------------------- |
| `Game Object`              | `Particle Live (World)/Shining star` | 同期させたい Animator を含んでいるルート GameObject |
| `Is Requested Synchronize` | `Particle Live (World)/logo`         | `SyncBool` をアタッチした GameObject                |
| `T`                        | `Particle Live (World)/logo`         | `KitsuneTime` をアタッチした GameObject             |
| `Target Animators`         | `Particle Live (World)/Shining star` | 同期したい Animator 全て[^1]                        |
| `Target Audio Source`      | `Particle Live (World)/Shining star` | 同期したい Audio Source                             |

### Kitsune Time (Udon Behaviour)

変更する必要はありません。

### Sync Bool (Udon Behaviour)

変更する必要はありません。

設定が終わったら、まずは Local Build でテストした後、問題が無ければアップロードしてください。  
これで作業は完了です。

[^1]: Animator Controller は、全て同じ長さで統一されている必要があります
