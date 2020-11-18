`Kitsune` は、 Udon および UdonSharp でのユーティリティ実装です。  
汎用的な処理が含まれており、 UdonRabbit の各パッケージに同梱されています。

## Kitsune.ConstantBackoffRetry

一定の間隔でリトライを行う為の UdonSharp 実装です。

### Properties

| Name         | Type                     | Required | Description                   |
| ------------ | ------------------------ | :------: | ----------------------------- |
| `Capacity`   | `int`                    | Required | 待機時間 (Tick)               |
| `Logger`     | `~Kitsune.KitsuneLogger` | Optional | `Kitsune.Logger` インスタンス |
| `MaxRetries` | `int`                    | Required | 最大試行回数                  |

### Methods

| Name               | Returns | Static | Description                                                                                 |
| ------------------ | ------- | :----: | ------------------------------------------------------------------------------------------- |
| `CanCallProcess()` | `bool`  |   No   | リトライ処理中である場合は、 Backoff カウンターが待機時間を越えていたら `true` を返します。 |
| `Next()`           | `void`  |   No   | リトライ処理を再要求します。                                                                |
| `RequestRetry()`   | `void`  |   No   | リトライ処理を開始します。                                                                  |
| `ResetBackoff()`   | `void`  |   No   | Backoff の状態をリセットします。                                                            |
| `Wait()`           | `void`  |   No   | リトライ処理中である場合は、 Backoff カウンターを進めます。                                 |

## Kitsune.ExponentialBackoffAndJitterRetry

AWS のブログにて解説されている [Exponential Backoff And Jitter](https://aws.amazon.com/jp/blogs/architecture/exponential-backoff-and-jitter/) の UdonSharp 実装です。
効率的なリトライ処理を行うことが出来ます。

### Properties

| Name          | Type                     | Required | Description                   |
| ------------- | ------------------------ | :------: | ----------------------------- |
| `Logger`      | `~Kitsune.KitsuneLogger` | Optional | `Kitsune.Logger` インスタンス |
| `MaxCapacity` | `int`                    | Required | 最大待機時間 (Tick)           |
| `MaxRetries`  | `int`                    | Required | 最大試行回数                  |

### Methods

| Name               | Returns | Static | Description                                                                                 |
| ------------------ | ------- | :----: | ------------------------------------------------------------------------------------------- |
| `CanCallProcess()` | `bool`  |   No   | リトライ処理中である場合は、 Backoff カウンターが待機時間を越えていたら `true` を返します。 |
| `Next()`           | `void`  |   No   | リトライ処理を再要求します。                                                                |
| `RequestRetry()`   | `void`  |   No   | リトライ処理を開始します。                                                                  |
| `ResetBackoff()`   | `void`  |   No   | Backoff の状態をリセットします。                                                            |
| `Wait()`           | `void`  |   No   | リトライ処理中である場合は、 Backoff カウンターを進めます。                                 |

## Kitsune.ExponentialBackoffRetry

一般的なネットワーク越しのリトライ処理である Exponential Backoff の UdonSharp 実装です。

### Properties

| Name          | Type                     | Required | Description                   |
| ------------- | ------------------------ | :------: | ----------------------------- |
| `Logger`      | `~Kitsune.KitsuneLogger` | Optional | `Kitsune.Logger` インスタンス |
| `MaxCapacity` | `int`                    | Required | 最大待機時間 (Tick)           |
| `MaxRetries`  | `int`                    | Required | 最大試行回数                  |

### Methods

| Name               | Returns | Static | Description                                                                                 |
| ------------------ | ------- | :----: | ------------------------------------------------------------------------------------------- |
| `CanCallProcess()` | `bool`  |   No   | リトライ処理中である場合は、 Backoff カウンターが待機時間を越えていたら `true` を返します。 |
| `Next()`           | `void`  |   No   | リトライ処理を再要求します。                                                                |
| `RequestRetry()`   | `void`  |   No   | リトライ処理を開始します。                                                                  |
| `ResetBackoff()`   | `void`  |   No   | Backoff の状態をリセットします。                                                            |
| `Wait()`           | `void`  |   No   | リトライ処理中である場合は、 Backoff カウンターを進めます。                                 |

## Kitsune.KitsuneLogger

いわゆる Logger

### Properties

| Name        | Type     | Required | Description  |
| ----------- | -------- | :------: | ------------ |
| `Namespace` | `string` | Required | ログ名前空間 |

### Methods

| Name              | Returns | Static | Description                               |
| ----------------- | ------- | :----: | ----------------------------------------- |
| `Debug(string)`   | `void`  |   No   | ログレベル `DEBUG` でログ出力を行います。 |
| `Error(string)`   | `void`  |   No   | ログレベル `ERROR` でログ出力を行います。 |
| `Info(string)`    | `void`  |   No   | ログレベル `INFO` でログ出力を行います。  |
| `Warning(string)` | `void`  |   No   | ログレベル `WARN` でログ出力を行います。  |

## Kitsune.KitsuneTime

時間関連処理のユーティリティクラスです。

### Properties

_None_

### Methods

| Name                 | Returns  | Static | Description                                                            |
| -------------------- | -------- | :----: | ---------------------------------------------------------------------- |
| `GetUnixTime()`      | `long`   |  Yes   | 現在時刻を Unix Time (s) として取得します。                            |
| `GetUnixTimeMills()` | `long`   |  Yes   | 現在時刻を Unix Time (ms) として取得します。                           |
| `ToUtcTime(long)`    | `string` |  Yes   | Unix Time (ms) から `yyyy/MM/dd HH:mm:ss.fff` 形式の時刻を取得します。 |

## Kitsune.SyncBool

`UdonSyncedAttribute` を使用しない Boolean の同期を行います。

### Properties

| Name           | Type                     | Required | Description                   |
| -------------- | ------------------------ | :------: | ----------------------------- |
| `InitialValue` | `bool`                   | Required | 初期値                        |
| `Logger`       | `~Kitsune.KitsuneLogger` | Optional | `Kitsune.Logger` インスタンス |

### Methods

| Name               | Returns | Static | Description                                                                                              |
| ------------------ | ------- | :----: | -------------------------------------------------------------------------------------------------------- |
| `IsValueChanged()` | `bool`  |   No   | 前回の `IsValueChanged` 呼び出し時から、ネットワーク経由で `SyncBool` の値が変わったかどうかを返します。 |
| `SetGlobal(bool)`  | `void`  |   No   | 全プレイヤーに対して、 `SyncBool` の値を渡した値で同期します。                                           |
| `SetLocal(bool)`   | `void`  |   No   | ローカルプレイヤー (自身) に対して、 `SyncBool` の値を設定します。同期されません。                       |
| ~~`SetToFalse()`~~ | `void`  |   No   | `[EditorBrowsable(Never)]` \| `SyncBool` の値を `false` で設定します。                                   |
| ~~`SetToTrue()`~~  | `void`  |   No   | `[EditorBrowsable(Never)]` \| `SyncBool` の値を `true` で設定します。                                    |
| `Value()`          | `bool`  |   No   | 現在の `SyncBool` の値を取得します。                                                                     |
