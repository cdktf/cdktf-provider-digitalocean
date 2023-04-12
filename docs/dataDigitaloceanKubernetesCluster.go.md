# `dataDigitaloceanKubernetesCluster` Submodule <a name="`dataDigitaloceanKubernetesCluster` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanKubernetesCluster <a name="DataDigitaloceanKubernetesCluster" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster digitalocean_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.NewDataDigitaloceanKubernetesCluster(scope Construct, id *string, config DataDigitaloceanKubernetesClusterConfig) DataDigitaloceanKubernetesCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig">DataDigitaloceanKubernetesClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig">DataDigitaloceanKubernetesClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.DataDigitaloceanKubernetesCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.DataDigitaloceanKubernetesCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.DataDigitaloceanKubernetesCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.autoUpgrade">AutoUpgrade</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.clusterSubnet">ClusterSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.ha">Ha</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.kubeConfig">KubeConfig</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList">DataDigitaloceanKubernetesClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList">DataDigitaloceanKubernetesClusterMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.nodePool">NodePool</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList">DataDigitaloceanKubernetesClusterNodePoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.serviceSubnet">ServiceSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.surgeUpgrade">SurgeUpgrade</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.urn">Urn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutoUpgrade`<sup>Required</sup> <a name="AutoUpgrade" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.autoUpgrade"></a>

```go
func AutoUpgrade() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClusterSubnet`<sup>Required</sup> <a name="ClusterSubnet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.clusterSubnet"></a>

```go
func ClusterSubnet() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Ha`<sup>Required</sup> <a name="Ha" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.ha"></a>

```go
func Ha() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `KubeConfig`<sup>Required</sup> <a name="KubeConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.kubeConfig"></a>

```go
func KubeConfig() DataDigitaloceanKubernetesClusterKubeConfigList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList">DataDigitaloceanKubernetesClusterKubeConfigList</a>

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() DataDigitaloceanKubernetesClusterMaintenancePolicyList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList">DataDigitaloceanKubernetesClusterMaintenancePolicyList</a>

---

##### `NodePool`<sup>Required</sup> <a name="NodePool" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.nodePool"></a>

```go
func NodePool() DataDigitaloceanKubernetesClusterNodePoolList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList">DataDigitaloceanKubernetesClusterNodePoolList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceSubnet`<sup>Required</sup> <a name="ServiceSubnet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.serviceSubnet"></a>

```go
func ServiceSubnet() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SurgeUpgrade`<sup>Required</sup> <a name="SurgeUpgrade" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.surgeUpgrade"></a>

```go
func SurgeUpgrade() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.urn"></a>

```go
func Urn() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.vpcUuid"></a>

```go
func VpcUuid() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanKubernetesClusterConfig <a name="DataDigitaloceanKubernetesClusterConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

&datadigitaloceankubernetescluster.DataDigitaloceanKubernetesClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#name DataDigitaloceanKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#id DataDigitaloceanKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#tags DataDigitaloceanKubernetesCluster#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#name DataDigitaloceanKubernetesCluster#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#id DataDigitaloceanKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#tags DataDigitaloceanKubernetesCluster#tags}.

---

### DataDigitaloceanKubernetesClusterKubeConfig <a name="DataDigitaloceanKubernetesClusterKubeConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

&datadigitaloceankubernetescluster.DataDigitaloceanKubernetesClusterKubeConfig {

}
```


### DataDigitaloceanKubernetesClusterMaintenancePolicy <a name="DataDigitaloceanKubernetesClusterMaintenancePolicy" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

&datadigitaloceankubernetescluster.DataDigitaloceanKubernetesClusterMaintenancePolicy {

}
```


### DataDigitaloceanKubernetesClusterNodePool <a name="DataDigitaloceanKubernetesClusterNodePool" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

&datadigitaloceankubernetescluster.DataDigitaloceanKubernetesClusterNodePool {

}
```


### DataDigitaloceanKubernetesClusterNodePoolNodes <a name="DataDigitaloceanKubernetesClusterNodePoolNodes" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

