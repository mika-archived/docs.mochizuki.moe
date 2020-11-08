Animator Controller の上級者向け設定について説明します。  
Version 0.4.0 時点において、 Advanced Settings には、以下の項目が含まれています。

- `Enable Shallow Copy`

## Shallow Copy

Shallow Copy とは、浅いコピーとも呼ばれ、対象オブジェクトへの参照のコピーのことを表します。  
Unity においての参照コピーとは、他ファイルへのリンクとその位置を表したものがコピーされます。

Asset Merger の 0.2.0 までは、この Shallow Copy が (意図せず) 行われていたのですが、  
一部の使い方において有効なのではないかと考えて、意図的に Shallow Copy を行うためのオプションを用意しました。  
それが `Enable Shallow Copy` です。

`Enable Shallow Copy` を有効にし、 Shallow Copy を行うと、以下の動作が可能になります。

- コピー元の Animator Controller で変更したものが、コピー先の Animator Controller にも反映される

逆に言うと、以下の現象が発生します。

- コピー元の Animator Controller が失われた場合、コピー先の Animator Controller のレイヤー情報が失われる

`Enable Shallow Copy` を有効にすると、 Shallow Copy を行うレイヤーを選択する UI が表示されます。  
チェックマークを入れることで、そのレイヤーは Shallow Copy が行われます。

あとの手順は、通常の結合作業と同じなので省略します。

{docsify-updated}
