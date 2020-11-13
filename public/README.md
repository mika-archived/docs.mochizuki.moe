# docs.mochizuki.moe

夏猫 (VRC: natsuneko_vrc) が [BOOTH](https://natsuneko.booth.pm/) などで配布しているものについてのドキュメントです。  
各商品毎に解説ページを用意していますので、下記から選んでアクセスしてください。  
なお、全ての製品は OSS として開発されていますが、 **GitHub からの導入は一切サポートいたしませんのでご了承ください**。

> **お知らせ**
>
> 2020 年 11 月に各種 URL の変更を行いました。  
> 基本的にはリダイレクト処理を行っていますが、後にサポートされなくなりますのでご注意ください。

## Unity 関連製品

基本的には VRChat の Unity バージョンに合わせて制作されていますが、**それ以上のバージョンであれば**使用可能なはずです。

### Atlasization

テクスチャーのアトラス化を行う Unity エディター拡張です。  
わかりやすいウィザード形式を採用し、誰でも簡単に操作することが出来ます。

[Atlasization のページへ](https://docs.mochizuki.moe/Atlasization/)

### Constraint by Humanoid

[`IConstraint`](https://docs.unity3d.com/ScriptReference/Animations.IConstraint.html) (例: `ParentConstraint`) を実装している各種 Constraint の設定を自動化する Unity エディター拡張です。  
Unity の Humanoid 規約に沿ったアバターであれば、簡単に設定を行えます。

[Constraint by Humanoid のページへ](https://docs.mochizuki.moe/ConstraintByHumanoid/)

## VRChat 関連製品

VRChat 関連製品は、 Unity に加えて VRCSDK2 もしくは VRCSDK3 のどちらかが必要になります。

### Asset Merger (SDK3)

VRCSDK3 で製品毎に生成されている各アセットを統合、保存する為の Unity エディター拡張です。

[Asset Merger のページへ](https://docs.mochizuki.moe/AssetMerger/)

### Fukidashi System (SDK3)

あらかじめ自身で設定しておいた文言を Expression Menu の操作で出すことが出来るようになるアバターギミックです。

[Fukidashi System のページへ](https://docs.mochizuki.moe/FukidashiSystem/)

### Inventory System (SDK2)

あらかじめ設定しておいた GameObject をタッチ操作にて出し入れすることが出来るようになるアバターギミックです。  
**現在この製品はサポートされていません。**

### SDK2 Compatible Viewer (SDK3)

VRCSDK3 を導入した環境で VRCSDK2 時代に作成された各種アセットの中身を閲覧することが出来るようになる Unity エディター拡張です。

[SDK2 Compatible Viewer のページへ](https://docs.mochizuki.moe/SDK2CompatView/)

## VRChat - UdonRabbit

UdonRabbit は VRChat World SDK3 で使用可能な Udon とその拡張である UdonSharp を用いた製品群です。  
BOOTH の配布ページから個別に導入することが可能です。  
なお、導入には VRCSDK3 と UdonSharp が必要になります。

[UdonRabbit プロジェクトについてはこちら](https://docs.mochizuki.moe/UdonRabbit/)
