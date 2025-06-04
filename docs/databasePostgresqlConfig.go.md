# `databasePostgresqlConfig` Submodule <a name="`databasePostgresqlConfig` Submodule" id="@cdktf/provider-digitalocean.databasePostgresqlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePostgresqlConfig <a name="DatabasePostgresqlConfig" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config digitalocean_database_postgresql_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasepostgresqlconfig"

databasepostgresqlconfig.NewDatabasePostgresqlConfig(scope Construct, id *string, config DatabasePostgresqlConfigConfig) DatabasePostgresqlConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig">DatabasePostgresqlConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig">DatabasePostgresqlConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer">PutPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb">PutTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeScaleFactor">ResetAutovacuumAnalyzeScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeThreshold">ResetAutovacuumAnalyzeThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumFreezeMaxAge">ResetAutovacuumFreezeMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumMaxWorkers">ResetAutovacuumMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumNaptime">ResetAutovacuumNaptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostDelay">ResetAutovacuumVacuumCostDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostLimit">ResetAutovacuumVacuumCostLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumScaleFactor">ResetAutovacuumVacuumScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumThreshold">ResetAutovacuumVacuumThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupHour">ResetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupMinute">ResetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterDelay">ResetBgwriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterFlushAfter">ResetBgwriterFlushAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMaxpages">ResetBgwriterLruMaxpages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMultiplier">ResetBgwriterLruMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDeadlockTimeout">ResetDeadlockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDefaultToastCompression">ResetDefaultToastCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetIdleInTransactionSessionTimeout">ResetIdleInTransactionSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetJit">ResetJit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogAutovacuumMinDuration">ResetLogAutovacuumMinDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogErrorVerbosity">ResetLogErrorVerbosity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogLinePrefix">ResetLogLinePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogMinDurationStatement">ResetLogMinDurationStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxFilesPerProcess">ResetMaxFilesPerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLocksPerTransaction">ResetMaxLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLogicalReplicationWorkers">ResetMaxLogicalReplicationWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkers">ResetMaxParallelWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkersPerGather">ResetMaxParallelWorkersPerGather</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPredLocksPerTransaction">ResetMaxPredLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPreparedTransactions">ResetMaxPreparedTransactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxReplicationSlots">ResetMaxReplicationSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStackDepth">ResetMaxStackDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyArchiveDelay">ResetMaxStandbyArchiveDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyStreamingDelay">ResetMaxStandbyStreamingDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWalSenders">ResetMaxWalSenders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWorkerProcesses">ResetMaxWorkerProcesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgbouncer">ResetPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwInterval">ResetPgPartmanBgwInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwRole">ResetPgPartmanBgwRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgStatStatementsTrack">ResetPgStatStatementsTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetSharedBuffersPercentage">ResetSharedBuffersPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTempFileLimit">ResetTempFileLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimescaledb">ResetTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackActivityQuerySize">ResetTrackActivityQuerySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackCommitTimestamp">ResetTrackCommitTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackFunctions">ResetTrackFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackIoTiming">ResetTrackIoTiming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalSenderTimeout">ResetWalSenderTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalWriterDelay">ResetWalWriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWorkMem">ResetWorkMem</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPgbouncer` <a name="PutPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer"></a>

```go
func PutPgbouncer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimescaledb` <a name="PutTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb"></a>

```go
func PutTimescaledb(value DatabasePostgresqlConfigTimescaledb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---

##### `ResetAutovacuumAnalyzeScaleFactor` <a name="ResetAutovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeScaleFactor"></a>

```go
func ResetAutovacuumAnalyzeScaleFactor()
```

##### `ResetAutovacuumAnalyzeThreshold` <a name="ResetAutovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeThreshold"></a>

```go
func ResetAutovacuumAnalyzeThreshold()
```

##### `ResetAutovacuumFreezeMaxAge` <a name="ResetAutovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumFreezeMaxAge"></a>

```go
func ResetAutovacuumFreezeMaxAge()
```

##### `ResetAutovacuumMaxWorkers` <a name="ResetAutovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumMaxWorkers"></a>

```go
func ResetAutovacuumMaxWorkers()
```

##### `ResetAutovacuumNaptime` <a name="ResetAutovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumNaptime"></a>

```go
func ResetAutovacuumNaptime()
```

##### `ResetAutovacuumVacuumCostDelay` <a name="ResetAutovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostDelay"></a>

```go
func ResetAutovacuumVacuumCostDelay()
```

##### `ResetAutovacuumVacuumCostLimit` <a name="ResetAutovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostLimit"></a>

```go
func ResetAutovacuumVacuumCostLimit()
```

##### `ResetAutovacuumVacuumScaleFactor` <a name="ResetAutovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumScaleFactor"></a>

```go
func ResetAutovacuumVacuumScaleFactor()
```

##### `ResetAutovacuumVacuumThreshold` <a name="ResetAutovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumThreshold"></a>

```go
func ResetAutovacuumVacuumThreshold()
```

##### `ResetBackupHour` <a name="ResetBackupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupHour"></a>

```go
func ResetBackupHour()
```

##### `ResetBackupMinute` <a name="ResetBackupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupMinute"></a>

```go
func ResetBackupMinute()
```

##### `ResetBgwriterDelay` <a name="ResetBgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterDelay"></a>

```go
func ResetBgwriterDelay()
```

##### `ResetBgwriterFlushAfter` <a name="ResetBgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterFlushAfter"></a>

```go
func ResetBgwriterFlushAfter()
```

##### `ResetBgwriterLruMaxpages` <a name="ResetBgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMaxpages"></a>

```go
func ResetBgwriterLruMaxpages()
```

##### `ResetBgwriterLruMultiplier` <a name="ResetBgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMultiplier"></a>

```go
func ResetBgwriterLruMultiplier()
```

##### `ResetDeadlockTimeout` <a name="ResetDeadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDeadlockTimeout"></a>

```go
func ResetDeadlockTimeout()
```

##### `ResetDefaultToastCompression` <a name="ResetDefaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDefaultToastCompression"></a>

```go
func ResetDefaultToastCompression()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetIdleInTransactionSessionTimeout` <a name="ResetIdleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetIdleInTransactionSessionTimeout"></a>

```go
func ResetIdleInTransactionSessionTimeout()
```

##### `ResetJit` <a name="ResetJit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetJit"></a>

```go
func ResetJit()
```

##### `ResetLogAutovacuumMinDuration` <a name="ResetLogAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogAutovacuumMinDuration"></a>

```go
func ResetLogAutovacuumMinDuration()
```

##### `ResetLogErrorVerbosity` <a name="ResetLogErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogErrorVerbosity"></a>

```go
func ResetLogErrorVerbosity()
```

##### `ResetLogLinePrefix` <a name="ResetLogLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogLinePrefix"></a>

```go
func ResetLogLinePrefix()
```

##### `ResetLogMinDurationStatement` <a name="ResetLogMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogMinDurationStatement"></a>

```go
func ResetLogMinDurationStatement()
```

##### `ResetMaxFilesPerProcess` <a name="ResetMaxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxFilesPerProcess"></a>

```go
func ResetMaxFilesPerProcess()
```

##### `ResetMaxLocksPerTransaction` <a name="ResetMaxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLocksPerTransaction"></a>

```go
func ResetMaxLocksPerTransaction()
```

##### `ResetMaxLogicalReplicationWorkers` <a name="ResetMaxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLogicalReplicationWorkers"></a>

```go
func ResetMaxLogicalReplicationWorkers()
```

##### `ResetMaxParallelWorkers` <a name="ResetMaxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkers"></a>

```go
func ResetMaxParallelWorkers()
```

##### `ResetMaxParallelWorkersPerGather` <a name="ResetMaxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkersPerGather"></a>

```go
func ResetMaxParallelWorkersPerGather()
```

##### `ResetMaxPredLocksPerTransaction` <a name="ResetMaxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPredLocksPerTransaction"></a>

```go
func ResetMaxPredLocksPerTransaction()
```

##### `ResetMaxPreparedTransactions` <a name="ResetMaxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPreparedTransactions"></a>

```go
func ResetMaxPreparedTransactions()
```

##### `ResetMaxReplicationSlots` <a name="ResetMaxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxReplicationSlots"></a>

```go
func ResetMaxReplicationSlots()
```

##### `ResetMaxStackDepth` <a name="ResetMaxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStackDepth"></a>

```go
func ResetMaxStackDepth()
```

##### `ResetMaxStandbyArchiveDelay` <a name="ResetMaxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyArchiveDelay"></a>

```go
func ResetMaxStandbyArchiveDelay()
```

##### `ResetMaxStandbyStreamingDelay` <a name="ResetMaxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyStreamingDelay"></a>

```go
func ResetMaxStandbyStreamingDelay()
```

##### `ResetMaxWalSenders` <a name="ResetMaxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWalSenders"></a>

```go
func ResetMaxWalSenders()
```

##### `ResetMaxWorkerProcesses` <a name="ResetMaxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWorkerProcesses"></a>

```go
func ResetMaxWorkerProcesses()
```

##### `ResetPgbouncer` <a name="ResetPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgbouncer"></a>

```go
func ResetPgbouncer()
```

##### `ResetPgPartmanBgwInterval` <a name="ResetPgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwInterval"></a>

```go
func ResetPgPartmanBgwInterval()
```

##### `ResetPgPartmanBgwRole` <a name="ResetPgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwRole"></a>

```go
func ResetPgPartmanBgwRole()
```

##### `ResetPgStatStatementsTrack` <a name="ResetPgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgStatStatementsTrack"></a>

```go
func ResetPgStatStatementsTrack()
```

##### `ResetSharedBuffersPercentage` <a name="ResetSharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetSharedBuffersPercentage"></a>

```go
func ResetSharedBuffersPercentage()
```

##### `ResetTempFileLimit` <a name="ResetTempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTempFileLimit"></a>

```go
func ResetTempFileLimit()
```

##### `ResetTimescaledb` <a name="ResetTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimescaledb"></a>

```go
func ResetTimescaledb()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetTrackActivityQuerySize` <a name="ResetTrackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackActivityQuerySize"></a>

```go
func ResetTrackActivityQuerySize()
```

##### `ResetTrackCommitTimestamp` <a name="ResetTrackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackCommitTimestamp"></a>

```go
func ResetTrackCommitTimestamp()
```

##### `ResetTrackFunctions` <a name="ResetTrackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackFunctions"></a>

```go
func ResetTrackFunctions()
```

##### `ResetTrackIoTiming` <a name="ResetTrackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackIoTiming"></a>

```go
func ResetTrackIoTiming()
```

##### `ResetWalSenderTimeout` <a name="ResetWalSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalSenderTimeout"></a>

```go
func ResetWalSenderTimeout()
```

##### `ResetWalWriterDelay` <a name="ResetWalWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalWriterDelay"></a>

```go
func ResetWalWriterDelay()
```

##### `ResetWorkMem` <a name="ResetWorkMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWorkMem"></a>

```go
func ResetWorkMem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabasePostgresqlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasepostgresqlconfig"

databasepostgresqlconfig.DatabasePostgresqlConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasepostgresqlconfig"

databasepostgresqlconfig.DatabasePostgresqlConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasepostgresqlconfig"

databasepostgresqlconfig.DatabasePostgresqlConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasepostgresqlconfig"

databasepostgresqlconfig.DatabasePostgresqlConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabasePostgresqlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabasePostgresqlConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabasePostgresqlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePostgresqlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncer">Pgbouncer</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList">DatabasePostgresqlConfigPgbouncerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledb">Timescaledb</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference">DatabasePostgresqlConfigTimescaledbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactorInput">AutovacuumAnalyzeScaleFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThresholdInput">AutovacuumAnalyzeThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAgeInput">AutovacuumFreezeMaxAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkersInput">AutovacuumMaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptimeInput">AutovacuumNaptimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelayInput">AutovacuumVacuumCostDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimitInput">AutovacuumVacuumCostLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactorInput">AutovacuumVacuumScaleFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThresholdInput">AutovacuumVacuumThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHourInput">BackupHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinuteInput">BackupMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelayInput">BgwriterDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfterInput">BgwriterFlushAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpagesInput">BgwriterLruMaxpagesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplierInput">BgwriterLruMultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeoutInput">DeadlockTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompressionInput">DefaultToastCompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeoutInput">IdleInTransactionSessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jitInput">JitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDurationInput">LogAutovacuumMinDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosityInput">LogErrorVerbosityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefixInput">LogLinePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatementInput">LogMinDurationStatementInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcessInput">MaxFilesPerProcessInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransactionInput">MaxLocksPerTransactionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkersInput">MaxLogicalReplicationWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersInput">MaxParallelWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGatherInput">MaxParallelWorkersPerGatherInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransactionInput">MaxPredLocksPerTransactionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactionsInput">MaxPreparedTransactionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlotsInput">MaxReplicationSlotsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepthInput">MaxStackDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelayInput">MaxStandbyArchiveDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelayInput">MaxStandbyStreamingDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSendersInput">MaxWalSendersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcessesInput">MaxWorkerProcessesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncerInput">PgbouncerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwIntervalInput">PgPartmanBgwIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRoleInput">PgPartmanBgwRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrackInput">PgStatStatementsTrackInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentageInput">SharedBuffersPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimitInput">TempFileLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledbInput">TimescaledbInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySizeInput">TrackActivityQuerySizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestampInput">TrackCommitTimestampInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctionsInput">TrackFunctionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTimingInput">TrackIoTimingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeoutInput">WalSenderTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelayInput">WalWriterDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMemInput">WorkMemInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactor">AutovacuumAnalyzeScaleFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThreshold">AutovacuumAnalyzeThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAge">AutovacuumFreezeMaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkers">AutovacuumMaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptime">AutovacuumNaptime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelay">AutovacuumVacuumCostDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimit">AutovacuumVacuumCostLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactor">AutovacuumVacuumScaleFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThreshold">AutovacuumVacuumThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHour">BackupHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinute">BackupMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelay">BgwriterDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfter">BgwriterFlushAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpages">BgwriterLruMaxpages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplier">BgwriterLruMultiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeout">DeadlockTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompression">DefaultToastCompression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jit">Jit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDuration">LogAutovacuumMinDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosity">LogErrorVerbosity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefix">LogLinePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatement">LogMinDurationStatement</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcess">MaxFilesPerProcess</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransaction">MaxLocksPerTransaction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkers">MaxLogicalReplicationWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkers">MaxParallelWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGather">MaxParallelWorkersPerGather</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransaction">MaxPredLocksPerTransaction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactions">MaxPreparedTransactions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlots">MaxReplicationSlots</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepth">MaxStackDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelay">MaxStandbyArchiveDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelay">MaxStandbyStreamingDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSenders">MaxWalSenders</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcesses">MaxWorkerProcesses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwInterval">PgPartmanBgwInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRole">PgPartmanBgwRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrack">PgStatStatementsTrack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentage">SharedBuffersPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimit">TempFileLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySize">TrackActivityQuerySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestamp">TrackCommitTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctions">TrackFunctions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTiming">TrackIoTiming</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeout">WalSenderTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelay">WalWriterDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMem">WorkMem</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Pgbouncer`<sup>Required</sup> <a name="Pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncer"></a>

```go
func Pgbouncer() DatabasePostgresqlConfigPgbouncerList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList">DatabasePostgresqlConfigPgbouncerList</a>

---

##### `Timescaledb`<sup>Required</sup> <a name="Timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledb"></a>

```go
func Timescaledb() DatabasePostgresqlConfigTimescaledbOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference">DatabasePostgresqlConfigTimescaledbOutputReference</a>

---

##### `AutovacuumAnalyzeScaleFactorInput`<sup>Optional</sup> <a name="AutovacuumAnalyzeScaleFactorInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactorInput"></a>

```go
func AutovacuumAnalyzeScaleFactorInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumAnalyzeThresholdInput`<sup>Optional</sup> <a name="AutovacuumAnalyzeThresholdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThresholdInput"></a>

```go
func AutovacuumAnalyzeThresholdInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumFreezeMaxAgeInput`<sup>Optional</sup> <a name="AutovacuumFreezeMaxAgeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAgeInput"></a>

```go
func AutovacuumFreezeMaxAgeInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumMaxWorkersInput`<sup>Optional</sup> <a name="AutovacuumMaxWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkersInput"></a>

```go
func AutovacuumMaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumNaptimeInput`<sup>Optional</sup> <a name="AutovacuumNaptimeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptimeInput"></a>

```go
func AutovacuumNaptimeInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumCostDelayInput`<sup>Optional</sup> <a name="AutovacuumVacuumCostDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelayInput"></a>

```go
func AutovacuumVacuumCostDelayInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumCostLimitInput`<sup>Optional</sup> <a name="AutovacuumVacuumCostLimitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimitInput"></a>

```go
func AutovacuumVacuumCostLimitInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumScaleFactorInput`<sup>Optional</sup> <a name="AutovacuumVacuumScaleFactorInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactorInput"></a>

```go
func AutovacuumVacuumScaleFactorInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumThresholdInput`<sup>Optional</sup> <a name="AutovacuumVacuumThresholdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThresholdInput"></a>

```go
func AutovacuumVacuumThresholdInput() *f64
```

- *Type:* *f64

---

##### `BackupHourInput`<sup>Optional</sup> <a name="BackupHourInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHourInput"></a>

```go
func BackupHourInput() *f64
```

- *Type:* *f64

---

##### `BackupMinuteInput`<sup>Optional</sup> <a name="BackupMinuteInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinuteInput"></a>

```go
func BackupMinuteInput() *f64
```

- *Type:* *f64

---

##### `BgwriterDelayInput`<sup>Optional</sup> <a name="BgwriterDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelayInput"></a>

```go
func BgwriterDelayInput() *f64
```

- *Type:* *f64

---

##### `BgwriterFlushAfterInput`<sup>Optional</sup> <a name="BgwriterFlushAfterInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfterInput"></a>

```go
func BgwriterFlushAfterInput() *f64
```

- *Type:* *f64

---

##### `BgwriterLruMaxpagesInput`<sup>Optional</sup> <a name="BgwriterLruMaxpagesInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpagesInput"></a>

```go
func BgwriterLruMaxpagesInput() *f64
```

- *Type:* *f64

---

##### `BgwriterLruMultiplierInput`<sup>Optional</sup> <a name="BgwriterLruMultiplierInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplierInput"></a>

```go
func BgwriterLruMultiplierInput() *f64
```

- *Type:* *f64

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `DeadlockTimeoutInput`<sup>Optional</sup> <a name="DeadlockTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeoutInput"></a>

```go
func DeadlockTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DefaultToastCompressionInput`<sup>Optional</sup> <a name="DefaultToastCompressionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompressionInput"></a>

```go
func DefaultToastCompressionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeoutInput"></a>

```go
func IdleInTransactionSessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `JitInput`<sup>Optional</sup> <a name="JitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jitInput"></a>

```go
func JitInput() interface{}
```

- *Type:* interface{}

---

##### `LogAutovacuumMinDurationInput`<sup>Optional</sup> <a name="LogAutovacuumMinDurationInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDurationInput"></a>

```go
func LogAutovacuumMinDurationInput() *f64
```

- *Type:* *f64

---

##### `LogErrorVerbosityInput`<sup>Optional</sup> <a name="LogErrorVerbosityInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosityInput"></a>

```go
func LogErrorVerbosityInput() *string
```

- *Type:* *string

---

##### `LogLinePrefixInput`<sup>Optional</sup> <a name="LogLinePrefixInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefixInput"></a>

```go
func LogLinePrefixInput() *string
```

- *Type:* *string

---

##### `LogMinDurationStatementInput`<sup>Optional</sup> <a name="LogMinDurationStatementInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatementInput"></a>

```go
func LogMinDurationStatementInput() *f64
```

- *Type:* *f64

---

##### `MaxFilesPerProcessInput`<sup>Optional</sup> <a name="MaxFilesPerProcessInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcessInput"></a>

```go
func MaxFilesPerProcessInput() *f64
```

- *Type:* *f64

---

##### `MaxLocksPerTransactionInput`<sup>Optional</sup> <a name="MaxLocksPerTransactionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransactionInput"></a>

```go
func MaxLocksPerTransactionInput() *f64
```

- *Type:* *f64

---

##### `MaxLogicalReplicationWorkersInput`<sup>Optional</sup> <a name="MaxLogicalReplicationWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkersInput"></a>

```go
func MaxLogicalReplicationWorkersInput() *f64
```

- *Type:* *f64

---

##### `MaxParallelWorkersInput`<sup>Optional</sup> <a name="MaxParallelWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersInput"></a>

```go
func MaxParallelWorkersInput() *f64
```

- *Type:* *f64

---

##### `MaxParallelWorkersPerGatherInput`<sup>Optional</sup> <a name="MaxParallelWorkersPerGatherInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGatherInput"></a>

```go
func MaxParallelWorkersPerGatherInput() *f64
```

- *Type:* *f64

---

##### `MaxPredLocksPerTransactionInput`<sup>Optional</sup> <a name="MaxPredLocksPerTransactionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransactionInput"></a>

```go
func MaxPredLocksPerTransactionInput() *f64
```

- *Type:* *f64

---

##### `MaxPreparedTransactionsInput`<sup>Optional</sup> <a name="MaxPreparedTransactionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactionsInput"></a>

```go
func MaxPreparedTransactionsInput() *f64
```

- *Type:* *f64

---

##### `MaxReplicationSlotsInput`<sup>Optional</sup> <a name="MaxReplicationSlotsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlotsInput"></a>

```go
func MaxReplicationSlotsInput() *f64
```

- *Type:* *f64

---

##### `MaxStackDepthInput`<sup>Optional</sup> <a name="MaxStackDepthInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepthInput"></a>

```go
func MaxStackDepthInput() *f64
```

- *Type:* *f64

---

##### `MaxStandbyArchiveDelayInput`<sup>Optional</sup> <a name="MaxStandbyArchiveDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelayInput"></a>

```go
func MaxStandbyArchiveDelayInput() *f64
```

- *Type:* *f64

---

##### `MaxStandbyStreamingDelayInput`<sup>Optional</sup> <a name="MaxStandbyStreamingDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelayInput"></a>

```go
func MaxStandbyStreamingDelayInput() *f64
```

- *Type:* *f64

---

##### `MaxWalSendersInput`<sup>Optional</sup> <a name="MaxWalSendersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSendersInput"></a>

```go
func MaxWalSendersInput() *f64
```

- *Type:* *f64

---

##### `MaxWorkerProcessesInput`<sup>Optional</sup> <a name="MaxWorkerProcessesInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcessesInput"></a>

```go
func MaxWorkerProcessesInput() *f64
```

- *Type:* *f64

---

##### `PgbouncerInput`<sup>Optional</sup> <a name="PgbouncerInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncerInput"></a>

```go
func PgbouncerInput() interface{}
```

- *Type:* interface{}

---

##### `PgPartmanBgwIntervalInput`<sup>Optional</sup> <a name="PgPartmanBgwIntervalInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwIntervalInput"></a>

```go
func PgPartmanBgwIntervalInput() *f64
```

- *Type:* *f64

---

##### `PgPartmanBgwRoleInput`<sup>Optional</sup> <a name="PgPartmanBgwRoleInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRoleInput"></a>

```go
func PgPartmanBgwRoleInput() *string
```

- *Type:* *string

---

##### `PgStatStatementsTrackInput`<sup>Optional</sup> <a name="PgStatStatementsTrackInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrackInput"></a>

```go
func PgStatStatementsTrackInput() *string
```

- *Type:* *string

---

##### `SharedBuffersPercentageInput`<sup>Optional</sup> <a name="SharedBuffersPercentageInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentageInput"></a>

```go
func SharedBuffersPercentageInput() *f64
```

- *Type:* *f64

---

##### `TempFileLimitInput`<sup>Optional</sup> <a name="TempFileLimitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimitInput"></a>

```go
func TempFileLimitInput() *f64
```

- *Type:* *f64

---

##### `TimescaledbInput`<sup>Optional</sup> <a name="TimescaledbInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledbInput"></a>

```go
func TimescaledbInput() DatabasePostgresqlConfigTimescaledb
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `TrackActivityQuerySizeInput`<sup>Optional</sup> <a name="TrackActivityQuerySizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySizeInput"></a>

```go
func TrackActivityQuerySizeInput() *f64
```

- *Type:* *f64

---

##### `TrackCommitTimestampInput`<sup>Optional</sup> <a name="TrackCommitTimestampInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestampInput"></a>

```go
func TrackCommitTimestampInput() *string
```

- *Type:* *string

---

##### `TrackFunctionsInput`<sup>Optional</sup> <a name="TrackFunctionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctionsInput"></a>

```go
func TrackFunctionsInput() *string
```

- *Type:* *string

---

##### `TrackIoTimingInput`<sup>Optional</sup> <a name="TrackIoTimingInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTimingInput"></a>

```go
func TrackIoTimingInput() *string
```

- *Type:* *string

---

##### `WalSenderTimeoutInput`<sup>Optional</sup> <a name="WalSenderTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeoutInput"></a>

```go
func WalSenderTimeoutInput() *f64
```

- *Type:* *f64

---

##### `WalWriterDelayInput`<sup>Optional</sup> <a name="WalWriterDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelayInput"></a>

```go
func WalWriterDelayInput() *f64
```

- *Type:* *f64

---

##### `WorkMemInput`<sup>Optional</sup> <a name="WorkMemInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMemInput"></a>

```go
func WorkMemInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumAnalyzeScaleFactor`<sup>Required</sup> <a name="AutovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactor"></a>

```go
func AutovacuumAnalyzeScaleFactor() *f64
```

- *Type:* *f64

---

##### `AutovacuumAnalyzeThreshold`<sup>Required</sup> <a name="AutovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThreshold"></a>

```go
func AutovacuumAnalyzeThreshold() *f64
```

- *Type:* *f64

---

##### `AutovacuumFreezeMaxAge`<sup>Required</sup> <a name="AutovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAge"></a>

```go
func AutovacuumFreezeMaxAge() *f64
```

- *Type:* *f64

---

##### `AutovacuumMaxWorkers`<sup>Required</sup> <a name="AutovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkers"></a>

```go
func AutovacuumMaxWorkers() *f64
```

- *Type:* *f64

---

##### `AutovacuumNaptime`<sup>Required</sup> <a name="AutovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptime"></a>

```go
func AutovacuumNaptime() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumCostDelay`<sup>Required</sup> <a name="AutovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelay"></a>

```go
func AutovacuumVacuumCostDelay() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumCostLimit`<sup>Required</sup> <a name="AutovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimit"></a>

```go
func AutovacuumVacuumCostLimit() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumScaleFactor`<sup>Required</sup> <a name="AutovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactor"></a>

```go
func AutovacuumVacuumScaleFactor() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumThreshold`<sup>Required</sup> <a name="AutovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThreshold"></a>

```go
func AutovacuumVacuumThreshold() *f64
```

- *Type:* *f64

---

##### `BackupHour`<sup>Required</sup> <a name="BackupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHour"></a>

```go
func BackupHour() *f64
```

- *Type:* *f64

---

##### `BackupMinute`<sup>Required</sup> <a name="BackupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinute"></a>

```go
func BackupMinute() *f64
```

- *Type:* *f64

---

##### `BgwriterDelay`<sup>Required</sup> <a name="BgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelay"></a>

```go
func BgwriterDelay() *f64
```

- *Type:* *f64

---

##### `BgwriterFlushAfter`<sup>Required</sup> <a name="BgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfter"></a>

```go
func BgwriterFlushAfter() *f64
```

- *Type:* *f64

---

##### `BgwriterLruMaxpages`<sup>Required</sup> <a name="BgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpages"></a>

```go
func BgwriterLruMaxpages() *f64
```

- *Type:* *f64

---

##### `BgwriterLruMultiplier`<sup>Required</sup> <a name="BgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplier"></a>

```go
func BgwriterLruMultiplier() *f64
```

- *Type:* *f64

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `DeadlockTimeout`<sup>Required</sup> <a name="DeadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeout"></a>

```go
func DeadlockTimeout() *f64
```

- *Type:* *f64

---

##### `DefaultToastCompression`<sup>Required</sup> <a name="DefaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompression"></a>

```go
func DefaultToastCompression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdleInTransactionSessionTimeout`<sup>Required</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeout"></a>

```go
func IdleInTransactionSessionTimeout() *f64
```

- *Type:* *f64

---

##### `Jit`<sup>Required</sup> <a name="Jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jit"></a>

```go
func Jit() interface{}
```

- *Type:* interface{}

---

##### `LogAutovacuumMinDuration`<sup>Required</sup> <a name="LogAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDuration"></a>

```go
func LogAutovacuumMinDuration() *f64
```

- *Type:* *f64

---

##### `LogErrorVerbosity`<sup>Required</sup> <a name="LogErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosity"></a>

```go
func LogErrorVerbosity() *string
```

- *Type:* *string

---

##### `LogLinePrefix`<sup>Required</sup> <a name="LogLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefix"></a>

```go
func LogLinePrefix() *string
```

- *Type:* *string

---

##### `LogMinDurationStatement`<sup>Required</sup> <a name="LogMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatement"></a>

```go
func LogMinDurationStatement() *f64
```

- *Type:* *f64

---

##### `MaxFilesPerProcess`<sup>Required</sup> <a name="MaxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcess"></a>

```go
func MaxFilesPerProcess() *f64
```

- *Type:* *f64

---

##### `MaxLocksPerTransaction`<sup>Required</sup> <a name="MaxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransaction"></a>

```go
func MaxLocksPerTransaction() *f64
```

- *Type:* *f64

---

##### `MaxLogicalReplicationWorkers`<sup>Required</sup> <a name="MaxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkers"></a>

```go
func MaxLogicalReplicationWorkers() *f64
```

- *Type:* *f64

---

##### `MaxParallelWorkers`<sup>Required</sup> <a name="MaxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkers"></a>

```go
func MaxParallelWorkers() *f64
```

- *Type:* *f64

---

##### `MaxParallelWorkersPerGather`<sup>Required</sup> <a name="MaxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGather"></a>

```go
func MaxParallelWorkersPerGather() *f64
```

- *Type:* *f64

---

##### `MaxPredLocksPerTransaction`<sup>Required</sup> <a name="MaxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransaction"></a>

```go
func MaxPredLocksPerTransaction() *f64
```

- *Type:* *f64

---

##### `MaxPreparedTransactions`<sup>Required</sup> <a name="MaxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactions"></a>

```go
func MaxPreparedTransactions() *f64
```

- *Type:* *f64

---

##### `MaxReplicationSlots`<sup>Required</sup> <a name="MaxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlots"></a>

```go
func MaxReplicationSlots() *f64
```

- *Type:* *f64

---

##### `MaxStackDepth`<sup>Required</sup> <a name="MaxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepth"></a>

```go
func MaxStackDepth() *f64
```

- *Type:* *f64

---

##### `MaxStandbyArchiveDelay`<sup>Required</sup> <a name="MaxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelay"></a>

```go
func MaxStandbyArchiveDelay() *f64
```

- *Type:* *f64

---

##### `MaxStandbyStreamingDelay`<sup>Required</sup> <a name="MaxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelay"></a>

```go
func MaxStandbyStreamingDelay() *f64
```

- *Type:* *f64

---

##### `MaxWalSenders`<sup>Required</sup> <a name="MaxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSenders"></a>

```go
func MaxWalSenders() *f64
```

- *Type:* *f64

---

##### `MaxWorkerProcesses`<sup>Required</sup> <a name="MaxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcesses"></a>

```go
func MaxWorkerProcesses() *f64
```

- *Type:* *f64

---

##### `PgPartmanBgwInterval`<sup>Required</sup> <a name="PgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwInterval"></a>

```go
func PgPartmanBgwInterval() *f64
```

- *Type:* *f64

---

##### `PgPartmanBgwRole`<sup>Required</sup> <a name="PgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRole"></a>

```go
func PgPartmanBgwRole() *string
```

- *Type:* *string

---

##### `PgStatStatementsTrack`<sup>Required</sup> <a name="PgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrack"></a>

```go
func PgStatStatementsTrack() *string
```

- *Type:* *string

---

##### `SharedBuffersPercentage`<sup>Required</sup> <a name="SharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentage"></a>

```go
func SharedBuffersPercentage() *f64
```

- *Type:* *f64

---

##### `TempFileLimit`<sup>Required</sup> <a name="TempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimit"></a>

```go
func TempFileLimit() *f64
```

- *Type:* *f64

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `TrackActivityQuerySize`<sup>Required</sup> <a name="TrackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySize"></a>

```go
func TrackActivityQuerySize() *f64
```

- *Type:* *f64

---

##### `TrackCommitTimestamp`<sup>Required</sup> <a name="TrackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestamp"></a>

```go
func TrackCommitTimestamp() *string
```

- *Type:* *string

---

##### `TrackFunctions`<sup>Required</sup> <a name="TrackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctions"></a>

```go
func TrackFunctions() *string
```

- *Type:* *string

---

##### `TrackIoTiming`<sup>Required</sup> <a name="TrackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTiming"></a>

```go
func TrackIoTiming() *string
```

- *Type:* *string

---

##### `WalSenderTimeout`<sup>Required</sup> <a name="WalSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeout"></a>

```go
func WalSenderTimeout() *f64
```

- *Type:* *f64

---

##### `WalWriterDelay`<sup>Required</sup> <a name="WalWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelay"></a>

```go
func WalWriterDelay() *f64
```

- *Type:* *f64

---

##### `WorkMem`<sup>Required</sup> <a name="WorkMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMem"></a>

```go
func WorkMem() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePostgresqlConfigConfig <a name="DatabasePostgresqlConfigConfig" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasepostgresqlconfig"

&databasepostgresqlconfig.DatabasePostgresqlConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	AutovacuumAnalyzeScaleFactor: *f64,
	AutovacuumAnalyzeThreshold: *f64,
	AutovacuumFreezeMaxAge: *f64,
	AutovacuumMaxWorkers: *f64,
	AutovacuumNaptime: *f64,
	AutovacuumVacuumCostDelay: *f64,
	AutovacuumVacuumCostLimit: *f64,
	AutovacuumVacuumScaleFactor: *f64,
	AutovacuumVacuumThreshold: *f64,
	BackupHour: *f64,
	BackupMinute: *f64,
	BgwriterDelay: *f64,
	BgwriterFlushAfter: *f64,
	BgwriterLruMaxpages: *f64,
	BgwriterLruMultiplier: *f64,
	DeadlockTimeout: *f64,
	DefaultToastCompression: *string,
	Id: *string,
	IdleInTransactionSessionTimeout: *f64,
	Jit: interface{},
	LogAutovacuumMinDuration: *f64,
	LogErrorVerbosity: *string,
	LogLinePrefix: *string,
	LogMinDurationStatement: *f64,
	MaxFilesPerProcess: *f64,
	MaxLocksPerTransaction: *f64,
	MaxLogicalReplicationWorkers: *f64,
	MaxParallelWorkers: *f64,
	MaxParallelWorkersPerGather: *f64,
	MaxPredLocksPerTransaction: *f64,
	MaxPreparedTransactions: *f64,
	MaxReplicationSlots: *f64,
	MaxStackDepth: *f64,
	MaxStandbyArchiveDelay: *f64,
	MaxStandbyStreamingDelay: *f64,
	MaxWalSenders: *f64,
	MaxWorkerProcesses: *f64,
	Pgbouncer: interface{},
	PgPartmanBgwInterval: *f64,
	PgPartmanBgwRole: *string,
	PgStatStatementsTrack: *string,
	SharedBuffersPercentage: *f64,
	TempFileLimit: *f64,
	Timescaledb: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb,
	Timezone: *string,
	TrackActivityQuerySize: *f64,
	TrackCommitTimestamp: *string,
	TrackFunctions: *string,
	TrackIoTiming: *string,
	WalSenderTimeout: *f64,
	WalWriterDelay: *f64,
	WorkMem: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeScaleFactor">AutovacuumAnalyzeScaleFactor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeThreshold">AutovacuumAnalyzeThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumFreezeMaxAge">AutovacuumFreezeMaxAge</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumMaxWorkers">AutovacuumMaxWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumNaptime">AutovacuumNaptime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostDelay">AutovacuumVacuumCostDelay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostLimit">AutovacuumVacuumCostLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumScaleFactor">AutovacuumVacuumScaleFactor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumThreshold">AutovacuumVacuumThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupHour">BackupHour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupMinute">BackupMinute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterDelay">BgwriterDelay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterFlushAfter">BgwriterFlushAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMaxpages">BgwriterLruMaxpages</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMultiplier">BgwriterLruMultiplier</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.deadlockTimeout">DeadlockTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.defaultToastCompression">DefaultToastCompression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.jit">Jit</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logAutovacuumMinDuration">LogAutovacuumMinDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logErrorVerbosity">LogErrorVerbosity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logLinePrefix">LogLinePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logMinDurationStatement">LogMinDurationStatement</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxFilesPerProcess">MaxFilesPerProcess</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLocksPerTransaction">MaxLocksPerTransaction</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLogicalReplicationWorkers">MaxLogicalReplicationWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkers">MaxParallelWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkersPerGather">MaxParallelWorkersPerGather</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPredLocksPerTransaction">MaxPredLocksPerTransaction</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPreparedTransactions">MaxPreparedTransactions</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxReplicationSlots">MaxReplicationSlots</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStackDepth">MaxStackDepth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyArchiveDelay">MaxStandbyArchiveDelay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyStreamingDelay">MaxStandbyStreamingDelay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWalSenders">MaxWalSenders</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWorkerProcesses">MaxWorkerProcesses</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgbouncer">Pgbouncer</a></code> | <code>interface{}</code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwInterval">PgPartmanBgwInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwRole">PgPartmanBgwRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgStatStatementsTrack">PgStatStatementsTrack</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.sharedBuffersPercentage">SharedBuffersPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.tempFileLimit">TempFileLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timescaledb">Timescaledb</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | timescaledb block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackActivityQuerySize">TrackActivityQuerySize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackCommitTimestamp">TrackCommitTimestamp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackFunctions">TrackFunctions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackIoTiming">TrackIoTiming</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walSenderTimeout">WalSenderTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walWriterDelay">WalWriterDelay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.workMem">WorkMem</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}.

---

##### `AutovacuumAnalyzeScaleFactor`<sup>Optional</sup> <a name="AutovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeScaleFactor"></a>

```go
AutovacuumAnalyzeScaleFactor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}.

---

##### `AutovacuumAnalyzeThreshold`<sup>Optional</sup> <a name="AutovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeThreshold"></a>

```go
AutovacuumAnalyzeThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}.

