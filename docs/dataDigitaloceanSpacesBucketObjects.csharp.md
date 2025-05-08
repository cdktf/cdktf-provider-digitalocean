# `dataDigitaloceanSpacesBucketObjects` Submodule <a name="`dataDigitaloceanSpacesBucketObjects` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanSpacesBucketObjects <a name="DataDigitaloceanSpacesBucketObjects" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects digitalocean_spaces_bucket_objects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanSpacesBucketObjects(Construct Scope, string Id, DataDigitaloceanSpacesBucketObjectsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig">DataDigitaloceanSpacesBucketObjectsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig">DataDigitaloceanSpacesBucketObjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetEncodingType">ResetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetMaxKeys">ResetMaxKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetEncodingType` <a name="ResetEncodingType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetEncodingType"></a>

```csharp
private void ResetEncodingType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxKeys` <a name="ResetMaxKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetMaxKeys"></a>

```csharp
private void ResetMaxKeys()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanSpacesBucketObjects resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanSpacesBucketObjects.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanSpacesBucketObjects.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanSpacesBucketObjects.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanSpacesBucketObjects.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanSpacesBucketObjects resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanSpacesBucketObjects to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanSpacesBucketObjects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanSpacesBucketObjects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.commonPrefixes">CommonPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.keys">Keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.owners">Owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.encodingTypeInput">EncodingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.maxKeysInput">MaxKeysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.encodingType">EncodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.maxKeys">MaxKeys</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CommonPrefixes`<sup>Required</sup> <a name="CommonPrefixes" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.commonPrefixes"></a>

```csharp
public string[] CommonPrefixes { get; }
```

- *Type:* string[]

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.keys"></a>

```csharp
public string[] Keys { get; }
```

- *Type:* string[]

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.owners"></a>

```csharp
public string[] Owners { get; }
```

- *Type:* string[]

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `EncodingTypeInput`<sup>Optional</sup> <a name="EncodingTypeInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.encodingTypeInput"></a>

```csharp
public string EncodingTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxKeysInput`<sup>Optional</sup> <a name="MaxKeysInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.maxKeysInput"></a>

```csharp
public double MaxKeysInput { get; }
```

- *Type:* double

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.encodingType"></a>

```csharp
public string EncodingType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxKeys`<sup>Required</sup> <a name="MaxKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.maxKeys"></a>

```csharp
public double MaxKeys { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjects.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanSpacesBucketObjectsConfig <a name="DataDigitaloceanSpacesBucketObjectsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanSpacesBucketObjectsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Region,
    string Delimiter = null,
    string EncodingType = null,
    string Id = null,
    double MaxKeys = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#bucket DataDigitaloceanSpacesBucketObjects#bucket}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#region DataDigitaloceanSpacesBucketObjects#region}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.delimiter">Delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#delimiter DataDigitaloceanSpacesBucketObjects#delimiter}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.encodingType">EncodingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#encoding_type DataDigitaloceanSpacesBucketObjects#encoding_type}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#id DataDigitaloceanSpacesBucketObjects#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.maxKeys">MaxKeys</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#max_keys DataDigitaloceanSpacesBucketObjects#max_keys}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#prefix DataDigitaloceanSpacesBucketObjects#prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#bucket DataDigitaloceanSpacesBucketObjects#bucket}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#region DataDigitaloceanSpacesBucketObjects#region}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#delimiter DataDigitaloceanSpacesBucketObjects#delimiter}.

---

##### `EncodingType`<sup>Optional</sup> <a name="EncodingType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.encodingType"></a>

```csharp
public string EncodingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#encoding_type DataDigitaloceanSpacesBucketObjects#encoding_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#id DataDigitaloceanSpacesBucketObjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxKeys`<sup>Optional</sup> <a name="MaxKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.maxKeys"></a>

```csharp
public double MaxKeys { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#max_keys DataDigitaloceanSpacesBucketObjects#max_keys}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObjects.DataDigitaloceanSpacesBucketObjectsConfig.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#prefix DataDigitaloceanSpacesBucketObjects#prefix}.

---



