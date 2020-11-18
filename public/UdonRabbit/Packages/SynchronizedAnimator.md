ワールド内に設置された Animator (パーティクルライブや VRMV など) を他のプレイヤーと同期させるための Udon / UdonSharp スクリプトです。  
Animator がすでに再生された状態で入ってきたプレイヤーについても、再生状態を同期させることが出来ます。

なお、仕組み上若干の遅延は許容できる方向けの実装となります。

## ダウンロードとインストール

BOOTH から最新の UnityPackage をダウンロードしてください。

- [BOOTH](https://natsuneko.booth.pm/items/2504988)

インストール方法については、共通の [導入方法](/UdonRabbit/Guide/Installation) を参照してください。

## 使い方

ここでは、[真あつきさんの販売しているパーティクルライブ](https://booth.pm/ja/items/1960238) をワールドに固定する場合について解説していきます。  
なお、 Animator を複数使用しているライブ / VRMV などや、通常の Animator でも同様の実装になります。

また、実装方法は 2 種類あるので、それぞれ解説します。

### デフォルトのボタンを使う方法

UnityPackage に付属している Prefab を使う方法です。  
こちらの方法は楽ですが、再生開始ボタンは Unity の Default Cube になります。

まずは、 `Prefabs` フォルダーの中にある `SynchronizedAnimatorButton` をシーン中の任意の場所に設置してください。  
シーン内に設置したら、以下の項目を設定します。 **他の項目は変更しないでください。**

<figure>
  <img src="https://assets.mochizuki.moe/docs/UdonRabbit/SynchronizedAnimator/01.PNG" width="350px">
  <figcaption>
    <code>Udon Behaviour</code> のうち、 <code>Program Source</code> が <code>SynchronizedAnimatorState</code> のもの
  </figcaption>
</figure>

| プロパティ名          | 設定するもの                                                 |
| --------------------- | ------------------------------------------------------------ |
| `Interaction Text`    | フォーカスしたときに表示されるテキスト                       |
| `Game Object`         | 同期したい Animator を含んでいるルートの GameObject (Prefab) |
| `Target Animators`    | 同期したい Animator 全て ※                                   |
| `Target Audio Source` | 同期したい Audio Source                                      |

※ Animator は、全て同じ長さで統一されている必要があります (例: 2 分の Particle Live の場合は設定する全ての Animator が 120 秒である必要がある)。

今回の例の場合は、それぞれ以下を設定します (`Interaction Text` はデフォルトのものを使用する為省略)。

| プロパティ名          | 設定するもの                         |
| --------------------- | ------------------------------------ |
| `Game Object`         | `Particle Live (World)/Shining star` |
| `Target Animators`    | `Particle Live (World)/Shining star` |
| `Target Audio Source` | `Particle Live (World)/Shining star` |

設定が終わったら、まずは Local Build でテストした後、問題が無ければアップロードしてください。  
これで作業は完了です。

### 自身のボタンを使う方法

ボタンに Unity の Default Cube 以外を使用したい場合は、自身である程度の設定を行う必要があります。

まず、ボタンとして使用したい GameObject に対して、以下の Udon Behaviour をアタッチします。
上記の例の場合は、 `Particle Live (World)/logo` に対してアタッチします。

- `KitsuneTime`
- `SynchronizedAnimatorState`
- `SyncBool`

アタッチするには、以下の操作を行います。

<figure>
  <img src="https://assets.mochizuki.moe/docs/UdonRabbit/SynchronizedAnimator/02.PNG" width="350px">
  <figcaption>
    <code>Udon Behaviour</code> から、 <code>Program Source</code> へ <code>SynchronizedAnimatorState</code> をドラッグアンドドロップする<br>
    このとき、下のドロップダウンが <code>Udon C# Program Asset</code> になっている必要がある
  </figcaption>
</figure>

アタッチした後、それぞれ以下の値を設定してください。

#### Synchronized Animator State (Udon Behaviour)

| プロパティ                 | 例                                   | 値                                                  |
| -------------------------- | ------------------------------------ | --------------------------------------------------- |
| `Game Object`              | `Particle Live (World)/Shining star` | 同期させたい Animator を含んでいるルート GameObject |
| `Is Requested Synchronize` | `Particle Live (World)/logo`         | `SyncBool` をアタッチした GameObject                |
| `T`                        | `Particle Live (World)/logo`         | `KitsuneTime` をアタッチした GameObject             |
| `Target Animators`         | `Particle Live (World)/Shining star` | 同期したい Animator 全て ※                          |
| `Target Audio Source`      | `Particle Live (World)/Shining star` | 同期したい Audio Source                             |

※ Animator は、全て同じ長さで統一されている必要があります (例: 2 分の Particle Live の場合は設定する全ての Animator が 120 秒である必要がある)。

#### Kitsune Time (Udon Behaviour)

変更する必要はありません。

#### Sync Bool (Udon Behaviour)

変更する必要はありません。

---

設定が終わったら、まずは Local Build でテストした後、問題が無ければアップロードしてください。  
これで作業は完了です。

## 同期の仕組みについて

Synchronized Animator では、以下の手順で同期を行っています。  
基本的には遅延はあまり発生しないと思われますが、 `Update()` の呼ばれる頻度によっては大幅な遅延が発生します。

### 再生開始時点ですでに存在しているプレイヤーの場合

1. (Global) 再生開始時間 (`UnixTime - GMT`) を他のプレイヤーへ送信
2. (Global) `SyncBool#SetGlobal(true)` にて即時 `boolean` の同期を開始
3. (Local) 同期された `SyncBool` の値の変更を検出し、変数の同期を待機
4. (Local) 変数の同期状態を確認し、同期されていたら値を取得
5. (Local) 次 Tick にて、再生箇所を同期

### 再生開始時点ではまだ存在していなかったプレイヤーの場合

1. (Local) World に Join 後、 `SyncBool#SetLocal(true)` にて同期状態の確認を開始
2. (Local) 変数の同期状態を確認し、同期されていたら値を取得
3. (Local) 次 Tick にて、再生箇所を同期
