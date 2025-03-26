# `databaseRedisConfig` Submodule <a name="`databaseRedisConfig` Submodule" id="@cdktf/provider-digitalocean.databaseRedisConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseRedisConfig <a name="DatabaseRedisConfig" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config digitalocean_database_redis_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseredisconfig"

databaseredisconfig.NewDatabaseRedisConfig(scope Construct, id *string, config DatabaseRedisConfigConfig) DatabaseRedisConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig">DatabaseRedisConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig">DatabaseRedisConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetAclChannelsDefault">ResetAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetIoThreads">ResetIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuDecayTime">ResetLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuLogFactor">ResetLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetMaxmemoryPolicy">ResetMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNotifyKeyspaceEvents">ResetNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNumberOfDatabases">ResetNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPersistence">ResetPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPubsubClientOutputBufferLimit">ResetPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAclChannelsDefault` <a name="ResetAclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetAclChannelsDefault"></a>

```go
func ResetAclChannelsDefault()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetIoThreads` <a name="ResetIoThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetIoThreads"></a>

```go
func ResetIoThreads()
```

##### `ResetLfuDecayTime` <a name="ResetLfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuDecayTime"></a>

```go
func ResetLfuDecayTime()
```

##### `ResetLfuLogFactor` <a name="ResetLfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuLogFactor"></a>

```go
func ResetLfuLogFactor()
```

##### `ResetMaxmemoryPolicy` <a name="ResetMaxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetMaxmemoryPolicy"></a>

```go
func ResetMaxmemoryPolicy()
```

##### `ResetNotifyKeyspaceEvents` <a name="ResetNotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNotifyKeyspaceEvents"></a>

```go
func ResetNotifyKeyspaceEvents()
```

##### `ResetNumberOfDatabases` <a name="ResetNumberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNumberOfDatabases"></a>

```go
func ResetNumberOfDatabases()
```

##### `ResetPersistence` <a name="ResetPersistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPersistence"></a>

```go
func ResetPersistence()
```

##### `ResetPubsubClientOutputBufferLimit` <a name="ResetPubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPubsubClientOutputBufferLimit"></a>

```go
func ResetPubsubClientOutputBufferLimit()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetTimeout"></a>

```go
func ResetTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseRedisConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseredisconfig"

databaseredisconfig.DatabaseRedisConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseredisconfig"

databaseredisconfig.DatabaseRedisConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseredisconfig"

databaseredisconfig.DatabaseRedisConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseredisconfig"

databaseredisconfig.DatabaseRedisConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseRedisConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseRedisConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseRedisConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseRedisConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefaultInput">AclChannelsDefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreadsInput">IoThreadsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTimeInput">LfuDecayTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactorInput">LfuLogFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicyInput">MaxmemoryPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEventsInput">NotifyKeyspaceEventsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabasesInput">NumberOfDatabasesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistenceInput">PersistenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimitInput">PubsubClientOutputBufferLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.sslInput">SslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefault">AclChannelsDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreads">IoThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTime">LfuDecayTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactor">LfuLogFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicy">MaxmemoryPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabases">NumberOfDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistence">Persistence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimit">PubsubClientOutputBufferLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ssl">Ssl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AclChannelsDefaultInput`<sup>Optional</sup> <a name="AclChannelsDefaultInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefaultInput"></a>

```go
func AclChannelsDefaultInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IoThreadsInput`<sup>Optional</sup> <a name="IoThreadsInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreadsInput"></a>

```go
func IoThreadsInput() *f64
```

- *Type:* *f64

---

##### `LfuDecayTimeInput`<sup>Optional</sup> <a name="LfuDecayTimeInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTimeInput"></a>

```go
func LfuDecayTimeInput() *f64
```

- *Type:* *f64

---

##### `LfuLogFactorInput`<sup>Optional</sup> <a name="LfuLogFactorInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactorInput"></a>

```go
func LfuLogFactorInput() *f64
```

- *Type:* *f64

---

##### `MaxmemoryPolicyInput`<sup>Optional</sup> <a name="MaxmemoryPolicyInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicyInput"></a>

```go
func MaxmemoryPolicyInput() *string
```

- *Type:* *string

---

##### `NotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="NotifyKeyspaceEventsInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEventsInput"></a>

```go
func NotifyKeyspaceEventsInput() *string
```

- *Type:* *string

---

##### `NumberOfDatabasesInput`<sup>Optional</sup> <a name="NumberOfDatabasesInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabasesInput"></a>

