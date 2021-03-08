---
title: Fukidashi System の設定方法・使い方
---

# Fukidashi System の設定方法・使い方

このページでは、 Fukidashi System でアバターにメッセージカードを取り付けるまでの手順と、 VRChat 内での表示方法を解説します。

## 専用エディターを開く

Fukidashi System では、 Avatars 3.0 に合わせて、各種必要なアセットを生成する必要があり、そのためのエディター拡張を付属しています。  
専用エディターは Unity のメニューから、`Mochizuki/VRChat/Fukidashi System/Editor` から開くことが出来ます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/fukidashi-system/open-editor.png" width="500px" >
</figure>

## アバターの設定

次に、アバターへと Fukidashi System の組み込みを行います。  
まず、開いたエディターの `VRC Avatar Descriptor` とある場所に、アバターそのもの (`VRC Avatar Descriptor` がアタッチされた GameObject) を設定してください。  
多くの場合は、特に意識することなく、アバターそのものを設定すれば問題ありません。

<figure>
  <img src="https://assets.mochizuki.moe/docs/fukidashi-system/configure-avatar.png" width="500px" >
</figure>

次に、メッセージボードを表示する場所に、空の `Game Object` を作成します。  
頭以外に設置する場合は、 `Parent Constraint` などを用いて、何らかのボーンの下に設置することを推奨します。  
頭に設置する場合には、 `Head` ボーンよりしたのどこかに設置してください。

設置が終わったら、先ほどと同様、 `Message Board Parent` の場所に `Game Object` を設定して下さい。

それぞれの設定が終わったら、任意でオプションを設定します。  
初期値はすべて「上書きする (チェックされていない)」になっています。  
各オプションの動作は以下の通りです。

| オプション名                                | 動作                                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Merge with existing Animator Controller`   | アバターの Playable Layers の FX レイヤーがすでに設定されている場合、設定をマージするかどうか    |
| `Merge with existing Expressions Menu`      | アバターの Expressions が設定されている場合、 `Expressions Menu` の設定をマージするかどうか      |
| `Merge with existing Expression Parameters` | アバターの Expressions が設定されている場合、 `Expression Parameters` の設定をマージするかどうか |

なお、全てのオプションについて、極力既存の動作について影響がないようにマージしますが、全てが正常に動くとは限りませんので、ご了承ください。  
設定が終わったら、 `Generate Assets and Apply Changes` をクリックします。  
クリックすると、途中何回かファイル保存・フォルダー選択ダイアログが出るので、それぞれ保存したい場所を選択してください。  
生成されるのは以下のファイルです。

1. `Expression Parameters`
2. `Animation Clip` \* 16
3. `Animator Controller`
4. `Expressions Menu` (SubMenu) \* 3
5. `Expressions Menu` (MainMenu)

設定がうまくいけば、設定した場所にメッセージカードが表示されています。

## 削除方法

設定をやり直したい、必要なくなった、などの理由でアバターから Fukidashi System を取り除くには、以下の操作を行います。

1. 設置された `Message Board` GameObject を削除
2. (必要なければ) 各種からの GameObject も削除
3. FX Layer の Animator Controller を元に戻す
4. Expressions の各項目を元に戻す
