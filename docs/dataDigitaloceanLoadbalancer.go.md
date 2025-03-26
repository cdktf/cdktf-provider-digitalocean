# `dataDigitaloceanLoadbalancer` Submodule <a name="`dataDigitaloceanLoadbalancer` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanLoadbalancer <a name="DataDigitaloceanLoadbalancer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/loadbalancer digitalocean_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancer(scope Construct, id *string, config DataDigitaloceanLoadbalancerConfig) DataDigitaloceanLoadbalancer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig">DataDigitaloceanLoadbalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig">DataDigitaloceanLoadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanLoadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanLoadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanLoadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanLoadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanLoadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.disableLetsEncryptDnsRecords">DisableLetsEncryptDnsRecords</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.domains">Domains</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList">DataDigitaloceanLoadbalancerDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dropletIds">DropletIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dropletTag">DropletTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.enableBackendKeepalive">EnableBackendKeepalive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.firewall">Firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList">DataDigitaloceanLoadbalancerFirewallList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.forwardingRule">ForwardingRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList">DataDigitaloceanLoadbalancerForwardingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.glbSettings">GlbSettings</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList">DataDigitaloceanLoadbalancerGlbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.healthcheck">Healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList">DataDigitaloceanLoadbalancerHealthcheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.httpIdleTimeoutSeconds">HttpIdleTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.ipv6">Ipv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.redirectHttpToHttps">RedirectHttpToHttps</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.size">Size</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.sizeUnit">SizeUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.stickySessions">StickySessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList">DataDigitaloceanLoadbalancerStickySessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.targetLoadBalancerIds">TargetLoadBalancerIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.urn">Urn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `DisableLetsEncryptDnsRecords`<sup>Required</sup> <a name="DisableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.disableLetsEncryptDnsRecords"></a>

```go
func DisableLetsEncryptDnsRecords() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.domains"></a>

```go
func Domains() DataDigitaloceanLoadbalancerDomainsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList">DataDigitaloceanLoadbalancerDomainsList</a>

---

##### `DropletIds`<sup>Required</sup> <a name="DropletIds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dropletIds"></a>

```go
func DropletIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `DropletTag`<sup>Required</sup> <a name="DropletTag" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.dropletTag"></a>

```go
func DropletTag() *string
```

- *Type:* *string

---

##### `EnableBackendKeepalive`<sup>Required</sup> <a name="EnableBackendKeepalive" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.enableBackendKeepalive"></a>

```go
func EnableBackendKeepalive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.enableProxyProtocol"></a>

```go
func EnableProxyProtocol() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Firewall`<sup>Required</sup> <a name="Firewall" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.firewall"></a>

```go
func Firewall() DataDigitaloceanLoadbalancerFirewallList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList">DataDigitaloceanLoadbalancerFirewallList</a>

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.forwardingRule"></a>

```go
func ForwardingRule() DataDigitaloceanLoadbalancerForwardingRuleList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList">DataDigitaloceanLoadbalancerForwardingRuleList</a>

---

##### `GlbSettings`<sup>Required</sup> <a name="GlbSettings" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.glbSettings"></a>

```go
func GlbSettings() DataDigitaloceanLoadbalancerGlbSettingsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList">DataDigitaloceanLoadbalancerGlbSettingsList</a>

---

##### `Healthcheck`<sup>Required</sup> <a name="Healthcheck" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.healthcheck"></a>

```go
func Healthcheck() DataDigitaloceanLoadbalancerHealthcheckList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList">DataDigitaloceanLoadbalancerHealthcheckList</a>

---

##### `HttpIdleTimeoutSeconds`<sup>Required</sup> <a name="HttpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.httpIdleTimeoutSeconds"></a>

```go
func HttpIdleTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.ipv6"></a>

```go
func Ipv6() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RedirectHttpToHttps`<sup>Required</sup> <a name="RedirectHttpToHttps" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.redirectHttpToHttps"></a>

```go
func RedirectHttpToHttps() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

##### `SizeUnit`<sup>Required</sup> <a name="SizeUnit" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.sizeUnit"></a>

```go
func SizeUnit() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StickySessions`<sup>Required</sup> <a name="StickySessions" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.stickySessions"></a>

```go
func StickySessions() DataDigitaloceanLoadbalancerStickySessionsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList">DataDigitaloceanLoadbalancerStickySessionsList</a>

---

##### `TargetLoadBalancerIds`<sup>Required</sup> <a name="TargetLoadBalancerIds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.targetLoadBalancerIds"></a>

```go
func TargetLoadBalancerIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.urn"></a>

```go
func Urn() *string
```

- *Type:* *string

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.vpcUuid"></a>

