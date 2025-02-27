# `databaseMysqlConfig` Submodule <a name="`databaseMysqlConfig` Submodule" id="@cdktf/provider-digitalocean.databaseMysqlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMysqlConfig <a name="DatabaseMysqlConfig" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config digitalocean_database_mysql_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databasemysqlconfig"

databasemysqlconfig.NewDatabaseMysqlConfig(scope Construct, id *string, config DatabaseMysqlConfigConfig) DatabaseMysqlConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig">DatabaseMysqlConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig">DatabaseMysqlConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupHour">ResetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupMinute">ResetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBinlogRetentionPeriod">ResetBinlogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetDefaultTimeZone">ResetDefaultTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetGroupConcatMaxLen">ResetGroupConcatMaxLen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInformationSchemaStatsExpiry">ResetInformationSchemaStatsExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtMinTokenSize">ResetInnodbFtMinTokenSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtServerStopwordTable">ResetInnodbFtServerStopwordTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLockWaitTimeout">ResetInnodbLockWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLogBufferSize">ResetInnodbLogBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbOnlineAlterLogMaxSize">ResetInnodbOnlineAlterLogMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbPrintAllDeadlocks">ResetInnodbPrintAllDeadlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbRollbackOnTimeout">ResetInnodbRollbackOnTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInteractiveTimeout">ResetInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInternalTmpMemStorageEngine">ResetInternalTmpMemStorageEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetLongQueryTime">ResetLongQueryTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxAllowedPacket">ResetMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxHeapTableSize">ResetMaxHeapTableSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetReadTimeout">ResetNetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetWriteTimeout">ResetNetWriteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSlowQueryLog">ResetSlowQueryLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSortBufferSize">ResetSortBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlMode">ResetSqlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlRequirePrimaryKey">ResetSqlRequirePrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetTmpTableSize">ResetTmpTableSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetWaitTimeout">ResetWaitTimeout</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackupHour` <a name="ResetBackupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupHour"></a>

```go
func ResetBackupHour()
```

##### `ResetBackupMinute` <a name="ResetBackupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupMinute"></a>

```go
func ResetBackupMinute()
```

##### `ResetBinlogRetentionPeriod` <a name="ResetBinlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBinlogRetentionPeriod"></a>

```go
func ResetBinlogRetentionPeriod()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetDefaultTimeZone` <a name="ResetDefaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetDefaultTimeZone"></a>

```go
func ResetDefaultTimeZone()
```

##### `ResetGroupConcatMaxLen` <a name="ResetGroupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetGroupConcatMaxLen"></a>

```go
func ResetGroupConcatMaxLen()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetInformationSchemaStatsExpiry` <a name="ResetInformationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInformationSchemaStatsExpiry"></a>

```go
func ResetInformationSchemaStatsExpiry()
```

##### `ResetInnodbFtMinTokenSize` <a name="ResetInnodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtMinTokenSize"></a>

```go
func ResetInnodbFtMinTokenSize()
```

##### `ResetInnodbFtServerStopwordTable` <a name="ResetInnodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtServerStopwordTable"></a>

```go
func ResetInnodbFtServerStopwordTable()
```

##### `ResetInnodbLockWaitTimeout` <a name="ResetInnodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLockWaitTimeout"></a>

```go
func ResetInnodbLockWaitTimeout()
```

##### `ResetInnodbLogBufferSize` <a name="ResetInnodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLogBufferSize"></a>

```go
func ResetInnodbLogBufferSize()
```

##### `ResetInnodbOnlineAlterLogMaxSize` <a name="ResetInnodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbOnlineAlterLogMaxSize"></a>

```go
func ResetInnodbOnlineAlterLogMaxSize()
```

##### `ResetInnodbPrintAllDeadlocks` <a name="ResetInnodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbPrintAllDeadlocks"></a>

```go
func ResetInnodbPrintAllDeadlocks()
```

##### `ResetInnodbRollbackOnTimeout` <a name="ResetInnodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbRollbackOnTimeout"></a>

```go
func ResetInnodbRollbackOnTimeout()
```

##### `ResetInteractiveTimeout` <a name="ResetInteractiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInteractiveTimeout"></a>

```go
func ResetInteractiveTimeout()
```

##### `ResetInternalTmpMemStorageEngine` <a name="ResetInternalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInternalTmpMemStorageEngine"></a>

```go
func ResetInternalTmpMemStorageEngine()
```

##### `ResetLongQueryTime` <a name="ResetLongQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetLongQueryTime"></a>

```go
func ResetLongQueryTime()
```

##### `ResetMaxAllowedPacket` <a name="ResetMaxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxAllowedPacket"></a>

```go
func ResetMaxAllowedPacket()
```

##### `ResetMaxHeapTableSize` <a name="ResetMaxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxHeapTableSize"></a>

```go
func ResetMaxHeapTableSize()
```

##### `ResetNetReadTimeout` <a name="ResetNetReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetReadTimeout"></a>

```go
func ResetNetReadTimeout()
```

##### `ResetNetWriteTimeout` <a name="ResetNetWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetWriteTimeout"></a>

```go
func ResetNetWriteTimeout()
```

##### `ResetSlowQueryLog` <a name="ResetSlowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSlowQueryLog"></a>

```go
func ResetSlowQueryLog()
```

##### `ResetSortBufferSize` <a name="ResetSortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSortBufferSize"></a>

```go
func ResetSortBufferSize()
```

##### `ResetSqlMode` <a name="ResetSqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlMode"></a>

```go
func ResetSqlMode()
```

##### `ResetSqlRequirePrimaryKey` <a name="ResetSqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlRequirePrimaryKey"></a>

```go
func ResetSqlRequirePrimaryKey()
```

##### `ResetTmpTableSize` <a name="ResetTmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetTmpTableSize"></a>

```go
func ResetTmpTableSize()
```

##### `ResetWaitTimeout` <a name="ResetWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetWaitTimeout"></a>

```go
func ResetWaitTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMysqlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databasemysqlconfig"

