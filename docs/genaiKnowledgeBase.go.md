# `genaiKnowledgeBase` Submodule <a name="`genaiKnowledgeBase` Submodule" id="@cdktf/provider-digitalocean.genaiKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiKnowledgeBase <a name="GenaiKnowledgeBase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base digitalocean_genai_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBase(scope Construct, id *string, config GenaiKnowledgeBaseConfig) GenaiKnowledgeBase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig">GenaiKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig">GenaiKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources">PutDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob">PutLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetAddedToAgentAt">ResetAddedToAgentAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetIsPublic">ResetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetLastIndexingJob">ResetLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetVpcUuid">ResetVpcUuid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDatasources` <a name="PutDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources"></a>

```go
func PutDatasources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLastIndexingJob` <a name="PutLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob"></a>

```go
func PutLastIndexingJob(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddedToAgentAt` <a name="ResetAddedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetAddedToAgentAt"></a>

```go
func ResetAddedToAgentAt()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetDatabaseId"></a>

```go
func ResetDatabaseId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetId"></a>

```go
func ResetId()
```

##### `ResetIsPublic` <a name="ResetIsPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetIsPublic"></a>

```go
func ResetIsPublic()
```

##### `ResetLastIndexingJob` <a name="ResetLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetLastIndexingJob"></a>

```go
func ResetLastIndexingJob()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVpcUuid` <a name="ResetVpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetVpcUuid"></a>

```go
func ResetVpcUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.GenaiKnowledgeBase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.GenaiKnowledgeBase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.GenaiKnowledgeBase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.GenaiKnowledgeBase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GenaiKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GenaiKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GenaiKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GenaiKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasources">Datasources</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList">GenaiKnowledgeBaseDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJob">LastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList">GenaiKnowledgeBaseLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAtInput">AddedToAgentAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasourcesInput">DatasourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuidInput">EmbeddingModelUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublicInput">IsPublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJobInput">LastIndexingJobInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuidInput">VpcUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAt">AddedToAgentAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuid">EmbeddingModelUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublic">IsPublic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Datasources`<sup>Required</sup> <a name="Datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasources"></a>

```go
func Datasources() GenaiKnowledgeBaseDatasourcesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList">GenaiKnowledgeBaseDatasourcesList</a>

---

##### `LastIndexingJob`<sup>Required</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJob"></a>

```go
func LastIndexingJob() GenaiKnowledgeBaseLastIndexingJobList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList">GenaiKnowledgeBaseLastIndexingJobList</a>

---

##### `AddedToAgentAtInput`<sup>Optional</sup> <a name="AddedToAgentAtInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAtInput"></a>

```go
func AddedToAgentAtInput() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `DatasourcesInput`<sup>Optional</sup> <a name="DatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasourcesInput"></a>

```go
func DatasourcesInput() interface{}
```

- *Type:* interface{}

---

##### `EmbeddingModelUuidInput`<sup>Optional</sup> <a name="EmbeddingModelUuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuidInput"></a>

```go
func EmbeddingModelUuidInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsPublicInput`<sup>Optional</sup> <a name="IsPublicInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublicInput"></a>

```go
func IsPublicInput() interface{}
```

- *Type:* interface{}

---

##### `LastIndexingJobInput`<sup>Optional</sup> <a name="LastIndexingJobInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJobInput"></a>

```go
func LastIndexingJobInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcUuidInput`<sup>Optional</sup> <a name="VpcUuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuidInput"></a>

```go
func VpcUuidInput() *string
```

- *Type:* *string

---

##### `AddedToAgentAt`<sup>Required</sup> <a name="AddedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAt"></a>

```go
func AddedToAgentAt() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `EmbeddingModelUuid`<sup>Required</sup> <a name="EmbeddingModelUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuid"></a>

```go
func EmbeddingModelUuid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublic"></a>

```go
func IsPublic() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuid"></a>

