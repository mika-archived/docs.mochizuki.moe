このページでは、 Asset Merger の標準的な使い方について説明しています。

## Asset Merge Editor

Unity メニューバーの `Mochizuki/VRChat/Asset Merge Editor` から、専用エディターを開いてください。  
もし、上記メニューが存在しない場合は、インポートがうまくいっていないので、再度インポートを行ってください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/AssetMerger/04.PNG">
  <figcaption>
    Unity のメニューから、画像のハイライトされている部分をクリック
  </figcaption>
</figure>

エディターを開くと、以下のような画面が開きます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/AssetMerger/01.PNG" width="350px">
</figure>

開けなかった場合はインポートに失敗している可能性があるので、確認をお願いします。  
このとき、コンソールにエラーが出ていた場合は、[専用 Twitter アカウント](https://twitter.com/Nekonoya_Booth)までお問い合わせください。  
不具合の可能性がある為、調査を行います。

## Animator Controller の結合

Animator Controller の結合を行うには、中央の `Animator Controller` タブを選択してください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/AssetMerger/01.PNG" width="350px">
  <figcaption>
    Animator Controller タブを開いた様子
  </figcaption>
</figure>

開いたら、 `Source Controllers` Foldout を開き、 `Size` に結合したいファイルの数を入力し、`Element N` にファイルを設定していきます。  
設定し終わったら、 `マージする` ボタンをクリックすることで､ファイル保存ダイアログが表示され、  
保存する場所を設定したら、新しい Animator Controller が保存されます。  
自動設定はされませんので、 `VRC_AvatarDescriptor` に対して、再設定を行ってください。

なお、新しい Animator Controller は Deep Copy (実体コピー) されており、それ単体で動作します。  
Shallow Copy (参照コピー) を使用したい場合や詳細については、 [上級者向け設定](/VRChat/AssetMerger/Advanced/AnimatorController) を参照してください。  
通常の場合これらのオプションは使用する必要はありません。

## Expression Parameters の結合

Expression Parameters の結合を行うには、中央の `Expression Parameters` タブを選択してください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/AssetMerger/02.PNG" width="350px">
  <figcaption>
    Expression Parameters タブを開いた様子
  </figcaption>
</figure>

開いたら、 `Source Parameters` Foldout を開き、 `Size` に結合したいファイルの数を入力し、`Element N` にファイルを設定していきます。  
設定し終わったら、 `マージする` ボタンをクリックすることで､ファイル保存ダイアログが表示され、  
保存する場所を設定したら、新しい Expression Parameters が保存されます。  
自動設定はされませんので、 `VRC_AvatarDescriptor` に対して、再設定を行ってください。

### Expressions Menu の場合

Expressions Menu の結合を行うには、中央の `Expressions Menu` タブを選択してください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/AssetMerger/03.PNG" width="350px">
  <figcaption>
    Expressions Menu タブを開いた様子
  </figcaption>
</figure>

開いたら、 `Source Expressions` Foldout を開き、 `Size` に結合したいファイルの数を入力し、`Element N` にファイルを設定していきます。  
設定し終わったら、 `マージする` ボタンをクリックすることで､ファイル保存ダイアログが表示され、  
保存する場所を設定したら、新しい Expression Parameters が保存されます。  
自動設定はされませんので、 `VRC_AvatarDescriptor` に対して、再設定を行ってください。

## 結合される内容について

各ファイルについて、以下の方法でファイルの結合を行っています。  
ただし、 Advanced Settings を使用した場合は挙動が変わる可能性があります。

### Animator Controller

- それぞれの Animator Controller のパラメータの内容を新しい Animator Controller にコピー
  - 同じパラメータ名がすでにある場合は無視
- それぞれの Animator Controller の各レイヤーの内容を新しい Animator Controller にコピー
  - レイヤーに含まれる各データについて、 Instance ID を元に参照を再度作成
  - レイヤー名が被っている場合は、採番を行い区別が付くように変更
  - 対象のレイヤーが元 Animator Controller の First Layer の場合は Weight に 1 を設定

このとき、各データから参照されていないデータが含まれているなどの理由によって、以下の現象が発生する可能性があります。

- 結合前のファイルよりも、結合後のファイルが大幅にサイズが減っている

### Expression Parameter

- 各パラメータの中身を新しい Expression Parameter にコピー
  - 名前ベースで解決し、すでに登録されている場合は無視
- 最終的なパラメータの総数が登録可能上限を超えている場合はエラー

### Expressions Menu

- 各パラメータの中身を新しい Expressions Menu にコピー
  - 名前ベースで解決し、すでに登録されている場合は無視
- 最終的なメニューの総数が登録可能上限を超えている場合はエラー

{docsify-updated}
