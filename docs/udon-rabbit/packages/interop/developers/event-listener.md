# Event Listener Class

UdonRabbit Interop では、すべてのイベントの送受信を、この Event Listener クラスを介して行います。  
ここでは、その Event Listener クラスのメソッド一覧などを掲載しています。

## リセットのタイミングについて

EventListener の各状態は、 Script Execution Order `10000000` の `Update()` 関数にてリセットされます。  
そのため、 `LateUpdate()` 等でも利用したい場合は、一度 `Update()` の中で状態を受け取ってから行ってください。

## 用語説明

このセクションでは、このページで用いられている用語について説明します。

### Event Listener を所持

Prefab 内に、 `EventListener` を含んでいる側の UdonSharpBehaviour を指します。  
多くの場合、これはイベントを発生させる側 (トリガー) になります。

### Event Listener を購読

Prefab 内に `EventListener` を含んでおらず、外部から受け取る側の UdonSharpBehaviour を指します。
多くの場合、これは何らかの動作を発生させる側 (アクション) になります。

## Public Methods

### `bool IsSomeEventIsEmitted()`

なんらかのイベントが送信されたフレームにて、 `True` を返します。

### `UdonInputEventArgs GetUdonInputEventArgs()`

以下のイベントが送信されたフレームにて、 `UdonInputEventArgs` に相当するパラメータ(第 2 引数)を取得します。

-   `InputJump`
-   `InputUse`
-   `InputGrab`
-   `InputDrop`
-   `InputMoveHorizontal`
-   `InputMoveVertical`
-   `InputLookHorizontal`
-   `InputLookVertical`

### `bool GetInputValueB()`

以下のイベントが送信されたフレームにて、 `bool` に相当するパラメータ(第 1 引数)を取得します。

-   `InputJump`
-   `InputUse`
-   `InputGrab`
-   `InputDrop`

### `float GetInputValueF()`

以下のイベントが送信されたフレームにて、 `float` に相当するパラメータ(第 1 引数)を取得します。

-   `InputMoveHorizontal`
-   `InputMoveVertical`
-   `InputLookHorizontal`
-   `InputLookVertical`

### `int GetMidiChannelArg()`

以下のイベントが送信されたフレームにて、 MIDI のチャンネルを取得します。

-   `MidiNoteOn`
-   `MidiNoteOff`
-   `MidiControlChange`

### `int GetMidiNumberArg()`

以下のイベントが送信されたフレームにて、 MIDI のノート番号を取得します。

-   `MidiNoteOn`
-   `MidiNoteOff`

### `int GetMidiVelocityArg()`

以下のイベントが送信されたフレームにて、 MIDI のノートの速度を取得します。  
ただし、 `MidiNoteOff` イベントの場合は、通常 `0` が取得されます。

-   `MidiNoteOn`
-   `MidiNoteOff`

### `int GetMidiChangeValueArg()`

以下のイベントが送信されたフレームにて、 MIDI のノートの変更された値を取得します。

-   `MidiControlChange`

### `VrcPlayerApi GetPlayerArg()`

以下のイベントが送信されたフレームにて、 `VrcPlayerApi` を取得します。  
`OnOwnershipRequest` イベントの場合は、 `requestingPlayer` に相当する値が取得されます。

-   `OnOwnershipTransferred`
-   `OnPlayerJoined`
-   `OnPlayerLeft`
-   `OnStationEntered`
-   `OnStationExited`
-   `OnPlayerTriggerEnter`
-   `OnPlayerTriggerExit`
-   `OnPlayerTriggerStay`
-   `OnPlayerCollisionEnter`
-   `OnPlayerCollisionExit`
-   `OnPlayerCollisionStay`
-   `OnPlayerParticleCollision`
-   `OnPlayerRespawn`
-   `OnOwnershipRequest`

### `VrcPlayerApi GetRequestingPlayerArg()`

`OnOwnershipRequest` が送信されたフレームにて、 `requestingPlayer` に相当するプレイヤーを取得します。  
これは、 `GetPlayerArg()` のエイリアスです。

### `VrcPlayerApi GetRequestedOwnerArg()`

`OnOwnershipRequest` が送信されたフレームにて、 `requestedOwner` に相当するプレイヤーを取得します。

### `VideoError GetVideoErrorEventArg()`

`OnVideoError` が送信されたフレームにて、エラー内容を取得します。

### `void EmitInteract()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnInteract()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#interact){target=\_blank}を参照してください。

### `bool IsInteract()`

Event Listener を所持している UdonSharpBehaviour から、 `OnInteract()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#interact){target=\_blank}を参照してください。

### `void EmitDrop()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnDrop()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#ondrop){target=\_blank}を参照してください。

### `bool IsDrop()`

