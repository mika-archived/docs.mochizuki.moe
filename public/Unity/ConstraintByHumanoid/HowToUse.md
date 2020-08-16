# 使い方

このページでは、 Constraint by Humanoid ツールの標準的な使い方について説明しています。

## Constraint Editor

Unity メニューバーから、 `Mochizuki/Constraint by Humanoid` をクリックし、エディターを開いてください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/Unity/ConstraintByHumanoid/02.PNG">
  <figcaption>
    Unity のメニューから、画像のハイライトされている部分をクリック
  </figcaption>
</figure>

エディターを開くと、以下のような画面が開きます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/Unity/ConstraintByHumanoid/01.PNG" width="350px">
  <figcaption>※画像はすでに設定済みのものです。</figcaption>
</figure>

開けなかった場合はインポートに失敗している可能性があるので、確認をお願いします。  
このとき、コンソールにエラーが出ていた場合は、[専用 Twitter アカウント](https://twitter.com/Nekonoya_Booth)までお問い合わせください。  
不具合の可能性がある為、調査を行います。

## 設定

> **注意**
>
> この操作は、一度行った後は取り消すことが出来ません。  
> そのため、現在のアバター情報を Prefab 等の形式にてバックアップを取っておくことを推奨します。

Source GameObject には、 Constraint の Source に設定する Humanoid Rig を設定します。

<figure>
  <img src="https://assets.mochizuki.moe/docs/Unity/ConstraintByHumanoid/04.PNG" width="400px">
  <figcaption>Source GameObject に設定した Rig の各ボーンは画像赤枠に設定される</figcaption>
</figure>

Destination GameObject には、 Constraint を設定する Humanoid Rig を設定します。  
各項目は、それぞれ `Animator` Component と直下に `Armature` GameObject を所持している必要があります。  
※一般的な VRChat 用のアバターを購入した場合などは、上記条件を満たしています。

下の画像のように設定した場合、ミーシェちゃんを Source とした Constraint を受付嬢さん設定します。

<figure>
  <img src="https://assets.mochizuki.moe/docs/Unity/ConstraintByHumanoid/05.PNG" width="450px">
</figure>

各 GameObject の設定が終わったら、必要に応じて除外設定を行います。  
除外設定された GameObject は、 Constraint が設定されることはありません。  
これは、 Source および Destination のどちらに属する GameObject を設定してもかまいません。  
設定するには、 `Exclude GameObjects` Foldout を開き、以下のどちらかの方法で設定を行います。

- Size に除外したい GameObject の数を入力し、1 つ 1 つ設定していく
- 下のボックスに Drag and Drop でまとめて放り込む

下の画像の場合は、足に関する Bone については、 Constraint を付けない設定になっています。

<figure>
  <img src="https://assets.mochizuki.moe/docs/Unity/ConstraintByHumanoid/06.PNG" width="450px">
  <figcaption>
    例としてミーシェちゃんの足に関する GameObject を設定している。<br/>
    この場合は、足に関する Bone については Constraint が設定されない。
  </figcaption>
</figure>

最後に、 Constraint の種類を選択します。  
どれを選んでも、以下の設定が適用されます。

- Sources には Source GameObject の対応する GameObject が設定される
  - Weight には 1 が設定される
- 各 Constraint は、 Activate された状態になる
  - ただし Lock はされていない

アタッチされた各 GameObject の Constraint については、手動で調整する必要があります。  
設定をし終えたら、「変更を適用」ボタンを押すことで、処理が実行されます。  
お疲れさまでした。
