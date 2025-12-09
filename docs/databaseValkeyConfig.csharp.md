# `databaseValkeyConfig` Submodule <a name="`databaseValkeyConfig` Submodule" id="@cdktf/provider-digitalocean.databaseValkeyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseValkeyConfig <a name="DatabaseValkeyConfig" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config digitalocean_database_valkey_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseValkeyConfig(Construct Scope, string Id, DatabaseValkeyConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig">DatabaseValkeyConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig">DatabaseValkeyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetAclChannelsDefault">ResetAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetFrequentSnapshots">ResetFrequentSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetIoThreads">ResetIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuDecayTime">ResetLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuLogFactor">ResetLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNotifyKeyspaceEvents">ResetNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNumberOfDatabases">ResetNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPersistence">ResetPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPubsubClientOutputBufferLimit">ResetPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetValkeyActiveExpireEffort">ResetValkeyActiveExpireEffort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAclChannelsDefault` <a name="ResetAclChannelsDefault" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetAclChannelsDefault"></a>

```csharp
private void ResetAclChannelsDefault()
```

##### `ResetFrequentSnapshots` <a name="ResetFrequentSnapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetFrequentSnapshots"></a>

```csharp
private void ResetFrequentSnapshots()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIoThreads` <a name="ResetIoThreads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetIoThreads"></a>

```csharp
private void ResetIoThreads()
```

##### `ResetLfuDecayTime` <a name="ResetLfuDecayTime" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuDecayTime"></a>

```csharp
private void ResetLfuDecayTime()
```

##### `ResetLfuLogFactor` <a name="ResetLfuLogFactor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuLogFactor"></a>

```csharp
private void ResetLfuLogFactor()
```

##### `ResetNotifyKeyspaceEvents` <a name="ResetNotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNotifyKeyspaceEvents"></a>

```csharp
private void ResetNotifyKeyspaceEvents()
```

##### `ResetNumberOfDatabases` <a name="ResetNumberOfDatabases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNumberOfDatabases"></a>

```csharp
private void ResetNumberOfDatabases()
```

##### `ResetPersistence` <a name="ResetPersistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPersistence"></a>

```csharp
private void ResetPersistence()
```

##### `ResetPubsubClientOutputBufferLimit` <a name="ResetPubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPubsubClientOutputBufferLimit"></a>

```csharp
private void ResetPubsubClientOutputBufferLimit()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetSsl"></a>

```csharp
private void ResetSsl()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetValkeyActiveExpireEffort` <a name="ResetValkeyActiveExpireEffort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetValkeyActiveExpireEffort"></a>

```csharp
private void ResetValkeyActiveExpireEffort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseValkeyConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseValkeyConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseValkeyConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseValkeyConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseValkeyConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseValkeyConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseValkeyConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseValkeyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseValkeyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefaultInput">AclChannelsDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshotsInput">FrequentSnapshotsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreadsInput">IoThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTimeInput">LfuDecayTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactorInput">LfuLogFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEventsInput">NotifyKeyspaceEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabasesInput">NumberOfDatabasesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistenceInput">PersistenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimitInput">PubsubClientOutputBufferLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.sslInput">SslInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffortInput">ValkeyActiveExpireEffortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefault">AclChannelsDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshots">FrequentSnapshots</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreads">IoThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTime">LfuDecayTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactor">LfuLogFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabases">NumberOfDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistence">Persistence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimit">PubsubClientOutputBufferLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ssl">Ssl</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffort">ValkeyActiveExpireEffort</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AclChannelsDefaultInput`<sup>Optional</sup> <a name="AclChannelsDefaultInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefaultInput"></a>

```csharp
public string AclChannelsDefaultInput { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `FrequentSnapshotsInput`<sup>Optional</sup> <a name="FrequentSnapshotsInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshotsInput"></a>

```csharp
public bool|IResolvable FrequentSnapshotsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IoThreadsInput`<sup>Optional</sup> <a name="IoThreadsInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreadsInput"></a>

```csharp
public double IoThreadsInput { get; }
```

- *Type:* double

---

##### `LfuDecayTimeInput`<sup>Optional</sup> <a name="LfuDecayTimeInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTimeInput"></a>

```csharp
public double LfuDecayTimeInput { get; }
```

- *Type:* double

---

##### `LfuLogFactorInput`<sup>Optional</sup> <a name="LfuLogFactorInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactorInput"></a>

```csharp
public double LfuLogFactorInput { get; }
```

- *Type:* double

---

##### `NotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="NotifyKeyspaceEventsInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEventsInput"></a>