```go
func VpcUuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiKnowledgeBaseConfig <a name="GenaiKnowledgeBaseConfig" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

&genaiknowledgebase.GenaiKnowledgeBaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Datasources: interface{},
	EmbeddingModelUuid: *string,
	Name: *string,
	ProjectId: *string,
	Region: *string,
	AddedToAgentAt: *string,
	DatabaseId: *string,
	Id: *string,
	IsPublic: interface{},
	LastIndexingJob: interface{},
	Tags: *[]*string,
	VpcUuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.datasources">Datasources</a></code> | <code>interface{}</code> | datasources block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.embeddingModelUuid">EmbeddingModelUuid</a></code> | <code>*string</code> | The unique identifier of the embedding model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.name">Name</a></code> | <code>*string</code> | The name of the knowledge base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The unique identifier of the project to which the knowledge base belongs. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.addedToAgentAt">AddedToAgentAt</a></code> | <code>*string</code> | The time when the knowledge base was added to the agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.isPublic">IsPublic</a></code> | <code>interface{}</code> | Indicates whether the knowledge base is public or private. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lastIndexingJob">LastIndexingJob</a></code> | <code>interface{}</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | The unique identifier of the VPC to which the knowledge base belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Datasources`<sup>Required</sup> <a name="Datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.datasources"></a>

```go
Datasources interface{}
```

- *Type:* interface{}

datasources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#datasources GenaiKnowledgeBase#datasources}

---

##### `EmbeddingModelUuid`<sup>Required</sup> <a name="EmbeddingModelUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.embeddingModelUuid"></a>

```go
EmbeddingModelUuid *string
```

- *Type:* *string

The unique identifier of the embedding model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#embedding_model_uuid GenaiKnowledgeBase#embedding_model_uuid}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#name GenaiKnowledgeBase#name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The unique identifier of the project to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#project_id GenaiKnowledgeBase#project_id}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}.

---

##### `AddedToAgentAt`<sup>Optional</sup> <a name="AddedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.addedToAgentAt"></a>

```go
AddedToAgentAt *string
```

- *Type:* *string

The time when the knowledge base was added to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#added_to_agent_at GenaiKnowledgeBase#added_to_agent_at}

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#database_id GenaiKnowledgeBase#database_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsPublic`<sup>Optional</sup> <a name="IsPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.isPublic"></a>

```go
IsPublic interface{}
```

- *Type:* interface{}

Indicates whether the knowledge base is public or private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#is_public GenaiKnowledgeBase#is_public}

---

##### `LastIndexingJob`<sup>Optional</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lastIndexingJob"></a>

```go
LastIndexingJob interface{}
```

- *Type:* interface{}

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}.

---

##### `VpcUuid`<sup>Optional</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.vpcUuid"></a>

```go
VpcUuid *string
```

- *Type:* *string

The unique identifier of the VPC to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#vpc_uuid GenaiKnowledgeBase#vpc_uuid}

---

### GenaiKnowledgeBaseDatasources <a name="GenaiKnowledgeBaseDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

