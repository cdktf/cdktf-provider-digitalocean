# `dataDigitaloceanGenaiKnowledgeBaseDataSources` Submodule <a name="`dataDigitaloceanGenaiKnowledgeBaseDataSources` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiKnowledgeBaseDataSources <a name="DataDigitaloceanGenaiKnowledgeBaseDataSources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/genai_knowledge_base_data_sources digitalocean_genai_knowledge_base_data_sources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSources(Construct Scope, string Id, DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig">DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig">DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBaseDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiKnowledgeBaseDataSources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiKnowledgeBaseDataSources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiKnowledgeBaseDataSources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiKnowledgeBaseDataSources.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBaseDataSources resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiKnowledgeBaseDataSources to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiKnowledgeBaseDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/genai_knowledge_base_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiKnowledgeBaseDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.datasources">Datasources</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuidInput">KnowledgeBaseUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Datasources`<sup>Required</sup> <a name="Datasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.datasources"></a>

```csharp
public DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList Datasources { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KnowledgeBaseUuidInput`<sup>Optional</sup> <a name="KnowledgeBaseUuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuidInput"></a>

```csharp
public string KnowledgeBaseUuidInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuid"></a>

```csharp
public string KnowledgeBaseUuid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KnowledgeBaseUuid,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>string</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/genai_knowledge_base_data_sources#id DataDigitaloceanGenaiKnowledgeBaseDataSources#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.knowledgeBaseUuid"></a>

```csharp
public string KnowledgeBaseUuid { get; set; }
```

- *Type:* string

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/genai_knowledge_base_data_sources#knowledge_base_uuid DataDigitaloceanGenaiKnowledgeBaseDataSources#knowledge_base_uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/genai_knowledge_base_data_sources#id DataDigitaloceanGenaiKnowledgeBaseDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources {

};
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource {

};
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob {

};
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource {

};
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.get"></a>

```csharp
private DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.originalFileName">OriginalFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes">SizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey">StoredObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OriginalFileName`<sup>Required</sup> <a name="OriginalFileName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.originalFileName"></a>

```csharp
public string OriginalFileName { get; }
```

- *Type:* string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes"></a>

```csharp
public string SizeInBytes { get; }
```

- *Type:* string

---

##### `StoredObjectKey`<sup>Required</sup> <a name="StoredObjectKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey"></a>

```csharp
public string StoredObjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.get"></a>

```csharp
private DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.completedDatasources">CompletedDatasources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids">DataSourceUuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.finishedAt">FinishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.phase">Phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.startedAt">StartedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.tokens">Tokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.totalDatasources">TotalDatasources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompletedDatasources`<sup>Required</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.completedDatasources"></a>

```csharp
public double CompletedDatasources { get; }
```

- *Type:* double

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DataSourceUuids`<sup>Required</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```csharp
public string[] DataSourceUuids { get; }
```

- *Type:* string[]

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.finishedAt"></a>

```csharp
public string FinishedAt { get; }
```

- *Type:* string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```csharp
public string KnowledgeBaseUuid { get; }
```

- *Type:* string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.phase"></a>

```csharp
public string Phase { get; }
```

- *Type:* string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.startedAt"></a>

```csharp
public string StartedAt { get; }
```

- *Type:* string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.tokens"></a>

```csharp
public double Tokens { get; }
```

- *Type:* double

---

##### `TotalDatasources`<sup>Required</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.totalDatasources"></a>

```csharp
public double TotalDatasources { get; }
```

- *Type:* double

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.get"></a>

```csharp
private DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fileUploadDataSource">FileUploadDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.lastIndexingJob">LastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.spacesDataSource">SpacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.webCrawlerDataSource">WebCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FileUploadDataSource`<sup>Required</sup> <a name="FileUploadDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fileUploadDataSource"></a>

```csharp
public DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList FileUploadDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList</a>

---

##### `LastIndexingJob`<sup>Required</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.lastIndexingJob"></a>

```csharp
public DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList LastIndexingJob { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList</a>

---

##### `SpacesDataSource`<sup>Required</sup> <a name="SpacesDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.spacesDataSource"></a>

```csharp
public DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList SpacesDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `WebCrawlerDataSource`<sup>Required</sup> <a name="WebCrawlerDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.webCrawlerDataSource"></a>

```csharp
public DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList WebCrawlerDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.get"></a>

```csharp
private DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.itemPath">ItemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ItemPath`<sup>Required</sup> <a name="ItemPath" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.itemPath"></a>

```csharp
public string ItemPath { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.get"></a>

```csharp
private DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption">CrawlingOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia">EmbedMedia</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `CrawlingOption`<sup>Required</sup> <a name="CrawlingOption" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```csharp
public string CrawlingOption { get; }
```

- *Type:* string

---

##### `EmbedMedia`<sup>Required</sup> <a name="EmbedMedia" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```csharp
public IResolvable EmbedMedia { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource</a>

---



