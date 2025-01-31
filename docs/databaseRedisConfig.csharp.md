# `databaseRedisConfig` Submodule <a name="`databaseRedisConfig` Submodule" id="@cdktf/provider-digitalocean.databaseRedisConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseRedisConfig <a name="DatabaseRedisConfig" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config digitalocean_database_redis_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseRedisConfig(Construct Scope, string Id, DatabaseRedisConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig">DatabaseRedisConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig">DatabaseRedisConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetAclChannelsDefault">ResetAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetIoThreads">ResetIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuDecayTime">ResetLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuLogFactor">ResetLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetMaxmemoryPolicy">ResetMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNotifyKeyspaceEvents">ResetNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNumberOfDatabases">ResetNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPersistence">ResetPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPubsubClientOutputBufferLimit">ResetPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAclChannelsDefault` <a name="ResetAclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetAclChannelsDefault"></a>

```csharp
private void ResetAclChannelsDefault()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIoThreads` <a name="ResetIoThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetIoThreads"></a>

```csharp
private void ResetIoThreads()
```

##### `ResetLfuDecayTime` <a name="ResetLfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuDecayTime"></a>

```csharp
private void ResetLfuDecayTime()
```

##### `ResetLfuLogFactor` <a name="ResetLfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuLogFactor"></a>

```csharp
private void ResetLfuLogFactor()
```

##### `ResetMaxmemoryPolicy` <a name="ResetMaxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetMaxmemoryPolicy"></a>

```csharp
private void ResetMaxmemoryPolicy()
```

##### `ResetNotifyKeyspaceEvents` <a name="ResetNotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNotifyKeyspaceEvents"></a>

```csharp
private void ResetNotifyKeyspaceEvents()
```

##### `ResetNumberOfDatabases` <a name="ResetNumberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNumberOfDatabases"></a>

```csharp
private void ResetNumberOfDatabases()
```

##### `ResetPersistence` <a name="ResetPersistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPersistence"></a>

```csharp
private void ResetPersistence()
```

##### `ResetPubsubClientOutputBufferLimit` <a name="ResetPubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPubsubClientOutputBufferLimit"></a>

```csharp
private void ResetPubsubClientOutputBufferLimit()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetSsl"></a>

```csharp
private void ResetSsl()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseRedisConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseRedisConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseRedisConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseRedisConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseRedisConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseRedisConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseRedisConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseRedisConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseRedisConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefaultInput">AclChannelsDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreadsInput">IoThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTimeInput">LfuDecayTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactorInput">LfuLogFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicyInput">MaxmemoryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEventsInput">NotifyKeyspaceEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabasesInput">NumberOfDatabasesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistenceInput">PersistenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimitInput">PubsubClientOutputBufferLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.sslInput">SslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefault">AclChannelsDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreads">IoThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTime">LfuDecayTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactor">LfuLogFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicy">MaxmemoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabases">NumberOfDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistence">Persistence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimit">PubsubClientOutputBufferLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ssl">Ssl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AclChannelsDefaultInput`<sup>Optional</sup> <a name="AclChannelsDefaultInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefaultInput"></a>

```csharp
public string AclChannelsDefaultInput { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IoThreadsInput`<sup>Optional</sup> <a name="IoThreadsInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreadsInput"></a>

```csharp
public double IoThreadsInput { get; }
```

- *Type:* double

---

##### `LfuDecayTimeInput`<sup>Optional</sup> <a name="LfuDecayTimeInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTimeInput"></a>

```csharp
public double LfuDecayTimeInput { get; }
```

- *Type:* double

---

##### `LfuLogFactorInput`<sup>Optional</sup> <a name="LfuLogFactorInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactorInput"></a>

```csharp
public double LfuLogFactorInput { get; }
```

- *Type:* double

---

##### `MaxmemoryPolicyInput`<sup>Optional</sup> <a name="MaxmemoryPolicyInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicyInput"></a>

```csharp
public string MaxmemoryPolicyInput { get; }
```

- *Type:* string

---

##### `NotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="NotifyKeyspaceEventsInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEventsInput"></a>

```csharp
public string NotifyKeyspaceEventsInput { get; }
```

- *Type:* string

---

##### `NumberOfDatabasesInput`<sup>Optional</sup> <a name="NumberOfDatabasesInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabasesInput"></a>

```csharp
public double NumberOfDatabasesInput { get; }
```

- *Type:* double

---