databasemysqlconfig.DatabaseMysqlConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databasemysqlconfig"

databasemysqlconfig.DatabaseMysqlConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databasemysqlconfig"

databasemysqlconfig.DatabaseMysqlConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databasemysqlconfig"

databasemysqlconfig.DatabaseMysqlConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseMysqlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseMysqlConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseMysqlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMysqlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHourInput">BackupHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinuteInput">BackupMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriodInput">BinlogRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZoneInput">DefaultTimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLenInput">GroupConcatMaxLenInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiryInput">InformationSchemaStatsExpiryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSizeInput">InnodbFtMinTokenSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTableInput">InnodbFtServerStopwordTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeoutInput">InnodbLockWaitTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSizeInput">InnodbLogBufferSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSizeInput">InnodbOnlineAlterLogMaxSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocksInput">InnodbPrintAllDeadlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeoutInput">InnodbRollbackOnTimeoutInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeoutInput">InteractiveTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngineInput">InternalTmpMemStorageEngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTimeInput">LongQueryTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacketInput">MaxAllowedPacketInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSizeInput">MaxHeapTableSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeoutInput">NetReadTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeoutInput">NetWriteTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLogInput">SlowQueryLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSizeInput">SortBufferSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlModeInput">SqlModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKeyInput">SqlRequirePrimaryKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSizeInput">TmpTableSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeoutInput">WaitTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHour">BackupHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinute">BackupMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriod">BinlogRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZone">DefaultTimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLen">GroupConcatMaxLen</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSize">InnodbLogBufferSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSize">InnodbOnlineAlterLogMaxSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocks">InnodbPrintAllDeadlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeout">InnodbRollbackOnTimeout</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngine">InternalTmpMemStorageEngine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTime">LongQueryTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeout">NetReadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLog">SlowQueryLog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSize">SortBufferSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlMode">SqlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSize">TmpTableSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeout">WaitTimeout</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupHourInput`<sup>Optional</sup> <a name="BackupHourInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHourInput"></a>

```go
func BackupHourInput() *f64
```

- *Type:* *f64

---

##### `BackupMinuteInput`<sup>Optional</sup> <a name="BackupMinuteInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinuteInput"></a>

