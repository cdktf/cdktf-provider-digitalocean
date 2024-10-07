# `loadbalancer` Submodule <a name="`loadbalancer` Submodule" id="@cdktf/provider-digitalocean.loadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Loadbalancer <a name="Loadbalancer" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer digitalocean_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.NewLoadbalancer(scope Construct, id *string, config LoadbalancerConfig) Loadbalancer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig">LoadbalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRedirectHttpToHttps">ResetRedirectHttpToHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSizeUnit">ResetSizeUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetStickySessions">ResetStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTargetLoadBalancerIds">ResetTargetLoadBalancerIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetVpcUuid">ResetVpcUuid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDomains` <a name="PutDomains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putDomains"></a>

```go
func PutDomains(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putDomains.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFirewall` <a name="PutFirewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall"></a>

```go
func PutFirewall(value LoadbalancerFirewall)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---

##### `PutForwardingRule` <a name="PutForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule"></a>

```go
func PutForwardingRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGlbSettings` <a name="PutGlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings"></a>

```go
func PutGlbSettings(value LoadbalancerGlbSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

---

##### `PutHealthcheck` <a name="PutHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck"></a>

```go
func PutHealthcheck(value LoadbalancerHealthcheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---

##### `PutStickySessions` <a name="PutStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions"></a>

```go
func PutStickySessions(value LoadbalancerStickySessions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetDisableLetsEncryptDnsRecords` <a name="ResetDisableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDisableLetsEncryptDnsRecords"></a>

```go
func ResetDisableLetsEncryptDnsRecords()
```

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDomains"></a>

```go
func ResetDomains()
```

##### `ResetDropletIds` <a name="ResetDropletIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletIds"></a>

```go
func ResetDropletIds()
```

##### `ResetDropletTag` <a name="ResetDropletTag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletTag"></a>

```go
func ResetDropletTag()
```

##### `ResetEnableBackendKeepalive` <a name="ResetEnableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableBackendKeepalive"></a>

```go
func ResetEnableBackendKeepalive()
```

##### `ResetEnableProxyProtocol` <a name="ResetEnableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableProxyProtocol"></a>

```go
func ResetEnableProxyProtocol()
```

##### `ResetFirewall` <a name="ResetFirewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetFirewall"></a>

```go
func ResetFirewall()
```

##### `ResetForwardingRule` <a name="ResetForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetForwardingRule"></a>

```go
func ResetForwardingRule()
```

##### `ResetGlbSettings` <a name="ResetGlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetGlbSettings"></a>

```go
func ResetGlbSettings()
```

##### `ResetHealthcheck` <a name="ResetHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHealthcheck"></a>

```go
func ResetHealthcheck()
```

##### `ResetHttpIdleTimeoutSeconds` <a name="ResetHttpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHttpIdleTimeoutSeconds"></a>

```go
func ResetHttpIdleTimeoutSeconds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetId"></a>

```go
func ResetId()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRedirectHttpToHttps` <a name="ResetRedirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRedirectHttpToHttps"></a>

```go
func ResetRedirectHttpToHttps()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSize"></a>

```go
func ResetSize()
```

##### `ResetSizeUnit` <a name="ResetSizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSizeUnit"></a>

```go
func ResetSizeUnit()
```

##### `ResetStickySessions` <a name="ResetStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetStickySessions"></a>

```go
func ResetStickySessions()
```

##### `ResetTargetLoadBalancerIds` <a name="ResetTargetLoadBalancerIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTargetLoadBalancerIds"></a>

```go
func ResetTargetLoadBalancerIds()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetType"></a>

```go
func ResetType()
```

##### `ResetVpcUuid` <a name="ResetVpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetVpcUuid"></a>

```go
func ResetVpcUuid()
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

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.Loadbalancer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.Loadbalancer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.Loadbalancer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.Loadbalancer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Loadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Loadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Loadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domains">Domains</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList">LoadbalancerDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewall">Firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference">LoadbalancerFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRule">ForwardingRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList">LoadbalancerForwardingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettings">GlbSettings</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference">LoadbalancerGlbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheck">Healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference">LoadbalancerHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessions">StickySessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference">LoadbalancerStickySessionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.urn">Urn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecordsInput">DisableLetsEncryptDnsRecordsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domainsInput">DomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIdsInput">DropletIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTagInput">DropletTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepaliveInput">EnableBackendKeepaliveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocolInput">EnableProxyProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewallInput">FirewallInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRuleInput">ForwardingRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettingsInput">GlbSettingsInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheckInput">HealthcheckInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSecondsInput">HttpIdleTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttpsInput">RedirectHttpToHttpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeInput">SizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnitInput">SizeUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessionsInput">StickySessionsInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIdsInput">TargetLoadBalancerIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuidInput">VpcUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecords">DisableLetsEncryptDnsRecords</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIds">DropletIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTag">DropletTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepalive">EnableBackendKeepalive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSeconds">HttpIdleTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttps">RedirectHttpToHttps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.size">Size</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnit">SizeUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIds">TargetLoadBalancerIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domains"></a>

```go
func Domains() LoadbalancerDomainsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList">LoadbalancerDomainsList</a>

---

##### `Firewall`<sup>Required</sup> <a name="Firewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewall"></a>

```go
func Firewall() LoadbalancerFirewallOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference">LoadbalancerFirewallOutputReference</a>

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRule"></a>

```go
func ForwardingRule() LoadbalancerForwardingRuleList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList">LoadbalancerForwardingRuleList</a>

---

##### `GlbSettings`<sup>Required</sup> <a name="GlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettings"></a>

```go
func GlbSettings() LoadbalancerGlbSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference">LoadbalancerGlbSettingsOutputReference</a>

---

##### `Healthcheck`<sup>Required</sup> <a name="Healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheck"></a>

```go
func Healthcheck() LoadbalancerHealthcheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference">LoadbalancerHealthcheckOutputReference</a>

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StickySessions`<sup>Required</sup> <a name="StickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessions"></a>

```go
func StickySessions() LoadbalancerStickySessionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference">LoadbalancerStickySessionsOutputReference</a>

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.urn"></a>

```go
func Urn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `DisableLetsEncryptDnsRecordsInput`<sup>Optional</sup> <a name="DisableLetsEncryptDnsRecordsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecordsInput"></a>

```go
func DisableLetsEncryptDnsRecordsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domainsInput"></a>

```go
func DomainsInput() interface{}
```

- *Type:* interface{}

---

##### `DropletIdsInput`<sup>Optional</sup> <a name="DropletIdsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIdsInput"></a>

```go
func DropletIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DropletTagInput`<sup>Optional</sup> <a name="DropletTagInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTagInput"></a>

```go
func DropletTagInput() *string
```

- *Type:* *string

---

##### `EnableBackendKeepaliveInput`<sup>Optional</sup> <a name="EnableBackendKeepaliveInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepaliveInput"></a>

```go
func EnableBackendKeepaliveInput() interface{}
```

- *Type:* interface{}

---

##### `EnableProxyProtocolInput`<sup>Optional</sup> <a name="EnableProxyProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocolInput"></a>

```go
func EnableProxyProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallInput`<sup>Optional</sup> <a name="FirewallInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewallInput"></a>

```go
func FirewallInput() LoadbalancerFirewall
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---

##### `ForwardingRuleInput`<sup>Optional</sup> <a name="ForwardingRuleInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRuleInput"></a>

```go
func ForwardingRuleInput() interface{}
```

- *Type:* interface{}

---

##### `GlbSettingsInput`<sup>Optional</sup> <a name="GlbSettingsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettingsInput"></a>

```go
func GlbSettingsInput() LoadbalancerGlbSettings
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

---

##### `HealthcheckInput`<sup>Optional</sup> <a name="HealthcheckInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheckInput"></a>

```go
func HealthcheckInput() LoadbalancerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---

##### `HttpIdleTimeoutSecondsInput`<sup>Optional</sup> <a name="HttpIdleTimeoutSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSecondsInput"></a>

```go
func HttpIdleTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RedirectHttpToHttpsInput`<sup>Optional</sup> <a name="RedirectHttpToHttpsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttpsInput"></a>

```go
func RedirectHttpToHttpsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeInput"></a>

```go
func SizeInput() *string
```

- *Type:* *string

---

##### `SizeUnitInput`<sup>Optional</sup> <a name="SizeUnitInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnitInput"></a>

```go
func SizeUnitInput() *f64
```

- *Type:* *f64

---

##### `StickySessionsInput`<sup>Optional</sup> <a name="StickySessionsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessionsInput"></a>

```go
func StickySessionsInput() LoadbalancerStickySessions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---

##### `TargetLoadBalancerIdsInput`<sup>Optional</sup> <a name="TargetLoadBalancerIdsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIdsInput"></a>

```go
func TargetLoadBalancerIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VpcUuidInput`<sup>Optional</sup> <a name="VpcUuidInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuidInput"></a>

```go
func VpcUuidInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `DisableLetsEncryptDnsRecords`<sup>Required</sup> <a name="DisableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecords"></a>

```go
func DisableLetsEncryptDnsRecords() interface{}
```

- *Type:* interface{}

---

##### `DropletIds`<sup>Required</sup> <a name="DropletIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIds"></a>

```go
func DropletIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `DropletTag`<sup>Required</sup> <a name="DropletTag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTag"></a>

```go
func DropletTag() *string
```

- *Type:* *string

---

##### `EnableBackendKeepalive`<sup>Required</sup> <a name="EnableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepalive"></a>

```go
func EnableBackendKeepalive() interface{}
```

- *Type:* interface{}

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocol"></a>

```go
func EnableProxyProtocol() interface{}
```

- *Type:* interface{}

---

##### `HttpIdleTimeoutSeconds`<sup>Required</sup> <a name="HttpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSeconds"></a>

```go
func HttpIdleTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RedirectHttpToHttps`<sup>Required</sup> <a name="RedirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttps"></a>

```go
func RedirectHttpToHttps() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

##### `SizeUnit`<sup>Required</sup> <a name="SizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnit"></a>

```go
func SizeUnit() *f64
```

- *Type:* *f64

---

##### `TargetLoadBalancerIds`<sup>Required</sup> <a name="TargetLoadBalancerIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIds"></a>

```go
func TargetLoadBalancerIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuid"></a>

```go
func VpcUuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerConfig <a name="LoadbalancerConfig" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

&loadbalancer.LoadbalancerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Algorithm: *string,
	DisableLetsEncryptDnsRecords: interface{},
	Domains: interface{},
	DropletIds: *[]*f64,
	DropletTag: *string,
	EnableBackendKeepalive: interface{},
	EnableProxyProtocol: interface{},
	Firewall: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean.loadbalancer.LoadbalancerFirewall,
	ForwardingRule: interface{},
	GlbSettings: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean.loadbalancer.LoadbalancerGlbSettings,
	Healthcheck: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean.loadbalancer.LoadbalancerHealthcheck,
	HttpIdleTimeoutSeconds: *f64,
	Id: *string,
	Network: *string,
	ProjectId: *string,
	RedirectHttpToHttps: interface{},
	Region: *string,
	Size: *string,
	SizeUnit: *f64,
	StickySessions: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean.loadbalancer.LoadbalancerStickySessions,
	TargetLoadBalancerIds: *[]*string,
	Type: *string,
	VpcUuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#name Loadbalancer#name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.algorithm">Algorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.disableLetsEncryptDnsRecords">DisableLetsEncryptDnsRecords</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.domains">Domains</a></code> | <code>interface{}</code> | domains block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletIds">DropletIds</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletTag">DropletTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableBackendKeepalive">EnableBackendKeepalive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.firewall">Firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forwardingRule">ForwardingRule</a></code> | <code>interface{}</code> | forwarding_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.glbSettings">GlbSettings</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | glb_settings block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.healthcheck">Healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.httpIdleTimeoutSeconds">HttpIdleTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#id Loadbalancer#id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.network">Network</a></code> | <code>*string</code> | the type of network the load balancer is accessible from (EXTERNAL or INTERNAL). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.redirectHttpToHttps">RedirectHttpToHttps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#region Loadbalancer#region}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.size">Size</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#size Loadbalancer#size}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.sizeUnit">SizeUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.stickySessions">StickySessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | sticky_sessions block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.targetLoadBalancerIds">TargetLoadBalancerIds</a></code> | <code>*[]*string</code> | list of load balancer IDs to put behind a global load balancer. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.type">Type</a></code> | <code>*string</code> | the type of the load balancer (GLOBAL or REGIONAL). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#name Loadbalancer#name}.

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}.

---

##### `DisableLetsEncryptDnsRecords`<sup>Optional</sup> <a name="DisableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.disableLetsEncryptDnsRecords"></a>

```go
DisableLetsEncryptDnsRecords interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}.

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.domains"></a>

```go
Domains interface{}
```

- *Type:* interface{}

domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#domains Loadbalancer#domains}

---

##### `DropletIds`<sup>Optional</sup> <a name="DropletIds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletIds"></a>

```go
DropletIds *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}.

