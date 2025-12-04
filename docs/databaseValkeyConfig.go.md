# `databaseValkeyConfig` Submodule <a name="`databaseValkeyConfig` Submodule" id="@cdktf/provider-digitalocean.databaseValkeyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseValkeyConfig <a name="DatabaseValkeyConfig" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config digitalocean_database_valkey_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasevalkeyconfig"

databasevalkeyconfig.NewDatabaseValkeyConfig(scope Construct, id *string, config DatabaseValkeyConfigConfig) DatabaseValkeyConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig">DatabaseValkeyConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig">DatabaseValkeyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetAclChannelsDefault">ResetAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetFrequentSnapshots">ResetFrequentSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetIoThreads">ResetIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuDecayTime">ResetLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuLogFactor">ResetLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNotifyKeyspaceEvents">ResetNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNumberOfDatabases">ResetNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPersistence">ResetPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPubsubClientOutputBufferLimit">ResetPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetValkeyActiveExpireEffort">ResetValkeyActiveExpireEffort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAclChannelsDefault` <a name="ResetAclChannelsDefault" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetAclChannelsDefault"></a>

```go
func ResetAclChannelsDefault()
```

##### `ResetFrequentSnapshots` <a name="ResetFrequentSnapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetFrequentSnapshots"></a>

```go
func ResetFrequentSnapshots()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetIoThreads` <a name="ResetIoThreads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetIoThreads"></a>

```go
func ResetIoThreads()
```

##### `ResetLfuDecayTime` <a name="ResetLfuDecayTime" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuDecayTime"></a>

```go
func ResetLfuDecayTime()
```

##### `ResetLfuLogFactor` <a name="ResetLfuLogFactor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetLfuLogFactor"></a>

```go
func ResetLfuLogFactor()
```

##### `ResetNotifyKeyspaceEvents` <a name="ResetNotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNotifyKeyspaceEvents"></a>

```go
func ResetNotifyKeyspaceEvents()
```

##### `ResetNumberOfDatabases` <a name="ResetNumberOfDatabases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetNumberOfDatabases"></a>

```go
func ResetNumberOfDatabases()
```

##### `ResetPersistence` <a name="ResetPersistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPersistence"></a>

```go
func ResetPersistence()
```

##### `ResetPubsubClientOutputBufferLimit` <a name="ResetPubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetPubsubClientOutputBufferLimit"></a>

```go
func ResetPubsubClientOutputBufferLimit()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetValkeyActiveExpireEffort` <a name="ResetValkeyActiveExpireEffort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.resetValkeyActiveExpireEffort"></a>

```go
func ResetValkeyActiveExpireEffort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseValkeyConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasevalkeyconfig"

databasevalkeyconfig.DatabaseValkeyConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasevalkeyconfig"

databasevalkeyconfig.DatabaseValkeyConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasevalkeyconfig"

databasevalkeyconfig.DatabaseValkeyConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasevalkeyconfig"

databasevalkeyconfig.DatabaseValkeyConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseValkeyConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseValkeyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseValkeyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseValkeyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefaultInput">AclChannelsDefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshotsInput">FrequentSnapshotsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreadsInput">IoThreadsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTimeInput">LfuDecayTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactorInput">LfuLogFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEventsInput">NotifyKeyspaceEventsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabasesInput">NumberOfDatabasesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistenceInput">PersistenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimitInput">PubsubClientOutputBufferLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.sslInput">SslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffortInput">ValkeyActiveExpireEffortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefault">AclChannelsDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshots">FrequentSnapshots</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreads">IoThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTime">LfuDecayTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactor">LfuLogFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabases">NumberOfDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistence">Persistence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimit">PubsubClientOutputBufferLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ssl">Ssl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffort">ValkeyActiveExpireEffort</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AclChannelsDefaultInput`<sup>Optional</sup> <a name="AclChannelsDefaultInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefaultInput"></a>

```go
func AclChannelsDefaultInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `FrequentSnapshotsInput`<sup>Optional</sup> <a name="FrequentSnapshotsInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshotsInput"></a>

```go
func FrequentSnapshotsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IoThreadsInput`<sup>Optional</sup> <a name="IoThreadsInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreadsInput"></a>

```go
func IoThreadsInput() *f64
```

- *Type:* *f64

---

##### `LfuDecayTimeInput`<sup>Optional</sup> <a name="LfuDecayTimeInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTimeInput"></a>

```go
func LfuDecayTimeInput() *f64
```

- *Type:* *f64

---

##### `LfuLogFactorInput`<sup>Optional</sup> <a name="LfuLogFactorInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactorInput"></a>

```go
func LfuLogFactorInput() *f64
```

- *Type:* *f64

---

##### `NotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="NotifyKeyspaceEventsInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEventsInput"></a>

