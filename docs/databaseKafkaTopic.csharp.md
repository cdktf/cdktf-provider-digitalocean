# `databaseKafkaTopic` Submodule <a name="`databaseKafkaTopic` Submodule" id="@cdktf/provider-digitalocean.databaseKafkaTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseKafkaTopic <a name="DatabaseKafkaTopic" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic digitalocean_database_kafka_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseKafkaTopic(Construct Scope, string Id, DatabaseKafkaTopicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig">DatabaseKafkaTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig">DatabaseKafkaTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetPartitionCount">ResetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetReplicationFactor">ResetReplicationFactor</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig"></a>

```csharp
private void PutConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPartitionCount` <a name="ResetPartitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetPartitionCount"></a>

```csharp
private void ResetPartitionCount()
```

##### `ResetReplicationFactor` <a name="ResetReplicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetReplicationFactor"></a>

```csharp
private void ResetReplicationFactor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseKafkaTopic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseKafkaTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseKafkaTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseKafkaTopic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseKafkaTopic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseKafkaTopic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseKafkaTopic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseKafkaTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseKafkaTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList">DatabaseKafkaTopicConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.configInput">ConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCountInput">PartitionCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactorInput">ReplicationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCount">PartitionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.config"></a>

```csharp
public DatabaseKafkaTopicConfigAList Config { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList">DatabaseKafkaTopicConfigAList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.configInput"></a>

```csharp
public object ConfigInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionCountInput`<sup>Optional</sup> <a name="PartitionCountInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCountInput"></a>

```csharp
public double PartitionCountInput { get; }
```

- *Type:* double

---

##### `ReplicationFactorInput`<sup>Optional</sup> <a name="ReplicationFactorInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactorInput"></a>

```csharp
public double ReplicationFactorInput { get; }
```

- *Type:* double

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartitionCount`<sup>Required</sup> <a name="PartitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCount"></a>

```csharp
public double PartitionCount { get; }
```

- *Type:* double

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseKafkaTopicConfig <a name="DatabaseKafkaTopicConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseKafkaTopicConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string Name,
    object Config = null,
    string Id = null,
    double PartitionCount = null,
    double ReplicationFactor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.config">Config</a></code> | <code>object</code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.partitionCount">PartitionCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.config"></a>

```csharp
public object Config { get; set; }
```

- *Type:* object

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#config DatabaseKafkaTopic#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionCount`<sup>Optional</sup> <a name="PartitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.partitionCount"></a>

```csharp
public double PartitionCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}.

---

##### `ReplicationFactor`<sup>Optional</sup> <a name="ReplicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}.

---

### DatabaseKafkaTopicConfigA <a name="DatabaseKafkaTopicConfigA" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseKafkaTopicConfigA {
    string CleanupPolicy = null,
    string CompressionType = null,
    string DeleteRetentionMs = null,
    string FileDeleteDelayMs = null,
    string FlushMessages = null,
    string FlushMs = null,
    string IndexIntervalBytes = null,
    string MaxCompactionLagMs = null,
    string MaxMessageBytes = null,
    object MessageDownConversionEnable = null,
    string MessageFormatVersion = null,
    string MessageTimestampDifferenceMaxMs = null,
    string MessageTimestampType = null,
    double MinCleanableDirtyRatio = null,
    string MinCompactionLagMs = null,
    double MinInsyncReplicas = null,
    object Preallocate = null,
    string RetentionBytes = null,
    string RetentionMs = null,
    string SegmentBytes = null,
    string SegmentIndexBytes = null,
    string SegmentJitterMs = null,
    string SegmentMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.cleanupPolicy">CleanupPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#cleanup_policy DatabaseKafkaTopic#cleanup_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.compressionType">CompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#compression_type DatabaseKafkaTopic#compression_type}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.deleteRetentionMs">DeleteRetentionMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#delete_retention_ms DatabaseKafkaTopic#delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.fileDeleteDelayMs">FileDeleteDelayMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#file_delete_delay_ms DatabaseKafkaTopic#file_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMessages">FlushMessages</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#flush_messages DatabaseKafkaTopic#flush_messages}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMs">FlushMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#flush_ms DatabaseKafkaTopic#flush_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.indexIntervalBytes">IndexIntervalBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#index_interval_bytes DatabaseKafkaTopic#index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxCompactionLagMs">MaxCompactionLagMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#max_compaction_lag_ms DatabaseKafkaTopic#max_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxMessageBytes">MaxMessageBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#max_message_bytes DatabaseKafkaTopic#max_message_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageDownConversionEnable">MessageDownConversionEnable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#message_down_conversion_enable DatabaseKafkaTopic#message_down_conversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageFormatVersion">MessageFormatVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#message_format_version DatabaseKafkaTopic#message_format_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampDifferenceMaxMs">MessageTimestampDifferenceMaxMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#message_timestamp_difference_max_ms DatabaseKafkaTopic#message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampType">MessageTimestampType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#message_timestamp_type DatabaseKafkaTopic#message_timestamp_type}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCleanableDirtyRatio">MinCleanableDirtyRatio</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#min_cleanable_dirty_ratio DatabaseKafkaTopic#min_cleanable_dirty_ratio}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCompactionLagMs">MinCompactionLagMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#min_compaction_lag_ms DatabaseKafkaTopic#min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minInsyncReplicas">MinInsyncReplicas</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#min_insync_replicas DatabaseKafkaTopic#min_insync_replicas}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.preallocate">Preallocate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#preallocate DatabaseKafkaTopic#preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionBytes">RetentionBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#retention_bytes DatabaseKafkaTopic#retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionMs">RetentionMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#retention_ms DatabaseKafkaTopic#retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentBytes">SegmentBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#segment_bytes DatabaseKafkaTopic#segment_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentIndexBytes">SegmentIndexBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#segment_index_bytes DatabaseKafkaTopic#segment_index_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentJitterMs">SegmentJitterMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#segment_jitter_ms DatabaseKafkaTopic#segment_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentMs">SegmentMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#segment_ms DatabaseKafkaTopic#segment_ms}. |

---

##### `CleanupPolicy`<sup>Optional</sup> <a name="CleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.cleanupPolicy"></a>

```csharp
public string CleanupPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#cleanup_policy DatabaseKafkaTopic#cleanup_policy}.

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.compressionType"></a>

```csharp
public string CompressionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#compression_type DatabaseKafkaTopic#compression_type}.

---

##### `DeleteRetentionMs`<sup>Optional</sup> <a name="DeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.deleteRetentionMs"></a>

```csharp
public string DeleteRetentionMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#delete_retention_ms DatabaseKafkaTopic#delete_retention_ms}.

---

##### `FileDeleteDelayMs`<sup>Optional</sup> <a name="FileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.fileDeleteDelayMs"></a>

```csharp
public string FileDeleteDelayMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#file_delete_delay_ms DatabaseKafkaTopic#file_delete_delay_ms}.

---

##### `FlushMessages`<sup>Optional</sup> <a name="FlushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMessages"></a>

```csharp
public string FlushMessages { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#flush_messages DatabaseKafkaTopic#flush_messages}.

---

##### `FlushMs`<sup>Optional</sup> <a name="FlushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMs"></a>

```csharp
public string FlushMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#flush_ms DatabaseKafkaTopic#flush_ms}.

---

##### `IndexIntervalBytes`<sup>Optional</sup> <a name="IndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.indexIntervalBytes"></a>

```csharp
public string IndexIntervalBytes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#index_interval_bytes DatabaseKafkaTopic#index_interval_bytes}.

---

##### `MaxCompactionLagMs`<sup>Optional</sup> <a name="MaxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxCompactionLagMs"></a>

```csharp
public string MaxCompactionLagMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#max_compaction_lag_ms DatabaseKafkaTopic#max_compaction_lag_ms}.

---

##### `MaxMessageBytes`<sup>Optional</sup> <a name="MaxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxMessageBytes"></a>

```csharp
public string MaxMessageBytes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#max_message_bytes DatabaseKafkaTopic#max_message_bytes}.

---

##### `MessageDownConversionEnable`<sup>Optional</sup> <a name="MessageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageDownConversionEnable"></a>

```csharp
public object MessageDownConversionEnable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#message_down_conversion_enable DatabaseKafkaTopic#message_down_conversion_enable}.

---

##### `MessageFormatVersion`<sup>Optional</sup> <a name="MessageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageFormatVersion"></a>

```csharp
public string MessageFormatVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#message_format_version DatabaseKafkaTopic#message_format_version}.

---

##### `MessageTimestampDifferenceMaxMs`<sup>Optional</sup> <a name="MessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampDifferenceMaxMs"></a>

```csharp
public string MessageTimestampDifferenceMaxMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#message_timestamp_difference_max_ms DatabaseKafkaTopic#message_timestamp_difference_max_ms}.

---

##### `MessageTimestampType`<sup>Optional</sup> <a name="MessageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampType"></a>

```csharp
public string MessageTimestampType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#message_timestamp_type DatabaseKafkaTopic#message_timestamp_type}.

---

##### `MinCleanableDirtyRatio`<sup>Optional</sup> <a name="MinCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCleanableDirtyRatio"></a>

```csharp
public double MinCleanableDirtyRatio { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#min_cleanable_dirty_ratio DatabaseKafkaTopic#min_cleanable_dirty_ratio}.

---

##### `MinCompactionLagMs`<sup>Optional</sup> <a name="MinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCompactionLagMs"></a>

```csharp
public string MinCompactionLagMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#min_compaction_lag_ms DatabaseKafkaTopic#min_compaction_lag_ms}.

---

##### `MinInsyncReplicas`<sup>Optional</sup> <a name="MinInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minInsyncReplicas"></a>

```csharp
public double MinInsyncReplicas { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#min_insync_replicas DatabaseKafkaTopic#min_insync_replicas}.

---

##### `Preallocate`<sup>Optional</sup> <a name="Preallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.preallocate"></a>

```csharp
public object Preallocate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#preallocate DatabaseKafkaTopic#preallocate}.

---

##### `RetentionBytes`<sup>Optional</sup> <a name="RetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionBytes"></a>

```csharp
public string RetentionBytes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#retention_bytes DatabaseKafkaTopic#retention_bytes}.

---

##### `RetentionMs`<sup>Optional</sup> <a name="RetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionMs"></a>

```csharp
public string RetentionMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#retention_ms DatabaseKafkaTopic#retention_ms}.

---

##### `SegmentBytes`<sup>Optional</sup> <a name="SegmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentBytes"></a>

```csharp
public string SegmentBytes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#segment_bytes DatabaseKafkaTopic#segment_bytes}.

---

##### `SegmentIndexBytes`<sup>Optional</sup> <a name="SegmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentIndexBytes"></a>

```csharp
public string SegmentIndexBytes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#segment_index_bytes DatabaseKafkaTopic#segment_index_bytes}.

---

##### `SegmentJitterMs`<sup>Optional</sup> <a name="SegmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentJitterMs"></a>

```csharp
public string SegmentJitterMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#segment_jitter_ms DatabaseKafkaTopic#segment_jitter_ms}.

---

##### `SegmentMs`<sup>Optional</sup> <a name="SegmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentMs"></a>

```csharp
public string SegmentMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/database_kafka_topic#segment_ms DatabaseKafkaTopic#segment_ms}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseKafkaTopicConfigAList <a name="DatabaseKafkaTopicConfigAList" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseKafkaTopicConfigAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get"></a>

```csharp
private DatabaseKafkaTopicConfigAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseKafkaTopicConfigAOutputReference <a name="DatabaseKafkaTopicConfigAOutputReference" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseKafkaTopicConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCleanupPolicy">ResetCleanupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetDeleteRetentionMs">ResetDeleteRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFileDeleteDelayMs">ResetFileDeleteDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMessages">ResetFlushMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMs">ResetFlushMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetIndexIntervalBytes">ResetIndexIntervalBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxCompactionLagMs">ResetMaxCompactionLagMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxMessageBytes">ResetMaxMessageBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageDownConversionEnable">ResetMessageDownConversionEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageFormatVersion">ResetMessageFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampDifferenceMaxMs">ResetMessageTimestampDifferenceMaxMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampType">ResetMessageTimestampType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCleanableDirtyRatio">ResetMinCleanableDirtyRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCompactionLagMs">ResetMinCompactionLagMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinInsyncReplicas">ResetMinInsyncReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetPreallocate">ResetPreallocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionBytes">ResetRetentionBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionMs">ResetRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentBytes">ResetSegmentBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentIndexBytes">ResetSegmentIndexBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentJitterMs">ResetSegmentJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentMs">ResetSegmentMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCleanupPolicy` <a name="ResetCleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCleanupPolicy"></a>

```csharp
private void ResetCleanupPolicy()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCompressionType"></a>

```csharp
private void ResetCompressionType()
```

##### `ResetDeleteRetentionMs` <a name="ResetDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetDeleteRetentionMs"></a>

```csharp
private void ResetDeleteRetentionMs()
```

##### `ResetFileDeleteDelayMs` <a name="ResetFileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFileDeleteDelayMs"></a>

```csharp
private void ResetFileDeleteDelayMs()
```

##### `ResetFlushMessages` <a name="ResetFlushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMessages"></a>

```csharp
private void ResetFlushMessages()
```

##### `ResetFlushMs` <a name="ResetFlushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMs"></a>

```csharp
private void ResetFlushMs()
```

##### `ResetIndexIntervalBytes` <a name="ResetIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetIndexIntervalBytes"></a>

```csharp
private void ResetIndexIntervalBytes()
```

##### `ResetMaxCompactionLagMs` <a name="ResetMaxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxCompactionLagMs"></a>

```csharp
private void ResetMaxCompactionLagMs()
```

##### `ResetMaxMessageBytes` <a name="ResetMaxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxMessageBytes"></a>

```csharp
private void ResetMaxMessageBytes()
```

##### `ResetMessageDownConversionEnable` <a name="ResetMessageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageDownConversionEnable"></a>

```csharp
private void ResetMessageDownConversionEnable()
```

##### `ResetMessageFormatVersion` <a name="ResetMessageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageFormatVersion"></a>

```csharp
private void ResetMessageFormatVersion()
```

##### `ResetMessageTimestampDifferenceMaxMs` <a name="ResetMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampDifferenceMaxMs"></a>

```csharp
private void ResetMessageTimestampDifferenceMaxMs()
```

##### `ResetMessageTimestampType` <a name="ResetMessageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampType"></a>

```csharp
private void ResetMessageTimestampType()
```

##### `ResetMinCleanableDirtyRatio` <a name="ResetMinCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCleanableDirtyRatio"></a>

```csharp
private void ResetMinCleanableDirtyRatio()
```

##### `ResetMinCompactionLagMs` <a name="ResetMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCompactionLagMs"></a>

```csharp
private void ResetMinCompactionLagMs()
```

##### `ResetMinInsyncReplicas` <a name="ResetMinInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinInsyncReplicas"></a>

```csharp
private void ResetMinInsyncReplicas()
```

##### `ResetPreallocate` <a name="ResetPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetPreallocate"></a>

```csharp
private void ResetPreallocate()
```

##### `ResetRetentionBytes` <a name="ResetRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionBytes"></a>

```csharp
private void ResetRetentionBytes()
```

##### `ResetRetentionMs` <a name="ResetRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionMs"></a>

```csharp
private void ResetRetentionMs()
```

##### `ResetSegmentBytes` <a name="ResetSegmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentBytes"></a>

```csharp
private void ResetSegmentBytes()
```

##### `ResetSegmentIndexBytes` <a name="ResetSegmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentIndexBytes"></a>

```csharp
private void ResetSegmentIndexBytes()
```

##### `ResetSegmentJitterMs` <a name="ResetSegmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentJitterMs"></a>

```csharp
private void ResetSegmentJitterMs()
```

##### `ResetSegmentMs` <a name="ResetSegmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentMs"></a>

```csharp
private void ResetSegmentMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicyInput">CleanupPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMsInput">DeleteRetentionMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMsInput">FileDeleteDelayMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessagesInput">FlushMessagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMsInput">FlushMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytesInput">IndexIntervalBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMsInput">MaxCompactionLagMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytesInput">MaxMessageBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnableInput">MessageDownConversionEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersionInput">MessageFormatVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMsInput">MessageTimestampDifferenceMaxMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampTypeInput">MessageTimestampTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatioInput">MinCleanableDirtyRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMsInput">MinCompactionLagMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicasInput">MinInsyncReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocateInput">PreallocateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytesInput">RetentionBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMsInput">RetentionMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytesInput">SegmentBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytesInput">SegmentIndexBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMsInput">SegmentJitterMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMsInput">SegmentMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicy">CleanupPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMs">DeleteRetentionMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMs">FileDeleteDelayMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessages">FlushMessages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMs">FlushMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytes">IndexIntervalBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMs">MaxCompactionLagMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytes">MaxMessageBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnable">MessageDownConversionEnable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersion">MessageFormatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMs">MessageTimestampDifferenceMaxMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampType">MessageTimestampType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatio">MinCleanableDirtyRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMs">MinCompactionLagMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicas">MinInsyncReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocate">Preallocate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytes">RetentionBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMs">RetentionMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytes">SegmentBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytes">SegmentIndexBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMs">SegmentJitterMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMs">SegmentMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CleanupPolicyInput`<sup>Optional</sup> <a name="CleanupPolicyInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicyInput"></a>

```csharp
public string CleanupPolicyInput { get; }
```

- *Type:* string

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionTypeInput"></a>

```csharp
public string CompressionTypeInput { get; }
```

- *Type:* string

---

##### `DeleteRetentionMsInput`<sup>Optional</sup> <a name="DeleteRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMsInput"></a>

```csharp
public string DeleteRetentionMsInput { get; }
```

- *Type:* string

---

##### `FileDeleteDelayMsInput`<sup>Optional</sup> <a name="FileDeleteDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMsInput"></a>

```csharp
public string FileDeleteDelayMsInput { get; }
```

- *Type:* string

---

##### `FlushMessagesInput`<sup>Optional</sup> <a name="FlushMessagesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessagesInput"></a>

```csharp
public string FlushMessagesInput { get; }
```

- *Type:* string

---

##### `FlushMsInput`<sup>Optional</sup> <a name="FlushMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMsInput"></a>

```csharp
public string FlushMsInput { get; }
```

- *Type:* string

---

##### `IndexIntervalBytesInput`<sup>Optional</sup> <a name="IndexIntervalBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytesInput"></a>

```csharp
public string IndexIntervalBytesInput { get; }
```

- *Type:* string

---

##### `MaxCompactionLagMsInput`<sup>Optional</sup> <a name="MaxCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMsInput"></a>

```csharp
public string MaxCompactionLagMsInput { get; }
```

- *Type:* string

---

##### `MaxMessageBytesInput`<sup>Optional</sup> <a name="MaxMessageBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytesInput"></a>

```csharp
public string MaxMessageBytesInput { get; }
```

- *Type:* string

---

##### `MessageDownConversionEnableInput`<sup>Optional</sup> <a name="MessageDownConversionEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnableInput"></a>

```csharp
public object MessageDownConversionEnableInput { get; }
```

- *Type:* object

---

##### `MessageFormatVersionInput`<sup>Optional</sup> <a name="MessageFormatVersionInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersionInput"></a>

```csharp
public string MessageFormatVersionInput { get; }
```

- *Type:* string

---

##### `MessageTimestampDifferenceMaxMsInput`<sup>Optional</sup> <a name="MessageTimestampDifferenceMaxMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMsInput"></a>

```csharp
public string MessageTimestampDifferenceMaxMsInput { get; }
```

- *Type:* string

---

##### `MessageTimestampTypeInput`<sup>Optional</sup> <a name="MessageTimestampTypeInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampTypeInput"></a>

```csharp
public string MessageTimestampTypeInput { get; }
```

- *Type:* string

---

##### `MinCleanableDirtyRatioInput`<sup>Optional</sup> <a name="MinCleanableDirtyRatioInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatioInput"></a>

```csharp
public double MinCleanableDirtyRatioInput { get; }
```

- *Type:* double

---

##### `MinCompactionLagMsInput`<sup>Optional</sup> <a name="MinCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMsInput"></a>

```csharp
public string MinCompactionLagMsInput { get; }
```

- *Type:* string

---

##### `MinInsyncReplicasInput`<sup>Optional</sup> <a name="MinInsyncReplicasInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicasInput"></a>

```csharp
public double MinInsyncReplicasInput { get; }
```

- *Type:* double

---

##### `PreallocateInput`<sup>Optional</sup> <a name="PreallocateInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocateInput"></a>

```csharp
public object PreallocateInput { get; }
```

- *Type:* object

---

##### `RetentionBytesInput`<sup>Optional</sup> <a name="RetentionBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytesInput"></a>

```csharp
public string RetentionBytesInput { get; }
```

- *Type:* string

---

##### `RetentionMsInput`<sup>Optional</sup> <a name="RetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMsInput"></a>

```csharp
public string RetentionMsInput { get; }
```

- *Type:* string

---

##### `SegmentBytesInput`<sup>Optional</sup> <a name="SegmentBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytesInput"></a>

```csharp
public string SegmentBytesInput { get; }
```

- *Type:* string

---

##### `SegmentIndexBytesInput`<sup>Optional</sup> <a name="SegmentIndexBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytesInput"></a>

```csharp
public string SegmentIndexBytesInput { get; }
```

- *Type:* string

---

##### `SegmentJitterMsInput`<sup>Optional</sup> <a name="SegmentJitterMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMsInput"></a>

```csharp
public string SegmentJitterMsInput { get; }
```

- *Type:* string

---

##### `SegmentMsInput`<sup>Optional</sup> <a name="SegmentMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMsInput"></a>

```csharp
public string SegmentMsInput { get; }
```

- *Type:* string

---

##### `CleanupPolicy`<sup>Required</sup> <a name="CleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicy"></a>

```csharp
public string CleanupPolicy { get; }
```

- *Type:* string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `DeleteRetentionMs`<sup>Required</sup> <a name="DeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMs"></a>

```csharp
public string DeleteRetentionMs { get; }
```

- *Type:* string

---

##### `FileDeleteDelayMs`<sup>Required</sup> <a name="FileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMs"></a>

```csharp
public string FileDeleteDelayMs { get; }
```

- *Type:* string

---

##### `FlushMessages`<sup>Required</sup> <a name="FlushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessages"></a>

```csharp
public string FlushMessages { get; }
```

- *Type:* string

---

##### `FlushMs`<sup>Required</sup> <a name="FlushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMs"></a>

```csharp
public string FlushMs { get; }
```

- *Type:* string

---

##### `IndexIntervalBytes`<sup>Required</sup> <a name="IndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytes"></a>

```csharp
public string IndexIntervalBytes { get; }
```

- *Type:* string

---

##### `MaxCompactionLagMs`<sup>Required</sup> <a name="MaxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMs"></a>

```csharp
public string MaxCompactionLagMs { get; }
```

- *Type:* string

---

##### `MaxMessageBytes`<sup>Required</sup> <a name="MaxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytes"></a>

```csharp
public string MaxMessageBytes { get; }
```

- *Type:* string

---

##### `MessageDownConversionEnable`<sup>Required</sup> <a name="MessageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnable"></a>

```csharp
public object MessageDownConversionEnable { get; }
```

- *Type:* object

---

##### `MessageFormatVersion`<sup>Required</sup> <a name="MessageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersion"></a>

```csharp
public string MessageFormatVersion { get; }
```

- *Type:* string

---

##### `MessageTimestampDifferenceMaxMs`<sup>Required</sup> <a name="MessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMs"></a>

```csharp
public string MessageTimestampDifferenceMaxMs { get; }
```

- *Type:* string

---

##### `MessageTimestampType`<sup>Required</sup> <a name="MessageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampType"></a>

```csharp
public string MessageTimestampType { get; }
```

- *Type:* string

---

##### `MinCleanableDirtyRatio`<sup>Required</sup> <a name="MinCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatio"></a>

```csharp
public double MinCleanableDirtyRatio { get; }
```

- *Type:* double

---

##### `MinCompactionLagMs`<sup>Required</sup> <a name="MinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMs"></a>

```csharp
public string MinCompactionLagMs { get; }
```

- *Type:* string

---

##### `MinInsyncReplicas`<sup>Required</sup> <a name="MinInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicas"></a>

```csharp
public double MinInsyncReplicas { get; }
```

- *Type:* double

---

##### `Preallocate`<sup>Required</sup> <a name="Preallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocate"></a>

```csharp
public object Preallocate { get; }
```

- *Type:* object

---

##### `RetentionBytes`<sup>Required</sup> <a name="RetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytes"></a>

```csharp
public string RetentionBytes { get; }
```

- *Type:* string

---

##### `RetentionMs`<sup>Required</sup> <a name="RetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMs"></a>

```csharp
public string RetentionMs { get; }
```

- *Type:* string

---

##### `SegmentBytes`<sup>Required</sup> <a name="SegmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytes"></a>

```csharp
public string SegmentBytes { get; }
```

- *Type:* string

---

##### `SegmentIndexBytes`<sup>Required</sup> <a name="SegmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytes"></a>

```csharp
public string SegmentIndexBytes { get; }
```

- *Type:* string

---

##### `SegmentJitterMs`<sup>Required</sup> <a name="SegmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMs"></a>

```csharp
public string SegmentJitterMs { get; }
```

- *Type:* string

---

##### `SegmentMs`<sup>Required</sup> <a name="SegmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMs"></a>

```csharp
public string SegmentMs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