---

##### `DropletTag`<sup>Optional</sup> <a name="DropletTag" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletTag"></a>

```go
DropletTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}.

---

##### `EnableBackendKeepalive`<sup>Optional</sup> <a name="EnableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableBackendKeepalive"></a>

```go
EnableBackendKeepalive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}.

---

##### `EnableProxyProtocol`<sup>Optional</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableProxyProtocol"></a>

```go
EnableProxyProtocol interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}.

---

##### `Firewall`<sup>Optional</sup> <a name="Firewall" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.firewall"></a>

```go
Firewall LoadbalancerFirewall
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#firewall Loadbalancer#firewall}

---

##### `ForwardingRule`<sup>Optional</sup> <a name="ForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forwardingRule"></a>

```go
ForwardingRule interface{}
```

- *Type:* interface{}

forwarding_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#forwarding_rule Loadbalancer#forwarding_rule}

---

##### `GlbSettings`<sup>Optional</sup> <a name="GlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.glbSettings"></a>

```go
GlbSettings LoadbalancerGlbSettings
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

glb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#glb_settings Loadbalancer#glb_settings}

---

##### `Healthcheck`<sup>Optional</sup> <a name="Healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.healthcheck"></a>

```go
Healthcheck LoadbalancerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#healthcheck Loadbalancer#healthcheck}

