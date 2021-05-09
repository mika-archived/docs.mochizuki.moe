---
title: Merge Animator Controllers
---

# Merge Animator Controllers

This page describes merging Animator Controllers with Asset Merger.  
Animator Controllers can also be a Unity generic one.

## Open the Editor

Asset Merger is implemented as an editor extension for Unity, so you will first need to open the dedicated editor.  
You can open Asset Merger Editor from `Mochizuki/VRChat/Asset Merger/Editor` in Unity menubar.

<figure>
  <img src="https://assets.mochizuki.moe/docs/asset-merger/open-editor.PNG" width="500px" data-zoomable="true">
</figure>

## Merge Animator Controllers

Once the dedicated editor is open, you can actually merge Animator Controllers.  
First, enter the number of Animator Controllers you want to merge in the `Size` of `Source Controllers`.

Example: If you want to two Animator Controllers, specify `2` to `Size` of `Source Controllers`.

<figure>
  <img src="https://assets.mochizuki.moe/docs/asset-merger/animator-controller-step-1.png" width="500px" data-zoomable="true">
</figure>

After specifying, there will increase below, so set the Animator Controllers you want to merge as shown in the following image.

<figure>
  <img src="https://assets.mochizuki.moe/docs/asset-merger/animator-controller-step-2.png" width="500px" data-zoomable="true">
</figure>

Finally, click the `Merge` button to start the merging process, and after the process is complete, the file save dialog will appear, and select the location where you want to save the merged file.

<!-- prettier-ignore-start -->
!!! note
    Asset Merge will not manipulate VRC Avatar Descriptor, you need to set Animator Controller manually.
<!-- prettier-ignore-end -->

Also, the merged Animator Controller is a Deep Copy, so it works by itself (without referencing to the old Animator Controllers).