---

##### `AutovacuumFreezeMaxAge`<sup>Optional</sup> <a name="AutovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumFreezeMaxAge"></a>

```go
AutovacuumFreezeMaxAge *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}.

---

##### `AutovacuumMaxWorkers`<sup>Optional</sup> <a name="AutovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumMaxWorkers"></a>

```go
AutovacuumMaxWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}.

---

##### `AutovacuumNaptime`<sup>Optional</sup> <a name="AutovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumNaptime"></a>

```go
AutovacuumNaptime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}.

---

##### `AutovacuumVacuumCostDelay`<sup>Optional</sup> <a name="AutovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostDelay"></a>

```go
AutovacuumVacuumCostDelay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}.

---

##### `AutovacuumVacuumCostLimit`<sup>Optional</sup> <a name="AutovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostLimit"></a>

```go
AutovacuumVacuumCostLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}.

---

##### `AutovacuumVacuumScaleFactor`<sup>Optional</sup> <a name="AutovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumScaleFactor"></a>

```go
AutovacuumVacuumScaleFactor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}.

---

##### `AutovacuumVacuumThreshold`<sup>Optional</sup> <a name="AutovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumThreshold"></a>

```go
AutovacuumVacuumThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}.

---

##### `BackupHour`<sup>Optional</sup> <a name="BackupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupHour"></a>

```go
BackupHour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}.