Event Listener を所持している UdonSharpBehaviour から、 `OnDrop()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#ondrop){target=\_blank}を参照してください。

### `void EmitOwnershipTransferred(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnOwnershipTransferred(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onownershiptransferred){target=\_blank}を参照してください。

### `bool IsOwnershipTransferred()`

Event Listener を所持している UdonSharpBehaviour から、 `OnOwnershipTransferred(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onownershiptransferred){target=\_blank}を参照してください。

### `void EmitPickup()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPickup()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onpickup){target=\_blank}を参照してください。

### `bool IsPickup()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPickup()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onpickup){target=\_blank}を参照してください。

### `void EmitPickupUseDown()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPickupUseDown()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onpickupusedown){target=\_blank}を参照してください。

### `bool IsPickupUseDown()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPickupUseDown()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onpickupusedown){target=\_blank}を参照してください。

### `void EmitPickupUseUp()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPickupUseUp()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onpickupuseup){target=\_blank}を参照してください。

### `bool IsPickupUseUp()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPickupUseDown()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onpickupuseup){target=\_blank}を参照してください。

### `void EmitPlayerJoined(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `EmitPlayerJoined(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayerjoined){target=\_blank}を参照してください。

### `bool IsPlayerJoined()`

Event Listener を所持している UdonSharpBehaviour から、 `EmitPlayerJoined(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayerjoined){target=\_blank}を参照してください。

### `void EmitPlayerLeft(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPlayerLeft(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayerleft){target=\_blank}を参照してください。

### `bool IsPlayerLeft()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPlayerLeft(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayerleft){target=\_blank}を参照してください。

### `void EmitSpawn()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnSpawn()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onspawn){target=\_blank}を参照してください。

### `bool IsSpawn()`

Event Listener を所持している UdonSharpBehaviour から、 `OnSpawn()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onspawn){target=\_blank}を参照してください。

### `void EmitStationEntered(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnStationEntered(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onstationentered){target=\_blank}を参照してください。

### `bool IsStationEntered()`

Event Listener を所持している UdonSharpBehaviour から、 `OnStationEntered(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onstationentered){target=\_blank}を参照してください。

### `void EmitStationExited(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnStationExited(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onstationexited){target=\_blank}を参照してください。

### `bool IsStationExited()`

Event Listener を所持している UdonSharpBehaviour から、 `OnStationExited(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onstationexited){target=\_blank}を参照してください。

### `void EmitVideoEnd()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnVideoEnd()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideoend){target=\_blank}を参照してください。

### `bool IsVideoEnd()`

Event Listener を所持している UdonSharpBehaviour から、 `OnVideoEnd()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideoend){target=\_blank}を参照してください。

### `void EmitVideoError(VideoError)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnVideoError(VideoError)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideoerror){target=\_blank}を参照してください。

### `bool IsVideoError()`

Event Listener を所持している UdonSharpBehaviour から、 `OnVideoError(VideoError)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetVideoErrorEventArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideoerror){target=\_blank}を参照してください。

### `void EmitVideoLoop()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnVideoLoop()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideoloop){target=\_blank}を参照してください。

### `bool IsVideoLoop()`

Event Listener を所持している UdonSharpBehaviour から、 `OnVideoLoop()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideoloop){target=\_blank}を参照してください。

### `void EmitVideoPause()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnVideoPause()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideopause){target=\_blank}を参照してください。

### `bool IsVideoPause()`

Event Listener を所持している UdonSharpBehaviour から、 `OnVideoPause()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideopause){target=\_blank}を参照してください。

### `void EmitVideoPlay()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnVideoPlay()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideoplay){target=\_blank}を参照してください。

### `bool IsVideoPlay()`

Event Listener を所持している UdonSharpBehaviour から、 `OnVideoPlay()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideoplay){target=\_blank}を参照してください。

### `void EmitVideoStart()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnVideoStart()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideostart){target=\_blank}を参照してください。

### `bool IsVideoStart()`

Event Listener を所持している UdonSharpBehaviour から、 `OnVideoStart()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideostart){target=\_blank}を参照してください。

### `void EmitVideoReady()`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnVideoReady()` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideoready){target=\_blank}を参照してください。

### `bool IsVideoReady()`

Event Listener を所持している UdonSharpBehaviour から、 `OnVideoReady()` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onvideoready){target=\_blank}を参照してください。

### `void EmitPlayerTriggerEnter(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPlayerTriggerEnter(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayertriggerenter){target=\_blank}を参照してください。

### `bool IsPlayerTriggerEnter()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPlayerTriggerEnter(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayertriggerenter){target=\_blank}を参照してください。

### `void EmitPlayerTriggerExit(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPlayerTriggerExit(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayertriggerexit){target=\_blank}を参照してください。

