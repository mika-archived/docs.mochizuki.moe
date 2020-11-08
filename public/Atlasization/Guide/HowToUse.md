このページでは、 Atlasization でミーシェちゃんを例に実際にアトラス化を行っていく手順を説明します。  
なお、アバター以外の他のもの (例: 建物など) も同様の手順で行うことが出来ます。

## Atlasization Editor

まずは Unity メニューバーの `Mochizuki/Atlasization/Editor` から、専用のエディターを開いてください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/Atlasization/03.PNG">
  <figcaption>
    Unity のメニューから、画像のハイライトされている部分をクリック
  </figcaption>
</figure>

開けなかった場合はインポートに失敗している可能性があるので、確認をお願いします。  
このとき、コンソールにエラーが出ていた場合は、[専用 Twitter アカウント](https://twitter.com/Nekonoya_Booth)までお問い合わせください。  
不具合の可能性がある為、調査を行います。

## 設定

次に、各種項目の設定を行います。  
Atlasization ではウィザード形式を採用しているので、ページ毎に解説を行っていきます。

### 1 ページ目

<figure>
  <img src="https://assets.mochizuki.moe/docs/Atlasization/04.PNG">
  <figcaption>
    スタートページ
  </figcaption>
</figure>

初めに、起動した直後や作業が終了すると、このページが開いています。  
ここでは起動モードが選べます。

簡単かつシンプルにアトラス化を行いたい場合は、 `Standard` モードを、  
詳細に自分でいろいろ設定を行いたい場合は、 `Professional` モードを選択してください。

機能の違いとしては、 v0.1.0-alpha.4 時点では以下の通りです。

| 機能 \ モード              |   Standard   | Professional |
| -------------------------- | :----------: | :----------: |
| アトラス化                 |      o       |      o       |
| SubMesh の設定             |      o       |      o       |
| テクスチャの配置           | x (自動設定) |   o (予定)   |
| 高度なテクスチャの自動配置 |      x       |   o (予定)   |
| テクスチャの設定           |      o       |      o       |
| シェーダー設定             |      o       |      o       |
| シェーダーの詳細設定       |      x       |   o (予定)   |

なお、ここでは `Standard` モードにて解説を行っていきます。  
モードの設定が終わったら `次へ` をクリックしてください。

### 2 ページ目

<figure>
  <img src="https://assets.mochizuki.moe/docs/Atlasization/05.PNG">
  <figcaption>
    初期設定ページ
  </figcaption>
</figure>

このページでは、アトラス化を行いたい GameObject もしくは Prefab を設定します。  
どちらを設定しても、**もとの GameObject もしくは Prefab が変更されることはありません。**

対象のオブジェクトの設定が終わったら、 `次へ` を押します。

!> **注意** <br/>GameObject もしくは Prefab 内に Missing Script が含まれている場合、最後のステップでエラーが発生しますので、あらかじめ取り除いてください。<br/>Missing Script を取り除くには [Missing Remover](https://riku1227.booth.pm/items/1969758) などがオススメです。

### 3 ページ目

<figure>
  <img src="https://assets.mochizuki.moe/docs/Atlasization/06.PNG" height="350px">
  <figcaption>
    SubMesh 設定ページ
  </figcaption>
</figure>

このページでは、 SubMesh の設定を行います。  
SubMesh を設定することで、出力される Mesh について、複数の Material を適用することが可能になります。  
例えばミーシェちゃんなどのアバターの場合、 `Body` には肌や髪の Material と、 BlendShape で表情を変更するための Material が設定されているケースがあります。  
そういった場合、 SubMesh の設定を行わないと、適切に BlendShape での表情が動作しない可能性があります。

今回の場合は、 `M_facial_expressions` に関連付けられた Mesh は別の Material を使いたいので、 `LayerID` に `1` を設定してください。  
同様に、 Material に関連付けられた Mesh を分割生成したい場合は `2`, `3` ... などと連番で生成することで、分割することが可能です。

設定が終わったら、 `次へ` をクリックしてください。

### 4 ページ目

<figure>
  <img src="https://assets.mochizuki.moe/docs/Atlasization/07.PNG" height="350px">
  <figcaption>
    テクスチャー設定ページ
  </figcaption>
</figure>

このページでは、テクスチャーの配置の設定を行います。  
`Standard` モードで起動した場合は、このページで行う設定作業は特にありません。  
テクスチャが正しく検出されているか確認したら、 `次へ` をクリックしてください。

`Professional` モードで起動した場合は、このページでテクスチャの配置などを変更できるようになる予定です。  
ただし、 v0.1.0-alpha.4 時点では実装されていません。

### 5 ページ目

<figure>
  <img src="https://assets.mochizuki.moe/docs/Atlasization/08.PNG">
  <figcaption>
    シェーダー設定ページ
  </figcaption>
</figure>

このページでは、出力される Material の設定を行います。  
3 ページ目 (SubMesh 設定) で設定した LayerID に基づいて、 Material が生成されます。  
例えば、 LayerID が 2 種類あった場合は、2 つ Material が生成されます。

`Material for Shader` から、どのレイヤーの Material のシェーダーを変更するかを選択できます。  
このとき、 LayerID に設定されていた全ての Material のシェーダーが同じではない場合、 `Standard` シェーダーが設定されていますので、  
必要があれば変更を行ってください。

`Professional` モードで起動した場合は、このページで Material の詳細設定を変更できるようにする予定です。  
ただし、 v0.1.0-alpha.4 時点では未実装です。

### 6 ページ目

<figure>
  <img src="https://assets.mochizuki.moe/docs/Atlasization/09.PNG">
  <figcaption>
    出力設定ページ
  </figcaption>
</figure>

このページでは、出力ファイル名などの設定を行います。  
`出力先ディレクトリ` には、生成されたファイルを保存したいフォルダーをドラッグアンドドロップで設定してください。  
`出力ファイル名` には、ベースとなる名前を設定してください。特に変更しなくても問題はありません。

`Material Key を使用する`、は以下の条件に当てはまる GameObject が存在する場合はチェックマークを入れてください。

- 同じ Mesh を参照しているが、使用している Material が異なる
- Unity の標準で生成した Quad や Cube などを複数使用している

`出力サイズ` はテクスチャーの出力サイズを指定します。  
`1K` ～ `8K` まで、ありますが、基本は `4K` を推奨します。

設定が終わったら、 `次へ` をクリックしてください。

### 7 ページ目

このページでは、いままでいろいろ設定してきた各種項目の最終確認を行います。  
特に問題が無ければ `生成` をクリックして、暫く待ちます。

出力が成功すると、今回の場合は `Mishe_n(Clone).prefab` が生成されます。  
その Prefab ファイルを使用することで、アトラス化されたテクスチャなどを使用することが出来ます。

## `Mochizuki.Workspace` GameObject について

シーンに自動生成される `Mochizuki.Workspace` GameObject ですが、基本的には**自身で触る必要はありません。**  
ただし、以下の条件を満たす場合は、手動で削除を行う必要があります。

- 途中で Atlasization を終了した
- Atlasization が異常終了した