---

##### `BackupMinute`<sup>Optional</sup> <a name="BackupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupMinute"></a>

```go
BackupMinute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}.

---

##### `BgwriterDelay`<sup>Optional</sup> <a name="BgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterDelay"></a>

```go
BgwriterDelay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}.

---

##### `BgwriterFlushAfter`<sup>Optional</sup> <a name="BgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterFlushAfter"></a>

```go
BgwriterFlushAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}.

---

##### `BgwriterLruMaxpages`<sup>Optional</sup> <a name="BgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMaxpages"></a>

```go
BgwriterLruMaxpages *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}.

---

##### `BgwriterLruMultiplier`<sup>Optional</sup> <a name="BgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMultiplier"></a>

```go
BgwriterLruMultiplier *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}.

---

##### `DeadlockTimeout`<sup>Optional</sup> <a name="DeadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.deadlockTimeout"></a>

```go
DeadlockTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}.

---

##### `DefaultToastCompression`<sup>Optional</sup> <a name="DefaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.defaultToastCompression"></a>

```go
DefaultToastCompression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleInTransactionSessionTimeout`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.idleInTransactionSessionTimeout"></a>

```go
IdleInTransactionSessionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}.

---

##### `Jit`<sup>Optional</sup> <a name="Jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.jit"></a>

```go
Jit interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}.

