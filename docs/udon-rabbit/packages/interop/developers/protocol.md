# プロトコルについて

UdonRabbit Interop では、以下の方法にそって実装することによって、なつねこらぼらとりーで配布している、 Udon 関連コンポーネントおよびこのプロトコルを実装している他者作成パッケージとの相互運用性を確保することが可能になります。

<!-- prettier-ignore-start -->
!!! info
    以下において、すべての項目にて UdonSharp (U#) にて解説しています。  
    Udon Graph でも同様のことが可能ですが、現時点で夏猫が Udon Graph を理解しきっていないため、サポートはしておりません。  
    また、 Type Validator の実装には UdonSharp (U#) での実装が必須となります。
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
!!! warning
    下記のサンプルコードすべてにおいて、例外処理を省いています。  
    必要に応じて `null` チェックなどの例外処理を行って下さい。
<!-- prettier-ignore-end -->

## `MOCHIZUKI_INTEROP` プリプロセッサ

UdonRabbit Interop が導入されている環境では、 `MOCHIZUKI_INTEROP` プリプロセッサが有効になります。  
このプリプロセッサを使用することで、 UdonRabbit Interop が導入されていない環境では、動作を行わないことが可能になります。

以下に `MOCHIZUKI_INTEROP` プリプロセッサが有効になっているときのみ、 UdonSharp でのコンパイルを有効にする例を示します。

```csharp
#if MOCHIZUKI_INTEROP

using Mochizuki.VRChat.Interop;

namespace Mochizuki.VRChat.Examples
{
    public class ExampleButton : UdonSharpBehaviour
    {
        // ...
        // ここにコードを書く
        // ...
    }
}

#endif
```

## `EventListener` UdonSharp コンポーネント

UdonRabbit Interop における、共通実装すべきコンポーネントです。  
イベントの送信側および受信側の両方でこのコンポーネントに依存することで、型安全に設定およびイベントの送受信が行えるようになります。

## イベントの送信

UdonRabbit Interop では、基本的にはイベントを発生させる側の Prefab に `EventListener` コンポーネントを含めることを推奨しています。  
これは、 `EventListener` コンポーネントにおいて、どのイベントを受け渡すかの設定が可能であり、またこれらの設定は利用者側ではなく、開発者側が設定すべきであると考えているためです。

以下に、 `Interact` イベントの送信の為のコードを示します。

```csharp

using Mochizuki.VRChat.Interop;

using UdonSharp;

using UnityEngine;

using VRC.SDKBase;

namespace Mochizuki.VRChat.Example
{
    public class ExampleButton : UdonSharpBehaviour
    {
        [SerializeField]
        private EventListener listener;

        public override void Interact()
        {
            listener.OnInteracted();
        }
    }
}
```

何らかのパラメーターを渡したい場合は、 `SetArgument(object)` を使用します。

```csharp
listener.SetArgument(true);
```

基本的には、すべてのイベントにおいて、 `OnEventName` の形でイベントの送信が利用できます。

## イベントの受信

イベントの受信を行いたいコンポーネントでは、下記のコードにて任意のイベントの受信が行えます。

```csharp
using Mochizuki.VRChat.Interop;

using UdonSharp;

using UnityEngine;

using VRC.SDKBase;

namespace Mochizuki.VRChat.Example
{
    public class ExampleButton : UdonSharpBehaviour
    {
        [SerializeField]
        private EventListener listener;

        private void Update()
        {
            if (listener.IsInteracted())
            {
                // Interacted Event is fired
            }
        }
    }
}
```

`IsEventName()` では一度のイベント発生に付き一度だけ、有効な値 (`True`) を返します。  
パラメータを受信したい場合は、以下のように行うことで、設定されたパラメータが取得できます。

```csharp
var arg = listener.GetArgument(); // 欲しい型へキャストしてください
```

## Type Validator

上記の形式では、 `SetArgument` および `GetArgument` で送受信されるパラメータの型については保証されておらず、ユーザーの側で設定するときに不備が発生する可能性があります。  
そこで、受信側にて以下のフィールドアノテーションを付与することで、 Inspector 上で型チェックを行うことが可能になります。

```csharp
[SerializeField]
[RequestArgumentType(typeof(bool))] // 追加
private EventListener listener;
```

送信側および受信側にて渡している型と送信している型が異なる場合は、以下のように警告が表示されます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/interop/type-validator-warning.PNG" width="500px" data-zoomable="true">
  <figcaption>受信側では Float を要求しているが、送信側では Boolean を設定している場合の警告例</figcaption>
</figure>

なお、 UdonSharp の実装上、アノテーションはコンパイル段階で削除されるため、 VRChat 上での動作は変化ありません。