```go
func BackupMinuteInput() *f64
```

- *Type:* *f64

---

##### `BinlogRetentionPeriodInput`<sup>Optional</sup> <a name="BinlogRetentionPeriodInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriodInput"></a>

```go
func BinlogRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DefaultTimeZoneInput`<sup>Optional</sup> <a name="DefaultTimeZoneInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZoneInput"></a>

```go
func DefaultTimeZoneInput() *string
```

- *Type:* *string

---

##### `GroupConcatMaxLenInput`<sup>Optional</sup> <a name="GroupConcatMaxLenInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLenInput"></a>

```go
func GroupConcatMaxLenInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InformationSchemaStatsExpiryInput`<sup>Optional</sup> <a name="InformationSchemaStatsExpiryInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiryInput"></a>

```go
func InformationSchemaStatsExpiryInput() *f64
```

- *Type:* *f64

---

##### `InnodbFtMinTokenSizeInput`<sup>Optional</sup> <a name="InnodbFtMinTokenSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSizeInput"></a>

```go
func InnodbFtMinTokenSizeInput() *f64
```

- *Type:* *f64

---

##### `InnodbFtServerStopwordTableInput`<sup>Optional</sup> <a name="InnodbFtServerStopwordTableInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTableInput"></a>

```go
func InnodbFtServerStopwordTableInput() *string
```

- *Type:* *string

---

##### `InnodbLockWaitTimeoutInput`<sup>Optional</sup> <a name="InnodbLockWaitTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeoutInput"></a>

```go
func InnodbLockWaitTimeoutInput() *f64
```

- *Type:* *f64

---

##### `InnodbLogBufferSizeInput`<sup>Optional</sup> <a name="InnodbLogBufferSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSizeInput"></a>

```go
func InnodbLogBufferSizeInput() *f64
```

- *Type:* *f64

---

##### `InnodbOnlineAlterLogMaxSizeInput`<sup>Optional</sup> <a name="InnodbOnlineAlterLogMaxSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSizeInput"></a>

```go
func InnodbOnlineAlterLogMaxSizeInput() *f64
```

- *Type:* *f64

---

##### `InnodbPrintAllDeadlocksInput`<sup>Optional</sup> <a name="InnodbPrintAllDeadlocksInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocksInput"></a>

```go
func InnodbPrintAllDeadlocksInput() interface{}
```

- *Type:* interface{}

---

##### `InnodbRollbackOnTimeoutInput`<sup>Optional</sup> <a name="InnodbRollbackOnTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeoutInput"></a>

```go
func InnodbRollbackOnTimeoutInput() interface{}
```

- *Type:* interface{}

---

##### `InteractiveTimeoutInput`<sup>Optional</sup> <a name="InteractiveTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeoutInput"></a>

```go
func InteractiveTimeoutInput() *f64
```

- *Type:* *f64

---

##### `InternalTmpMemStorageEngineInput`<sup>Optional</sup> <a name="InternalTmpMemStorageEngineInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngineInput"></a>

```go
func InternalTmpMemStorageEngineInput() *string
```

- *Type:* *string

---

##### `LongQueryTimeInput`<sup>Optional</sup> <a name="LongQueryTimeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTimeInput"></a>

```go
func LongQueryTimeInput() *f64
```

- *Type:* *f64

---

##### `MaxAllowedPacketInput`<sup>Optional</sup> <a name="MaxAllowedPacketInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacketInput"></a>

```go
func MaxAllowedPacketInput() *f64
```

- *Type:* *f64

---

##### `MaxHeapTableSizeInput`<sup>Optional</sup> <a name="MaxHeapTableSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSizeInput"></a>

```go
func MaxHeapTableSizeInput() *f64
```

- *Type:* *f64

---

##### `NetReadTimeoutInput`<sup>Optional</sup> <a name="NetReadTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeoutInput"></a>

```go
func NetReadTimeoutInput() *f64
```

- *Type:* *f64

---

##### `NetWriteTimeoutInput`<sup>Optional</sup> <a name="NetWriteTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeoutInput"></a>

```go
func NetWriteTimeoutInput() *f64
```

- *Type:* *f64

---

