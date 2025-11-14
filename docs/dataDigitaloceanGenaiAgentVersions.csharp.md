# `dataDigitaloceanGenaiAgentVersions` Submodule <a name="`dataDigitaloceanGenaiAgentVersions` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiAgentVersions <a name="DataDigitaloceanGenaiAgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions digitalocean_genai_agent_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersions(Construct Scope, string Id, DataDigitaloceanGenaiAgentVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig">DataDigitaloceanGenaiAgentVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig">DataDigitaloceanGenaiAgentVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort">PutSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetSort">ResetSort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataDigitaloceanGenaiAgentVersionsFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]

---

##### `PutSort` <a name="PutSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort"></a>

```csharp
private void PutSort(IResolvable|DataDigitaloceanGenaiAgentVersionsSort[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetSort"></a>

```csharp
private void ResetSort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiAgentVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiAgentVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiAgentVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiAgentVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiAgentVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanGenaiAgentVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiAgentVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiAgentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiAgentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentVersions">AgentVersions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList">DataDigitaloceanGenaiAgentVersionsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sort">Sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList">DataDigitaloceanGenaiAgentVersionsSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filterInput">FilterInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sortInput">SortInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AgentVersions`<sup>Required</sup> <a name="AgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentVersions"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsAgentVersionsList AgentVersions { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filter"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList">DataDigitaloceanGenaiAgentVersionsFilterList</a>

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sort"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsSortList Sort { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList">DataDigitaloceanGenaiAgentVersionsSortList</a>

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filterInput"></a>

```csharp
public IResolvable|DataDigitaloceanGenaiAgentVersionsFilter[] FilterInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sortInput"></a>

```csharp
public IResolvable|DataDigitaloceanGenaiAgentVersionsSort[] SortInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiAgentVersionsAgentVersions <a name="DataDigitaloceanGenaiAgentVersionsAgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersions {

};
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents {

};
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions {

};
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails {

};
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases {

};
```


### DataDigitaloceanGenaiAgentVersionsConfig <a name="DataDigitaloceanGenaiAgentVersionsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentId,
    IResolvable|DataDigitaloceanGenaiAgentVersionsFilter[] Filter = null,
    string Id = null,
    IResolvable|DataDigitaloceanGenaiAgentVersionsSort[] Sort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.agentId">AgentId</a></code> | <code>string</code> | The ID of the agent to fetch versions for. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.filter">Filter</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.sort">Sort</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]</code> | sort block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

The ID of the agent to fetch versions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#agent_id DataDigitaloceanGenaiAgentVersions#agent_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.filter"></a>

