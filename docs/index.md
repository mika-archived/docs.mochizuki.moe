# docs.mochizuki.moe

夏猫 (VRC: natsuneko_vrc) が [BOOTH](https://natsuneko.booth.pm/){target=\_blank} などで配布しているものについてのドキュメントです。  
各商品毎に解説ページを用意していますので、下記もしくは上記からカテゴリーを選んでアクセスしてください。

<!-- prettier-ignore-start -->
!!! warning
    基本的にすべての製品は OSS (Open Source Software) として開発しており、 GitHub にて公開していますが、  
    GitHub から導入したものについては一切のサポートはありません。  
    あらかじめご了承下さい。
<!-- prettier-ignore-end -->

## Unity 関連製品

基本的には VRChat の Unity バージョンに合わせて制作されていますが、**それ以上のバージョンであれば**使用可能なはずです。

### Atlasization

テクスチャーのアトラス化を行う Unity エディター拡張です。  
わかりやすいウィザード形式を採用し、誰でも簡単に操作することが出来ます。

[Atlasization のページへ](/atlasization/)

### Constraint by Humanoid

[`IConstraint`](https://docs.unity3d.com/ScriptReference/Animations.IConstraint.html){target=\_blank} (例: `ParentConstraint`) を実装している各種 Constraint の設定を自動化する Unity エディター拡張です。  
Unity の Humanoid 規約に沿ったアバターであれば、簡単に設定を行えます。

[Constraint by Humanoid のページへ](/constraint-by-humanoid/)

<!--
### Mochizuki Particle Effect

小さな Particle Effect を 1 つ 100 円程度で販売しています。
Unity でのゲーム制作や VRChat のアバターの装飾品などの使用にどうぞ！

[Mochizuki Particle Effect のページへ](/mochizuki-particle-effect/)
-->

### Wireframe Shader

各メッシュのワイヤーフレームのみを描画するシェーダーです。  
シェーダーキーワードを使用していないので、 VRChat でも使うことが出来ます。

[Wireframe Shader のページへ](/wireframe-shader/)

## VRChat 関連製品

VRChat 関連製品は、 Unity に加えて VRCSDK2 もしくは VRCSDK3 のどちらかが必要になります。

### Asset Merger (SDK3)

VRCSDK3 で製品毎に生成されている各アセットを統合、保存する為の Unity エディター拡張です。

[Asset Merger のページへ](/asset-merger/)

### Fukidashi System (SDK3)

あらかじめ自身で設定しておいた文言を Expression Menu の操作で出すことが出来るようになるアバターギミックです。

[Fukidashi System のページへ](/fukidashi-system/)

### Inventory System (SDK2)

あらかじめ設定しておいた GameObject をタッチ操作にて出し入れすることが出来るようになるアバターギミックです。

<!-- prettier-ignore-start -->
!!! caution
    VRChat SDK3 により同等のことが可能となったため、この製品はサポートされなくなりました。
<!-- prettier-ignore-end -->

### SDK2 Compatible Viewer (SDK3)

VRCSDK3 を導入した環境もしくは何も導入していない環境で VRCSDK2 時代に作成された各種アセットの中身を閲覧することが出来るようになる Unity エディター拡張です。

[SDK2 Compatible Viewer のページへ](/sdk2-compat-view/)

### UdonRabbit

UdonRabbit は VRChat World SDK3 で使用可能な Udon とその拡張である UdonSharp を用いた製品群です。  
BOOTH の配布ページから個別に導入することが可能です。  
なお、導入には VRCSDK3 と UdonSharp が必要になります。

[UdonRabbit プロジェクトについてはこちら](/udon-rabbit/)
