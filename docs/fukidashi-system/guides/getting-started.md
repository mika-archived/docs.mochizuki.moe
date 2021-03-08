---
title: Fukidashi System のインストール
---

# Fukidashi System のインストール

## ダウンロード

Fukidashi System は BOOTH にて配布しています。  
以下の BOOTH ページから、最新のパッケージをダウンロードしてください。

-   [BOOTH](https://natsuneko.booth.pm/items/2149045){target=\_blank}

何らかの理由で過去のバージョンを使用したい場合は、 GitHub Releases もしくは BOOTH の「ライブラリ」より、
過去のバージョンをダウンロードすることが可能です。

-   [GitHub Releases](https://github.com/mika-f/VRChat-FukidashiSystem/releases){target=\_blank}
-   [BOOTH ライブラリ](https://accounts.booth.pm/library){target=\_blank} (購入者限定)

## 動作環境

Fukidashi System を使用するには、プロジェクトにあらかじめ以下のものが導入されている必要があります。

-   Unity 2018.4.20f1
-   VRCSDK3 AVATAR 2020.08.13.17.48 以降
    -   詳しくは[動作確認済みバージョン](#動作確認済みバージョン)を確認してください

## インストール

ダウンロードした ZIP ファイルを解凍し、中身の UnityPackage をプロジェクトへインポートしてください。

<!-- prettier-ignore-start -->
!!! info
    Fukidashi System 0.3.0 以降、依存関係が自動解決されるようになっています。  
    そのとき、一時的にコンパイルエラーが発生する場合がありますが、無視してもかまいません。  
    なお、恒久的にコンパイルエラーが出ている場合は、[サポート](https://r.mochizuki.moe/BoothSupport){target=_blank}までご連絡をお願いします。
<!-- prettier-ignore-end -->

## アップデート

Fukidashi System のアップデートを行う場合は、再度最新の UnityPackage をそのまま上書きインポートしてください。

## アンインストール

Fukidashi System をアンインストールする場合、以下のディレクトリ以下のファイルを削除してください。

-   `Assets/Mochizuki/VRChat/FukidashiSystem`

なお、なつねこらぼらとりーのすべての製品を削除した場合は、必要に応じてパッケージマネージャーから以下のパッケージもアンインストールしてください。

-   `Mochizuki.ExtensionsLibrary.Avatar` (`moe.mochizuki.extensions-library.avatar`)
-   `Mochizuki.ExtensionsLibrary.Compat` (`moe.mochizuki.extensions-library.compat`)
-   `Mochizuki.ExtensionsLibrary.DotNet` (`moe.mochizuki.extensions-library.dotnet`)
-   `Mochizuki.ExtensionsLibrary.Editor` (`moe.mochizuki.extensions-library.editor`)
-   `Mochizuki.ExtensionsLibrary.Engine` (`moe.mochizuki.extensions-library.engine`)

## 動作確認済みバージョン

以下のバージョンの VRCSDK にて動作を保証しています。  
ただし、動作保証外のバージョンにおいても、記載されているバージョンの範囲内であれば問題なく動作・使用することができます。

<!-- prettier-ignore-start -->
=== "0.2.x まで"
    - VRCSDK3 AVATAR 2020.08.13.17.48
    - VRCSDK3 AVATAR 2020.08.06.16.30

=== "0.3.0 以降"
    - VRCSDK3 AVATAR 2020.19.09.04.45
    - VRCSDK3 AVATAR 2021.02.23.11.41
<!-- prettier-ignore-end -->
