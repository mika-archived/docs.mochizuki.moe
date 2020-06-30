# Variation Packager for Unity

複数種の UnityPackage および Zip Archive をボタン 1 つで作成できるようにする Unity エディター拡張です。  
ビルド構成情報を Unity のシーンファイルなどに保存することで、次回以降も使い回すことが出来ます。  
簡易的なビルドデバッガーとプリ・ポストプロセス機能付きです。

ここでは、エディター拡張の導入方法および設定、アーカイブの作成までと、デバッグ方法を説明します。  
なお、本文中では Unity のシーンファイルに設定を保存する方法のみ解説しています。

## ダウンロード

BOOTH から、最新の UnityPackage をダウンロードしてください。

- [BOOTH](https://natsuneko.booth.pm/items/2182778)

ダウンロード後、お使いのプロジェクトにインポートしてください。  
`Assets` 以下に `Mochizuki/VariationPackager` フォルダーが生成されていれば OK です。  
なお、本エディター拡張には以下の 2 種類のファイルが含まれています。

- `Plugins/*.dll`
  - `DLL` 形式の Unity エディター拡張およびその依存関係
- `Scripts/*.cs`
  - `C# Script` 形式の設定用コンポーネント

直接エディター拡張のソースコードを参照および編集することは出来ませんのでご了承ください。

## Packager Editor

Unity のメニューバーの `Mochizuki/Variation Packager/Packaging` から、エディターを開いてください。

![](https://assets.mochizuki.moe/docs/Unity/VariationPackager/1.PNG)

もし上記メニューが存在していない場合は、以下の原因が考えられるのでご確認ください。

- Unity のバージョンが古い
- Unity の設定で .NET 4.x が有効になっていない
- インポートに失敗している

エディターを開いた時点ではまだパッケージが作成できないので、次のセクションで設定を行います。

## 設定

まず、空の Unity シーンを作成し、適当な場所に `GameObject` を設置します。  
設置したら、 Project の中にある以下のコンポーネントをアタッチしてください。

- `Assets/Mochizuki/VariationPackager/Scripts/Package`

アタッチすると、初期状態では以下のようになっているので、ここから設定を行っていきます。

![](https://assets.mochizuki.moe/docs/Unity/VariationPackager/2.PNG)

まずは `Name` を設定します。  
これは、生成される UnityPackage および Zip Archive で使用するファイル名です。  
次に `Version` を設定します。  
`Version` は、配布するパッケージのバージョンを指定してください。形式は問いません。  
これらは、パッケージ生成時に以下のような形式で組み合わせられます。

- `${Name}-${Version}`
  - 例 : `Name` に `Pkg`, `Version` に `0.1.0` を設定した場合は `Pkg-0.1.0`

設定が終わったら、次に生成するパッケージの設定にうつります。  
`Describe` を開いて、以下のようにしてください。

![](https://assets.mochizuki.moe/docs/Unity/VariationPackager/3.PNG)

`Output` には出力先のフォルダーのパスを指定します。  
例えば、 `Mochizuki/Packages` を設定した場合は、下のような形式でパッケージが作成されます。

- `Assets/Mochizuki/Packages/Pkg-0.1.0.zip`
- `Assets/Mochizuki/Packages/Pkg-0.1.0.unitypackage`

次はエディションを追加します。  
Variation Packager では、エディション毎に設定を変えることで、一度に複数のパッケージを作成出来ます。  
ただし、今回は 1 種類のパッケージのみを作成します。  
複数種類作成したい場合は、以下の作業を繰り返し行ってください。

まずは `Variations` の `Size` に作成したいエディション数を入力します。  
今回の場合は 1 を入力します。  
すると、以下のようにエディターが展開されます。

![](https://assets.mochizuki.moe/docs/Unity/VariationPackager/4.PNG)

まずは、 `Element 0` 直下の `Name` を設定します。  
ここにはエディション名があれば、それを入力します。  
入力した場合は、前述のファイル名の形式が変更され、以下のように出力されます。

- `${Name}-${Edition}-${Version}`
  - 例 : エディション名に `Trial` を設定した場合は `Pkg-Trial-0.1.0`

ここでは、1 種類のみ作成するので、設定は行いません。  
次は、 `Archive` を飛ばして `Unity Package` の設定を行います。

`Unity Package` セクションは、名前の通り `UnityPackage` の設定です。  
`Name` には、出力したい `UnityPackage` の名前を指定できます。  
省略した場合は、一番最初に設定した名前がそのまま使われます。

`Base Dir` は使用されていないので、無視してください。

`Includes` および `Excludes` には、含めたいファイルと無視したいファイルを [`Glob 形式`](https://www.wikiwand.com/ja/%E3%82%B0%E3%83%AD%E3%83%96) で設定します。  
例えば、 `Assets/Mochizuki/Pkg` 以下全てを含めたい場合は、以下のように設定します。

![](https://assets.mochizuki.moe/docs/Unity/VariationPackager/5.PNG)

また、 `Assets/Mochizuki/Pkg` 以下のうち、 C# Script を全て除外したい場合は以下のように設定します。

![](https://assets.mochizuki.moe/docs/Unity/VariationPackager/6.PNG)

このように、複数の Glob 形式を組み合わせることで、含めたいファイルを柔軟に指定することが出来ます。  
もちろん、ファイルパスを直接指定することも可能です。  
Glob 形式で含められるファイルを確認する方法は、後述の「デバッグ方法」にて解説しています。

`UnityPackage` のみを生成したい場合は、ここまでの設定で生成されるようになりました。  
ただし BOOTH などで配布する為の Zip Archive を作成する場合は、次の作業も行います。

次は、先ほど飛ばした `Archive` を設定します。  
こちらも先ほどの `Unity Package` セクションと同様の設定を行います。  
なお、 `Archive` の `Includes` には、生成された `UnityPackage` が自動的に含まれています。  
`Includes` には、追加で Zip Archive に含めたいファイル (マニュアルなど) を設定してください。  
ただし、通常は `Base Dir` の設定が必要なります。

`Base Dir` には、\*\*コピー元の親フォルダー名` を設定します。  
例えば、マニュアルを以下のフォルダーに保存してある場合、画像のように設定する必要があります。

- `Mochizuki/Pkg/Manuals`

![](https://assets.mochizuki.moe/docs/Unity/VariationPackager/7.PNG)

このように設定することで、 Zip Archive のルートフォルダーにファイルがコピーされます。  
なお、元のフォルダー構造を維持したい場合は、何も設定しなくてもかまいません。

## パッケージの作成

さて、ここまで設定が終わったら、さきほど開いたエディターに戻ります。  
エディターに戻るとボタンが押せるようになっているので、押して暫く待ちます。  
暫く待てば、指定したフォルダーに `UnityPackage` もしくは `Zip Archive` が生成されています。  
なお、 `Archive` の設定した場合は、元となった `UnityPackage` は生成されないので注意してください。

次回以降は、基本的には `Version` の項目を変えるだけで、新しいパッケージが作成されるようになります。

## デバッグ方法

ここでは `Glob 形式` のデバッグ方法を説明します。  
まずは、Unity のメニューバーから `Mochizuki/Variation Packager/Glob Debugger` を開いてください。  
開くと、下のように `Packaging` から一部分だけを切り出したようなエディターが開きます。

![](https://assets.mochizuki.moe/docs/Unity/VariationPackager/8.PNG)

あとは、「設定」で説明したように、 `Includes` および `Excludes` を設定してください。  
設定後、 `Debug` ボタンを押すことで、対象のファイルの一覧を見ることが出来ます。
