# `spacesBucketCorsConfiguration` Submodule <a name="`spacesBucketCorsConfiguration` Submodule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpacesBucketCorsConfiguration <a name="SpacesBucketCorsConfiguration" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration digitalocean_spaces_bucket_cors_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new SpacesBucketCorsConfiguration(Construct Scope, string Id, SpacesBucketCorsConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig">SpacesBucketCorsConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig">SpacesBucketCorsConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule">PutCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule"></a>

```csharp
private void PutCorsRule(IResolvable|SpacesBucketCorsConfigurationCorsRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpacesBucketCorsConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

SpacesBucketCorsConfiguration.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

SpacesBucketCorsConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

SpacesBucketCorsConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

SpacesBucketCorsConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpacesBucketCorsConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpacesBucketCorsConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpacesBucketCorsConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpacesBucketCorsConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList">SpacesBucketCorsConfigurationCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRuleInput">CorsRuleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRule"></a>

```csharp
public SpacesBucketCorsConfigurationCorsRuleList CorsRule { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList">SpacesBucketCorsConfigurationCorsRuleList</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRuleInput"></a>

```csharp
public IResolvable|SpacesBucketCorsConfigurationCorsRule[] CorsRuleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpacesBucketCorsConfigurationConfig <a name="SpacesBucketCorsConfigurationConfig" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new SpacesBucketCorsConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Bucket,
    IResolvable|SpacesBucketCorsConfigurationCorsRule[] CorsRule,
    string Region,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.bucket">Bucket</a></code> | <code>string</code> | Bucket ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.corsRule">CorsRule</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Bucket ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#bucket SpacesBucketCorsConfiguration#bucket}

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.corsRule"></a>

```csharp
public IResolvable|SpacesBucketCorsConfigurationCorsRule[] CorsRule { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#cors_rule SpacesBucketCorsConfiguration#cors_rule}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SpacesBucketCorsConfigurationCorsRule <a name="SpacesBucketCorsConfigurationCorsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new SpacesBucketCorsConfigurationCorsRule {
    string[] AllowedMethods,
    string[] AllowedOrigins,
    string[] AllowedHeaders = null,
    string[] ExposeHeaders = null,
    string Id = null,
    double MaxAgeSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#allowed_methods SpacesBucketCorsConfiguration#allowed_methods}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#allowed_origins SpacesBucketCorsConfiguration#allowed_origins}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#allowed_headers SpacesBucketCorsConfiguration#allowed_headers}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.exposeHeaders">ExposeHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#expose_headers SpacesBucketCorsConfiguration#expose_headers}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#max_age_seconds SpacesBucketCorsConfiguration#max_age_seconds}. |

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#allowed_methods SpacesBucketCorsConfiguration#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#allowed_origins SpacesBucketCorsConfiguration#allowed_origins}.

---

##### `AllowedHeaders`<sup>Optional</sup> <a name="AllowedHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#allowed_headers SpacesBucketCorsConfiguration#allowed_headers}.

---

##### `ExposeHeaders`<sup>Optional</sup> <a name="ExposeHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.exposeHeaders"></a>

```csharp
public string[] ExposeHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#expose_headers SpacesBucketCorsConfiguration#expose_headers}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxAgeSeconds`<sup>Optional</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/spaces_bucket_cors_configuration#max_age_seconds SpacesBucketCorsConfiguration#max_age_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpacesBucketCorsConfigurationCorsRuleList <a name="SpacesBucketCorsConfigurationCorsRuleList" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new SpacesBucketCorsConfigurationCorsRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get"></a>

```csharp
private SpacesBucketCorsConfigurationCorsRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.internalValue"></a>

```csharp
public IResolvable|SpacesBucketCorsConfigurationCorsRule[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>[]

---


### SpacesBucketCorsConfigurationCorsRuleOutputReference <a name="SpacesBucketCorsConfigurationCorsRuleOutputReference" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new SpacesBucketCorsConfigurationCorsRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetAllowedHeaders">ResetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetExposeHeaders">ResetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetMaxAgeSeconds">ResetMaxAgeSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedHeaders` <a name="ResetAllowedHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetAllowedHeaders"></a>

```csharp
private void ResetAllowedHeaders()
```

##### `ResetExposeHeaders` <a name="ResetExposeHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetExposeHeaders"></a>

```csharp
private void ResetExposeHeaders()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxAgeSeconds` <a name="ResetMaxAgeSeconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```csharp
private void ResetMaxAgeSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeadersInput">ExposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSecondsInput">MaxAgeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeaders">ExposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ExposeHeadersInput`<sup>Optional</sup> <a name="ExposeHeadersInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeadersInput"></a>

```csharp
public string[] ExposeHeadersInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxAgeSecondsInput`<sup>Optional</sup> <a name="MaxAgeSecondsInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```csharp
public double MaxAgeSecondsInput { get; }
```

- *Type:* double

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ExposeHeaders`<sup>Required</sup> <a name="ExposeHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeaders"></a>

```csharp
public string[] ExposeHeaders { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxAgeSeconds`<sup>Required</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SpacesBucketCorsConfigurationCorsRule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>

---



