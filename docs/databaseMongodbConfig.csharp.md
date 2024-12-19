# `databaseMongodbConfig` Submodule <a name="`databaseMongodbConfig` Submodule" id="@cdktf/provider-digitalocean.databaseMongodbConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMongodbConfig <a name="DatabaseMongodbConfig" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config digitalocean_database_mongodb_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseMongodbConfig(Construct Scope, string Id, DatabaseMongodbConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig">DatabaseMongodbConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig">DatabaseMongodbConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultReadConcern">ResetDefaultReadConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultWriteConcern">ResetDefaultWriteConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetSlowOpThresholdMs">ResetSlowOpThresholdMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetTransactionLifetimeLimitSeconds">ResetTransactionLifetimeLimitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetVerbosity">ResetVerbosity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefaultReadConcern` <a name="ResetDefaultReadConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultReadConcern"></a>

```csharp
private void ResetDefaultReadConcern()
```

##### `ResetDefaultWriteConcern` <a name="ResetDefaultWriteConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultWriteConcern"></a>

```csharp
private void ResetDefaultWriteConcern()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSlowOpThresholdMs` <a name="ResetSlowOpThresholdMs" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetSlowOpThresholdMs"></a>

```csharp
private void ResetSlowOpThresholdMs()
```

##### `ResetTransactionLifetimeLimitSeconds` <a name="ResetTransactionLifetimeLimitSeconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetTransactionLifetimeLimitSeconds"></a>

```csharp
private void ResetTransactionLifetimeLimitSeconds()
```

##### `ResetVerbosity` <a name="ResetVerbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetVerbosity"></a>

```csharp
private void ResetVerbosity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMongodbConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseMongodbConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseMongodbConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseMongodbConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseMongodbConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseMongodbConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMongodbConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMongodbConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMongodbConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcernInput">DefaultReadConcernInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcernInput">DefaultWriteConcernInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMsInput">SlowOpThresholdMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSecondsInput">TransactionLifetimeLimitSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosityInput">VerbosityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcern">DefaultReadConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcern">DefaultWriteConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMs">SlowOpThresholdMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSeconds">TransactionLifetimeLimitSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosity">Verbosity</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `DefaultReadConcernInput`<sup>Optional</sup> <a name="DefaultReadConcernInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcernInput"></a>

```csharp
public string DefaultReadConcernInput { get; }
```

- *Type:* string

---

##### `DefaultWriteConcernInput`<sup>Optional</sup> <a name="DefaultWriteConcernInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcernInput"></a>

```csharp
public string DefaultWriteConcernInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SlowOpThresholdMsInput`<sup>Optional</sup> <a name="SlowOpThresholdMsInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMsInput"></a>

```csharp
public double SlowOpThresholdMsInput { get; }
```

- *Type:* double

---

##### `TransactionLifetimeLimitSecondsInput`<sup>Optional</sup> <a name="TransactionLifetimeLimitSecondsInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSecondsInput"></a>

```csharp
public double TransactionLifetimeLimitSecondsInput { get; }
```

- *Type:* double

---

##### `VerbosityInput`<sup>Optional</sup> <a name="VerbosityInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosityInput"></a>

```csharp
public double VerbosityInput { get; }
```

- *Type:* double

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `DefaultReadConcern`<sup>Required</sup> <a name="DefaultReadConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcern"></a>

```csharp
public string DefaultReadConcern { get; }
```

- *Type:* string

---

##### `DefaultWriteConcern`<sup>Required</sup> <a name="DefaultWriteConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcern"></a>

```csharp
public string DefaultWriteConcern { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SlowOpThresholdMs`<sup>Required</sup> <a name="SlowOpThresholdMs" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMs"></a>

```csharp
public double SlowOpThresholdMs { get; }
```

- *Type:* double

---

##### `TransactionLifetimeLimitSeconds`<sup>Required</sup> <a name="TransactionLifetimeLimitSeconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSeconds"></a>

```csharp
public double TransactionLifetimeLimitSeconds { get; }
```

- *Type:* double

---

##### `Verbosity`<sup>Required</sup> <a name="Verbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosity"></a>

```csharp
public double Verbosity { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMongodbConfigConfig <a name="DatabaseMongodbConfigConfig" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseMongodbConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string DefaultReadConcern = null,
    string DefaultWriteConcern = null,
    string Id = null,
    double SlowOpThresholdMs = null,
    double TransactionLifetimeLimitSeconds = null,
    double Verbosity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultReadConcern">DefaultReadConcern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultWriteConcern">DefaultWriteConcern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.slowOpThresholdMs">SlowOpThresholdMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.transactionLifetimeLimitSeconds">TransactionLifetimeLimitSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.verbosity">Verbosity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}.

---

##### `DefaultReadConcern`<sup>Optional</sup> <a name="DefaultReadConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultReadConcern"></a>

```csharp
public string DefaultReadConcern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}.

---

##### `DefaultWriteConcern`<sup>Optional</sup> <a name="DefaultWriteConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultWriteConcern"></a>

```csharp
public string DefaultWriteConcern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SlowOpThresholdMs`<sup>Optional</sup> <a name="SlowOpThresholdMs" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.slowOpThresholdMs"></a>

```csharp
public double SlowOpThresholdMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}.

---

##### `TransactionLifetimeLimitSeconds`<sup>Optional</sup> <a name="TransactionLifetimeLimitSeconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.transactionLifetimeLimitSeconds"></a>

```csharp
public double TransactionLifetimeLimitSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}.

---

##### `Verbosity`<sup>Optional</sup> <a name="Verbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.verbosity"></a>

```csharp
public double Verbosity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}.

---