```go
func NumberOfDatabasesInput() *f64
```

- *Type:* *f64

---

##### `PersistenceInput`<sup>Optional</sup> <a name="PersistenceInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistenceInput"></a>

```go
func PersistenceInput() *string
```

- *Type:* *string

---

##### `PubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="PubsubClientOutputBufferLimitInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimitInput"></a>

```go
func PubsubClientOutputBufferLimitInput() *f64
```

- *Type:* *f64

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.sslInput"></a>

```go
func SslInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `AclChannelsDefault`<sup>Required</sup> <a name="AclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefault"></a>

```go
func AclChannelsDefault() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IoThreads`<sup>Required</sup> <a name="IoThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreads"></a>

```go
func IoThreads() *f64
```

- *Type:* *f64

---

##### `LfuDecayTime`<sup>Required</sup> <a name="LfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTime"></a>

```go
func LfuDecayTime() *f64
```

- *Type:* *f64

---

##### `LfuLogFactor`<sup>Required</sup> <a name="LfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactor"></a>

```go
func LfuLogFactor() *f64
```

- *Type:* *f64

---

##### `MaxmemoryPolicy`<sup>Required</sup> <a name="MaxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicy"></a>

```go
func MaxmemoryPolicy() *string
```

- *Type:* *string

---

##### `NotifyKeyspaceEvents`<sup>Required</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEvents"></a>

```go
func NotifyKeyspaceEvents() *string
```

- *Type:* *string

---

##### `NumberOfDatabases`<sup>Required</sup> <a name="NumberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabases"></a>

```go
func NumberOfDatabases() *f64
```

- *Type:* *f64

---

##### `Persistence`<sup>Required</sup> <a name="Persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistence"></a>

```go
func Persistence() *string
```

- *Type:* *string

---

##### `PubsubClientOutputBufferLimit`<sup>Required</sup> <a name="PubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimit"></a>

```go
func PubsubClientOutputBufferLimit() *f64
```

- *Type:* *f64

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ssl"></a>

```go
func Ssl() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseRedisConfigConfig <a name="DatabaseRedisConfigConfig" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseredisconfig"

&databaseredisconfig.DatabaseRedisConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	AclChannelsDefault: *string,
	Id: *string,
	IoThreads: *f64,
	LfuDecayTime: *f64,
	LfuLogFactor: *f64,
	MaxmemoryPolicy: *string,
	NotifyKeyspaceEvents: *string,
	NumberOfDatabases: *f64,
	Persistence: *string,
	PubsubClientOutputBufferLimit: *f64,
	Ssl: interface{},
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.aclChannelsDefault">AclChannelsDefault</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#id DatabaseRedisConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ioThreads">IoThreads</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuDecayTime">LfuDecayTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuLogFactor">LfuLogFactor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.maxmemoryPolicy">MaxmemoryPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.numberOfDatabases">NumberOfDatabases</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.persistence">Persistence</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.pubsubClientOutputBufferLimit">PubsubClientOutputBufferLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ssl">Ssl</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}.

---

##### `AclChannelsDefault`<sup>Optional</sup> <a name="AclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.aclChannelsDefault"></a>

```go
AclChannelsDefault *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#id DatabaseRedisConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IoThreads`<sup>Optional</sup> <a name="IoThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ioThreads"></a>

```go
IoThreads *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}.

---

##### `LfuDecayTime`<sup>Optional</sup> <a name="LfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuDecayTime"></a>

```go
LfuDecayTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}.

---

##### `LfuLogFactor`<sup>Optional</sup> <a name="LfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuLogFactor"></a>

```go
LfuLogFactor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}.

---

##### `MaxmemoryPolicy`<sup>Optional</sup> <a name="MaxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.maxmemoryPolicy"></a>

```go
MaxmemoryPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}.

---

##### `NotifyKeyspaceEvents`<sup>Optional</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.notifyKeyspaceEvents"></a>

```go
NotifyKeyspaceEvents *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}.

---

##### `NumberOfDatabases`<sup>Optional</sup> <a name="NumberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.numberOfDatabases"></a>

```go
NumberOfDatabases *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}.

---

##### `Persistence`<sup>Optional</sup> <a name="Persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.persistence"></a>

```go
Persistence *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}.

---

##### `PubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="PubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.pubsubClientOutputBufferLimit"></a>

```go
PubsubClientOutputBufferLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}.

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ssl"></a>

```go
Ssl interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}.

---



