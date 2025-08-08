# `loadbalancer` Submodule <a name="`loadbalancer` Submodule" id="@cdktf/provider-digitalocean.loadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Loadbalancer <a name="Loadbalancer" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer digitalocean_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new Loadbalancer(Construct Scope, string Id, LoadbalancerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig">LoadbalancerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig">LoadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putDomains">PutDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall">PutFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule">PutForwardingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings">PutGlbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck">PutHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions">PutStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDisableLetsEncryptDnsRecords">ResetDisableLetsEncryptDnsRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletIds">ResetDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletTag">ResetDropletTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableBackendKeepalive">ResetEnableBackendKeepalive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableProxyProtocol">ResetEnableProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetFirewall">ResetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetForwardingRule">ResetForwardingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetGlbSettings">ResetGlbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHealthcheck">ResetHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHttpIdleTimeoutSeconds">ResetHttpIdleTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetNetworkStack">ResetNetworkStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRedirectHttpToHttps">ResetRedirectHttpToHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSizeUnit">ResetSizeUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetStickySessions">ResetStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTargetLoadBalancerIds">ResetTargetLoadBalancerIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTlsCipherPolicy">ResetTlsCipherPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetVpcUuid">ResetVpcUuid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDomains` <a name="PutDomains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putDomains"></a>

