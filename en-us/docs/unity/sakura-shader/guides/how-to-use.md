---
title: Sakura Shader の設定方法
---

# Sakura Shader の設定方法

Sakura Shader は通常のキャラクター用シェーダーとは異なり、パーティクルライブなどの VR ライブでの使用を前提としています。  
そのため、一部特殊な設定が必要となる場合があります。

## Lyrics

特殊な設定は必要ありません。  
なお、対象の歌詞は Blender にて出力された 3D モデルであることを想定しており、テクスチャーでの歌詞表示の場合は意図せぬ挙動を行う場合があります。

## Particles

Particle System からシェーダーへとパラメータを渡すことを前提として内部処理が書かれています。  
そのため、 Animation などから直接パラメータをいじることが出来ない項目などがあります。

## ScreenFX, Skybox

ScreenFX シェーダーおよび Skybox シェーダーは以下の設定を行う必要があります。

1. 大きさが約 20m x 20m x 20m なキューブまたはスフィアを用意し、アバターに設置する
1. 上記 1 で用意した GameObject に対し、 ScreenFX もしくは Skybox を適用した Material を設定する

## Stencil Write

Stencil Write シェーダーは、ステンシル機能を用いて、対象のオブジェクトを隠すシェーダーです。  
以下のように使用します。

1. 隠したいオブジェクトを十分に含むサイズの大きさのキューブなどを用意し、設置する
2. 上記 1 で用意した GameObject に対し、 Stencil Write を適用した Material を設定する
3. 隠したいオブジェクトの Material に対し、 Stencil の Ref 値を調整する
4. 上記 3 で設定した Ref 値を Stencil Write 側にも設定し、 Render Queue を可能な限り小さい値に設定する
    - Sunao Shader を使用している場合は、 `AlphaTest-10` あたりがオススメです。

## Unlit

特殊な設定は必要ありません。
