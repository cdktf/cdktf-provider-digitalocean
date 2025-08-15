# `databaseOnlineMigration` Submodule <a name="`databaseOnlineMigration` Submodule" id="@cdktf/provider-digitalocean.databaseOnlineMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOnlineMigration <a name="DatabaseOnlineMigration" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration digitalocean_database_online_migration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databaseonlinemigration"

databaseonlinemigration.NewDatabaseOnlineMigration(scope Construct, id *string, config DatabaseOnlineMigrationConfig) DatabaseOnlineMigration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig">DatabaseOnlineMigrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig">DatabaseOnlineMigrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetDisableSsl">ResetDisableSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetIgnoreDbs">ResetIgnoreDbs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource"></a>

```go
func PutSource(value DatabaseOnlineMigrationSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---

##### `ResetDisableSsl` <a name="ResetDisableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetDisableSsl"></a>

```go
func ResetDisableSsl()
```

##### `ResetIgnoreDbs` <a name="ResetIgnoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetIgnoreDbs"></a>

```go
func ResetIgnoreDbs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseOnlineMigration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databaseonlinemigration"

databaseonlinemigration.DatabaseOnlineMigration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databaseonlinemigration"

databaseonlinemigration.DatabaseOnlineMigration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databaseonlinemigration"

databaseonlinemigration.DatabaseOnlineMigration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databaseonlinemigration"

databaseonlinemigration.DatabaseOnlineMigration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseOnlineMigration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseOnlineMigration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseOnlineMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOnlineMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.source">Source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference">DatabaseOnlineMigrationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSslInput">DisableSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbsInput">IgnoreDbsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSsl">DisableSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbs">IgnoreDbs</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.source"></a>

```go
func Source() DatabaseOnlineMigrationSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference">DatabaseOnlineMigrationSourceOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `DisableSslInput`<sup>Optional</sup> <a name="DisableSslInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSslInput"></a>

```go
func DisableSslInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreDbsInput`<sup>Optional</sup> <a name="IgnoreDbsInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbsInput"></a>

```go
func IgnoreDbsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.sourceInput"></a>

```go
func SourceInput() DatabaseOnlineMigrationSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `DisableSsl`<sup>Required</sup> <a name="DisableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSsl"></a>

```go
func DisableSsl() interface{}
```

- *Type:* interface{}

---

##### `IgnoreDbs`<sup>Required</sup> <a name="IgnoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbs"></a>

```go
func IgnoreDbs() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOnlineMigrationConfig <a name="DatabaseOnlineMigrationConfig" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databaseonlinemigration"

&databaseonlinemigration.DatabaseOnlineMigrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Source: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13.databaseOnlineMigration.DatabaseOnlineMigrationSource,
	DisableSsl: interface{},
	IgnoreDbs: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.disableSsl">DisableSsl</a></code> | <code>interface{}</code> | Disables SSL encryption when connecting to the source database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.ignoreDbs">IgnoreDbs</a></code> | <code>*[]*string</code> | The list of databases to be ignored during the migration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.source"></a>

```go
Source DatabaseOnlineMigrationSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#source DatabaseOnlineMigration#source}

---

##### `DisableSsl`<sup>Optional</sup> <a name="DisableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.disableSsl"></a>

```go
DisableSsl interface{}
```

- *Type:* interface{}

Disables SSL encryption when connecting to the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#disable_ssl DatabaseOnlineMigration#disable_ssl}

---

##### `IgnoreDbs`<sup>Optional</sup> <a name="IgnoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.ignoreDbs"></a>

```go
IgnoreDbs *[]*string
```

- *Type:* *[]*string

The list of databases to be ignored during the migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#ignore_dbs DatabaseOnlineMigration#ignore_dbs}

---

### DatabaseOnlineMigrationSource <a name="DatabaseOnlineMigrationSource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databaseonlinemigration"

&databaseonlinemigration.DatabaseOnlineMigrationSource {
	DbName: *string,
	Host: *string,
	Password: *string,
	Port: *f64,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.dbName">DbName</a></code> | <code>*string</code> | The name of the default database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.host">Host</a></code> | <code>*string</code> | The FQDN pointing to the database cluster's current primary node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.password">Password</a></code> | <code>*string</code> | The password of the database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.port">Port</a></code> | <code>*f64</code> | The port on which the database cluster is listening. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.username">Username</a></code> | <code>*string</code> | The default user of the database. |

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

The name of the default database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#db_name DatabaseOnlineMigration#db_name}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.host"></a>

```go
Host *string
```

- *Type:* *string

The FQDN pointing to the database cluster's current primary node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#host DatabaseOnlineMigration#host}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#password DatabaseOnlineMigration#password}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port on which the database cluster is listening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#port DatabaseOnlineMigration#port}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.username"></a>

```go
Username *string
```

- *Type:* *string

The default user of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_online_migration#username DatabaseOnlineMigration#username}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseOnlineMigrationSourceOutputReference <a name="DatabaseOnlineMigrationSourceOutputReference" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databaseonlinemigration"

databaseonlinemigration.NewDatabaseOnlineMigrationSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseOnlineMigrationSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseOnlineMigrationSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---



