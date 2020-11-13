`Kitsune` は、 Udon および UdonSharp でのユーティリティ実装です。  
汎用的な処理が含まれており、 UdonRabbit の各パッケージに同梱されています。

## Kitsune.ExponentialBackoffRetry

AWS のブログにて解説されている [Exponential Backoff And Jitter](https://aws.amazon.com/jp/blogs/architecture/exponential-backoff-and-jitter/) の UdonSharp 実装です。
効率的なリトライ処理を行うことが出来ます。

### Properties

| Name          | Type                     | Required | Description                   |
| ------------- | ------------------------ | :------: | ----------------------------- |
| `Logger`      | `~Kitsune.KitsuneLogger` | Optional | `Kitsune.Logger` インスタンス |
| `MaxCapacity` | `System.Int32`           | Required | 最大待機時間 (Tick)           |
| `MaxRetries`  | `System.Int32`           | Required | 最大試行回数                  |

## Kitsune.KitsuneLogger

いわゆる Logger

### Properties

| Name        | Type            | Required | Description  |
| ----------- | --------------- | :------: | ------------ |
| `Namespace` | `System.String` | Required | ログ名前空間 |

## Kitsune.SyncBool

`UdonSyncedAttribute` を使用しない Boolean の同期を行います。

### Properties

| Name           | Type                     | Required | Description                   |
| -------------- | ------------------------ | :------: | ----------------------------- |
| `InitialValue` | `System.Boolean`         | Required | 初期値                        |
| `Logger`       | `~Kitsune.KitsuneLogger` | Optional | `Kitsune.Logger` インスタンス |
