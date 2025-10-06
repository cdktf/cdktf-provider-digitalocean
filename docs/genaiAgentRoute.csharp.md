# `genaiAgentRoute` Submodule <a name="`genaiAgentRoute` Submodule" id="@cdktf/provider-digitalocean.genaiAgentRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiAgentRoute <a name="GenaiAgentRoute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_agent_route digitalocean_genai_agent_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiAgentRoute(Construct Scope, string Id, GenaiAgentRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig">GenaiAgentRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig">GenaiAgentRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetIfCase">ResetIfCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRollback">ResetRollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRouteName">ResetRouteName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIfCase` <a name="ResetIfCase" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetIfCase"></a>

```csharp
private void ResetIfCase()
```

##### `ResetRollback` <a name="ResetRollback" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRollback"></a>

```csharp
private void ResetRollback()
```

##### `ResetRouteName` <a name="ResetRouteName" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRouteName"></a>

```csharp
private void ResetRouteName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiAgentRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiAgentRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiAgentRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiAgentRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiAgentRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GenaiAgentRoute resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenaiAgentRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenaiAgentRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_agent_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GenaiAgentRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuidInput">ChildAgentUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCaseInput">IfCaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuidInput">ParentAgentUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollbackInput">RollbackInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeNameInput">RouteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuid">ChildAgentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCase">IfCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuid">ParentAgentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollback">Rollback</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeName">RouteName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `ChildAgentUuidInput`<sup>Optional</sup> <a name="ChildAgentUuidInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuidInput"></a>

```csharp
public string ChildAgentUuidInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IfCaseInput`<sup>Optional</sup> <a name="IfCaseInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCaseInput"></a>

```csharp
public string IfCaseInput { get; }
```

- *Type:* string

---

##### `ParentAgentUuidInput`<sup>Optional</sup> <a name="ParentAgentUuidInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuidInput"></a>

```csharp
public string ParentAgentUuidInput { get; }
```

- *Type:* string

---

##### `RollbackInput`<sup>Optional</sup> <a name="RollbackInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollbackInput"></a>

```csharp
public bool|IResolvable RollbackInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RouteNameInput`<sup>Optional</sup> <a name="RouteNameInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeNameInput"></a>

```csharp
public string RouteNameInput { get; }
```

- *Type:* string

---

##### `ChildAgentUuid`<sup>Required</sup> <a name="ChildAgentUuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuid"></a>

```csharp
public string ChildAgentUuid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IfCase`<sup>Required</sup> <a name="IfCase" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCase"></a>

```csharp
public string IfCase { get; }
```

- *Type:* string

---

##### `ParentAgentUuid`<sup>Required</sup> <a name="ParentAgentUuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuid"></a>

```csharp
public string ParentAgentUuid { get; }
```

- *Type:* string

---

##### `Rollback`<sup>Required</sup> <a name="Rollback" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollback"></a>

```csharp
public bool|IResolvable Rollback { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RouteName`<sup>Required</sup> <a name="RouteName" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeName"></a>

```csharp
public string RouteName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiAgentRouteConfig <a name="GenaiAgentRouteConfig" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiAgentRouteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChildAgentUuid,
    string ParentAgentUuid,
    string Id = null,
    string IfCase = null,
    bool|IResolvable Rollback = null,
    string RouteName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.childAgentUuid">ChildAgentUuid</a></code> | <code>string</code> | The UUID of the child agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.parentAgentUuid">ParentAgentUuid</a></code> | <code>string</code> | The UUID of the parent agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_agent_route#id GenaiAgentRoute#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.ifCase">IfCase</a></code> | <code>string</code> | if-case condition for the route. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.rollback">Rollback</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_agent_route#rollback GenaiAgentRoute#rollback}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.routeName">RouteName</a></code> | <code>string</code> | A name for the route. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ChildAgentUuid`<sup>Required</sup> <a name="ChildAgentUuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.childAgentUuid"></a>

```csharp
public string ChildAgentUuid { get; set; }
```

- *Type:* string

The UUID of the child agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_agent_route#child_agent_uuid GenaiAgentRoute#child_agent_uuid}

---

##### `ParentAgentUuid`<sup>Required</sup> <a name="ParentAgentUuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.parentAgentUuid"></a>

```csharp
public string ParentAgentUuid { get; set; }
```

- *Type:* string

The UUID of the parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_agent_route#parent_agent_uuid GenaiAgentRoute#parent_agent_uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_agent_route#id GenaiAgentRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IfCase`<sup>Optional</sup> <a name="IfCase" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.ifCase"></a>

```csharp
public string IfCase { get; set; }
```

- *Type:* string

if-case condition for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_agent_route#if_case GenaiAgentRoute#if_case}

---

##### `Rollback`<sup>Optional</sup> <a name="Rollback" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.rollback"></a>

```csharp
public bool|IResolvable Rollback { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_agent_route#rollback GenaiAgentRoute#rollback}.

---

##### `RouteName`<sup>Optional</sup> <a name="RouteName" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.routeName"></a>

```csharp
public string RouteName { get; set; }
```

- *Type:* string

A name for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_agent_route#route_name GenaiAgentRoute#route_name}

---



