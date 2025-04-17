# `kubernetesCluster` Submodule <a name="`kubernetesCluster` Submodule" id="@cdktf/provider-digitalocean.kubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesCluster <a name="KubernetesCluster" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster digitalocean_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesCluster(scope Construct, id *string, config KubernetesClusterConfig) KubernetesCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig">KubernetesClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig">KubernetesClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putClusterAutoscalerConfiguration">PutClusterAutoscalerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putControlPlaneFirewall">PutControlPlaneFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putNodePool">PutNodePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putRoutingAgent">PutRoutingAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetAutoUpgrade">ResetAutoUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterAutoscalerConfiguration">ResetClusterAutoscalerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterSubnet">ResetClusterSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetControlPlaneFirewall">ResetControlPlaneFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetDestroyAllAssociatedResources">ResetDestroyAllAssociatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetHa">ResetHa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetKubeconfigExpireSeconds">ResetKubeconfigExpireSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRegistryIntegration">ResetRegistryIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRoutingAgent">ResetRoutingAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetServiceSubnet">ResetServiceSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetSurgeUpgrade">ResetSurgeUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetVpcUuid">ResetVpcUuid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClusterAutoscalerConfiguration` <a name="PutClusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putClusterAutoscalerConfiguration"></a>

```go
func PutClusterAutoscalerConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putClusterAutoscalerConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutControlPlaneFirewall` <a name="PutControlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putControlPlaneFirewall"></a>

