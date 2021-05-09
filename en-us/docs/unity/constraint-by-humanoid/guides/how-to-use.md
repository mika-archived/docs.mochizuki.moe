# How to Use

This document describes how to use Constraint by Humanoid by Natsuneko Laboratory.

## Open the Editor

Constraint by Humanoid is implemented as an editor extension for Unity, so you will first need to open the dedicated editor.  
You can open the Editor from `Mochizuki/Constraint by Humanoid/Editor` in Unity menubar.

<figure>
  <img src="https://assets.mochizuki.moe/docs/constraint-by-humanoid/open-editor.PNG" width="450px" data-zoomable="true">
</figure>

## 1. Configure Humanoid Rigs

Constraint by Humanoid specializes in copying the movements of a Humanoid Rig A to a Humanoid Rig B.
First, you need to set up the Humanoid Rig to be copied from.
If you have a regular humanoid avatar, you don't need to worry about it, as it is shaped to fit the Humanoid Rig.

Set the source Rig to the `Source GameObject` and the destination Rig to the `Destination GameObject`.

## 2. Configure Exclude Bones

Constraint by Humanoid copies the movement of all bones by default.
So, for example, if you want to keep a fixed pose without moving anything below the waist, you need to exclude the target bones.

For example, if you don't want to move anything below the waist, select the GameObject as shown in the image below, and drag and drop it to the area indicated by the square.

<figure>
  <img src="https://assets.mochizuki.moe/docs/constraint-by-humanoid/configure-excludes.png" width="450px" data-zoomable="true">
</figure>

If you want to copy the movements of the entire body, you do not need to perform the above operation.

## 3. Select the type of Constraint

The next step is to select which type of Constraint you want to set automatically.  
The behavior of each type is shown below.

| IConstraint                                                                                                         | 動作                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`AimConstraint`](https://docs.unity3d.com/ScriptReference/Animations.AimConstraint.html){target=\_blank}           | Constrains the orientation of an object relative to the position of one or more source objects, such that the object is facing the average position of the sources.                                                                                  |
| [`LookAtConstraint`](https://docs.unity3d.com/ScriptReference/Animations.LookAtConstraint.html){target=\_blank}     | Constrains the orientation of an object relative to the position of one or more source objects, such that the object is facing the average position of the sources. The LookAtConstraint is a simplified AimConstraint typically used with a Camera. |
| [`ParentConstraint`](https://docs.unity3d.com/ScriptReference/Animations.ParentConstraint.html){target=\_blank}     | Constrains the orientation and translation of an object to one or more source objects. The constrained object behaves as if it is in the hierarchy of the sources.                                                                                   |
| [`PositionConstraint`](https://docs.unity3d.com/ScriptReference/Animations.PositionConstraint.html){target=\_blank} | Constrains the position of an object relative to the position of one or more source objects.                                                                                                                                                         |
| [`RotationConstraint`](https://docs.unity3d.com/ScriptReference/Animations.RotationConstraint.html){target=\_blank} | Constrains the rotation of an object relative to the rotation of one or more source objects.                                                                                                                                                         |
| [`ScaleConstraint`](https://docs.unity3d.com/ja/2018.4/Manual/class-ScaleConstraint.html){target=\_blank}           | Constrains the scale of an object relative to the scale of one or more source objects.                                                                                                                                                               |

## 4. Apply Changes

Finally, by clicking the "Apply changes" button, the Constraint will be set for the target bone.  
The values that will be automatically applied are as follows:

-   Sources is set to the corresponding GameObject of the Source GameObject
    -   Weight is set to 1
-   Each Constraint will be Activated
    -   But not locked
