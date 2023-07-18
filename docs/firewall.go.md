# `digitalocean_firewall`

Refer to the Terraform Registory for docs: [`digitalocean_firewall`](https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall).

# `firewall` Submodule <a name="`firewall` Submodule" id="@cdktf/provider-digitalocean.firewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Firewall <a name="Firewall" id="@cdktf/provider-digitalocean.firewall.Firewall"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall digitalocean_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.Firewall.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

firewall.NewFirewall(scope Construct, id *string, config FirewallConfig) Firewall
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig">FirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.firewall.Firewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig">FirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.putInboundRule">PutInboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.putOutboundRule">PutOutboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetDropletIds">ResetDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetInboundRule">ResetInboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetOutboundRule">ResetOutboundRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.firewall.Firewall.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.firewall.Firewall.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.firewall.Firewall.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.firewall.Firewall.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.firewall.Firewall.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.firewall.Firewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.firewall.Firewall.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.firewall.Firewall.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.firewall.Firewall.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.Firewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInboundRule` <a name="PutInboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.putInboundRule"></a>

```go
func PutInboundRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.firewall.Firewall.putInboundRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOutboundRule` <a name="PutOutboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.putOutboundRule"></a>

```go
func PutOutboundRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.firewall.Firewall.putOutboundRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDropletIds` <a name="ResetDropletIds" id="@cdktf/provider-digitalocean.firewall.Firewall.resetDropletIds"></a>

```go
func ResetDropletIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.firewall.Firewall.resetId"></a>

```go
func ResetId()
```

##### `ResetInboundRule` <a name="ResetInboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.resetInboundRule"></a>

```go
func ResetInboundRule()
```

##### `ResetOutboundRule` <a name="ResetOutboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.resetOutboundRule"></a>

```go
func ResetOutboundRule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.firewall.Firewall.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.firewall.Firewall.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

firewall.Firewall_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.firewall.Firewall.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.firewall.Firewall.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

firewall.Firewall_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.firewall.Firewall.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.firewall.Firewall.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

firewall.Firewall_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.firewall.Firewall.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.inboundRule">InboundRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList">FirewallInboundRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.outboundRule">OutboundRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList">FirewallOutboundRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.pendingChanges">PendingChanges</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList">FirewallPendingChangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.dropletIdsInput">DropletIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.inboundRuleInput">InboundRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.outboundRuleInput">OutboundRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.dropletIds">DropletIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.firewall.Firewall.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.firewall.Firewall.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.firewall.Firewall.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.firewall.Firewall.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.firewall.Firewall.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.firewall.Firewall.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.firewall.Firewall.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.firewall.Firewall.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.firewall.Firewall.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.firewall.Firewall.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.firewall.Firewall.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.firewall.Firewall.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.firewall.Firewall.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.firewall.Firewall.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.firewall.Firewall.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `InboundRule`<sup>Required</sup> <a name="InboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.property.inboundRule"></a>

```go
func InboundRule() FirewallInboundRuleList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList">FirewallInboundRuleList</a>

---

##### `OutboundRule`<sup>Required</sup> <a name="OutboundRule" id="@cdktf/provider-digitalocean.firewall.Firewall.property.outboundRule"></a>

```go
func OutboundRule() FirewallOutboundRuleList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList">FirewallOutboundRuleList</a>

---

##### `PendingChanges`<sup>Required</sup> <a name="PendingChanges" id="@cdktf/provider-digitalocean.firewall.Firewall.property.pendingChanges"></a>

```go
func PendingChanges() FirewallPendingChangesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList">FirewallPendingChangesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.firewall.Firewall.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `DropletIdsInput`<sup>Optional</sup> <a name="DropletIdsInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.dropletIdsInput"></a>

```go
func DropletIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InboundRuleInput`<sup>Optional</sup> <a name="InboundRuleInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.inboundRuleInput"></a>

```go
func InboundRuleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutboundRuleInput`<sup>Optional</sup> <a name="OutboundRuleInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.outboundRuleInput"></a>

```go
func OutboundRuleInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.firewall.Firewall.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DropletIds`<sup>Required</sup> <a name="DropletIds" id="@cdktf/provider-digitalocean.firewall.Firewall.property.dropletIds"></a>

```go
func DropletIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.firewall.Firewall.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.firewall.Firewall.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.firewall.Firewall.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.Firewall.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.firewall.Firewall.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallConfig <a name="FirewallConfig" id="@cdktf/provider-digitalocean.firewall.FirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