##### `SlowQueryLogInput`<sup>Optional</sup> <a name="SlowQueryLogInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLogInput"></a>

```go
func SlowQueryLogInput() interface{}
```

- *Type:* interface{}

---

##### `SortBufferSizeInput`<sup>Optional</sup> <a name="SortBufferSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSizeInput"></a>

```go
func SortBufferSizeInput() *f64
```

- *Type:* *f64

---

##### `SqlModeInput`<sup>Optional</sup> <a name="SqlModeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlModeInput"></a>

```go
func SqlModeInput() *string
```

- *Type:* *string

---

##### `SqlRequirePrimaryKeyInput`<sup>Optional</sup> <a name="SqlRequirePrimaryKeyInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKeyInput"></a>

```go
func SqlRequirePrimaryKeyInput() interface{}
```

- *Type:* interface{}

---

##### `TmpTableSizeInput`<sup>Optional</sup> <a name="TmpTableSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSizeInput"></a>

```go
func TmpTableSizeInput() *f64
```

- *Type:* *f64

---

##### `WaitTimeoutInput`<sup>Optional</sup> <a name="WaitTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeoutInput"></a>

```go
func WaitTimeoutInput() *f64
```

- *Type:* *f64

---

##### `BackupHour`<sup>Required</sup> <a name="BackupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHour"></a>

```go
func BackupHour() *f64
```

- *Type:* *f64

---

##### `BackupMinute`<sup>Required</sup> <a name="BackupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinute"></a>

```go
func BackupMinute() *f64
```

- *Type:* *f64

---

##### `BinlogRetentionPeriod`<sup>Required</sup> <a name="BinlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriod"></a>

```go
func BinlogRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeout"></a>

```go
func ConnectTimeout() *f64
```

- *Type:* *f64

---

##### `DefaultTimeZone`<sup>Required</sup> <a name="DefaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZone"></a>

```go
func DefaultTimeZone() *string
```

- *Type:* *string

---

##### `GroupConcatMaxLen`<sup>Required</sup> <a name="GroupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLen"></a>

```go
func GroupConcatMaxLen() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InformationSchemaStatsExpiry`<sup>Required</sup> <a name="InformationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiry"></a>

```go
func InformationSchemaStatsExpiry() *f64
```

- *Type:* *f64

---

##### `InnodbFtMinTokenSize`<sup>Required</sup> <a name="InnodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSize"></a>

```go
func InnodbFtMinTokenSize() *f64
```

- *Type:* *f64

---

##### `InnodbFtServerStopwordTable`<sup>Required</sup> <a name="InnodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTable"></a>

```go
func InnodbFtServerStopwordTable() *string
```

- *Type:* *string

---

##### `InnodbLockWaitTimeout`<sup>Required</sup> <a name="InnodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeout"></a>

```go
func InnodbLockWaitTimeout() *f64
```

- *Type:* *f64

---

##### `InnodbLogBufferSize`<sup>Required</sup> <a name="InnodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSize"></a>

```go
func InnodbLogBufferSize() *f64
```

- *Type:* *f64

---

##### `InnodbOnlineAlterLogMaxSize`<sup>Required</sup> <a name="InnodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSize"></a>

```go
func InnodbOnlineAlterLogMaxSize() *f64
```

- *Type:* *f64

---

##### `InnodbPrintAllDeadlocks`<sup>Required</sup> <a name="InnodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocks"></a>

```go
func InnodbPrintAllDeadlocks() interface{}
```

- *Type:* interface{}

---

##### `InnodbRollbackOnTimeout`<sup>Required</sup> <a name="InnodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeout"></a>

```go
func InnodbRollbackOnTimeout() interface{}
```

- *Type:* interface{}

---

##### `InteractiveTimeout`<sup>Required</sup> <a name="InteractiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeout"></a>

```go
func InteractiveTimeout() *f64
```

- *Type:* *f64

---

##### `InternalTmpMemStorageEngine`<sup>Required</sup> <a name="InternalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngine"></a>

```go
func InternalTmpMemStorageEngine() *string
```

- *Type:* *string

---

##### `LongQueryTime`<sup>Required</sup> <a name="LongQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTime"></a>

```go
func LongQueryTime() *f64
```

- *Type:* *f64

---

##### `MaxAllowedPacket`<sup>Required</sup> <a name="MaxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacket"></a>

```go
func MaxAllowedPacket() *f64
```

- *Type:* *f64

---

##### `MaxHeapTableSize`<sup>Required</sup> <a name="MaxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSize"></a>

```go
func MaxHeapTableSize() *f64
```

- *Type:* *f64

---

##### `NetReadTimeout`<sup>Required</sup> <a name="NetReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeout"></a>

```go
func NetReadTimeout() *f64
```

- *Type:* *f64

---

##### `NetWriteTimeout`<sup>Required</sup> <a name="NetWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeout"></a>

```go
func NetWriteTimeout() *f64
```

- *Type:* *f64

---

##### `SlowQueryLog`<sup>Required</sup> <a name="SlowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLog"></a>

```go
func SlowQueryLog() interface{}
```

- *Type:* interface{}

---

##### `SortBufferSize`<sup>Required</sup> <a name="SortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSize"></a>

```go
func SortBufferSize() *f64
```

- *Type:* *f64

---

##### `SqlMode`<sup>Required</sup> <a name="SqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlMode"></a>

```go
func SqlMode() *string
```

- *Type:* *string

---

##### `SqlRequirePrimaryKey`<sup>Required</sup> <a name="SqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKey"></a>

```go
func SqlRequirePrimaryKey() interface{}
```

- *Type:* interface{}

---

##### `TmpTableSize`<sup>Required</sup> <a name="TmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSize"></a>

```go
func TmpTableSize() *f64
```

- *Type:* *f64

---

##### `WaitTimeout`<sup>Required</sup> <a name="WaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeout"></a>

```go
func WaitTimeout() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMysqlConfigConfig <a name="DatabaseMysqlConfigConfig" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databasemysqlconfig"