```csharp
public IResolvable|DataDigitaloceanGenaiAgentVersionsFilter[] Filter { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#filter DataDigitaloceanGenaiAgentVersions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.sort"></a>

```csharp
public IResolvable|DataDigitaloceanGenaiAgentVersionsSort[] Sort { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#sort DataDigitaloceanGenaiAgentVersions#sort}

---

### DataDigitaloceanGenaiAgentVersionsFilter <a name="DataDigitaloceanGenaiAgentVersionsFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsFilter {
    string Key,
    string[] Values,
    bool|IResolvable All = null,
    string MatchBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#values DataDigitaloceanGenaiAgentVersions#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.all">All</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#all DataDigitaloceanGenaiAgentVersions#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.matchBy">MatchBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#match_by DataDigitaloceanGenaiAgentVersions#match_by}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#values DataDigitaloceanGenaiAgentVersions#values}.

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.all"></a>

```csharp
public bool|IResolvable All { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#all DataDigitaloceanGenaiAgentVersions#all}.

---

##### `MatchBy`<sup>Optional</sup> <a name="MatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.matchBy"></a>

```csharp
public string MatchBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#match_by DataDigitaloceanGenaiAgentVersions#match_by}.

---

### DataDigitaloceanGenaiAgentVersionsSort <a name="DataDigitaloceanGenaiAgentVersionsSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsSort {
    string Key,
    string Direction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#direction DataDigitaloceanGenaiAgentVersions#direction}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent_versions#direction DataDigitaloceanGenaiAgentVersions#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get"></a>

```csharp
private DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.agentName">AgentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.childAgentUuid">ChildAgentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.ifCase">IfCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.isDeleted">IsDeleted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.routeName">RouteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.agentName"></a>

```csharp
public string AgentName { get; }
```

- *Type:* string

---

##### `ChildAgentUuid`<sup>Required</sup> <a name="ChildAgentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.childAgentUuid"></a>

```csharp
public string ChildAgentUuid { get; }
```

- *Type:* string

---

##### `IfCase`<sup>Required</sup> <a name="IfCase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.ifCase"></a>

```csharp
public string IfCase { get; }
```

- *Type:* string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.isDeleted"></a>

```csharp
public IResolvable IsDeleted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RouteName`<sup>Required</sup> <a name="RouteName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.routeName"></a>

```csharp
public string RouteName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get"></a>

```csharp
private DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasName">FaasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasNamespace">FaasNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.isDeleted">IsDeleted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FaasName`<sup>Required</sup> <a name="FaasName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasName"></a>

```csharp
public string FaasName { get; }
```

- *Type:* string

---

##### `FaasNamespace`<sup>Required</sup> <a name="FaasNamespace" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasNamespace"></a>

```csharp
public string FaasNamespace { get; }
```

- *Type:* string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.isDeleted"></a>

```csharp
public IResolvable IsDeleted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get"></a>

```csharp
private DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.isDeleted">IsDeleted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.isDeleted"></a>

```csharp
public IResolvable IsDeleted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get"></a>

```csharp
private DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.isDeleted">IsDeleted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.isDeleted"></a>

```csharp
public IResolvable IsDeleted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get"></a>

```csharp
private DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.agentUuid">AgentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedChildAgents">AttachedChildAgents</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedFunctions">AttachedFunctions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedGuardrails">AttachedGuardrails</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedKnowledgeBases">AttachedKnowledgeBases</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.canRollback">CanRollback</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdByEmail">CreatedByEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.currentlyApplied">CurrentlyApplied</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.k">K</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.provideCitations">ProvideCitations</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.retrievalMethod">RetrievalMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.triggerAction">TriggerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.versionHash">VersionHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions">DataDigitaloceanGenaiAgentVersionsAgentVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentUuid`<sup>Required</sup> <a name="AgentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.agentUuid"></a>

```csharp
public string AgentUuid { get; }
```

- *Type:* string

---

##### `AttachedChildAgents`<sup>Required</sup> <a name="AttachedChildAgents" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedChildAgents"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList AttachedChildAgents { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList</a>

---

##### `AttachedFunctions`<sup>Required</sup> <a name="AttachedFunctions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedFunctions"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList AttachedFunctions { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList</a>

---

##### `AttachedGuardrails`<sup>Required</sup> <a name="AttachedGuardrails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedGuardrails"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList AttachedGuardrails { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList</a>

---

##### `AttachedKnowledgeBases`<sup>Required</sup> <a name="AttachedKnowledgeBases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedKnowledgeBases"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList AttachedKnowledgeBases { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList</a>

---

##### `CanRollback`<sup>Required</sup> <a name="CanRollback" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.canRollback"></a>

```csharp
public IResolvable CanRollback { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedByEmail`<sup>Required</sup> <a name="CreatedByEmail" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdByEmail"></a>

```csharp
public string CreatedByEmail { get; }
```

- *Type:* string

---

##### `CurrentlyApplied`<sup>Required</sup> <a name="CurrentlyApplied" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.currentlyApplied"></a>

```csharp
public IResolvable CurrentlyApplied { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `K`<sup>Required</sup> <a name="K" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.k"></a>

```csharp
public double K { get; }
```

- *Type:* double

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProvideCitations`<sup>Required</sup> <a name="ProvideCitations" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.provideCitations"></a>

```csharp
public IResolvable ProvideCitations { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RetrievalMethod`<sup>Required</sup> <a name="RetrievalMethod" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.retrievalMethod"></a>

```csharp
public string RetrievalMethod { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `TriggerAction`<sup>Required</sup> <a name="TriggerAction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.triggerAction"></a>

```csharp
public string TriggerAction { get; }
```

- *Type:* string

---

##### `VersionHash`<sup>Required</sup> <a name="VersionHash" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.versionHash"></a>

```csharp
public string VersionHash { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiAgentVersionsAgentVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions">DataDigitaloceanGenaiAgentVersionsAgentVersions</a>

---


### DataDigitaloceanGenaiAgentVersionsFilterList <a name="DataDigitaloceanGenaiAgentVersionsFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get"></a>

```csharp
private DataDigitaloceanGenaiAgentVersionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataDigitaloceanGenaiAgentVersionsFilter[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>[]

---


### DataDigitaloceanGenaiAgentVersionsFilterOutputReference <a name="DataDigitaloceanGenaiAgentVersionsFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetMatchBy">ResetMatchBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetMatchBy` <a name="ResetMatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetMatchBy"></a>

```csharp
private void ResetMatchBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.allInput">AllInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchByInput">MatchByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.all">All</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchBy">MatchBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.allInput"></a>

```csharp
public bool|IResolvable AllInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchByInput`<sup>Optional</sup> <a name="MatchByInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchByInput"></a>

```csharp
public string MatchByInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.all"></a>

```csharp
public bool|IResolvable All { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchBy`<sup>Required</sup> <a name="MatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchBy"></a>

```csharp
public string MatchBy { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDigitaloceanGenaiAgentVersionsFilter InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>

---


### DataDigitaloceanGenaiAgentVersionsSortList <a name="DataDigitaloceanGenaiAgentVersionsSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsSortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get"></a>

```csharp
private DataDigitaloceanGenaiAgentVersionsSortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.internalValue"></a>

```csharp
public IResolvable|DataDigitaloceanGenaiAgentVersionsSort[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>[]

---


### DataDigitaloceanGenaiAgentVersionsSortOutputReference <a name="DataDigitaloceanGenaiAgentVersionsSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiAgentVersionsSortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDigitaloceanGenaiAgentVersionsSort InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>

---