&firewall.FirewallConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DropletIds: *[]*f64,
	Id: *string,
	InboundRule: interface{},
	OutboundRule: interface{},
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#name Firewall#name}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.dropletIds">DropletIds</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#droplet_ids Firewall#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#id Firewall#id}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.inboundRule">InboundRule</a></code> | <code>interface{}</code> | inbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.outboundRule">OutboundRule</a></code> | <code>interface{}</code> | outbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#tags Firewall#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#name Firewall#name}.

---

##### `DropletIds`<sup>Optional</sup> <a name="DropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.dropletIds"></a>

```go
DropletIds *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#droplet_ids Firewall#droplet_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#id Firewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InboundRule`<sup>Optional</sup> <a name="InboundRule" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.inboundRule"></a>

```go
InboundRule interface{}
```

- *Type:* interface{}

inbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#inbound_rule Firewall#inbound_rule}

---

##### `OutboundRule`<sup>Optional</sup> <a name="OutboundRule" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.outboundRule"></a>

```go
OutboundRule interface{}
```

- *Type:* interface{}

outbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#outbound_rule Firewall#outbound_rule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.firewall.FirewallConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#tags Firewall#tags}.

---

### FirewallInboundRule <a name="FirewallInboundRule" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

&firewall.FirewallInboundRule {
	Protocol: *string,
	PortRange: *string,
	SourceAddresses: *[]*string,
	SourceDropletIds: *[]*f64,
	SourceKubernetesIds: *[]*string,
	SourceLoadBalancerUids: *[]*string,
	SourceTags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#protocol Firewall#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.portRange">PortRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#port_range Firewall#port_range}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#source_addresses Firewall#source_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceDropletIds">SourceDropletIds</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#source_droplet_ids Firewall#source_droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceKubernetesIds">SourceKubernetesIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#source_kubernetes_ids Firewall#source_kubernetes_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceLoadBalancerUids">SourceLoadBalancerUids</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#source_load_balancer_uids Firewall#source_load_balancer_uids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceTags">SourceTags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#source_tags Firewall#source_tags}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#protocol Firewall#protocol}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.portRange"></a>

```go
PortRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#port_range Firewall#port_range}.

---

##### `SourceAddresses`<sup>Optional</sup> <a name="SourceAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceAddresses"></a>

```go
SourceAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#source_addresses Firewall#source_addresses}.

---

##### `SourceDropletIds`<sup>Optional</sup> <a name="SourceDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceDropletIds"></a>

```go
SourceDropletIds *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#source_droplet_ids Firewall#source_droplet_ids}.

---

##### `SourceKubernetesIds`<sup>Optional</sup> <a name="SourceKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceKubernetesIds"></a>

```go
SourceKubernetesIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#source_kubernetes_ids Firewall#source_kubernetes_ids}.

---

##### `SourceLoadBalancerUids`<sup>Optional</sup> <a name="SourceLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceLoadBalancerUids"></a>

```go
SourceLoadBalancerUids *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#source_load_balancer_uids Firewall#source_load_balancer_uids}.

---

##### `SourceTags`<sup>Optional</sup> <a name="SourceTags" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRule.property.sourceTags"></a>

```go
SourceTags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#source_tags Firewall#source_tags}.

---

### FirewallOutboundRule <a name="FirewallOutboundRule" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

&firewall.FirewallOutboundRule {
	Protocol: *string,
	DestinationAddresses: *[]*string,
	DestinationDropletIds: *[]*f64,
	DestinationKubernetesIds: *[]*string,
	DestinationLoadBalancerUids: *[]*string,
	DestinationTags: *[]*string,
	PortRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#protocol Firewall#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#destination_addresses Firewall#destination_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationDropletIds">DestinationDropletIds</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#destination_droplet_ids Firewall#destination_droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationKubernetesIds">DestinationKubernetesIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#destination_kubernetes_ids Firewall#destination_kubernetes_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationLoadBalancerUids">DestinationLoadBalancerUids</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#destination_load_balancer_uids Firewall#destination_load_balancer_uids}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationTags">DestinationTags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#destination_tags Firewall#destination_tags}. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.portRange">PortRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#port_range Firewall#port_range}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#protocol Firewall#protocol}.

---

##### `DestinationAddresses`<sup>Optional</sup> <a name="DestinationAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationAddresses"></a>

```go
DestinationAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#destination_addresses Firewall#destination_addresses}.

---

##### `DestinationDropletIds`<sup>Optional</sup> <a name="DestinationDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationDropletIds"></a>

```go
DestinationDropletIds *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#destination_droplet_ids Firewall#destination_droplet_ids}.

---

##### `DestinationKubernetesIds`<sup>Optional</sup> <a name="DestinationKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationKubernetesIds"></a>

```go
DestinationKubernetesIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#destination_kubernetes_ids Firewall#destination_kubernetes_ids}.

---

##### `DestinationLoadBalancerUids`<sup>Optional</sup> <a name="DestinationLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationLoadBalancerUids"></a>

```go
DestinationLoadBalancerUids *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#destination_load_balancer_uids Firewall#destination_load_balancer_uids}.

---

##### `DestinationTags`<sup>Optional</sup> <a name="DestinationTags" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.destinationTags"></a>

```go
DestinationTags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#destination_tags Firewall#destination_tags}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRule.property.portRange"></a>

```go
PortRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.29.0/docs/resources/firewall#port_range Firewall#port_range}.

---

### FirewallPendingChanges <a name="FirewallPendingChanges" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChanges.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

&firewall.FirewallPendingChanges {

}
```


## Classes <a name="Classes" id="Classes"></a>

### FirewallInboundRuleList <a name="FirewallInboundRuleList" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

firewall.NewFirewallInboundRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirewallInboundRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.get"></a>

```go
func Get(index *f64) FirewallInboundRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirewallInboundRuleOutputReference <a name="FirewallInboundRuleOutputReference" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

firewall.NewFirewallInboundRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirewallInboundRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceAddresses">ResetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceDropletIds">ResetSourceDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceKubernetesIds">ResetSourceKubernetesIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceLoadBalancerUids">ResetSourceLoadBalancerUids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceTags">ResetSourceTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetPortRange"></a>

```go
func ResetPortRange()
```

##### `ResetSourceAddresses` <a name="ResetSourceAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceAddresses"></a>

```go
func ResetSourceAddresses()
```

##### `ResetSourceDropletIds` <a name="ResetSourceDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceDropletIds"></a>

```go
func ResetSourceDropletIds()
```

##### `ResetSourceKubernetesIds` <a name="ResetSourceKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceKubernetesIds"></a>

```go
func ResetSourceKubernetesIds()
```

##### `ResetSourceLoadBalancerUids` <a name="ResetSourceLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceLoadBalancerUids"></a>

```go
func ResetSourceLoadBalancerUids()
```

##### `ResetSourceTags` <a name="ResetSourceTags" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.resetSourceTags"></a>

```go
func ResetSourceTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceAddressesInput">SourceAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceDropletIdsInput">SourceDropletIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceKubernetesIdsInput">SourceKubernetesIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceLoadBalancerUidsInput">SourceLoadBalancerUidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceTagsInput">SourceTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.portRange">PortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceDropletIds">SourceDropletIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceKubernetesIds">SourceKubernetesIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceLoadBalancerUids">SourceLoadBalancerUids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceTags">SourceTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceAddressesInput`<sup>Optional</sup> <a name="SourceAddressesInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceAddressesInput"></a>

```go
func SourceAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceDropletIdsInput`<sup>Optional</sup> <a name="SourceDropletIdsInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceDropletIdsInput"></a>

```go
func SourceDropletIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `SourceKubernetesIdsInput`<sup>Optional</sup> <a name="SourceKubernetesIdsInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceKubernetesIdsInput"></a>

```go
func SourceKubernetesIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceLoadBalancerUidsInput`<sup>Optional</sup> <a name="SourceLoadBalancerUidsInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceLoadBalancerUidsInput"></a>

```go
func SourceLoadBalancerUidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceTagsInput`<sup>Optional</sup> <a name="SourceTagsInput" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceTagsInput"></a>

```go
func SourceTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.portRange"></a>

```go
func PortRange() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceAddresses"></a>

```go
func SourceAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `SourceDropletIds`<sup>Required</sup> <a name="SourceDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceDropletIds"></a>

```go
func SourceDropletIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `SourceKubernetesIds`<sup>Required</sup> <a name="SourceKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceKubernetesIds"></a>

```go
func SourceKubernetesIds() *[]*string
```

- *Type:* *[]*string

---

##### `SourceLoadBalancerUids`<sup>Required</sup> <a name="SourceLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceLoadBalancerUids"></a>

```go
func SourceLoadBalancerUids() *[]*string
```

- *Type:* *[]*string

---

##### `SourceTags`<sup>Required</sup> <a name="SourceTags" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.sourceTags"></a>

```go
func SourceTags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.firewall.FirewallInboundRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirewallOutboundRuleList <a name="FirewallOutboundRuleList" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

firewall.NewFirewallOutboundRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirewallOutboundRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.get"></a>

```go
func Get(index *f64) FirewallOutboundRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirewallOutboundRuleOutputReference <a name="FirewallOutboundRuleOutputReference" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

firewall.NewFirewallOutboundRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirewallOutboundRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationAddresses">ResetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationDropletIds">ResetDestinationDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationKubernetesIds">ResetDestinationKubernetesIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationLoadBalancerUids">ResetDestinationLoadBalancerUids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationTags">ResetDestinationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddresses` <a name="ResetDestinationAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationAddresses"></a>

```go
func ResetDestinationAddresses()
```

##### `ResetDestinationDropletIds` <a name="ResetDestinationDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationDropletIds"></a>

```go
func ResetDestinationDropletIds()
```

##### `ResetDestinationKubernetesIds` <a name="ResetDestinationKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationKubernetesIds"></a>

```go
func ResetDestinationKubernetesIds()
```

##### `ResetDestinationLoadBalancerUids` <a name="ResetDestinationLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationLoadBalancerUids"></a>

```go
func ResetDestinationLoadBalancerUids()
```

##### `ResetDestinationTags` <a name="ResetDestinationTags" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetDestinationTags"></a>

```go
func ResetDestinationTags()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.resetPortRange"></a>

```go
func ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationAddressesInput">DestinationAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationDropletIdsInput">DestinationDropletIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationKubernetesIdsInput">DestinationKubernetesIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationLoadBalancerUidsInput">DestinationLoadBalancerUidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationTagsInput">DestinationTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationDropletIds">DestinationDropletIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationKubernetesIds">DestinationKubernetesIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationLoadBalancerUids">DestinationLoadBalancerUids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationTags">DestinationTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.portRange">PortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddressesInput`<sup>Optional</sup> <a name="DestinationAddressesInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationAddressesInput"></a>

```go
func DestinationAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationDropletIdsInput`<sup>Optional</sup> <a name="DestinationDropletIdsInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationDropletIdsInput"></a>

```go
func DestinationDropletIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DestinationKubernetesIdsInput`<sup>Optional</sup> <a name="DestinationKubernetesIdsInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationKubernetesIdsInput"></a>

```go
func DestinationKubernetesIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationLoadBalancerUidsInput`<sup>Optional</sup> <a name="DestinationLoadBalancerUidsInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationLoadBalancerUidsInput"></a>

```go
func DestinationLoadBalancerUidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationTagsInput`<sup>Optional</sup> <a name="DestinationTagsInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationTagsInput"></a>

```go
func DestinationTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationAddresses"></a>

```go
func DestinationAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationDropletIds`<sup>Required</sup> <a name="DestinationDropletIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationDropletIds"></a>

```go
func DestinationDropletIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `DestinationKubernetesIds`<sup>Required</sup> <a name="DestinationKubernetesIds" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationKubernetesIds"></a>

```go
func DestinationKubernetesIds() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationLoadBalancerUids`<sup>Required</sup> <a name="DestinationLoadBalancerUids" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationLoadBalancerUids"></a>

```go
func DestinationLoadBalancerUids() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationTags`<sup>Required</sup> <a name="DestinationTags" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.destinationTags"></a>

```go
func DestinationTags() *[]*string
```

- *Type:* *[]*string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.portRange"></a>

```go
func PortRange() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.firewall.FirewallOutboundRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirewallPendingChangesList <a name="FirewallPendingChangesList" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

firewall.NewFirewallPendingChangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirewallPendingChangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.get"></a>

```go
func Get(index *f64) FirewallPendingChangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirewallPendingChangesOutputReference <a name="FirewallPendingChangesOutputReference" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v8/firewall"

firewall.NewFirewallPendingChangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirewallPendingChangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.dropletId">DropletId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.removing">Removing</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChanges">FirewallPendingChanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DropletId`<sup>Required</sup> <a name="DropletId" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.dropletId"></a>

```go
func DropletId() *f64
```

- *Type:* *f64

---

##### `Removing`<sup>Required</sup> <a name="Removing" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.removing"></a>

```go
func Removing() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.firewall.FirewallPendingChangesOutputReference.property.internalValue"></a>

```go
func InternalValue() FirewallPendingChanges
```

- *Type:* <a href="#@cdktf/provider-digitalocean.firewall.FirewallPendingChanges">FirewallPendingChanges</a>

---