---

##### `HttpIdleTimeoutSeconds`<sup>Optional</sup> <a name="HttpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.httpIdleTimeoutSeconds"></a>

```go
HttpIdleTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#id Loadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

the type of network the load balancer is accessible from (EXTERNAL or INTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#network Loadbalancer#network}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}.

---

##### `RedirectHttpToHttps`<sup>Optional</sup> <a name="RedirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.redirectHttpToHttps"></a>

```go
RedirectHttpToHttps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#region Loadbalancer#region}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.size"></a>

```go
Size *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#size Loadbalancer#size}.

---

##### `SizeUnit`<sup>Optional</sup> <a name="SizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.sizeUnit"></a>

```go
SizeUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}.

---

##### `StickySessions`<sup>Optional</sup> <a name="StickySessions" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.stickySessions"></a>

```go
StickySessions LoadbalancerStickySessions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

sticky_sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#sticky_sessions Loadbalancer#sticky_sessions}

---

##### `TargetLoadBalancerIds`<sup>Optional</sup> <a name="TargetLoadBalancerIds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.targetLoadBalancerIds"></a>

```go
TargetLoadBalancerIds *[]*string
```

- *Type:* *[]*string

list of load balancer IDs to put behind a global load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#target_load_balancer_ids Loadbalancer#target_load_balancer_ids}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

the type of the load balancer (GLOBAL or REGIONAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#type Loadbalancer#type}

---

##### `VpcUuid`<sup>Optional</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.vpcUuid"></a>

```go
VpcUuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}.