&genaiknowledgebase.GenaiKnowledgeBaseDatasources {
	FileUploadDataSource: interface{},
	LastIndexingJob: interface{},
	SpacesDataSource: interface{},
	Uuid: *string,
	WebCrawlerDataSource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.fileUploadDataSource">FileUploadDataSource</a></code> | <code>interface{}</code> | file_upload_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.lastIndexingJob">LastIndexingJob</a></code> | <code>interface{}</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.spacesDataSource">SpacesDataSource</a></code> | <code>interface{}</code> | spaces_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.uuid">Uuid</a></code> | <code>*string</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.webCrawlerDataSource">WebCrawlerDataSource</a></code> | <code>interface{}</code> | web_crawler_data_source block. |

---

##### `FileUploadDataSource`<sup>Optional</sup> <a name="FileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.fileUploadDataSource"></a>

```go
FileUploadDataSource interface{}
```

- *Type:* interface{}

file_upload_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#file_upload_data_source GenaiKnowledgeBase#file_upload_data_source}

---

##### `LastIndexingJob`<sup>Optional</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.lastIndexingJob"></a>

```go
LastIndexingJob interface{}
```

- *Type:* interface{}

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `SpacesDataSource`<sup>Optional</sup> <a name="SpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.spacesDataSource"></a>

```go
SpacesDataSource interface{}
```

- *Type:* interface{}

spaces_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#spaces_data_source GenaiKnowledgeBase#spaces_data_source}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

##### `WebCrawlerDataSource`<sup>Optional</sup> <a name="WebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.webCrawlerDataSource"></a>

```go
WebCrawlerDataSource interface{}
```

- *Type:* interface{}

web_crawler_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#web_crawler_data_source GenaiKnowledgeBase#web_crawler_data_source}

---

### GenaiKnowledgeBaseDatasourcesFileUploadDataSource <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

&genaiknowledgebase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource {
	OriginalFileName: *string,
	SizeInBytes: *string,
	StoredObjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.originalFileName">OriginalFileName</a></code> | <code>*string</code> | The original name of the uploaded file. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.sizeInBytes">SizeInBytes</a></code> | <code>*string</code> | The size of the file in bytes. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.storedObjectKey">StoredObjectKey</a></code> | <code>*string</code> | The stored object key for the file. |

---

##### `OriginalFileName`<sup>Optional</sup> <a name="OriginalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.originalFileName"></a>

```go
OriginalFileName *string
```

- *Type:* *string

The original name of the uploaded file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#original_file_name GenaiKnowledgeBase#original_file_name}

---

##### `SizeInBytes`<sup>Optional</sup> <a name="SizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.sizeInBytes"></a>

```go
SizeInBytes *string
```

- *Type:* *string

The size of the file in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#size_in_bytes GenaiKnowledgeBase#size_in_bytes}

---

##### `StoredObjectKey`<sup>Optional</sup> <a name="StoredObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.storedObjectKey"></a>

```go
StoredObjectKey *string
```

- *Type:* *string

The stored object key for the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#stored_object_key GenaiKnowledgeBase#stored_object_key}

---

### GenaiKnowledgeBaseDatasourcesLastIndexingJob <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

&genaiknowledgebase.GenaiKnowledgeBaseDatasourcesLastIndexingJob {
	CompletedDatasources: *f64,
	DataSourceUuids: *[]*string,
	Phase: *string,
	Tokens: *f64,
	TotalDatasources: *f64,
	Uuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.completedDatasources">CompletedDatasources</a></code> | <code>*f64</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.dataSourceUuids">DataSourceUuids</a></code> | <code>*[]*string</code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.phase">Phase</a></code> | <code>*string</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.tokens">Tokens</a></code> | <code>*f64</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.totalDatasources">TotalDatasources</a></code> | <code>*f64</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.uuid">Uuid</a></code> | <code>*string</code> | UUID  of the last indexing job. |

---

##### `CompletedDatasources`<sup>Optional</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.completedDatasources"></a>

```go
CompletedDatasources *f64
```

- *Type:* *f64

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}

---

##### `DataSourceUuids`<sup>Optional</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.dataSourceUuids"></a>

```go
DataSourceUuids *[]*string
```

- *Type:* *[]*string

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}

---

##### `Phase`<sup>Optional</sup> <a name="Phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.phase"></a>

```go
Phase *string
```

- *Type:* *string

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.tokens"></a>

```go
Tokens *f64
```

- *Type:* *f64

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}

---

##### `TotalDatasources`<sup>Optional</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.totalDatasources"></a>

```go
TotalDatasources *f64
```

- *Type:* *f64

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

### GenaiKnowledgeBaseDatasourcesSpacesDataSource <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

