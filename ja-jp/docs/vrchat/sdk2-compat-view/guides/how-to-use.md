---
title: SDK2 Compat Viewer の使い方
---

# SDK2 Compat Viewer の使い方

このページでは、 SDK2 Compat Viewer の使い方を説明します。

## 専用エディターを開く

SDK2 Compat Viewer はエディター拡張機能と実装されているため、まずは専用エディターを開く必要があります。  
専用エディターは Unity のメニューから、 `Mochizuki/VRChat/SDK2 Compat Viewer/Editor` から開くことが出来ます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/sdk2-compat-viewer/open-editor.png" width="500px" data-zoomable="true">
</figure>

## VRC Avatar Descriptor (SDK2) の表示

VRCSDK2 および Avatars 2.0 用にセットアップした Avatar Descriptor を閲覧したい場合は、  
Avatar Descriptor をアタッチした GameObject や Prefab を、 `VRChat SDK2 Asset` に設定してください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/sdk2-compat-viewer/how-to-use.png" width="500px" data-zoomable="true">
</figure>

元となる Avatar Descriptor の解析がうまくいけば、画像のように表示されます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/sdk2-compat-viewer/avatar-descriptor.PNG" width="500px" data-zoomable="true">
</figure>

なお、現時点で対応できていない一部の項目については `Not Supported` のように表示されます。

## Animator Controller Override の表示

VRCSDK2 および Avatars 2.0 用にセットアップした Animator Controller Override を閲覧したい場合は、  
セットアップされた Avatar Descriptor を、 `VRChat SDK2 Asset` に設定してください。

<figure>
  <img src="https://assets.mochizuki.moe/docs/sdk2-compat-viewer/how-to-use.png" width="500px" data-zoomable="true">
</figure>

元となる Avatar Descriptor の解析がうまくいけば、画像のように表示されます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/sdk2-compat-viewer/animator-controller-override.png" width="500px" data-zoomable="true">
</figure>