```go
func NotifyKeyspaceEventsInput() *string
```

- *Type:* *string

---

##### `NumberOfDatabasesInput`<sup>Optional</sup> <a name="NumberOfDatabasesInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabasesInput"></a>

```go
func NumberOfDatabasesInput() *f64
```

- *Type:* *f64

---

##### `PersistenceInput`<sup>Optional</sup> <a name="PersistenceInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistenceInput"></a>

```go
func PersistenceInput() *string
```

- *Type:* *string

---

##### `PubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="PubsubClientOutputBufferLimitInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimitInput"></a>

```go
func PubsubClientOutputBufferLimitInput() *f64
```

- *Type:* *f64

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.sslInput"></a>

```go
func SslInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `ValkeyActiveExpireEffortInput`<sup>Optional</sup> <a name="ValkeyActiveExpireEffortInput" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffortInput"></a>

```go
func ValkeyActiveExpireEffortInput() *f64
```

- *Type:* *f64

---

##### `AclChannelsDefault`<sup>Required</sup> <a name="AclChannelsDefault" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.aclChannelsDefault"></a>

```go
func AclChannelsDefault() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `FrequentSnapshots`<sup>Required</sup> <a name="FrequentSnapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.frequentSnapshots"></a>

```go
func FrequentSnapshots() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IoThreads`<sup>Required</sup> <a name="IoThreads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ioThreads"></a>

```go
func IoThreads() *f64
```

- *Type:* *f64

---

##### `LfuDecayTime`<sup>Required</sup> <a name="LfuDecayTime" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuDecayTime"></a>

```go
func LfuDecayTime() *f64
```

- *Type:* *f64

---

##### `LfuLogFactor`<sup>Required</sup> <a name="LfuLogFactor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.lfuLogFactor"></a>

```go
func LfuLogFactor() *f64
```

- *Type:* *f64

---

##### `NotifyKeyspaceEvents`<sup>Required</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.notifyKeyspaceEvents"></a>

```go
func NotifyKeyspaceEvents() *string
```

- *Type:* *string

---

##### `NumberOfDatabases`<sup>Required</sup> <a name="NumberOfDatabases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.numberOfDatabases"></a>

```go
func NumberOfDatabases() *f64
```

- *Type:* *f64

---

##### `Persistence`<sup>Required</sup> <a name="Persistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.persistence"></a>

```go
func Persistence() *string
```

- *Type:* *string

---

##### `PubsubClientOutputBufferLimit`<sup>Required</sup> <a name="PubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.pubsubClientOutputBufferLimit"></a>

```go
func PubsubClientOutputBufferLimit() *f64
```

- *Type:* *f64

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.ssl"></a>

```go
func Ssl() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `ValkeyActiveExpireEffort`<sup>Required</sup> <a name="ValkeyActiveExpireEffort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.valkeyActiveExpireEffort"></a>

```go
func ValkeyActiveExpireEffort() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseValkeyConfigConfig <a name="DatabaseValkeyConfigConfig" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasevalkeyconfig"

&databasevalkeyconfig.DatabaseValkeyConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	AclChannelsDefault: *string,
	FrequentSnapshots: interface{},
	Id: *string,
	IoThreads: *f64,
	LfuDecayTime: *f64,
	LfuLogFactor: *f64,
	NotifyKeyspaceEvents: *string,
	NumberOfDatabases: *f64,
	Persistence: *string,
	PubsubClientOutputBufferLimit: *f64,
	Ssl: interface{},
	Timeout: *f64,
	ValkeyActiveExpireEffort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | A unique identifier for the database cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.aclChannelsDefault">AclChannelsDefault</a></code> | <code>*string</code> | Determines default pub/sub channels' ACL for new users if ACL is not supplied. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.frequentSnapshots">FrequentSnapshots</a></code> | <code>interface{}</code> | Frequent RDB snapshots. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ioThreads">IoThreads</a></code> | <code>*f64</code> | The number of IO threads used by Valkey. Must be between 1 and 32. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuDecayTime">LfuDecayTime</a></code> | <code>*f64</code> | The decay time for Valkey's LFU cache eviction. Must be between 1 and 120. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuLogFactor">LfuLogFactor</a></code> | <code>*f64</code> | The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.notifyKeyspaceEvents">NotifyKeyspaceEvents</a></code> | <code>*string</code> | Set notify-keyspace-events option. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.numberOfDatabases">NumberOfDatabases</a></code> | <code>*f64</code> | The number of logical databases in the Valkey cluster. Must be between 1 and 128. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.persistence">Persistence</a></code> | <code>*string</code> | When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.pubsubClientOutputBufferLimit">PubsubClientOutputBufferLimit</a></code> | <code>*f64</code> | Set output buffer limit for pub / sub clients in MB. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ssl">Ssl</a></code> | <code>interface{}</code> | Whether to enable SSL/TLS for connections to the Valkey cluster. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | The timeout (in seconds) for Valkey client connections. |
