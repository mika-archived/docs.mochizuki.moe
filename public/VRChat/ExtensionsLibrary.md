# VRChat Extensions Library

ねこのや BOOTH で配布している各ツール類の共通処理をまとめたライブラリーです。  
各ツールの UnityPackage に含まれているので別途導入する必要はありませんが、  
他の開発者などが利用することは可能です。

以下は使用を想定している API です。  
(他の API も Public Accessor なのでアクセス可能ですが、使用はあまり推奨しません)。

## `Mochizuki.VRChat.Extensions.Unity` namespace

この名前空間にある拡張メソッド群は、通常の Unity でも動作可能です。

#### `AnimatorController#MergeControllers(params AnimatorController[])`

パラメータに渡された Animator Controller を操作元の Animator Controller に対して Deep Copy を行います。
操作前には必ず `AssetDatabase#CreateAsset` でベースの Animator Controller をファイルへと保存している必要があります。

```cs
var controller = new AnimatorController();
AssetDatabase.CreateAsset(controller, "/path/to/animator.controller");

controller.MergeControllers(controllers);

AssetDatabase.SaveAssets();
AssetDatabase.Refresh();
```

#### `AssetDatabaseExtensions#CopyAndLoadAsset<T>(T, string) where T : UnityEngine.Object`

指定されたアセットを第 2 引数のパスへ保存し、読み込みます。

#### `AssetDatabaseExtensions#LoadAssetFromGuid<T>(string) where T : UnityEngine.Object`

アセットの GUID からアセットを読み込みます。

#### `EditorGUILayoutExtensions#PropertyField(EditorWindow, string)`

`SerializedObject` ベースの UI を表示します。

```csharp
public class SomeClass : EditorWindow
{
    [SerializeField]
    private GameObject[] _gameObjects;

    private void OnGUI()
    {
        EditorGUILayoutExtensions.PropertyField(this, nameof(_gameObjects));
    }
}
```

#### `EditorGUILayoutExtensions#ObjectPicker<T>(string, T) where T : UnityEngine.Object`

`EditorGUILayout#ObjectField` の短縮版

## `Mochizuki.VRChat.Extensions.VRC` namespace

この名前空間にある拡張メソッド群は、`VRC_SDK_VRCSDK3` が定義されている場合のみ使用可能です。

#### `VRCAvatarDescriptor#GetAnimationLayer(AnimLayerType)`

Avatar Descriptor に設定されている特定 Layer の AnimationLayer を取得します。

#### `VRCAvatarDescriptor#HasAnimationLayer(AnimLayerType)`

Avatar Descriptor に特定の Layer の AnimationLayer が設定されているかどうかを取得します。

#### `VRCAvatarDescriptor#SetAnimationLayer(AnimLayerType, AnimatorController)`

Avatar Descriptor に特定の Layer へ AnimatorController を設定します。

#### `VRCAvatarDescriptor#SetExpressions(VRCExpressionsMenu, VRCExpressionParameters)`

Avatar Descriptor に Expression 関連の設定を一括で行います。

#### `VRCExpressionParameters#InitExpressionParameters()`

Expression Parameters をデフォルト値で初期化します。

#### `VRCExpressionParameters#AddParametersToFirstEmptySpace(string, ValueType)`

Expression Parameters の最初の空き位置にパラメータを挿入します。

#### `VRCExpressionParameters#MergeParameters(params ExpressionParameters[])`

複数の Expression Parameters を結合します。

#### `VRCExpressionsMenuExtensions#MergeExpressions(params VRCExpressionsMenu[])`

複数の Expressions Menu を統合します。

## ダウンロードおよびソースコード

- [GitHub mika-f/VRChat-ExtensionsLibrary](https://github.com/mika-f/VRChat-ExtensionsLibrary)
