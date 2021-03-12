---
title: Animator Controller の結合
---

# Animator Controller の結合

このページでは、 Asset Merger での Animator Controller の結合について説明します。  
結合する Animator Controller は VRChat 対応・専用のものだけでなく、 Unity の汎用的に作られているものであれば、すべて正常に結合することが可能です。

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

## Animator Controller の結合

専用エディターが開いたら、実際に Animator Controller の結合を行います。  
まず、 `Source Controllers` とあるところの `Size` の入力欄に、結合したい Animator Controller の数を入力します。  
例えば、2 つの Animator Controller を結合したい場合は `2` を入力してください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/asset-merger/animator-controller-step-1.png" width="500px" data-zoomable="true">
</figure>

入力後、下に入力ボックスが増えるので、画像のように結合したい Animator Controller をセットしてください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/asset-merger/animator-controller-step-2.png" width="500px" data-zoomable="true">
</figure>

最後に、「マージする」ボタンを押せば結合作業が開始され、作業完了後、ファイル保存ダイアログが表示されるので、保存したい場所を選択してください。  
なお、 VRC Avatar Descriptor に対しての操作は行っていないので、保存した Animator Controller については、手動で設定する必要があります。  
また、結合された Animator Controller は Deep Copy (実体コピー) を行っているため、それ単体 (古い Animator Controller を参照しない) で動作します。

## 結合される内容について

Asset Merger では、 Animator Controller の以下の内容についてコピーを行っています。

-   それぞれの Animator Controller のパラメーターの型と内容を新しい Animator Controller へとコピー
    -   同じパラメーター名がすでにある場合は、最初にあるものが優先されます
-   それぞれの Animator Controller の隠れイヤーの内容を新しい Animator Controller へとコピー
    -   レイヤーに含まれる各データについて、 Unity の内部 ID を元に再生成
    -   レイヤー名に重複がある場合は、裁判を行い区別が付くように再設定
    -   対象のレイヤーがも元となった Animator Controller の First Layer の場合は、 Weight=1 を設定

このとき、 Unity の内部 ID を用いている影響により、 Animator Controller が最適化され、以下の現象が発生することがあります。

-   結合前のファイルよりも、結合後のファイルの方が大幅にサイズが小さくなっている

なお、動作には問題がありませんので、そのままお使い頂けます。
