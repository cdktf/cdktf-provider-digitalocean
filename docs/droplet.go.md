# `droplet` Submodule <a name="`droplet` Submodule" id="@cdktf/provider-digitalocean.droplet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Droplet <a name="Droplet" id="@cdktf/provider-digitalocean.droplet.Droplet"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet digitalocean_droplet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.droplet.Droplet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/droplet"

droplet.NewDroplet(scope Construct, id *string, config DropletConfig) Droplet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig">DropletConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletConfig">DropletConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.putBackupPolicy">PutBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetBackupPolicy">ResetBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetBackups">ResetBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetDropletAgent">ResetDropletAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetGracefulShutdown">ResetGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetPrivateNetworking">ResetPrivateNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetResizeDisk">ResetResizeDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetVolumeIds">ResetVolumeIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetVpcUuid">ResetVpcUuid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.droplet.Droplet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.droplet.Droplet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.droplet.Droplet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.droplet.Droplet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.droplet.Droplet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.droplet.Droplet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.droplet.Droplet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.droplet.Droplet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.droplet.Droplet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.droplet.Droplet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.droplet.Droplet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.droplet.Droplet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.droplet.Droplet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.droplet.Droplet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.droplet.Droplet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.droplet.Droplet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.droplet.Droplet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.droplet.Droplet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.droplet.Droplet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.droplet.Droplet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.droplet.Droplet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.droplet.Droplet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.droplet.Droplet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupPolicy` <a name="PutBackupPolicy" id="@cdktf/provider-digitalocean.droplet.Droplet.putBackupPolicy"></a>

