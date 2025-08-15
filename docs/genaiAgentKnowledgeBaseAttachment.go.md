# `genaiAgentKnowledgeBaseAttachment` Submodule <a name="`genaiAgentKnowledgeBaseAttachment` Submodule" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiAgentKnowledgeBaseAttachment <a name="GenaiAgentKnowledgeBaseAttachment" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_agent_knowledge_base_attachment digitalocean_genai_agent_knowledge_base_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiagentknowledgebaseattachment"

genaiagentknowledgebaseattachment.NewGenaiAgentKnowledgeBaseAttachment(scope Construct, id *string, config GenaiAgentKnowledgeBaseAttachmentConfig) GenaiAgentKnowledgeBaseAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig">GenaiAgentKnowledgeBaseAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig">GenaiAgentKnowledgeBaseAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiAgentKnowledgeBaseAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiagentknowledgebaseattachment"

genaiagentknowledgebaseattachment.GenaiAgentKnowledgeBaseAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiagentknowledgebaseattachment"

genaiagentknowledgebaseattachment.GenaiAgentKnowledgeBaseAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiagentknowledgebaseattachment"

genaiagentknowledgebaseattachment.GenaiAgentKnowledgeBaseAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiagentknowledgebaseattachment"

genaiagentknowledgebaseattachment.GenaiAgentKnowledgeBaseAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GenaiAgentKnowledgeBaseAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GenaiAgentKnowledgeBaseAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GenaiAgentKnowledgeBaseAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_agent_knowledge_base_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GenaiAgentKnowledgeBaseAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.agentUuidInput">AgentUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.knowledgeBaseUuidInput">KnowledgeBaseUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.agentUuid">AgentUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentUuidInput`<sup>Optional</sup> <a name="AgentUuidInput" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.agentUuidInput"></a>

```go
func AgentUuidInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KnowledgeBaseUuidInput`<sup>Optional</sup> <a name="KnowledgeBaseUuidInput" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.knowledgeBaseUuidInput"></a>

```go
func KnowledgeBaseUuidInput() *string
```

- *Type:* *string

---

##### `AgentUuid`<sup>Required</sup> <a name="AgentUuid" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.agentUuid"></a>

```go
func AgentUuid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.knowledgeBaseUuid"></a>

```go
func KnowledgeBaseUuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiAgentKnowledgeBaseAttachmentConfig <a name="GenaiAgentKnowledgeBaseAttachmentConfig" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiagentknowledgebaseattachment"

&genaiagentknowledgebaseattachment.GenaiAgentKnowledgeBaseAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgentUuid: *string,
	KnowledgeBaseUuid: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.agentUuid">AgentUuid</a></code> | <code>*string</code> | A unique identifier for an agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>*string</code> | A unique identifier for a knowledge base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_agent_knowledge_base_attachment#id GenaiAgentKnowledgeBaseAttachment#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentUuid`<sup>Required</sup> <a name="AgentUuid" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.agentUuid"></a>

```go
AgentUuid *string
```

- *Type:* *string

A unique identifier for an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_agent_knowledge_base_attachment#agent_uuid GenaiAgentKnowledgeBaseAttachment#agent_uuid}

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.knowledgeBaseUuid"></a>

```go
KnowledgeBaseUuid *string
```

- *Type:* *string

A unique identifier for a knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_agent_knowledge_base_attachment#knowledge_base_uuid GenaiAgentKnowledgeBaseAttachment#knowledge_base_uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_agent_knowledge_base_attachment#id GenaiAgentKnowledgeBaseAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