&databasemysqlconfig.DatabaseMysqlConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	BackupHour: *f64,
	BackupMinute: *f64,
	BinlogRetentionPeriod: *f64,
	ConnectTimeout: *f64,
	DefaultTimeZone: *string,
	GroupConcatMaxLen: *f64,
	Id: *string,
	InformationSchemaStatsExpiry: *f64,
	InnodbFtMinTokenSize: *f64,
	InnodbFtServerStopwordTable: *string,
	InnodbLockWaitTimeout: *f64,
	InnodbLogBufferSize: *f64,
	InnodbOnlineAlterLogMaxSize: *f64,
	InnodbPrintAllDeadlocks: interface{},
	InnodbRollbackOnTimeout: interface{},
	InteractiveTimeout: *f64,
	InternalTmpMemStorageEngine: *string,
	LongQueryTime: *f64,
	MaxAllowedPacket: *f64,
	MaxHeapTableSize: *f64,
	NetReadTimeout: *f64,
	NetWriteTimeout: *f64,
	SlowQueryLog: interface{},
	SortBufferSize: *f64,
	SqlMode: *string,
	SqlRequirePrimaryKey: interface{},
	TmpTableSize: *f64,
	WaitTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupHour">BackupHour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupMinute">BackupMinute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.binlogRetentionPeriod">BinlogRetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.defaultTimeZone">DefaultTimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.groupConcatMaxLen">GroupConcatMaxLen</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLogBufferSize">InnodbLogBufferSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbOnlineAlterLogMaxSize">InnodbOnlineAlterLogMaxSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbPrintAllDeadlocks">InnodbPrintAllDeadlocks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbRollbackOnTimeout">InnodbRollbackOnTimeout</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.internalTmpMemStorageEngine">InternalTmpMemStorageEngine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.longQueryTime">LongQueryTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netReadTimeout">NetReadTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.slowQueryLog">SlowQueryLog</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sortBufferSize">SortBufferSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlMode">SqlMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.tmpTableSize">TmpTableSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.waitTimeout">WaitTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}.

---

##### `BackupHour`<sup>Optional</sup> <a name="BackupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupHour"></a>

```go
BackupHour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}.

---

##### `BackupMinute`<sup>Optional</sup> <a name="BackupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupMinute"></a>

```go
BackupMinute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}.