---

### LoadbalancerDomains <a name="LoadbalancerDomains" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

&loadbalancer.LoadbalancerDomains {
	Name: *string,
	CertificateName: *string,
	IsManaged: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.name">Name</a></code> | <code>*string</code> | domain name. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.certificateName">CertificateName</a></code> | <code>*string</code> | name of certificate required for TLS handshaking. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.isManaged">IsManaged</a></code> | <code>interface{}</code> | flag indicating if domain is managed by DigitalOcean. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.name"></a>

```go
Name *string
```

- *Type:* *string

domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#name Loadbalancer#name}

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

name of certificate required for TLS handshaking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}

---

##### `IsManaged`<sup>Optional</sup> <a name="IsManaged" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.isManaged"></a>

```go
IsManaged interface{}
```

- *Type:* interface{}

flag indicating if domain is managed by DigitalOcean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#is_managed Loadbalancer#is_managed}

---

### LoadbalancerFirewall <a name="LoadbalancerFirewall" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

&loadbalancer.LoadbalancerFirewall {
	Allow: *[]*string,
	Deny: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.allow">Allow</a></code> | <code>*[]*string</code> | the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16'). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.deny">Deny</a></code> | <code>*[]*string</code> | the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16'). |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.allow"></a>

```go
Allow *[]*string
```

- *Type:* *[]*string

the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#allow Loadbalancer#allow}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.deny"></a>

```go
Deny *[]*string
```

- *Type:* *[]*string

the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#deny Loadbalancer#deny}

---

### LoadbalancerForwardingRule <a name="LoadbalancerForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

&loadbalancer.LoadbalancerForwardingRule {
	EntryPort: *f64,
	EntryProtocol: *string,
	TargetPort: *f64,
	TargetProtocol: *string,
	CertificateId: *string,
	CertificateName: *string,
	TlsPassthrough: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryPort">EntryPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#entry_port Loadbalancer#entry_port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryProtocol">EntryProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#entry_protocol Loadbalancer#entry_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetPort">TargetPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetProtocol">TargetProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateId">CertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#certificate_id Loadbalancer#certificate_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateName">CertificateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.tlsPassthrough">TlsPassthrough</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#tls_passthrough Loadbalancer#tls_passthrough}. |

---

##### `EntryPort`<sup>Required</sup> <a name="EntryPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryPort"></a>

```go
EntryPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#entry_port Loadbalancer#entry_port}.

---

##### `EntryProtocol`<sup>Required</sup> <a name="EntryProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryProtocol"></a>

```go
EntryProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#entry_protocol Loadbalancer#entry_protocol}.

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetPort"></a>

```go
TargetPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}.

---

##### `TargetProtocol`<sup>Required</sup> <a name="TargetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetProtocol"></a>

```go
TargetProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}.

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#certificate_id Loadbalancer#certificate_id}.

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}.