```csharp
private void PutDomains(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putDomains.parameter.value"></a>

- *Type:* object

---

##### `PutFirewall` <a name="PutFirewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall"></a>

```csharp
private void PutFirewall(LoadbalancerFirewall Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---

##### `PutForwardingRule` <a name="PutForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule"></a>

```csharp
private void PutForwardingRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule.parameter.value"></a>

- *Type:* object

---

##### `PutGlbSettings` <a name="PutGlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings"></a>

```csharp
private void PutGlbSettings(LoadbalancerGlbSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

---

##### `PutHealthcheck` <a name="PutHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck"></a>

```csharp
private void PutHealthcheck(LoadbalancerHealthcheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---

##### `PutStickySessions` <a name="PutStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions"></a>

```csharp
private void PutStickySessions(LoadbalancerStickySessions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetDisableLetsEncryptDnsRecords` <a name="ResetDisableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDisableLetsEncryptDnsRecords"></a>

```csharp
private void ResetDisableLetsEncryptDnsRecords()
```

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDomains"></a>

```csharp
private void ResetDomains()
```

##### `ResetDropletIds` <a name="ResetDropletIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletIds"></a>

```csharp
private void ResetDropletIds()
```

##### `ResetDropletTag` <a name="ResetDropletTag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletTag"></a>

```csharp
private void ResetDropletTag()
```

##### `ResetEnableBackendKeepalive` <a name="ResetEnableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableBackendKeepalive"></a>

```csharp
private void ResetEnableBackendKeepalive()
```

##### `ResetEnableProxyProtocol` <a name="ResetEnableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableProxyProtocol"></a>

```csharp
private void ResetEnableProxyProtocol()
```

##### `ResetFirewall` <a name="ResetFirewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetFirewall"></a>

```csharp
private void ResetFirewall()
```

##### `ResetForwardingRule` <a name="ResetForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetForwardingRule"></a>

```csharp
private void ResetForwardingRule()
```

##### `ResetGlbSettings` <a name="ResetGlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetGlbSettings"></a>

```csharp
private void ResetGlbSettings()
```

##### `ResetHealthcheck` <a name="ResetHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHealthcheck"></a>

```csharp
private void ResetHealthcheck()
```

##### `ResetHttpIdleTimeoutSeconds` <a name="ResetHttpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHttpIdleTimeoutSeconds"></a>

```csharp
private void ResetHttpIdleTimeoutSeconds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNetworkStack` <a name="ResetNetworkStack" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetNetworkStack"></a>

```csharp
private void ResetNetworkStack()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetRedirectHttpToHttps` <a name="ResetRedirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRedirectHttpToHttps"></a>

```csharp
private void ResetRedirectHttpToHttps()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetSizeUnit` <a name="ResetSizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSizeUnit"></a>

```csharp
private void ResetSizeUnit()
```

##### `ResetStickySessions` <a name="ResetStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetStickySessions"></a>

```csharp
private void ResetStickySessions()
```

##### `ResetTargetLoadBalancerIds` <a name="ResetTargetLoadBalancerIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTargetLoadBalancerIds"></a>

```csharp
private void ResetTargetLoadBalancerIds()
```

##### `ResetTlsCipherPolicy` <a name="ResetTlsCipherPolicy" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTlsCipherPolicy"></a>

```csharp
private void ResetTlsCipherPolicy()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVpcUuid` <a name="ResetVpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetVpcUuid"></a>

```csharp
private void ResetVpcUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

Loadbalancer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

Loadbalancer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

Loadbalancer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

Loadbalancer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Loadbalancer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Loadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Loadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domains">Domains</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList">LoadbalancerDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewall">Firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference">LoadbalancerFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRule">ForwardingRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList">LoadbalancerForwardingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettings">GlbSettings</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference">LoadbalancerGlbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheck">Healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference">LoadbalancerHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ipv6">Ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessions">StickySessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference">LoadbalancerStickySessionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.urn">Urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecordsInput">DisableLetsEncryptDnsRecordsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domainsInput">DomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIdsInput">DropletIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTagInput">DropletTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepaliveInput">EnableBackendKeepaliveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocolInput">EnableProxyProtocolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewallInput">FirewallInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRuleInput">ForwardingRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettingsInput">GlbSettingsInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheckInput">HealthcheckInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSecondsInput">HttpIdleTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkStackInput">NetworkStackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttpsInput">RedirectHttpToHttpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeInput">SizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnitInput">SizeUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessionsInput">StickySessionsInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIdsInput">TargetLoadBalancerIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tlsCipherPolicyInput">TlsCipherPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuidInput">VpcUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecords">DisableLetsEncryptDnsRecords</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIds">DropletIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTag">DropletTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepalive">EnableBackendKeepalive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSeconds">HttpIdleTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkStack">NetworkStack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttps">RedirectHttpToHttps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnit">SizeUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIds">TargetLoadBalancerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tlsCipherPolicy">TlsCipherPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuid">VpcUuid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domains"></a>

```csharp
public LoadbalancerDomainsList Domains { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList">LoadbalancerDomainsList</a>

---

##### `Firewall`<sup>Required</sup> <a name="Firewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewall"></a>

```csharp
public LoadbalancerFirewallOutputReference Firewall { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference">LoadbalancerFirewallOutputReference</a>

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRule"></a>

```csharp
public LoadbalancerForwardingRuleList ForwardingRule { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList">LoadbalancerForwardingRuleList</a>

---

##### `GlbSettings`<sup>Required</sup> <a name="GlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettings"></a>

```csharp
public LoadbalancerGlbSettingsOutputReference GlbSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference">LoadbalancerGlbSettingsOutputReference</a>

---

##### `Healthcheck`<sup>Required</sup> <a name="Healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheck"></a>

```csharp
public LoadbalancerHealthcheckOutputReference Healthcheck { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference">LoadbalancerHealthcheckOutputReference</a>

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ipv6"></a>

```csharp
public string Ipv6 { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StickySessions`<sup>Required</sup> <a name="StickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessions"></a>

```csharp
public LoadbalancerStickySessionsOutputReference StickySessions { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference">LoadbalancerStickySessionsOutputReference</a>

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.urn"></a>

```csharp
public string Urn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `DisableLetsEncryptDnsRecordsInput`<sup>Optional</sup> <a name="DisableLetsEncryptDnsRecordsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecordsInput"></a>

```csharp
public object DisableLetsEncryptDnsRecordsInput { get; }
```

- *Type:* object

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domainsInput"></a>

```csharp
public object DomainsInput { get; }
```

- *Type:* object

---

##### `DropletIdsInput`<sup>Optional</sup> <a name="DropletIdsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIdsInput"></a>

```csharp
public double[] DropletIdsInput { get; }
```

- *Type:* double[]

---

##### `DropletTagInput`<sup>Optional</sup> <a name="DropletTagInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTagInput"></a>

```csharp
public string DropletTagInput { get; }
```

- *Type:* string

---

##### `EnableBackendKeepaliveInput`<sup>Optional</sup> <a name="EnableBackendKeepaliveInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepaliveInput"></a>

```csharp
public object EnableBackendKeepaliveInput { get; }
```

- *Type:* object

---

##### `EnableProxyProtocolInput`<sup>Optional</sup> <a name="EnableProxyProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocolInput"></a>

```csharp
public object EnableProxyProtocolInput { get; }
```

- *Type:* object

---

##### `FirewallInput`<sup>Optional</sup> <a name="FirewallInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewallInput"></a>

```csharp
public LoadbalancerFirewall FirewallInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---

##### `ForwardingRuleInput`<sup>Optional</sup> <a name="ForwardingRuleInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRuleInput"></a>

```csharp
public object ForwardingRuleInput { get; }
```

- *Type:* object

---

##### `GlbSettingsInput`<sup>Optional</sup> <a name="GlbSettingsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettingsInput"></a>

```csharp
public LoadbalancerGlbSettings GlbSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

---

##### `HealthcheckInput`<sup>Optional</sup> <a name="HealthcheckInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheckInput"></a>

```csharp
public LoadbalancerHealthcheck HealthcheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---

##### `HttpIdleTimeoutSecondsInput`<sup>Optional</sup> <a name="HttpIdleTimeoutSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSecondsInput"></a>

```csharp
public double HttpIdleTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NetworkStackInput`<sup>Optional</sup> <a name="NetworkStackInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkStackInput"></a>

```csharp
public string NetworkStackInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RedirectHttpToHttpsInput`<sup>Optional</sup> <a name="RedirectHttpToHttpsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttpsInput"></a>

```csharp
public object RedirectHttpToHttpsInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeInput"></a>

```csharp
public string SizeInput { get; }
```

- *Type:* string

---

##### `SizeUnitInput`<sup>Optional</sup> <a name="SizeUnitInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnitInput"></a>

```csharp
public double SizeUnitInput { get; }
```

- *Type:* double

---

##### `StickySessionsInput`<sup>Optional</sup> <a name="StickySessionsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessionsInput"></a>

```csharp
public LoadbalancerStickySessions StickySessionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---

##### `TargetLoadBalancerIdsInput`<sup>Optional</sup> <a name="TargetLoadBalancerIdsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIdsInput"></a>

```csharp
public string[] TargetLoadBalancerIdsInput { get; }
```

- *Type:* string[]

---

##### `TlsCipherPolicyInput`<sup>Optional</sup> <a name="TlsCipherPolicyInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tlsCipherPolicyInput"></a>

```csharp
public string TlsCipherPolicyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VpcUuidInput`<sup>Optional</sup> <a name="VpcUuidInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuidInput"></a>

```csharp
public string VpcUuidInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `DisableLetsEncryptDnsRecords`<sup>Required</sup> <a name="DisableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecords"></a>

```csharp
public object DisableLetsEncryptDnsRecords { get; }
```

- *Type:* object

---

##### `DropletIds`<sup>Required</sup> <a name="DropletIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIds"></a>

```csharp
public double[] DropletIds { get; }
```

- *Type:* double[]

---

##### `DropletTag`<sup>Required</sup> <a name="DropletTag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTag"></a>

```csharp
public string DropletTag { get; }
```

- *Type:* string

---

##### `EnableBackendKeepalive`<sup>Required</sup> <a name="EnableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepalive"></a>

```csharp
public object EnableBackendKeepalive { get; }
```

- *Type:* object

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocol"></a>

```csharp
public object EnableProxyProtocol { get; }
```

- *Type:* object

---

##### `HttpIdleTimeoutSeconds`<sup>Required</sup> <a name="HttpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSeconds"></a>

```csharp
public double HttpIdleTimeoutSeconds { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkStack`<sup>Required</sup> <a name="NetworkStack" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkStack"></a>

```csharp
public string NetworkStack { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RedirectHttpToHttps`<sup>Required</sup> <a name="RedirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttps"></a>

```csharp
public object RedirectHttpToHttps { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `SizeUnit`<sup>Required</sup> <a name="SizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnit"></a>

```csharp
public double SizeUnit { get; }
```

- *Type:* double

---

##### `TargetLoadBalancerIds`<sup>Required</sup> <a name="TargetLoadBalancerIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIds"></a>

```csharp
public string[] TargetLoadBalancerIds { get; }
```

- *Type:* string[]

---

##### `TlsCipherPolicy`<sup>Required</sup> <a name="TlsCipherPolicy" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tlsCipherPolicy"></a>

```csharp
public string TlsCipherPolicy { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuid"></a>

```csharp
public string VpcUuid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerConfig <a name="LoadbalancerConfig" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Algorithm = null,
    object DisableLetsEncryptDnsRecords = null,
    object Domains = null,
    double[] DropletIds = null,
    string DropletTag = null,
    object EnableBackendKeepalive = null,
    object EnableProxyProtocol = null,
    LoadbalancerFirewall Firewall = null,
    object ForwardingRule = null,
    LoadbalancerGlbSettings GlbSettings = null,
    LoadbalancerHealthcheck Healthcheck = null,
    double HttpIdleTimeoutSeconds = null,
    string Id = null,
    string Network = null,
    string NetworkStack = null,
    string ProjectId = null,
    object RedirectHttpToHttps = null,
    string Region = null,
    string Size = null,
    double SizeUnit = null,
    LoadbalancerStickySessions StickySessions = null,
    string[] TargetLoadBalancerIds = null,
    string TlsCipherPolicy = null,
    string Type = null,
    string VpcUuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#name Loadbalancer#name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.algorithm">Algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.disableLetsEncryptDnsRecords">DisableLetsEncryptDnsRecords</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.domains">Domains</a></code> | <code>object</code> | domains block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletIds">DropletIds</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletTag">DropletTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableBackendKeepalive">EnableBackendKeepalive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.firewall">Firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forwardingRule">ForwardingRule</a></code> | <code>object</code> | forwarding_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.glbSettings">GlbSettings</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | glb_settings block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.healthcheck">Healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.httpIdleTimeoutSeconds">HttpIdleTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#id Loadbalancer#id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.network">Network</a></code> | <code>string</code> | the type of network the load balancer is accessible from (EXTERNAL or INTERNAL). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.networkStack">NetworkStack</a></code> | <code>string</code> | The network stack determines the allocation of ipv4/ipv6 addresses to the load balancer. Enum: 'IPV4' 'DUALSTACK'. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.redirectHttpToHttps">RedirectHttpToHttps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#region Loadbalancer#region}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.size">Size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#size Loadbalancer#size}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.sizeUnit">SizeUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.stickySessions">StickySessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | sticky_sessions block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.targetLoadBalancerIds">TargetLoadBalancerIds</a></code> | <code>string[]</code> | list of load balancer IDs to put behind a global load balancer. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.tlsCipherPolicy">TlsCipherPolicy</a></code> | <code>string</code> | The tls cipher policy to be used for the load balancer. Enum: 'DEFAULT' 'STRONG'. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.type">Type</a></code> | <code>string</code> | the type of the load balancer (GLOBAL, REGIONAL, or REGIONAL_NETWORK). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.vpcUuid">VpcUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#name Loadbalancer#name}.

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}.

---

##### `DisableLetsEncryptDnsRecords`<sup>Optional</sup> <a name="DisableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.disableLetsEncryptDnsRecords"></a>

```csharp
public object DisableLetsEncryptDnsRecords { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}.

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.domains"></a>

```csharp
public object Domains { get; set; }
```

- *Type:* object

domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#domains Loadbalancer#domains}

---

##### `DropletIds`<sup>Optional</sup> <a name="DropletIds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletIds"></a>

```csharp
public double[] DropletIds { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}.

---

##### `DropletTag`<sup>Optional</sup> <a name="DropletTag" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletTag"></a>

```csharp
public string DropletTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}.

---

##### `EnableBackendKeepalive`<sup>Optional</sup> <a name="EnableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableBackendKeepalive"></a>

```csharp
public object EnableBackendKeepalive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}.

---

##### `EnableProxyProtocol`<sup>Optional</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableProxyProtocol"></a>

```csharp
public object EnableProxyProtocol { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}.

---

##### `Firewall`<sup>Optional</sup> <a name="Firewall" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.firewall"></a>

```csharp
public LoadbalancerFirewall Firewall { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#firewall Loadbalancer#firewall}

---

##### `ForwardingRule`<sup>Optional</sup> <a name="ForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forwardingRule"></a>

```csharp
public object ForwardingRule { get; set; }
```

- *Type:* object

forwarding_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#forwarding_rule Loadbalancer#forwarding_rule}

---

##### `GlbSettings`<sup>Optional</sup> <a name="GlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.glbSettings"></a>

```csharp
public LoadbalancerGlbSettings GlbSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

glb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#glb_settings Loadbalancer#glb_settings}

---

##### `Healthcheck`<sup>Optional</sup> <a name="Healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.healthcheck"></a>

```csharp
public LoadbalancerHealthcheck Healthcheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#healthcheck Loadbalancer#healthcheck}

---

##### `HttpIdleTimeoutSeconds`<sup>Optional</sup> <a name="HttpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.httpIdleTimeoutSeconds"></a>

```csharp
public double HttpIdleTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#id Loadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

the type of network the load balancer is accessible from (EXTERNAL or INTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#network Loadbalancer#network}

---

##### `NetworkStack`<sup>Optional</sup> <a name="NetworkStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.networkStack"></a>

```csharp
public string NetworkStack { get; set; }
```

- *Type:* string

The network stack determines the allocation of ipv4/ipv6 addresses to the load balancer. Enum: 'IPV4' 'DUALSTACK'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#network_stack Loadbalancer#network_stack}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}.

---

##### `RedirectHttpToHttps`<sup>Optional</sup> <a name="RedirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.redirectHttpToHttps"></a>

```csharp
public object RedirectHttpToHttps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#region Loadbalancer#region}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.size"></a>

```csharp
public string Size { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#size Loadbalancer#size}.

---

##### `SizeUnit`<sup>Optional</sup> <a name="SizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.sizeUnit"></a>

```csharp
public double SizeUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}.

---

##### `StickySessions`<sup>Optional</sup> <a name="StickySessions" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.stickySessions"></a>

```csharp
public LoadbalancerStickySessions StickySessions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

sticky_sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#sticky_sessions Loadbalancer#sticky_sessions}

---

##### `TargetLoadBalancerIds`<sup>Optional</sup> <a name="TargetLoadBalancerIds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.targetLoadBalancerIds"></a>

```csharp
public string[] TargetLoadBalancerIds { get; set; }
```

- *Type:* string[]

list of load balancer IDs to put behind a global load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#target_load_balancer_ids Loadbalancer#target_load_balancer_ids}

---

##### `TlsCipherPolicy`<sup>Optional</sup> <a name="TlsCipherPolicy" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.tlsCipherPolicy"></a>

```csharp
public string TlsCipherPolicy { get; set; }
```

- *Type:* string

The tls cipher policy to be used for the load balancer. Enum: 'DEFAULT' 'STRONG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#tls_cipher_policy Loadbalancer#tls_cipher_policy}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

the type of the load balancer (GLOBAL, REGIONAL, or REGIONAL_NETWORK).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#type Loadbalancer#type}

---

##### `VpcUuid`<sup>Optional</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.vpcUuid"></a>

```csharp
public string VpcUuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}.

---

### LoadbalancerDomains <a name="LoadbalancerDomains" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerDomains {
    string Name,
    string CertificateName = null,
    object IsManaged = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.name">Name</a></code> | <code>string</code> | domain name. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.certificateName">CertificateName</a></code> | <code>string</code> | name of certificate required for TLS handshaking. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.isManaged">IsManaged</a></code> | <code>object</code> | flag indicating if domain is managed by DigitalOcean. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#name Loadbalancer#name}

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.certificateName"></a>

```csharp
public string CertificateName { get; set; }
```

- *Type:* string

name of certificate required for TLS handshaking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}

---

##### `IsManaged`<sup>Optional</sup> <a name="IsManaged" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.isManaged"></a>

```csharp
public object IsManaged { get; set; }
```

- *Type:* object

flag indicating if domain is managed by DigitalOcean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#is_managed Loadbalancer#is_managed}

---

### LoadbalancerFirewall <a name="LoadbalancerFirewall" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerFirewall {
    string[] Allow = null,
    string[] Deny = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.allow">Allow</a></code> | <code>string[]</code> | the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16'). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.deny">Deny</a></code> | <code>string[]</code> | the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16'). |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.allow"></a>

```csharp
public string[] Allow { get; set; }
```

- *Type:* string[]

the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#allow Loadbalancer#allow}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.deny"></a>

```csharp
public string[] Deny { get; set; }
```

- *Type:* string[]

the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#deny Loadbalancer#deny}

---

### LoadbalancerForwardingRule <a name="LoadbalancerForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerForwardingRule {
    double EntryPort,
    string EntryProtocol,
    double TargetPort,
    string TargetProtocol,
    string CertificateId = null,
    string CertificateName = null,
    object TlsPassthrough = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryPort">EntryPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#entry_port Loadbalancer#entry_port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryProtocol">EntryProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#entry_protocol Loadbalancer#entry_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetPort">TargetPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetProtocol">TargetProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateId">CertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#certificate_id Loadbalancer#certificate_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateName">CertificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.tlsPassthrough">TlsPassthrough</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#tls_passthrough Loadbalancer#tls_passthrough}. |

---

##### `EntryPort`<sup>Required</sup> <a name="EntryPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryPort"></a>

```csharp
public double EntryPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#entry_port Loadbalancer#entry_port}.

---

##### `EntryProtocol`<sup>Required</sup> <a name="EntryProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryProtocol"></a>

```csharp
public string EntryProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#entry_protocol Loadbalancer#entry_protocol}.

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetPort"></a>

```csharp
public double TargetPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}.

---

##### `TargetProtocol`<sup>Required</sup> <a name="TargetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetProtocol"></a>

```csharp
public string TargetProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}.

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#certificate_id Loadbalancer#certificate_id}.

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateName"></a>

```csharp
public string CertificateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}.

---

##### `TlsPassthrough`<sup>Optional</sup> <a name="TlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.tlsPassthrough"></a>

```csharp
public object TlsPassthrough { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#tls_passthrough Loadbalancer#tls_passthrough}.

---

### LoadbalancerGlbSettings <a name="LoadbalancerGlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerGlbSettings {
    double TargetPort,
    string TargetProtocol,
    LoadbalancerGlbSettingsCdn Cdn = null,
    double FailoverThreshold = null,
    System.Collections.Generic.IDictionary<string, double> RegionPriorities = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetPort">TargetPort</a></code> | <code>double</code> | target port rules. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetProtocol">TargetProtocol</a></code> | <code>string</code> | target protocol rules. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.cdn">Cdn</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | cdn block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.failoverThreshold">FailoverThreshold</a></code> | <code>double</code> | fail-over threshold. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.regionPriorities">RegionPriorities</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | region priority map. |

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetPort"></a>

```csharp
public double TargetPort { get; set; }
```

- *Type:* double

target port rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}

---

##### `TargetProtocol`<sup>Required</sup> <a name="TargetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetProtocol"></a>

```csharp
public string TargetProtocol { get; set; }
```

- *Type:* string

target protocol rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}

---

##### `Cdn`<sup>Optional</sup> <a name="Cdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.cdn"></a>

```csharp
public LoadbalancerGlbSettingsCdn Cdn { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

cdn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#cdn Loadbalancer#cdn}

---

##### `FailoverThreshold`<sup>Optional</sup> <a name="FailoverThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.failoverThreshold"></a>

```csharp
public double FailoverThreshold { get; set; }
```

- *Type:* double

fail-over threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#failover_threshold Loadbalancer#failover_threshold}

---

##### `RegionPriorities`<sup>Optional</sup> <a name="RegionPriorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.regionPriorities"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> RegionPriorities { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

region priority map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#region_priorities Loadbalancer#region_priorities}

---

### LoadbalancerGlbSettingsCdn <a name="LoadbalancerGlbSettingsCdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerGlbSettingsCdn {
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.property.isEnabled">IsEnabled</a></code> | <code>object</code> | cache enable flag. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

cache enable flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#is_enabled Loadbalancer#is_enabled}

---

### LoadbalancerHealthcheck <a name="LoadbalancerHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerHealthcheck {
    double Port,
    string Protocol,
    double CheckIntervalSeconds = null,
    double HealthyThreshold = null,
    string Path = null,
    double ResponseTimeoutSeconds = null,
    double UnhealthyThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#port Loadbalancer#port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.checkIntervalSeconds">CheckIntervalSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#path Loadbalancer#path}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.responseTimeoutSeconds">ResponseTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#port Loadbalancer#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}.

---

##### `CheckIntervalSeconds`<sup>Optional</sup> <a name="CheckIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.checkIntervalSeconds"></a>

```csharp
public double CheckIntervalSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}.

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#path Loadbalancer#path}.

---

##### `ResponseTimeoutSeconds`<sup>Optional</sup> <a name="ResponseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.responseTimeoutSeconds"></a>

```csharp
public double ResponseTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}.

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}.

---

### LoadbalancerStickySessions <a name="LoadbalancerStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerStickySessions {
    string CookieName = null,
    double CookieTtlSeconds = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieName">CookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieTtlSeconds">CookieTtlSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#type Loadbalancer#type}. |

---

##### `CookieName`<sup>Optional</sup> <a name="CookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieName"></a>

```csharp
public string CookieName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}.

---

##### `CookieTtlSeconds`<sup>Optional</sup> <a name="CookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieTtlSeconds"></a>

```csharp
public double CookieTtlSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/loadbalancer#type Loadbalancer#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerDomainsList <a name="LoadbalancerDomainsList" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerDomainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.get"></a>

```csharp
private LoadbalancerDomainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerDomainsOutputReference <a name="LoadbalancerDomainsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetIsManaged">ResetIsManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetCertificateName"></a>

```csharp
private void ResetCertificateName()
```

##### `ResetIsManaged` <a name="ResetIsManaged" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetIsManaged"></a>

```csharp
private void ResetIsManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.sslValidationErrorReasons">SslValidationErrorReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.verificationErrorReasons">VerificationErrorReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManagedInput">IsManagedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManaged">IsManaged</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `SslValidationErrorReasons`<sup>Required</sup> <a name="SslValidationErrorReasons" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.sslValidationErrorReasons"></a>

```csharp
public string[] SslValidationErrorReasons { get; }
```

- *Type:* string[]

---

##### `VerificationErrorReasons`<sup>Required</sup> <a name="VerificationErrorReasons" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.verificationErrorReasons"></a>

```csharp
public string[] VerificationErrorReasons { get; }
```

- *Type:* string[]

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateNameInput"></a>

```csharp
public string CertificateNameInput { get; }
```

- *Type:* string

---

##### `IsManagedInput`<sup>Optional</sup> <a name="IsManagedInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManagedInput"></a>

```csharp
public object IsManagedInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `IsManaged`<sup>Required</sup> <a name="IsManaged" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManaged"></a>

```csharp
public object IsManaged { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFirewallOutputReference <a name="LoadbalancerFirewallOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerFirewallOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetDeny">ResetDeny</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetDeny"></a>

```csharp
private void ResetDeny()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allowInput">AllowInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.denyInput">DenyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allow">Allow</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.deny">Deny</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allowInput"></a>

```csharp
public string[] AllowInput { get; }
```

- *Type:* string[]

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.denyInput"></a>

```csharp
public string[] DenyInput { get; }
```

- *Type:* string[]

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allow"></a>

```csharp
public string[] Allow { get; }
```

- *Type:* string[]

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.deny"></a>

```csharp
public string[] Deny { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.internalValue"></a>

```csharp
public LoadbalancerFirewall InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---


### LoadbalancerForwardingRuleList <a name="LoadbalancerForwardingRuleList" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerForwardingRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get"></a>

```csharp
private LoadbalancerForwardingRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerForwardingRuleOutputReference <a name="LoadbalancerForwardingRuleOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerForwardingRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetTlsPassthrough">ResetTlsPassthrough</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateId"></a>

```csharp
private void ResetCertificateId()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateName"></a>

```csharp
private void ResetCertificateName()
```

##### `ResetTlsPassthrough` <a name="ResetTlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetTlsPassthrough"></a>

```csharp
private void ResetTlsPassthrough()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPortInput">EntryPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocolInput">EntryProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPortInput">TargetPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocolInput">TargetProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthroughInput">TlsPassthroughInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPort">EntryPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocol">EntryProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPort">TargetPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocol">TargetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthrough">TlsPassthrough</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateNameInput"></a>

```csharp
public string CertificateNameInput { get; }
```

- *Type:* string

---

##### `EntryPortInput`<sup>Optional</sup> <a name="EntryPortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPortInput"></a>

```csharp
public double EntryPortInput { get; }
```

- *Type:* double

---

##### `EntryProtocolInput`<sup>Optional</sup> <a name="EntryProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocolInput"></a>

```csharp
public string EntryProtocolInput { get; }
```

- *Type:* string

---

##### `TargetPortInput`<sup>Optional</sup> <a name="TargetPortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPortInput"></a>

```csharp
public double TargetPortInput { get; }
```

- *Type:* double

---

##### `TargetProtocolInput`<sup>Optional</sup> <a name="TargetProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocolInput"></a>

```csharp
public string TargetProtocolInput { get; }
```

- *Type:* string

---

##### `TlsPassthroughInput`<sup>Optional</sup> <a name="TlsPassthroughInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthroughInput"></a>

```csharp
public object TlsPassthroughInput { get; }
```

- *Type:* object

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `EntryPort`<sup>Required</sup> <a name="EntryPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPort"></a>

```csharp
public double EntryPort { get; }
```

- *Type:* double

---

##### `EntryProtocol`<sup>Required</sup> <a name="EntryProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocol"></a>

```csharp
public string EntryProtocol { get; }
```

- *Type:* string

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPort"></a>

```csharp
public double TargetPort { get; }
```

- *Type:* double

---

##### `TargetProtocol`<sup>Required</sup> <a name="TargetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocol"></a>

```csharp
public string TargetProtocol { get; }
```

- *Type:* string

---

##### `TlsPassthrough`<sup>Required</sup> <a name="TlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthrough"></a>

```csharp
public object TlsPassthrough { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerGlbSettingsCdnOutputReference <a name="LoadbalancerGlbSettingsCdnOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerGlbSettingsCdnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.internalValue"></a>

```csharp
public LoadbalancerGlbSettingsCdn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

---


### LoadbalancerGlbSettingsOutputReference <a name="LoadbalancerGlbSettingsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerGlbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.putCdn">PutCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetCdn">ResetCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetFailoverThreshold">ResetFailoverThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetRegionPriorities">ResetRegionPriorities</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCdn` <a name="PutCdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.putCdn"></a>

```csharp
private void PutCdn(LoadbalancerGlbSettingsCdn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.putCdn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

---

##### `ResetCdn` <a name="ResetCdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetCdn"></a>

```csharp
private void ResetCdn()
```

##### `ResetFailoverThreshold` <a name="ResetFailoverThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetFailoverThreshold"></a>

```csharp
private void ResetFailoverThreshold()
```

##### `ResetRegionPriorities` <a name="ResetRegionPriorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetRegionPriorities"></a>

```csharp
private void ResetRegionPriorities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdn">Cdn</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference">LoadbalancerGlbSettingsCdnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdnInput">CdnInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThresholdInput">FailoverThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPrioritiesInput">RegionPrioritiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPortInput">TargetPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocolInput">TargetProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThreshold">FailoverThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPriorities">RegionPriorities</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPort">TargetPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocol">TargetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cdn`<sup>Required</sup> <a name="Cdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdn"></a>

```csharp
public LoadbalancerGlbSettingsCdnOutputReference Cdn { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference">LoadbalancerGlbSettingsCdnOutputReference</a>

---

##### `CdnInput`<sup>Optional</sup> <a name="CdnInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdnInput"></a>

```csharp
public LoadbalancerGlbSettingsCdn CdnInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

---

##### `FailoverThresholdInput`<sup>Optional</sup> <a name="FailoverThresholdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThresholdInput"></a>

```csharp
public double FailoverThresholdInput { get; }
```

- *Type:* double

---

##### `RegionPrioritiesInput`<sup>Optional</sup> <a name="RegionPrioritiesInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPrioritiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> RegionPrioritiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `TargetPortInput`<sup>Optional</sup> <a name="TargetPortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPortInput"></a>

```csharp
public double TargetPortInput { get; }
```

- *Type:* double

---

##### `TargetProtocolInput`<sup>Optional</sup> <a name="TargetProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocolInput"></a>

```csharp
public string TargetProtocolInput { get; }
```

- *Type:* string

---

##### `FailoverThreshold`<sup>Required</sup> <a name="FailoverThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThreshold"></a>

```csharp
public double FailoverThreshold { get; }
```

- *Type:* double

---

##### `RegionPriorities`<sup>Required</sup> <a name="RegionPriorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPriorities"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> RegionPriorities { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPort"></a>

```csharp
public double TargetPort { get; }
```

- *Type:* double

---

##### `TargetProtocol`<sup>Required</sup> <a name="TargetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocol"></a>

```csharp
public string TargetProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.internalValue"></a>

```csharp
public LoadbalancerGlbSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

---


### LoadbalancerHealthcheckOutputReference <a name="LoadbalancerHealthcheckOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerHealthcheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetCheckIntervalSeconds">ResetCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetResponseTimeoutSeconds">ResetResponseTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheckIntervalSeconds` <a name="ResetCheckIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetCheckIntervalSeconds"></a>

```csharp
private void ResetCheckIntervalSeconds()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetHealthyThreshold"></a>

```csharp
private void ResetHealthyThreshold()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetResponseTimeoutSeconds` <a name="ResetResponseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetResponseTimeoutSeconds"></a>

```csharp
private void ResetResponseTimeoutSeconds()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetUnhealthyThreshold"></a>

```csharp
private void ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSecondsInput">CheckIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSecondsInput">ResponseTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds">CheckIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds">ResponseTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckIntervalSecondsInput`<sup>Optional</sup> <a name="CheckIntervalSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSecondsInput"></a>

```csharp
public double CheckIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThresholdInput"></a>

```csharp
public double HealthyThresholdInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ResponseTimeoutSecondsInput`<sup>Optional</sup> <a name="ResponseTimeoutSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSecondsInput"></a>

```csharp
public double ResponseTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThresholdInput"></a>

```csharp
public double UnhealthyThresholdInput { get; }
```

- *Type:* double

---

##### `CheckIntervalSeconds`<sup>Required</sup> <a name="CheckIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds"></a>

```csharp
public double CheckIntervalSeconds { get; }
```

- *Type:* double

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ResponseTimeoutSeconds`<sup>Required</sup> <a name="ResponseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds"></a>

```csharp
public double ResponseTimeoutSeconds { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.internalValue"></a>

```csharp
public LoadbalancerHealthcheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---


### LoadbalancerStickySessionsOutputReference <a name="LoadbalancerStickySessionsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new LoadbalancerStickySessionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieName">ResetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieTtlSeconds">ResetCookieTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookieName` <a name="ResetCookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieName"></a>

```csharp
private void ResetCookieName()
```

##### `ResetCookieTtlSeconds` <a name="ResetCookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieTtlSeconds"></a>

```csharp
private void ResetCookieTtlSeconds()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSecondsInput">CookieTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieName">CookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds">CookieTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieNameInput"></a>

```csharp
public string CookieNameInput { get; }
```

- *Type:* string

---

##### `CookieTtlSecondsInput`<sup>Optional</sup> <a name="CookieTtlSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSecondsInput"></a>

```csharp
public double CookieTtlSecondsInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieName"></a>

```csharp
public string CookieName { get; }
```

- *Type:* string

---

##### `CookieTtlSeconds`<sup>Required</sup> <a name="CookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds"></a>

```csharp
public double CookieTtlSeconds { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.internalValue"></a>

```csharp
public LoadbalancerStickySessions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---



