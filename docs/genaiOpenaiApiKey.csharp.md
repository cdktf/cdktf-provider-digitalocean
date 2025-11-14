# `genaiOpenaiApiKey` Submodule <a name="`genaiOpenaiApiKey` Submodule" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiOpenaiApiKey <a name="GenaiOpenaiApiKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key digitalocean_genai_openai_api_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiOpenaiApiKey(Construct Scope, string Id, GenaiOpenaiApiKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig">GenaiOpenaiApiKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig">GenaiOpenaiApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel">PutModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetModel">ResetModel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutModel` <a name="PutModel" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel"></a>

```csharp
private void PutModel(IResolvable|GenaiOpenaiApiKeyModel[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetModel` <a name="ResetModel" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetModel"></a>

```csharp
private void ResetModel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiOpenaiApiKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiOpenaiApiKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiOpenaiApiKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiOpenaiApiKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenaiOpenaiApiKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenaiOpenaiApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GenaiOpenaiApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.deletedAt">DeletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.model">Model</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList">GenaiOpenaiApiKeyModelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.modelInput">ModelInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.deletedAt"></a>

```csharp
public string DeletedAt { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.model"></a>

```csharp
public GenaiOpenaiApiKeyModelList Model { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList">GenaiOpenaiApiKeyModelList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.modelInput"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModel[] ModelInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiOpenaiApiKeyConfig <a name="GenaiOpenaiApiKeyConfig" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiOpenaiApiKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiKey,
    string Name,
    string Id = null,
    IResolvable|GenaiOpenaiApiKeyModel[] Model = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | The OpenAI API key. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.name">Name</a></code> | <code>string</code> | A name for the API key. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#id GenaiOpenaiApiKey#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.model">Model</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]</code> | model block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

The OpenAI API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#api_key GenaiOpenaiApiKey#api_key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#id GenaiOpenaiApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.model"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModel[] Model { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]

model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#model GenaiOpenaiApiKey#model}

---

### GenaiOpenaiApiKeyModel <a name="GenaiOpenaiApiKeyModel" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiOpenaiApiKeyModel {
    IResolvable|GenaiOpenaiApiKeyModelAgreement[] Agreement = null,
    string InferenceName = null,
    string InferenceVersion = null,
    bool|IResolvable IsFoundational = null,
    string Name = null,
    string ParentUuid = null,
    string Provider = null,
    bool|IResolvable UploadComplete = null,
    string Url = null,
    string[] Usecases = null,
    IResolvable|GenaiOpenaiApiKeyModelVersions[] Versions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.agreement">Agreement</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]</code> | agreement block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceName">InferenceName</a></code> | <code>string</code> | Inference name of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceVersion">InferenceVersion</a></code> | <code>string</code> | Infernce version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.isFoundational">IsFoundational</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates if the Model Base is foundational. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.name">Name</a></code> | <code>string</code> | Name of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.parentUuid">ParentUuid</a></code> | <code>string</code> | Parent UUID of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.provider">Provider</a></code> | <code>string</code> | Provider of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.uploadComplete">UploadComplete</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates if the Model upload is complete. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.url">Url</a></code> | <code>string</code> | URL of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.usecases">Usecases</a></code> | <code>string[]</code> | List of Usecases for the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.versions">Versions</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]</code> | versions block. |

---

##### `Agreement`<sup>Optional</sup> <a name="Agreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.agreement"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModelAgreement[] Agreement { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]

agreement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#agreement GenaiOpenaiApiKey#agreement}

---

##### `InferenceName`<sup>Optional</sup> <a name="InferenceName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceName"></a>

```csharp
public string InferenceName { get; set; }
```

- *Type:* string

Inference name of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#inference_name GenaiOpenaiApiKey#inference_name}

---

##### `InferenceVersion`<sup>Optional</sup> <a name="InferenceVersion" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceVersion"></a>

```csharp
public string InferenceVersion { get; set; }
```

- *Type:* string

Infernce version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#inference_version GenaiOpenaiApiKey#inference_version}

---

##### `IsFoundational`<sup>Optional</sup> <a name="IsFoundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.isFoundational"></a>

```csharp
public bool|IResolvable IsFoundational { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates if the Model Base is foundational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#is_foundational GenaiOpenaiApiKey#is_foundational}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `ParentUuid`<sup>Optional</sup> <a name="ParentUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.parentUuid"></a>

```csharp
public string ParentUuid { get; set; }
```

- *Type:* string

Parent UUID of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#parent_uuid GenaiOpenaiApiKey#parent_uuid}

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

Provider of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#provider GenaiOpenaiApiKey#provider}

---

##### `UploadComplete`<sup>Optional</sup> <a name="UploadComplete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.uploadComplete"></a>

```csharp
public bool|IResolvable UploadComplete { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates if the Model upload is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#upload_complete GenaiOpenaiApiKey#upload_complete}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

URL of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#url GenaiOpenaiApiKey#url}

---

##### `Usecases`<sup>Optional</sup> <a name="Usecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.usecases"></a>

```csharp
public string[] Usecases { get; set; }
```

- *Type:* string[]

List of Usecases for the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#usecases GenaiOpenaiApiKey#usecases}

---

##### `Versions`<sup>Optional</sup> <a name="Versions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.versions"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModelVersions[] Versions { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#versions GenaiOpenaiApiKey#versions}

---

### GenaiOpenaiApiKeyModelAgreement <a name="GenaiOpenaiApiKeyModelAgreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiOpenaiApiKeyModelAgreement {
    string Description = null,
    string Name = null,
    string Url = null,
    string Uuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.description">Description</a></code> | <code>string</code> | Description of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.name">Name</a></code> | <code>string</code> | Name of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.url">Url</a></code> | <code>string</code> | URL of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.uuid">Uuid</a></code> | <code>string</code> | UUID of the agreement. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#description GenaiOpenaiApiKey#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

URL of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#url GenaiOpenaiApiKey#url}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

UUID of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#uuid GenaiOpenaiApiKey#uuid}

---

### GenaiOpenaiApiKeyModelVersions <a name="GenaiOpenaiApiKeyModelVersions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiOpenaiApiKeyModelVersions {
    double Major = null,
    double Minor = null,
    double Patch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.major">Major</a></code> | <code>double</code> | Major version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.minor">Minor</a></code> | <code>double</code> | Minor version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.patch">Patch</a></code> | <code>double</code> | Patch version of the model. |

---

##### `Major`<sup>Optional</sup> <a name="Major" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.major"></a>

```csharp
public double Major { get; set; }
```

- *Type:* double

Major version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#major GenaiOpenaiApiKey#major}

---

##### `Minor`<sup>Optional</sup> <a name="Minor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.minor"></a>

```csharp
public double Minor { get; set; }
```

- *Type:* double

Minor version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#minor GenaiOpenaiApiKey#minor}

---

##### `Patch`<sup>Optional</sup> <a name="Patch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.patch"></a>

```csharp
public double Patch { get; set; }
```

- *Type:* double

Patch version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_openai_api_key#patch GenaiOpenaiApiKey#patch}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiOpenaiApiKeyModelAgreementList <a name="GenaiOpenaiApiKeyModelAgreementList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiOpenaiApiKeyModelAgreementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get"></a>

```csharp
private GenaiOpenaiApiKeyModelAgreementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.internalValue"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModelAgreement[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]

---


### GenaiOpenaiApiKeyModelAgreementOutputReference <a name="GenaiOpenaiApiKeyModelAgreementOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiOpenaiApiKeyModelAgreementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUuid"></a>

```csharp
private void ResetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModelAgreement InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>

---


### GenaiOpenaiApiKeyModelList <a name="GenaiOpenaiApiKeyModelList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiOpenaiApiKeyModelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get"></a>

```csharp
private GenaiOpenaiApiKeyModelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.internalValue"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModel[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>[]

---


### GenaiOpenaiApiKeyModelOutputReference <a name="GenaiOpenaiApiKeyModelOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiOpenaiApiKeyModelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement">PutAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions">PutVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetAgreement">ResetAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceName">ResetInferenceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceVersion">ResetInferenceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetIsFoundational">ResetIsFoundational</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetParentUuid">ResetParentUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetProvider">ResetProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUploadComplete">ResetUploadComplete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUsecases">ResetUsecases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetVersions">ResetVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgreement` <a name="PutAgreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement"></a>

```csharp
private void PutAgreement(IResolvable|GenaiOpenaiApiKeyModelAgreement[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]

---

##### `PutVersions` <a name="PutVersions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions"></a>

```csharp
private void PutVersions(IResolvable|GenaiOpenaiApiKeyModelVersions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]

---

##### `ResetAgreement` <a name="ResetAgreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetAgreement"></a>

```csharp
private void ResetAgreement()
```

##### `ResetInferenceName` <a name="ResetInferenceName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceName"></a>

```csharp
private void ResetInferenceName()
```

##### `ResetInferenceVersion` <a name="ResetInferenceVersion" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceVersion"></a>

```csharp
private void ResetInferenceVersion()
```

##### `ResetIsFoundational` <a name="ResetIsFoundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetIsFoundational"></a>

```csharp
private void ResetIsFoundational()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParentUuid` <a name="ResetParentUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetParentUuid"></a>

```csharp
private void ResetParentUuid()
```

##### `ResetProvider` <a name="ResetProvider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetProvider"></a>

```csharp
private void ResetProvider()
```

##### `ResetUploadComplete` <a name="ResetUploadComplete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUploadComplete"></a>

```csharp
private void ResetUploadComplete()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUsecases` <a name="ResetUsecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUsecases"></a>

```csharp
private void ResetUsecases()
```

##### `ResetVersions` <a name="ResetVersions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetVersions"></a>

```csharp
private void ResetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreement">Agreement</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList">GenaiOpenaiApiKeyModelAgreementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList">GenaiOpenaiApiKeyModelVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreementInput">AgreementInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceNameInput">InferenceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersionInput">InferenceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundationalInput">IsFoundationalInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuidInput">ParentUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadCompleteInput">UploadCompleteInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecasesInput">UsecasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versionsInput">VersionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceName">InferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersion">InferenceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundational">IsFoundational</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuid">ParentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadComplete">UploadComplete</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecases">Usecases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Agreement`<sup>Required</sup> <a name="Agreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreement"></a>

```csharp
public GenaiOpenaiApiKeyModelAgreementList Agreement { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList">GenaiOpenaiApiKeyModelAgreementList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versions"></a>

```csharp
public GenaiOpenaiApiKeyModelVersionsList Versions { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList">GenaiOpenaiApiKeyModelVersionsList</a>

---

##### `AgreementInput`<sup>Optional</sup> <a name="AgreementInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreementInput"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModelAgreement[] AgreementInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement">GenaiOpenaiApiKeyModelAgreement</a>[]

---

##### `InferenceNameInput`<sup>Optional</sup> <a name="InferenceNameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceNameInput"></a>

```csharp
public string InferenceNameInput { get; }
```

- *Type:* string

---

##### `InferenceVersionInput`<sup>Optional</sup> <a name="InferenceVersionInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersionInput"></a>

```csharp
public string InferenceVersionInput { get; }
```

- *Type:* string

---

##### `IsFoundationalInput`<sup>Optional</sup> <a name="IsFoundationalInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundationalInput"></a>

```csharp
public bool|IResolvable IsFoundationalInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentUuidInput`<sup>Optional</sup> <a name="ParentUuidInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuidInput"></a>

```csharp
public string ParentUuidInput { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `UploadCompleteInput`<sup>Optional</sup> <a name="UploadCompleteInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadCompleteInput"></a>

```csharp
public bool|IResolvable UploadCompleteInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsecasesInput`<sup>Optional</sup> <a name="UsecasesInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecasesInput"></a>

```csharp
public string[] UsecasesInput { get; }
```

- *Type:* string[]

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versionsInput"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModelVersions[] VersionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]

---

##### `InferenceName`<sup>Required</sup> <a name="InferenceName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceName"></a>

```csharp
public string InferenceName { get; }
```

- *Type:* string

---

##### `InferenceVersion`<sup>Required</sup> <a name="InferenceVersion" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersion"></a>

```csharp
public string InferenceVersion { get; }
```

- *Type:* string

---

##### `IsFoundational`<sup>Required</sup> <a name="IsFoundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundational"></a>

```csharp
public bool|IResolvable IsFoundational { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentUuid`<sup>Required</sup> <a name="ParentUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuid"></a>

```csharp
public string ParentUuid { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `UploadComplete`<sup>Required</sup> <a name="UploadComplete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadComplete"></a>

```csharp
public bool|IResolvable UploadComplete { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Usecases`<sup>Required</sup> <a name="Usecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecases"></a>

```csharp
public string[] Usecases { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModel InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel">GenaiOpenaiApiKeyModel</a>

---


### GenaiOpenaiApiKeyModelVersionsList <a name="GenaiOpenaiApiKeyModelVersionsList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiOpenaiApiKeyModelVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get"></a>

```csharp
private GenaiOpenaiApiKeyModelVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.internalValue"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModelVersions[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>[]

---


### GenaiOpenaiApiKeyModelVersionsOutputReference <a name="GenaiOpenaiApiKeyModelVersionsOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiOpenaiApiKeyModelVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMajor">ResetMajor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMinor">ResetMinor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetPatch">ResetPatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMajor` <a name="ResetMajor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMajor"></a>

```csharp
private void ResetMajor()
```

##### `ResetMinor` <a name="ResetMinor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMinor"></a>

```csharp
private void ResetMinor()
```

##### `ResetPatch` <a name="ResetPatch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetPatch"></a>

```csharp
private void ResetPatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.majorInput">MajorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minorInput">MinorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patchInput">PatchInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.major">Major</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minor">Minor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patch">Patch</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MajorInput`<sup>Optional</sup> <a name="MajorInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.majorInput"></a>

```csharp
public double MajorInput { get; }
```

- *Type:* double

---

##### `MinorInput`<sup>Optional</sup> <a name="MinorInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minorInput"></a>

```csharp
public double MinorInput { get; }
```

- *Type:* double

---

##### `PatchInput`<sup>Optional</sup> <a name="PatchInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patchInput"></a>

```csharp
public double PatchInput { get; }
```

- *Type:* double

---

##### `Major`<sup>Required</sup> <a name="Major" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.major"></a>

```csharp
public double Major { get; }
```

- *Type:* double

---

##### `Minor`<sup>Required</sup> <a name="Minor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minor"></a>

```csharp
public double Minor { get; }
```

- *Type:* double

---

##### `Patch`<sup>Required</sup> <a name="Patch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patch"></a>

```csharp
public double Patch { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenaiOpenaiApiKeyModelVersions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions">GenaiOpenaiApiKeyModelVersions</a>

---



