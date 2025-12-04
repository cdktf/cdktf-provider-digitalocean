# `dataDigitaloceanGenaiIndexingJobDataSources` Submodule <a name="`dataDigitaloceanGenaiIndexingJobDataSources` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiIndexingJobDataSources <a name="DataDigitaloceanGenaiIndexingJobDataSources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources digitalocean_genai_indexing_job_data_sources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiIndexingJobDataSources(Construct Scope, string Id, DataDigitaloceanGenaiIndexingJobDataSourcesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig">DataDigitaloceanGenaiIndexingJobDataSourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig">DataDigitaloceanGenaiIndexingJobDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJobDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiIndexingJobDataSources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiIndexingJobDataSources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiIndexingJobDataSources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiIndexingJobDataSources.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJobDataSources resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiIndexingJobDataSources to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiIndexingJobDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiIndexingJobDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexedDataSources">IndexedDataSources</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuidInput">IndexingJobUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuid">IndexingJobUuid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IndexedDataSources`<sup>Required</sup> <a name="IndexedDataSources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexedDataSources"></a>

```csharp
public DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList IndexedDataSources { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexingJobUuidInput`<sup>Optional</sup> <a name="IndexingJobUuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuidInput"></a>

```csharp
public string IndexingJobUuidInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexingJobUuid`<sup>Required</sup> <a name="IndexingJobUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.indexingJobUuid"></a>

```csharp
public string IndexingJobUuid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiIndexingJobDataSourcesConfig <a name="DataDigitaloceanGenaiIndexingJobDataSourcesConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiIndexingJobDataSourcesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IndexingJobUuid,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.indexingJobUuid">IndexingJobUuid</a></code> | <code>string</code> | UUID of the indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources#id DataDigitaloceanGenaiIndexingJobDataSources#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `IndexingJobUuid`<sup>Required</sup> <a name="IndexingJobUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.indexingJobUuid"></a>

```csharp
public string IndexingJobUuid { get; set; }
```

- *Type:* string

UUID of the indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources#indexing_job_uuid DataDigitaloceanGenaiIndexingJobDataSources#indexing_job_uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources#id DataDigitaloceanGenaiIndexingJobDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources <a name="DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList <a name="DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.get"></a>

```csharp
private DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference <a name="DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.completedAt">CompletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.dataSourceUuid">DataSourceUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorMsg">ErrorMsg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.failedItemCount">FailedItemCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedFileCount">IndexedFileCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedItemCount">IndexedItemCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.removedItemCount">RemovedItemCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.skippedItemCount">SkippedItemCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.startedAt">StartedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytes">TotalBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytesIndexed">TotalBytesIndexed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalFileCount">TotalFileCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompletedAt`<sup>Required</sup> <a name="CompletedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.completedAt"></a>

```csharp
public string CompletedAt { get; }
```

- *Type:* string

---

##### `DataSourceUuid`<sup>Required</sup> <a name="DataSourceUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.dataSourceUuid"></a>

```csharp
public string DataSourceUuid { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `ErrorMsg`<sup>Required</sup> <a name="ErrorMsg" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.errorMsg"></a>

```csharp
public string ErrorMsg { get; }
```

- *Type:* string

---

##### `FailedItemCount`<sup>Required</sup> <a name="FailedItemCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.failedItemCount"></a>

```csharp
public string FailedItemCount { get; }
```

- *Type:* string

---

##### `IndexedFileCount`<sup>Required</sup> <a name="IndexedFileCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedFileCount"></a>

```csharp
public string IndexedFileCount { get; }
```

- *Type:* string

---

##### `IndexedItemCount`<sup>Required</sup> <a name="IndexedItemCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.indexedItemCount"></a>

```csharp
public string IndexedItemCount { get; }
```

- *Type:* string

---

##### `RemovedItemCount`<sup>Required</sup> <a name="RemovedItemCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.removedItemCount"></a>

```csharp
public string RemovedItemCount { get; }
```

- *Type:* string

---

##### `SkippedItemCount`<sup>Required</sup> <a name="SkippedItemCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.skippedItemCount"></a>

```csharp
public string SkippedItemCount { get; }
```

- *Type:* string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.startedAt"></a>

```csharp
public string StartedAt { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TotalBytes`<sup>Required</sup> <a name="TotalBytes" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytes"></a>

```csharp
public string TotalBytes { get; }
```

- *Type:* string

---

##### `TotalBytesIndexed`<sup>Required</sup> <a name="TotalBytesIndexed" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalBytesIndexed"></a>

```csharp
public string TotalBytesIndexed { get; }
```

- *Type:* string

---

##### `TotalFileCount`<sup>Required</sup> <a name="TotalFileCount" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.totalFileCount"></a>

```csharp
public string TotalFileCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJobDataSources.DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources">DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources</a>

---



