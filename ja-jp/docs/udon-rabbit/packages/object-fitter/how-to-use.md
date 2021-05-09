---
title: Object Fitter の設定方法
---

# Object Fitter の設定方法

ここでは、 Object Fitter の設定方法について解説しています。

## ダウンロード

BOOTH から最新の UnityPackage をダウンロードしてください。

-   [BOOTH](https://natsuneko.booth.pm/items/2540555){target=\_blank}

なお、インストール方法については、[こちら](/udon-rabbit/guides/getting-started)にて解説しています。  
インストール方法で分からない部分がありましたら上記ページを参照ください。

## 前提条件

Object Fitter では、設定するための専用エディターを提供していますが、以下の条件を満たさないものについては、手動で設定を行う必要があります。

1. 衣装そのものを装着するためのアバターを所持している
1. 衣装には `Armature` オブジェクトと `Avatar` オブジェクトが設定されている
    1. `Avatar` オブジェクトについては、最悪ダミーでも問題はありません
1. 一般的な `Armature` (ボーン構造) が定義されている

これは、専用エディターの仕組み上、素体もしくはアバターそのものからボーン情報を取得し、それを元に衣装などのボーンをマッピングしているためです。  
そのため、最低限装着させるためのアバターそのものがプロジェクト内で使用可能である必要があります。

なお、推奨はしませんがすべてのボーンを手動でマッピングする場合は、アバターをプロジェクトに含める必要はありません。

## 導入方法 (衣装など)

ここでは、[アトリエ ORCA さんのダッフルコート](https://atelierorca.booth.pm/items/1598650){target=\_blank}を例に説明していきます。  
まずは衣装の Prefab をシーン内の任意の場所に設置してください。  
設置したら、**設置した衣装などの Prefab を展開してください**。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/object-fitter/object-fitter-step-1.png" width="300px" data-zoomable="true">
  <figcaption>画像のハイライトしているところから Prefab の展開ができます</figcaption>
</figure>

次に、専用エディターを開きます。  
専用エディターを開くには、 Unity のメニューバーから `Mochizuki/VRChat/Object Fitter/Editor` を開いてください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/object-fitter/object-fitter-step-2.png" width="300px" data-zoomable="true">
</figure>

<!-- prettier-ignore-start -->
!!! info
    バージョン 0.1.0-alpha.8 より前のものを使用している場合は、 `Mochizuki/VRChat/Object Fitter` から開けます。
<!-- prettier-ignore-end -->

開いたら、次は Object Fitter の `Prefabs` フォルダー内にある `ObjectFitterWithButton`　もしくは `ObjectFitterNotSyncedWithButton` Prefab を任意の場所に設置してください。  
この Prefab は展開しなくても問題ありません。  
それぞれの Prefab の違いは以下の通りです。  
なお、トライアル版の場合は、 `ObjectFitterNotSyncedWithButton` のみ同梱しています。

| Prefab 名                         | 同期 | Scale 範囲 | Position 範囲  | Rotation 範囲 |
| --------------------------------- | ---- | ---------- | -------------- | ------------- |
| `ObjectFitterWithButton`          | o    | `0 ~ 2.55` | `-1.27 ~ 1.27` | 制限無し      |
| `ObjectFitterNotSyncedWithButton` | x    | 制限無し   | 制限無し       | 制限無し      |

最後に、それぞれ以下の項目を設定してください。

| 項目名               | 設定するもの                                            |
| -------------------- | ------------------------------------------------------- |
| Avatar               | アバターデータそのもの (素体でも、素体ではないものでも) |
| Costume (Armature)   | 衣装の `Armature` オブジェクト                          |
| Object Fitter (Udon) | `ObjectFitterWithButton` の中にある `Cube` オブジェクト |

この時点で下の画像のようになっていれば問題ありません。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/object-fitter/object-fitter-step-3.png" width="400px" data-zoomable="true">
</figure>

`ObjectFitterWithButton` の中にある `Cube` オブジェクトは下記画像の場所に存在しています。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/object-fitter/object-fitter-step-3-appendix.png" width="400px" data-zoomable="true">
</figure>

最後に、エディター上にある「生成」ボタンを押せば、設定は完了です。

## 導入方法 (アクセサリーなど)

<!-- prettier-ignore-start -->
!!! info
    この項目は、将来のリリースによって変更される可能性があります。
<!-- prettier-ignore-end -->

ここでは、[てくのろじあさんのさくらアクセサリー４点セット](https://lowteq.booth.pm/items/1926110){target=\_blank}を例に説明します。  
まずアクセサリーの場合は、**どのボーンへ追従させたいかを決める必要があります**。  
詳しくは下記の注釈を参照ください。ここでは `Head` に追従させることにします。

<!-- prettier-ignore-start -->
!!! info
    現時点ではここで設定したボーンに対してのみ追従するようになります。  
    そのため、リボンなどのような身体のどこにでも装着可能なアクセサリーの場合は現状ユーザーによっては装着感をうまく得られません。  
    これは将来の更新で改善する予定です。
<!-- prettier-ignore-end -->

追従先を決めたら、対象のアクセサリーをシーンの中の任意の場所に設置します。
次に、 `Udon Behaviour` をアクセサリーに追加し、 `Program Source` へと `Bone Mapper` をアタッチしてください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/object-fitter/object-fitter-step-4.png" width="500px" data-zoomable="true">
</figure>

最後に、 `ObjectFitterWithButton` Prefab をシーン内に設置し、位置を調節した後、 `Cube` の中にある `Mappings` に設定を行ってください。  
`ObjectFitterWithButton` の中にある `Cube` オブジェクトは下記画像の場所に存在しています。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/object-fitter/object-fitter-step-3-appendix.png" width="400px" data-zoomable="true">
</figure>

これで設定は完了です。
