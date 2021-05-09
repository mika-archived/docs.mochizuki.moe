---
title: Integration with Asset Merger
---

# Integration with Asset Merger

Asset Merger exports the various APIs so they can be used by external tools.  
By using this, you can leave complex animation merging to Asset Merger, and work without straying from your main task.

## How to use

1. In the Assembly Definition File, add `AssetMerger.asmdef` to a references
2. Reload your IDEs
3. Start Coding

## API Examples

### Merge

In the following three examples, a new object is created and the values are merged into it, but it is also possible to merge into the original object.

#### Merge Animator Controllers

```csharp
var controllers = new AnimatorController[]; // replace to array of animator controllers

var controller = new AnimatorController(); // first, create a new animator controller
AssetDatabase.CreateAsset(controller, "/path/to/animator-controller.anim"); // second, save it

controller.MergeControllers(controllers); // merge all controllers to controller

AssetDatabase.SaveAssets(); // finally, save it
```

#### Merge Expression Parameters

```csharp
var parameters = new VRCExpressionParameters[]; // replace to array of expression parameters

var parameter = CreateInstance<VRCExpressionParameters>(); // first, create a new parameter
parameter.InitExpressionParameters(true); // initialize parameters with populate default params

parameter.MergeParameters(parameters); // merge all parameters to parameter

AssetDatabase.CreateAsset(parameter, "/path/to/parameters.asset"); // finally, save it
```

#### Merge Expressions Menus

```csharp
var expressions = new VRCExpressionsMenu[]; // replace to array of expressions menus

var expr = CreateInstance<VRCExpressionsMenu>();  // first, create a new parameter

expr.MergeExpressions(expressions); // merge all expressions to expr

AssetDatabase.CreateAsset(expr, "/path/to/expressions.asset"); // finally, save it
```

### Expression Parameters

In addition to the above, `ExpressionParametersExtension` also provides the following APIs:

#### Checks if the parameter already exists

```csharp
var expr = CreateInstance<VRCExpressionParameters>();

expr.HasParameter("VRCEmote"); // => true
expr.HasParameter("IsLocal");  // => false
```

#### Add a new parameter

```csharp
var expr = CreateInstance<VRCExpressionParameters>();
var parameter = new VRCExpressionParameters.Parameter
{
    name = "EnableCostume",
    valueType = VRCExpressionParameters.ValueType.Bool,
    defaultValue = false,
    saved = true,
};

expr.AddParameter(parameter);
```
