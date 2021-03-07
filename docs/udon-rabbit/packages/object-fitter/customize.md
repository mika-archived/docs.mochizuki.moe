---
title: Object Fitter のカスタマイズ
---

# Object Fitter のカスタマイズ

ここでは、　 Objet Fitter のカスタマイズ方法について説明します。

## ボタンの入れ替え

現状出来ませんが、 alpha.8 以降で簡単な方法を提供予定です。

## ラベルを設定する

Object Fitter のデフォルトでは `Sample Costume` と表示されています。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/object-fitter/customize-title.png" width="500px" >
  <figcaption>丸で囲まれている部分</figcaption>
</figure>

ここのテキストは、以下のオブジェクトの `Text Mesh Pro UGUI (Script)` 中にある `Text` を変更することで、カスタマイズが可能です。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/object-fitter/customize-title-inspector.png" width="300px" >
  <figcaption>ハイライトされているオブジェクトを選択し、</figcaption>
</figure>

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/object-fitter/customize-title-inspector-2.png" width="300px" >
  <figcaption>Sample Costume とある部分を好きなテキストへと変更する</figcaption>
</figure>

## 可動範囲を設定する

<!-- prettier-ignore-start -->
!!! warning
    この項目を変更する場合は、少なくとも情報工学のビットおよびビット演算について、また C# へのの理解が必要です。  
    これらについての知識がない場合は、変更するのは推奨しません (うごかなくなります)。
<!-- prettier-ignore-end -->

Object Fitter では、各オブジェクトについて、3 つの `System.Int32` データ型にパックした上で送受信されており、それらをエンコード、デコードすることで、値を送信・入手しています。  
それぞれのオブジェクトのビットマップは以下の通りです。

| 対象変数        | データサイズ | データレイアウト | データ名      | データ範囲         |
| --------------- | ------------ | ---------------- | ------------- | ------------------ |
| ScaleX, Y, Z    | 8bit         | `WWWWWW`         | Unsigned Byte | `0.00` ~ `2.55`    |
| PositionX, Y, Z | 8bit         | `SWWWWW`         | Signed Byte   | `-1.27` ~ `1.27`   |
| RotationX, Y, Z | 13bit        | `SWWWWWWWWWWWW`  | Signed Short  | `-409.5` ~ `409.5` |

技術的には、 Transform の各種値を X, Y, Z に分解した後、それぞれを 32bit int の中にパックした上で同期を行います。  
なお、データサイズ的にはまだ 3bit 余っているので、必要に応じて特定のプロパティの値の範囲を拡張することも可能です。

これらのデータについて拡張する場合は、 `ObjectFitterWithButton/UI/UICanvas/変数名/Slider[X|Y|Z]/Slider` の値を `MinValue` と `MaxValue` および、
`ObjectFitterWithButton/Meta/DataPacker32x3/変数名` の値を編集することで可能になります。

詳しくは、 `MemoryLayout32x3` のソースコードを参照ください。