```go
func PutControlPlaneFirewall(value KubernetesClusterControlPlaneFirewall)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putControlPlaneFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putMaintenancePolicy"></a>

```go
func PutMaintenancePolicy(value KubernetesClusterMaintenancePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

---

##### `PutNodePool` <a name="PutNodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putNodePool"></a>

```go
func PutNodePool(value KubernetesClusterNodePool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putNodePool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

---

##### `PutRoutingAgent` <a name="PutRoutingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putRoutingAgent"></a>

```go
func PutRoutingAgent(value KubernetesClusterRoutingAgent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putRoutingAgent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putTimeouts"></a>

```go
func PutTimeouts(value KubernetesClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a>

---

##### `ResetAutoUpgrade` <a name="ResetAutoUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetAutoUpgrade"></a>

```go
func ResetAutoUpgrade()
```

##### `ResetClusterAutoscalerConfiguration` <a name="ResetClusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterAutoscalerConfiguration"></a>

```go
func ResetClusterAutoscalerConfiguration()
```

##### `ResetClusterSubnet` <a name="ResetClusterSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterSubnet"></a>

```go
func ResetClusterSubnet()
```

##### `ResetControlPlaneFirewall` <a name="ResetControlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetControlPlaneFirewall"></a>

```go
func ResetControlPlaneFirewall()
```

##### `ResetDestroyAllAssociatedResources` <a name="ResetDestroyAllAssociatedResources" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetDestroyAllAssociatedResources"></a>

```go
func ResetDestroyAllAssociatedResources()
```

##### `ResetHa` <a name="ResetHa" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetHa"></a>

```go
func ResetHa()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetKubeconfigExpireSeconds` <a name="ResetKubeconfigExpireSeconds" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetKubeconfigExpireSeconds"></a>

```go
func ResetKubeconfigExpireSeconds()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetMaintenancePolicy"></a>

```go
func ResetMaintenancePolicy()
```

##### `ResetRegistryIntegration` <a name="ResetRegistryIntegration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRegistryIntegration"></a>

```go
func ResetRegistryIntegration()
```

##### `ResetRoutingAgent` <a name="ResetRoutingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRoutingAgent"></a>

```go
func ResetRoutingAgent()
```

##### `ResetServiceSubnet` <a name="ResetServiceSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetServiceSubnet"></a>

```go
func ResetServiceSubnet()
```

##### `ResetSurgeUpgrade` <a name="ResetSurgeUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetSurgeUpgrade"></a>

```go
func ResetSurgeUpgrade()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcUuid` <a name="ResetVpcUuid" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetVpcUuid"></a>

```go
func ResetVpcUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.KubernetesCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.KubernetesCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.KubernetesCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.KubernetesCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfiguration">ClusterAutoscalerConfiguration</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList">KubernetesClusterClusterAutoscalerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewall">ControlPlaneFirewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference">KubernetesClusterControlPlaneFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeConfig">KubeConfig</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList">KubernetesClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference">KubernetesClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePool">NodePool</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference">KubernetesClusterNodePoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgent">RoutingAgent</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference">KubernetesClusterRoutingAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference">KubernetesClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.urn">Urn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgradeInput">AutoUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfigurationInput">ClusterAutoscalerConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnetInput">ClusterSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewallInput">ControlPlaneFirewallInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResourcesInput">DestroyAllAssociatedResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.haInput">HaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSecondsInput">KubeconfigExpireSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePoolInput">NodePoolInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegrationInput">RegistryIntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgentInput">RoutingAgentInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnetInput">ServiceSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgradeInput">SurgeUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuidInput">VpcUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgrade">AutoUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnet">ClusterSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResources">DestroyAllAssociatedResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ha">Ha</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSeconds">KubeconfigExpireSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegration">RegistryIntegration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnet">ServiceSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgrade">SurgeUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterAutoscalerConfiguration`<sup>Required</sup> <a name="ClusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfiguration"></a>

```go
func ClusterAutoscalerConfiguration() KubernetesClusterClusterAutoscalerConfigurationList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList">KubernetesClusterClusterAutoscalerConfigurationList</a>

---

##### `ControlPlaneFirewall`<sup>Required</sup> <a name="ControlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewall"></a>

```go
func ControlPlaneFirewall() KubernetesClusterControlPlaneFirewallOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference">KubernetesClusterControlPlaneFirewallOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `KubeConfig`<sup>Required</sup> <a name="KubeConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeConfig"></a>

```go
func KubeConfig() KubernetesClusterKubeConfigList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList">KubernetesClusterKubeConfigList</a>

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() KubernetesClusterMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference">KubernetesClusterMaintenancePolicyOutputReference</a>

---

##### `NodePool`<sup>Required</sup> <a name="NodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePool"></a>

```go
func NodePool() KubernetesClusterNodePoolOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference">KubernetesClusterNodePoolOutputReference</a>

---

##### `RoutingAgent`<sup>Required</sup> <a name="RoutingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgent"></a>

```go
func RoutingAgent() KubernetesClusterRoutingAgentOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference">KubernetesClusterRoutingAgentOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeouts"></a>

```go
func Timeouts() KubernetesClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference">KubernetesClusterTimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.urn"></a>

```go
func Urn() *string
```

- *Type:* *string

---

##### `AutoUpgradeInput`<sup>Optional</sup> <a name="AutoUpgradeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgradeInput"></a>

```go
func AutoUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterAutoscalerConfigurationInput`<sup>Optional</sup> <a name="ClusterAutoscalerConfigurationInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfigurationInput"></a>

```go
func ClusterAutoscalerConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterSubnetInput`<sup>Optional</sup> <a name="ClusterSubnetInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnetInput"></a>

```go
func ClusterSubnetInput() *string
```

- *Type:* *string

---

##### `ControlPlaneFirewallInput`<sup>Optional</sup> <a name="ControlPlaneFirewallInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewallInput"></a>

```go
func ControlPlaneFirewallInput() KubernetesClusterControlPlaneFirewall
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

---

##### `DestroyAllAssociatedResourcesInput`<sup>Optional</sup> <a name="DestroyAllAssociatedResourcesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResourcesInput"></a>

```go
func DestroyAllAssociatedResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `HaInput`<sup>Optional</sup> <a name="HaInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.haInput"></a>

```go
func HaInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubeconfigExpireSecondsInput`<sup>Optional</sup> <a name="KubeconfigExpireSecondsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSecondsInput"></a>

```go
func KubeconfigExpireSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicyInput"></a>

```go
func MaintenancePolicyInput() KubernetesClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodePoolInput`<sup>Optional</sup> <a name="NodePoolInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePoolInput"></a>

```go
func NodePoolInput() KubernetesClusterNodePool
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RegistryIntegrationInput`<sup>Optional</sup> <a name="RegistryIntegrationInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegrationInput"></a>

```go
func RegistryIntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `RoutingAgentInput`<sup>Optional</sup> <a name="RoutingAgentInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgentInput"></a>

```go
func RoutingAgentInput() KubernetesClusterRoutingAgent
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

---

##### `ServiceSubnetInput`<sup>Optional</sup> <a name="ServiceSubnetInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnetInput"></a>

```go
func ServiceSubnetInput() *string
```

- *Type:* *string

---

##### `SurgeUpgradeInput`<sup>Optional</sup> <a name="SurgeUpgradeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgradeInput"></a>

```go
func SurgeUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `VpcUuidInput`<sup>Optional</sup> <a name="VpcUuidInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuidInput"></a>

```go
func VpcUuidInput() *string
```

- *Type:* *string

---

##### `AutoUpgrade`<sup>Required</sup> <a name="AutoUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgrade"></a>

```go
func AutoUpgrade() interface{}
```

- *Type:* interface{}

---

##### `ClusterSubnet`<sup>Required</sup> <a name="ClusterSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnet"></a>

```go
func ClusterSubnet() *string
```

- *Type:* *string

---

##### `DestroyAllAssociatedResources`<sup>Required</sup> <a name="DestroyAllAssociatedResources" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResources"></a>

```go
func DestroyAllAssociatedResources() interface{}
```

- *Type:* interface{}

---

##### `Ha`<sup>Required</sup> <a name="Ha" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ha"></a>

```go
func Ha() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubeconfigExpireSeconds`<sup>Required</sup> <a name="KubeconfigExpireSeconds" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSeconds"></a>

```go
func KubeconfigExpireSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RegistryIntegration`<sup>Required</sup> <a name="RegistryIntegration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegration"></a>

```go
func RegistryIntegration() interface{}
```

- *Type:* interface{}

---

##### `ServiceSubnet`<sup>Required</sup> <a name="ServiceSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnet"></a>

```go
func ServiceSubnet() *string
```

- *Type:* *string

---

##### `SurgeUpgrade`<sup>Required</sup> <a name="SurgeUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgrade"></a>

```go
func SurgeUpgrade() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuid"></a>

```go
func VpcUuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterClusterAutoscalerConfiguration <a name="KubernetesClusterClusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

&kubernetescluster.KubernetesClusterClusterAutoscalerConfiguration {
	ScaleDownUnneededTime: *string,
	ScaleDownUtilizationThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUnneededTime">ScaleDownUnneededTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#scale_down_unneeded_time KubernetesCluster#scale_down_unneeded_time}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUtilizationThreshold">ScaleDownUtilizationThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#scale_down_utilization_threshold KubernetesCluster#scale_down_utilization_threshold}. |

---

##### `ScaleDownUnneededTime`<sup>Optional</sup> <a name="ScaleDownUnneededTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUnneededTime"></a>

```go
ScaleDownUnneededTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#scale_down_unneeded_time KubernetesCluster#scale_down_unneeded_time}.

---

##### `ScaleDownUtilizationThreshold`<sup>Optional</sup> <a name="ScaleDownUtilizationThreshold" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUtilizationThreshold"></a>

```go
ScaleDownUtilizationThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#scale_down_utilization_threshold KubernetesCluster#scale_down_utilization_threshold}.

---

### KubernetesClusterConfig <a name="KubernetesClusterConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

&kubernetescluster.KubernetesClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NodePool: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11.kubernetesCluster.KubernetesClusterNodePool,
	Region: *string,
	Version: *string,
	AutoUpgrade: interface{},
	ClusterAutoscalerConfiguration: interface{},
	ClusterSubnet: *string,
	ControlPlaneFirewall: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11.kubernetesCluster.KubernetesClusterControlPlaneFirewall,
	DestroyAllAssociatedResources: interface{},
	Ha: interface{},
	Id: *string,
	KubeconfigExpireSeconds: *f64,
	MaintenancePolicy: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11.kubernetesCluster.KubernetesClusterMaintenancePolicy,
	RegistryIntegration: interface{},
	RoutingAgent: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11.kubernetesCluster.KubernetesClusterRoutingAgent,
	ServiceSubnet: *string,
	SurgeUpgrade: interface{},
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11.kubernetesCluster.KubernetesClusterTimeouts,
	VpcUuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.nodePool">NodePool</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a></code> | node_pool block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#region KubernetesCluster#region}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.autoUpgrade">AutoUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#auto_upgrade KubernetesCluster#auto_upgrade}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterAutoscalerConfiguration">ClusterAutoscalerConfiguration</a></code> | <code>interface{}</code> | cluster_autoscaler_configuration block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterSubnet">ClusterSubnet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#cluster_subnet KubernetesCluster#cluster_subnet}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.controlPlaneFirewall">ControlPlaneFirewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a></code> | control_plane_firewall block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.destroyAllAssociatedResources">DestroyAllAssociatedResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#destroy_all_associated_resources KubernetesCluster#destroy_all_associated_resources}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.ha">Ha</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#ha KubernetesCluster#ha}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.kubeconfigExpireSeconds">KubeconfigExpireSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#kubeconfig_expire_seconds KubernetesCluster#kubeconfig_expire_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.registryIntegration">RegistryIntegration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#registry_integration KubernetesCluster#registry_integration}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.routingAgent">RoutingAgent</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a></code> | routing_agent block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.serviceSubnet">ServiceSubnet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#service_subnet KubernetesCluster#service_subnet}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.surgeUpgrade">SurgeUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#surge_upgrade KubernetesCluster#surge_upgrade}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#vpc_uuid KubernetesCluster#vpc_uuid}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}.

---

##### `NodePool`<sup>Required</sup> <a name="NodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.nodePool"></a>

```go
NodePool KubernetesClusterNodePool
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

node_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#node_pool KubernetesCluster#node_pool}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#region KubernetesCluster#region}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}.

---

##### `AutoUpgrade`<sup>Optional</sup> <a name="AutoUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.autoUpgrade"></a>

```go
AutoUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#auto_upgrade KubernetesCluster#auto_upgrade}.

---

##### `ClusterAutoscalerConfiguration`<sup>Optional</sup> <a name="ClusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterAutoscalerConfiguration"></a>

```go
ClusterAutoscalerConfiguration interface{}
```

- *Type:* interface{}

cluster_autoscaler_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#cluster_autoscaler_configuration KubernetesCluster#cluster_autoscaler_configuration}

---

##### `ClusterSubnet`<sup>Optional</sup> <a name="ClusterSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterSubnet"></a>

```go
ClusterSubnet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#cluster_subnet KubernetesCluster#cluster_subnet}.

---

##### `ControlPlaneFirewall`<sup>Optional</sup> <a name="ControlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.controlPlaneFirewall"></a>

```go
ControlPlaneFirewall KubernetesClusterControlPlaneFirewall
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

control_plane_firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#control_plane_firewall KubernetesCluster#control_plane_firewall}

---

##### `DestroyAllAssociatedResources`<sup>Optional</sup> <a name="DestroyAllAssociatedResources" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.destroyAllAssociatedResources"></a>

```go
DestroyAllAssociatedResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#destroy_all_associated_resources KubernetesCluster#destroy_all_associated_resources}.

---

##### `Ha`<sup>Optional</sup> <a name="Ha" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.ha"></a>

```go
Ha interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#ha KubernetesCluster#ha}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubeconfigExpireSeconds`<sup>Optional</sup> <a name="KubeconfigExpireSeconds" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.kubeconfigExpireSeconds"></a>

```go
KubeconfigExpireSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#kubeconfig_expire_seconds KubernetesCluster#kubeconfig_expire_seconds}.

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.maintenancePolicy"></a>

```go
MaintenancePolicy KubernetesClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#maintenance_policy KubernetesCluster#maintenance_policy}

---

##### `RegistryIntegration`<sup>Optional</sup> <a name="RegistryIntegration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.registryIntegration"></a>

```go
RegistryIntegration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#registry_integration KubernetesCluster#registry_integration}.

---

##### `RoutingAgent`<sup>Optional</sup> <a name="RoutingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.routingAgent"></a>

```go
RoutingAgent KubernetesClusterRoutingAgent
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

routing_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#routing_agent KubernetesCluster#routing_agent}

---

##### `ServiceSubnet`<sup>Optional</sup> <a name="ServiceSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.serviceSubnet"></a>

```go
ServiceSubnet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#service_subnet KubernetesCluster#service_subnet}.

---

##### `SurgeUpgrade`<sup>Optional</sup> <a name="SurgeUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.surgeUpgrade"></a>

```go
SurgeUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#surge_upgrade KubernetesCluster#surge_upgrade}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.timeouts"></a>

```go
Timeouts KubernetesClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#timeouts KubernetesCluster#timeouts}

---

##### `VpcUuid`<sup>Optional</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.vpcUuid"></a>

```go
VpcUuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#vpc_uuid KubernetesCluster#vpc_uuid}.

---

### KubernetesClusterControlPlaneFirewall <a name="KubernetesClusterControlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

&kubernetescluster.KubernetesClusterControlPlaneFirewall {
	AllowedAddresses: *[]*string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.allowedAddresses">AllowedAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#allowed_addresses KubernetesCluster#allowed_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}. |

---

##### `AllowedAddresses`<sup>Required</sup> <a name="AllowedAddresses" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.allowedAddresses"></a>

```go
AllowedAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#allowed_addresses KubernetesCluster#allowed_addresses}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}.

---

### KubernetesClusterKubeConfig <a name="KubernetesClusterKubeConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

&kubernetescluster.KubernetesClusterKubeConfig {

}
```


### KubernetesClusterMaintenancePolicy <a name="KubernetesClusterMaintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

&kubernetescluster.KubernetesClusterMaintenancePolicy {
	Day: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.day">Day</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#day KubernetesCluster#day}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#start_time KubernetesCluster#start_time}. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.day"></a>

```go
Day *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#day KubernetesCluster#day}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#start_time KubernetesCluster#start_time}.

---

### KubernetesClusterNodePool <a name="KubernetesClusterNodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

&kubernetescluster.KubernetesClusterNodePool {
	Name: *string,
	Size: *string,
	AutoScale: interface{},
	Labels: *map[string]*string,
	MaxNodes: *f64,
	MinNodes: *f64,
	NodeCount: *f64,
	Tags: *[]*string,
	Taint: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.size">Size</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#size KubernetesCluster#size}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.autoScale">AutoScale</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#auto_scale KubernetesCluster#auto_scale}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#max_nodes KubernetesCluster#max_nodes}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.minNodes">MinNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#min_nodes KubernetesCluster#min_nodes}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#node_count KubernetesCluster#node_count}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.taint">Taint</a></code> | <code>interface{}</code> | taint block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.size"></a>

```go
Size *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#size KubernetesCluster#size}.

---

##### `AutoScale`<sup>Optional</sup> <a name="AutoScale" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.autoScale"></a>

```go
AutoScale interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#auto_scale KubernetesCluster#auto_scale}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}.

---

##### `MaxNodes`<sup>Optional</sup> <a name="MaxNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.maxNodes"></a>

```go
MaxNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#max_nodes KubernetesCluster#max_nodes}.

---

##### `MinNodes`<sup>Optional</sup> <a name="MinNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.minNodes"></a>

```go
MinNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#min_nodes KubernetesCluster#min_nodes}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#node_count KubernetesCluster#node_count}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}.

---

##### `Taint`<sup>Optional</sup> <a name="Taint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.taint"></a>

```go
Taint interface{}
```

- *Type:* interface{}

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#taint KubernetesCluster#taint}

---

### KubernetesClusterNodePoolNodes <a name="KubernetesClusterNodePoolNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

&kubernetescluster.KubernetesClusterNodePoolNodes {

}
```


### KubernetesClusterNodePoolTaint <a name="KubernetesClusterNodePoolTaint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

&kubernetescluster.KubernetesClusterNodePoolTaint {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.effect">Effect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#effect KubernetesCluster#effect}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#key KubernetesCluster#key}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#value KubernetesCluster#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#effect KubernetesCluster#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#key KubernetesCluster#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#value KubernetesCluster#value}.

---

### KubernetesClusterRoutingAgent <a name="KubernetesClusterRoutingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

&kubernetescluster.KubernetesClusterRoutingAgent {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}.

---

### KubernetesClusterTimeouts <a name="KubernetesClusterTimeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

&kubernetescluster.KubernetesClusterTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#create KubernetesCluster#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/resources/kubernetes_cluster#create KubernetesCluster#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterClusterAutoscalerConfigurationList <a name="KubernetesClusterClusterAutoscalerConfigurationList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterClusterAutoscalerConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesClusterClusterAutoscalerConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.get"></a>

```go
func Get(index *f64) KubernetesClusterClusterAutoscalerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesClusterClusterAutoscalerConfigurationOutputReference <a name="KubernetesClusterClusterAutoscalerConfigurationOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterClusterAutoscalerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesClusterClusterAutoscalerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUnneededTime">ResetScaleDownUnneededTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUtilizationThreshold">ResetScaleDownUtilizationThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScaleDownUnneededTime` <a name="ResetScaleDownUnneededTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUnneededTime"></a>

```go
func ResetScaleDownUnneededTime()
```

##### `ResetScaleDownUtilizationThreshold` <a name="ResetScaleDownUtilizationThreshold" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUtilizationThreshold"></a>

```go
func ResetScaleDownUtilizationThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTimeInput">ScaleDownUnneededTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThresholdInput">ScaleDownUtilizationThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTime">ScaleDownUnneededTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThreshold">ScaleDownUtilizationThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleDownUnneededTimeInput`<sup>Optional</sup> <a name="ScaleDownUnneededTimeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTimeInput"></a>

```go
func ScaleDownUnneededTimeInput() *string
```

- *Type:* *string

---

##### `ScaleDownUtilizationThresholdInput`<sup>Optional</sup> <a name="ScaleDownUtilizationThresholdInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThresholdInput"></a>

```go
func ScaleDownUtilizationThresholdInput() *f64
```

- *Type:* *f64

---

##### `ScaleDownUnneededTime`<sup>Required</sup> <a name="ScaleDownUnneededTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTime"></a>

```go
func ScaleDownUnneededTime() *string
```

- *Type:* *string

---

##### `ScaleDownUtilizationThreshold`<sup>Required</sup> <a name="ScaleDownUtilizationThreshold" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThreshold"></a>

```go
func ScaleDownUtilizationThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesClusterControlPlaneFirewallOutputReference <a name="KubernetesClusterControlPlaneFirewallOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterControlPlaneFirewallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterControlPlaneFirewallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddressesInput">AllowedAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddresses">AllowedAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAddressesInput`<sup>Optional</sup> <a name="AllowedAddressesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddressesInput"></a>

```go
func AllowedAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedAddresses`<sup>Required</sup> <a name="AllowedAddresses" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddresses"></a>

```go
func AllowedAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterControlPlaneFirewall
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

---


### KubernetesClusterKubeConfigList <a name="KubernetesClusterKubeConfigList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterKubeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesClusterKubeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.get"></a>

```go
func Get(index *f64) KubernetesClusterKubeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KubernetesClusterKubeConfigOutputReference <a name="KubernetesClusterKubeConfigOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterKubeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesClusterKubeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.rawConfig">RawConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig">KubernetesClusterKubeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `ClusterCaCertificate`<sup>Required</sup> <a name="ClusterCaCertificate" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```go
func ClusterCaCertificate() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `RawConfig`<sup>Required</sup> <a name="RawConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.rawConfig"></a>

```go
func RawConfig() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterKubeConfig
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig">KubernetesClusterKubeConfig</a>

---


### KubernetesClusterMaintenancePolicyOutputReference <a name="KubernetesClusterMaintenancePolicyOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

---


### KubernetesClusterNodePoolNodesList <a name="KubernetesClusterNodePoolNodesList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterNodePoolNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesClusterNodePoolNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.get"></a>

```go
func Get(index *f64) KubernetesClusterNodePoolNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KubernetesClusterNodePoolNodesOutputReference <a name="KubernetesClusterNodePoolNodesOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterNodePoolNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesClusterNodePoolNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.dropletId">DropletId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes">KubernetesClusterNodePoolNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DropletId`<sup>Required</sup> <a name="DropletId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.dropletId"></a>

```go
func DropletId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterNodePoolNodes
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes">KubernetesClusterNodePoolNodes</a>

---


### KubernetesClusterNodePoolOutputReference <a name="KubernetesClusterNodePoolOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterNodePoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterNodePoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.putTaint">PutTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetAutoScale">ResetAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMaxNodes">ResetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMinNodes">ResetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTaint">ResetTaint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTaint` <a name="PutTaint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.putTaint"></a>

```go
func PutTaint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.putTaint.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoScale` <a name="ResetAutoScale" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetAutoScale"></a>

```go
func ResetAutoScale()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaxNodes` <a name="ResetMaxNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMaxNodes"></a>

```go
func ResetMaxNodes()
```

##### `ResetMinNodes` <a name="ResetMinNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMinNodes"></a>

```go
func ResetMinNodes()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaint` <a name="ResetTaint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTaint"></a>

```go
func ResetTaint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.actualNodeCount">ActualNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList">KubernetesClusterNodePoolNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taint">Taint</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList">KubernetesClusterNodePoolTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScaleInput">AutoScaleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodesInput">MaxNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodesInput">MinNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.sizeInput">SizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taintInput">TaintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScale">AutoScale</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.size">Size</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActualNodeCount`<sup>Required</sup> <a name="ActualNodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.actualNodeCount"></a>

```go
func ActualNodeCount() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodes"></a>

```go
func Nodes() KubernetesClusterNodePoolNodesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList">KubernetesClusterNodePoolNodesList</a>

---

##### `Taint`<sup>Required</sup> <a name="Taint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taint"></a>

```go
func Taint() KubernetesClusterNodePoolTaintList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList">KubernetesClusterNodePoolTaintList</a>

---

##### `AutoScaleInput`<sup>Optional</sup> <a name="AutoScaleInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScaleInput"></a>

```go
func AutoScaleInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodesInput"></a>

```go
func MaxNodesInput() *f64
```

- *Type:* *f64

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodesInput"></a>

```go
func MinNodesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.sizeInput"></a>

```go
func SizeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TaintInput`<sup>Optional</sup> <a name="TaintInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taintInput"></a>

```go
func TaintInput() interface{}
```

- *Type:* interface{}

---

##### `AutoScale`<sup>Required</sup> <a name="AutoScale" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScale"></a>

```go
func AutoScale() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterNodePool
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

---


### KubernetesClusterNodePoolTaintList <a name="KubernetesClusterNodePoolTaintList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterNodePoolTaintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesClusterNodePoolTaintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.get"></a>

```go
func Get(index *f64) KubernetesClusterNodePoolTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesClusterNodePoolTaintOutputReference <a name="KubernetesClusterNodePoolTaintOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterNodePoolTaintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesClusterNodePoolTaintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesClusterRoutingAgentOutputReference <a name="KubernetesClusterRoutingAgentOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterRoutingAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterRoutingAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesClusterRoutingAgent
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

---


### KubernetesClusterTimeoutsOutputReference <a name="KubernetesClusterTimeoutsOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/kubernetescluster"

kubernetescluster.NewKubernetesClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