&datadigitaloceankubernetescluster.DataDigitaloceanKubernetesClusterNodePoolNodes {

}
```


### DataDigitaloceanKubernetesClusterNodePoolTaint <a name="DataDigitaloceanKubernetesClusterNodePoolTaint" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

&datadigitaloceankubernetescluster.DataDigitaloceanKubernetesClusterNodePoolTaint {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanKubernetesClusterKubeConfigList <a name="DataDigitaloceanKubernetesClusterKubeConfigList" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.NewDataDigitaloceanKubernetesClusterKubeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanKubernetesClusterKubeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.get"></a>

```go
func Get(index *f64) DataDigitaloceanKubernetesClusterKubeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanKubernetesClusterKubeConfigOutputReference <a name="DataDigitaloceanKubernetesClusterKubeConfigOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.NewDataDigitaloceanKubernetesClusterKubeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanKubernetesClusterKubeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.rawConfig">RawConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfig">DataDigitaloceanKubernetesClusterKubeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `ClusterCaCertificate`<sup>Required</sup> <a name="ClusterCaCertificate" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```go
func ClusterCaCertificate() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `RawConfig`<sup>Required</sup> <a name="RawConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.rawConfig"></a>

```go
func RawConfig() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanKubernetesClusterKubeConfig
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfig">DataDigitaloceanKubernetesClusterKubeConfig</a>

---


### DataDigitaloceanKubernetesClusterMaintenancePolicyList <a name="DataDigitaloceanKubernetesClusterMaintenancePolicyList" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.NewDataDigitaloceanKubernetesClusterMaintenancePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanKubernetesClusterMaintenancePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.get"></a>

```go
func Get(index *f64) DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference <a name="DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.NewDataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicy">DataDigitaloceanKubernetesClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanKubernetesClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicy">DataDigitaloceanKubernetesClusterMaintenancePolicy</a>

---


### DataDigitaloceanKubernetesClusterNodePoolList <a name="DataDigitaloceanKubernetesClusterNodePoolList" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.NewDataDigitaloceanKubernetesClusterNodePoolList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanKubernetesClusterNodePoolList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.get"></a>

```go
func Get(index *f64) DataDigitaloceanKubernetesClusterNodePoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanKubernetesClusterNodePoolNodesList <a name="DataDigitaloceanKubernetesClusterNodePoolNodesList" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.NewDataDigitaloceanKubernetesClusterNodePoolNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanKubernetesClusterNodePoolNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.get"></a>

```go
func Get(index *f64) DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference <a name="DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.NewDataDigitaloceanKubernetesClusterNodePoolNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.dropletId">DropletId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodes">DataDigitaloceanKubernetesClusterNodePoolNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DropletId`<sup>Required</sup> <a name="DropletId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.dropletId"></a>

```go
func DropletId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanKubernetesClusterNodePoolNodes
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodes">DataDigitaloceanKubernetesClusterNodePoolNodes</a>

---


### DataDigitaloceanKubernetesClusterNodePoolOutputReference <a name="DataDigitaloceanKubernetesClusterNodePoolOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.NewDataDigitaloceanKubernetesClusterNodePoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanKubernetesClusterNodePoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.actualNodeCount">ActualNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.autoScale">AutoScale</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList">DataDigitaloceanKubernetesClusterNodePoolNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.size">Size</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.taint">Taint</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList">DataDigitaloceanKubernetesClusterNodePoolTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePool">DataDigitaloceanKubernetesClusterNodePool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActualNodeCount`<sup>Required</sup> <a name="ActualNodeCount" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.actualNodeCount"></a>

```go
func ActualNodeCount() *f64
```

- *Type:* *f64

---

##### `AutoScale`<sup>Required</sup> <a name="AutoScale" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.autoScale"></a>

```go
func AutoScale() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.nodes"></a>

```go
func Nodes() DataDigitaloceanKubernetesClusterNodePoolNodesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList">DataDigitaloceanKubernetesClusterNodePoolNodesList</a>

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Taint`<sup>Required</sup> <a name="Taint" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.taint"></a>

```go
func Taint() DataDigitaloceanKubernetesClusterNodePoolTaintList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList">DataDigitaloceanKubernetesClusterNodePoolTaintList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanKubernetesClusterNodePool
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePool">DataDigitaloceanKubernetesClusterNodePool</a>

---


### DataDigitaloceanKubernetesClusterNodePoolTaintList <a name="DataDigitaloceanKubernetesClusterNodePoolTaintList" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.NewDataDigitaloceanKubernetesClusterNodePoolTaintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanKubernetesClusterNodePoolTaintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.get"></a>

```go
func Get(index *f64) DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference <a name="DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceankubernetescluster"

datadigitaloceankubernetescluster.NewDataDigitaloceanKubernetesClusterNodePoolTaintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaint">DataDigitaloceanKubernetesClusterNodePoolTaint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanKubernetesClusterNodePoolTaint
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaint">DataDigitaloceanKubernetesClusterNodePoolTaint</a>

---