---

##### `TlsPassthrough`<sup>Optional</sup> <a name="TlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.tlsPassthrough"></a>

```go
TlsPassthrough interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#tls_passthrough Loadbalancer#tls_passthrough}.

---

### LoadbalancerGlbSettings <a name="LoadbalancerGlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

&loadbalancer.LoadbalancerGlbSettings {
	TargetPort: *f64,
	TargetProtocol: *string,
	Cdn: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn,
	FailoverThreshold: *f64,
	RegionPriorities: *map[string]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetPort">TargetPort</a></code> | <code>*f64</code> | target port rules. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetProtocol">TargetProtocol</a></code> | <code>*string</code> | target protocol rules. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.cdn">Cdn</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | cdn block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.failoverThreshold">FailoverThreshold</a></code> | <code>*f64</code> | fail-over threshold. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.regionPriorities">RegionPriorities</a></code> | <code>*map[string]*f64</code> | region priority map. |

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetPort"></a>

```go
TargetPort *f64
```

- *Type:* *f64

target port rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}

---

##### `TargetProtocol`<sup>Required</sup> <a name="TargetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetProtocol"></a>

```go
TargetProtocol *string
```

- *Type:* *string

target protocol rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}

---

##### `Cdn`<sup>Optional</sup> <a name="Cdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.cdn"></a>

```go
Cdn LoadbalancerGlbSettingsCdn
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