---

##### `LogAutovacuumMinDuration`<sup>Optional</sup> <a name="LogAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logAutovacuumMinDuration"></a>

```go
LogAutovacuumMinDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}.

---

##### `LogErrorVerbosity`<sup>Optional</sup> <a name="LogErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logErrorVerbosity"></a>

```go
LogErrorVerbosity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}.

---

##### `LogLinePrefix`<sup>Optional</sup> <a name="LogLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logLinePrefix"></a>

```go
LogLinePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}.

---

##### `LogMinDurationStatement`<sup>Optional</sup> <a name="LogMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logMinDurationStatement"></a>

```go
LogMinDurationStatement *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}.

---

##### `MaxFilesPerProcess`<sup>Optional</sup> <a name="MaxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxFilesPerProcess"></a>

```go
MaxFilesPerProcess *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}.

---

##### `MaxLocksPerTransaction`<sup>Optional</sup> <a name="MaxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLocksPerTransaction"></a>

```go
MaxLocksPerTransaction *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}.

---

##### `MaxLogicalReplicationWorkers`<sup>Optional</sup> <a name="MaxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLogicalReplicationWorkers"></a>

```go
MaxLogicalReplicationWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}.

---

##### `MaxParallelWorkers`<sup>Optional</sup> <a name="MaxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkers"></a>

```go
MaxParallelWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}.

