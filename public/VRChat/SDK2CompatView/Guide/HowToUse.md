このページでは、 SDK2 Compatible Viewer の標準的な使い方について説明しています。

## SDK2 Compatible Editor

Unity メニューバーの `Mochizuki/VRChat/SDK2 Compat View/Editor` から、専用エディター (ビューワー) を開いてください。  
もし、上記メニューが存在しない場合は、インポートがうまくいっていないので、再度インポートを行ってください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/SDK2CompatView/04.PNG">
  <figcaption>
    Unity のメニューから、画像のハイライトされている部分をクリック
  </figcaption>
</figure>

エディターを開くと、以下のような画面が開きます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/SDK2CompatView/05.PNG">
</figure>

開けなかった場合はインポートに失敗している可能性があるので、確認をお願いします。  
このとき、コンソールにエラーが出ていた場合は、[専用 Twitter アカウント](https://twitter.com/Nekonoya_Booth)までお問い合わせください。  
不具合の可能性がある為、調査を行います。

## VRC Avatar Descriptor (SDK2) の閲覧

VRCSDK2 時代に取り付けた Avatar Descriptor を閲覧したい場合は、 Avatar Descriptor を取り付けた GameObject もしくは Prefab を、  
`VRChat SDK2 Asset` の場所に設定してください。

`VRC Avatar Descriptor` をデータの中から見つけることが出来れば、下のように表示されます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/SDK2CompatView/01.PNG" width="350px">
  <figcaption>
    Avatar Descriptor (SDK2) の各データ
  </figcaption>
</figure>

なお、現時点で対応できていない一部の項目については `Not Supported` のように表示されます。

## Animator Override Controller の場合

VRCSDK2 時代に作成された Animator Override Controller のうち、 `AvatarControllerTemplate` をベースとしてある Animator Override Controller は、  
`VRC Avatar Descriptor` と同様、`VRChat SDK2 Asset` の場所に設定することで、閲覧が可能です。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/SDK2CompatView/02.PNG" width="350px">
  <figcaption>
    Expression Parameters タブを開いた様子
  </figcaption>
</figure>
