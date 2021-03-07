# Udon Rabbit のインストール

ここでは、 Udon Rabbit の各パッケージのインストール方法を説明しています。

## 動作環境

Udon Rabbit では、あらかじめ以下のものがプロジェクトにインポートされている必要があります。

-   Unity 2018.4.20f1
-   VRCSDK3 WORLD
-   TextMesh Pro

<!-- prettier-ignore-start -->
!!! caution
    導入後に発生したいいかなる事態にも夏猫は責任を負うことは出来ません。  
    あらかじめ Udon Rabbit をインポートする前に、プロジェクト全体のバックアップを用意することを推奨します。
<!-- prettier-ignore-end -->

## UdonSharp のインポート

<!-- prettier-ignore-start -->
!!! info
    プロジェクト内にあらかじめ UdonSharp がインポートされている場合は、このステップを行う必要はありません。
<!-- prettier-ignore-end -->

Udon Rabbit では、 Udon Graph でのコンポーネント作成ではなく、 UdonSharp による C# のトランスパイルを行ってコンポーネントを作成しています。  
そのため、プロジェクト内にあらかじめ UdonSharp を入れておく必要があります。

まず、 Udon Sharp は以下の GitHub からダウンロードします。

-   [MerlinVR/UdonSharp](https://github.com/MerlinVR/UdonSharp/releases){target=\_blank}

基本的には、 `Latest Release` とタグが付いているものをダウンロードしてください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/common/udon-rabbit-common-step-1.png" width="300px">
  <figcaption><code>Latest release</code> タグが付いているものをまず見つける</figcaption>
</figure>

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/common/udon-rabbit-common-step-2.png" width="400px">
  <figcaption>そこに関連付けられている <code>UdonSharp_vX.X.X.unitypackage</code> をダウンロードする</figcaption>
</figure>

ダウンロードした UnityPackage を、あとは通常通りプロジェクトへインポートしてあげれば前準備は完了です。

## Udon Rabbit のインポート

BOOTH からダウンロードした UnityPackage をインポートしてください。

<!-- prettier-ignore-start -->
!!! info
    複数の Udon Rabbit 製品を使用する場合は、必ずバージョンを合わせてください。  
    合わせなかった場合、コンパイルエラーが発生する可能性があります。
<!-- prettier-ignore-end -->

## Udon Rabbit のアップデート

そのまま上書きインポートしてください。