---

##### `MaxParallelWorkersPerGather`<sup>Optional</sup> <a name="MaxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkersPerGather"></a>

```go
MaxParallelWorkersPerGather *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}.

---

##### `MaxPredLocksPerTransaction`<sup>Optional</sup> <a name="MaxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPredLocksPerTransaction"></a>

```go
MaxPredLocksPerTransaction *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}.

---

##### `MaxPreparedTransactions`<sup>Optional</sup> <a name="MaxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPreparedTransactions"></a>

```go
MaxPreparedTransactions *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}.

---

##### `MaxReplicationSlots`<sup>Optional</sup> <a name="MaxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxReplicationSlots"></a>

```go
MaxReplicationSlots *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}.

---

##### `MaxStackDepth`<sup>Optional</sup> <a name="MaxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStackDepth"></a>

```go
MaxStackDepth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}.

---

##### `MaxStandbyArchiveDelay`<sup>Optional</sup> <a name="MaxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyArchiveDelay"></a>

```go
MaxStandbyArchiveDelay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}.

---

##### `MaxStandbyStreamingDelay`<sup>Optional</sup> <a name="MaxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyStreamingDelay"></a>

```go
MaxStandbyStreamingDelay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}.

---

##### `MaxWalSenders`<sup>Optional</sup> <a name="MaxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWalSenders"></a>

```go
MaxWalSenders *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}.

