---
title: Atlasization の使い方・アトラス化の方法
---

# Atlasization の使い方・アトラス化の方法

このページでは、 Atlasization でミーシェちゃんを例に、実際にアトラス化を行っていく手順を順に説明します。  
なお、アバター以外のもの (例: 小物や建物など) も同様の手順で行うことが出来ます。

## 専用エディターを開く

Atlasization は Unity エディター拡張として実装されているため、まずは専用エディターを開く必要があります。  
専用エディターは、 Unity のメニューバーの `Mochizuki/Atlasization/Editor` から開くことが出来ます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/atlasization/open-editor.PNG" width="350px" data-zoomable="true">
</figure>

## 1. モードの選択

<figure>
  <img src="https://assets.mochizuki.moe/docs/atlasization/step-1-1.PNG" width="350px" data-zoomable="true">
</figure>

エディターを開くと、まずはモードの選択を行います。  
モードによる違いは、以下の表の通りです。

| 機能 \ モード                |   Standard   | Professional |
| ---------------------------- | :----------: | :----------: |
| アトラス化機能               |      o       |      o       |
| SubMesh の設定               |      o       |      o       |
| テクスチャーの手動配置       | x (自動設定) |      o       |
| 高度なテクスチャーの自動配置 |      x       |      o       |
| テクスチャーの設定           |      o       |      o       |
| シェーダーの設定             |      o       |      o       |
| シェーダーの詳細設定         |      x       |      o       |

<!-- prettier-ignore-start -->
!!! info
    バージョン 0.1.0-alpha.5 の時点では、 Professional 機能は解放されていません。

<!-- prettier-ignore-end -->

## 2. アトラス化したい Prefab の設定

次に、アトラス化を行いたい SkinnedMeshRenderer / MeshRenderer を持っている Prefab を、入力ボックスにドラッグアンドドロップします。  
もし、現在開いているシーンの中にあるオブジェクトをアトラス化したい場合は、それを設定してもかまいません。  
どちらを設定したとしても、**元の Prefab や GameObject 自体の設定などが変更されることはありません**。

画像のように設定が完了したら、「次へ」を押下してください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/atlasization/step-2-1.png" width="350px" data-zoomable="true">
</figure>

## 3. SubMesh (レイヤー) の設定

次は、 SubMesh (レイヤー) の設定を行います。  
SubMesh とは、 1 つの SkinnedMeshRenderer / MeshRenderer に設定するマテリアルの数の事です。  
多くの場合、1 つのマテリアルにまとめることが出来ますが、別々のシェーダーを使いたい場合などは、 SubMesh を設定する必要があります。

アバターの場合、基本的には肌や衣装はまとめられることが多いですが、表情の部分だけは Transparent や Cutout を使っていることが多く、分割が必要です。  
分割する場合は、下の画像のようにすでに設定されている数に `+1` した値を設定してください。  
レイヤー数を 3 つ以上に増やす場合も、同様に連番で増やしていく必要があります。

<figure>
  <img src="https://assets.mochizuki.moe/docs/atlasization/step-3-1.PNG" width="350px" data-zoomable="true">
</figure>

設定が完了したら、「次へ」を押下します。

## 4. テクスチャの確認

4 ページ目では、テクスチャーがどのように結合されるのかを確認します。  
問題無さそうであれば、そのまま「次へ」を押下します。

## 5. シェーダーの設定

5 ページ目では、生成されるマテリアルについて、どのようなシェーダーを設定するかを行います。  
このとき、**元のすべてのマテリアルのシェーダーが同じ設定であれば**、自動的に設定が引き継がれます。  
シェーダーについては、詳細な設定は出来ませんが、必要があればベースとなるシェーダーを選択します。

## 6. 設定の変更

6 ページ目では、出力先などの設定を行います。  
基本的には設定をジル必要はありませんが、初期値以外の場所に出力したい場合などは、フォルダーやファイル名を設定してください。

`Material Key を使用する` については、以下の条件いずれかに当てはまる SkinnedMeshRenderer や MeshRenderer がある場合は設定を行ってください。  
多くの場合は、チェックを入れる必要はありません。

-   同じ Mesh を参照しているが、使用している Material が異なる場合
-   Unity 標準の Quad や Cube などを複数使用している場合

最後に、出力サイズを指定したら、「次へ」を押下します。

## 7. 設定の最終確認

このページでは、いままでいろいろ設定してきた各種項目の最終確認を行います。  
特に問題が無ければ 生成 をクリックして、暫く待ちます。

出力が成功すると、今回の場合は `Mishe(Clone).prefab` が生成されます。  
生成された Prefab ファイルを使用することで、アトラス化されたテクスチャなどを使用することが出来ます。
