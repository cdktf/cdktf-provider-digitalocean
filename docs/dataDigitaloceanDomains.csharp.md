# `dataDigitaloceanDomains` Submodule <a name="`dataDigitaloceanDomains` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanDomains <a name="DataDigitaloceanDomains" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains digitalocean_domains}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDomains(Construct Scope, string Id, DataDigitaloceanDomainsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig">DataDigitaloceanDomainsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig">DataDigitaloceanDomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.putSort">PutSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.resetSort">ResetSort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.putFilter.parameter.value"></a>

- *Type:* object

---

##### `PutSort` <a name="PutSort" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.putSort"></a>

```csharp
private void PutSort(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.putSort.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.resetSort"></a>

```csharp
private void ResetSort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanDomains resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDomains.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDomains.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDomains.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanDomains.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanDomains resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanDomains to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.domains">Domains</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList">DataDigitaloceanDomainsDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList">DataDigitaloceanDomainsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.sort">Sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList">DataDigitaloceanDomainsSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.sortInput">SortInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.domains"></a>

```csharp
public DataDigitaloceanDomainsDomainsList Domains { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList">DataDigitaloceanDomainsDomainsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.filter"></a>

```csharp
public DataDigitaloceanDomainsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList">DataDigitaloceanDomainsFilterList</a>

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.sort"></a>

```csharp
public DataDigitaloceanDomainsSortList Sort { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList">DataDigitaloceanDomainsSortList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.sortInput"></a>

```csharp
public object SortInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomains.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanDomainsConfig <a name="DataDigitaloceanDomainsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDomainsConfig {
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
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#id DataDigitaloceanDomains#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.sort">Sort</a></code> | <code>object</code> | sort block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#filter DataDigitaloceanDomains#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#id DataDigitaloceanDomains#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsConfig.property.sort"></a>

```csharp
public object Sort { get; set; }
```

- *Type:* object

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#sort DataDigitaloceanDomains#sort}

---

### DataDigitaloceanDomainsDomains <a name="DataDigitaloceanDomainsDomains" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDomainsDomains {

};
```


### DataDigitaloceanDomainsFilter <a name="DataDigitaloceanDomainsFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDomainsFilter {
    string Key,
    string[] Values,
    object All = null,
    string MatchBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#key DataDigitaloceanDomains#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#values DataDigitaloceanDomains#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilter.property.all">All</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#all DataDigitaloceanDomains#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilter.property.matchBy">MatchBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#match_by DataDigitaloceanDomains#match_by}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#key DataDigitaloceanDomains#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#values DataDigitaloceanDomains#values}.

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilter.property.all"></a>

```csharp
public object All { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#all DataDigitaloceanDomains#all}.

---

##### `MatchBy`<sup>Optional</sup> <a name="MatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilter.property.matchBy"></a>

```csharp
public string MatchBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#match_by DataDigitaloceanDomains#match_by}.

---

### DataDigitaloceanDomainsSort <a name="DataDigitaloceanDomainsSort" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDomainsSort {
    string Key,
    string Direction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSort.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#key DataDigitaloceanDomains#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSort.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#direction DataDigitaloceanDomains#direction}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSort.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#key DataDigitaloceanDomains#key}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSort.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/domains#direction DataDigitaloceanDomains#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanDomainsDomainsList <a name="DataDigitaloceanDomainsDomainsList" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDomainsDomainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.get"></a>

```csharp
private DataDigitaloceanDomainsDomainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanDomainsDomainsOutputReference <a name="DataDigitaloceanDomainsDomainsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDomainsDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.urn">Urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomains">DataDigitaloceanDomainsDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.urn"></a>

```csharp
public string Urn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomainsOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanDomainsDomains InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsDomains">DataDigitaloceanDomainsDomains</a>

---


### DataDigitaloceanDomainsFilterList <a name="DataDigitaloceanDomainsFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDomainsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.get"></a>

```csharp
private DataDigitaloceanDomainsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDigitaloceanDomainsFilterOutputReference <a name="DataDigitaloceanDomainsFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDomainsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.resetMatchBy">ResetMatchBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetMatchBy` <a name="ResetMatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.resetMatchBy"></a>

```csharp
private void ResetMatchBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.allInput">AllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.matchByInput">MatchByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.all">All</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.matchBy">MatchBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.allInput"></a>

```csharp
public object AllInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchByInput`<sup>Optional</sup> <a name="MatchByInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.matchByInput"></a>

```csharp
public string MatchByInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.all"></a>

```csharp
public object All { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchBy`<sup>Required</sup> <a name="MatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.matchBy"></a>

```csharp
public string MatchBy { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDigitaloceanDomainsSortList <a name="DataDigitaloceanDomainsSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDomainsSortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.get"></a>

```csharp
private DataDigitaloceanDomainsSortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDigitaloceanDomainsSortOutputReference <a name="DataDigitaloceanDomainsSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanDomainsSortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDomains.DataDigitaloceanDomainsSortOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



