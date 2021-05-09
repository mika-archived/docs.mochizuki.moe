---
title: 同期の仕組みについて
---

# 同期の仕組みについて

Synchronized Animator では、以下の手順で同期を行っています。  
基本的には遅延はあまり発生しないと思われますが、 `Update()` の呼ばれる頻度によっては大幅な遅延が発生します。

## 再生開始時点ですでに存在しているプレイヤーの場合

1. (Global) 再生開始時間 (`UnixTime - GMT`) を他のプレイヤーへ送信
2. (Global) `SyncBool#SetGlobal(true)` にて即時 `boolean` の同期を開始
3. (Local) 同期された `SyncBool` の値の変更を検出し、変数の同期を待機
4. (Local) 変数の同期状態を確認し、同期されていたら値を取得
5. (Local) 次 Tick にて、再生箇所を同期

## 再生開始時点ではまだ存在していなかったプレイヤーの場合

1. (Local) World に Join 後、 `SyncBool#SetLocal(true)` にて同期状態の確認を開始
2. (Local) 変数の同期状態を確認し、同期されていたら値を取得
3. (Local) 次 Tick にて、再生箇所を同期
