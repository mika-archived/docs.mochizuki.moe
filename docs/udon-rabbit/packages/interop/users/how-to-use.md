# 設定方法

ここでは、 UdonRabbit Interop パッケージの使い方、組み合わせ方について解説しています。

## ダウンロード

BOOTH から最新の UnityPackage をダウンロードしてください。

-   [BOOTH](https://natsuneko.booth.pm/items/2835630)

なお、インストール方法については、[こちら](/udon-rabbit/guides/getting-started/)にて解説しています。  
インストール方法で分からない部分がありましたら上記ページを参照ください。

## 対応パッケージのダウンロード

UdonRabbit Interop 単体では、付属しているサンプルを組み合わせることは出来ますが、他の動きは出来ません。  
そのため、[対応パッケージ](/udon-rabbit/packages/interop/users/packages)から、 UdonRabbit Interop に対応しているパッケージをダウンロード、インストールしてください。  
なお、インストール方法については、各パッケージを参照してください。

## 機能の組み合わせ

UdonRabbit Interop では、基本的には、何らかのイベントを発生させる `送信側` と、何らかの動作を行う `受信側` の 2 つの動作を組み合わせます。  
SDK2 で例えるならば、 `送信側` は Trigger と呼ばれていたもの、 `受信側` は Action と呼ばれていたものになります。
例えば、送信側には以下のようなものが含まれます：

-   ボタン (`VRC_Trigger`)
-   スイッチ (`VRC_Trigger`)
-   ドア (`VRC_Trigger`)
-   銃を撃つ (`VRC_Pickup`)

また、受信側には以下のようなものが含まれます：

-   ライトや鏡の ON/OFF 機能 (`Mirror` Prefab)
-   パーティクルエフェクトの発生 (`SendRPC` など)
-   テレポート (`SendRPC` など)
-   プレイヤーの状態の変更 (`SendRPC` など)

ユーザーが行う操作を `送信側`、操作を行った結果を `受信側` とすると、わかりやすいかもしれません。  
これらの機能を組み合わせられるようにするのをサポートするパッケージが UdonRabbit Interop です。

組み合わせるには、以下のような操作を行います。

1. シーンに `送信側` の Prefab を配置する
2. シーンに `受信側` の Prefab を配置する
3. `受信側` の `(Event Listener)` とある入力ボックスに、 `送信側` の `Event Listener` を設置する

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/interop/receiver-listener-example.png" width="500px" data-zoomable="true">
  <figcaption>受信側における <code>Event Listener</code> とある入力ボックス</figcaption>
</figure>

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/interop/sender-listener-example.png" width="500px" data-zoomable="true">
  <figcaption>送信側における <code>Event Listener</code> の例、この名前であるとは限らないが、これに近いものを探せば良い</figcaption>
</figure>

## エラー一覧

UdonRabbit Interop に対応しているパッケージによっては、組み合わせられる機能と組み合わせられない機能が存在します。  
その場合、インスペクターにて、下記のように警告が表示されます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/interop/type-validator-warning.png" width="500px" data-zoomable="true">
  <figcaption>警告の例</figcaption>
</figure>

警告が表示されている場合は、うまく動作しない可能性がありますので、対応状況などを各パッケージの作者にお問い合わせください。  
以下のエラー一覧は、組み合わせによってうまく動作しない場合に表示される一覧です。

### 型エラー

ボタンなどのイベント送信側と、アニメーションの再生などのイベント受信側にて、要求しているデータの内容が異なる場合に、以下のようなエラーが表示されます。

```
The receiver (GameObject; this) is requesting TYPE1, but the one or more sender is assigning TYPE2, so it could not applied.
```

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/interop/type-validator-warning.png" width="500px" data-zoomable="true">
  <figcaption>型エラーの例</figcaption>
</figure>

この場合は、送受信するデータの内容が一致している Prefab に組み替えてください。

### 同期エラー

例えば Global な動作を行いたい場合で、ボタンなどのイベント送信側と、何らかの動作をする側の両方で同期している場合などに、以下のようなエラーが発生します。

```
The receiver (GameObject; this) is requesting `SYNC1`, but the one or more sender is `SYNC2` or `Any`, so it could not applied.
```

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/interop/sync-validator-warning.png" width="500px" data-zoomable="true">
  <figcaption>同期エラーの例</figcaption>
</figure>

この場合は、送信側および受信側のどちらかに、同期しない版・同期する版・どちらでも良い版がある場合は、その Prefab に組み替えてください。

### イベントエラー

例えば、何らかの動作を行う受信側が、インタラクトしたというイベントを送信して欲しいが、送信側が対応していない場合などに、以下のようなエラーが発生します。

```
The receiver (GameObject; this) is requesting `EVENT1`, but the one or more sender is not emit `EVENT1`, so it could not applied.
```

この場合は、別のイベントを送信する Prefab が同梱されていないかを確認し、その Prefab に組み替えてください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/interop/event-validator-warning.png" width="500px" data-zoomable="true">
  <figcaption>イベントエラーの例</figcaption>
</figure>