---

##### `MaxWorkerProcesses`<sup>Optional</sup> <a name="MaxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWorkerProcesses"></a>

```go
MaxWorkerProcesses *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}.

---

##### `Pgbouncer`<sup>Optional</sup> <a name="Pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgbouncer"></a>

```go
Pgbouncer interface{}
```

- *Type:* interface{}

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#pgbouncer DatabasePostgresqlConfig#pgbouncer}

---

##### `PgPartmanBgwInterval`<sup>Optional</sup> <a name="PgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwInterval"></a>

```go
PgPartmanBgwInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}.

---

##### `PgPartmanBgwRole`<sup>Optional</sup> <a name="PgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwRole"></a>

```go
PgPartmanBgwRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}.

---

##### `PgStatStatementsTrack`<sup>Optional</sup> <a name="PgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgStatStatementsTrack"></a>

```go
PgStatStatementsTrack *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}.

---

##### `SharedBuffersPercentage`<sup>Optional</sup> <a name="SharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.sharedBuffersPercentage"></a>

```go
SharedBuffersPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}.

---

##### `TempFileLimit`<sup>Optional</sup> <a name="TempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.tempFileLimit"></a>

```go
TempFileLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}.

---

##### `Timescaledb`<sup>Optional</sup> <a name="Timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timescaledb"></a>