```go
func PutBackupPolicy(value DropletBackupPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.droplet.Droplet.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-digitalocean.droplet.Droplet.putTimeouts"></a>

```go
func PutTimeouts(value DropletTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.droplet.Droplet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts">DropletTimeouts</a>

---

##### `ResetBackupPolicy` <a name="ResetBackupPolicy" id="@cdktf/provider-digitalocean.droplet.Droplet.resetBackupPolicy"></a>

```go
func ResetBackupPolicy()
```

##### `ResetBackups` <a name="ResetBackups" id="@cdktf/provider-digitalocean.droplet.Droplet.resetBackups"></a>

```go
func ResetBackups()
```

##### `ResetDropletAgent` <a name="ResetDropletAgent" id="@cdktf/provider-digitalocean.droplet.Droplet.resetDropletAgent"></a>

```go
func ResetDropletAgent()
```

##### `ResetGracefulShutdown` <a name="ResetGracefulShutdown" id="@cdktf/provider-digitalocean.droplet.Droplet.resetGracefulShutdown"></a>

```go
func ResetGracefulShutdown()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.droplet.Droplet.resetId"></a>

```go
func ResetId()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-digitalocean.droplet.Droplet.resetIpv6"></a>

```go
func ResetIpv6()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-digitalocean.droplet.Droplet.resetIpv6Address"></a>

```go
func ResetIpv6Address()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-digitalocean.droplet.Droplet.resetMonitoring"></a>

```go
func ResetMonitoring()
```

##### `ResetPrivateNetworking` <a name="ResetPrivateNetworking" id="@cdktf/provider-digitalocean.droplet.Droplet.resetPrivateNetworking"></a>

```go
func ResetPrivateNetworking()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-digitalocean.droplet.Droplet.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResizeDisk` <a name="ResetResizeDisk" id="@cdktf/provider-digitalocean.droplet.Droplet.resetResizeDisk"></a>

```go
func ResetResizeDisk()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-digitalocean.droplet.Droplet.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.droplet.Droplet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-digitalocean.droplet.Droplet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-digitalocean.droplet.Droplet.resetUserData"></a>

```go
func ResetUserData()
```

##### `ResetVolumeIds` <a name="ResetVolumeIds" id="@cdktf/provider-digitalocean.droplet.Droplet.resetVolumeIds"></a>

```go
func ResetVolumeIds()
```

##### `ResetVpcUuid` <a name="ResetVpcUuid" id="@cdktf/provider-digitalocean.droplet.Droplet.resetVpcUuid"></a>

```go
func ResetVpcUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Droplet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.droplet.Droplet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/droplet"

droplet.Droplet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.droplet.Droplet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.droplet.Droplet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/droplet"

droplet.Droplet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.droplet.Droplet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.droplet.Droplet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/droplet"

droplet.Droplet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.droplet.Droplet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/droplet"

droplet.Droplet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Droplet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Droplet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Droplet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Droplet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference">DropletBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.disk">Disk</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv4AddressPrivate">Ipv4AddressPrivate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.locked">Locked</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.priceHourly">PriceHourly</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.priceMonthly">PriceMonthly</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference">DropletTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.urn">Urn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.vcpus">Vcpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.backupPolicyInput">BackupPolicyInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.backupsInput">BackupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.dropletAgentInput">DropletAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.gracefulShutdownInput">GracefulShutdownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6Input">Ipv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.monitoringInput">MonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.privateNetworkingInput">PrivateNetworkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.resizeDiskInput">ResizeDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.sizeInput">SizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.volumeIdsInput">VolumeIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.vpcUuidInput">VpcUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.backups">Backups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.dropletAgent">DropletAgent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.gracefulShutdown">GracefulShutdown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6">Ipv6</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.monitoring">Monitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.privateNetworking">PrivateNetworking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.resizeDisk">ResizeDisk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.size">Size</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.volumeIds">VolumeIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.droplet.Droplet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.droplet.Droplet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.droplet.Droplet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.droplet.Droplet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.droplet.Droplet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.droplet.Droplet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.droplet.Droplet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.droplet.Droplet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.droplet.Droplet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.droplet.Droplet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.droplet.Droplet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.droplet.Droplet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.droplet.Droplet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.droplet.Droplet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="@cdktf/provider-digitalocean.droplet.Droplet.property.backupPolicy"></a>

```go
func BackupPolicy() DropletBackupPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference">DropletBackupPolicyOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.droplet.Droplet.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-digitalocean.droplet.Droplet.property.disk"></a>

```go
func Disk() *f64
```

- *Type:* *f64

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `Ipv4AddressPrivate`<sup>Required</sup> <a name="Ipv4AddressPrivate" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv4AddressPrivate"></a>

```go
func Ipv4AddressPrivate() *string
```

- *Type:* *string

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-digitalocean.droplet.Droplet.property.locked"></a>

```go
func Locked() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-digitalocean.droplet.Droplet.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `PriceHourly`<sup>Required</sup> <a name="PriceHourly" id="@cdktf/provider-digitalocean.droplet.Droplet.property.priceHourly"></a>

```go
func PriceHourly() *f64
```

- *Type:* *f64

---

##### `PriceMonthly`<sup>Required</sup> <a name="PriceMonthly" id="@cdktf/provider-digitalocean.droplet.Droplet.property.priceMonthly"></a>

```go
func PriceMonthly() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.droplet.Droplet.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-digitalocean.droplet.Droplet.property.timeouts"></a>

```go
func Timeouts() DropletTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference">DropletTimeoutsOutputReference</a>

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-digitalocean.droplet.Droplet.property.urn"></a>

```go
func Urn() *string
```

- *Type:* *string

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-digitalocean.droplet.Droplet.property.vcpus"></a>

```go
func Vcpus() *f64
```

- *Type:* *f64

---

##### `BackupPolicyInput`<sup>Optional</sup> <a name="BackupPolicyInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.backupPolicyInput"></a>

```go
func BackupPolicyInput() DropletBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a>

---

##### `BackupsInput`<sup>Optional</sup> <a name="BackupsInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.backupsInput"></a>

```go
func BackupsInput() interface{}
```

- *Type:* interface{}

---

##### `DropletAgentInput`<sup>Optional</sup> <a name="DropletAgentInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.dropletAgentInput"></a>

```go
func DropletAgentInput() interface{}
```

- *Type:* interface{}

---

##### `GracefulShutdownInput`<sup>Optional</sup> <a name="GracefulShutdownInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.gracefulShutdownInput"></a>

```go
func GracefulShutdownInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6AddressInput"></a>

```go
func Ipv6AddressInput() *string
```

- *Type:* *string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6Input"></a>

```go
func Ipv6Input() interface{}
```

- *Type:* interface{}

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.monitoringInput"></a>

```go
func MonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateNetworkingInput`<sup>Optional</sup> <a name="PrivateNetworkingInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.privateNetworkingInput"></a>

```go
func PrivateNetworkingInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResizeDiskInput`<sup>Optional</sup> <a name="ResizeDiskInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.resizeDiskInput"></a>

```go
func ResizeDiskInput() interface{}
```

- *Type:* interface{}

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.sizeInput"></a>

```go
func SizeInput() *string
```

- *Type:* *string

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `VolumeIdsInput`<sup>Optional</sup> <a name="VolumeIdsInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.volumeIdsInput"></a>

```go
func VolumeIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcUuidInput`<sup>Optional</sup> <a name="VpcUuidInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.vpcUuidInput"></a>

```go
func VpcUuidInput() *string
```

- *Type:* *string

---

##### `Backups`<sup>Required</sup> <a name="Backups" id="@cdktf/provider-digitalocean.droplet.Droplet.property.backups"></a>

```go
func Backups() interface{}
```

- *Type:* interface{}

---

##### `DropletAgent`<sup>Required</sup> <a name="DropletAgent" id="@cdktf/provider-digitalocean.droplet.Droplet.property.dropletAgent"></a>

```go
func DropletAgent() interface{}
```

- *Type:* interface{}

---

##### `GracefulShutdown`<sup>Required</sup> <a name="GracefulShutdown" id="@cdktf/provider-digitalocean.droplet.Droplet.property.gracefulShutdown"></a>

```go
func GracefulShutdown() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.droplet.Droplet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-digitalocean.droplet.Droplet.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6"></a>

```go
func Ipv6() interface{}
```

- *Type:* interface{}

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-digitalocean.droplet.Droplet.property.monitoring"></a>

```go
func Monitoring() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.droplet.Droplet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateNetworking`<sup>Required</sup> <a name="PrivateNetworking" id="@cdktf/provider-digitalocean.droplet.Droplet.property.privateNetworking"></a>

```go
func PrivateNetworking() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.droplet.Droplet.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResizeDisk`<sup>Required</sup> <a name="ResizeDisk" id="@cdktf/provider-digitalocean.droplet.Droplet.property.resizeDisk"></a>

```go
func ResizeDisk() interface{}
```

- *Type:* interface{}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.droplet.Droplet.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-digitalocean.droplet.Droplet.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.droplet.Droplet.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-digitalocean.droplet.Droplet.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `VolumeIds`<sup>Required</sup> <a name="VolumeIds" id="@cdktf/provider-digitalocean.droplet.Droplet.property.volumeIds"></a>

```go
func VolumeIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.droplet.Droplet.property.vpcUuid"></a>

```go
func VpcUuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.droplet.Droplet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DropletBackupPolicy <a name="DropletBackupPolicy" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/droplet"

&droplet.DropletBackupPolicy {
	Hour: *f64,
	Plan: *string,
	Weekday: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.hour">Hour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#hour Droplet#hour}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.plan">Plan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#plan Droplet#plan}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.weekday">Weekday</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#weekday Droplet#weekday}. |

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#hour Droplet#hour}.

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#plan Droplet#plan}.

---

##### `Weekday`<sup>Optional</sup> <a name="Weekday" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.weekday"></a>

```go
Weekday *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#weekday Droplet#weekday}.

---

### DropletConfig <a name="DropletConfig" id="@cdktf/provider-digitalocean.droplet.DropletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.droplet.DropletConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/droplet"

&droplet.DropletConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Image: *string,
	Name: *string,
	Size: *string,
	BackupPolicy: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11.droplet.DropletBackupPolicy,
	Backups: interface{},
	DropletAgent: interface{},
	GracefulShutdown: interface{},
	Id: *string,
	Ipv6: interface{},
	Ipv6Address: *string,
	Monitoring: interface{},
	PrivateNetworking: interface{},
	Region: *string,
	ResizeDisk: interface{},
	SshKeys: *[]*string,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11.droplet.DropletTimeouts,
	UserData: *string,
	VolumeIds: *[]*string,
	VpcUuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#image Droplet#image}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#name Droplet#name}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.size">Size</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#size Droplet#size}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.backups">Backups</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#backups Droplet#backups}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.dropletAgent">DropletAgent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#droplet_agent Droplet#droplet_agent}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.gracefulShutdown">GracefulShutdown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#graceful_shutdown Droplet#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#id Droplet#id}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.ipv6">Ipv6</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#ipv6 Droplet#ipv6}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#ipv6_address Droplet#ipv6_address}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.monitoring">Monitoring</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#monitoring Droplet#monitoring}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.privateNetworking">PrivateNetworking</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#private_networking Droplet#private_networking}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#region Droplet#region}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.resizeDisk">ResizeDisk</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#resize_disk Droplet#resize_disk}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#ssh_keys Droplet#ssh_keys}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#tags Droplet#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts">DropletTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#user_data Droplet#user_data}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.volumeIds">VolumeIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#volume_ids Droplet#volume_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#vpc_uuid Droplet#vpc_uuid}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#image Droplet#image}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#name Droplet#name}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.size"></a>

```go
Size *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#size Droplet#size}.

---

##### `BackupPolicy`<sup>Optional</sup> <a name="BackupPolicy" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.backupPolicy"></a>

```go
BackupPolicy DropletBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#backup_policy Droplet#backup_policy}

---

##### `Backups`<sup>Optional</sup> <a name="Backups" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.backups"></a>

```go
Backups interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#backups Droplet#backups}.

---

##### `DropletAgent`<sup>Optional</sup> <a name="DropletAgent" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.dropletAgent"></a>

```go
DropletAgent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#droplet_agent Droplet#droplet_agent}.

---

##### `GracefulShutdown`<sup>Optional</sup> <a name="GracefulShutdown" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.gracefulShutdown"></a>

```go
GracefulShutdown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#graceful_shutdown Droplet#graceful_shutdown}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#id Droplet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.ipv6"></a>

```go
Ipv6 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#ipv6 Droplet#ipv6}.

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.ipv6Address"></a>

```go
Ipv6Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#ipv6_address Droplet#ipv6_address}.

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.monitoring"></a>

```go
Monitoring interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#monitoring Droplet#monitoring}.

---

##### `PrivateNetworking`<sup>Optional</sup> <a name="PrivateNetworking" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.privateNetworking"></a>

```go
PrivateNetworking interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#private_networking Droplet#private_networking}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#region Droplet#region}.

---

##### `ResizeDisk`<sup>Optional</sup> <a name="ResizeDisk" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.resizeDisk"></a>

```go
ResizeDisk interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#resize_disk Droplet#resize_disk}.

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#ssh_keys Droplet#ssh_keys}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#tags Droplet#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.timeouts"></a>

```go
Timeouts DropletTimeouts
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts">DropletTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#timeouts Droplet#timeouts}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#user_data Droplet#user_data}.

---

##### `VolumeIds`<sup>Optional</sup> <a name="VolumeIds" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.volumeIds"></a>

```go
VolumeIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#volume_ids Droplet#volume_ids}.

---

##### `VpcUuid`<sup>Optional</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.vpcUuid"></a>

```go
VpcUuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#vpc_uuid Droplet#vpc_uuid}.

---

### DropletTimeouts <a name="DropletTimeouts" id="@cdktf/provider-digitalocean.droplet.DropletTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.droplet.DropletTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/droplet"

&droplet.DropletTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#create Droplet#create}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#delete Droplet#delete}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#update Droplet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#create Droplet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#delete Droplet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#update Droplet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DropletBackupPolicyOutputReference <a name="DropletBackupPolicyOutputReference" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/droplet"

droplet.NewDropletBackupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DropletBackupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetWeekday">ResetWeekday</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetHour"></a>

```go
func ResetHour()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetPlan"></a>

```go
func ResetPlan()
```

##### `ResetWeekday` <a name="ResetWeekday" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetWeekday"></a>

```go
func ResetWeekday()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.weekdayInput">WeekdayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.weekday">Weekday</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `WeekdayInput`<sup>Optional</sup> <a name="WeekdayInput" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.weekdayInput"></a>

```go
func WeekdayInput() *string
```

- *Type:* *string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Weekday`<sup>Required</sup> <a name="Weekday" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.weekday"></a>

```go
func Weekday() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DropletBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a>

---


### DropletTimeoutsOutputReference <a name="DropletTimeoutsOutputReference" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/droplet"

droplet.NewDropletTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DropletTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