### `bool IsPlayerTriggerExit()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPlayerTriggerExit(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayertriggerexit){target=\_blank}を参照してください。

### `void EmitPlayerTriggerStay(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPlayerTriggerStay(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayertriggerstay){target=\_blank}を参照してください。

### `bool IsPlayerTriggerStay()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPlayerTriggerStay(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayertriggerstay){target=\_blank}を参照してください。

### `void EmitPlayerCollisionEnter(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPlayerCollisionEnter(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayercollisionenter){target=\_blank}を参照してください。

### `bool IsPlayerCollisionEnter()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPlayerCollisionEnter(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayercollisionenter){target=\_blank}を参照してください。

### `void EmitPlayerCollisionExit(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPlayerCollisionExit(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayercollisionexit){target=\_blank}を参照してください。

### `bool IsPlayerCollisionExit()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPlayerCollisionExit(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayercollisionexit){target=\_blank}を参照してください。

### `void EmitPlayerCollisionStay(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPlayerCollisionStay(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayercollisionstay){target=\_blank}を参照してください。

### `bool IsPlayerCollisionStay()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPlayerCollisionStay(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayercollisionstay){target=\_blank}を参照してください。

### `void EmitPlayerParticleCollision(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPlayerParticleCollision(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayerparticlecollision){target=\_blank}を参照してください。

### `bool IsPlayerParticleCollision()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPlayerParticleCollision(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayerparticlecollision){target=\_blank}を参照してください。

### `void EmitPlayerRespawn(VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnPlayerRespawn(VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayerrespawn){target=\_blank}を参照してください。

### `bool IsPlayerRespawn()`

Event Listener を所持している UdonSharpBehaviour から、 `OnPlayerRespawn(VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/event-nodes#onplayerrespawn){target=\_blank}を参照してください。

### `void EmitOwnershipRequest(VrcPlayerApi, VrcPlayerApi)`

Event Listener を購読している UdonSharpBehaviour に対し、 `OnOwnershipRequest(VrcPlayerApi, VrcPlayerApi)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/udon-networking#object-ownership){target=\_blank}を参照してください。  
**このイベントは、戻り値が `void` であるため、このイベントを元に発生元の Ownership の委譲を拒否することはできません**。

### `bool IsOwnershipRequest()`

Event Listener を所持している UdonSharpBehaviour から、 `OnOwnershipRequest(VrcPlayerApi, VrcPlayerApi)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetPlayerArg()` もしくは `GetRequestingPlayerArg()` にて、第 2 引数は `GetRequestedOwnerArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/udon-networking#object-ownership){target=\_blank}を参照してください。

### `void EmitMidiNoteOn(int, int, int)`

Event Listener を購読している UdonSharpBehaviour に対し、 `MidiNoteOn(int, int, int)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/midi#midinoteon){target=\_blank}を参照してください。

### `bool IsMidiNoteOn()`

Event Listener を所持している UdonSharpBehaviour から、 `MidiNoteOn(int, int, int)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetMidiChannelArg()` 、第 2 引数は `GetMidiNumberArg()`、第 3 引数は `GetMidiVelocityArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/midi#midinoteon){target=\_blank}を参照してください。

### `void EmitMidiNoteOff(int, int, int)`

Event Listener を購読している UdonSharpBehaviour に対し、 `MidiNoteOff(int, int, int)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/midi#midinoteoff){target=\_blank}を参照してください。

### `bool IsMidiNoteOff()`

Event Listener を所持している UdonSharpBehaviour から、 `MidiNoteOff(int, int, int)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetMidiChannelArg()` 、第 2 引数は `GetMidiNumberArg()`、第 3 引数は `GetMidiVelocityArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/midi#midinoteoff){target=\_blank}を参照してください。

### `void EmitMidiControlChange(int, int, int)`

Event Listener を購読している UdonSharpBehaviour に対し、 `MidiControlChange(int, int, int)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/midi#midicontrolchange){target=\_blank}を参照してください。

### `bool IsMidiControlChange()`

Event Listener を所持している UdonSharpBehaviour から、 `MidiControlChange(int, int, int)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetMidiChannelArg()` 、第 2 引数は `GetMidiNumberArg()`、第 3 引数は `GetMidiChangeValueArg()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/midi#midicontrolchange){target=\_blank}を参照してください。

### `void EmitInputJump(bool, UdonInputEventArgs)`

Event Listener を購読している UdonSharpBehaviour に対し、 `InputJump(bool, UdonInputEventArgs)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputjump){target=\_blank}を参照してください。

### `bool IsInputJump()`

