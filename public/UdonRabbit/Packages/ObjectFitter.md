ワールド内に設置された衣装やアクセサリーなどを現在使用しているアバターのまま試着したり、サイズ調整が出来るようになる Udon / UdonSharp スクリプトです。  
以下の機能を備えています。

- ワールド内に設置された衣装やアクセサリーにその場で試着
- 専用の Editor 拡張付きで設定がかんたん
- Unity の Humanoid 規約に沿っているボーンへの追従
- 他プレイヤーと試着状態の同期
  - これは、後から入ったプレイヤーとも同期します。
- Scale, Position, Rotation の値の微調整
- 複数着同時着用
  - 例えば、衣装とアクセサリーを同時に着用することも可能です

## ダウンロードとインストール

BOOTH から最新の UnityPackage をダウンロードしてください。

- [BOOTH](https://natsuneko.booth.pm/items/2540555)

インストール方法については、共通の [導入方法](/UdonRabbit/Guide/Installation) を参照してください。  
**なお、利用に適したライセンスのパッケージを購入し、ご利用ください。**

## ライセンスについて

### 試用ライセンス

- 誰でも利用可能です。
- Community Labs や Public へのアップロードを禁じます。

なお、試用ライセンスでは以下の機能は利用できません。

- 複数ユーザー間での同期
- Scale, Position, Rotation の値の微調整

### 通常ライセンス

- 個人販売や個人事業主など、個人利用の方向けのライセンスです。
- Community Labs や Public へのアップロードが可能です。
- 複数の World で使用するのも問題ありません。

### 企業ライセンス

- 企業や何らかの組織向けのライセンスです。
- Community Labs や Public へのアップロードが可能です。
- 複数の World で使用するのも問題ありません。
- 組織内であれば共用が可能です。

### イベントライセンス

- Virtual Market 等のイベント向けのライセンスです。
  - 個人主催のイベント (例: 試着会など) については、通常ライセンスをご利用ください。
- Community Labs や Public へのアップロードが可能です。
- イベント参加者への再配布が可能です (UdonSharp ソースコードは不可)。
- イベント毎に 1 ライセンスです。
- BOOTH メッセージでお問い合わせください。

## 使い方

### はじめに

Object Fitter で脱着可能な衣装を自動で設置する場合には、以下の条件を満たしている必要があります。

1. 衣装そのものを装着する為のアバター素体を所持している
1. 衣装に `Animator` および `Avatar` が設定されている
1. 一般的な `Armature` が設定されている

これは、仕組み上、素体からボーン情報を取得し、それを元に衣装などのボーンをマッピングしているからです。  
そのため、最低限装着させるアバターそのものはプロジェクトに含まれている必要があります。

なお、すべて手動で設定する場合は、素体アバターは必要ありません。

### 導入方法 (衣装など素体の Armature に関連するもの)

ここでは、[アトリエ ORCA さんのダッフルコート](https://atelierorca.booth.pm/items/1598650)を例に説明していきます。  
まずは衣装の Prefab をシーン内の任意の場所に設置してください。  
設置したら、**設置した衣装などの Prefab を展開してください。**

展開後、`Prefabs` フォルダーの中にある `ObjectFitterWithButton` Prefab を設置し、位置を調整してください。  
設置したら、 Unity のメニューバーから `Mochizuki/VRChat/Object Fitter` を選択肢、自動設定エディター拡張を開きます。  
開いたら、下記の項目を設定してください。

| Key                    | Value                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| `Avatar`               | 装着対象アバター (素体でもそうでなくてもボーン情報さえあれば OK, シーン内に置く必要は無し) |
| `Costume (Armature)`   | 衣装に含まれている `Armature` ルートもしくは衣装そのもの                                   |
| `Object Fitter (Udon)` | 先ほど設置した `ObjectFitterWithButton` の中にある `Cube`                                  |

<figure>
  <img src="https://assets.mochizuki.moe/docs/UdonRabbit/ObjectFitter/01.PNG" width="350px">
  <figcaption>
    設定例
  </figcaption>
</figure>

設定が出来たら、「生成」ボタンをクリックします。  
特にエラーが出ていないことを確認したら、先ほど設置した Prefab の中にある `Cube` を開き、 `Udon Behaviour` の `Mappings` の値を確認します。

<figure>
  <img src="https://assets.mochizuki.moe/docs/UdonRabbit/ObjectFitter/02.PNG" width="350px">
  <figcaption>
    自動設定された値
  </figcaption>
</figure>

多くの場合は、上の画像のように過不足なく設定されますが、ごくまれに不必要な設定が混ざっているので、その場合は以下の操作を行ってください。

1. 不必要なボーン情報が設定されている `Bone Mapper` をダブルクリック
2. 対象の `Bone Mapper` が添付された GameObject がインスペクターで選択されるので、 **Udon Behaviour を削除する。**

設定が問題ないことを確認したら、 `Cube` の設定を行います。  
`Cube` に添付されている `Udon Behaviour` のうち、 `Animator` に衣装を設定してください。  
ただし、衣装に `Animator` が設定されていない場合は、以下の設定が必要になります。

1. 衣装のルート GameObject に `Animator` をアタッチ
2. `Avatar` に FBX の中にあるマネキンっぽいものを設定
3. `Culling Mode` を `Cull Update Transforms` に設定

これで設定は完了です。お疲れさまでした。

### 導入方法 (アクセサリーなど素体の Armature に関連しないもの)

ここでは、[てくのろじあさんのさくらアクセサリー４点セット](https://lowteq.booth.pm/items/1926110)を例に説明していきます。  
まず初めに、**どのボーンへ追従させたいかを決める必要があります。**  
詳しくは下記の注釈を参照ください。ここでは `Head` に追従させることにします。

?> 現時点ではここで設定したボーンに対してのみ追従するようになります。<br/>そのため、リボンなどのような身体のどこにでも装着可能なアクセサリーの場合は現状ユーザーによっては装着感をうまく得られません。<br/>これは次回以降の更新で改善する予定です。

追従先を決めたら、対象のアクセサリーをシーンの中の任意の場所に設置します。

<figure>
  <img src="https://assets.mochizuki.moe/docs/UdonRabbit/ObjectFitter/10.PNG" width="350px">
  <figcaption>
    <code>Ex_HairPin/sakuraPin</code> が設置したアクセサリー
  </figcaption>
</figure>

次に、 `Udon Behaviour` をアクセサリーに追加し、 `Program Source` へ `Bone Mapper` をアタッチしてください。  
アタッチしたら、設定項目の `Bone` の部分にて、追従させたいボーンを選択します。  
今回の場合は `Head` を設定し、最終的には以下の画像のように設定されていれば問題ありません。

<figure>
  <img src="https://assets.mochizuki.moe/docs/UdonRabbit/ObjectFitter/11.PNG" width="350px">
  <figcaption>
  </figcaption>
</figure>

最後に、`Prefabs` フォルダーの中にある `ObjectFitterWithButton` Prefab を設置し、位置を調整してください。  
設置後、 `ObjectFitterWithButton` の中にある `Cube` にくっついている `Udon Behaviour` の設定を変更します。

`Animator` には先ほど設置したアクセサリーそのものを、 `Mappings` にも同様にアクセサリーそのものを設定します。

<figure>
  <img src="https://assets.mochizuki.moe/docs/UdonRabbit/ObjectFitter/12.PNG" width="350px">
  <figcaption>
    画像赤枠で囲まれた部分を設定する
  </figcaption>
</figure>

これで設定は完了です。お疲れさまでした。

## 上級者向け設定

### ボタンを入れ替える

やろうと思えばできますが、推奨はしません。とても面倒なので次バージョンで設定を楽にしようと考えています。

### ラベルを設定する

`ObjectFitterWithButton` Prefab にある、以下のコンポーネントの値を設定することで変更が可能です。

<figure>
  <img src="https://assets.mochizuki.moe/docs/UdonRabbit/ObjectFitter/40.PNG" width="350px">
  <figcaption>
    Title の <code>Text Mesh Pro UGUI</code> の Text を変更する
  </figcaption>
</figure>

### 可動範囲を設定する (非推奨)

?>**注意**<br>データを圧縮した関係で、 v0.1.0-alpha.7 以降のバージョンでは、元の設定値より大きい値を設定するのは推奨されません。

それぞれ `ObjectFitterWithButton` の以下の GameObject にアタッチされている、 `Slider` の `MinValue` / `MaxValue` / `Value` を変更します。

| 変更したい可動域 | 変更するオブジェクト                                         |
| ---------------- | ------------------------------------------------------------ |
| Scale X          | `ObjectFitterWithButton/UI/UICanvas/Scale/SliderX/Slider`    |
| Scale Y          | `ObjectFitterWithButton/UI/UICanvas/Scale/SliderY/Slider`    |
| Scale Z          | `ObjectFitterWithButton/UI/UICanvas/Scale/SliderZ/Slider`    |
| Position X       | `ObjectFitterWithButton/UI/UICanvas/Position/SliderX/Slider` |
| Position Y       | `ObjectFitterWithButton/UI/UICanvas/Position/SliderY/Slider` |
| Position Z       | `ObjectFitterWithButton/UI/UICanvas/Position/SliderZ/Slider` |
| Rotation X       | `ObjectFitterWithButton/UI/UICanvas/Rotation/SliderX/Slider` |
| Rotation Y       | `ObjectFitterWithButton/UI/UICanvas/Rotation/SliderY/Slider` |
| Rotation Z       | `ObjectFitterWithButton/UI/UICanvas/Rotation/SliderZ/Slider` |

なお、 v0.1.0-alpha.7 以降にて、 Transform の各値は 32bit `float` ではなく、以下のデータサイズおよび範囲に圧縮されて保持されます。

| Transform Value | Data Size | Data Layout     | Name          | Data Range         |
| --------------- | :-------: | --------------- | ------------- | ------------------ |
| ScaleX, Y, Z    |   8bit    | `WWWWWWWW`      | Unsigned Byte | `0.00` ~ `2.55`    |
| PositionX, Y, Z |   8bit    | `SWWWWWWW`      | Signed Byte   | `-1.27` ~ `1.27`   |
| RotationX, Y, Z |   13bit   | `SWWWWWWWWWWWW` | Signed Short  | `-409.5` ~ `409.5` |

技術的には、 Transform の各種値を X, Y, Z に分解した後、それぞれを 32bit `int` の中にパックした上で同期を行います。  
なお、データサイズ的にはまだ 3bit 余っているので、必要に応じて特定のプロパティの値の範囲を拡張することも可能です。

## よりよい UX のために

Object Fitter では、より良い User Experience を提供する為に、以下のシチュエーションでの利用を推奨します。

- 少人数インスタンスでの利用
  - これは、多数のユーザーがいる場合、その数だけの同期処理が走り、重くなるからです
  - なお、衣装 1 着当たり同期される変数は `int` \* 4 の 128bit です
  - 報告されているものでは、 Udon の変数同期のスループットは 50kbps 程度と言われています
    - 作者が確認した限りでは、 Object Fitter の Prefab の場合は 30 個近く設置するとパケットロス (同期失敗) が発生するようになります
  - ただし、同期される変数の数に関わらず、プレイヤー数が多くなるほど Local での処理数が増えます
- 同一衣装の複数設置
  - これは、衣装を装着しているユーザーがいる場合、他のユーザーは同一の衣装を着られなくなるからです
  - Object Fitter では友人同士での衣装合わせの利用も想定している為、用意しているとよりよい UX が提供できます
- アバターペデスタルの設置
  - 可能であれば、アバターのペデスタルを設置しておくと、より衣装の購入へ結びつけられます
- 水着や下着などの薄着へ着替えられるアバターでの入場の推奨
  - VRChat Udon の仕様上、アバターそのものに干渉することはできず、あくまで上から重ねることしかできません
  - そのため、より試着感を高める為に、来てくれる方へできる限り薄い衣装で来てもらえるように説明しておくと良いです
  - ただし、あまりにも露出が高いと R18 に引っかかる可能性があるので、そこは注意が必要です

## Special Thanks

いろいろ言ってくれたかわせみさん
