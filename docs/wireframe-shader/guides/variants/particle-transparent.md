---
title: Wireframe Shader - Particle Transparent
---

# Wireframe Shader - Transparent

ここでは、 Particle Transparent シェーダーに設定可能なプロパティについて説明します。  
なお、この説明で使用しているテクスチャは、以下の画像を使用しています。

<img src="https://assets.mochizuki.moe/docs/common/shader-sample-texture.png" width="200px" >

## Main Texture

メインとなるテクスチャを設定します。
テクスチャを設定しなかった場合は、真っ白のテクスチャが設定されます。

<!-- prettier-ignore-start -->
!!! bug
    私が使わない機能を実装していたため、正常に動作していませんでした。  
    そのため、一旦 v1.1.0 では廃止しています。
<!-- prettier-ignore-end -->

## Tiling

テクスチャの繰り返す数を設定します。  
繰返し回数は X および Y それぞれの値を設定できます。  
デフォルト値はそれぞれ `1` が設定されています。

<!-- prettier-ignore-start -->
!!! bug
    私が使わない機能を実装していたため、正常に動作していませんでした。  
    そのため、一旦 v1.1.0 では廃止しています。
<!-- prettier-ignore-end -->

## Offset

テクスチャの位置のオフセット (ここでは基準となる位置からの差 (ズレ) を表します。0 でズレが無し、1 で 1 周します) を設定します。  
オフセットは X および Y それぞれの値を設定できます。  
デフォルト値はそれぞれ `0` が設定されています。

<!-- prettier-ignore-start -->
!!! bug
    私が使わない機能を実装していたため、正常に動作していませんでした。  
    そのため、一旦 v1.1.0 では廃止しています。
<!-- prettier-ignore-end -->

## Color

ワイヤーフレームで描画する色を設定します。  
テクスチャを使用している場合はテクスチャカラーに対して乗算されます。

|                                     Color=(1, 1, 1) (#FFFFFF)                                     |                                     Color=(1, 0, 0) (#FF0000)                                     |
| :-----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
| <img src="https://assets.mochizuki.moe/docs/wireframe-shader/use-color-1-1-1.PNG" width="245px" > | <img src="https://assets.mochizuki.moe/docs/wireframe-shader/use-color-1-0-0.PNG" width="250px" > |

## Alpha

Main Texture および Color のアルファ値を設定します。
`0` に近ければ近いほど透明に、逆に `1` に近ければ近いほど不透明になります。

|                                         Alpha=0.1                                          |                                         Alpha=1.0                                          |
| :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
| <img src="https://assets.mochizuki.moe/docs/wireframe-shader/alpha-01.png" width="236px" > | <img src="https://assets.mochizuki.moe/docs/wireframe-shader/alpha-10.png" width="250px" > |

## Use Vertex Color

頂点カラーを使用するかどうかを `True` (`1`) / `False` (`0`) で設定します。  
Particle Effect や頂点カラーを持っている 3D モデルの場合はこのオプションを有効にすることで、頂点カラーが優先されます。  
なお、この設定を有効にした場合、 `Main Texture` および `Color` の値は無視されます。  
デフォルト値は `False` です。

|                                           UseVertexColor=False                                           |                                           UseVertexColor=True                                           |
| :------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://assets.mochizuki.moe/docs/wireframe-shader/use-vertex-color-false.png" width="241px" > | <img src="https://assets.mochizuki.moe/docs/wireframe-shader/use-vertex-color-true.png" width="250px" > |

## Wireframe Mode

ワイヤーフレームの描画設定を切り替えます。  
`Normal` の場合はすべての辺を、 `NoDiagonal` の場合はすべての辺のうち、最も長いものを無視して描画します。  
デフォルト値は `Normal` です。

|                                          WireframeMode=Normal                                           |                                           WireframeMode=NoDiagonal                                           |
| :-----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
| <img src="https://assets.mochizuki.moe/docs/wireframe-shader/wireframe-mode-normal.PNG" width="235px" > | <img src="https://assets.mochizuki.moe/docs/wireframe-shader/wireframe-mode-no-diagonal.PNG" width="250px" > |

## Border Thickness

ワイヤーフレームの太さを設定します。  
`0` に近ければ近いほど細く、値を大きくすればするほど太くなります。  
ただし、最大値を設定しても、完全に元のメッシュの形にはならず、所々隙間が現れます。  
また、大きな値を設定した場合、ワイヤーフレームの描画に若干のズレが生じます。

|                                          BorderThickness=0.25                                          |                                          BorderThickness=0.50                                          |
| :----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
| <img src="https://assets.mochizuki.moe/docs/wireframe-shader/border-thickness-025.png" width="245px" > | <img src="https://assets.mochizuki.moe/docs/wireframe-shader/border-thickness-050.png" width="250px" > |

## Use Shader Scale

シェーダーによって自動設定された Scale を使用するかどうかを `True` (`1`) / `False` (`0`) で設定します。  
有効にした場合、シェーダーに渡された `TEXCOORD01` の値を元に、シェーダー側でワイヤーフレームの Scale が調節されます。  
無効にした場合は、 `1` が使用され、 `BorderThickness` の値がそのまま使用されます。  
アニメーションによって 3D モデルの Scale が制御される場合、 `TEXCOORD01` に同じ Scale を設定することで、良い感じに拡大縮小されます。

|                                           UseShaderScale=False                                           |                                           UseShaderScale=True                                           |
| :------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://assets.mochizuki.moe/docs/wireframe-shader/use-shader-scale-false.PNG" width="245px" > | <img src="https://assets.mochizuki.moe/docs/wireframe-shader/use-shader-scale-true.PNG" width="233px" > |

## Emission Intensity

Post Processing Stack v2 を有効にしている際の、 Emission の光り具合を設定します。
`0` に近ければ近いほど光らず、値を大きくすればするほどより強く光ります。

|                                          EmissionIntensity=0                                           |                                          EmissionIntensity=2                                           |
| :----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
| <img src="https://assets.mochizuki.moe/docs/wireframe-shader/emission-intensity-0.PNG" width="245px" > | <img src="https://assets.mochizuki.moe/docs/wireframe-shader/emission-intensity-2.PNG" width="248px" > |

## Emission Mask

Emission Intensity を掛ける場所についてマスクテクスチャを用いて設定することが出来ます。  
何も設定しなかった場合は、真っ白のテクスチャが使用されます。

<!-- prettier-ignore-start -->
!!! bug
    私が使わない機能を実装していたため、正常に動作していませんでした。  
    そのため、一旦 v1.1.0 では廃止しています。
<!-- prettier-ignore-end -->

## Culling

カリングモードを設定します。

| モード | 説明                                       |
| ------ | ------------------------------------------ |
| Off    | メッシュの表と裏の両方を描画します         |
| Back   | メッシュの表のみを描画し、裏は描画しません |
| Front  | メッシュの裏のみを描画し、表は描画しません |

## Z Write

Z バッファに深度情報を書き込むかどうかを設定します。

| モード | 説明                     |
| ------ | ------------------------ |
| On     | 深度情報を書き込みます   |
| Off    | 深度情報を書き込みません |

## Render Queue

Material のレンダーキューを設定します。  
Render Queue を調節することで、前後関係が正しく描画が可能になることがあります。