Event Listener を所持している UdonSharpBehaviour から、 `InputJump(bool, UdonInputEventArgs)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetInputValueB()` 、第 2 引数は `GetUdonInputEventArgs()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputjump){target=\_blank}を参照してください。

### `void EmitInputUse(bool, UdonInputEventArgs)`

Event Listener を購読している UdonSharpBehaviour に対し、 `InputUse(bool, UdonInputEventArgs)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputuse){target=\_blank}を参照してください。

### `bool IsInputUse()`

Event Listener を所持している UdonSharpBehaviour から、 `InputUse(bool, UdonInputEventArgs)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetInputValueB()` 、第 2 引数は `GetUdonInputEventArgs()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputuse){target=\_blank}を参照してください。

### `void EmitInputGrab(bool, UdonInputEventArgs)`

Event Listener を購読している UdonSharpBehaviour に対し、 `InputGrab(bool, UdonInputEventArgs)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputgrab){target=\_blank}を参照してください。

### `bool IsInputGrab()`

Event Listener を所持している UdonSharpBehaviour から、 `InputGrab(bool, UdonInputEventArgs)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetInputValueB()` 、第 2 引数は `GetUdonInputEventArgs()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputgrab){target=\_blank}を参照してください。

### `void EmitInputDrop(bool, UdonInputEventArgs)`

Event Listener を購読している UdonSharpBehaviour に対し、 `InputDrop(bool, UdonInputEventArgs)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputdrop){target=\_blank}を参照してください。

### `bool IsInputDrop()`

Event Listener を所持している UdonSharpBehaviour から、 `InputDrop(bool, UdonInputEventArgs)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetInputValueB()` 、第 2 引数は `GetUdonInputEventArgs()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputdrop){target=\_blank}を参照してください。

### `void EmitInputMoveHorizontal(float, UdonInputEventArgs)`

Event Listener を購読している UdonSharpBehaviour に対し、 `InputMoveHorizontal(float, UdonInputEventArgs)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputmovehorizontal){target=\_blank}を参照してください。

### `bool IsInputMoveHorizontal()`

Event Listener を所持している UdonSharpBehaviour から、 `InputMoveHorizontal(float, UdonInputEventArgs)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetInputValueF()` 、第 2 引数は `GetUdonInputEventArgs()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputmovehorizontal){target=\_blank}を参照してください。

### `void EmitInputMoveVertical(float, UdonInputEventArgs)`

Event Listener を購読している UdonSharpBehaviour に対し、 `InputMoveVertical(float, UdonInputEventArgs)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputmovevertical){target=\_blank}を参照してください。

### `bool IsInputMoveVertical()`

Event Listener を所持している UdonSharpBehaviour から、 `InputMoveVertical(float, UdonInputEventArgs)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetInputValueF()` 、第 2 引数は `GetUdonInputEventArgs()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputmovevertical){target=\_blank}を参照してください。

### `void EmitInputLookHorizontal(float, UdonInputEventArgs)`

Event Listener を購読している UdonSharpBehaviour に対し、 `InputLookHorizontal(float, UdonInputEventArgs)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputlookhorizontal){target=\_blank}を参照してください。

### `bool IsInputLookHorizontal()`

Event Listener を所持している UdonSharpBehaviour から、 `InputLookHorizontal(float, UdonInputEventArgs)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetInputValueF()` 、第 2 引数は `GetUdonInputEventArgs()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputlookhorizontal){target=\_blank}を参照してください。

### `void EmitInputLookVertical(float, UdonInputEventArgs)`

Event Listener を購読している UdonSharpBehaviour に対し、 `InputLookVertical(float, UdonInputEventArgs)` が発生したことを通知します。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputlookvertical){target=\_blank}を参照してください。

### `bool IsInputLookVertical()`

Event Listener を所持している UdonSharpBehaviour から、 `InputLookVertical(float, UdonInputEventArgs)` が発生したかどうかを取得します。  
同じフレームにて発生していた場合は `True`、発生していなかった場合は `False` が返ります。  
このイベントにおける第 1 引数は、 `GetInputValueF()` 、第 2 引数は `GetUdonInputEventArgs()` にて取得可能です。  
イベントの詳細については、 [VRChat 公式ドキュメント](https://docs.vrchat.com/docs/input-events#inputlookvertical){target=\_blank}を参照してください。

### `void SetArgument(object)`

Event Listener を所持している UdonSharpBehaviour から、購読している UdonSharpBehaviour へ、イベント引数以外の引数を渡します。  
引数には、 Udon でサポートされているすべての型を渡すことが可能です。

### `object GetArgument()`

Event Listener を所持している UdonSharpBehaviour から、購読している UdonSharpBehaviour へ渡されたイベント引数以外の引数を取得します。  
使う場合は、通常、自身が欲しい型へキャストしてから行ってください。  
このとき、受け取る Event Listener のフィールドへ `RequestArgumentType(Type)` を付けることで、インスペクター上にてエラーを通知できます。
