# Atlasization

Blender などの外部ツールを介することなく、 Unity 上だけでテクスチャーのアトラス化を行えるようにする Unity エディター拡張です。  
ウィザード形式で指示に従って操作していくだけで、アトラス化されたテクスチャーと、それに対応した Mesh が出力されます。  
また、 Professional モードを使用することで、テクスチャー配置などのより細かい設定も可能になります (予定)。

現時点では、以下の機能を備えています。

- テクスチャーのアトラス化および Mesh の UV 変更
- 必要数の Material の自動設定
- SubMesh の設定

また、設定された SubMesh 毎に全ての Material のシェーダーが一致している場合、以下の機能も使えます。

- シェーダーの自動設定 (ただし、引き継がれる設定はどれか 1 つだけです)

Atlasization で実装予定の機能については、 GitHub Projects の Backlog を参照してください。

https://github.com/mika-f/Unity-Atlasization/projects/1

なお、このツールは Vket5 の夏猫のブース RemoteWorks にて使用されています。
