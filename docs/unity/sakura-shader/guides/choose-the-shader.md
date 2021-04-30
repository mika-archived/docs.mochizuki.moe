---
title: Choose the Shader
---

# Choose the Shader

Sakura Shader has several different types of shaders, each with its own implementation of features for specific applications.

## Lyrics

Lyrics Shader is essentially a shader designed to display lyrics in Particle Live / VRMV.  
This shader includes the features for partial display of 3D objects, outlines, rotation without Transform, and others.  
If you need the following features, use this shader:

-   want to display lyrics
-   want to add a little expression when displaying the objects
-   want to animate with shaders

## Particles

Particles Shader is essentially a shader designed to be assigned to Particle System themselves.  
It is possible to use multiple textures in one Particle System.  
If you need the following features, use this shader:

-   want to use the index value of a specific texture array depending on the Vertex Input value
-   want to use shaders that does not use geometry shader stage

## ScreenFX

ScreenFX Shader is what is called a vision jack or vision hack.  
If you need the following features, use this shader:

-   want to produce a specific effect regardless of the direction and/or angles the player is facing

## Skybox

Skybox Shader is essentially a shader designed to represent Skybox within avatars and specifies objects.  
If you need the following features, use this shader:

-   want to display the skybox in the avatar or specific objects

## Stencil Write

Stencil Write Shader is essentially a shader designed to hide certain objects using stencil feature.  
If you need the following features, use this shader:

-   want to show and/or hide GameObject (such as Avatar) without switching their `IsActive` property

## Unlit

Unlit Shader has the same functionally as the regular Unity Unlit shader.  
This shader is only supports Stencil, so if you don't want to use the other shaders, but want to use Sakura Shader, you can use this shader.
