# `databaseOnlineMigration` Submodule <a name="`databaseOnlineMigration` Submodule" id="@cdktf/provider-digitalocean.databaseOnlineMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOnlineMigration <a name="DatabaseOnlineMigration" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration digitalocean_database_online_migration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseOnlineMigration(Construct Scope, string Id, DatabaseOnlineMigrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig">DatabaseOnlineMigrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig">DatabaseOnlineMigrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetDisableSsl">ResetDisableSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetIgnoreDbs">ResetIgnoreDbs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource"></a>

```csharp
private void PutSource(DatabaseOnlineMigrationSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---

##### `ResetDisableSsl` <a name="ResetDisableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetDisableSsl"></a>

```csharp
private void ResetDisableSsl()
```

##### `ResetIgnoreDbs` <a name="ResetIgnoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetIgnoreDbs"></a>

```csharp
private void ResetIgnoreDbs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseOnlineMigration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseOnlineMigration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseOnlineMigration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseOnlineMigration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseOnlineMigration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseOnlineMigration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseOnlineMigration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseOnlineMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOnlineMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.source">Source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference">DatabaseOnlineMigrationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSslInput">DisableSslInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbsInput">IgnoreDbsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSsl">DisableSsl</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbs">IgnoreDbs</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.source"></a>

```csharp
public DatabaseOnlineMigrationSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference">DatabaseOnlineMigrationSourceOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `DisableSslInput`<sup>Optional</sup> <a name="DisableSslInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSslInput"></a>

```csharp
public bool|IResolvable DisableSslInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IgnoreDbsInput`<sup>Optional</sup> <a name="IgnoreDbsInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbsInput"></a>

```csharp
public string[] IgnoreDbsInput { get; }
```

- *Type:* string[]

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.sourceInput"></a>

```csharp
public DatabaseOnlineMigrationSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `DisableSsl`<sup>Required</sup> <a name="DisableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSsl"></a>

```csharp
public bool|IResolvable DisableSsl { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IgnoreDbs`<sup>Required</sup> <a name="IgnoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbs"></a>

```csharp
public string[] IgnoreDbs { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOnlineMigrationConfig <a name="DatabaseOnlineMigrationConfig" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseOnlineMigrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterId,
    DatabaseOnlineMigrationSource Source,
    bool|IResolvable DisableSsl = null,
    string[] IgnoreDbs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.disableSsl">DisableSsl</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Disables SSL encryption when connecting to the source database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.ignoreDbs">IgnoreDbs</a></code> | <code>string[]</code> | The list of databases to be ignored during the migration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.source"></a>

```csharp
public DatabaseOnlineMigrationSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#source DatabaseOnlineMigration#source}

---

##### `DisableSsl`<sup>Optional</sup> <a name="DisableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.disableSsl"></a>

```csharp
public bool|IResolvable DisableSsl { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Disables SSL encryption when connecting to the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#disable_ssl DatabaseOnlineMigration#disable_ssl}

---

##### `IgnoreDbs`<sup>Optional</sup> <a name="IgnoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.ignoreDbs"></a>

```csharp
public string[] IgnoreDbs { get; set; }
```

- *Type:* string[]

The list of databases to be ignored during the migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#ignore_dbs DatabaseOnlineMigration#ignore_dbs}

---

### DatabaseOnlineMigrationSource <a name="DatabaseOnlineMigrationSource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseOnlineMigrationSource {
    string DbName,
    string Host,
    string Password,
    double Port,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.dbName">DbName</a></code> | <code>string</code> | The name of the default database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.host">Host</a></code> | <code>string</code> | The FQDN pointing to the database cluster's current primary node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.password">Password</a></code> | <code>string</code> | The password of the database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.port">Port</a></code> | <code>double</code> | The port on which the database cluster is listening. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.username">Username</a></code> | <code>string</code> | The default user of the database. |

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

The name of the default database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#db_name DatabaseOnlineMigration#db_name}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The FQDN pointing to the database cluster's current primary node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#host DatabaseOnlineMigration#host}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#password DatabaseOnlineMigration#password}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port on which the database cluster is listening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#port DatabaseOnlineMigration#port}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The default user of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/database_online_migration#username DatabaseOnlineMigration#username}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseOnlineMigrationSourceOutputReference <a name="DatabaseOnlineMigrationSourceOutputReference" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseOnlineMigrationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.internalValue"></a>

```csharp
public DatabaseOnlineMigrationSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---