---

##### `BinlogRetentionPeriod`<sup>Optional</sup> <a name="BinlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.binlogRetentionPeriod"></a>

```go
BinlogRetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}.

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connectTimeout"></a>

```go
ConnectTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}.

---

##### `DefaultTimeZone`<sup>Optional</sup> <a name="DefaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.defaultTimeZone"></a>

```go
DefaultTimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}.

---

##### `GroupConcatMaxLen`<sup>Optional</sup> <a name="GroupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.groupConcatMaxLen"></a>

```go
GroupConcatMaxLen *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InformationSchemaStatsExpiry`<sup>Optional</sup> <a name="InformationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.informationSchemaStatsExpiry"></a>

```go
InformationSchemaStatsExpiry *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}.

---

##### `InnodbFtMinTokenSize`<sup>Optional</sup> <a name="InnodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtMinTokenSize"></a>

```go
InnodbFtMinTokenSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}.

---

##### `InnodbFtServerStopwordTable`<sup>Optional</sup> <a name="InnodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtServerStopwordTable"></a>

```go
InnodbFtServerStopwordTable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}.

---

##### `InnodbLockWaitTimeout`<sup>Optional</sup> <a name="InnodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLockWaitTimeout"></a>

```go
InnodbLockWaitTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}.

---

##### `InnodbLogBufferSize`<sup>Optional</sup> <a name="InnodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLogBufferSize"></a>

```go
InnodbLogBufferSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}.

---

##### `InnodbOnlineAlterLogMaxSize`<sup>Optional</sup> <a name="InnodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbOnlineAlterLogMaxSize"></a>

```go
InnodbOnlineAlterLogMaxSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}.

---

##### `InnodbPrintAllDeadlocks`<sup>Optional</sup> <a name="InnodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbPrintAllDeadlocks"></a>

```go
InnodbPrintAllDeadlocks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}.

---

##### `InnodbRollbackOnTimeout`<sup>Optional</sup> <a name="InnodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbRollbackOnTimeout"></a>

```go
InnodbRollbackOnTimeout interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}.

---

##### `InteractiveTimeout`<sup>Optional</sup> <a name="InteractiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.interactiveTimeout"></a>

```go
InteractiveTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}.

---

##### `InternalTmpMemStorageEngine`<sup>Optional</sup> <a name="InternalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.internalTmpMemStorageEngine"></a>

```go
InternalTmpMemStorageEngine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}.

---

##### `LongQueryTime`<sup>Optional</sup> <a name="LongQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.longQueryTime"></a>

```go
LongQueryTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}.

---

##### `MaxAllowedPacket`<sup>Optional</sup> <a name="MaxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxAllowedPacket"></a>

```go
MaxAllowedPacket *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}.

---

##### `MaxHeapTableSize`<sup>Optional</sup> <a name="MaxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxHeapTableSize"></a>

```go
MaxHeapTableSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}.

---

##### `NetReadTimeout`<sup>Optional</sup> <a name="NetReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netReadTimeout"></a>

```go
NetReadTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}.

---

##### `NetWriteTimeout`<sup>Optional</sup> <a name="NetWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netWriteTimeout"></a>

```go
NetWriteTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}.

---

##### `SlowQueryLog`<sup>Optional</sup> <a name="SlowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.slowQueryLog"></a>

```go
SlowQueryLog interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}.

---

##### `SortBufferSize`<sup>Optional</sup> <a name="SortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sortBufferSize"></a>

```go
SortBufferSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}.

---

##### `SqlMode`<sup>Optional</sup> <a name="SqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlMode"></a>

```go
SqlMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}.

---

##### `SqlRequirePrimaryKey`<sup>Optional</sup> <a name="SqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlRequirePrimaryKey"></a>

```go
SqlRequirePrimaryKey interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}.

---

##### `TmpTableSize`<sup>Optional</sup> <a name="TmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.tmpTableSize"></a>

```go
TmpTableSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}.

---

##### `WaitTimeout`<sup>Optional</sup> <a name="WaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.waitTimeout"></a>

```go
WaitTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}.

---