##### `PersistenceInput`<sup>Optional</sup> <a name="PersistenceInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistenceInput"></a>

```csharp
public string PersistenceInput { get; }
```

- *Type:* string

---

##### `PubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="PubsubClientOutputBufferLimitInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimitInput"></a>

```csharp
public double PubsubClientOutputBufferLimitInput { get; }
```

- *Type:* double

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.sslInput"></a>

```csharp
public object SslInput { get; }
```

- *Type:* object

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `AclChannelsDefault`<sup>Required</sup> <a name="AclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefault"></a>

```csharp
public string AclChannelsDefault { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IoThreads`<sup>Required</sup> <a name="IoThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreads"></a>

```csharp
public double IoThreads { get; }
```

- *Type:* double

---

##### `LfuDecayTime`<sup>Required</sup> <a name="LfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTime"></a>

```csharp
public double LfuDecayTime { get; }
```

- *Type:* double

---

##### `LfuLogFactor`<sup>Required</sup> <a name="LfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactor"></a>

```csharp
public double LfuLogFactor { get; }
```

- *Type:* double

---

##### `MaxmemoryPolicy`<sup>Required</sup> <a name="MaxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicy"></a>

```csharp
public string MaxmemoryPolicy { get; }
```

- *Type:* string

---

##### `NotifyKeyspaceEvents`<sup>Required</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEvents"></a>

```csharp
public string NotifyKeyspaceEvents { get; }
```

- *Type:* string

---

##### `NumberOfDatabases`<sup>Required</sup> <a name="NumberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabases"></a>

```csharp
public double NumberOfDatabases { get; }
```

- *Type:* double

---

##### `Persistence`<sup>Required</sup> <a name="Persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistence"></a>

```csharp
public string Persistence { get; }
```

- *Type:* string

---

##### `PubsubClientOutputBufferLimit`<sup>Required</sup> <a name="PubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimit"></a>

```csharp
public double PubsubClientOutputBufferLimit { get; }
```

- *Type:* double

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ssl"></a>

```csharp
public object Ssl { get; }
```

- *Type:* object

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseRedisConfigConfig <a name="DatabaseRedisConfigConfig" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseRedisConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string AclChannelsDefault = null,
    string Id = null,
    double IoThreads = null,
    double LfuDecayTime = null,
    double LfuLogFactor = null,
    string MaxmemoryPolicy = null,
    string NotifyKeyspaceEvents = null,
    double NumberOfDatabases = null,
    string Persistence = null,
    double PubsubClientOutputBufferLimit = null,
    object Ssl = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.aclChannelsDefault">AclChannelsDefault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#id DatabaseRedisConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ioThreads">IoThreads</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuDecayTime">LfuDecayTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuLogFactor">LfuLogFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.maxmemoryPolicy">MaxmemoryPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.numberOfDatabases">NumberOfDatabases</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.persistence">Persistence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.pubsubClientOutputBufferLimit">PubsubClientOutputBufferLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ssl">Ssl</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}.

---

##### `AclChannelsDefault`<sup>Optional</sup> <a name="AclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.aclChannelsDefault"></a>

```csharp
public string AclChannelsDefault { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#id DatabaseRedisConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IoThreads`<sup>Optional</sup> <a name="IoThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ioThreads"></a>

```csharp
public double IoThreads { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}.

---

##### `LfuDecayTime`<sup>Optional</sup> <a name="LfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuDecayTime"></a>

```csharp
public double LfuDecayTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}.

---

##### `LfuLogFactor`<sup>Optional</sup> <a name="LfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuLogFactor"></a>

```csharp
public double LfuLogFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}.

---

##### `MaxmemoryPolicy`<sup>Optional</sup> <a name="MaxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.maxmemoryPolicy"></a>

```csharp
public string MaxmemoryPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}.

---

##### `NotifyKeyspaceEvents`<sup>Optional</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.notifyKeyspaceEvents"></a>

```csharp
public string NotifyKeyspaceEvents { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}.

---

##### `NumberOfDatabases`<sup>Optional</sup> <a name="NumberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.numberOfDatabases"></a>

```csharp
public double NumberOfDatabases { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}.

---

##### `Persistence`<sup>Optional</sup> <a name="Persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.persistence"></a>

```csharp
public string Persistence { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}.

---

##### `PubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="PubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.pubsubClientOutputBufferLimit"></a>

```csharp
public double PubsubClientOutputBufferLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}.

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ssl"></a>

```csharp
public object Ssl { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.2/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}.

---



