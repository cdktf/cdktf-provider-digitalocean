# `dataDigitaloceanGenaiOpenaiApiKeys` Submodule <a name="`dataDigitaloceanGenaiOpenaiApiKeys` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiOpenaiApiKeys <a name="DataDigitaloceanGenaiOpenaiApiKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys digitalocean_genai_openai_api_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeys(Construct Scope, string Id, DataDigitaloceanGenaiOpenaiApiKeysConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig">DataDigitaloceanGenaiOpenaiApiKeysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig">DataDigitaloceanGenaiOpenaiApiKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort">PutSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetSort">ResetSort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter.parameter.value"></a>

- *Type:* object

---

##### `PutSort` <a name="PutSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort"></a>

```csharp
private void PutSort(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetSort"></a>

```csharp
private void ResetSort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiOpenaiApiKeys.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiOpenaiApiKeys.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiOpenaiApiKeys.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiOpenaiApiKeys.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKeys resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiOpenaiApiKeys to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiOpenaiApiKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiOpenaiApiKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList">DataDigitaloceanGenaiOpenaiApiKeysFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.openaiApiKeys">OpenaiApiKeys</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sort">Sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList">DataDigitaloceanGenaiOpenaiApiKeysSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sortInput">SortInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filter"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeysFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList">DataDigitaloceanGenaiOpenaiApiKeysFilterList</a>

---

##### `OpenaiApiKeys`<sup>Required</sup> <a name="OpenaiApiKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.openaiApiKeys"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList OpenaiApiKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList</a>

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sort"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeysSortList Sort { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList">DataDigitaloceanGenaiOpenaiApiKeysSortList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sortInput"></a>

```csharp
public object SortInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiOpenaiApiKeysConfig <a name="DataDigitaloceanGenaiOpenaiApiKeysConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Filter = null,
    string Id = null,
    object Sort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#id DataDigitaloceanGenaiOpenaiApiKeys#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.sort">Sort</a></code> | <code>object</code> | sort block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#filter DataDigitaloceanGenaiOpenaiApiKeys#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#id DataDigitaloceanGenaiOpenaiApiKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.sort"></a>

```csharp
public object Sort { get; set; }
```

- *Type:* object

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#sort DataDigitaloceanGenaiOpenaiApiKeys#sort}

---

### DataDigitaloceanGenaiOpenaiApiKeysFilter <a name="DataDigitaloceanGenaiOpenaiApiKeysFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysFilter {
    string Key,
    string[] Values,
    object All = null,
    string MatchBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#values DataDigitaloceanGenaiOpenaiApiKeys#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.all">All</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#all DataDigitaloceanGenaiOpenaiApiKeys#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.matchBy">MatchBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#match_by DataDigitaloceanGenaiOpenaiApiKeys#match_by}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#values DataDigitaloceanGenaiOpenaiApiKeys#values}.

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.all"></a>

```csharp
public object All { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#all DataDigitaloceanGenaiOpenaiApiKeys#all}.

---

##### `MatchBy`<sup>Optional</sup> <a name="MatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.matchBy"></a>

```csharp
public string MatchBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#match_by DataDigitaloceanGenaiOpenaiApiKeys#match_by}.

---

### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys {

};
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels {

};
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement {

};
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions {

};
```


### DataDigitaloceanGenaiOpenaiApiKeysSort <a name="DataDigitaloceanGenaiOpenaiApiKeysSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysSort {
    string Key,
    string Direction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#direction DataDigitaloceanGenaiOpenaiApiKeys#direction}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_keys#direction DataDigitaloceanGenaiOpenaiApiKeys#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiOpenaiApiKeysFilterList <a name="DataDigitaloceanGenaiOpenaiApiKeysFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get"></a>

```csharp
private DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetMatchBy">ResetMatchBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetMatchBy` <a name="ResetMatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetMatchBy"></a>

```csharp
private void ResetMatchBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.allInput">AllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchByInput">MatchByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.all">All</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchBy">MatchBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.allInput"></a>

```csharp
public object AllInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchByInput`<sup>Optional</sup> <a name="MatchByInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchByInput"></a>

```csharp
public string MatchByInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.all"></a>

```csharp
public object All { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchBy`<sup>Required</sup> <a name="MatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchBy"></a>

```csharp
public string MatchBy { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get"></a>

```csharp
private DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get"></a>

```csharp
private DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get"></a>

```csharp
private DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.agreement">Agreement</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceName">InferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceVersion">InferenceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.isFoundational">IsFoundational</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.parentUuid">ParentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.uploadComplete">UploadComplete</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.usecases">Usecases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Agreement`<sup>Required</sup> <a name="Agreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.agreement"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList Agreement { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `InferenceName`<sup>Required</sup> <a name="InferenceName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceName"></a>

```csharp
public string InferenceName { get; }
```

- *Type:* string

---

##### `InferenceVersion`<sup>Required</sup> <a name="InferenceVersion" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceVersion"></a>

```csharp
public string InferenceVersion { get; }
```

- *Type:* string

---

##### `IsFoundational`<sup>Required</sup> <a name="IsFoundational" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.isFoundational"></a>

```csharp
public IResolvable IsFoundational { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentUuid`<sup>Required</sup> <a name="ParentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.parentUuid"></a>

```csharp
public string ParentUuid { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UploadComplete`<sup>Required</sup> <a name="UploadComplete" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.uploadComplete"></a>

```csharp
public IResolvable UploadComplete { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Usecases`<sup>Required</sup> <a name="Usecases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.usecases"></a>

```csharp
public string[] Usecases { get; }
```

- *Type:* string[]

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.versions"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList Versions { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get"></a>

```csharp
private DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.major">Major</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.minor">Minor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.patch">Patch</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Major`<sup>Required</sup> <a name="Major" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.major"></a>

```csharp
public double Major { get; }
```

- *Type:* double

---

##### `Minor`<sup>Required</sup> <a name="Minor" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.minor"></a>

```csharp
public double Minor { get; }
```

- *Type:* double

---

##### `Patch`<sup>Required</sup> <a name="Patch" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.patch"></a>

```csharp
public double Patch { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.deletedAt">DeletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.models">Models</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.deletedAt"></a>

```csharp
public string DeletedAt { get; }
```

- *Type:* string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.models"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList Models { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysSortList <a name="DataDigitaloceanGenaiOpenaiApiKeysSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysSortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get"></a>

```csharp
private DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



