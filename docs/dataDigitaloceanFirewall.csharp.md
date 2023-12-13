# `dataDigitaloceanFirewall` Submodule <a name="`dataDigitaloceanFirewall` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanFirewall <a name="DataDigitaloceanFirewall" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall digitalocean_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanFirewall(Construct Scope, string Id, DataDigitaloceanFirewallConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig">DataDigitaloceanFirewallConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig">DataDigitaloceanFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putInboundRule">PutInboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putOutboundRule">PutOutboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetDropletIds">ResetDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetInboundRule">ResetInboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOutboundRule">ResetOutboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutInboundRule` <a name="PutInboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putInboundRule"></a>

```csharp
private void PutInboundRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putInboundRule.parameter.value"></a>

- *Type:* object

---

##### `PutOutboundRule` <a name="PutOutboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putOutboundRule"></a>

```csharp
private void PutOutboundRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putOutboundRule.parameter.value"></a>

- *Type:* object

---

##### `ResetDropletIds` <a name="ResetDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetDropletIds"></a>

```csharp
private void ResetDropletIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInboundRule` <a name="ResetInboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetInboundRule"></a>

```csharp
private void ResetInboundRule()
```

##### `ResetOutboundRule` <a name="ResetOutboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOutboundRule"></a>