```go
Timescaledb DatabasePostgresqlConfigTimescaledb
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#timescaledb DatabasePostgresqlConfig#timescaledb}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}.

---

##### `TrackActivityQuerySize`<sup>Optional</sup> <a name="TrackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackActivityQuerySize"></a>

```go
TrackActivityQuerySize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}.

---

##### `TrackCommitTimestamp`<sup>Optional</sup> <a name="TrackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackCommitTimestamp"></a>

```go
TrackCommitTimestamp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}.

---

##### `TrackFunctions`<sup>Optional</sup> <a name="TrackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackFunctions"></a>

```go
TrackFunctions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}.

---

##### `TrackIoTiming`<sup>Optional</sup> <a name="TrackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackIoTiming"></a>

```go
TrackIoTiming *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}.

---

##### `WalSenderTimeout`<sup>Optional</sup> <a name="WalSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walSenderTimeout"></a>

```go
WalSenderTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}.

---

##### `WalWriterDelay`<sup>Optional</sup> <a name="WalWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walWriterDelay"></a>

```go
WalWriterDelay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}.

---

##### `WorkMem`<sup>Optional</sup> <a name="WorkMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.workMem"></a>

```go
WorkMem *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}.

---

### DatabasePostgresqlConfigPgbouncer <a name="DatabasePostgresqlConfigPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasepostgresqlconfig"

