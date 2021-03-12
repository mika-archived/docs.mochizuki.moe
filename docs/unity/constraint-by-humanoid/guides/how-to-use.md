---
title: Constraint by Humanoid の使い方
---

# Constraint by Humanoid の使い方

このページでは、 Constraint by Humanoid の使い方を説明します。

## 専用エディターを開く

Constraint by Humanoid はエディター拡張機能と実装されているため、まずは専用エディターを開く必要があります。  
専用エディターは Unity のメニューから、 `Mochizuki/Constraint by Humanoid/Editor` から開くことが出来ます。

<figure>
  <img src="https://assets.mochizuki.moe/docs/constraint-by-humanoid/open-editor.PNG" width="450px" data-zoomable="true">
</figure>

## 1. 対象の Humanoid Rig の設定

Constraint by Humanoid では、ある Humanoid Rig A の動きを Humanoid Rig B へとコピーするのに特化しています。  
まずは、コピー元である Humanoid Rig を設定します。  
一般的な人型アバターであれば、 Humanoid Rig に適した形になっているので、気にする必要はありません。

コピー元の Rig を、 `Source GameObject` へと、コピー先の Rig を `Destination GameObject` へと設定してください。

## 2. 除外するボーンの設定

Constraint by Humanoid では、初期設定ではすべてのボーンの動きをコピーします。  
そのため、例えば、腰より下は動かさずに固定のポーズをさせたままにしたい、等の場合は、対象となるボーンを除外する必要があります。

例えば、腰より下を動かしたくない場合は、下の画像のように GameObject を選択し、四角が表示されている範囲へドラッグアンドドロップします。

<figure>
  <img src="https://assets.mochizuki.moe/docs/constraint-by-humanoid/configure-excludes.png" width="450px" data-zoomable="true">
</figure>

全身の動きをコピーしたい場合、上記操作を行う必要はありません。

## 3. 設定する Constraint の種類の選択

次は、どの種類の Constraint を自動設定するかを選びます。  
種類毎にどのような動作をするかは以下の通りです。

| IConstraint                                                                                                         | 動作                                                                                      |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`AimConstraint`](https://docs.unity3d.com/ScriptReference/Animations.AimConstraint.html){target=\_blank}           | 元となる GameObject の方向へ、対象の GameObject を回転させます。                          |
| [`LookAtConstraint`](https://docs.unity3d.com/ScriptReference/Animations.LookAtConstraint.html){target=\_blank}     | 元となる GameObject の方向へ、対象の GameObject を回転させます。 Z 軸を基準に回転します。 |
| [`ParentConstraint`](https://docs.unity3d.com/ScriptReference/Animations.ParentConstraint.html){target=\_blank}     | 元となる GameObject の子として、対象の GameObject を回転および移動させます。              |
| [`PositionConstraint`](https://docs.unity3d.com/ScriptReference/Animations.PositionConstraint.html){target=\_blank} | 元となる GameObject の方向へ、対象の GameObject を移動させます。                          |
| [`RotationConstraint`](https://docs.unity3d.com/ScriptReference/Animations.RotationConstraint.html){target=\_blank} | 元となる GameObject と同じように、対象の GameObject を回転させます。                      |
| [`ScaleConstraint`](https://docs.unity3d.com/ja/2018.4/Manual/class-ScaleConstraint.html){target=\_blank}           | 元となる GameObject のスケールに合わせて、対象の GameObject のサイズを変更します。        |

## 4. 変更を適用

最後に、「変更を適用」ボタンを押下することで、対象となったボーンに対し、 Constraint が設定されます。  
自動で適用される各種値は以下の通りです。

-   Sources には Source GameObject の対応する GameObject が設定される
    -   Weight には 1 が設定される
-   各 Constraint は、 Activate された状態になる
    -   ただし Lock はされていない