&genaiknowledgebase.GenaiKnowledgeBaseDatasourcesSpacesDataSource {
	BucketName: *string,
	ItemPath: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.bucketName">BucketName</a></code> | <code>*string</code> | The name of the Spaces bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.itemPath">ItemPath</a></code> | <code>*string</code> | The path to the item in the bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.region">Region</a></code> | <code>*string</code> | The region of the Spaces bucket. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The name of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#bucket_name GenaiKnowledgeBase#bucket_name}

---

##### `ItemPath`<sup>Optional</sup> <a name="ItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.itemPath"></a>

```go
ItemPath *string
```

- *Type:* *string

The path to the item in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#item_path GenaiKnowledgeBase#item_path}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}

---

### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

&genaiknowledgebase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource {
	BaseUrl: *string,
	CrawlingOption: *string,
	EmbedMedia: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | The base URL to crawl. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.crawlingOption">CrawlingOption</a></code> | <code>*string</code> | Options for specifying how URLs found on pages should be handled. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.embedMedia">EmbedMedia</a></code> | <code>interface{}</code> | Whether to embed media content. |

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

The base URL to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#base_url GenaiKnowledgeBase#base_url}

---

##### `CrawlingOption`<sup>Optional</sup> <a name="CrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.crawlingOption"></a>

```go
CrawlingOption *string
```

- *Type:* *string

Options for specifying how URLs found on pages should be handled.

* UNKNOWN: Default unknown value
* SCOPED: Only include the base URL.
* PATH: Crawl the base URL and linked pages within the URL path.
* DOMAIN: Crawl the base URL and linked pages within the same domain.
* SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#crawling_option GenaiKnowledgeBase#crawling_option}

---

##### `EmbedMedia`<sup>Optional</sup> <a name="EmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.embedMedia"></a>

```go
EmbedMedia interface{}
```

- *Type:* interface{}

Whether to embed media content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#embed_media GenaiKnowledgeBase#embed_media}

---

### GenaiKnowledgeBaseLastIndexingJob <a name="GenaiKnowledgeBaseLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

&genaiknowledgebase.GenaiKnowledgeBaseLastIndexingJob {
	CompletedDatasources: *f64,
	DataSourceUuids: *[]*string,
	Phase: *string,
	Tokens: *f64,
	TotalDatasources: *f64,
	Uuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.completedDatasources">CompletedDatasources</a></code> | <code>*f64</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids">DataSourceUuids</a></code> | <code>*[]*string</code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.phase">Phase</a></code> | <code>*string</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.tokens">Tokens</a></code> | <code>*f64</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.totalDatasources">TotalDatasources</a></code> | <code>*f64</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.uuid">Uuid</a></code> | <code>*string</code> | UUID  of the last indexing job. |

---

##### `CompletedDatasources`<sup>Optional</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.completedDatasources"></a>

```go
CompletedDatasources *f64
```

- *Type:* *f64

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}

---

##### `DataSourceUuids`<sup>Optional</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids"></a>

```go
DataSourceUuids *[]*string
```

- *Type:* *[]*string

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}

---

##### `Phase`<sup>Optional</sup> <a name="Phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.phase"></a>

```go
Phase *string
```

- *Type:* *string

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.tokens"></a>

```go
Tokens *f64
```

- *Type:* *f64

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}

---

##### `TotalDatasources`<sup>Optional</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.totalDatasources"></a>

```go
TotalDatasources *f64
```

- *Type:* *f64

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseDatasourcesFileUploadDataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get"></a>

```go
func Get(index *f64) GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetOriginalFileName">ResetOriginalFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetSizeInBytes">ResetSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetStoredObjectKey">ResetStoredObjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOriginalFileName` <a name="ResetOriginalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetOriginalFileName"></a>

```go
func ResetOriginalFileName()
```

##### `ResetSizeInBytes` <a name="ResetSizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetSizeInBytes"></a>

```go
func ResetSizeInBytes()
```

##### `ResetStoredObjectKey` <a name="ResetStoredObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetStoredObjectKey"></a>