```go
func VpcUuid() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanLoadbalancerConfig <a name="DataDigitaloceanLoadbalancerConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

&datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.id">Id</a></code> | <code>*string</code> | id of the load balancer. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.name">Name</a></code> | <code>*string</code> | name of the load balancer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

id of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/loadbalancer#id DataDigitaloceanLoadbalancer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

name of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/data-sources/loadbalancer#name DataDigitaloceanLoadbalancer#name}

---

### DataDigitaloceanLoadbalancerDomains <a name="DataDigitaloceanLoadbalancerDomains" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

&datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancerDomains {

}
```


### DataDigitaloceanLoadbalancerFirewall <a name="DataDigitaloceanLoadbalancerFirewall" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewall.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

&datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancerFirewall {

}
```


### DataDigitaloceanLoadbalancerForwardingRule <a name="DataDigitaloceanLoadbalancerForwardingRule" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

&datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancerForwardingRule {

}
```


### DataDigitaloceanLoadbalancerGlbSettings <a name="DataDigitaloceanLoadbalancerGlbSettings" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

&datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancerGlbSettings {

}
```


### DataDigitaloceanLoadbalancerGlbSettingsCdn <a name="DataDigitaloceanLoadbalancerGlbSettingsCdn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

&datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdn {

}
```


### DataDigitaloceanLoadbalancerHealthcheck <a name="DataDigitaloceanLoadbalancerHealthcheck" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

&datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancerHealthcheck {

}
```


### DataDigitaloceanLoadbalancerStickySessions <a name="DataDigitaloceanLoadbalancerStickySessions" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

&datadigitaloceanloadbalancer.DataDigitaloceanLoadbalancerStickySessions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanLoadbalancerDomainsList <a name="DataDigitaloceanLoadbalancerDomainsList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerDomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanLoadbalancerDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.get"></a>

```go
func Get(index *f64) DataDigitaloceanLoadbalancerDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanLoadbalancerDomainsOutputReference <a name="DataDigitaloceanLoadbalancerDomainsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanLoadbalancerDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.isManaged">IsManaged</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.sslValidationErrorReasons">SslValidationErrorReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.verificationErrorReasons">VerificationErrorReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomains">DataDigitaloceanLoadbalancerDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `IsManaged`<sup>Required</sup> <a name="IsManaged" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.isManaged"></a>

```go
func IsManaged() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SslValidationErrorReasons`<sup>Required</sup> <a name="SslValidationErrorReasons" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.sslValidationErrorReasons"></a>

```go
func SslValidationErrorReasons() *[]*string
```

- *Type:* *[]*string

---

##### `VerificationErrorReasons`<sup>Required</sup> <a name="VerificationErrorReasons" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.verificationErrorReasons"></a>

```go
func VerificationErrorReasons() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanLoadbalancerDomains
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerDomains">DataDigitaloceanLoadbalancerDomains</a>

---


### DataDigitaloceanLoadbalancerFirewallList <a name="DataDigitaloceanLoadbalancerFirewallList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerFirewallList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanLoadbalancerFirewallList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.get"></a>

```go
func Get(index *f64) DataDigitaloceanLoadbalancerFirewallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanLoadbalancerFirewallOutputReference <a name="DataDigitaloceanLoadbalancerFirewallOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerFirewallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanLoadbalancerFirewallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.allow">Allow</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.deny">Deny</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewall">DataDigitaloceanLoadbalancerFirewall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.allow"></a>

```go
func Allow() *[]*string
```

- *Type:* *[]*string

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.deny"></a>

```go
func Deny() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewallOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanLoadbalancerFirewall
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerFirewall">DataDigitaloceanLoadbalancerFirewall</a>

---


### DataDigitaloceanLoadbalancerForwardingRuleList <a name="DataDigitaloceanLoadbalancerForwardingRuleList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerForwardingRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanLoadbalancerForwardingRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.get"></a>

```go
func Get(index *f64) DataDigitaloceanLoadbalancerForwardingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanLoadbalancerForwardingRuleOutputReference <a name="DataDigitaloceanLoadbalancerForwardingRuleOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerForwardingRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanLoadbalancerForwardingRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.entryPort">EntryPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.entryProtocol">EntryProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.targetPort">TargetPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.targetProtocol">TargetProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.tlsPassthrough">TlsPassthrough</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRule">DataDigitaloceanLoadbalancerForwardingRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `EntryPort`<sup>Required</sup> <a name="EntryPort" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.entryPort"></a>

```go
func EntryPort() *f64
```

- *Type:* *f64

---

##### `EntryProtocol`<sup>Required</sup> <a name="EntryProtocol" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.entryProtocol"></a>

```go
func EntryProtocol() *string
```

- *Type:* *string

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.targetPort"></a>

```go
func TargetPort() *f64
```

- *Type:* *f64

