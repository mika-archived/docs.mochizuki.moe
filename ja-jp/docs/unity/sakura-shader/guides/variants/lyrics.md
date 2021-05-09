---
title: Lyrics - Sakura Shader
---

# Lyrics - Sakura Shader

Lyrics シェーダーのパラメータについて説明しています。  
なお、この説明で使用しているテクスチャは、以下の画像を使用しています。

<img src="https://assets.mochizuki.moe/docs/common/shader-sample-texture.png" width="200px" >

## Main

メインテクスチャ、カラーなどの外見設定です。

### Main Texture

メインとなるテクスチャをここに設定します。

| MainTex=DEFAULT (white) | MainTex=Texture     |
| ----------------------- | ------------------- |
| [IMAGE PLACEHOLDER]     | [IMAGE PLACEHOLDER] |

### Tiling

テクスチャの繰り返す数を設定します。  
繰返し回数は X および Y それぞれの値を設定できます。  
デフォルト値はそれぞれ `1` が設定されています。

| Tiling=1            | Tiling=2            |
| ------------------- | ------------------- |
| [IMAGE PLACEHOLDER] | [IMAGE PLACEHOLDER] |

### Offset

テクスチャの位置のオフセット (ここでは基準となる位置からの差 (ズレ) を表します。0 でズレが無し、1 で 1 周します) を設定します。  
オフセットは X および Y それぞれの値を設定できます。  
デフォルト値はそれぞれ `0` が設定されています。

| Offset=0            | Offset=0.5          |
| ------------------- | ------------------- |
| [IMAGE PLACEHOLDER] | [IMAGE PLACEHOLDER] |

## Animation

Lyrics シェーダーでは、アニメーション機能を有効にすることで、 Animation を用いることなく、時間経過によってアニメーションさせることが可能です。

### Enable Animation

アニメーション機能を有効にする場合はチェックを入れてください。  
デフォルト値では `False` (無効) が設定されています。

### Animation Sprite Texture

シェーダーアニメーションを行うためのスプライト画像を設定します。  
スプライト画像は任意サイズの正方形である必要があり、縦および横に同数の画像が敷き詰められているものを前提としています。

### Sprite Split Horizontal

スプライト画像について、縦および横に何枚のテクスチャが配置されているかを指定します。  
例えば、縦横に 2x2 の合計 4 枚の画像が配置されている場合は、 `2` を設定してください。

### Sprite Animation Update Rate

シェーダーの参照している画像の更新頻度を秒単位で設定します。

## Outline

描画している内容に対し、アウトラインを描画します。

<!-- prettier-ignore-start -->
!!! info
    このアウトラインは完璧な物ではなく、あくまでも見栄えを良くするものです。  
    また、歌詞が 3D モデルで表現されていることを前提としているため、テクスチャーでの歌詞表示を行う場合は意図せぬ挙動を行う可能性があります。
<!-- prettier-ignore-end -->

### Enable Outline

Lyrics シェーダーにおける Outline 機能を有効にする場合は、チェックを入れてください。  
デフォルト値では `False` (無効) が設定されています。

### Outline Texture

### Outline Color

### Outline Width

## Rotation

### Enable Rotation

### Rotation Angle

## Slide

### Enable Slide Animation

### Slide Mode

### Slide Width

## Stencil

### Reference

### Compare Function

### Pass

## Others (Advanced)

### Culling

### ZWrite

### Render Queue
