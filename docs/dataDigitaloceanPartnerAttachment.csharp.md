# `dataDigitaloceanPartnerAttachment` Submodule <a name="`dataDigitaloceanPartnerAttachment` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanPartnerAttachment <a name="DataDigitaloceanPartnerAttachment" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment digitalocean_partner_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanPartnerAttachment(Construct Scope, string Id, DataDigitaloceanPartnerAttachmentConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig">DataDigitaloceanPartnerAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig">DataDigitaloceanPartnerAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp">PutBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetBgp">ResetBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetRedundancyZone">ResetRedundancyZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBgp` <a name="PutBgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp"></a>

```csharp
private void PutBgp(DataDigitaloceanPartnerAttachmentBgp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

---

##### `ResetBgp` <a name="ResetBgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetBgp"></a>

```csharp
private void ResetBgp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRedundancyZone` <a name="ResetRedundancyZone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetRedundancyZone"></a>

```csharp
private void ResetRedundancyZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanPartnerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanPartnerAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanPartnerAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanPartnerAttachment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanPartnerAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanPartnerAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanPartnerAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanPartnerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanPartnerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgp">Bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference">DataDigitaloceanPartnerAttachmentBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.children">Children</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.connectionBandwidthInMbps">ConnectionBandwidthInMbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.naasProvider">NaasProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.parentUuid">ParentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.vpcIds">VpcIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgpInput">BgpInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZoneInput">RedundancyZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZone">RedundancyZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Bgp`<sup>Required</sup> <a name="Bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgp"></a>

```csharp
public DataDigitaloceanPartnerAttachmentBgpOutputReference Bgp { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference">DataDigitaloceanPartnerAttachmentBgpOutputReference</a>

---

##### `Children`<sup>Required</sup> <a name="Children" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.children"></a>

```csharp
public string[] Children { get; }
```

- *Type:* string[]

---

##### `ConnectionBandwidthInMbps`<sup>Required</sup> <a name="ConnectionBandwidthInMbps" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.connectionBandwidthInMbps"></a>

```csharp
public double ConnectionBandwidthInMbps { get; }
```

- *Type:* double

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `NaasProvider`<sup>Required</sup> <a name="NaasProvider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.naasProvider"></a>

```csharp
public string NaasProvider { get; }
```

- *Type:* string

---

##### `ParentUuid`<sup>Required</sup> <a name="ParentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.parentUuid"></a>

```csharp
public string ParentUuid { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `VpcIds`<sup>Required</sup> <a name="VpcIds" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.vpcIds"></a>

```csharp
public string[] VpcIds { get; }
```

- *Type:* string[]

---

##### `BgpInput`<sup>Optional</sup> <a name="BgpInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgpInput"></a>

```csharp
public DataDigitaloceanPartnerAttachmentBgp BgpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RedundancyZoneInput`<sup>Optional</sup> <a name="RedundancyZoneInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZoneInput"></a>

```csharp
public string RedundancyZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RedundancyZone`<sup>Required</sup> <a name="RedundancyZone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZone"></a>

```csharp
public string RedundancyZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanPartnerAttachmentBgp <a name="DataDigitaloceanPartnerAttachmentBgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanPartnerAttachmentBgp {
    string LocalRouterIp = null,
    double PeerRouterAsn = null,
    string PeerRouterIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.localRouterIp">LocalRouterIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#local_router_ip DataDigitaloceanPartnerAttachment#local_router_ip}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterAsn">PeerRouterAsn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#peer_router_asn DataDigitaloceanPartnerAttachment#peer_router_asn}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterIp">PeerRouterIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#peer_router_ip DataDigitaloceanPartnerAttachment#peer_router_ip}. |

---

##### `LocalRouterIp`<sup>Optional</sup> <a name="LocalRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.localRouterIp"></a>

```csharp
public string LocalRouterIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#local_router_ip DataDigitaloceanPartnerAttachment#local_router_ip}.

---

##### `PeerRouterAsn`<sup>Optional</sup> <a name="PeerRouterAsn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterAsn"></a>

```csharp
public double PeerRouterAsn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#peer_router_asn DataDigitaloceanPartnerAttachment#peer_router_asn}.

---

##### `PeerRouterIp`<sup>Optional</sup> <a name="PeerRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterIp"></a>

```csharp
public string PeerRouterIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#peer_router_ip DataDigitaloceanPartnerAttachment#peer_router_ip}.

---

### DataDigitaloceanPartnerAttachmentConfig <a name="DataDigitaloceanPartnerAttachmentConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanPartnerAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataDigitaloceanPartnerAttachmentBgp Bgp = null,
    string Id = null,
    string Name = null,
    string RedundancyZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.bgp">Bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.id">Id</a></code> | <code>string</code> | The ID of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.name">Name</a></code> | <code>string</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.redundancyZone">RedundancyZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bgp`<sup>Optional</sup> <a name="Bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.bgp"></a>

```csharp
public DataDigitaloceanPartnerAttachmentBgp Bgp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#bgp DataDigitaloceanPartnerAttachment#bgp}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#id DataDigitaloceanPartnerAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#name DataDigitaloceanPartnerAttachment#name}

---

##### `RedundancyZone`<sup>Optional</sup> <a name="RedundancyZone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.redundancyZone"></a>

```csharp
public string RedundancyZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanPartnerAttachmentBgpOutputReference <a name="DataDigitaloceanPartnerAttachmentBgpOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanPartnerAttachmentBgpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetLocalRouterIp">ResetLocalRouterIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterAsn">ResetPeerRouterAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterIp">ResetPeerRouterIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalRouterIp` <a name="ResetLocalRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetLocalRouterIp"></a>

```csharp
private void ResetLocalRouterIp()
```

##### `ResetPeerRouterAsn` <a name="ResetPeerRouterAsn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterAsn"></a>

```csharp
private void ResetPeerRouterAsn()
```

##### `ResetPeerRouterIp` <a name="ResetPeerRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterIp"></a>

```csharp
private void ResetPeerRouterIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIpInput">LocalRouterIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsnInput">PeerRouterAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIpInput">PeerRouterIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIp">LocalRouterIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsn">PeerRouterAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIp">PeerRouterIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalRouterIpInput`<sup>Optional</sup> <a name="LocalRouterIpInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIpInput"></a>

```csharp
public string LocalRouterIpInput { get; }
```

- *Type:* string

---

##### `PeerRouterAsnInput`<sup>Optional</sup> <a name="PeerRouterAsnInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsnInput"></a>

```csharp
public double PeerRouterAsnInput { get; }
```

- *Type:* double

---

##### `PeerRouterIpInput`<sup>Optional</sup> <a name="PeerRouterIpInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIpInput"></a>

```csharp
public string PeerRouterIpInput { get; }
```

- *Type:* string

---

##### `LocalRouterIp`<sup>Required</sup> <a name="LocalRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIp"></a>

```csharp
public string LocalRouterIp { get; }
```

- *Type:* string

---

##### `PeerRouterAsn`<sup>Required</sup> <a name="PeerRouterAsn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsn"></a>

```csharp
public double PeerRouterAsn { get; }
```

- *Type:* double

---

##### `PeerRouterIp`<sup>Required</sup> <a name="PeerRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIp"></a>

```csharp
public string PeerRouterIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanPartnerAttachmentBgp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

---



