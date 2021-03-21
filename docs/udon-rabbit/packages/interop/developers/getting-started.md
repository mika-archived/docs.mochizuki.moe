# 開発の準備

UdonRabbit Interop を用いて開発するには、以下の依存関係が必要になります。

-   UdonSharp v0.19.6 以降
-   [VRCSDK Udon Networking](https://docs.vrchat.com/docs/udon-networking) 対応版以降

## ダウンロードとインストール

UdonRabbit Interop は、現時点で 2 種類の方法でインストールすることが出来ます。

### BOOTH / GitHub Release

下記 BOOTH ページもしくは GitHub のページから、 UnityPackage をダウンロードし、プロジェクトへインポートしてください。  
なおインポート時点において、 VRCSDK と UdonSharp がインポートされていなければ、参照エラーが発生します。

-   [BOOTH](https://natsuneko.booth.pm/items/2835630)
-   [GitHub Release](https://github.com/mika-f/UdonRabbit.Interop/releases)

### Unity Package Manager (UPM)

UdonRabbit Interop パッケージは、 UPM でのインストールにも対応しています。  
`Packages/manifest.json` を任意のエディターで開き、以下のセクションを追加してください。

```json
{
    "scopedRegistries": [
        {
            "name": "Mochizuki",
            "url": "https://registry.npmjs.com",
            "scopes": ["moe.mochizuki"]
        }
    ]
}
```

その後、パッケージマネージャーから `UdonRabbit.Interop` を追加するか、 `dependencies` セクションに以下を直接追加して下さい。

```json
"moe.mochizuki.vrchat.udon-rabbit.interop": "VERSION"
```

## Assembly Definition Files の作成と参照の追加

自身のパッケージ内部にて、 Assembly Definition Files (AsmDef) を作成し、Assembly Definition References の参照先に `Mochizuki.VRChat.Interop` を追加してください。  
Assembly Definition Files についての詳細は、[Unity 公式ドキュメント](https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html)を参照してください。

## Type Validator を有効にする

[プロトコル](/udon-rabbit/packages/interop/developers/protocol/)ページにて説明している Type Validator を有効にするには、以下のコードをエディター拡張にて実装する必要があります。  
エディター拡張も上記と同じく AsmDef を作成し、Assembly Definition References の参照先に `Mochizuki.VRChat.Interop.Editor` と**先ほど作成した自身のパッケージ**を追加してください。  
参照を追加後、以下のコードを記述することで、 Type Validator が有効になります。  
なお、 `YourUdonSharpBehaviourClass` については、自身の `UdonSharpBehaviour` を実装したクラスに置き換えて下さい。

```csharp
using System;

using Mochizuki.VRChat.Interop;

namespace Mochizuki.VRChat.Examples
{
    [InitializeOnLoad]
    public static class AssemblyReferenceInstaller
    {
        static AssemblyReferenceInstaller()
        {
            InteropEditorPatcher.RegisterReference(typeof(YourUdonSharpBehaviourClass));
        }
    }
}
```