cdn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#cdn Loadbalancer#cdn}

---

##### `FailoverThreshold`<sup>Optional</sup> <a name="FailoverThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.failoverThreshold"></a>

```go
FailoverThreshold *f64
```

- *Type:* *f64

fail-over threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#failover_threshold Loadbalancer#failover_threshold}

---

##### `RegionPriorities`<sup>Optional</sup> <a name="RegionPriorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.regionPriorities"></a>

```go
RegionPriorities *map[string]*f64
```

- *Type:* *map[string]*f64

region priority map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#region_priorities Loadbalancer#region_priorities}

---

### LoadbalancerGlbSettingsCdn <a name="LoadbalancerGlbSettingsCdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

&loadbalancer.LoadbalancerGlbSettingsCdn {
	IsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | cache enable flag. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

cache enable flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#is_enabled Loadbalancer#is_enabled}

---

### LoadbalancerHealthcheck <a name="LoadbalancerHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

&loadbalancer.LoadbalancerHealthcheck {
	Port: *f64,
	Protocol: *string,
	CheckIntervalSeconds: *f64,
	HealthyThreshold: *f64,
	Path: *string,
	ResponseTimeoutSeconds: *f64,
	UnhealthyThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#port Loadbalancer#port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.checkIntervalSeconds">CheckIntervalSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#path Loadbalancer#path}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.responseTimeoutSeconds">ResponseTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#port Loadbalancer#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}.

---

##### `CheckIntervalSeconds`<sup>Optional</sup> <a name="CheckIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.checkIntervalSeconds"></a>

```go
CheckIntervalSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}.

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#path Loadbalancer#path}.

---

##### `ResponseTimeoutSeconds`<sup>Optional</sup> <a name="ResponseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.responseTimeoutSeconds"></a>

```go
ResponseTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}.

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}.

---

### LoadbalancerStickySessions <a name="LoadbalancerStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

