# `kubernetesNodePool` Submodule <a name="`kubernetesNodePool` Submodule" id="@cdktf/provider-digitalocean.kubernetesNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesNodePool <a name="KubernetesNodePool" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool digitalocean_kubernetes_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

kubernetesnodepool.NewKubernetesNodePool(scope Construct, id *string, config KubernetesNodePoolConfig) KubernetesNodePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig">KubernetesNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig">KubernetesNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.putTaint">PutTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetAutoScale">ResetAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetMaxNodes">ResetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetMinNodes">ResetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetTaint">ResetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTaint` <a name="PutTaint" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.putTaint"></a>

```go
func PutTaint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.putTaint.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.putTimeouts"></a>

```go
func PutTimeouts(value KubernetesNodePoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeouts">KubernetesNodePoolTimeouts</a>

---

##### `ResetAutoScale` <a name="ResetAutoScale" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetAutoScale"></a>

```go
func ResetAutoScale()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaxNodes` <a name="ResetMaxNodes" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetMaxNodes"></a>

```go
func ResetMaxNodes()
```

##### `ResetMinNodes` <a name="ResetMinNodes" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetMinNodes"></a>

```go
func ResetMinNodes()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaint` <a name="ResetTaint" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetTaint"></a>

```go
func ResetTaint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

kubernetesnodepool.KubernetesNodePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

kubernetesnodepool.KubernetesNodePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

kubernetesnodepool.KubernetesNodePool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

kubernetesnodepool.KubernetesNodePool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KubernetesNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.actualNodeCount">ActualNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList">KubernetesNodePoolNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.taint">Taint</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList">KubernetesNodePoolTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference">KubernetesNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.autoScaleInput">AutoScaleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.maxNodesInput">MaxNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.minNodesInput">MinNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.sizeInput">SizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.taintInput">TaintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.autoScale">AutoScale</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.size">Size</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActualNodeCount`<sup>Required</sup> <a name="ActualNodeCount" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.actualNodeCount"></a>

```go
func ActualNodeCount() *f64
```

- *Type:* *f64

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.nodes"></a>

```go
func Nodes() KubernetesNodePoolNodesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList">KubernetesNodePoolNodesList</a>

---

##### `Taint`<sup>Required</sup> <a name="Taint" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.taint"></a>

```go
func Taint() KubernetesNodePoolTaintList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList">KubernetesNodePoolTaintList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.timeouts"></a>

```go
func Timeouts() KubernetesNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference">KubernetesNodePoolTimeoutsOutputReference</a>

---

##### `AutoScaleInput`<sup>Optional</sup> <a name="AutoScaleInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.autoScaleInput"></a>

```go
func AutoScaleInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.maxNodesInput"></a>

```go
func MaxNodesInput() *f64
```

- *Type:* *f64

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.minNodesInput"></a>

```go
func MinNodesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.sizeInput"></a>

```go
func SizeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TaintInput`<sup>Optional</sup> <a name="TaintInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.taintInput"></a>

```go
func TaintInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoScale`<sup>Required</sup> <a name="AutoScale" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.autoScale"></a>

```go
func AutoScale() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesNodePoolConfig <a name="KubernetesNodePoolConfig" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

&kubernetesnodepool.KubernetesNodePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Name: *string,
	Size: *string,
	AutoScale: interface{},
	Id: *string,
	Labels: *map[string]*string,
	MaxNodes: *f64,
	MinNodes: *f64,
	NodeCount: *f64,
	Tags: *[]*string,
	Taint: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean.kubernetesNodePool.KubernetesNodePoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#cluster_id KubernetesNodePool#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#name KubernetesNodePool#name}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.size">Size</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#size KubernetesNodePool#size}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.autoScale">AutoScale</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#auto_scale KubernetesNodePool#auto_scale}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#id KubernetesNodePool#id}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#labels KubernetesNodePool#labels}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#max_nodes KubernetesNodePool#max_nodes}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.minNodes">MinNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#min_nodes KubernetesNodePool#min_nodes}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#node_count KubernetesNodePool#node_count}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#tags KubernetesNodePool#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.taint">Taint</a></code> | <code>interface{}</code> | taint block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeouts">KubernetesNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#cluster_id KubernetesNodePool#cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#name KubernetesNodePool#name}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.size"></a>

```go
Size *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#size KubernetesNodePool#size}.

---

##### `AutoScale`<sup>Optional</sup> <a name="AutoScale" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.autoScale"></a>

```go
AutoScale interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#auto_scale KubernetesNodePool#auto_scale}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#id KubernetesNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#labels KubernetesNodePool#labels}.

---

##### `MaxNodes`<sup>Optional</sup> <a name="MaxNodes" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.maxNodes"></a>

```go
MaxNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#max_nodes KubernetesNodePool#max_nodes}.

---

##### `MinNodes`<sup>Optional</sup> <a name="MinNodes" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.minNodes"></a>

```go
MinNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#min_nodes KubernetesNodePool#min_nodes}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#node_count KubernetesNodePool#node_count}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#tags KubernetesNodePool#tags}.

---

##### `Taint`<sup>Optional</sup> <a name="Taint" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.taint"></a>

```go
Taint interface{}
```

- *Type:* interface{}

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#taint KubernetesNodePool#taint}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolConfig.property.timeouts"></a>

```go
Timeouts KubernetesNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeouts">KubernetesNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#timeouts KubernetesNodePool#timeouts}

---

### KubernetesNodePoolNodes <a name="KubernetesNodePoolNodes" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

&kubernetesnodepool.KubernetesNodePoolNodes {

}
```


### KubernetesNodePoolTaint <a name="KubernetesNodePoolTaint" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

&kubernetesnodepool.KubernetesNodePoolTaint {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaint.property.effect">Effect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#effect KubernetesNodePool#effect}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaint.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#key KubernetesNodePool#key}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaint.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#value KubernetesNodePool#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaint.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#effect KubernetesNodePool#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaint.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#key KubernetesNodePool#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaint.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#value KubernetesNodePool#value}.

---

### KubernetesNodePoolTimeouts <a name="KubernetesNodePoolTimeouts" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

&kubernetesnodepool.KubernetesNodePoolTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#create KubernetesNodePool#create}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#delete KubernetesNodePool#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#create KubernetesNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.0/docs/resources/kubernetes_node_pool#delete KubernetesNodePool#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesNodePoolNodesList <a name="KubernetesNodePoolNodesList" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

kubernetesnodepool.NewKubernetesNodePoolNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesNodePoolNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.get"></a>

```go
func Get(index *f64) KubernetesNodePoolNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KubernetesNodePoolNodesOutputReference <a name="KubernetesNodePoolNodesOutputReference" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

kubernetesnodepool.NewKubernetesNodePoolNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesNodePoolNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.dropletId">DropletId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodes">KubernetesNodePoolNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DropletId`<sup>Required</sup> <a name="DropletId" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.dropletId"></a>

```go
func DropletId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesNodePoolNodes
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolNodes">KubernetesNodePoolNodes</a>

---


### KubernetesNodePoolTaintList <a name="KubernetesNodePoolTaintList" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

kubernetesnodepool.NewKubernetesNodePoolTaintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesNodePoolTaintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.get"></a>

```go
func Get(index *f64) KubernetesNodePoolTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesNodePoolTaintOutputReference <a name="KubernetesNodePoolTaintOutputReference" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

kubernetesnodepool.NewKubernetesNodePoolTaintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesNodePoolTaintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTaintOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesNodePoolTimeoutsOutputReference <a name="KubernetesNodePoolTimeoutsOutputReference" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/kubernetesnodepool"

kubernetesnodepool.NewKubernetesNodePoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesNodePoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.kubernetesNodePool.KubernetesNodePoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



