# `dataDigitaloceanDropletAutoscale` Submodule <a name="`dataDigitaloceanDropletAutoscale` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanDropletAutoscale <a name="DataDigitaloceanDropletAutoscale" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/droplet_autoscale digitalocean_droplet_autoscale}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletAutoscale(Construct Scope, string Id, DataDigitaloceanDropletAutoscaleConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig">DataDigitaloceanDropletAutoscaleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig">DataDigitaloceanDropletAutoscaleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanDropletAutoscale resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDropletAutoscale.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDropletAutoscale.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDropletAutoscale.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDropletAutoscale.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanDropletAutoscale resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanDropletAutoscale to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanDropletAutoscale that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/droplet_autoscale#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanDropletAutoscale to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList">DataDigitaloceanDropletAutoscaleConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.currentUtilization">CurrentUtilization</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList">DataDigitaloceanDropletAutoscaleCurrentUtilizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dropletTemplate">DropletTemplate</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList">DataDigitaloceanDropletAutoscaleDropletTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.config"></a>

```csharp
public DataDigitaloceanDropletAutoscaleConfigAList Config { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList">DataDigitaloceanDropletAutoscaleConfigAList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CurrentUtilization`<sup>Required</sup> <a name="CurrentUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.currentUtilization"></a>

```csharp
public DataDigitaloceanDropletAutoscaleCurrentUtilizationList CurrentUtilization { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList">DataDigitaloceanDropletAutoscaleCurrentUtilizationList</a>

---

##### `DropletTemplate`<sup>Required</sup> <a name="DropletTemplate" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dropletTemplate"></a>

```csharp
public DataDigitaloceanDropletAutoscaleDropletTemplateList DropletTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList">DataDigitaloceanDropletAutoscaleDropletTemplateList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanDropletAutoscaleConfig <a name="DataDigitaloceanDropletAutoscaleConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletAutoscaleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.id">Id</a></code> | <code>string</code> | ID of the Droplet autoscale pool. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.name">Name</a></code> | <code>string</code> | Name of the Droplet autoscale pool. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/droplet_autoscale#id DataDigitaloceanDropletAutoscale#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/droplet_autoscale#name DataDigitaloceanDropletAutoscale#name}

---

### DataDigitaloceanDropletAutoscaleConfigA <a name="DataDigitaloceanDropletAutoscaleConfigA" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletAutoscaleConfigA {

};
```


### DataDigitaloceanDropletAutoscaleCurrentUtilization <a name="DataDigitaloceanDropletAutoscaleCurrentUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletAutoscaleCurrentUtilization {

};
```


### DataDigitaloceanDropletAutoscaleDropletTemplate <a name="DataDigitaloceanDropletAutoscaleDropletTemplate" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletAutoscaleDropletTemplate {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanDropletAutoscaleConfigAList <a name="DataDigitaloceanDropletAutoscaleConfigAList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletAutoscaleConfigAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get"></a>

```csharp
private DataDigitaloceanDropletAutoscaleConfigAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanDropletAutoscaleConfigAOutputReference <a name="DataDigitaloceanDropletAutoscaleConfigAOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletAutoscaleConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.cooldownMinutes">CooldownMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.minInstances">MinInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetCpuUtilization">TargetCpuUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization">TargetMemoryUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetNumberInstances">TargetNumberInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA">DataDigitaloceanDropletAutoscaleConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CooldownMinutes`<sup>Required</sup> <a name="CooldownMinutes" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.cooldownMinutes"></a>

```csharp
public double CooldownMinutes { get; }
```

- *Type:* double

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.minInstances"></a>

```csharp
public double MinInstances { get; }
```

- *Type:* double

---

##### `TargetCpuUtilization`<sup>Required</sup> <a name="TargetCpuUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetCpuUtilization"></a>

```csharp
public double TargetCpuUtilization { get; }
```

- *Type:* double

---

##### `TargetMemoryUtilization`<sup>Required</sup> <a name="TargetMemoryUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization"></a>

```csharp
public double TargetMemoryUtilization { get; }
```

- *Type:* double

---

##### `TargetNumberInstances`<sup>Required</sup> <a name="TargetNumberInstances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetNumberInstances"></a>

```csharp
public double TargetNumberInstances { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanDropletAutoscaleConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA">DataDigitaloceanDropletAutoscaleConfigA</a>

---


### DataDigitaloceanDropletAutoscaleCurrentUtilizationList <a name="DataDigitaloceanDropletAutoscaleCurrentUtilizationList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletAutoscaleCurrentUtilizationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get"></a>

```csharp
private DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference <a name="DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization">DataDigitaloceanDropletAutoscaleCurrentUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanDropletAutoscaleCurrentUtilization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization">DataDigitaloceanDropletAutoscaleCurrentUtilization</a>

---


### DataDigitaloceanDropletAutoscaleDropletTemplateList <a name="DataDigitaloceanDropletAutoscaleDropletTemplateList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletAutoscaleDropletTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get"></a>

```csharp
private DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference <a name="DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.ipv6">Ipv6</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.vpcUuid">VpcUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent">WithDropletAgent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate">DataDigitaloceanDropletAutoscaleDropletTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.ipv6"></a>

```csharp
public IResolvable Ipv6 { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.vpcUuid"></a>

```csharp
public string VpcUuid { get; }
```

- *Type:* string

---

##### `WithDropletAgent`<sup>Required</sup> <a name="WithDropletAgent" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent"></a>

```csharp
public IResolvable WithDropletAgent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanDropletAutoscaleDropletTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate">DataDigitaloceanDropletAutoscaleDropletTemplate</a>

---