---

##### `TargetProtocol`<sup>Required</sup> <a name="TargetProtocol" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.targetProtocol"></a>

```go
func TargetProtocol() *string
```

- *Type:* *string

---

##### `TlsPassthrough`<sup>Required</sup> <a name="TlsPassthrough" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.tlsPassthrough"></a>

```go
func TlsPassthrough() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanLoadbalancerForwardingRule
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerForwardingRule">DataDigitaloceanLoadbalancerForwardingRule</a>

---


### DataDigitaloceanLoadbalancerGlbSettingsCdnList <a name="DataDigitaloceanLoadbalancerGlbSettingsCdnList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerGlbSettingsCdnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanLoadbalancerGlbSettingsCdnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.get"></a>

```go
func Get(index *f64) DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference <a name="DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdn">DataDigitaloceanLoadbalancerGlbSettingsCdn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanLoadbalancerGlbSettingsCdn
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdn">DataDigitaloceanLoadbalancerGlbSettingsCdn</a>

---


### DataDigitaloceanLoadbalancerGlbSettingsList <a name="DataDigitaloceanLoadbalancerGlbSettingsList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerGlbSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanLoadbalancerGlbSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.get"></a>

```go
func Get(index *f64) DataDigitaloceanLoadbalancerGlbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanLoadbalancerGlbSettingsOutputReference <a name="DataDigitaloceanLoadbalancerGlbSettingsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerGlbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanLoadbalancerGlbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.cdn">Cdn</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList">DataDigitaloceanLoadbalancerGlbSettingsCdnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.failoverThreshold">FailoverThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.regionPriorities">RegionPriorities</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.targetPort">TargetPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.targetProtocol">TargetProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettings">DataDigitaloceanLoadbalancerGlbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cdn`<sup>Required</sup> <a name="Cdn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.cdn"></a>

```go
func Cdn() DataDigitaloceanLoadbalancerGlbSettingsCdnList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsCdnList">DataDigitaloceanLoadbalancerGlbSettingsCdnList</a>

---

##### `FailoverThreshold`<sup>Required</sup> <a name="FailoverThreshold" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.failoverThreshold"></a>

```go
func FailoverThreshold() *f64
```

- *Type:* *f64

---

##### `RegionPriorities`<sup>Required</sup> <a name="RegionPriorities" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.regionPriorities"></a>

```go
func RegionPriorities() NumberMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.targetPort"></a>

```go
func TargetPort() *f64
```

- *Type:* *f64

---

##### `TargetProtocol`<sup>Required</sup> <a name="TargetProtocol" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.targetProtocol"></a>

```go
func TargetProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanLoadbalancerGlbSettings
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerGlbSettings">DataDigitaloceanLoadbalancerGlbSettings</a>

---


### DataDigitaloceanLoadbalancerHealthcheckList <a name="DataDigitaloceanLoadbalancerHealthcheckList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerHealthcheckList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanLoadbalancerHealthcheckList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.get"></a>

```go
func Get(index *f64) DataDigitaloceanLoadbalancerHealthcheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanLoadbalancerHealthcheckOutputReference <a name="DataDigitaloceanLoadbalancerHealthcheckOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerHealthcheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanLoadbalancerHealthcheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds">CheckIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds">ResponseTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheck">DataDigitaloceanLoadbalancerHealthcheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckIntervalSeconds`<sup>Required</sup> <a name="CheckIntervalSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds"></a>

```go
func CheckIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ResponseTimeoutSeconds`<sup>Required</sup> <a name="ResponseTimeoutSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds"></a>

```go
func ResponseTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheckOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanLoadbalancerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerHealthcheck">DataDigitaloceanLoadbalancerHealthcheck</a>

---


### DataDigitaloceanLoadbalancerStickySessionsList <a name="DataDigitaloceanLoadbalancerStickySessionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerStickySessionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanLoadbalancerStickySessionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.get"></a>

```go
func Get(index *f64) DataDigitaloceanLoadbalancerStickySessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanLoadbalancerStickySessionsOutputReference <a name="DataDigitaloceanLoadbalancerStickySessionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanloadbalancer"

datadigitaloceanloadbalancer.NewDataDigitaloceanLoadbalancerStickySessionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanLoadbalancerStickySessionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.cookieName">CookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds">CookieTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessions">DataDigitaloceanLoadbalancerStickySessions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.cookieName"></a>

```go
func CookieName() *string
```

- *Type:* *string

---

##### `CookieTtlSeconds`<sup>Required</sup> <a name="CookieTtlSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds"></a>

```go
func CookieTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanLoadbalancerStickySessions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanLoadbalancer.DataDigitaloceanLoadbalancerStickySessions">DataDigitaloceanLoadbalancerStickySessions</a>

---