| <code><a href="#@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.valkeyActiveExpireEffort">ValkeyActiveExpireEffort</a></code> | <code>*f64</code> | Active expire effort. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

A unique identifier for the database cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#cluster_id DatabaseValkeyConfig#cluster_id}

---

##### `AclChannelsDefault`<sup>Optional</sup> <a name="AclChannelsDefault" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.aclChannelsDefault"></a>

```go
AclChannelsDefault *string
```

- *Type:* *string

Determines default pub/sub channels' ACL for new users if ACL is not supplied.

When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#acl_channels_default DatabaseValkeyConfig#acl_channels_default}

---

##### `FrequentSnapshots`<sup>Optional</sup> <a name="FrequentSnapshots" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.frequentSnapshots"></a>

```go
FrequentSnapshots interface{}
```

- *Type:* interface{}

Frequent RDB snapshots.

When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when valkey_persistence is set to off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#frequent_snapshots DatabaseValkeyConfig#frequent_snapshots}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IoThreads`<sup>Optional</sup> <a name="IoThreads" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ioThreads"></a>

```go
IoThreads *f64
```

- *Type:* *f64

The number of IO threads used by Valkey. Must be between 1 and 32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#io_threads DatabaseValkeyConfig#io_threads}

---

##### `LfuDecayTime`<sup>Optional</sup> <a name="LfuDecayTime" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuDecayTime"></a>

```go
LfuDecayTime *f64
```

- *Type:* *f64

The decay time for Valkey's LFU cache eviction. Must be between 1 and 120.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#lfu_decay_time DatabaseValkeyConfig#lfu_decay_time}

---

##### `LfuLogFactor`<sup>Optional</sup> <a name="LfuLogFactor" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.lfuLogFactor"></a>

```go
LfuLogFactor *f64
```

- *Type:* *f64

The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#lfu_log_factor DatabaseValkeyConfig#lfu_log_factor}

---

##### `NotifyKeyspaceEvents`<sup>Optional</sup> <a name="NotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.notifyKeyspaceEvents"></a>

```go
NotifyKeyspaceEvents *string
```

- *Type:* *string

Set notify-keyspace-events option.

Requires at least K or E and accepts any combination of the following options. Setting the parameter to "" disables notifications.

K — Keyspace events
E — Keyevent events
g — Generic commands (e.g. DEL, EXPIRE, RENAME, ...)
$ — String commands
l — List commands
s — Set commands
h — Hash commands
z — Sorted set commands
t — Stream commands
d — Module key type events
x — Expired events
e — Evicted events
m — Key miss events
n — New key events
A — Alias for "g$lshztxed"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#notify_keyspace_events DatabaseValkeyConfig#notify_keyspace_events}

---

##### `NumberOfDatabases`<sup>Optional</sup> <a name="NumberOfDatabases" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.numberOfDatabases"></a>

```go
NumberOfDatabases *f64
```

- *Type:* *f64

The number of logical databases in the Valkey cluster. Must be between 1 and 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#number_of_databases DatabaseValkeyConfig#number_of_databases}

---

##### `Persistence`<sup>Optional</sup> <a name="Persistence" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.persistence"></a>

```go
Persistence *string
```

- *Type:* *string

When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed.

Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#persistence DatabaseValkeyConfig#persistence}

---

##### `PubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="PubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.pubsubClientOutputBufferLimit"></a>

```go
PubsubClientOutputBufferLimit *f64
```

- *Type:* *f64

Set output buffer limit for pub / sub clients in MB.

The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#pubsub_client_output_buffer_limit DatabaseValkeyConfig#pubsub_client_output_buffer_limit}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.ssl"></a>

```go
Ssl interface{}
```

- *Type:* interface{}

Whether to enable SSL/TLS for connections to the Valkey cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#ssl DatabaseValkeyConfig#ssl}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

The timeout (in seconds) for Valkey client connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#timeout DatabaseValkeyConfig#timeout}

---

##### `ValkeyActiveExpireEffort`<sup>Optional</sup> <a name="ValkeyActiveExpireEffort" id="@cdktf/provider-digitalocean.databaseValkeyConfig.DatabaseValkeyConfigConfig.property.valkeyActiveExpireEffort"></a>

```go
ValkeyActiveExpireEffort *f64
```

- *Type:* *f64

Active expire effort.

Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#valkey_active_expire_effort DatabaseValkeyConfig#valkey_active_expire_effort}

---