```csharp
public string NotifyKeyspaceEventsInput { get; }
```

- *Type:* string

---

##### `NumberOfDatabasesInput`<sup>Optional</sup> <a name="NumberOfDatabasesInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabasesInput"></a>

```csharp
public double NumberOfDatabasesInput { get; }
```

- *Type:* double

---

##### `PersistenceInput`<sup>Optional</sup> <a name="PersistenceInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistenceInput"></a>

```csharp
public string PersistenceInput { get; }
```

- *Type:* string

---

##### `PubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="PubsubClientOutputBufferLimitInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimitInput"></a>

```csharp
public double PubsubClientOutputBufferLimitInput { get; }
```

- *Type:* double

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.sslInput"></a>

```csharp
public bool|IResolvable SslInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `ValkeyActiveExpireEffortInput`<sup>Optional</sup> <a name="ValkeyActiveExpireEffortInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffortInput"></a>

```csharp
public double ValkeyActiveExpireEffortInput { get; }
```

- *Type:* double

---

##### `AclChannelsDefault`<sup>Required</sup> <a name="AclChannelsDefault" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefault"></a>

```csharp
public string AclChannelsDefault { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `FrequentSnapshots`<sup>Required</sup> <a name="FrequentSnapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshots"></a>

```csharp
public bool|IResolvable FrequentSnapshots { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IoThreads`<sup>Required</sup> <a name="IoThreads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreads"></a>

```csharp
public double IoThreads { get; }
```

- *Type:* double

---

##### `LfuDecayTime`<sup>Required</sup> <a name="LfuDecayTime" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTime"></a>

```csharp
public double LfuDecayTime { get; }
```

- *Type:* double

---

##### `LfuLogFactor`<sup>Required</sup> <a name="LfuLogFactor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactor"></a>

```csharp
public double LfuLogFactor { get; }
```

- *Type:* double

---

##### `NotifyKeyspaceEvents`<sup>Required</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEvents"></a>

```csharp
public string NotifyKeyspaceEvents { get; }
```

- *Type:* string

---

##### `NumberOfDatabases`<sup>Required</sup> <a name="NumberOfDatabases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabases"></a>

```csharp
public double NumberOfDatabases { get; }
```

- *Type:* double

---

##### `Persistence`<sup>Required</sup> <a name="Persistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistence"></a>

```csharp
public string Persistence { get; }
```

- *Type:* string

---

##### `PubsubClientOutputBufferLimit`<sup>Required</sup> <a name="PubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimit"></a>

```csharp
public double PubsubClientOutputBufferLimit { get; }
```

- *Type:* double

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ssl"></a>

```csharp
public bool|IResolvable Ssl { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `ValkeyActiveExpireEffort`<sup>Required</sup> <a name="ValkeyActiveExpireEffort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffort"></a>

```csharp
public double ValkeyActiveExpireEffort { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseValkeyConfigConfig <a name="DatabaseValkeyConfigConfig" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseValkeyConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterId,
    string AclChannelsDefault = null,
    bool|IResolvable FrequentSnapshots = null,
    string Id = null,
    double IoThreads = null,
    double LfuDecayTime = null,
    double LfuLogFactor = null,
    string NotifyKeyspaceEvents = null,
    double NumberOfDatabases = null,
    string Persistence = null,
    double PubsubClientOutputBufferLimit = null,
    bool|IResolvable Ssl = null,
    double Timeout = null,
    double ValkeyActiveExpireEffort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | A unique identifier for the database cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.aclChannelsDefault">AclChannelsDefault</a></code> | <code>string</code> | Determines default pub/sub channels' ACL for new users if ACL is not supplied. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.frequentSnapshots">FrequentSnapshots</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Frequent RDB snapshots. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ioThreads">IoThreads</a></code> | <code>double</code> | The number of IO threads used by Valkey. Must be between 1 and 32. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuDecayTime">LfuDecayTime</a></code> | <code>double</code> | The decay time for Valkey's LFU cache eviction. Must be between 1 and 120. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuLogFactor">LfuLogFactor</a></code> | <code>double</code> | The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>string</code> | Set notify-keyspace-events option. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.numberOfDatabases">NumberOfDatabases</a></code> | <code>double</code> | The number of logical databases in the Valkey cluster. Must be between 1 and 128. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.persistence">Persistence</a></code> | <code>string</code> | When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.pubsubClientOutputBufferLimit">PubsubClientOutputBufferLimit</a></code> | <code>double</code> | Set output buffer limit for pub / sub clients in MB. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ssl">Ssl</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether to enable SSL/TLS for connections to the Valkey cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.timeout">Timeout</a></code> | <code>double</code> | The timeout (in seconds) for Valkey client connections. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.valkeyActiveExpireEffort">ValkeyActiveExpireEffort</a></code> | <code>double</code> | Active expire effort. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

A unique identifier for the database cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#cluster_id DatabaseValkeyConfig#cluster_id}

---

##### `AclChannelsDefault`<sup>Optional</sup> <a name="AclChannelsDefault" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.aclChannelsDefault"></a>

```csharp
public string AclChannelsDefault { get; set; }
```

- *Type:* string

Determines default pub/sub channels' ACL for new users if ACL is not supplied.

When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#acl_channels_default DatabaseValkeyConfig#acl_channels_default}

---

##### `FrequentSnapshots`<sup>Optional</sup> <a name="FrequentSnapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.frequentSnapshots"></a>

```csharp
public bool|IResolvable FrequentSnapshots { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Frequent RDB snapshots.

When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when valkey_persistence is set to off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#frequent_snapshots DatabaseValkeyConfig#frequent_snapshots}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IoThreads`<sup>Optional</sup> <a name="IoThreads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ioThreads"></a>

```csharp
public double IoThreads { get; set; }
```

- *Type:* double

The number of IO threads used by Valkey. Must be between 1 and 32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#io_threads DatabaseValkeyConfig#io_threads}

---

##### `LfuDecayTime`<sup>Optional</sup> <a name="LfuDecayTime" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuDecayTime"></a>

```csharp
public double LfuDecayTime { get; set; }
```

- *Type:* double

The decay time for Valkey's LFU cache eviction. Must be between 1 and 120.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#lfu_decay_time DatabaseValkeyConfig#lfu_decay_time}

---

##### `LfuLogFactor`<sup>Optional</sup> <a name="LfuLogFactor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuLogFactor"></a>

```csharp
public double LfuLogFactor { get; set; }
```

- *Type:* double

The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#lfu_log_factor DatabaseValkeyConfig#lfu_log_factor}

---

##### `NotifyKeyspaceEvents`<sup>Optional</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.notifyKeyspaceEvents"></a>

```csharp
public string NotifyKeyspaceEvents { get; set; }
```

- *Type:* string

Set notify-keyspace-events option.

Requires at least K or E and accepts any combination of the following options. Setting the parameter to "" disables notifications.

K — Keyspace events
E — Keyevent events
g — Generic commands (e.g. DEL, EXPIRE, RENAME, ...)
$ — String commands
l — List commands
s — Set commands
h — Hash commands
z — Sorted set commands
t — Stream commands
d — Module key type events
x — Expired events
e — Evicted events
m — Key miss events
n — New key events
A — Alias for "g$lshztxed"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#notify_keyspace_events DatabaseValkeyConfig#notify_keyspace_events}

---

##### `NumberOfDatabases`<sup>Optional</sup> <a name="NumberOfDatabases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.numberOfDatabases"></a>

```csharp
public double NumberOfDatabases { get; set; }
```

- *Type:* double

The number of logical databases in the Valkey cluster. Must be between 1 and 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#number_of_databases DatabaseValkeyConfig#number_of_databases}

---

##### `Persistence`<sup>Optional</sup> <a name="Persistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.persistence"></a>

```csharp
public string Persistence { get; set; }
```

- *Type:* string

When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed.

Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#persistence DatabaseValkeyConfig#persistence}

---

##### `PubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="PubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.pubsubClientOutputBufferLimit"></a>

```csharp
public double PubsubClientOutputBufferLimit { get; set; }
```

- *Type:* double

Set output buffer limit for pub / sub clients in MB.

The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#pubsub_client_output_buffer_limit DatabaseValkeyConfig#pubsub_client_output_buffer_limit}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ssl"></a>

```csharp
public bool|IResolvable Ssl { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether to enable SSL/TLS for connections to the Valkey cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#ssl DatabaseValkeyConfig#ssl}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

The timeout (in seconds) for Valkey client connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#timeout DatabaseValkeyConfig#timeout}

---

##### `ValkeyActiveExpireEffort`<sup>Optional</sup> <a name="ValkeyActiveExpireEffort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.valkeyActiveExpireEffort"></a>

```csharp
public double ValkeyActiveExpireEffort { get; set; }
```

- *Type:* double

Active expire effort.

Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_valkey_config#valkey_active_expire_effort DatabaseValkeyConfig#valkey_active_expire_effort}

---



