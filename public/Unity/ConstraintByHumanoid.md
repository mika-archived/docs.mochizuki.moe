# Constraint by Humanoid

Unity の Humanoid Rig の規格に基づいて、複数 Rig 間の Constraint 設定を自動で行う Unity エディター拡張です。  
Drag and Drop に対応した除外機能付き。

ここでは、エディター拡張の導入方法から設定、適用するまでを解説します。

## ダウンロード

BOOTH から最新の UnityPackage をダウンロードしてください。  
なお、過去バージョンについては GitHub でも配布しています。

- [BOOTH](https://natsuneko.booth.pm/items/2284661)

ダウンロード後、お使いのプロジェクトにインポートしてください。  
`Assets` 以下に `Mochizuki/ConstraintByHumanoid` フォルダーが生成されていれば OK です。

## Constraint Editor

Unity メニューバーから、 `Mochizuki/Constraint by Humanoid` をクリックし、エディターを開いてください。  
エディターを開くと、以下のような画面が開きます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/Unity/ConstraintByHumanoid/01.PNG" width="550px">
  <figcaption>※画像はすでに設定済みのものです。</figcaption>
</figure>

開けなかった場合はインポートに失敗している可能性があるので、確認をお願いします。

## 設定

Source GameObject には、 Constraint の Source に設定する Humanoid Rig を設定します。  
Destination GameObject には、 Constraint を設定する Humanoid Rig を設定します。  
各項目は、それぞれ `Animator` Component と直下に `Armature` GameObject を所持している必要があります。

画像の場合、入力元としてミーシェちゃんをもととした Constraint を受付嬢さんにくっつける形になります。

各 GameObject の設定が終わったら、必要に応じて除外設定を行います。  
除外設定された GameObject は、 Constraint が設定されることはありません。  
これは、 Source および Destination のどちらを設定してもかまいません。  
設定するには、 `Exclude GameObjects` Foldout を開き、以下のどちらかの方法で設定を行います。

- Size に除外したい GameObject の数を入力し、1 つ 1 つ設定していく
- 下のボックスに Drag and Drop でまとめて放り込む

先ほどの画像の場合は、足に関する Bone については、 Constraint を付けない設定になっています。

最後に、 Constraint の種類を選択します。  
どれを選んでも、以下の設定が適用されます。

- Sources には Source GameObject の対応する GameObject が設定される
  - Weight には 1 が設定される
- 各 Constraint は、 Activate された状態になる
  - ただし Lock はされていない

アタッチされた各 GameObject の Constraint については、手動で調整する必要があります。  
設定をし終えたら、「変更を適用」ボタンを押すことで、処理が実行されます。  
お疲れさまでした。

## 更新履歴

### Version 0.1.0

- 初回リリース
