# `databaseReplica` Submodule <a name="`databaseReplica` Submodule" id="@cdktf/provider-digitalocean.databaseReplica"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseReplica <a name="DatabaseReplica" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica digitalocean_database_replica}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseReplica(Construct Scope, string Id, DatabaseReplicaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig">DatabaseReplicaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig">DatabaseReplicaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetPrivateNetworkUuid">ResetPrivateNetworkUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetStorageSizeMib">ResetStorageSizeMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateNetworkUuid` <a name="ResetPrivateNetworkUuid" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetPrivateNetworkUuid"></a>

```csharp
private void ResetPrivateNetworkUuid()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetStorageSizeMib` <a name="ResetStorageSizeMib" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetStorageSizeMib"></a>

```csharp
private void ResetStorageSizeMib()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseReplica resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseReplica.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseReplica.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseReplica.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseReplica.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseReplica resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseReplica to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseReplica that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseReplica to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.privateHost">PrivateHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.privateUri">PrivateUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.privateNetworkUuidInput">PrivateNetworkUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.sizeInput">SizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.storageSizeMibInput">StorageSizeMibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.privateNetworkUuid">PrivateNetworkUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.storageSizeMib">StorageSizeMib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrivateHost`<sup>Required</sup> <a name="PrivateHost" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.privateHost"></a>

```csharp
public string PrivateHost { get; }
```

- *Type:* string

---

##### `PrivateUri`<sup>Required</sup> <a name="PrivateUri" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.privateUri"></a>

```csharp
public string PrivateUri { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateNetworkUuidInput`<sup>Optional</sup> <a name="PrivateNetworkUuidInput" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.privateNetworkUuidInput"></a>

```csharp
public string PrivateNetworkUuidInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.sizeInput"></a>

```csharp
public string SizeInput { get; }
```

- *Type:* string

---

##### `StorageSizeMibInput`<sup>Optional</sup> <a name="StorageSizeMibInput" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.storageSizeMibInput"></a>

```csharp
public string StorageSizeMibInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateNetworkUuid`<sup>Required</sup> <a name="PrivateNetworkUuid" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.privateNetworkUuid"></a>

```csharp
public string PrivateNetworkUuid { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `StorageSizeMib`<sup>Required</sup> <a name="StorageSizeMib" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.storageSizeMib"></a>

```csharp
public string StorageSizeMib { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplica.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseReplicaConfig <a name="DatabaseReplicaConfig" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseReplicaConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string Name,
    string Id = null,
    string PrivateNetworkUuid = null,
    string Region = null,
    string Size = null,
    string StorageSizeMib = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#cluster_id DatabaseReplica#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#name DatabaseReplica#name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#id DatabaseReplica#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.privateNetworkUuid">PrivateNetworkUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#private_network_uuid DatabaseReplica#private_network_uuid}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#region DatabaseReplica#region}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.size">Size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#size DatabaseReplica#size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.storageSizeMib">StorageSizeMib</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#storage_size_mib DatabaseReplica#storage_size_mib}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#tags DatabaseReplica#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#cluster_id DatabaseReplica#cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#name DatabaseReplica#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#id DatabaseReplica#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateNetworkUuid`<sup>Optional</sup> <a name="PrivateNetworkUuid" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.privateNetworkUuid"></a>

```csharp
public string PrivateNetworkUuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#private_network_uuid DatabaseReplica#private_network_uuid}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#region DatabaseReplica#region}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.size"></a>

```csharp
public string Size { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#size DatabaseReplica#size}.

---

##### `StorageSizeMib`<sup>Optional</sup> <a name="StorageSizeMib" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.storageSizeMib"></a>

```csharp
public string StorageSizeMib { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#storage_size_mib DatabaseReplica#storage_size_mib}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.databaseReplica.DatabaseReplicaConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/database_replica#tags DatabaseReplica#tags}.

---



