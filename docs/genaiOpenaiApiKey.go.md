# `genaiOpenaiApiKey` Submodule <a name="`genaiOpenaiApiKey` Submodule" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiOpenaiApiKey <a name="GenaiOpenaiApiKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key digitalocean_genai_openai_api_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

genaiopenaiapikey.NewGenaiOpenaiApiKey(scope Construct, id *string, config GenaiOpenaiApiKeyConfig) GenaiOpenaiApiKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig">GenaiOpenaiApiKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig">GenaiOpenaiApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel">PutModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetModel">ResetModel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutModel` <a name="PutModel" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel"></a>

```go
func PutModel(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.putModel.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetId"></a>

```go
func ResetId()
```

##### `ResetModel` <a name="ResetModel" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.resetModel"></a>

```go
func ResetModel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

genaiopenaiapikey.GenaiOpenaiApiKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

genaiopenaiapikey.GenaiOpenaiApiKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

genaiopenaiapikey.GenaiOpenaiApiKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

genaiopenaiapikey.GenaiOpenaiApiKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GenaiOpenaiApiKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GenaiOpenaiApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GenaiOpenaiApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.deletedAt">DeletedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.model">Model</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList">GenaiOpenaiApiKeyModelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.modelInput">ModelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.deletedAt"></a>

```go
func DeletedAt() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.model"></a>

```go
func Model() GenaiOpenaiApiKeyModelList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList">GenaiOpenaiApiKeyModelList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.modelInput"></a>

```go
func ModelInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiOpenaiApiKeyConfig <a name="GenaiOpenaiApiKeyConfig" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

&genaiopenaiapikey.GenaiOpenaiApiKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiKey: *string,
	Name: *string,
	Id: *string,
	Model: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | The OpenAI API key. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.name">Name</a></code> | <code>*string</code> | A name for the API key. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#id GenaiOpenaiApiKey#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.model">Model</a></code> | <code>interface{}</code> | model block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

The OpenAI API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#api_key GenaiOpenaiApiKey#api_key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#id GenaiOpenaiApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyConfig.property.model"></a>

```go
Model interface{}
```

- *Type:* interface{}

model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#model GenaiOpenaiApiKey#model}

---

### GenaiOpenaiApiKeyModel <a name="GenaiOpenaiApiKeyModel" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

&genaiopenaiapikey.GenaiOpenaiApiKeyModel {
	Agreement: interface{},
	InferenceName: *string,
	InferenceVersion: *string,
	IsFoundational: interface{},
	Name: *string,
	ParentUuid: *string,
	Provider: *string,
	UploadComplete: interface{},
	Url: *string,
	Usecases: *[]*string,
	Versions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.agreement">Agreement</a></code> | <code>interface{}</code> | agreement block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceName">InferenceName</a></code> | <code>*string</code> | Inference name of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceVersion">InferenceVersion</a></code> | <code>*string</code> | Infernce version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.isFoundational">IsFoundational</a></code> | <code>interface{}</code> | Indicates if the Model Base is foundational. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.name">Name</a></code> | <code>*string</code> | Name of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.parentUuid">ParentUuid</a></code> | <code>*string</code> | Parent UUID of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.provider">Provider</a></code> | <code>*string</code> | Provider of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.uploadComplete">UploadComplete</a></code> | <code>interface{}</code> | Indicates if the Model upload is complete. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.url">Url</a></code> | <code>*string</code> | URL of the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.usecases">Usecases</a></code> | <code>*[]*string</code> | List of Usecases for the Model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.versions">Versions</a></code> | <code>interface{}</code> | versions block. |

---

##### `Agreement`<sup>Optional</sup> <a name="Agreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.agreement"></a>

```go
Agreement interface{}
```

- *Type:* interface{}

agreement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#agreement GenaiOpenaiApiKey#agreement}

---

##### `InferenceName`<sup>Optional</sup> <a name="InferenceName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceName"></a>

```go
InferenceName *string
```

- *Type:* *string

Inference name of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#inference_name GenaiOpenaiApiKey#inference_name}

---

##### `InferenceVersion`<sup>Optional</sup> <a name="InferenceVersion" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.inferenceVersion"></a>

```go
InferenceVersion *string
```

- *Type:* *string

Infernce version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#inference_version GenaiOpenaiApiKey#inference_version}

---

##### `IsFoundational`<sup>Optional</sup> <a name="IsFoundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.isFoundational"></a>

```go
IsFoundational interface{}
```

- *Type:* interface{}

Indicates if the Model Base is foundational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#is_foundational GenaiOpenaiApiKey#is_foundational}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `ParentUuid`<sup>Optional</sup> <a name="ParentUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.parentUuid"></a>

```go
ParentUuid *string
```

- *Type:* *string

Parent UUID of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#parent_uuid GenaiOpenaiApiKey#parent_uuid}

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.provider"></a>

```go
Provider *string
```

- *Type:* *string

Provider of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#provider GenaiOpenaiApiKey#provider}

---

##### `UploadComplete`<sup>Optional</sup> <a name="UploadComplete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.uploadComplete"></a>

```go
UploadComplete interface{}
```

- *Type:* interface{}

Indicates if the Model upload is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#upload_complete GenaiOpenaiApiKey#upload_complete}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.url"></a>

```go
Url *string
```

- *Type:* *string

URL of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#url GenaiOpenaiApiKey#url}

---

##### `Usecases`<sup>Optional</sup> <a name="Usecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.usecases"></a>

```go
Usecases *[]*string
```

- *Type:* *[]*string

List of Usecases for the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#usecases GenaiOpenaiApiKey#usecases}

---

##### `Versions`<sup>Optional</sup> <a name="Versions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModel.property.versions"></a>

```go
Versions interface{}
```

- *Type:* interface{}

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#versions GenaiOpenaiApiKey#versions}

---

### GenaiOpenaiApiKeyModelAgreement <a name="GenaiOpenaiApiKeyModelAgreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

&genaiopenaiapikey.GenaiOpenaiApiKeyModelAgreement {
	Description: *string,
	Name: *string,
	Url: *string,
	Uuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.description">Description</a></code> | <code>*string</code> | Description of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.name">Name</a></code> | <code>*string</code> | Name of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.url">Url</a></code> | <code>*string</code> | URL of the agreement. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.uuid">Uuid</a></code> | <code>*string</code> | UUID of the agreement. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#description GenaiOpenaiApiKey#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.url"></a>

```go
Url *string
```

- *Type:* *string

URL of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#url GenaiOpenaiApiKey#url}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreement.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

UUID of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#uuid GenaiOpenaiApiKey#uuid}

---

### GenaiOpenaiApiKeyModelVersions <a name="GenaiOpenaiApiKeyModelVersions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

&genaiopenaiapikey.GenaiOpenaiApiKeyModelVersions {
	Major: *f64,
	Minor: *f64,
	Patch: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.major">Major</a></code> | <code>*f64</code> | Major version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.minor">Minor</a></code> | <code>*f64</code> | Minor version of the model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.patch">Patch</a></code> | <code>*f64</code> | Patch version of the model. |

---

##### `Major`<sup>Optional</sup> <a name="Major" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.major"></a>

```go
Major *f64
```

- *Type:* *f64

Major version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#major GenaiOpenaiApiKey#major}

---

##### `Minor`<sup>Optional</sup> <a name="Minor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.minor"></a>

```go
Minor *f64
```

- *Type:* *f64

Minor version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#minor GenaiOpenaiApiKey#minor}

---

##### `Patch`<sup>Optional</sup> <a name="Patch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersions.property.patch"></a>

```go
Patch *f64
```

- *Type:* *f64

Patch version of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_openai_api_key#patch GenaiOpenaiApiKey#patch}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiOpenaiApiKeyModelAgreementList <a name="GenaiOpenaiApiKeyModelAgreementList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

genaiopenaiapikey.NewGenaiOpenaiApiKeyModelAgreementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GenaiOpenaiApiKeyModelAgreementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get"></a>

```go
func Get(index *f64) GenaiOpenaiApiKeyModelAgreementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiOpenaiApiKeyModelAgreementOutputReference <a name="GenaiOpenaiApiKeyModelAgreementOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

genaiopenaiapikey.NewGenaiOpenaiApiKeyModelAgreementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GenaiOpenaiApiKeyModelAgreementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.resetUuid"></a>

```go
func ResetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiOpenaiApiKeyModelList <a name="GenaiOpenaiApiKeyModelList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

genaiopenaiapikey.NewGenaiOpenaiApiKeyModelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GenaiOpenaiApiKeyModelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get"></a>

```go
func Get(index *f64) GenaiOpenaiApiKeyModelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiOpenaiApiKeyModelOutputReference <a name="GenaiOpenaiApiKeyModelOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

genaiopenaiapikey.NewGenaiOpenaiApiKeyModelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GenaiOpenaiApiKeyModelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement">PutAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions">PutVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetAgreement">ResetAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceName">ResetInferenceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceVersion">ResetInferenceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetIsFoundational">ResetIsFoundational</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetParentUuid">ResetParentUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetProvider">ResetProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUploadComplete">ResetUploadComplete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUsecases">ResetUsecases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetVersions">ResetVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgreement` <a name="PutAgreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement"></a>

```go
func PutAgreement(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putAgreement.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVersions` <a name="PutVersions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions"></a>

```go
func PutVersions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.putVersions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAgreement` <a name="ResetAgreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetAgreement"></a>

```go
func ResetAgreement()
```

##### `ResetInferenceName` <a name="ResetInferenceName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceName"></a>

```go
func ResetInferenceName()
```

##### `ResetInferenceVersion` <a name="ResetInferenceVersion" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetInferenceVersion"></a>

```go
func ResetInferenceVersion()
```

##### `ResetIsFoundational` <a name="ResetIsFoundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetIsFoundational"></a>

```go
func ResetIsFoundational()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetParentUuid` <a name="ResetParentUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetParentUuid"></a>

```go
func ResetParentUuid()
```

##### `ResetProvider` <a name="ResetProvider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetProvider"></a>

```go
func ResetProvider()
```

##### `ResetUploadComplete` <a name="ResetUploadComplete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUploadComplete"></a>

```go
func ResetUploadComplete()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUsecases` <a name="ResetUsecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetUsecases"></a>

```go
func ResetUsecases()
```

##### `ResetVersions` <a name="ResetVersions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.resetVersions"></a>

```go
func ResetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreement">Agreement</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList">GenaiOpenaiApiKeyModelAgreementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList">GenaiOpenaiApiKeyModelVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreementInput">AgreementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceNameInput">InferenceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersionInput">InferenceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundationalInput">IsFoundationalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuidInput">ParentUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.providerInput">ProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadCompleteInput">UploadCompleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecasesInput">UsecasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versionsInput">VersionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceName">InferenceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersion">InferenceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundational">IsFoundational</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuid">ParentUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadComplete">UploadComplete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecases">Usecases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Agreement`<sup>Required</sup> <a name="Agreement" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreement"></a>

```go
func Agreement() GenaiOpenaiApiKeyModelAgreementList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelAgreementList">GenaiOpenaiApiKeyModelAgreementList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versions"></a>

```go
func Versions() GenaiOpenaiApiKeyModelVersionsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList">GenaiOpenaiApiKeyModelVersionsList</a>

---

##### `AgreementInput`<sup>Optional</sup> <a name="AgreementInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.agreementInput"></a>

```go
func AgreementInput() interface{}
```

- *Type:* interface{}

---

##### `InferenceNameInput`<sup>Optional</sup> <a name="InferenceNameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceNameInput"></a>

```go
func InferenceNameInput() *string
```

- *Type:* *string

---

##### `InferenceVersionInput`<sup>Optional</sup> <a name="InferenceVersionInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersionInput"></a>

```go
func InferenceVersionInput() *string
```

- *Type:* *string

---

##### `IsFoundationalInput`<sup>Optional</sup> <a name="IsFoundationalInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundationalInput"></a>

```go
func IsFoundationalInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentUuidInput`<sup>Optional</sup> <a name="ParentUuidInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuidInput"></a>

```go
func ParentUuidInput() *string
```

- *Type:* *string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.providerInput"></a>

```go
func ProviderInput() *string
```

- *Type:* *string

---

##### `UploadCompleteInput`<sup>Optional</sup> <a name="UploadCompleteInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadCompleteInput"></a>

```go
func UploadCompleteInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsecasesInput`<sup>Optional</sup> <a name="UsecasesInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecasesInput"></a>

```go
func UsecasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.versionsInput"></a>

```go
func VersionsInput() interface{}
```

- *Type:* interface{}

---

##### `InferenceName`<sup>Required</sup> <a name="InferenceName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceName"></a>

```go
func InferenceName() *string
```

- *Type:* *string

---

##### `InferenceVersion`<sup>Required</sup> <a name="InferenceVersion" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.inferenceVersion"></a>

```go
func InferenceVersion() *string
```

- *Type:* *string

---

##### `IsFoundational`<sup>Required</sup> <a name="IsFoundational" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.isFoundational"></a>

```go
func IsFoundational() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentUuid`<sup>Required</sup> <a name="ParentUuid" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.parentUuid"></a>

```go
func ParentUuid() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `UploadComplete`<sup>Required</sup> <a name="UploadComplete" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.uploadComplete"></a>

```go
func UploadComplete() interface{}
```

- *Type:* interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Usecases`<sup>Required</sup> <a name="Usecases" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.usecases"></a>

```go
func Usecases() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiOpenaiApiKeyModelVersionsList <a name="GenaiOpenaiApiKeyModelVersionsList" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

genaiopenaiapikey.NewGenaiOpenaiApiKeyModelVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GenaiOpenaiApiKeyModelVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get"></a>

```go
func Get(index *f64) GenaiOpenaiApiKeyModelVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GenaiOpenaiApiKeyModelVersionsOutputReference <a name="GenaiOpenaiApiKeyModelVersionsOutputReference" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/genaiopenaiapikey"

genaiopenaiapikey.NewGenaiOpenaiApiKeyModelVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GenaiOpenaiApiKeyModelVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMajor">ResetMajor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMinor">ResetMinor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetPatch">ResetPatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMajor` <a name="ResetMajor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMajor"></a>

```go
func ResetMajor()
```

##### `ResetMinor` <a name="ResetMinor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetMinor"></a>

```go
func ResetMinor()
```

##### `ResetPatch` <a name="ResetPatch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.resetPatch"></a>

```go
func ResetPatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.majorInput">MajorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minorInput">MinorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patchInput">PatchInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.major">Major</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minor">Minor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patch">Patch</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MajorInput`<sup>Optional</sup> <a name="MajorInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.majorInput"></a>

```go
func MajorInput() *f64
```

- *Type:* *f64

---

##### `MinorInput`<sup>Optional</sup> <a name="MinorInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minorInput"></a>

```go
func MinorInput() *f64
```

- *Type:* *f64

---

##### `PatchInput`<sup>Optional</sup> <a name="PatchInput" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patchInput"></a>

```go
func PatchInput() *f64
```

- *Type:* *f64

---

##### `Major`<sup>Required</sup> <a name="Major" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.major"></a>

```go
func Major() *f64
```

- *Type:* *f64

---

##### `Minor`<sup>Required</sup> <a name="Minor" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.minor"></a>

```go
func Minor() *f64
```

- *Type:* *f64

---

##### `Patch`<sup>Required</sup> <a name="Patch" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.patch"></a>

```go
func Patch() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiOpenaiApiKey.GenaiOpenaiApiKeyModelVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



