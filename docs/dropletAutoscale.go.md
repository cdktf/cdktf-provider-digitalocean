# `dropletAutoscale` Submodule <a name="`dropletAutoscale` Submodule" id="@cdktf/provider-digitalocean.dropletAutoscale"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DropletAutoscale <a name="DropletAutoscale" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale digitalocean_droplet_autoscale}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

dropletautoscale.NewDropletAutoscale(scope Construct, id *string, config DropletAutoscaleConfig) DropletAutoscale
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig">DropletAutoscaleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig">DropletAutoscaleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate">PutDropletTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig"></a>

```go
func PutConfig(value DropletAutoscaleConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

---

##### `PutDropletTemplate` <a name="PutDropletTemplate" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate"></a>

```go
func PutDropletTemplate(value DropletAutoscaleDropletTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.putDropletTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DropletAutoscale resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

dropletautoscale.DropletAutoscale_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

dropletautoscale.DropletAutoscale_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

dropletautoscale.DropletAutoscale_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

dropletautoscale.DropletAutoscale_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DropletAutoscale resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DropletAutoscale to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DropletAutoscale that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DropletAutoscale to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference">DropletAutoscaleConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.currentUtilization">CurrentUtilization</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList">DropletAutoscaleCurrentUtilizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplate">DropletTemplate</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference">DropletAutoscaleDropletTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplateInput">DropletTemplateInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.config"></a>

```go
func Config() DropletAutoscaleConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference">DropletAutoscaleConfigAOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CurrentUtilization`<sup>Required</sup> <a name="CurrentUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.currentUtilization"></a>

```go
func CurrentUtilization() DropletAutoscaleCurrentUtilizationList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList">DropletAutoscaleCurrentUtilizationList</a>

---

##### `DropletTemplate`<sup>Required</sup> <a name="DropletTemplate" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplate"></a>

```go
func DropletTemplate() DropletAutoscaleDropletTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference">DropletAutoscaleDropletTemplateOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.configInput"></a>

```go
func ConfigInput() DropletAutoscaleConfigA
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

---

##### `DropletTemplateInput`<sup>Optional</sup> <a name="DropletTemplateInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.dropletTemplateInput"></a>

```go
func DropletTemplateInput() DropletAutoscaleDropletTemplate
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscale.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DropletAutoscaleConfig <a name="DropletAutoscaleConfig" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

&dropletautoscale.DropletAutoscaleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean.dropletAutoscale.DropletAutoscaleConfigA,
	DropletTemplate: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dropletTemplate">DropletTemplate</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a></code> | droplet_template block. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Droplet autoscale pool. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.config"></a>

```go
Config DropletAutoscaleConfigA
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#config DropletAutoscale#config}

---

##### `DropletTemplate`<sup>Required</sup> <a name="DropletTemplate" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.dropletTemplate"></a>

```go
DropletTemplate DropletAutoscaleDropletTemplate
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

droplet_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#droplet_template DropletAutoscale#droplet_template}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#name DropletAutoscale#name}

---

### DropletAutoscaleConfigA <a name="DropletAutoscaleConfigA" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

&dropletautoscale.DropletAutoscaleConfigA {
	CooldownMinutes: *f64,
	MaxInstances: *f64,
	MinInstances: *f64,
	TargetCpuUtilization: *f64,
	TargetMemoryUtilization: *f64,
	TargetNumberInstances: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.cooldownMinutes">CooldownMinutes</a></code> | <code>*f64</code> | Cooldown duration. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | Max number of members. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.minInstances">MinInstances</a></code> | <code>*f64</code> | Min number of members. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetCpuUtilization">TargetCpuUtilization</a></code> | <code>*f64</code> | CPU target threshold. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetMemoryUtilization">TargetMemoryUtilization</a></code> | <code>*f64</code> | Memory target threshold. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetNumberInstances">TargetNumberInstances</a></code> | <code>*f64</code> | Target number of members. |

---

##### `CooldownMinutes`<sup>Optional</sup> <a name="CooldownMinutes" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.cooldownMinutes"></a>

```go
CooldownMinutes *f64
```

- *Type:* *f64

Cooldown duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#cooldown_minutes DropletAutoscale#cooldown_minutes}

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.maxInstances"></a>

```go
MaxInstances *f64
```

- *Type:* *f64

Max number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#max_instances DropletAutoscale#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.minInstances"></a>

```go
MinInstances *f64
```

- *Type:* *f64

Min number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#min_instances DropletAutoscale#min_instances}

---

##### `TargetCpuUtilization`<sup>Optional</sup> <a name="TargetCpuUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetCpuUtilization"></a>

```go
TargetCpuUtilization *f64
```

- *Type:* *f64

CPU target threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#target_cpu_utilization DropletAutoscale#target_cpu_utilization}

---

##### `TargetMemoryUtilization`<sup>Optional</sup> <a name="TargetMemoryUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetMemoryUtilization"></a>

```go
TargetMemoryUtilization *f64
```

- *Type:* *f64

Memory target threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#target_memory_utilization DropletAutoscale#target_memory_utilization}

---

##### `TargetNumberInstances`<sup>Optional</sup> <a name="TargetNumberInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA.property.targetNumberInstances"></a>

```go
TargetNumberInstances *f64
```

- *Type:* *f64

Target number of members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#target_number_instances DropletAutoscale#target_number_instances}

---

### DropletAutoscaleCurrentUtilization <a name="DropletAutoscaleCurrentUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

&dropletautoscale.DropletAutoscaleCurrentUtilization {

}
```


### DropletAutoscaleDropletTemplate <a name="DropletAutoscaleDropletTemplate" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

&dropletautoscale.DropletAutoscaleDropletTemplate {
	Image: *string,
	Region: *string,
	Size: *string,
	SshKeys: *[]*string,
	Ipv6: interface{},
	ProjectId: *string,
	Tags: *[]*string,
	UserData: *string,
	VpcUuid: *string,
	WithDropletAgent: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.image">Image</a></code> | <code>*string</code> | Droplet image. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.region">Region</a></code> | <code>*string</code> | Droplet region. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.size">Size</a></code> | <code>*string</code> | Droplet size. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Droplet SSH keys. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.ipv6">Ipv6</a></code> | <code>interface{}</code> | Enable droplet IPv6. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.projectId">ProjectId</a></code> | <code>*string</code> | Droplet project ID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.tags">Tags</a></code> | <code>*[]*string</code> | Droplet tags. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.userData">UserData</a></code> | <code>*string</code> | Droplet user data. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | Droplet VPC UUID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.withDropletAgent">WithDropletAgent</a></code> | <code>interface{}</code> | Enable droplet agent. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.image"></a>

```go
Image *string
```

- *Type:* *string

Droplet image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#image DropletAutoscale#image}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.region"></a>

```go
Region *string
```

- *Type:* *string

Droplet region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#region DropletAutoscale#region}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.size"></a>

```go
Size *string
```

- *Type:* *string

Droplet size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#size DropletAutoscale#size}

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Droplet SSH keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#ssh_keys DropletAutoscale#ssh_keys}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.ipv6"></a>

```go
Ipv6 interface{}
```

- *Type:* interface{}

Enable droplet IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#ipv6 DropletAutoscale#ipv6}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Droplet project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#project_id DropletAutoscale#project_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Droplet tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#tags DropletAutoscale#tags}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Droplet user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#user_data DropletAutoscale#user_data}

---

##### `VpcUuid`<sup>Optional</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.vpcUuid"></a>

```go
VpcUuid *string
```

- *Type:* *string

Droplet VPC UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#vpc_uuid DropletAutoscale#vpc_uuid}

---

##### `WithDropletAgent`<sup>Optional</sup> <a name="WithDropletAgent" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate.property.withDropletAgent"></a>

```go
WithDropletAgent interface{}
```

- *Type:* interface{}

Enable droplet agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/droplet_autoscale#with_droplet_agent DropletAutoscale#with_droplet_agent}

---

## Classes <a name="Classes" id="Classes"></a>

### DropletAutoscaleConfigAOutputReference <a name="DropletAutoscaleConfigAOutputReference" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

dropletautoscale.NewDropletAutoscaleConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DropletAutoscaleConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetCooldownMinutes">ResetCooldownMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetCpuUtilization">ResetTargetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetMemoryUtilization">ResetTargetMemoryUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetNumberInstances">ResetTargetNumberInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCooldownMinutes` <a name="ResetCooldownMinutes" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetCooldownMinutes"></a>

```go
func ResetCooldownMinutes()
```

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMaxInstances"></a>

```go
func ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetMinInstances"></a>

```go
func ResetMinInstances()
```

##### `ResetTargetCpuUtilization` <a name="ResetTargetCpuUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetCpuUtilization"></a>

```go
func ResetTargetCpuUtilization()
```

##### `ResetTargetMemoryUtilization` <a name="ResetTargetMemoryUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetMemoryUtilization"></a>

```go
func ResetTargetMemoryUtilization()
```

##### `ResetTargetNumberInstances` <a name="ResetTargetNumberInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.resetTargetNumberInstances"></a>

```go
func ResetTargetNumberInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutesInput">CooldownMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstancesInput">MinInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilizationInput">TargetCpuUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilizationInput">TargetMemoryUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstancesInput">TargetNumberInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutes">CooldownMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstances">MinInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilization">TargetCpuUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization">TargetMemoryUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstances">TargetNumberInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CooldownMinutesInput`<sup>Optional</sup> <a name="CooldownMinutesInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutesInput"></a>

```go
func CooldownMinutesInput() *f64
```

- *Type:* *f64

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstancesInput"></a>

```go
func MaxInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstancesInput"></a>

```go
func MinInstancesInput() *f64
```

- *Type:* *f64

---

##### `TargetCpuUtilizationInput`<sup>Optional</sup> <a name="TargetCpuUtilizationInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilizationInput"></a>

```go
func TargetCpuUtilizationInput() *f64
```

- *Type:* *f64

---

##### `TargetMemoryUtilizationInput`<sup>Optional</sup> <a name="TargetMemoryUtilizationInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilizationInput"></a>

```go
func TargetMemoryUtilizationInput() *f64
```

- *Type:* *f64

---

##### `TargetNumberInstancesInput`<sup>Optional</sup> <a name="TargetNumberInstancesInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstancesInput"></a>

```go
func TargetNumberInstancesInput() *f64
```

- *Type:* *f64

---

##### `CooldownMinutes`<sup>Required</sup> <a name="CooldownMinutes" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.cooldownMinutes"></a>

```go
func CooldownMinutes() *f64
```

- *Type:* *f64

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.minInstances"></a>

```go
func MinInstances() *f64
```

- *Type:* *f64

---

##### `TargetCpuUtilization`<sup>Required</sup> <a name="TargetCpuUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetCpuUtilization"></a>

```go
func TargetCpuUtilization() *f64
```

- *Type:* *f64

---

##### `TargetMemoryUtilization`<sup>Required</sup> <a name="TargetMemoryUtilization" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization"></a>

```go
func TargetMemoryUtilization() *f64
```

- *Type:* *f64

---

##### `TargetNumberInstances`<sup>Required</sup> <a name="TargetNumberInstances" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.targetNumberInstances"></a>

```go
func TargetNumberInstances() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() DropletAutoscaleConfigA
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleConfigA">DropletAutoscaleConfigA</a>

---


### DropletAutoscaleCurrentUtilizationList <a name="DropletAutoscaleCurrentUtilizationList" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

dropletautoscale.NewDropletAutoscaleCurrentUtilizationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DropletAutoscaleCurrentUtilizationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.get"></a>

```go
func Get(index *f64) DropletAutoscaleCurrentUtilizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DropletAutoscaleCurrentUtilizationOutputReference <a name="DropletAutoscaleCurrentUtilizationOutputReference" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

dropletautoscale.NewDropletAutoscaleCurrentUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DropletAutoscaleCurrentUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization">DropletAutoscaleCurrentUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() DropletAutoscaleCurrentUtilization
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleCurrentUtilization">DropletAutoscaleCurrentUtilization</a>

---


### DropletAutoscaleDropletTemplateOutputReference <a name="DropletAutoscaleDropletTemplateOutputReference" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/dropletautoscale"

dropletautoscale.NewDropletAutoscaleDropletTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DropletAutoscaleDropletTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetVpcUuid">ResetVpcUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetWithDropletAgent">ResetWithDropletAgent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetIpv6"></a>

```go
func ResetIpv6()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetUserData"></a>

```go
func ResetUserData()
```

##### `ResetVpcUuid` <a name="ResetVpcUuid" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetVpcUuid"></a>

```go
func ResetVpcUuid()
```

##### `ResetWithDropletAgent` <a name="ResetWithDropletAgent" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.resetWithDropletAgent"></a>

```go
func ResetWithDropletAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sizeInput">SizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuidInput">VpcUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgentInput">WithDropletAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6">Ipv6</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.size">Size</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent">WithDropletAgent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6Input"></a>

```go
func Ipv6Input() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sizeInput"></a>

```go
func SizeInput() *string
```

- *Type:* *string

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `VpcUuidInput`<sup>Optional</sup> <a name="VpcUuidInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuidInput"></a>

```go
func VpcUuidInput() *string
```

- *Type:* *string

---

##### `WithDropletAgentInput`<sup>Optional</sup> <a name="WithDropletAgentInput" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgentInput"></a>

```go
func WithDropletAgentInput() interface{}
```

- *Type:* interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.ipv6"></a>

```go
func Ipv6() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.vpcUuid"></a>

```go
func VpcUuid() *string
```

- *Type:* *string

---

##### `WithDropletAgent`<sup>Required</sup> <a name="WithDropletAgent" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent"></a>

```go
func WithDropletAgent() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DropletAutoscaleDropletTemplate
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletAutoscale.DropletAutoscaleDropletTemplate">DropletAutoscaleDropletTemplate</a>

---



