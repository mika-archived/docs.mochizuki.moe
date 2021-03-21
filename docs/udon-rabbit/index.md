# Udon Rabbit

Udon Rabbit は、 VRChat SDK3 World で導入されたプログラミング言語 Udon および C# からのトランスパイルを行う UdonSharp を用いた、夏猫の作った Udon および UdonSharp パッケージ群です。  
ちょっとした便利なスクリプトを有償で配布しています。

なお、すべでのスクリプトにおいて、デモワールドを用意しているので、夏猫 (VRC: natsuneko_vrc) まで連絡を頂ければ、招待いたします。

## 製品一覧

### Interop

UdonRabbit の各製品およびその他の製品との相互運用性のためのコンポーネントです。  
このパッケージを導入および仕様に沿って実装することで、組み合わせて動作させることが可能になります。

### Kitsune

UdonRabbit の各製品にて使用されている共通の UdonSharp コンポーネントです。  
`UdonSyncAttribute` を用いない値の同期処理や変数の圧縮処理などが含まれています。

### Object Fitter

ワールド内に設置された衣装やアクセサリーをその場で試着し、位置やサイズの調整することが出来るようになる UdonSharp コンポーネントです。

### Synchronized Animator

ワールド固定の Particle Live や VRMV を、他の人と同期させることが出来るようになる UdonSharp コンポーネントです。