&loadbalancer.LoadbalancerStickySessions {
	CookieName: *string,
	CookieTtlSeconds: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieName">CookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieTtlSeconds">CookieTtlSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#type Loadbalancer#type}. |

---

##### `CookieName`<sup>Optional</sup> <a name="CookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieName"></a>

```go
CookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}.

---

##### `CookieTtlSeconds`<sup>Optional</sup> <a name="CookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieTtlSeconds"></a>

```go
CookieTtlSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/loadbalancer#type Loadbalancer#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerDomainsList <a name="LoadbalancerDomainsList" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.NewLoadbalancerDomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadbalancerDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.get"></a>

```go
func Get(index *f64) LoadbalancerDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadbalancerDomainsOutputReference <a name="LoadbalancerDomainsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.NewLoadbalancerDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadbalancerDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetCertificateName"></a>

```go
func ResetCertificateName()
```

##### `ResetIsManaged` <a name="ResetIsManaged" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetIsManaged"></a>

```go
func ResetIsManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.sslValidationErrorReasons">SslValidationErrorReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.verificationErrorReasons">VerificationErrorReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManagedInput">IsManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManaged">IsManaged</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SslValidationErrorReasons`<sup>Required</sup> <a name="SslValidationErrorReasons" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.sslValidationErrorReasons"></a>

```go
func SslValidationErrorReasons() *[]*string
```

- *Type:* *[]*string

---

##### `VerificationErrorReasons`<sup>Required</sup> <a name="VerificationErrorReasons" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.verificationErrorReasons"></a>

```go
func VerificationErrorReasons() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `IsManagedInput`<sup>Optional</sup> <a name="IsManagedInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManagedInput"></a>

```go
func IsManagedInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `IsManaged`<sup>Required</sup> <a name="IsManaged" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManaged"></a>

```go
func IsManaged() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadbalancerFirewallOutputReference <a name="LoadbalancerFirewallOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.NewLoadbalancerFirewallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadbalancerFirewallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetAllow"></a>

```go
func ResetAllow()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetDeny"></a>

```go
func ResetDeny()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allowInput">AllowInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.denyInput">DenyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allow">Allow</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.deny">Deny</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allowInput"></a>

```go
func AllowInput() *[]*string
```

- *Type:* *[]*string

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.denyInput"></a>

```go
func DenyInput() *[]*string
```

- *Type:* *[]*string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allow"></a>

```go
func Allow() *[]*string
```

- *Type:* *[]*string

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.deny"></a>

```go
func Deny() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadbalancerFirewall
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---


### LoadbalancerForwardingRuleList <a name="LoadbalancerForwardingRuleList" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.NewLoadbalancerForwardingRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadbalancerForwardingRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get"></a>

```go
func Get(index *f64) LoadbalancerForwardingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadbalancerForwardingRuleOutputReference <a name="LoadbalancerForwardingRuleOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.NewLoadbalancerForwardingRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadbalancerForwardingRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateName"></a>

```go
func ResetCertificateName()
```

##### `ResetTlsPassthrough` <a name="ResetTlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetTlsPassthrough"></a>

```go
func ResetTlsPassthrough()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPortInput">EntryPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocolInput">EntryProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPortInput">TargetPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocolInput">TargetProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthroughInput">TlsPassthroughInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPort">EntryPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocol">EntryProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPort">TargetPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocol">TargetProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthrough">TlsPassthrough</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `EntryPortInput`<sup>Optional</sup> <a name="EntryPortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPortInput"></a>

```go
func EntryPortInput() *f64
```

- *Type:* *f64

---

##### `EntryProtocolInput`<sup>Optional</sup> <a name="EntryProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocolInput"></a>

```go
func EntryProtocolInput() *string
```

- *Type:* *string

---

##### `TargetPortInput`<sup>Optional</sup> <a name="TargetPortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPortInput"></a>

```go
func TargetPortInput() *f64
```

- *Type:* *f64

---

##### `TargetProtocolInput`<sup>Optional</sup> <a name="TargetProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocolInput"></a>

```go
func TargetProtocolInput() *string
```

- *Type:* *string

---

##### `TlsPassthroughInput`<sup>Optional</sup> <a name="TlsPassthroughInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthroughInput"></a>

```go
func TlsPassthroughInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `EntryPort`<sup>Required</sup> <a name="EntryPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPort"></a>

```go
func EntryPort() *f64
```

- *Type:* *f64

---

##### `EntryProtocol`<sup>Required</sup> <a name="EntryProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocol"></a>

```go
func EntryProtocol() *string
```

- *Type:* *string

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPort"></a>

```go
func TargetPort() *f64
```

- *Type:* *f64

---

##### `TargetProtocol`<sup>Required</sup> <a name="TargetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocol"></a>

```go
func TargetProtocol() *string
```

- *Type:* *string

---

##### `TlsPassthrough`<sup>Required</sup> <a name="TlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthrough"></a>

```go
func TlsPassthrough() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadbalancerGlbSettingsCdnOutputReference <a name="LoadbalancerGlbSettingsCdnOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.NewLoadbalancerGlbSettingsCdnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadbalancerGlbSettingsCdnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadbalancerGlbSettingsCdn
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

---


### LoadbalancerGlbSettingsOutputReference <a name="LoadbalancerGlbSettingsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.NewLoadbalancerGlbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadbalancerGlbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCdn` <a name="PutCdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.putCdn"></a>

```go
func PutCdn(value LoadbalancerGlbSettingsCdn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.putCdn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

---

##### `ResetCdn` <a name="ResetCdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetCdn"></a>

```go
func ResetCdn()
```

##### `ResetFailoverThreshold` <a name="ResetFailoverThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetFailoverThreshold"></a>

```go
func ResetFailoverThreshold()
```

##### `ResetRegionPriorities` <a name="ResetRegionPriorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetRegionPriorities"></a>

```go
func ResetRegionPriorities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdn">Cdn</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference">LoadbalancerGlbSettingsCdnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdnInput">CdnInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThresholdInput">FailoverThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPrioritiesInput">RegionPrioritiesInput</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPortInput">TargetPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocolInput">TargetProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThreshold">FailoverThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPriorities">RegionPriorities</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPort">TargetPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocol">TargetProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cdn`<sup>Required</sup> <a name="Cdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdn"></a>

```go
func Cdn() LoadbalancerGlbSettingsCdnOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference">LoadbalancerGlbSettingsCdnOutputReference</a>

---

##### `CdnInput`<sup>Optional</sup> <a name="CdnInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdnInput"></a>

```go
func CdnInput() LoadbalancerGlbSettingsCdn
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

---

##### `FailoverThresholdInput`<sup>Optional</sup> <a name="FailoverThresholdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThresholdInput"></a>

```go
func FailoverThresholdInput() *f64
```

- *Type:* *f64

---

##### `RegionPrioritiesInput`<sup>Optional</sup> <a name="RegionPrioritiesInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPrioritiesInput"></a>

```go
func RegionPrioritiesInput() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `TargetPortInput`<sup>Optional</sup> <a name="TargetPortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPortInput"></a>

```go
func TargetPortInput() *f64
```

- *Type:* *f64

---

##### `TargetProtocolInput`<sup>Optional</sup> <a name="TargetProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocolInput"></a>

```go
func TargetProtocolInput() *string
```

- *Type:* *string

---

##### `FailoverThreshold`<sup>Required</sup> <a name="FailoverThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThreshold"></a>

```go
func FailoverThreshold() *f64
```

- *Type:* *f64

---

##### `RegionPriorities`<sup>Required</sup> <a name="RegionPriorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPriorities"></a>

```go
func RegionPriorities() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPort"></a>

```go
func TargetPort() *f64
```

- *Type:* *f64

---

##### `TargetProtocol`<sup>Required</sup> <a name="TargetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocol"></a>

```go
func TargetProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadbalancerGlbSettings
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

---


### LoadbalancerHealthcheckOutputReference <a name="LoadbalancerHealthcheckOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.NewLoadbalancerHealthcheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadbalancerHealthcheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheckIntervalSeconds` <a name="ResetCheckIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetCheckIntervalSeconds"></a>

```go
func ResetCheckIntervalSeconds()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetHealthyThreshold"></a>

```go
func ResetHealthyThreshold()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetResponseTimeoutSeconds` <a name="ResetResponseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetResponseTimeoutSeconds"></a>

```go
func ResetResponseTimeoutSeconds()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetUnhealthyThreshold"></a>

```go
func ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSecondsInput">CheckIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSecondsInput">ResponseTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds">CheckIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds">ResponseTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckIntervalSecondsInput`<sup>Optional</sup> <a name="CheckIntervalSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSecondsInput"></a>

```go
func CheckIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ResponseTimeoutSecondsInput`<sup>Optional</sup> <a name="ResponseTimeoutSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSecondsInput"></a>

```go
func ResponseTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `CheckIntervalSeconds`<sup>Required</sup> <a name="CheckIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds"></a>

```go
func CheckIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ResponseTimeoutSeconds`<sup>Required</sup> <a name="ResponseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds"></a>

```go
func ResponseTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadbalancerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---


### LoadbalancerStickySessionsOutputReference <a name="LoadbalancerStickySessionsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/loadbalancer"

loadbalancer.NewLoadbalancerStickySessionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadbalancerStickySessionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookieName` <a name="ResetCookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieName"></a>

```go
func ResetCookieName()
```

##### `ResetCookieTtlSeconds` <a name="ResetCookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieTtlSeconds"></a>

```go
func ResetCookieTtlSeconds()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSecondsInput">CookieTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieName">CookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds">CookieTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieNameInput"></a>

```go
func CookieNameInput() *string
```

- *Type:* *string

---

##### `CookieTtlSecondsInput`<sup>Optional</sup> <a name="CookieTtlSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSecondsInput"></a>

```go
func CookieTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieName"></a>

```go
func CookieName() *string
```

- *Type:* *string

---

##### `CookieTtlSeconds`<sup>Required</sup> <a name="CookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds"></a>

```go
func CookieTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadbalancerStickySessions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---



