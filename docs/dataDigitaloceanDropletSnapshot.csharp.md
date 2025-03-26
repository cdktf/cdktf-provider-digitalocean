# `dataDigitaloceanDropletSnapshot` Submodule <a name="`dataDigitaloceanDropletSnapshot` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanDropletSnapshot <a name="DataDigitaloceanDropletSnapshot" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot digitalocean_droplet_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletSnapshot(Construct Scope, string Id, DataDigitaloceanDropletSnapshotConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig">DataDigitaloceanDropletSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig">DataDigitaloceanDropletSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetMostRecent">ResetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetNameRegex">ResetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMostRecent` <a name="ResetMostRecent" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetMostRecent"></a>

```csharp
private void ResetMostRecent()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNameRegex` <a name="ResetNameRegex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetNameRegex"></a>

```csharp
private void ResetNameRegex()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanDropletSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDropletSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDropletSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDropletSnapshot.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDropletSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanDropletSnapshot resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanDropletSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanDropletSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanDropletSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.dropletId">DropletId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.minDiskSize">MinDiskSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.mostRecentInput">MostRecentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.nameRegexInput">NameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.mostRecent">MostRecent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.nameRegex">NameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DropletId`<sup>Required</sup> <a name="DropletId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.dropletId"></a>

```csharp
public string DropletId { get; }
```

- *Type:* string

---

##### `MinDiskSize`<sup>Required</sup> <a name="MinDiskSize" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.minDiskSize"></a>

```csharp
public double MinDiskSize { get; }
```

- *Type:* double

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MostRecentInput`<sup>Optional</sup> <a name="MostRecentInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.mostRecentInput"></a>

```csharp
public object MostRecentInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NameRegexInput`<sup>Optional</sup> <a name="NameRegexInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.nameRegexInput"></a>

```csharp
public string NameRegexInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MostRecent`<sup>Required</sup> <a name="MostRecent" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.mostRecent"></a>

```csharp
public object MostRecent { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.nameRegex"></a>

```csharp
public string NameRegex { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanDropletSnapshotConfig <a name="DataDigitaloceanDropletSnapshotConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletSnapshotConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    object MostRecent = null,
    string Name = null,
    string NameRegex = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot#id DataDigitaloceanDropletSnapshot#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.mostRecent">MostRecent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot#most_recent DataDigitaloceanDropletSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot#name DataDigitaloceanDropletSnapshot#name}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.nameRegex">NameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot#name_regex DataDigitaloceanDropletSnapshot#name_regex}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot#region DataDigitaloceanDropletSnapshot#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot#id DataDigitaloceanDropletSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MostRecent`<sup>Optional</sup> <a name="MostRecent" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.mostRecent"></a>

```csharp
public object MostRecent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot#most_recent DataDigitaloceanDropletSnapshot#most_recent}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot#name DataDigitaloceanDropletSnapshot#name}.

---

##### `NameRegex`<sup>Optional</sup> <a name="NameRegex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.nameRegex"></a>

```csharp
public string NameRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot#name_regex DataDigitaloceanDropletSnapshot#name_regex}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletSnapshot.DataDigitaloceanDropletSnapshotConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/droplet_snapshot#region DataDigitaloceanDropletSnapshot#region}.

---



