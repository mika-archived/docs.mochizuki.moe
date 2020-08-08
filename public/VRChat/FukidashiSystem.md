# VRChat Fukidashi System for Avatars 3.0

VRChat Avatars 3.0 で動作する簡易メッセージカードシステムです。  
あらかじめ登録しておいたメッセージを、 Expressions Menu の切替で表示することが出来ます。

なお、配布パッケージには設定用のアセット類は添付されておらず、以下の方法にて生成する必要があります。  
また、生成時、すでに設定されている項目がある場合は、既存の項目と必要な項目が自動で[マージ](https://www.wikiwand.com/ja/%E3%83%9E%E3%83%BC%E3%82%B8)されて適用されます。

## はじめに

このシステムをアバターに組み込むには、以下のものが必要です。

- Unity 2018.4.20f1
- VRChat Fukidashi System for Avatars 3.0 v0.1.0 以降
- お好きな 3D モデル
- CLIP STUDIO PAINT もしくは `.clip` を開けるペイントソフト
  - 無くても改変は可能ですが、上記ファイルを使用するのを推奨します。

ここでは、 v0.1.0、ミーシェちゃんで解説を進めていきます。

> 注意
>
> 導入後に起こったいかなる事にも私は責任を持ちません。自己責任でご利用ください。  
> また、作業の実行前に必ずシーンファイルのバックアップを保存しておいてください。
> なお、マージされるときに全てのファイルは置き換えではなく新規作成されます。

## ダウンロード

BOOTH から、最新の UnityPackage をダウンロードしてください。

- [BOOTH](https://natsuneko.booth.pm/items/2149045)

ダウンロード後、お使いのプロジェクトにインポートしてください。  
`Assets` 以下に、 `Mochizuki/VRChat` のようなフォルダーが出来ていれば OK です。

> メモ
>
> この UnityPackage には、 `VRChat/Extensions` をいう共通パッケージが含まれています。
> もし上書きされる場合は注意が必要です。

## Fukidashi Editor

Unity メニューバーの `Mochizuki/VRChat/Fukidashi Editor` から、専用エディターを開いてください。  
もし、上記メニューが存在しない場合は、インポートがうまくいっていないので、再度インポートを行ってください。

## セットアップ

エディターを開くと画像のようなものが表示されます。  
最低限必要なのは、 `VRC AVatar Descriptor` と `Message Board Parent` の 2 つのみです。

<img src="https://assets.mochizuki.moe/docs/VRChat/FukidashiSystem/1.PNG" width="550px" />

`VRC Avatar Descriptor` には、名前の通り `VRC_AvatarDescriptor` コンポーネントを設定したアバターを設定してください。  
画像の場合は、 `Mishe_light_sakura` が設定されています。

次に、 `Message Board Parent` には、メッセージカードを仕込みたい親の `GameObject` を設定してください。  
`GameObject` 自体は、 `Parent Constraint` などを用いて任意の Bone に追従するように設定したものをあらかじめ用意しておきます。  
詳しい説明は Google 検索やお近くの人に聞いてみてください。

それぞれの設定が終わったら、任意でオプションを設定します。  
初期値はすべて「上書きする (チェックされていない)」になっています。  
各オプションの動作は以下の通りです。

| オプション名                                | 動作                                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Merge with existing Animator Controller`   | アバターの Playable Layers の FX レイヤーがすでに設定されている場合、設定をマージするかどうか    |
| `Merge with existing Expressions Menu`      | アバターの Expressions が設定されている場合、 `Expressions Menu` の設定をマージするかどうか      |
| `Merge with existing Expression Parameters` | アバターの Expressions が設定されている場合、 `Expression Parameters` の設定をマージするかどうか |

なお、全てのオプションについて、極力既存の動作について影響がないようにマージしますが、全てが正常に動くとは限りませんので、ご了承ください。
設定が終わったら、 `Generate Assets and Apply Changes` をクリックします。  
クリックすると、途中何回かファイル保存ダイアログが出るので、それぞれ保存したい場所を選択してください。  
生成されるのは以下のファイルです。

1. `Expression Parameters`
2. `Animation Clip` \* 16
3. `Animator Controller`
4. `Expressions Menu` (SubMenu) \* 3
5. `Expressions Menu` (MainMenu)

設定がうまくいけば、設定した場所にメッセージカードが表示されています。  
あとは、アバターをアップロードすれば使用できます。お疲れさまでした。
