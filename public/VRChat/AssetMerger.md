# VRChat Asset Merger for Avatars 3.0

Avatars 3.0 になったことで競合する可能性がある以下のファイルの内容を結合 (マージ) してくれる Unity エディター拡張です。

- Animator Controller
- Expression Parameters
- Expressions Menu

## はじめに

このエディター拡張を使用するには、以下のものが必要です。

- Unity 2018.4.20f1
- VRChat Asset Merger for Avatars 3.0 v0.1.0 以降
- VRCSDK3 AVATAR 2020.08.06.16.30
  - (おそらくそれ以降のバージョンでも動作はします)

> 注意
>
> 導入後に起こったいかなる事にも私は責任を持ちません。自己責任でご利用ください。  
> なお、マージされるときに全てのファイルは置き換えではなく新規作成されます。  
> また、マージ後に生成されるファイルについて、自動設定は行われません。

## ダウンロード

BOOTH から、最新の UnityPackage をダウンロードしてください。

- [BOOTH](https://natsuneko.booth.pm/items/2281798)

ダウンロード後、お使いのプロジェクトにインポートしてください。  
`Assets` 以下に、 `Mochizuki/VRChat` のようなフォルダーが出来ていれば OK です。

> メモ
>
> この UnityPackage には、 `VRChat/Extensions` をいう共通パッケージが含まれています。  
> もし上書きされる場合は注意が必要です。

## Asset Merge Editor

Unity メニューバーの `Mochizuki/VRChat/Asset Merge Editor` から、専用エディターを開いてください。  
もし、上記メニューが存在しない場合は、インポートがうまくいっていないので、再度インポートを行ってください。

## 結合作業

それぞれのファイルについて解説を行っていきます。
まずは結合したいファイルの種類をタブから選んでください。

### Animator Controller

Animator Controller タブを選んだ場合、以下のようなエディター画面が表示されます。

<img src="https://assets.mochizuki.moe/docs/VRChat/AssetMerger/01.PNG" width="550px" />

`Source Controllers` を開き、 `Size` に統合したいファイルの数を、 `Element N` にファイルを設定します。  
設定が終わったら、「マージする」ボタンを押します。  
押したらファイル保存ダイアログが出るので、好きな場所を選び、決定をクリックします。

あとは、ファイルが生成されるのを待ちます。  
このとき、もしエラーや警告が出ていた場合は Console に出ます。
最後に、生成されたファイルを `VRC_AvatarDescriptor` のレイヤーに設定してあげれば OK です。

### Expression Parameters

Expression Parameters タブを選んだ場合、以下のようなエディター画面が表示されます。

<img src="https://assets.mochizuki.moe/docs/VRChat/AssetMerger/02.PNG" width="550px" />

`Source Parameters` を開き、 `Size` に統合したいファイルの数を、 `Element N` にファイルを設定します。  
設定が終わったら、「マージする」ボタンを押します。  
押したらファイル保存ダイアログが出るので、好きな場所を選び、決定をクリックします。

あとは、ファイルが生成されるのを待ちます。  
このとき、もしエラーや警告が出ていた場合は Console に出ます。
最後に、生成されたファイルを `VRC_AvatarDescriptor` の Expressions に設定してあげれば OK です。

### Expressions Menu

Expressions Menu タブを選んだ場合、以下のようなエディター画面が表示されます。

<img src="https://assets.mochizuki.moe/docs/VRChat/AssetMerger/03.PNG" width="550px" />

`Source Expressions` を開き、 `Size` に統合したいファイルの数を、 `Element N` にファイルを設定します。  
設定が終わったら、「マージする」ボタンを押します。  
押したらファイル保存ダイアログが出るので、好きな場所を選び、決定をクリックします。

あとは、ファイルが生成されるのを待ちます。  
このとき、もしエラーや警告が出ていた場合は Console に出ます。
最後に、生成されたファイルを `VRC_AvatarDescriptor` の Expressions に設定してあげれば OK です。

## マージ内容について

各ファイルについて、以下の形式でファイルの結合を行っています。

### Animator Controller

- それぞれの Animator Controller のパラメータの内容を新しい Animator Controller にコピー
  - 同じパラメータ名がすでにある場合は無視
- それぞれの Animator Controller の各レイヤーの内容を新しい Animator Controller にコピー
  - レイヤー名が被っている場合は、採番を行う

### Expression Parameter

- 各パラメータの中身を新しい Expression Parameter にコピー
  - 名前ベースで解決し、すでに登録されている場合は無視
- 最終的なパラメータの総数が登録可能上限を超えている場合はエラー

### Expressions Menu

- 各パラメータの中身を新しい Expressions Menu にコピー
  - 名前ベースで解決し、すでに登録されている場合は無視
- 最終的なメニューの総数が登録可能上限を超えている場合はエラー
