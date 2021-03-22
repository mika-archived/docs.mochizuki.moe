## Version 0.2.0-alpha.1 (unreleased)

-   (Interop) UdonRabbit 間で共通動作するコンポーネント群を追加
-   (Kitsune) 各製品へ吸収統合
-   (ObjectFitter) UdonRabbit Interop に対応
-   (SynchronizedAnimator) UdonRabbit Interop に対応

## Version 0.1.0-alpha.8

-   (ObjectFitter) トライアル版で Prefab が同梱されていなかった不具合を修正
-   (ObjectFitter) 通常ライセンス版以上で、「同期しない」版を追加
-   (ObjectFitter) メニューの階層を変更

## Version 0.1.0-alpha.7

-   (ObjectFitter) Transform の各値を表示
-   (ObjectFitter) 同期における通信量を削減 (40 byte to 16 byte)
    -   なお、この影響で、以下のメリットとデメリットが発生します
    -   メリット
        -   1 ワールド当たりに設置可能な衣服の数が増加 (ただし、 UdonSync がサイズベースで同期の不具合を起こしている場合)
    -   デメリット
        -   各種 Transform の値が一定の範囲のみを取るようになります
            -   Transform.scale ... `0.00` ~ `2.25`
            -   Transform.position ... `-1.27` ~ `1.27`
            -   Transform.rotation ... `-409.5` ~ `409.5`
-   (ObjectFitter) エディター拡張におけるボーンマッピングアルゴリズムの改善
    -   狐雪ちゃんにて自動設定されない問題などが改善されました

## Version 0.1.0-alpha.6

-   (Kitsune) 利用規約を更新
-   (ObjectFitter) 利用規約を更新
-   (SynchronizedAnimator) 利用規約を更新

## Version 0.1.0-alpha.5

-   (Kitsune) ログ出力時におけるパフォーマンス改善
-   (ObjectFitter) 他のプレイヤーとの同期機能を追加
-   (ObjectFitter) Transform の各種値の微調整機能を追加

## Version 0.1.0-alpha.4 (limited)

-   (Kitsune) Debugger クラスを追加
-   (ObjectFitter) 機能制限版リリース

## Version 0.1.0-alpha.3

-   (Kitsune) Backoff の種類をいくつか実装
-   (Kitsune) 時間を扱うユーティリティクラスを追加
-   (SynchronizedAnimator) より確実に同期されるように変数同期のチェックを変更
-   (SynchronizedAnimator) 同期する値の型を `string` から `long` へ変更
-   (SynchronizedAnimator) より詳細に同期されるように修正

## Version 0.1.0-alpha.2 (unpublished)

-   (Kitsune) リトライ機構を実装
-   (SynchronizedAnimator) より早いタイミングで同期されるように変更

## Version 0.1.0-alpha.1 (unpublished)

-   初回リリース
