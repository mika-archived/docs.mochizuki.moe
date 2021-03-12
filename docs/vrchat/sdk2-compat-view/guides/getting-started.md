---
title: SDK2 Compat Viewer のインストール
---

# SDK2 Compat Viewer のインストール

## ダウンロード

SDK2 Compat Viewer は BOOTH にて配布しています。  
以下の BOOTH ページから、最新のパッケージをダウンロードしてください。

-   [BOOTH](https://natsuneko.booth.pm/items/2315841){target=\_blank}

何らかの理由で過去のバージョンを使用したい場合は、 GitHub Releases もしくは BOOTH の「ライブラリ」より、
過去のバージョンをダウンロードすることが可能です。

-   [GitHub Releases](https://github.com/mika-f/VRChat-SDK2CompatView/releases){target=\_blank}
-   [BOOTH ライブラリ](https://accounts.booth.pm/library){target=\_blank} (購入者限定)

## 動作環境

SDK2 Compat Viewer を使用するには、プロジェクトにあらかじめ以下のものが導入されている必要があります。

-   Unity 2018.4.20f1

## インストール

ダウンロードした ZIP ファイルを解凍し、中身の UnityPackage をプロジェクトへインポートしてください。

<!-- prettier-ignore-start -->
!!! info
    SDK2 Compat Viewer 0.3.0 以降、依存関係が自動解決されるようになっています。  
    そのとき、一時的にコンパイルエラーが発生する場合がありますが、無視してもかまいません。  
    なお、恒久的にコンパイルエラーが出ている場合は、[サポート](https://r.mochizuki.moe/BoothSupport){target=_blank}までご連絡をお願いします。
<!-- prettier-ignore-end -->

## アップデート

**一旦 SDK2 Compat Viewer の `Plugins` フォルダーを削除した後、**上書きインポートしてください。  
なお、 `Plugins` フォルダーは以下の場所にあります。

-   `Assets/Mochizuki/VRChat/SDK2CompatView/Plugins`

## アンインストール

SDK2 Compat Viewer をアンインストールする場合、以下のディレクトリ以下のファイルを削除してください。

-   `Assets/Mochizuki/VRChat/SDK2CompatView`

なお、なつねこらぼらとりーのすべての製品を削除した場合は、必要に応じてパッケージマネージャーから以下のパッケージもアンインストールしてください。

-   `Mochizuki.ExtensionsLibrary.Avatar` (`moe.mochizuki.extensions-library.avatar`)
-   `Mochizuki.ExtensionsLibrary.Compat` (`moe.mochizuki.extensions-library.compat`)
-   `Mochizuki.ExtensionsLibrary.DotNet` (`moe.mochizuki.extensions-library.dotnet`)
-   `Mochizuki.ExtensionsLibrary.Editor` (`moe.mochizuki.extensions-library.editor`)
-   `Mochizuki.ExtensionsLibrary.Engine` (`moe.mochizuki.extensions-library.engine`)
