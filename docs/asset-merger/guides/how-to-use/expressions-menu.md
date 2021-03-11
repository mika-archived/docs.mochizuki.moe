---
title: Expressions Menu の結合
---

# Expressions Menu の結合

このページでは、 Asset Merger での Expressions Menu の結合について説明します。

## 専用エディターを開く

Asset Merger はエディター拡張機能と実装されているため、まずは専用エディターを開く必要があります。  
専用エディターは Unity のメニューから、 `Mochizuki/VRChat/Asset Merger/Editor` から開くことが出来ます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/asset-merger/open-editor.PNG" width="500px" data-zoomable="true">
</figure>

<!-- prettier-ignore-start -->
!!! info
    バージョン 0.3.2 より前のものを使用している場合は、 `Mochizuki/VRChat/Asset Merger Editor` から開けます。

<!-- prettier-ignore-end -->

最後に、専用エディターが開いたら、エディターのタブから「Expressions Menu」を選択してください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/asset-merger/expressions-menu-step-1.png" width="500px" data-zoomable="true">
</figure>

## Expressions Menu の結合

専用エディターが開いたら、実際に Expressions Menu の結合を行います。  
まず、 `Source Expressions` とあるところの `Size` の入力欄に、結合したい Expressions Menu の数を入力します。  
例えば、2 つの Expressions Menu を結合したい場合は `2` を入力してください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/asset-merger/expressions-menu-step-2.png" width="500px" data-zoomable="true">
</figure>

入力後、下に入力ボックスが増えるので、画像のように結合したい VRC Expressions Menu をセットしてください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/asset-merger/expressions-menu-step-3.png" width="500px" data-zoomable="true">
</figure>

最後に、「マージする」ボタンを押せば結合作業が開始され、作業完了後、ファイル保存ダイアログが表示されるので、保存したい場所を選択してください。  
なお、 VRC Avatar Descriptor に対しての操作は行っていないので、保存した Expressions Menu については、手動で設定する必要があります。

## 結合される内容について

Asset Merger では、 Expressions Menu の以下の内容についてコピーを行っています。

-   各パラメータの中身を新しい Expressions Menu にコピー
    -   名前ベースで解決し、すでに登録されている場合は無視
-   最終的なメニューの総数が登録可能上限を超えている場合はエラー
