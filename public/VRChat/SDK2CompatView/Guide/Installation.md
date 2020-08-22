このページでは、ダウンロードからインストール、アップデートまでを解説しています。

## ダウンロード

BOOTH から最新の UnityPackage をダウンロードしてください。

- [BOOTH](https://natsuneko.booth.pm/items/2315841)

何らかの理由で過去バージョンが必要な場合は、 GitHub Releases からダウンロードが可能です。  
(最新版については、 BOOTH でのみ配布しているため、 Release はあってもファイル添付されていません。)  
なお、古いバージョンについては、不具合や使い方などのサポートは行いませんのでご了承ください。

- [GitHub Releases](https://github.com/mika-f/VRChat-SDK2CompatView/releases)

## 動作環境

あらかじめ、プロジェクトに以下のものがインストールされている必要があります。

- Unity 2018.4.20f1

!> **注意** <br/><br/>導入後に起こったいかなる事にも、作者は責任を負うことは出来ません。  
適宜必要なファイルのバックアップなどを行ってください。

## プロジェクトへインポート

ダウンロード後、お使いのプロジェクトにインポートしてください。  
なお、ねこのやの他の製品をすでにインポートしている場合、インポート時のダイアログにて、以下の項目をチェックしてください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/ExtensionsLibrary/Note.PNG" width="250px">
  <figcaption>
    <code>Mochizuki/VRChat/Extensions/Versions</code> 以下の項目をチェック
  </figcaption>
</figure>

- `Mochizuki/VRChat/Extensions/Versions` (画像下部赤枠) 以下のファイルに「New」と表示されていること

もし表示されていない場合は、 `Mochizuki/VRChat/Extensions` (画像中央当たりの正方形のチェックマーク) にて、  
チェックマークを外して、インポート対象から除外してください。  
古いもので上書きした場合、他のねこのや BOOTH で配布しているツール類が正常に動かないなどの不具合が発生する可能性があります。

インポート後、`Assets` 以下に、 `Mochizuki/VRChat` のようなフォルダーが出来ていて、下のメニューが追加されていれば、インポートに成功しています。

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/SDK2CompatView/03.PNG">
  <figcaption>
    Project の Asset 以下の様子 
  </figcaption>
</figure>

<figure>
  <img src="https://assets.mochizuki.moe/docs/VRChat/SDK2CompatView/04.PNG">
  <figcaption>
    Unity のメニューに追加されている様子
  </figcaption>
</figure>

## アップデート

ツールのアップデートなどを行う際は、そのまま上書きしてしまって OK です。  
ただし、[プロジェクトへインポート](#プロジェクトへインポート)の注意事項については留意しておく必要があります。  
なお、更新通知などは専用 Twitter アカウント [@Nekonoya_Booth](https://twitter.com/Nekonoya_Booth) にて行っています。

### 上書き時にエラーが出た場合

アップデートのインストール時などに「ファイルにアクセスできません」などのエラーが出た場合、以下の操作を行ってください。

1. SDK2 Compat View Editor を閉じる
2. Unity Editor を再起動する
3. 再度インポートを行う

上記操作を行ってもダメだった場合、 Unity Editor を終了した状態で以下のファイルを削除し、再度インポートを行ってください。

- `Assets/Mochizuki/VRChat/SDK2CompatView/Plugins/sdk2_compat.dll`

## アンインストール

以下のフォルダーおよびファイルを、 **Unity Editor を終了した状態で** 削除してください。

- `Mochizuki/VRChat/SDK2CompatView` (フォルダー)
- `Mochizuki/VRChat/SDK2CompatView.meta` (ファイル)

{docsify-updated}
