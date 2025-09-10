# `dataDigitaloceanGenaiOpenaiApiKey` Submodule <a name="`dataDigitaloceanGenaiOpenaiApiKey` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiOpenaiApiKey <a name="DataDigitaloceanGenaiOpenaiApiKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_key digitalocean_genai_openai_api_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKey(Construct Scope, string Id, DataDigitaloceanGenaiOpenaiApiKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig">DataDigitaloceanGenaiOpenaiApiKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig">DataDigitaloceanGenaiOpenaiApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiOpenaiApiKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiOpenaiApiKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiOpenaiApiKey.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanGenaiOpenaiApiKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanGenaiOpenaiApiKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanGenaiOpenaiApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiOpenaiApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.deletedAt">DeletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.models">Models</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList">DataDigitaloceanGenaiOpenaiApiKeyModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.deletedAt"></a>

```csharp
public string DeletedAt { get; }
```

- *Type:* string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.models"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeyModelsList Models { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList">DataDigitaloceanGenaiOpenaiApiKeyModelsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiOpenaiApiKeyConfig <a name="DataDigitaloceanGenaiOpenaiApiKeyConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Uuid,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.uuid">Uuid</a></code> | <code>string</code> | OpenAI API Key Uuid. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_key#id DataDigitaloceanGenaiOpenaiApiKey#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

OpenAI API Key Uuid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_key#uuid DataDigitaloceanGenaiOpenaiApiKey#uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/data-sources/genai_openai_api_key#id DataDigitaloceanGenaiOpenaiApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanGenaiOpenaiApiKeyModels <a name="DataDigitaloceanGenaiOpenaiApiKeyModels" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeyModels {

};
```


### DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement {

};
```


### DataDigitaloceanGenaiOpenaiApiKeyModelsVersions <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeyModelsVersions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.get"></a>

```csharp
private DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreement</a>

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsList <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeyModelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.get"></a>

```csharp
private DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.agreement">Agreement</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceName">InferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceVersion">InferenceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.isFoundational">IsFoundational</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.parentUuid">ParentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.uploadComplete">UploadComplete</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.usecases">Usecases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels">DataDigitaloceanGenaiOpenaiApiKeyModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Agreement`<sup>Required</sup> <a name="Agreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.agreement"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList Agreement { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeyModelsAgreementList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `InferenceName`<sup>Required</sup> <a name="InferenceName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceName"></a>

```csharp
public string InferenceName { get; }
```

- *Type:* string

---

##### `InferenceVersion`<sup>Required</sup> <a name="InferenceVersion" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.inferenceVersion"></a>

```csharp
public string InferenceVersion { get; }
```

- *Type:* string

---

##### `IsFoundational`<sup>Required</sup> <a name="IsFoundational" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.isFoundational"></a>

```csharp
public IResolvable IsFoundational { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentUuid`<sup>Required</sup> <a name="ParentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.parentUuid"></a>

```csharp
public string ParentUuid { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UploadComplete`<sup>Required</sup> <a name="UploadComplete" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.uploadComplete"></a>

```csharp
public IResolvable UploadComplete { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Usecases`<sup>Required</sup> <a name="Usecases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.usecases"></a>

```csharp
public string[] Usecases { get; }
```

- *Type:* string[]

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.versions"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList Versions { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeyModels InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModels">DataDigitaloceanGenaiOpenaiApiKeyModels</a>

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.get"></a>

```csharp
private DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.major">Major</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.minor">Minor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.patch">Patch</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions">DataDigitaloceanGenaiOpenaiApiKeyModelsVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Major`<sup>Required</sup> <a name="Major" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.major"></a>

```csharp
public double Major { get; }
```

- *Type:* double

---

##### `Minor`<sup>Required</sup> <a name="Minor" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.minor"></a>

```csharp
public double Minor { get; }
```

- *Type:* double

---

##### `Patch`<sup>Required</sup> <a name="Patch" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.patch"></a>

```csharp
public double Patch { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersionsOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanGenaiOpenaiApiKeyModelsVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKey.DataDigitaloceanGenaiOpenaiApiKeyModelsVersions">DataDigitaloceanGenaiOpenaiApiKeyModelsVersions</a>

---



