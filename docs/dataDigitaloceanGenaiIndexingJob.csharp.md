# `dataDigitaloceanGenaiIndexingJob` Submodule <a name="`dataDigitaloceanGenaiIndexingJob` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiIndexingJob <a name="DataDigitaloceanGenaiIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job digitalocean_genai_indexing_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiIndexingJob(Construct Scope, string Id, DataDigitaloceanGenaiIndexingJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig">DataDigitaloceanGenaiIndexingJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig">DataDigitaloceanGenaiIndexingJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiIndexingJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiIndexingJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiIndexingJob.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiIndexingJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiIndexingJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiIndexingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiIndexingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.completedDatasources">CompletedDatasources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dataSourceUuids">DataSourceUuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.finishedAt">FinishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.phase">Phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.startedAt">StartedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tokens">Tokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalDatasources">TotalDatasources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsFailed">TotalItemsFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsIndexed">TotalItemsIndexed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsSkipped">TotalItemsSkipped</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompletedDatasources`<sup>Required</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.completedDatasources"></a>

```csharp
public double CompletedDatasources { get; }
```

- *Type:* double

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DataSourceUuids`<sup>Required</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dataSourceUuids"></a>

```csharp
public string[] DataSourceUuids { get; }
```

- *Type:* string[]

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.finishedAt"></a>

```csharp
public string FinishedAt { get; }
```

- *Type:* string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.knowledgeBaseUuid"></a>

```csharp
public string KnowledgeBaseUuid { get; }
```

- *Type:* string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.phase"></a>

```csharp
public string Phase { get; }
```

- *Type:* string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.startedAt"></a>

```csharp
public string StartedAt { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tokens"></a>

```csharp
public double Tokens { get; }
```

- *Type:* double

---

##### `TotalDatasources`<sup>Required</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalDatasources"></a>

```csharp
public double TotalDatasources { get; }
```

- *Type:* double

---

##### `TotalItemsFailed`<sup>Required</sup> <a name="TotalItemsFailed" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsFailed"></a>

```csharp
public string TotalItemsFailed { get; }
```

- *Type:* string

---

##### `TotalItemsIndexed`<sup>Required</sup> <a name="TotalItemsIndexed" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsIndexed"></a>

```csharp
public string TotalItemsIndexed { get; }
```

- *Type:* string

---

##### `TotalItemsSkipped`<sup>Required</sup> <a name="TotalItemsSkipped" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsSkipped"></a>

```csharp
public string TotalItemsSkipped { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiIndexingJobConfig <a name="DataDigitaloceanGenaiIndexingJobConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiIndexingJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Uuid,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.uuid">Uuid</a></code> | <code>string</code> | UUID of the indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job#id DataDigitaloceanGenaiIndexingJob#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

UUID of the indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job#uuid DataDigitaloceanGenaiIndexingJob#uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_indexing_job#id DataDigitaloceanGenaiIndexingJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



