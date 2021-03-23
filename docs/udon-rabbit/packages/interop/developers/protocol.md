# プロトコルについて

UdonRabbit Interop では、以下の方法にそって実装することによって、なつねこらぼらとりーで配布している、 Udon 関連コンポーネントおよびこのプロトコルを実装している他者作成パッケージとの相互運用性を確保することが可能になります。  
このプロジェクトはできる限り型安全に、かつユーザーフレンドリーに扱えることを目指しており、そのための機能も提供しています。

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

## メリット

UdonRabbit Interop のプロトコルを採用するメリットとしては、以下の通りです。

-   (開発者) 型のある状態で U# プログラミングを行うことが出来る
-   (開発者) パラメータの受け渡しを行うことが出来る
-   (利用者) SDK2 の時のように、主にドラッグアンドドロップで操作が完結する
-   (利用者) 対応しない組み合わせを行った場合、警告が表示されるのでデバッグが簡易に出来る

## デメリット

ただし、 UdonRabbit Interop には、開発者・利用者ともに以下のデメリットが発生します。

-   UdonRabbit.Interop パッケージを導入する必要がある

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

## Validator

UdonRabbit Interop では、コンポーネント間の相互運用性のチェックのために、いくつかのバリデーターを提供しています。  
これらはフィールドアノテーションとして実装され、 UdonSharp の動作上、アノテーションはコンパイル段階で削除されるため、 VRChat 上での動作は変化ありません。  
ただし、 UdonSharp でのコンパイルチェックはアノテーションでも有効になっているため、いくつかの制約が加えられています。

### Type Validator

上記の形式では、 `SetArgument` および `GetArgument` で送受信されるパラメータの型については保証されておらず、ユーザーの側で設定するときに不備が発生する可能性があります。  
そこで、受信側にて以下のフィールドアノテーションを付与することで、 Inspector 上で型チェックを行うことが可能になります。

```csharp
[SerializeField]
[RequestArgumentType(typeof(bool))] // 追加
private EventListener listener;
```

送信側および受信側にて渡している型と送信している型が異なる場合は、以下のように警告が表示されます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/interop/type-validator-warning.png" width="500px" data-zoomable="true">
  <figcaption>受信側では bool を要求しているが、送信側では double を設定している場合の警告例</figcaption>
</figure>

### Sync Validator

受信側にて同期状態を保持している場合、送信側で同期状態を保持したくない場合があります。  
そのような場合は Sync Validator を使うことで、簡易的なチェックを行うことが可能です。

<!-- prettier-ignore-start -->
!!! info
    これには負荷の都合上、送信側の実装も必要になります。  
    送信側がうまく対応していない場合はバリデーターが正しく動かない可能性もありますので、ご了承ください。
<!-- prettier-ignore-end -->

Sync Validator には、以下の 2 種類が存在します。  
なお、フィールドアノテーションを付けない場合は、すべての状態が許容されます。

| Validator              | Description                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| `RequestSyncedEvent`   | 送信側 (Sender) で同期された (グローバル) イベントを発生させることをリクエストします     |
| `RequestNoSyncedEvent` | 送信側 (Sender) で同期されていない (ローカル) イベントを発生させることをリクエストします |

例えば、送信側にて全プレイヤーに同期されたイベントを発して欲しい場合は、以下のようにします。

```csharp
[SerializeField]
[RequestSyncedEvent]
private EventListener listener;
```

また、送信側にて、同期された・同期されていないイベントであることを明示する場合は、以下のようにします。  
アノテーションを付けなかった場合は、同期されているイベントであると見なします。

```csharp
// 同期されているイベント
[SerializeField]
[RequestSyncedEvent]
private EventListener listener;

// 同期されているイベント
[SerializeField]
private EventListener listener;

// 同期されていないイベント
[SerializeField]
[RequestNoSyncedEvent]
private EventListener listener;
```

ここでいう同期されたイベントとは、以下を示します。

-   全ユーザーに、同じタイミングで発生されるイベント

例えば、 `#!csharp SendCustomNetworkEvent(NetworkEventTarget.All, "YourMethod")` で呼ばれたメソッドの内部で発生したイベントは、同期したイベントと見なせます。

送信側および受信側にて、期待している同期状態と、実際の同期状態が異なる場合は、以下のように警告が表示されます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/interop/sync-validator-warning.png" width="500px" data-zoomable="true">
  <figcaption>受信側では同期されたイベントを要求しているが、送信側では同期しないイベントを送信している場合の警告例</figcaption>
</figure>

### Event Validator

受信側にて、特定のイベントを要求する場合、 `RequestValidateEvent` フィールドアノテーションを付けることで、特定のイベントが送信されているかを確認することが可能になります。  
たとえば、受信側が以下のような UdonSharp のコード側を持つとき：

```csharp
using Mochizuki.VRChat.Interop;
using Mochizuki.VRChat.Interop.Validator.Attributes;

using UdonSharp;

using UnityEngine;

namespace Mochizuki.VRChat.Example
{
    public class ExampleReceiver : UdonSharpBehaviour
    {
        [SerializeField]
        [RequestValidateEvent]
        private EventListener listener;

        private void Update()
        {
            if (listener.IsInteracted())
            {
                SomeStuff();
            }
        }

        // other code
    }
}
```

送信側で対応するメソッドが呼ばれているか (この場合は `#!csharp OnInteracted()`) をチェックすることが可能になります。  
なお、受信側にこのフィールドアノテーションがあったとしても、 `IsSomeEventIsFired()` のみを要求している場合は、バリデーションはパスされます。

送信側および受信側にて、期待しているイベントコールと、実際のイベントコールが異なる場合は、以下のように警告が表示されます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/udon-rabbit/interop/event-validator-warning.png" width="500px" data-zoomable="true">
  <figcaption>受信側では OnDropped を要求しているが、送信側ではコールされていない場合の例</figcaption>
</figure>
