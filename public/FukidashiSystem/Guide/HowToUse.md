このページでは、 Fukidashi System でアバターにメッセージカードを取り付けるまでの手順を解説します。

## Fukidashi Editor

まず初めに、 Unity メニューバーの `Mochizuki/VRChat/Fukidashi System/Editor` から、専用のエディターを開いてください。  
もし、上記メニューが存在しない場合は、インポートがうまくいっていないので、再度インポートを行ってください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/FukidashiSystem/04.PNG">
  <figcaption>
    Unity のメニューから、画像のハイライトされている部分をクリック
  </figcaption>
</figure>

エディターを開くと、以下のような画面が開きます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/FukidashiSystem/01.PNG" width="350px">
</figure>

開けなかった場合はインポートに失敗している可能性があるので、確認をお願いします。  
このとき、コンソールにエラーが出ていた場合は、[専用 Twitter アカウント](https://twitter.com/Nekonoya_Booth)までお問い合わせください。  
不具合の可能性がある為、調査を行います。

## 設定

次に、各種項目の設定を行います。  
まず、 `VRC Avatar Descriptor` の所に、 `VRC_AvatarDescriptor` をアタッチしたアバターを設定してください。  
先ほどの画像では、[軽量版ミーシェちゃん](https://ponderogen.booth.pm/items/1256087)が設定されています。

?> Fukidashi System では、ここに設定されたアバターに対して、全ての設定を自動で行います。  
また、それ専用の Animator Controller や Animation が生成される為、他のアバターで使う場合は、基本的には、ここからの流れを再度行う必要があります。  
※ただし、完全に同一の構造を持つアバターの場合は生成されたアセット類の使い回しが可能です。

次は、 `Message Board Parent` を設定します。  
これは、下記商品画像にて[リア-アリス](https://mk22.booth.pm/items/2146588)ちゃんが手元に持っているものをどこに設置するかの設定です。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/FukidashiSystem/05.PNG" width="350px">
  <figcaption>
    商品画像
  </figcaption>
</figure>

ここには名前の通り、 `Message Board` Prefab を子として仕込みたい GameObject を指定します。  
ここでは例として商品画像そのままに設定する場合を紹介しますが、お好きなところに設定が可能です。

商品画像の通りに設定するには、 `VRC_AvatarDescriptor` を設定したアバターの GameObject の上で右クリックし、 `Create Empty` を押します。  
空の GameObject を作成できたら、名前を分かりやすいものに変えます。  
ここでは、 `Constraints` という名前にしました。  
下の画像のようになっていれば OK です。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/FukidashiSystem/06.PNG" width="150px">
</figure>

次は、 `Constraints` の上で右クリックし、再度 `Create Empty` にて空の GameObject を作成します。  
作成できたら、名前を `LeftHand` に変更し、 `Parent Constraint` を取り付けます。  
`Parent Constraint` の Sources として `Hand.L (Transform)` を設定し、位置を調整します。  
このとき、下の画像のように手のひら方面に僅かに間を開けて設置するのを推奨します。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/FukidashiSystem/07.PNG">
  <figcaption>
    僅かに間が開いている、これはハンドサインで埋もれないようにするため
  </figcaption>
</figure>

最後に、位置を調整した `LeftHand` GameObject を、 `Message Board Parent` として設定します。

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
クリックすると、途中何回かファイル保存・フォルダー選択ダイアログが出るので、それぞれ保存したい場所を選択してください。  
生成されるのは以下のファイルです。

1. `Expression Parameters`
2. `Animation Clip` \* 16
3. `Animator Controller`
4. `Expressions Menu` (SubMenu) \* 3
5. `Expressions Menu` (MainMenu)

設定がうまくいけば、設定した場所にメッセージカードが表示されています。  
あとは、アバターをアップロードすれば使用できます。お疲れさまでした。

## 削除方法

設定をやり直したい、必要なくなった、などの理由でアバターから Fukidashi System を取り除くには、以下の操作を行います。

1. 設置された `Message Board` GameObject を削除
2. (必要なければ) 各種からの GameObject も削除
3. FX Layer の Animator Controller を元に戻す
4. Expressions の各項目を元に戻す

{docsify-updated}
