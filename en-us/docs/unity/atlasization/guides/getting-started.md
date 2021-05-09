---
title: Atlasization のインストール
---

# Atlasization のインストール

## ダウンロード

Atlasization は BOOTH にて配布しています。  
以下の BOOTH ページから、最新のパッケージをダウンロードしてください。

-   [BOOTH](https://natsuneko.booth.pm/items/2503884){target=\_blank}

何らかの理由で過去のバージョンを使用したい場合は、 BOOTH の「ライブラリ」より、
過去のバージョンをダウンロードすることが可能です。

-   [BOOTH ライブラリ](https://accounts.booth.pm/library){target=\_blank} (購入者限定)

## 動作環境

Atlasization を使用するには、プロジェクトにあらかじめ以下のものが導入されている必要があります。

-   Unity 2018.4.20f1

## インストール

ダウンロードした ZIP ファイルを解凍し、中身の UnityPackage をプロジェクトへインポートしてください。

<!-- prettier-ignore-start -->
!!! info
    Atlasization 0.1.0-alpha.6 以降、依存関係が自動解決されるようになっています。  
    そのとき、一時的にコンパイルエラーが発生する場合がありますが、無視してもかまいません。  
    なお、恒久的にコンパイルエラーが出ている場合は、[サポート](https://r.mochizuki.moe/BoothSupport){target=_blank}までご連絡をお願いします。
<!-- prettier-ignore-end -->

## アップデート

最新の UnityPackage でそのまま上書きインポートしてください。

## アンインストール

Atlasization をアンインストールする場合、以下のディレクトリ以下のファイルを削除してください。

-   `Assets/Mochizuki/Atlasization`

なお、なつねこらぼらとりーのすべての製品を削除した場合は、必要に応じてパッケージマネージャーから以下のパッケージもアンインストールしてください。

-   `Mochizuki.ExtensionsLibrary.Compat` (`moe.mochizuki.extensions-library.compat`)
-   `Mochizuki.ExtensionsLibrary.DotNet` (`moe.mochizuki.extensions-library.dotnet`)
-   `Mochizuki.ExtensionsLibrary.Editor` (`moe.mochizuki.extensions-library.editor`)
-   `Mochizuki.ExtensionsLibrary.Engine` (`moe.mochizuki.extensions-library.engine`)
