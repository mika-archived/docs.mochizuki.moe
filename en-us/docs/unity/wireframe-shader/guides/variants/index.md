---
title: Wireframe Shader の使い方
---

# Wireframe Shader の使い方

このページでは、シェーダーの選び方について説明しています。  
なお、基本的なシェーダーの使い方については Unity の公式ドキュメントなどを参考にしてください。

## シェーダーバリアントの選び方

Wireframe Shader には、3 種類のシェーダーが同梱されています。  
それぞれ表現したい見た目によって使い分ける必要があります。

### `Mochizuki/Wireframe Shader/Opaque`

特に理由がなければこのシェーダーを Material に設定します。  
透過処理がない代わりに最も軽量です。

<figure>
  <img src="https://assets.mochizuki.moe/docs/wireframe-shader/opaque-example.PNG" width="300" />
  <figcaption>設定例</figcaption>
</figure>

### `Mochizuki/Wireframe Shader/Transparent`

透過処理が必要な場合、 Opaque の代わりにこのシェーダーを Material に設定します。

<figure>
  <img src="https://assets.mochizuki.moe/docs/wireframe-shader/transparent-example.PNG" width="300" />
  <figcaption>設定例</figcaption>
</figure>

### `Mochizuki/Wireframe Shader/Particle Transparent`

Particle System の Mesh Particle でこのシェーダーを使用したい場合に Material に設定します。
座標計算の都合上、 Shadow Caster された影の処理については、元のメッシュの形が引き継がれます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/wireframe-shader/pt-example.PNG" width="300" />
  <figcaption>設定例</figcaption>
</figure>