```go
func ResetStoredObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileNameInput">OriginalFileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytesInput">SizeInBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKeyInput">StoredObjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileName">OriginalFileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes">SizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey">StoredObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OriginalFileNameInput`<sup>Optional</sup> <a name="OriginalFileNameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileNameInput"></a>

```go
func OriginalFileNameInput() *string
```

- *Type:* *string

---

##### `SizeInBytesInput`<sup>Optional</sup> <a name="SizeInBytesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytesInput"></a>

```go
func SizeInBytesInput() *string
```

- *Type:* *string

---

##### `StoredObjectKeyInput`<sup>Optional</sup> <a name="StoredObjectKeyInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKeyInput"></a>

```go
func StoredObjectKeyInput() *string
```

- *Type:* *string

---

##### `OriginalFileName`<sup>Required</sup> <a name="OriginalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileName"></a>

```go
func OriginalFileName() *string
```

- *Type:* *string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes"></a>

```go
func SizeInBytes() *string
```

- *Type:* *string

---

##### `StoredObjectKey`<sup>Required</sup> <a name="StoredObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey"></a>

```go
func StoredObjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiKnowledgeBaseDatasourcesLastIndexingJobList <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJobList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseDatasourcesLastIndexingJobList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GenaiKnowledgeBaseDatasourcesLastIndexingJobList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get"></a>

```go
func Get(index *f64) GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetCompletedDatasources">ResetCompletedDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetDataSourceUuids">ResetDataSourceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetPhase">ResetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTotalDatasources">ResetTotalDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompletedDatasources` <a name="ResetCompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```go
func ResetCompletedDatasources()
```

##### `ResetDataSourceUuids` <a name="ResetDataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```go
func ResetDataSourceUuids()
```

##### `ResetPhase` <a name="ResetPhase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetPhase"></a>

```go
func ResetPhase()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTokens"></a>

```go
func ResetTokens()
```

##### `ResetTotalDatasources` <a name="ResetTotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTotalDatasources"></a>

```go
func ResetTotalDatasources()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetUuid"></a>

```go
func ResetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.finishedAt">FinishedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.startedAt">StartedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasourcesInput">CompletedDatasourcesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuidsInput">DataSourceUuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phaseInput">PhaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokensInput">TokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasourcesInput">TotalDatasourcesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasources">CompletedDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids">DataSourceUuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phase">Phase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasources">TotalDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.finishedAt"></a>

```go
func FinishedAt() *string
```

- *Type:* *string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```go
func KnowledgeBaseUuid() *string
```

- *Type:* *string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.startedAt"></a>

```go
func StartedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `CompletedDatasourcesInput`<sup>Optional</sup> <a name="CompletedDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```go
func CompletedDatasourcesInput() *f64
```

- *Type:* *f64

---

##### `DataSourceUuidsInput`<sup>Optional</sup> <a name="DataSourceUuidsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```go
func DataSourceUuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PhaseInput`<sup>Optional</sup> <a name="PhaseInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phaseInput"></a>

```go
func PhaseInput() *string
```

- *Type:* *string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokensInput"></a>

```go
func TokensInput() *f64
```

- *Type:* *f64

---

##### `TotalDatasourcesInput`<sup>Optional</sup> <a name="TotalDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```go
func TotalDatasourcesInput() *f64
```

- *Type:* *f64

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `CompletedDatasources`<sup>Required</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasources"></a>

```go
func CompletedDatasources() *f64
```

- *Type:* *f64

---

##### `DataSourceUuids`<sup>Required</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```go
func DataSourceUuids() *[]*string
```

- *Type:* *[]*string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phase"></a>

```go
func Phase() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `TotalDatasources`<sup>Required</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasources"></a>

```go
func TotalDatasources() *f64
```

- *Type:* *f64

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiKnowledgeBaseDatasourcesList <a name="GenaiKnowledgeBaseDatasourcesList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseDatasourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GenaiKnowledgeBaseDatasourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get"></a>