&databasepostgresqlconfig.DatabasePostgresqlConfigPgbouncer {
	AutodbIdleTimeout: *f64,
	AutodbMaxDbConnections: *f64,
	AutodbPoolMode: *string,
	AutodbPoolSize: *f64,
	IgnoreStartupParameters: *[]*string,
	MinPoolSize: *f64,
	ServerIdleTimeout: *f64,
	ServerLifetime: *f64,
	ServerResetQueryAlways: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbIdleTimeout">AutodbIdleTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autodb_idle_timeout DatabasePostgresqlConfig#autodb_idle_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbMaxDbConnections">AutodbMaxDbConnections</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autodb_max_db_connections DatabasePostgresqlConfig#autodb_max_db_connections}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolMode">AutodbPoolMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autodb_pool_mode DatabasePostgresqlConfig#autodb_pool_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolSize">AutodbPoolSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autodb_pool_size DatabasePostgresqlConfig#autodb_pool_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.ignoreStartupParameters">IgnoreStartupParameters</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#ignore_startup_parameters DatabasePostgresqlConfig#ignore_startup_parameters}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.minPoolSize">MinPoolSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#min_pool_size DatabasePostgresqlConfig#min_pool_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverIdleTimeout">ServerIdleTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#server_idle_timeout DatabasePostgresqlConfig#server_idle_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverLifetime">ServerLifetime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#server_lifetime DatabasePostgresqlConfig#server_lifetime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverResetQueryAlways">ServerResetQueryAlways</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#server_reset_query_always DatabasePostgresqlConfig#server_reset_query_always}. |

---

##### `AutodbIdleTimeout`<sup>Optional</sup> <a name="AutodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbIdleTimeout"></a>

```go
AutodbIdleTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autodb_idle_timeout DatabasePostgresqlConfig#autodb_idle_timeout}.

---

##### `AutodbMaxDbConnections`<sup>Optional</sup> <a name="AutodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbMaxDbConnections"></a>

```go
AutodbMaxDbConnections *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autodb_max_db_connections DatabasePostgresqlConfig#autodb_max_db_connections}.

---

##### `AutodbPoolMode`<sup>Optional</sup> <a name="AutodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolMode"></a>

```go
AutodbPoolMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autodb_pool_mode DatabasePostgresqlConfig#autodb_pool_mode}.

---

##### `AutodbPoolSize`<sup>Optional</sup> <a name="AutodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolSize"></a>

```go
AutodbPoolSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#autodb_pool_size DatabasePostgresqlConfig#autodb_pool_size}.

---

##### `IgnoreStartupParameters`<sup>Optional</sup> <a name="IgnoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.ignoreStartupParameters"></a>

```go
IgnoreStartupParameters *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#ignore_startup_parameters DatabasePostgresqlConfig#ignore_startup_parameters}.

---

##### `MinPoolSize`<sup>Optional</sup> <a name="MinPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.minPoolSize"></a>

```go
MinPoolSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#min_pool_size DatabasePostgresqlConfig#min_pool_size}.

---

##### `ServerIdleTimeout`<sup>Optional</sup> <a name="ServerIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverIdleTimeout"></a>

```go
ServerIdleTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#server_idle_timeout DatabasePostgresqlConfig#server_idle_timeout}.

---

##### `ServerLifetime`<sup>Optional</sup> <a name="ServerLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverLifetime"></a>

```go
ServerLifetime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#server_lifetime DatabasePostgresqlConfig#server_lifetime}.

---

##### `ServerResetQueryAlways`<sup>Optional</sup> <a name="ServerResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverResetQueryAlways"></a>

```go
ServerResetQueryAlways interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#server_reset_query_always DatabasePostgresqlConfig#server_reset_query_always}.

---

### DatabasePostgresqlConfigTimescaledb <a name="DatabasePostgresqlConfigTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasepostgresqlconfig"

&databasepostgresqlconfig.DatabasePostgresqlConfigTimescaledb {
	MaxBackgroundWorkers: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.property.maxBackgroundWorkers">MaxBackgroundWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_background_workers DatabasePostgresqlConfig#max_background_workers}. |

---

##### `MaxBackgroundWorkers`<sup>Optional</sup> <a name="MaxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.property.maxBackgroundWorkers"></a>

```go
MaxBackgroundWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/database_postgresql_config#max_background_workers DatabasePostgresqlConfig#max_background_workers}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePostgresqlConfigPgbouncerList <a name="DatabasePostgresqlConfigPgbouncerList" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasepostgresqlconfig"

databasepostgresqlconfig.NewDatabasePostgresqlConfigPgbouncerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabasePostgresqlConfigPgbouncerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get"></a>

```go
func Get(index *f64) DatabasePostgresqlConfigPgbouncerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabasePostgresqlConfigPgbouncerOutputReference <a name="DatabasePostgresqlConfigPgbouncerOutputReference" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasepostgresqlconfig"

databasepostgresqlconfig.NewDatabasePostgresqlConfigPgbouncerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabasePostgresqlConfigPgbouncerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbIdleTimeout">ResetAutodbIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbMaxDbConnections">ResetAutodbMaxDbConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolMode">ResetAutodbPoolMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolSize">ResetAutodbPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetIgnoreStartupParameters">ResetIgnoreStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetMinPoolSize">ResetMinPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerIdleTimeout">ResetServerIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerLifetime">ResetServerLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerResetQueryAlways">ResetServerResetQueryAlways</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutodbIdleTimeout` <a name="ResetAutodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbIdleTimeout"></a>

```go
func ResetAutodbIdleTimeout()
```

##### `ResetAutodbMaxDbConnections` <a name="ResetAutodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbMaxDbConnections"></a>

```go
func ResetAutodbMaxDbConnections()
```

##### `ResetAutodbPoolMode` <a name="ResetAutodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolMode"></a>

```go
func ResetAutodbPoolMode()
```

##### `ResetAutodbPoolSize` <a name="ResetAutodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolSize"></a>

```go
func ResetAutodbPoolSize()
```

##### `ResetIgnoreStartupParameters` <a name="ResetIgnoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetIgnoreStartupParameters"></a>

```go
func ResetIgnoreStartupParameters()
```

##### `ResetMinPoolSize` <a name="ResetMinPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetMinPoolSize"></a>

```go
func ResetMinPoolSize()
```

##### `ResetServerIdleTimeout` <a name="ResetServerIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerIdleTimeout"></a>

```go
func ResetServerIdleTimeout()
```

##### `ResetServerLifetime` <a name="ResetServerLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerLifetime"></a>

```go
func ResetServerLifetime()
```

##### `ResetServerResetQueryAlways` <a name="ResetServerResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerResetQueryAlways"></a>

```go
func ResetServerResetQueryAlways()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeoutInput">AutodbIdleTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnectionsInput">AutodbMaxDbConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolModeInput">AutodbPoolModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSizeInput">AutodbPoolSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParametersInput">IgnoreStartupParametersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSizeInput">MinPoolSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeoutInput">ServerIdleTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetimeInput">ServerLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlwaysInput">ServerResetQueryAlwaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeout">AutodbIdleTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnections">AutodbMaxDbConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolMode">AutodbPoolMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSize">AutodbPoolSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParameters">IgnoreStartupParameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSize">MinPoolSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeout">ServerIdleTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetime">ServerLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlways">ServerResetQueryAlways</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutodbIdleTimeoutInput`<sup>Optional</sup> <a name="AutodbIdleTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeoutInput"></a>

```go
func AutodbIdleTimeoutInput() *f64
```

- *Type:* *f64

---

##### `AutodbMaxDbConnectionsInput`<sup>Optional</sup> <a name="AutodbMaxDbConnectionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnectionsInput"></a>

```go
func AutodbMaxDbConnectionsInput() *f64
```

- *Type:* *f64

---

##### `AutodbPoolModeInput`<sup>Optional</sup> <a name="AutodbPoolModeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolModeInput"></a>

```go
func AutodbPoolModeInput() *string
```

- *Type:* *string

---

##### `AutodbPoolSizeInput`<sup>Optional</sup> <a name="AutodbPoolSizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSizeInput"></a>

```go
func AutodbPoolSizeInput() *f64
```

- *Type:* *f64

---

##### `IgnoreStartupParametersInput`<sup>Optional</sup> <a name="IgnoreStartupParametersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParametersInput"></a>

```go
func IgnoreStartupParametersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MinPoolSizeInput`<sup>Optional</sup> <a name="MinPoolSizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSizeInput"></a>

```go
func MinPoolSizeInput() *f64
```

- *Type:* *f64

---

##### `ServerIdleTimeoutInput`<sup>Optional</sup> <a name="ServerIdleTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeoutInput"></a>

```go
func ServerIdleTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ServerLifetimeInput`<sup>Optional</sup> <a name="ServerLifetimeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetimeInput"></a>

```go
func ServerLifetimeInput() *f64
```

- *Type:* *f64

---

##### `ServerResetQueryAlwaysInput`<sup>Optional</sup> <a name="ServerResetQueryAlwaysInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlwaysInput"></a>

```go
func ServerResetQueryAlwaysInput() interface{}
```

- *Type:* interface{}

---

##### `AutodbIdleTimeout`<sup>Required</sup> <a name="AutodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeout"></a>

```go
func AutodbIdleTimeout() *f64
```

- *Type:* *f64

---

##### `AutodbMaxDbConnections`<sup>Required</sup> <a name="AutodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnections"></a>

```go
func AutodbMaxDbConnections() *f64
```

- *Type:* *f64

---

##### `AutodbPoolMode`<sup>Required</sup> <a name="AutodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolMode"></a>

```go
func AutodbPoolMode() *string
```

- *Type:* *string

---

##### `AutodbPoolSize`<sup>Required</sup> <a name="AutodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSize"></a>

```go
func AutodbPoolSize() *f64
```

- *Type:* *f64

---

##### `IgnoreStartupParameters`<sup>Required</sup> <a name="IgnoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParameters"></a>

```go
func IgnoreStartupParameters() *[]*string
```

- *Type:* *[]*string

---

##### `MinPoolSize`<sup>Required</sup> <a name="MinPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSize"></a>

```go
func MinPoolSize() *f64
```

- *Type:* *f64

---

##### `ServerIdleTimeout`<sup>Required</sup> <a name="ServerIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeout"></a>

```go
func ServerIdleTimeout() *f64
```

- *Type:* *f64

---

##### `ServerLifetime`<sup>Required</sup> <a name="ServerLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetime"></a>

```go
func ServerLifetime() *f64
```

- *Type:* *f64

---

##### `ServerResetQueryAlways`<sup>Required</sup> <a name="ServerResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlways"></a>

```go
func ServerResetQueryAlways() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabasePostgresqlConfigTimescaledbOutputReference <a name="DatabasePostgresqlConfigTimescaledbOutputReference" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/databasepostgresqlconfig"

databasepostgresqlconfig.NewDatabasePostgresqlConfigTimescaledbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabasePostgresqlConfigTimescaledbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resetMaxBackgroundWorkers">ResetMaxBackgroundWorkers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBackgroundWorkers` <a name="ResetMaxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resetMaxBackgroundWorkers"></a>

```go
func ResetMaxBackgroundWorkers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkersInput">MaxBackgroundWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkers">MaxBackgroundWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxBackgroundWorkersInput`<sup>Optional</sup> <a name="MaxBackgroundWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkersInput"></a>

```go
func MaxBackgroundWorkersInput() *f64
```

- *Type:* *f64

---

##### `MaxBackgroundWorkers`<sup>Required</sup> <a name="MaxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkers"></a>

```go
func MaxBackgroundWorkers() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabasePostgresqlConfigTimescaledb
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---