```csharp
private void ResetOutboundRule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanFirewall.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanFirewall.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanFirewall.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DataDigitaloceanFirewall.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDigitaloceanFirewall resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDigitaloceanFirewall to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDigitaloceanFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRule">InboundRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList">DataDigitaloceanFirewallInboundRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRule">OutboundRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList">DataDigitaloceanFirewallOutboundRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.pendingChanges">PendingChanges</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList">DataDigitaloceanFirewallPendingChangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIdsInput">DropletIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallIdInput">FirewallIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRuleInput">InboundRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRuleInput">OutboundRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIds">DropletIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallId">FirewallId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `InboundRule`<sup>Required</sup> <a name="InboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRule"></a>

```csharp
public DataDigitaloceanFirewallInboundRuleList InboundRule { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList">DataDigitaloceanFirewallInboundRuleList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutboundRule`<sup>Required</sup> <a name="OutboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRule"></a>

```csharp
public DataDigitaloceanFirewallOutboundRuleList OutboundRule { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList">DataDigitaloceanFirewallOutboundRuleList</a>

---

##### `PendingChanges`<sup>Required</sup> <a name="PendingChanges" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.pendingChanges"></a>

```csharp
public DataDigitaloceanFirewallPendingChangesList PendingChanges { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList">DataDigitaloceanFirewallPendingChangesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `DropletIdsInput`<sup>Optional</sup> <a name="DropletIdsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIdsInput"></a>

```csharp
public double[] DropletIdsInput { get; }
```

- *Type:* double[]

---

##### `FirewallIdInput`<sup>Optional</sup> <a name="FirewallIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallIdInput"></a>

```csharp
public string FirewallIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InboundRuleInput`<sup>Optional</sup> <a name="InboundRuleInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRuleInput"></a>

```csharp
public object InboundRuleInput { get; }
```

- *Type:* object

---

##### `OutboundRuleInput`<sup>Optional</sup> <a name="OutboundRuleInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRuleInput"></a>

```csharp
public object OutboundRuleInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `DropletIds`<sup>Required</sup> <a name="DropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIds"></a>

```csharp
public double[] DropletIds { get; }
```

- *Type:* double[]

---

##### `FirewallId`<sup>Required</sup> <a name="FirewallId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallId"></a>

```csharp
public string FirewallId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanFirewallConfig <a name="DataDigitaloceanFirewallConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanFirewallConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FirewallId,
    double[] DropletIds = null,
    string Id = null,
    object InboundRule = null,
    object OutboundRule = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.firewallId">FirewallId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#firewall_id DataDigitaloceanFirewall#firewall_id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dropletIds">DropletIds</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#droplet_ids DataDigitaloceanFirewall#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#id DataDigitaloceanFirewall#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.inboundRule">InboundRule</a></code> | <code>object</code> | inbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.outboundRule">OutboundRule</a></code> | <code>object</code> | outbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#tags DataDigitaloceanFirewall#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FirewallId`<sup>Required</sup> <a name="FirewallId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.firewallId"></a>

```csharp
public string FirewallId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#firewall_id DataDigitaloceanFirewall#firewall_id}.

---

##### `DropletIds`<sup>Optional</sup> <a name="DropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dropletIds"></a>

```csharp
public double[] DropletIds { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#droplet_ids DataDigitaloceanFirewall#droplet_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#id DataDigitaloceanFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InboundRule`<sup>Optional</sup> <a name="InboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.inboundRule"></a>

```csharp
public object InboundRule { get; set; }
```

- *Type:* object

inbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#inbound_rule DataDigitaloceanFirewall#inbound_rule}

---

##### `OutboundRule`<sup>Optional</sup> <a name="OutboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.outboundRule"></a>

```csharp
public object OutboundRule { get; set; }
```

- *Type:* object

outbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#outbound_rule DataDigitaloceanFirewall#outbound_rule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#tags DataDigitaloceanFirewall#tags}.

---

### DataDigitaloceanFirewallInboundRule <a name="DataDigitaloceanFirewallInboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanFirewallInboundRule {
    string Protocol,
    string PortRange = null,
    string[] SourceAddresses = null,
    double[] SourceDropletIds = null,
    string[] SourceKubernetesIds = null,
    string[] SourceLoadBalancerUids = null,
    string[] SourceTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.portRange">PortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#source_addresses DataDigitaloceanFirewall#source_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceDropletIds">SourceDropletIds</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#source_droplet_ids DataDigitaloceanFirewall#source_droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceKubernetesIds">SourceKubernetesIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#source_kubernetes_ids DataDigitaloceanFirewall#source_kubernetes_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceLoadBalancerUids">SourceLoadBalancerUids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#source_load_balancer_uids DataDigitaloceanFirewall#source_load_balancer_uids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceTags">SourceTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#source_tags DataDigitaloceanFirewall#source_tags}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.portRange"></a>

```csharp
public string PortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}.

---

##### `SourceAddresses`<sup>Optional</sup> <a name="SourceAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#source_addresses DataDigitaloceanFirewall#source_addresses}.

---

##### `SourceDropletIds`<sup>Optional</sup> <a name="SourceDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceDropletIds"></a>

```csharp
public double[] SourceDropletIds { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#source_droplet_ids DataDigitaloceanFirewall#source_droplet_ids}.

---

##### `SourceKubernetesIds`<sup>Optional</sup> <a name="SourceKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceKubernetesIds"></a>

```csharp
public string[] SourceKubernetesIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#source_kubernetes_ids DataDigitaloceanFirewall#source_kubernetes_ids}.

---

##### `SourceLoadBalancerUids`<sup>Optional</sup> <a name="SourceLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceLoadBalancerUids"></a>

```csharp
public string[] SourceLoadBalancerUids { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#source_load_balancer_uids DataDigitaloceanFirewall#source_load_balancer_uids}.

---

##### `SourceTags`<sup>Optional</sup> <a name="SourceTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceTags"></a>

```csharp
public string[] SourceTags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#source_tags DataDigitaloceanFirewall#source_tags}.

---

### DataDigitaloceanFirewallOutboundRule <a name="DataDigitaloceanFirewallOutboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanFirewallOutboundRule {
    string Protocol,
    string[] DestinationAddresses = null,
    double[] DestinationDropletIds = null,
    string[] DestinationKubernetesIds = null,
    string[] DestinationLoadBalancerUids = null,
    string[] DestinationTags = null,
    string PortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationAddresses">DestinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#destination_addresses DataDigitaloceanFirewall#destination_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationDropletIds">DestinationDropletIds</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#destination_droplet_ids DataDigitaloceanFirewall#destination_droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationKubernetesIds">DestinationKubernetesIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#destination_kubernetes_ids DataDigitaloceanFirewall#destination_kubernetes_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationLoadBalancerUids">DestinationLoadBalancerUids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#destination_load_balancer_uids DataDigitaloceanFirewall#destination_load_balancer_uids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationTags">DestinationTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#destination_tags DataDigitaloceanFirewall#destination_tags}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.portRange">PortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}.

---

##### `DestinationAddresses`<sup>Optional</sup> <a name="DestinationAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationAddresses"></a>

```csharp
public string[] DestinationAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#destination_addresses DataDigitaloceanFirewall#destination_addresses}.

---

##### `DestinationDropletIds`<sup>Optional</sup> <a name="DestinationDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationDropletIds"></a>

```csharp
public double[] DestinationDropletIds { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#destination_droplet_ids DataDigitaloceanFirewall#destination_droplet_ids}.

---

##### `DestinationKubernetesIds`<sup>Optional</sup> <a name="DestinationKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationKubernetesIds"></a>

```csharp
public string[] DestinationKubernetesIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#destination_kubernetes_ids DataDigitaloceanFirewall#destination_kubernetes_ids}.

---

##### `DestinationLoadBalancerUids`<sup>Optional</sup> <a name="DestinationLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationLoadBalancerUids"></a>

```csharp
public string[] DestinationLoadBalancerUids { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#destination_load_balancer_uids DataDigitaloceanFirewall#destination_load_balancer_uids}.

---

##### `DestinationTags`<sup>Optional</sup> <a name="DestinationTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationTags"></a>

```csharp
public string[] DestinationTags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#destination_tags DataDigitaloceanFirewall#destination_tags}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.portRange"></a>

```csharp
public string PortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}.

---

### DataDigitaloceanFirewallPendingChanges <a name="DataDigitaloceanFirewallPendingChanges" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanFirewallPendingChanges {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanFirewallInboundRuleList <a name="DataDigitaloceanFirewallInboundRuleList" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanFirewallInboundRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.get"></a>

```csharp
private DataDigitaloceanFirewallInboundRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDigitaloceanFirewallInboundRuleOutputReference <a name="DataDigitaloceanFirewallInboundRuleOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanFirewallInboundRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceAddresses">ResetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceDropletIds">ResetSourceDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceKubernetesIds">ResetSourceKubernetesIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceLoadBalancerUids">ResetSourceLoadBalancerUids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceTags">ResetSourceTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```

##### `ResetSourceAddresses` <a name="ResetSourceAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceAddresses"></a>

```csharp
private void ResetSourceAddresses()
```

##### `ResetSourceDropletIds` <a name="ResetSourceDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceDropletIds"></a>

```csharp
private void ResetSourceDropletIds()
```

##### `ResetSourceKubernetesIds` <a name="ResetSourceKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceKubernetesIds"></a>

```csharp
private void ResetSourceKubernetesIds()
```

##### `ResetSourceLoadBalancerUids` <a name="ResetSourceLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceLoadBalancerUids"></a>

```csharp
private void ResetSourceLoadBalancerUids()
```

##### `ResetSourceTags` <a name="ResetSourceTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceTags"></a>

```csharp
private void ResetSourceTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddressesInput">SourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIdsInput">SourceDropletIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIdsInput">SourceKubernetesIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUidsInput">SourceLoadBalancerUidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTagsInput">SourceTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRange">PortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIds">SourceDropletIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIds">SourceKubernetesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUids">SourceLoadBalancerUids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTags">SourceTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRangeInput"></a>

```csharp
public string PortRangeInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SourceAddressesInput`<sup>Optional</sup> <a name="SourceAddressesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddressesInput"></a>

```csharp
public string[] SourceAddressesInput { get; }
```

- *Type:* string[]

---

##### `SourceDropletIdsInput`<sup>Optional</sup> <a name="SourceDropletIdsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIdsInput"></a>

```csharp
public double[] SourceDropletIdsInput { get; }
```

- *Type:* double[]

---

##### `SourceKubernetesIdsInput`<sup>Optional</sup> <a name="SourceKubernetesIdsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIdsInput"></a>

```csharp
public string[] SourceKubernetesIdsInput { get; }
```

- *Type:* string[]

---

##### `SourceLoadBalancerUidsInput`<sup>Optional</sup> <a name="SourceLoadBalancerUidsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUidsInput"></a>

```csharp
public string[] SourceLoadBalancerUidsInput { get; }
```

- *Type:* string[]

---

##### `SourceTagsInput`<sup>Optional</sup> <a name="SourceTagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTagsInput"></a>

```csharp
public string[] SourceTagsInput { get; }
```

- *Type:* string[]

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRange"></a>

```csharp
public string PortRange { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; }
```

- *Type:* string[]

---

##### `SourceDropletIds`<sup>Required</sup> <a name="SourceDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIds"></a>

```csharp
public double[] SourceDropletIds { get; }
```

- *Type:* double[]

---

##### `SourceKubernetesIds`<sup>Required</sup> <a name="SourceKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIds"></a>

```csharp
public string[] SourceKubernetesIds { get; }
```

- *Type:* string[]

---

##### `SourceLoadBalancerUids`<sup>Required</sup> <a name="SourceLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUids"></a>

```csharp
public string[] SourceLoadBalancerUids { get; }
```

- *Type:* string[]

---

##### `SourceTags`<sup>Required</sup> <a name="SourceTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTags"></a>

```csharp
public string[] SourceTags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDigitaloceanFirewallOutboundRuleList <a name="DataDigitaloceanFirewallOutboundRuleList" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanFirewallOutboundRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.get"></a>

```csharp
private DataDigitaloceanFirewallOutboundRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDigitaloceanFirewallOutboundRuleOutputReference <a name="DataDigitaloceanFirewallOutboundRuleOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanFirewallOutboundRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationAddresses">ResetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationDropletIds">ResetDestinationDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationKubernetesIds">ResetDestinationKubernetesIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationLoadBalancerUids">ResetDestinationLoadBalancerUids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationTags">ResetDestinationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddresses` <a name="ResetDestinationAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationAddresses"></a>

```csharp
private void ResetDestinationAddresses()
```

##### `ResetDestinationDropletIds` <a name="ResetDestinationDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationDropletIds"></a>

```csharp
private void ResetDestinationDropletIds()
```

##### `ResetDestinationKubernetesIds` <a name="ResetDestinationKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationKubernetesIds"></a>

```csharp
private void ResetDestinationKubernetesIds()
```

##### `ResetDestinationLoadBalancerUids` <a name="ResetDestinationLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationLoadBalancerUids"></a>

```csharp
private void ResetDestinationLoadBalancerUids()
```

##### `ResetDestinationTags` <a name="ResetDestinationTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationTags"></a>

```csharp
private void ResetDestinationTags()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddressesInput">DestinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIdsInput">DestinationDropletIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIdsInput">DestinationKubernetesIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUidsInput">DestinationLoadBalancerUidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTagsInput">DestinationTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIds">DestinationDropletIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIds">DestinationKubernetesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUids">DestinationLoadBalancerUids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTags">DestinationTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRange">PortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddressesInput`<sup>Optional</sup> <a name="DestinationAddressesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddressesInput"></a>

```csharp
public string[] DestinationAddressesInput { get; }
```

- *Type:* string[]

---

##### `DestinationDropletIdsInput`<sup>Optional</sup> <a name="DestinationDropletIdsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIdsInput"></a>

```csharp
public double[] DestinationDropletIdsInput { get; }
```

- *Type:* double[]

---

##### `DestinationKubernetesIdsInput`<sup>Optional</sup> <a name="DestinationKubernetesIdsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIdsInput"></a>

```csharp
public string[] DestinationKubernetesIdsInput { get; }
```

- *Type:* string[]

---

##### `DestinationLoadBalancerUidsInput`<sup>Optional</sup> <a name="DestinationLoadBalancerUidsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUidsInput"></a>

```csharp
public string[] DestinationLoadBalancerUidsInput { get; }
```

- *Type:* string[]

---

##### `DestinationTagsInput`<sup>Optional</sup> <a name="DestinationTagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTagsInput"></a>

```csharp
public string[] DestinationTagsInput { get; }
```

- *Type:* string[]

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRangeInput"></a>

```csharp
public string PortRangeInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddresses"></a>

```csharp
public string[] DestinationAddresses { get; }
```

- *Type:* string[]

---

##### `DestinationDropletIds`<sup>Required</sup> <a name="DestinationDropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIds"></a>

```csharp
public double[] DestinationDropletIds { get; }
```

- *Type:* double[]

---

##### `DestinationKubernetesIds`<sup>Required</sup> <a name="DestinationKubernetesIds" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIds"></a>

```csharp
public string[] DestinationKubernetesIds { get; }
```

- *Type:* string[]

---

##### `DestinationLoadBalancerUids`<sup>Required</sup> <a name="DestinationLoadBalancerUids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUids"></a>

```csharp
public string[] DestinationLoadBalancerUids { get; }
```

- *Type:* string[]

---

##### `DestinationTags`<sup>Required</sup> <a name="DestinationTags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTags"></a>

```csharp
public string[] DestinationTags { get; }
```

- *Type:* string[]

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRange"></a>

```csharp
public string PortRange { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDigitaloceanFirewallPendingChangesList <a name="DataDigitaloceanFirewallPendingChangesList" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanFirewallPendingChangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.get"></a>

```csharp
private DataDigitaloceanFirewallPendingChangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDigitaloceanFirewallPendingChangesOutputReference <a name="DataDigitaloceanFirewallPendingChangesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DataDigitaloceanFirewallPendingChangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.dropletId">DropletId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.removing">Removing</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges">DataDigitaloceanFirewallPendingChanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DropletId`<sup>Required</sup> <a name="DropletId" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.dropletId"></a>

```csharp
public double DropletId { get; }
```

- *Type:* double

---

##### `Removing`<sup>Required</sup> <a name="Removing" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.removing"></a>

```csharp
public IResolvable Removing { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.internalValue"></a>

```csharp
public DataDigitaloceanFirewallPendingChanges InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges">DataDigitaloceanFirewallPendingChanges</a>

---



