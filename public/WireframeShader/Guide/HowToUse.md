このページでは、シェーダーの各プロパティについて説明しています。  
なお、シェーダーの使い方については Unity の公式ドキュメントなどを参考にしてください。

## シェーダーの選び方

用途に応じて、3 パターンのシェーダーを使い分けてください。

### Opaque

特に理由が無ければ、通常のメッシュにはこのシェーダーを使います。

### Transparent

透過処理が必要な場合は、このシェーダーを使います。  
なお、 Opaque を使用した場合でも、ワイヤーフレーム以外の部分は透過されます。

### Particle Transparent

Particle System にて Mesh Particle を使用したい場合は、このシェーダーを使います。  
座標計算の都合上、 Shadow Caster での影の処理は、元のメッシュの形が適用されます。

## シェーダープロパティ

### Main Texture

テクスチャを設定します。ただし、ワイヤーフレーム部のにみ適用されます。

### Color

ワイヤーフレームの色を設定します。

### Alpha

ワイヤーフレームの透過度を設定します (0 = 透過, 1 = 非透過)。

### Use Vertex Color

`Color` で設定した色の代わりに、頂点カラーを使用します。

### Wireframe Mode

ワイヤーフレームの表示設定が出来ます。

- `Normal` : 通常通りにワイヤーフレームを表示します。
- `NoDiagonal` : ワイヤーフレームのうち、対角線を非表示にします。これは、キューブなどを表示するときに便利です。

### Border Thickness

ワイヤーフレームの太さを設定します。  
※ `Opaque` / `Transparent` と、 `Particle Transparent` では同じ値でも太さが異なります。

### Use Shader Scale

`TEXCOORD1` に入力された値を Scale として扱います。  
これは通常、 Particle System の `Use Vertex Stream` などから値を入力する場合に使用します。

### Emission Intensity

Emission を効かせる場合は 0 より大きい値を設定してください。

### Emission Mask

動いていません

## 付属 Material について

Wireframe Shader では、ある程度設定済みの Material を同梱しています。

- `WS_NoDiagonal_Particle` : Particle System の Mesh Particle 向けに設定された Material です
- `WS_NoDiagonal_Static` : 通常の Mesh 向けに設定された Material です

それぞれの見た目は、 `SampleScene01` にて確認することが出来ます。
