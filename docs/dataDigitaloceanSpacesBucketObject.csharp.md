# `dataDigitaloceanSpacesBucketObject` Submodule <a name="`dataDigitaloceanSpacesBucketObject` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanSpacesBucketObject <a name="DataDigitaloceanSpacesBucketObject" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object digitalocean_spaces_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanSpacesBucketObject(Construct Scope, string Id, DataDigitaloceanSpacesBucketObjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig">DataDigitaloceanSpacesBucketObjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig">DataDigitaloceanSpacesBucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetVersionId"></a>

```csharp
private void ResetVersionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanSpacesBucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanSpacesBucketObject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanSpacesBucketObject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanSpacesBucketObject.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanSpacesBucketObject.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanSpacesBucketObject resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanSpacesBucketObject to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanSpacesBucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanSpacesBucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentLength">ContentLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.expires">Expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.websiteRedirectLocation">WebsiteRedirectLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.rangeInput">RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentLength"></a>

```csharp
public double ContentLength { get; }
```

- *Type:* double

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.expires"></a>

```csharp
public string Expires { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `WebsiteRedirectLocation`<sup>Required</sup> <a name="WebsiteRedirectLocation" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.websiteRedirectLocation"></a>

```csharp
public string WebsiteRedirectLocation { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.rangeInput"></a>

```csharp
public string RangeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanSpacesBucketObjectConfig <a name="DataDigitaloceanSpacesBucketObjectConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanSpacesBucketObjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Key,
    string Region,
    string Id = null,
    string Range = null,
    string VersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#bucket DataDigitaloceanSpacesBucketObject#bucket}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#key DataDigitaloceanSpacesBucketObject#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#region DataDigitaloceanSpacesBucketObject#region}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#id DataDigitaloceanSpacesBucketObject#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.range">Range</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#range DataDigitaloceanSpacesBucketObject#range}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.versionId">VersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#version_id DataDigitaloceanSpacesBucketObject#version_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#bucket DataDigitaloceanSpacesBucketObject#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#key DataDigitaloceanSpacesBucketObject#key}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#region DataDigitaloceanSpacesBucketObject#region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#id DataDigitaloceanSpacesBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.range"></a>

```csharp
public string Range { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#range DataDigitaloceanSpacesBucketObject#range}.

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/spaces_bucket_object#version_id DataDigitaloceanSpacesBucketObject#version_id}.

---