```go
func Get(index *f64) GenaiKnowledgeBaseDatasourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiKnowledgeBaseDatasourcesOutputReference <a name="GenaiKnowledgeBaseDatasourcesOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseDatasourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GenaiKnowledgeBaseDatasourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource">PutFileUploadDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob">PutLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource">PutSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource">PutWebCrawlerDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetFileUploadDataSource">ResetFileUploadDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetLastIndexingJob">ResetLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetSpacesDataSource">ResetSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetWebCrawlerDataSource">ResetWebCrawlerDataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFileUploadDataSource` <a name="PutFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource"></a>

```go
func PutFileUploadDataSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLastIndexingJob` <a name="PutLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob"></a>

```go
func PutLastIndexingJob(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSpacesDataSource` <a name="PutSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource"></a>

```go
func PutSpacesDataSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWebCrawlerDataSource` <a name="PutWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource"></a>

```go
func PutWebCrawlerDataSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFileUploadDataSource` <a name="ResetFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetFileUploadDataSource"></a>

```go
func ResetFileUploadDataSource()
```

##### `ResetLastIndexingJob` <a name="ResetLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetLastIndexingJob"></a>

```go
func ResetLastIndexingJob()
```

##### `ResetSpacesDataSource` <a name="ResetSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetSpacesDataSource"></a>

```go
func ResetSpacesDataSource()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetUuid"></a>

```go
func ResetUuid()
```

##### `ResetWebCrawlerDataSource` <a name="ResetWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetWebCrawlerDataSource"></a>

```go
func ResetWebCrawlerDataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSource">FileUploadDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList">GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJob">LastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList">GenaiKnowledgeBaseDatasourcesLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSource">SpacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList">GenaiKnowledgeBaseDatasourcesSpacesDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSource">WebCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSourceInput">FileUploadDataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJobInput">LastIndexingJobInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSourceInput">SpacesDataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSourceInput">WebCrawlerDataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FileUploadDataSource`<sup>Required</sup> <a name="FileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSource"></a>

```go
func FileUploadDataSource() GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList">GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList</a>

---

##### `LastIndexingJob`<sup>Required</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJob"></a>

```go
func LastIndexingJob() GenaiKnowledgeBaseDatasourcesLastIndexingJobList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList">GenaiKnowledgeBaseDatasourcesLastIndexingJobList</a>

---

##### `SpacesDataSource`<sup>Required</sup> <a name="SpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSource"></a>

```go
func SpacesDataSource() GenaiKnowledgeBaseDatasourcesSpacesDataSourceList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList">GenaiKnowledgeBaseDatasourcesSpacesDataSourceList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `WebCrawlerDataSource`<sup>Required</sup> <a name="WebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSource"></a>

```go
func WebCrawlerDataSource() GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList</a>

---

##### `FileUploadDataSourceInput`<sup>Optional</sup> <a name="FileUploadDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSourceInput"></a>

```go
func FileUploadDataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `LastIndexingJobInput`<sup>Optional</sup> <a name="LastIndexingJobInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJobInput"></a>

```go
func LastIndexingJobInput() interface{}
```

- *Type:* interface{}

---

##### `SpacesDataSourceInput`<sup>Optional</sup> <a name="SpacesDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSourceInput"></a>

```go
func SpacesDataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `WebCrawlerDataSourceInput`<sup>Optional</sup> <a name="WebCrawlerDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSourceInput"></a>

```go
func WebCrawlerDataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiKnowledgeBaseDatasourcesSpacesDataSourceList <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseDatasourcesSpacesDataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GenaiKnowledgeBaseDatasourcesSpacesDataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get"></a>

```go
func Get(index *f64) GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetItemPath">ResetItemPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetItemPath` <a name="ResetItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetItemPath"></a>

```go
func ResetItemPath()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPathInput">ItemPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPath">ItemPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `ItemPathInput`<sup>Optional</sup> <a name="ItemPathInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPathInput"></a>

```go
func ItemPathInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `ItemPath`<sup>Required</sup> <a name="ItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPath"></a>

