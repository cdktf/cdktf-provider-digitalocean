# `genaiIndexingJobCancel` Submodule <a name="`genaiIndexingJobCancel` Submodule" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiIndexingJobCancel <a name="GenaiIndexingJobCancel" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_indexing_job_cancel digitalocean_genai_indexing_job_cancel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiindexingjobcancel"

genaiindexingjobcancel.NewGenaiIndexingJobCancel(scope Construct, id *string, config GenaiIndexingJobCancelConfig) GenaiIndexingJobCancel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig">GenaiIndexingJobCancelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig">GenaiIndexingJobCancelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiIndexingJobCancel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiindexingjobcancel"

genaiindexingjobcancel.GenaiIndexingJobCancel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiindexingjobcancel"

genaiindexingjobcancel.GenaiIndexingJobCancel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiindexingjobcancel"

genaiindexingjobcancel.GenaiIndexingJobCancel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiindexingjobcancel"

genaiindexingjobcancel.GenaiIndexingJobCancel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GenaiIndexingJobCancel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GenaiIndexingJobCancel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GenaiIndexingJobCancel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_indexing_job_cancel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GenaiIndexingJobCancel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.completedDatasources">CompletedDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dataSourceUuids">DataSourceUuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.finishedAt">FinishedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.phase">Phase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.startedAt">StartedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalDatasources">TotalDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsFailed">TotalItemsFailed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsIndexed">TotalItemsIndexed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsSkipped">TotalItemsSkipped</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompletedDatasources`<sup>Required</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.completedDatasources"></a>

```go
func CompletedDatasources() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataSourceUuids`<sup>Required</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dataSourceUuids"></a>

```go
func DataSourceUuids() *[]*string
```

- *Type:* *[]*string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.finishedAt"></a>

```go
func FinishedAt() *string
```

- *Type:* *string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.knowledgeBaseUuid"></a>

```go
func KnowledgeBaseUuid() *string
```

- *Type:* *string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.phase"></a>

```go
func Phase() *string
```

- *Type:* *string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.startedAt"></a>

```go
func StartedAt() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `TotalDatasources`<sup>Required</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalDatasources"></a>

```go
func TotalDatasources() *f64
```

- *Type:* *f64

---

##### `TotalItemsFailed`<sup>Required</sup> <a name="TotalItemsFailed" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsFailed"></a>

```go
func TotalItemsFailed() *f64
```

- *Type:* *f64

---

##### `TotalItemsIndexed`<sup>Required</sup> <a name="TotalItemsIndexed" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsIndexed"></a>

```go
func TotalItemsIndexed() *f64
```

- *Type:* *f64

---

##### `TotalItemsSkipped`<sup>Required</sup> <a name="TotalItemsSkipped" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsSkipped"></a>

```go
func TotalItemsSkipped() *f64
```

- *Type:* *f64

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiIndexingJobCancelConfig <a name="GenaiIndexingJobCancelConfig" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiindexingjobcancel"

&genaiindexingjobcancel.GenaiIndexingJobCancelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Uuid: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.uuid">Uuid</a></code> | <code>*string</code> | The UUID of the indexing job to cancel. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_indexing_job_cancel#id GenaiIndexingJobCancel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

The UUID of the indexing job to cancel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_indexing_job_cancel#uuid GenaiIndexingJobCancel#uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_indexing_job_cancel#id GenaiIndexingJobCancel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