```go
func ItemPath() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get"></a>

```go
func Get(index *f64) GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetCrawlingOption">ResetCrawlingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetEmbedMedia">ResetEmbedMedia</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetCrawlingOption` <a name="ResetCrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetCrawlingOption"></a>

```go
func ResetCrawlingOption()
```

##### `ResetEmbedMedia` <a name="ResetEmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetEmbedMedia"></a>

```go
func ResetEmbedMedia()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOptionInput">CrawlingOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMediaInput">EmbedMediaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption">CrawlingOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia">EmbedMedia</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `CrawlingOptionInput`<sup>Optional</sup> <a name="CrawlingOptionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOptionInput"></a>

```go
func CrawlingOptionInput() *string
```

- *Type:* *string

---

##### `EmbedMediaInput`<sup>Optional</sup> <a name="EmbedMediaInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMediaInput"></a>

```go
func EmbedMediaInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `CrawlingOption`<sup>Required</sup> <a name="CrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```go
func CrawlingOption() *string
```

- *Type:* *string

---

##### `EmbedMedia`<sup>Required</sup> <a name="EmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```go
func EmbedMedia() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiKnowledgeBaseLastIndexingJobList <a name="GenaiKnowledgeBaseLastIndexingJobList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseLastIndexingJobList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GenaiKnowledgeBaseLastIndexingJobList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get"></a>

```go
func Get(index *f64) GenaiKnowledgeBaseLastIndexingJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiKnowledgeBaseLastIndexingJobOutputReference <a name="GenaiKnowledgeBaseLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiknowledgebase"

genaiknowledgebase.NewGenaiKnowledgeBaseLastIndexingJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GenaiKnowledgeBaseLastIndexingJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources">ResetCompletedDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids">ResetDataSourceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase">ResetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources">ResetTotalDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompletedDatasources` <a name="ResetCompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```go
func ResetCompletedDatasources()
```

##### `ResetDataSourceUuids` <a name="ResetDataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```go
func ResetDataSourceUuids()
```

##### `ResetPhase` <a name="ResetPhase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase"></a>

```go
func ResetPhase()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens"></a>

```go
func ResetTokens()
```

##### `ResetTotalDatasources` <a name="ResetTotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources"></a>

```go
func ResetTotalDatasources()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid"></a>

```go
func ResetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt">FinishedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt">StartedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput">CompletedDatasourcesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput">DataSourceUuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput">PhaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput">TokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput">TotalDatasourcesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources">CompletedDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids">DataSourceUuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase">Phase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources">TotalDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt"></a>

```go
func FinishedAt() *string
```

- *Type:* *string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```go
func KnowledgeBaseUuid() *string
```

- *Type:* *string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt"></a>

```go
func StartedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `CompletedDatasourcesInput`<sup>Optional</sup> <a name="CompletedDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```go
func CompletedDatasourcesInput() *f64
```

- *Type:* *f64

---

##### `DataSourceUuidsInput`<sup>Optional</sup> <a name="DataSourceUuidsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```go
func DataSourceUuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PhaseInput`<sup>Optional</sup> <a name="PhaseInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput"></a>

```go
func PhaseInput() *string
```

- *Type:* *string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput"></a>

```go
func TokensInput() *f64
```

- *Type:* *f64

---

##### `TotalDatasourcesInput`<sup>Optional</sup> <a name="TotalDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```go
func TotalDatasourcesInput() *f64
```

- *Type:* *f64

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `CompletedDatasources`<sup>Required</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources"></a>

```go
func CompletedDatasources() *f64
```

- *Type:* *f64

---

##### `DataSourceUuids`<sup>Required</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```go
func DataSourceUuids() *[]*string
```

- *Type:* *[]*string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase"></a>

```go
func Phase() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `TotalDatasources`<sup>Required</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources"></a>

```go
func TotalDatasources() *f64
```

- *Type:* *f64

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



