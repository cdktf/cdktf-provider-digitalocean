# `databasePostgresqlConfig` Submodule <a name="`databasePostgresqlConfig` Submodule" id="@cdktf/provider-digitalocean.databasePostgresqlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePostgresqlConfig <a name="DatabasePostgresqlConfig" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config digitalocean_database_postgresql_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabasePostgresqlConfig(Construct Scope, string Id, DatabasePostgresqlConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig">DatabasePostgresqlConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPgbouncer` <a name="PutPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer"></a>

```csharp
private void PutPgbouncer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer.parameter.value"></a>

- *Type:* object

---

##### `PutTimescaledb` <a name="PutTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb"></a>

```csharp
private void PutTimescaledb(DatabasePostgresqlConfigTimescaledb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---

##### `ResetAutovacuumAnalyzeScaleFactor` <a name="ResetAutovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeScaleFactor"></a>

```csharp
private void ResetAutovacuumAnalyzeScaleFactor()
```

##### `ResetAutovacuumAnalyzeThreshold` <a name="ResetAutovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeThreshold"></a>

```csharp
private void ResetAutovacuumAnalyzeThreshold()
```

##### `ResetAutovacuumFreezeMaxAge` <a name="ResetAutovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumFreezeMaxAge"></a>

```csharp
private void ResetAutovacuumFreezeMaxAge()
```

##### `ResetAutovacuumMaxWorkers` <a name="ResetAutovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumMaxWorkers"></a>

```csharp
private void ResetAutovacuumMaxWorkers()
```

##### `ResetAutovacuumNaptime` <a name="ResetAutovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumNaptime"></a>

```csharp
private void ResetAutovacuumNaptime()
```

##### `ResetAutovacuumVacuumCostDelay` <a name="ResetAutovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostDelay"></a>

```csharp
private void ResetAutovacuumVacuumCostDelay()
```

##### `ResetAutovacuumVacuumCostLimit` <a name="ResetAutovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostLimit"></a>

```csharp
private void ResetAutovacuumVacuumCostLimit()
```

##### `ResetAutovacuumVacuumScaleFactor` <a name="ResetAutovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumScaleFactor"></a>

```csharp
private void ResetAutovacuumVacuumScaleFactor()
```

##### `ResetAutovacuumVacuumThreshold` <a name="ResetAutovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumThreshold"></a>

```csharp
private void ResetAutovacuumVacuumThreshold()
```

##### `ResetBackupHour` <a name="ResetBackupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupHour"></a>

```csharp
private void ResetBackupHour()
```

##### `ResetBackupMinute` <a name="ResetBackupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupMinute"></a>

```csharp
private void ResetBackupMinute()
```

##### `ResetBgwriterDelay` <a name="ResetBgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterDelay"></a>

```csharp
private void ResetBgwriterDelay()
```

##### `ResetBgwriterFlushAfter` <a name="ResetBgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterFlushAfter"></a>

```csharp
private void ResetBgwriterFlushAfter()
```

##### `ResetBgwriterLruMaxpages` <a name="ResetBgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMaxpages"></a>

```csharp
private void ResetBgwriterLruMaxpages()
```

##### `ResetBgwriterLruMultiplier` <a name="ResetBgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMultiplier"></a>

```csharp
private void ResetBgwriterLruMultiplier()
```

##### `ResetDeadlockTimeout` <a name="ResetDeadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDeadlockTimeout"></a>

```csharp
private void ResetDeadlockTimeout()
```

##### `ResetDefaultToastCompression` <a name="ResetDefaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDefaultToastCompression"></a>

```csharp
private void ResetDefaultToastCompression()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdleInTransactionSessionTimeout` <a name="ResetIdleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetIdleInTransactionSessionTimeout"></a>

```csharp
private void ResetIdleInTransactionSessionTimeout()
```

##### `ResetJit` <a name="ResetJit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetJit"></a>

```csharp
private void ResetJit()
```

##### `ResetLogAutovacuumMinDuration` <a name="ResetLogAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogAutovacuumMinDuration"></a>

```csharp
private void ResetLogAutovacuumMinDuration()
```

##### `ResetLogErrorVerbosity` <a name="ResetLogErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogErrorVerbosity"></a>

```csharp
private void ResetLogErrorVerbosity()
```

##### `ResetLogLinePrefix` <a name="ResetLogLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogLinePrefix"></a>

```csharp
private void ResetLogLinePrefix()
```

##### `ResetLogMinDurationStatement` <a name="ResetLogMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogMinDurationStatement"></a>

```csharp
private void ResetLogMinDurationStatement()
```

##### `ResetMaxFilesPerProcess` <a name="ResetMaxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxFilesPerProcess"></a>

```csharp
private void ResetMaxFilesPerProcess()
```

##### `ResetMaxLocksPerTransaction` <a name="ResetMaxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLocksPerTransaction"></a>

```csharp
private void ResetMaxLocksPerTransaction()
```

##### `ResetMaxLogicalReplicationWorkers` <a name="ResetMaxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLogicalReplicationWorkers"></a>

```csharp
private void ResetMaxLogicalReplicationWorkers()
```

##### `ResetMaxParallelWorkers` <a name="ResetMaxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkers"></a>

```csharp
private void ResetMaxParallelWorkers()
```

##### `ResetMaxParallelWorkersPerGather` <a name="ResetMaxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkersPerGather"></a>

```csharp
private void ResetMaxParallelWorkersPerGather()
```

##### `ResetMaxPredLocksPerTransaction` <a name="ResetMaxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPredLocksPerTransaction"></a>

```csharp
private void ResetMaxPredLocksPerTransaction()
```

##### `ResetMaxPreparedTransactions` <a name="ResetMaxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPreparedTransactions"></a>

```csharp
private void ResetMaxPreparedTransactions()
```

##### `ResetMaxReplicationSlots` <a name="ResetMaxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxReplicationSlots"></a>

```csharp
private void ResetMaxReplicationSlots()
```

##### `ResetMaxStackDepth` <a name="ResetMaxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStackDepth"></a>

```csharp
private void ResetMaxStackDepth()
```

##### `ResetMaxStandbyArchiveDelay` <a name="ResetMaxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyArchiveDelay"></a>

```csharp
private void ResetMaxStandbyArchiveDelay()
```

##### `ResetMaxStandbyStreamingDelay` <a name="ResetMaxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyStreamingDelay"></a>

```csharp
private void ResetMaxStandbyStreamingDelay()
```

##### `ResetMaxWalSenders` <a name="ResetMaxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWalSenders"></a>

```csharp
private void ResetMaxWalSenders()
```

##### `ResetMaxWorkerProcesses` <a name="ResetMaxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWorkerProcesses"></a>

```csharp
private void ResetMaxWorkerProcesses()
```

##### `ResetPgbouncer` <a name="ResetPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgbouncer"></a>

```csharp
private void ResetPgbouncer()
```

##### `ResetPgPartmanBgwInterval` <a name="ResetPgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwInterval"></a>

```csharp
private void ResetPgPartmanBgwInterval()
```

##### `ResetPgPartmanBgwRole` <a name="ResetPgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwRole"></a>

```csharp
private void ResetPgPartmanBgwRole()
```

##### `ResetPgStatStatementsTrack` <a name="ResetPgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgStatStatementsTrack"></a>

```csharp
private void ResetPgStatStatementsTrack()
```

##### `ResetSharedBuffersPercentage` <a name="ResetSharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetSharedBuffersPercentage"></a>

```csharp
private void ResetSharedBuffersPercentage()
```

##### `ResetTempFileLimit` <a name="ResetTempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTempFileLimit"></a>

```csharp
private void ResetTempFileLimit()
```

##### `ResetTimescaledb` <a name="ResetTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimescaledb"></a>

```csharp
private void ResetTimescaledb()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

##### `ResetTrackActivityQuerySize` <a name="ResetTrackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackActivityQuerySize"></a>

```csharp
private void ResetTrackActivityQuerySize()
```

##### `ResetTrackCommitTimestamp` <a name="ResetTrackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackCommitTimestamp"></a>

```csharp
private void ResetTrackCommitTimestamp()
```

##### `ResetTrackFunctions` <a name="ResetTrackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackFunctions"></a>

```csharp
private void ResetTrackFunctions()
```

##### `ResetTrackIoTiming` <a name="ResetTrackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackIoTiming"></a>

```csharp
private void ResetTrackIoTiming()
```

##### `ResetWalSenderTimeout` <a name="ResetWalSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalSenderTimeout"></a>

```csharp
private void ResetWalSenderTimeout()
```

##### `ResetWalWriterDelay` <a name="ResetWalWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalWriterDelay"></a>

```csharp
private void ResetWalWriterDelay()
```

##### `ResetWorkMem` <a name="ResetWorkMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWorkMem"></a>

```csharp
private void ResetWorkMem()
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

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabasePostgresqlConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabasePostgresqlConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabasePostgresqlConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabasePostgresqlConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabasePostgresqlConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabasePostgresqlConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabasePostgresqlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePostgresqlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncer">Pgbouncer</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList">DatabasePostgresqlConfigPgbouncerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledb">Timescaledb</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference">DatabasePostgresqlConfigTimescaledbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactorInput">AutovacuumAnalyzeScaleFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThresholdInput">AutovacuumAnalyzeThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAgeInput">AutovacuumFreezeMaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkersInput">AutovacuumMaxWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptimeInput">AutovacuumNaptimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelayInput">AutovacuumVacuumCostDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimitInput">AutovacuumVacuumCostLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactorInput">AutovacuumVacuumScaleFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThresholdInput">AutovacuumVacuumThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHourInput">BackupHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinuteInput">BackupMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelayInput">BgwriterDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfterInput">BgwriterFlushAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpagesInput">BgwriterLruMaxpagesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplierInput">BgwriterLruMultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeoutInput">DeadlockTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompressionInput">DefaultToastCompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeoutInput">IdleInTransactionSessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jitInput">JitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDurationInput">LogAutovacuumMinDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosityInput">LogErrorVerbosityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefixInput">LogLinePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatementInput">LogMinDurationStatementInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcessInput">MaxFilesPerProcessInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransactionInput">MaxLocksPerTransactionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkersInput">MaxLogicalReplicationWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersInput">MaxParallelWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGatherInput">MaxParallelWorkersPerGatherInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransactionInput">MaxPredLocksPerTransactionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactionsInput">MaxPreparedTransactionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlotsInput">MaxReplicationSlotsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepthInput">MaxStackDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelayInput">MaxStandbyArchiveDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelayInput">MaxStandbyStreamingDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSendersInput">MaxWalSendersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcessesInput">MaxWorkerProcessesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncerInput">PgbouncerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwIntervalInput">PgPartmanBgwIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRoleInput">PgPartmanBgwRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrackInput">PgStatStatementsTrackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentageInput">SharedBuffersPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimitInput">TempFileLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledbInput">TimescaledbInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySizeInput">TrackActivityQuerySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestampInput">TrackCommitTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctionsInput">TrackFunctionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTimingInput">TrackIoTimingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeoutInput">WalSenderTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelayInput">WalWriterDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMemInput">WorkMemInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactor">AutovacuumAnalyzeScaleFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThreshold">AutovacuumAnalyzeThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAge">AutovacuumFreezeMaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkers">AutovacuumMaxWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptime">AutovacuumNaptime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelay">AutovacuumVacuumCostDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimit">AutovacuumVacuumCostLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactor">AutovacuumVacuumScaleFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThreshold">AutovacuumVacuumThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHour">BackupHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinute">BackupMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelay">BgwriterDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfter">BgwriterFlushAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpages">BgwriterLruMaxpages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplier">BgwriterLruMultiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeout">DeadlockTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompression">DefaultToastCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jit">Jit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDuration">LogAutovacuumMinDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosity">LogErrorVerbosity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefix">LogLinePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatement">LogMinDurationStatement</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcess">MaxFilesPerProcess</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransaction">MaxLocksPerTransaction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkers">MaxLogicalReplicationWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkers">MaxParallelWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGather">MaxParallelWorkersPerGather</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransaction">MaxPredLocksPerTransaction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactions">MaxPreparedTransactions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlots">MaxReplicationSlots</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepth">MaxStackDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelay">MaxStandbyArchiveDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelay">MaxStandbyStreamingDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSenders">MaxWalSenders</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcesses">MaxWorkerProcesses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwInterval">PgPartmanBgwInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRole">PgPartmanBgwRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrack">PgStatStatementsTrack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentage">SharedBuffersPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimit">TempFileLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySize">TrackActivityQuerySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestamp">TrackCommitTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctions">TrackFunctions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTiming">TrackIoTiming</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeout">WalSenderTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelay">WalWriterDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMem">WorkMem</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Pgbouncer`<sup>Required</sup> <a name="Pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncer"></a>

```csharp
public DatabasePostgresqlConfigPgbouncerList Pgbouncer { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList">DatabasePostgresqlConfigPgbouncerList</a>

---

##### `Timescaledb`<sup>Required</sup> <a name="Timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledb"></a>

```csharp
public DatabasePostgresqlConfigTimescaledbOutputReference Timescaledb { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference">DatabasePostgresqlConfigTimescaledbOutputReference</a>

---

##### `AutovacuumAnalyzeScaleFactorInput`<sup>Optional</sup> <a name="AutovacuumAnalyzeScaleFactorInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactorInput"></a>

```csharp
public double AutovacuumAnalyzeScaleFactorInput { get; }
```

- *Type:* double

---

##### `AutovacuumAnalyzeThresholdInput`<sup>Optional</sup> <a name="AutovacuumAnalyzeThresholdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThresholdInput"></a>

```csharp
public double AutovacuumAnalyzeThresholdInput { get; }
```

- *Type:* double

---

##### `AutovacuumFreezeMaxAgeInput`<sup>Optional</sup> <a name="AutovacuumFreezeMaxAgeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAgeInput"></a>

```csharp
public double AutovacuumFreezeMaxAgeInput { get; }
```

- *Type:* double

---

##### `AutovacuumMaxWorkersInput`<sup>Optional</sup> <a name="AutovacuumMaxWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkersInput"></a>

```csharp
public double AutovacuumMaxWorkersInput { get; }
```

- *Type:* double

---

##### `AutovacuumNaptimeInput`<sup>Optional</sup> <a name="AutovacuumNaptimeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptimeInput"></a>

```csharp
public double AutovacuumNaptimeInput { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumCostDelayInput`<sup>Optional</sup> <a name="AutovacuumVacuumCostDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelayInput"></a>

```csharp
public double AutovacuumVacuumCostDelayInput { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumCostLimitInput`<sup>Optional</sup> <a name="AutovacuumVacuumCostLimitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimitInput"></a>

```csharp
public double AutovacuumVacuumCostLimitInput { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumScaleFactorInput`<sup>Optional</sup> <a name="AutovacuumVacuumScaleFactorInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactorInput"></a>

```csharp
public double AutovacuumVacuumScaleFactorInput { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumThresholdInput`<sup>Optional</sup> <a name="AutovacuumVacuumThresholdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThresholdInput"></a>

```csharp
public double AutovacuumVacuumThresholdInput { get; }
```

- *Type:* double

---

##### `BackupHourInput`<sup>Optional</sup> <a name="BackupHourInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHourInput"></a>

```csharp
public double BackupHourInput { get; }
```

- *Type:* double

---

##### `BackupMinuteInput`<sup>Optional</sup> <a name="BackupMinuteInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinuteInput"></a>

```csharp
public double BackupMinuteInput { get; }
```

- *Type:* double

---

##### `BgwriterDelayInput`<sup>Optional</sup> <a name="BgwriterDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelayInput"></a>

```csharp
public double BgwriterDelayInput { get; }
```

- *Type:* double

---

##### `BgwriterFlushAfterInput`<sup>Optional</sup> <a name="BgwriterFlushAfterInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfterInput"></a>

```csharp
public double BgwriterFlushAfterInput { get; }
```

- *Type:* double

---

##### `BgwriterLruMaxpagesInput`<sup>Optional</sup> <a name="BgwriterLruMaxpagesInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpagesInput"></a>

```csharp
public double BgwriterLruMaxpagesInput { get; }
```

- *Type:* double

---

##### `BgwriterLruMultiplierInput`<sup>Optional</sup> <a name="BgwriterLruMultiplierInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplierInput"></a>

```csharp
public double BgwriterLruMultiplierInput { get; }
```

- *Type:* double

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `DeadlockTimeoutInput`<sup>Optional</sup> <a name="DeadlockTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeoutInput"></a>

```csharp
public double DeadlockTimeoutInput { get; }
```

- *Type:* double

---

##### `DefaultToastCompressionInput`<sup>Optional</sup> <a name="DefaultToastCompressionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompressionInput"></a>

```csharp
public string DefaultToastCompressionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeoutInput"></a>

```csharp
public double IdleInTransactionSessionTimeoutInput { get; }
```

- *Type:* double

---

##### `JitInput`<sup>Optional</sup> <a name="JitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jitInput"></a>

```csharp
public object JitInput { get; }
```

- *Type:* object

---

##### `LogAutovacuumMinDurationInput`<sup>Optional</sup> <a name="LogAutovacuumMinDurationInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDurationInput"></a>

```csharp
public double LogAutovacuumMinDurationInput { get; }
```

- *Type:* double

---

##### `LogErrorVerbosityInput`<sup>Optional</sup> <a name="LogErrorVerbosityInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosityInput"></a>

```csharp
public string LogErrorVerbosityInput { get; }
```

- *Type:* string

---

##### `LogLinePrefixInput`<sup>Optional</sup> <a name="LogLinePrefixInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefixInput"></a>

```csharp
public string LogLinePrefixInput { get; }
```

- *Type:* string

---

##### `LogMinDurationStatementInput`<sup>Optional</sup> <a name="LogMinDurationStatementInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatementInput"></a>

```csharp
public double LogMinDurationStatementInput { get; }
```

- *Type:* double

---

##### `MaxFilesPerProcessInput`<sup>Optional</sup> <a name="MaxFilesPerProcessInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcessInput"></a>

```csharp
public double MaxFilesPerProcessInput { get; }
```

- *Type:* double

---

##### `MaxLocksPerTransactionInput`<sup>Optional</sup> <a name="MaxLocksPerTransactionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransactionInput"></a>

```csharp
public double MaxLocksPerTransactionInput { get; }
```

- *Type:* double

---

##### `MaxLogicalReplicationWorkersInput`<sup>Optional</sup> <a name="MaxLogicalReplicationWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkersInput"></a>

```csharp
public double MaxLogicalReplicationWorkersInput { get; }
```

- *Type:* double

---

##### `MaxParallelWorkersInput`<sup>Optional</sup> <a name="MaxParallelWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersInput"></a>

```csharp
public double MaxParallelWorkersInput { get; }
```

- *Type:* double

---

##### `MaxParallelWorkersPerGatherInput`<sup>Optional</sup> <a name="MaxParallelWorkersPerGatherInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGatherInput"></a>

```csharp
public double MaxParallelWorkersPerGatherInput { get; }
```

- *Type:* double

---

##### `MaxPredLocksPerTransactionInput`<sup>Optional</sup> <a name="MaxPredLocksPerTransactionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransactionInput"></a>

```csharp
public double MaxPredLocksPerTransactionInput { get; }
```

- *Type:* double

---

##### `MaxPreparedTransactionsInput`<sup>Optional</sup> <a name="MaxPreparedTransactionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactionsInput"></a>

```csharp
public double MaxPreparedTransactionsInput { get; }
```

- *Type:* double

---

##### `MaxReplicationSlotsInput`<sup>Optional</sup> <a name="MaxReplicationSlotsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlotsInput"></a>

```csharp
public double MaxReplicationSlotsInput { get; }
```

- *Type:* double

---

##### `MaxStackDepthInput`<sup>Optional</sup> <a name="MaxStackDepthInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepthInput"></a>

```csharp
public double MaxStackDepthInput { get; }
```

- *Type:* double

---

##### `MaxStandbyArchiveDelayInput`<sup>Optional</sup> <a name="MaxStandbyArchiveDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelayInput"></a>

```csharp
public double MaxStandbyArchiveDelayInput { get; }
```

- *Type:* double

---

##### `MaxStandbyStreamingDelayInput`<sup>Optional</sup> <a name="MaxStandbyStreamingDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelayInput"></a>

```csharp
public double MaxStandbyStreamingDelayInput { get; }
```

- *Type:* double

---

##### `MaxWalSendersInput`<sup>Optional</sup> <a name="MaxWalSendersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSendersInput"></a>

```csharp
public double MaxWalSendersInput { get; }
```

- *Type:* double

---

##### `MaxWorkerProcessesInput`<sup>Optional</sup> <a name="MaxWorkerProcessesInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcessesInput"></a>

```csharp
public double MaxWorkerProcessesInput { get; }
```

- *Type:* double

---

##### `PgbouncerInput`<sup>Optional</sup> <a name="PgbouncerInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncerInput"></a>

```csharp
public object PgbouncerInput { get; }
```

- *Type:* object

---

##### `PgPartmanBgwIntervalInput`<sup>Optional</sup> <a name="PgPartmanBgwIntervalInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwIntervalInput"></a>

```csharp
public double PgPartmanBgwIntervalInput { get; }
```

- *Type:* double

---

##### `PgPartmanBgwRoleInput`<sup>Optional</sup> <a name="PgPartmanBgwRoleInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRoleInput"></a>

```csharp
public string PgPartmanBgwRoleInput { get; }
```

- *Type:* string

---

##### `PgStatStatementsTrackInput`<sup>Optional</sup> <a name="PgStatStatementsTrackInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrackInput"></a>

```csharp
public string PgStatStatementsTrackInput { get; }
```

- *Type:* string

---

##### `SharedBuffersPercentageInput`<sup>Optional</sup> <a name="SharedBuffersPercentageInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentageInput"></a>

```csharp
public double SharedBuffersPercentageInput { get; }
```

- *Type:* double

---

##### `TempFileLimitInput`<sup>Optional</sup> <a name="TempFileLimitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimitInput"></a>

```csharp
public double TempFileLimitInput { get; }
```

- *Type:* double

---

##### `TimescaledbInput`<sup>Optional</sup> <a name="TimescaledbInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledbInput"></a>

```csharp
public DatabasePostgresqlConfigTimescaledb TimescaledbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `TrackActivityQuerySizeInput`<sup>Optional</sup> <a name="TrackActivityQuerySizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySizeInput"></a>

```csharp
public double TrackActivityQuerySizeInput { get; }
```

- *Type:* double

---

##### `TrackCommitTimestampInput`<sup>Optional</sup> <a name="TrackCommitTimestampInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestampInput"></a>

```csharp
public string TrackCommitTimestampInput { get; }
```

- *Type:* string

---

##### `TrackFunctionsInput`<sup>Optional</sup> <a name="TrackFunctionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctionsInput"></a>

```csharp
public string TrackFunctionsInput { get; }
```

- *Type:* string

---

##### `TrackIoTimingInput`<sup>Optional</sup> <a name="TrackIoTimingInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTimingInput"></a>

```csharp
public string TrackIoTimingInput { get; }
```

- *Type:* string

---

##### `WalSenderTimeoutInput`<sup>Optional</sup> <a name="WalSenderTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeoutInput"></a>

```csharp
public double WalSenderTimeoutInput { get; }
```

- *Type:* double

---

##### `WalWriterDelayInput`<sup>Optional</sup> <a name="WalWriterDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelayInput"></a>

```csharp
public double WalWriterDelayInput { get; }
```

- *Type:* double

---

##### `WorkMemInput`<sup>Optional</sup> <a name="WorkMemInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMemInput"></a>

```csharp
public double WorkMemInput { get; }
```

- *Type:* double

---

##### `AutovacuumAnalyzeScaleFactor`<sup>Required</sup> <a name="AutovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactor"></a>

```csharp
public double AutovacuumAnalyzeScaleFactor { get; }
```

- *Type:* double

---

##### `AutovacuumAnalyzeThreshold`<sup>Required</sup> <a name="AutovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThreshold"></a>

```csharp
public double AutovacuumAnalyzeThreshold { get; }
```

- *Type:* double

---

##### `AutovacuumFreezeMaxAge`<sup>Required</sup> <a name="AutovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAge"></a>

```csharp
public double AutovacuumFreezeMaxAge { get; }
```

- *Type:* double

---

##### `AutovacuumMaxWorkers`<sup>Required</sup> <a name="AutovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkers"></a>

```csharp
public double AutovacuumMaxWorkers { get; }
```

- *Type:* double

---

##### `AutovacuumNaptime`<sup>Required</sup> <a name="AutovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptime"></a>

```csharp
public double AutovacuumNaptime { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumCostDelay`<sup>Required</sup> <a name="AutovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelay"></a>

```csharp
public double AutovacuumVacuumCostDelay { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumCostLimit`<sup>Required</sup> <a name="AutovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimit"></a>

```csharp
public double AutovacuumVacuumCostLimit { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumScaleFactor`<sup>Required</sup> <a name="AutovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactor"></a>

```csharp
public double AutovacuumVacuumScaleFactor { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumThreshold`<sup>Required</sup> <a name="AutovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThreshold"></a>

```csharp
public double AutovacuumVacuumThreshold { get; }
```

- *Type:* double

---

##### `BackupHour`<sup>Required</sup> <a name="BackupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHour"></a>

```csharp
public double BackupHour { get; }
```

- *Type:* double

---

##### `BackupMinute`<sup>Required</sup> <a name="BackupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinute"></a>

```csharp
public double BackupMinute { get; }
```

- *Type:* double

---

##### `BgwriterDelay`<sup>Required</sup> <a name="BgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelay"></a>

```csharp
public double BgwriterDelay { get; }
```

- *Type:* double

---

##### `BgwriterFlushAfter`<sup>Required</sup> <a name="BgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfter"></a>

```csharp
public double BgwriterFlushAfter { get; }
```

- *Type:* double

---

##### `BgwriterLruMaxpages`<sup>Required</sup> <a name="BgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpages"></a>

```csharp
public double BgwriterLruMaxpages { get; }
```

- *Type:* double

---

##### `BgwriterLruMultiplier`<sup>Required</sup> <a name="BgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplier"></a>

```csharp
public double BgwriterLruMultiplier { get; }
```

- *Type:* double

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `DeadlockTimeout`<sup>Required</sup> <a name="DeadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeout"></a>

```csharp
public double DeadlockTimeout { get; }
```

- *Type:* double

---

##### `DefaultToastCompression`<sup>Required</sup> <a name="DefaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompression"></a>

```csharp
public string DefaultToastCompression { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdleInTransactionSessionTimeout`<sup>Required</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeout"></a>

```csharp
public double IdleInTransactionSessionTimeout { get; }
```

- *Type:* double

---

##### `Jit`<sup>Required</sup> <a name="Jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jit"></a>

```csharp
public object Jit { get; }
```

- *Type:* object

---

##### `LogAutovacuumMinDuration`<sup>Required</sup> <a name="LogAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDuration"></a>

```csharp
public double LogAutovacuumMinDuration { get; }
```

- *Type:* double

---

##### `LogErrorVerbosity`<sup>Required</sup> <a name="LogErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosity"></a>

```csharp
public string LogErrorVerbosity { get; }
```

- *Type:* string

---

##### `LogLinePrefix`<sup>Required</sup> <a name="LogLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefix"></a>

```csharp
public string LogLinePrefix { get; }
```

- *Type:* string

---

##### `LogMinDurationStatement`<sup>Required</sup> <a name="LogMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatement"></a>

```csharp
public double LogMinDurationStatement { get; }
```

- *Type:* double

---

##### `MaxFilesPerProcess`<sup>Required</sup> <a name="MaxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcess"></a>

```csharp
public double MaxFilesPerProcess { get; }
```

- *Type:* double

---

##### `MaxLocksPerTransaction`<sup>Required</sup> <a name="MaxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransaction"></a>

```csharp
public double MaxLocksPerTransaction { get; }
```

- *Type:* double

---

##### `MaxLogicalReplicationWorkers`<sup>Required</sup> <a name="MaxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkers"></a>

```csharp
public double MaxLogicalReplicationWorkers { get; }
```

- *Type:* double

---

##### `MaxParallelWorkers`<sup>Required</sup> <a name="MaxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkers"></a>

```csharp
public double MaxParallelWorkers { get; }
```

- *Type:* double

---

##### `MaxParallelWorkersPerGather`<sup>Required</sup> <a name="MaxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGather"></a>

```csharp
public double MaxParallelWorkersPerGather { get; }
```

- *Type:* double

---

##### `MaxPredLocksPerTransaction`<sup>Required</sup> <a name="MaxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransaction"></a>

```csharp
public double MaxPredLocksPerTransaction { get; }
```

- *Type:* double

---

##### `MaxPreparedTransactions`<sup>Required</sup> <a name="MaxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactions"></a>

```csharp
public double MaxPreparedTransactions { get; }
```

- *Type:* double

---

##### `MaxReplicationSlots`<sup>Required</sup> <a name="MaxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlots"></a>

```csharp
public double MaxReplicationSlots { get; }
```

- *Type:* double

---

##### `MaxStackDepth`<sup>Required</sup> <a name="MaxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepth"></a>

```csharp
public double MaxStackDepth { get; }
```

- *Type:* double

---

##### `MaxStandbyArchiveDelay`<sup>Required</sup> <a name="MaxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelay"></a>

```csharp
public double MaxStandbyArchiveDelay { get; }
```

- *Type:* double

---

##### `MaxStandbyStreamingDelay`<sup>Required</sup> <a name="MaxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelay"></a>

```csharp
public double MaxStandbyStreamingDelay { get; }
```

- *Type:* double

---

##### `MaxWalSenders`<sup>Required</sup> <a name="MaxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSenders"></a>

```csharp
public double MaxWalSenders { get; }
```

- *Type:* double

---

##### `MaxWorkerProcesses`<sup>Required</sup> <a name="MaxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcesses"></a>

```csharp
public double MaxWorkerProcesses { get; }
```

- *Type:* double

---

##### `PgPartmanBgwInterval`<sup>Required</sup> <a name="PgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwInterval"></a>

```csharp
public double PgPartmanBgwInterval { get; }
```

- *Type:* double

---

##### `PgPartmanBgwRole`<sup>Required</sup> <a name="PgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRole"></a>

```csharp
public string PgPartmanBgwRole { get; }
```

- *Type:* string

---

##### `PgStatStatementsTrack`<sup>Required</sup> <a name="PgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrack"></a>

```csharp
public string PgStatStatementsTrack { get; }
```

- *Type:* string

---

##### `SharedBuffersPercentage`<sup>Required</sup> <a name="SharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentage"></a>

```csharp
public double SharedBuffersPercentage { get; }
```

- *Type:* double

---

##### `TempFileLimit`<sup>Required</sup> <a name="TempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimit"></a>

```csharp
public double TempFileLimit { get; }
```

- *Type:* double

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `TrackActivityQuerySize`<sup>Required</sup> <a name="TrackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySize"></a>

```csharp
public double TrackActivityQuerySize { get; }
```

- *Type:* double

---

##### `TrackCommitTimestamp`<sup>Required</sup> <a name="TrackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestamp"></a>

```csharp
public string TrackCommitTimestamp { get; }
```

- *Type:* string

---

##### `TrackFunctions`<sup>Required</sup> <a name="TrackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctions"></a>

```csharp
public string TrackFunctions { get; }
```

- *Type:* string

---

##### `TrackIoTiming`<sup>Required</sup> <a name="TrackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTiming"></a>

```csharp
public string TrackIoTiming { get; }
```

- *Type:* string

---

##### `WalSenderTimeout`<sup>Required</sup> <a name="WalSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeout"></a>

```csharp
public double WalSenderTimeout { get; }
```

- *Type:* double

---

##### `WalWriterDelay`<sup>Required</sup> <a name="WalWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelay"></a>

```csharp
public double WalWriterDelay { get; }
```

- *Type:* double

---

##### `WorkMem`<sup>Required</sup> <a name="WorkMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMem"></a>

```csharp
public double WorkMem { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePostgresqlConfigConfig <a name="DatabasePostgresqlConfigConfig" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabasePostgresqlConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    double AutovacuumAnalyzeScaleFactor = null,
    double AutovacuumAnalyzeThreshold = null,
    double AutovacuumFreezeMaxAge = null,
    double AutovacuumMaxWorkers = null,
    double AutovacuumNaptime = null,
    double AutovacuumVacuumCostDelay = null,
    double AutovacuumVacuumCostLimit = null,
    double AutovacuumVacuumScaleFactor = null,
    double AutovacuumVacuumThreshold = null,
    double BackupHour = null,
    double BackupMinute = null,
    double BgwriterDelay = null,
    double BgwriterFlushAfter = null,
    double BgwriterLruMaxpages = null,
    double BgwriterLruMultiplier = null,
    double DeadlockTimeout = null,
    string DefaultToastCompression = null,
    string Id = null,
    double IdleInTransactionSessionTimeout = null,
    object Jit = null,
    double LogAutovacuumMinDuration = null,
    string LogErrorVerbosity = null,
    string LogLinePrefix = null,
    double LogMinDurationStatement = null,
    double MaxFilesPerProcess = null,
    double MaxLocksPerTransaction = null,
    double MaxLogicalReplicationWorkers = null,
    double MaxParallelWorkers = null,
    double MaxParallelWorkersPerGather = null,
    double MaxPredLocksPerTransaction = null,
    double MaxPreparedTransactions = null,
    double MaxReplicationSlots = null,
    double MaxStackDepth = null,
    double MaxStandbyArchiveDelay = null,
    double MaxStandbyStreamingDelay = null,
    double MaxWalSenders = null,
    double MaxWorkerProcesses = null,
    object Pgbouncer = null,
    double PgPartmanBgwInterval = null,
    string PgPartmanBgwRole = null,
    string PgStatStatementsTrack = null,
    double SharedBuffersPercentage = null,
    double TempFileLimit = null,
    DatabasePostgresqlConfigTimescaledb Timescaledb = null,
    string Timezone = null,
    double TrackActivityQuerySize = null,
    string TrackCommitTimestamp = null,
    string TrackFunctions = null,
    string TrackIoTiming = null,
    double WalSenderTimeout = null,
    double WalWriterDelay = null,
    double WorkMem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeScaleFactor">AutovacuumAnalyzeScaleFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeThreshold">AutovacuumAnalyzeThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumFreezeMaxAge">AutovacuumFreezeMaxAge</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumMaxWorkers">AutovacuumMaxWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumNaptime">AutovacuumNaptime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostDelay">AutovacuumVacuumCostDelay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostLimit">AutovacuumVacuumCostLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumScaleFactor">AutovacuumVacuumScaleFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumThreshold">AutovacuumVacuumThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupHour">BackupHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupMinute">BackupMinute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterDelay">BgwriterDelay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterFlushAfter">BgwriterFlushAfter</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMaxpages">BgwriterLruMaxpages</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMultiplier">BgwriterLruMultiplier</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.deadlockTimeout">DeadlockTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.defaultToastCompression">DefaultToastCompression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.jit">Jit</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logAutovacuumMinDuration">LogAutovacuumMinDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logErrorVerbosity">LogErrorVerbosity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logLinePrefix">LogLinePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logMinDurationStatement">LogMinDurationStatement</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxFilesPerProcess">MaxFilesPerProcess</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLocksPerTransaction">MaxLocksPerTransaction</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLogicalReplicationWorkers">MaxLogicalReplicationWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkers">MaxParallelWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkersPerGather">MaxParallelWorkersPerGather</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPredLocksPerTransaction">MaxPredLocksPerTransaction</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPreparedTransactions">MaxPreparedTransactions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxReplicationSlots">MaxReplicationSlots</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStackDepth">MaxStackDepth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyArchiveDelay">MaxStandbyArchiveDelay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyStreamingDelay">MaxStandbyStreamingDelay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWalSenders">MaxWalSenders</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWorkerProcesses">MaxWorkerProcesses</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgbouncer">Pgbouncer</a></code> | <code>object</code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwInterval">PgPartmanBgwInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwRole">PgPartmanBgwRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgStatStatementsTrack">PgStatStatementsTrack</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.sharedBuffersPercentage">SharedBuffersPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.tempFileLimit">TempFileLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timescaledb">Timescaledb</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | timescaledb block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackActivityQuerySize">TrackActivityQuerySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackCommitTimestamp">TrackCommitTimestamp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackFunctions">TrackFunctions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackIoTiming">TrackIoTiming</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walSenderTimeout">WalSenderTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walWriterDelay">WalWriterDelay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.workMem">WorkMem</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}.

---

##### `AutovacuumAnalyzeScaleFactor`<sup>Optional</sup> <a name="AutovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeScaleFactor"></a>

```csharp
public double AutovacuumAnalyzeScaleFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}.

---

##### `AutovacuumAnalyzeThreshold`<sup>Optional</sup> <a name="AutovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeThreshold"></a>

```csharp
public double AutovacuumAnalyzeThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}.

---

##### `AutovacuumFreezeMaxAge`<sup>Optional</sup> <a name="AutovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumFreezeMaxAge"></a>

```csharp
public double AutovacuumFreezeMaxAge { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}.

---

##### `AutovacuumMaxWorkers`<sup>Optional</sup> <a name="AutovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumMaxWorkers"></a>

```csharp
public double AutovacuumMaxWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}.

---

##### `AutovacuumNaptime`<sup>Optional</sup> <a name="AutovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumNaptime"></a>

```csharp
public double AutovacuumNaptime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}.

---

##### `AutovacuumVacuumCostDelay`<sup>Optional</sup> <a name="AutovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostDelay"></a>

```csharp
public double AutovacuumVacuumCostDelay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}.

---

##### `AutovacuumVacuumCostLimit`<sup>Optional</sup> <a name="AutovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostLimit"></a>

```csharp
public double AutovacuumVacuumCostLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}.

---

##### `AutovacuumVacuumScaleFactor`<sup>Optional</sup> <a name="AutovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumScaleFactor"></a>

```csharp
public double AutovacuumVacuumScaleFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}.

---

##### `AutovacuumVacuumThreshold`<sup>Optional</sup> <a name="AutovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumThreshold"></a>

```csharp
public double AutovacuumVacuumThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}.

---

##### `BackupHour`<sup>Optional</sup> <a name="BackupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupHour"></a>

```csharp
public double BackupHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}.

---

##### `BackupMinute`<sup>Optional</sup> <a name="BackupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupMinute"></a>

```csharp
public double BackupMinute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}.

---

##### `BgwriterDelay`<sup>Optional</sup> <a name="BgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterDelay"></a>

```csharp
public double BgwriterDelay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}.

---

##### `BgwriterFlushAfter`<sup>Optional</sup> <a name="BgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterFlushAfter"></a>

```csharp
public double BgwriterFlushAfter { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}.

---

##### `BgwriterLruMaxpages`<sup>Optional</sup> <a name="BgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMaxpages"></a>

```csharp
public double BgwriterLruMaxpages { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}.

---

##### `BgwriterLruMultiplier`<sup>Optional</sup> <a name="BgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMultiplier"></a>

```csharp
public double BgwriterLruMultiplier { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}.

---

##### `DeadlockTimeout`<sup>Optional</sup> <a name="DeadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.deadlockTimeout"></a>

```csharp
public double DeadlockTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}.

---

##### `DefaultToastCompression`<sup>Optional</sup> <a name="DefaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.defaultToastCompression"></a>

```csharp
public string DefaultToastCompression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleInTransactionSessionTimeout`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.idleInTransactionSessionTimeout"></a>

```csharp
public double IdleInTransactionSessionTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}.

---

##### `Jit`<sup>Optional</sup> <a name="Jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.jit"></a>

```csharp
public object Jit { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}.

---

##### `LogAutovacuumMinDuration`<sup>Optional</sup> <a name="LogAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logAutovacuumMinDuration"></a>

```csharp
public double LogAutovacuumMinDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}.

---

##### `LogErrorVerbosity`<sup>Optional</sup> <a name="LogErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logErrorVerbosity"></a>

```csharp
public string LogErrorVerbosity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}.

---

##### `LogLinePrefix`<sup>Optional</sup> <a name="LogLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logLinePrefix"></a>

```csharp
public string LogLinePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}.

---

##### `LogMinDurationStatement`<sup>Optional</sup> <a name="LogMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logMinDurationStatement"></a>

```csharp
public double LogMinDurationStatement { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}.

---

##### `MaxFilesPerProcess`<sup>Optional</sup> <a name="MaxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxFilesPerProcess"></a>

```csharp
public double MaxFilesPerProcess { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}.

---

##### `MaxLocksPerTransaction`<sup>Optional</sup> <a name="MaxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLocksPerTransaction"></a>

```csharp
public double MaxLocksPerTransaction { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}.

---

##### `MaxLogicalReplicationWorkers`<sup>Optional</sup> <a name="MaxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLogicalReplicationWorkers"></a>

```csharp
public double MaxLogicalReplicationWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}.

---

##### `MaxParallelWorkers`<sup>Optional</sup> <a name="MaxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkers"></a>

```csharp
public double MaxParallelWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}.

---

##### `MaxParallelWorkersPerGather`<sup>Optional</sup> <a name="MaxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkersPerGather"></a>

```csharp
public double MaxParallelWorkersPerGather { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}.

---

##### `MaxPredLocksPerTransaction`<sup>Optional</sup> <a name="MaxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPredLocksPerTransaction"></a>

```csharp
public double MaxPredLocksPerTransaction { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}.

---

##### `MaxPreparedTransactions`<sup>Optional</sup> <a name="MaxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPreparedTransactions"></a>

```csharp
public double MaxPreparedTransactions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}.

---

##### `MaxReplicationSlots`<sup>Optional</sup> <a name="MaxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxReplicationSlots"></a>

```csharp
public double MaxReplicationSlots { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}.

---

##### `MaxStackDepth`<sup>Optional</sup> <a name="MaxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStackDepth"></a>

```csharp
public double MaxStackDepth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}.

---

##### `MaxStandbyArchiveDelay`<sup>Optional</sup> <a name="MaxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyArchiveDelay"></a>

```csharp
public double MaxStandbyArchiveDelay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}.

---

##### `MaxStandbyStreamingDelay`<sup>Optional</sup> <a name="MaxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyStreamingDelay"></a>

```csharp
public double MaxStandbyStreamingDelay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}.

---

##### `MaxWalSenders`<sup>Optional</sup> <a name="MaxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWalSenders"></a>

```csharp
public double MaxWalSenders { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}.

---

##### `MaxWorkerProcesses`<sup>Optional</sup> <a name="MaxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWorkerProcesses"></a>

```csharp
public double MaxWorkerProcesses { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}.

---

##### `Pgbouncer`<sup>Optional</sup> <a name="Pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgbouncer"></a>

```csharp
public object Pgbouncer { get; set; }
```

- *Type:* object

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#pgbouncer DatabasePostgresqlConfig#pgbouncer}

---

##### `PgPartmanBgwInterval`<sup>Optional</sup> <a name="PgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwInterval"></a>

```csharp
public double PgPartmanBgwInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}.

---

##### `PgPartmanBgwRole`<sup>Optional</sup> <a name="PgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwRole"></a>

```csharp
public string PgPartmanBgwRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}.

---

##### `PgStatStatementsTrack`<sup>Optional</sup> <a name="PgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgStatStatementsTrack"></a>

```csharp
public string PgStatStatementsTrack { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}.

---

##### `SharedBuffersPercentage`<sup>Optional</sup> <a name="SharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.sharedBuffersPercentage"></a>

```csharp
public double SharedBuffersPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}.

---

##### `TempFileLimit`<sup>Optional</sup> <a name="TempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.tempFileLimit"></a>

```csharp
public double TempFileLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}.

---

##### `Timescaledb`<sup>Optional</sup> <a name="Timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timescaledb"></a>

```csharp
public DatabasePostgresqlConfigTimescaledb Timescaledb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#timescaledb DatabasePostgresqlConfig#timescaledb}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}.

---

##### `TrackActivityQuerySize`<sup>Optional</sup> <a name="TrackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackActivityQuerySize"></a>

```csharp
public double TrackActivityQuerySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}.

---

##### `TrackCommitTimestamp`<sup>Optional</sup> <a name="TrackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackCommitTimestamp"></a>

```csharp
public string TrackCommitTimestamp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}.

---

##### `TrackFunctions`<sup>Optional</sup> <a name="TrackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackFunctions"></a>

```csharp
public string TrackFunctions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}.

---

##### `TrackIoTiming`<sup>Optional</sup> <a name="TrackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackIoTiming"></a>

```csharp
public string TrackIoTiming { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}.

---

##### `WalSenderTimeout`<sup>Optional</sup> <a name="WalSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walSenderTimeout"></a>

```csharp
public double WalSenderTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}.

---

##### `WalWriterDelay`<sup>Optional</sup> <a name="WalWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walWriterDelay"></a>

```csharp
public double WalWriterDelay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}.

---

##### `WorkMem`<sup>Optional</sup> <a name="WorkMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.workMem"></a>

```csharp
public double WorkMem { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}.

---

### DatabasePostgresqlConfigPgbouncer <a name="DatabasePostgresqlConfigPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabasePostgresqlConfigPgbouncer {
    double AutodbIdleTimeout = null,
    double AutodbMaxDbConnections = null,
    string AutodbPoolMode = null,
    double AutodbPoolSize = null,
    string[] IgnoreStartupParameters = null,
    double MinPoolSize = null,
    double ServerIdleTimeout = null,
    double ServerLifetime = null,
    object ServerResetQueryAlways = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbIdleTimeout">AutodbIdleTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autodb_idle_timeout DatabasePostgresqlConfig#autodb_idle_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbMaxDbConnections">AutodbMaxDbConnections</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autodb_max_db_connections DatabasePostgresqlConfig#autodb_max_db_connections}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolMode">AutodbPoolMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autodb_pool_mode DatabasePostgresqlConfig#autodb_pool_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolSize">AutodbPoolSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autodb_pool_size DatabasePostgresqlConfig#autodb_pool_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.ignoreStartupParameters">IgnoreStartupParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#ignore_startup_parameters DatabasePostgresqlConfig#ignore_startup_parameters}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.minPoolSize">MinPoolSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#min_pool_size DatabasePostgresqlConfig#min_pool_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverIdleTimeout">ServerIdleTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#server_idle_timeout DatabasePostgresqlConfig#server_idle_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverLifetime">ServerLifetime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#server_lifetime DatabasePostgresqlConfig#server_lifetime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverResetQueryAlways">ServerResetQueryAlways</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#server_reset_query_always DatabasePostgresqlConfig#server_reset_query_always}. |

---

##### `AutodbIdleTimeout`<sup>Optional</sup> <a name="AutodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbIdleTimeout"></a>

```csharp
public double AutodbIdleTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autodb_idle_timeout DatabasePostgresqlConfig#autodb_idle_timeout}.

---

##### `AutodbMaxDbConnections`<sup>Optional</sup> <a name="AutodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbMaxDbConnections"></a>

```csharp
public double AutodbMaxDbConnections { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autodb_max_db_connections DatabasePostgresqlConfig#autodb_max_db_connections}.

---

##### `AutodbPoolMode`<sup>Optional</sup> <a name="AutodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolMode"></a>

```csharp
public string AutodbPoolMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autodb_pool_mode DatabasePostgresqlConfig#autodb_pool_mode}.

---

##### `AutodbPoolSize`<sup>Optional</sup> <a name="AutodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolSize"></a>

```csharp
public double AutodbPoolSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#autodb_pool_size DatabasePostgresqlConfig#autodb_pool_size}.

---

##### `IgnoreStartupParameters`<sup>Optional</sup> <a name="IgnoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.ignoreStartupParameters"></a>

```csharp
public string[] IgnoreStartupParameters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#ignore_startup_parameters DatabasePostgresqlConfig#ignore_startup_parameters}.

---

##### `MinPoolSize`<sup>Optional</sup> <a name="MinPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.minPoolSize"></a>

```csharp
public double MinPoolSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#min_pool_size DatabasePostgresqlConfig#min_pool_size}.

---

##### `ServerIdleTimeout`<sup>Optional</sup> <a name="ServerIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverIdleTimeout"></a>

```csharp
public double ServerIdleTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#server_idle_timeout DatabasePostgresqlConfig#server_idle_timeout}.

---

##### `ServerLifetime`<sup>Optional</sup> <a name="ServerLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverLifetime"></a>

```csharp
public double ServerLifetime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#server_lifetime DatabasePostgresqlConfig#server_lifetime}.

---

##### `ServerResetQueryAlways`<sup>Optional</sup> <a name="ServerResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverResetQueryAlways"></a>

```csharp
public object ServerResetQueryAlways { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#server_reset_query_always DatabasePostgresqlConfig#server_reset_query_always}.

---

### DatabasePostgresqlConfigTimescaledb <a name="DatabasePostgresqlConfigTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabasePostgresqlConfigTimescaledb {
    double MaxBackgroundWorkers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.property.maxBackgroundWorkers">MaxBackgroundWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_background_workers DatabasePostgresqlConfig#max_background_workers}. |

---

##### `MaxBackgroundWorkers`<sup>Optional</sup> <a name="MaxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.property.maxBackgroundWorkers"></a>

```csharp
public double MaxBackgroundWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_postgresql_config#max_background_workers DatabasePostgresqlConfig#max_background_workers}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePostgresqlConfigPgbouncerList <a name="DatabasePostgresqlConfigPgbouncerList" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabasePostgresqlConfigPgbouncerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get"></a>

```csharp
private DatabasePostgresqlConfigPgbouncerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabasePostgresqlConfigPgbouncerOutputReference <a name="DatabasePostgresqlConfigPgbouncerOutputReference" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabasePostgresqlConfigPgbouncerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutodbIdleTimeout` <a name="ResetAutodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbIdleTimeout"></a>

```csharp
private void ResetAutodbIdleTimeout()
```

##### `ResetAutodbMaxDbConnections` <a name="ResetAutodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbMaxDbConnections"></a>

```csharp
private void ResetAutodbMaxDbConnections()
```

##### `ResetAutodbPoolMode` <a name="ResetAutodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolMode"></a>

```csharp
private void ResetAutodbPoolMode()
```

##### `ResetAutodbPoolSize` <a name="ResetAutodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolSize"></a>

```csharp
private void ResetAutodbPoolSize()
```

##### `ResetIgnoreStartupParameters` <a name="ResetIgnoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetIgnoreStartupParameters"></a>

```csharp
private void ResetIgnoreStartupParameters()
```

##### `ResetMinPoolSize` <a name="ResetMinPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetMinPoolSize"></a>

```csharp
private void ResetMinPoolSize()
```

##### `ResetServerIdleTimeout` <a name="ResetServerIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerIdleTimeout"></a>

```csharp
private void ResetServerIdleTimeout()
```

##### `ResetServerLifetime` <a name="ResetServerLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerLifetime"></a>

```csharp
private void ResetServerLifetime()
```

##### `ResetServerResetQueryAlways` <a name="ResetServerResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerResetQueryAlways"></a>

```csharp
private void ResetServerResetQueryAlways()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeoutInput">AutodbIdleTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnectionsInput">AutodbMaxDbConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolModeInput">AutodbPoolModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSizeInput">AutodbPoolSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParametersInput">IgnoreStartupParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSizeInput">MinPoolSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeoutInput">ServerIdleTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetimeInput">ServerLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlwaysInput">ServerResetQueryAlwaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeout">AutodbIdleTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnections">AutodbMaxDbConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolMode">AutodbPoolMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSize">AutodbPoolSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParameters">IgnoreStartupParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSize">MinPoolSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeout">ServerIdleTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetime">ServerLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlways">ServerResetQueryAlways</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutodbIdleTimeoutInput`<sup>Optional</sup> <a name="AutodbIdleTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeoutInput"></a>

```csharp
public double AutodbIdleTimeoutInput { get; }
```

- *Type:* double

---

##### `AutodbMaxDbConnectionsInput`<sup>Optional</sup> <a name="AutodbMaxDbConnectionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnectionsInput"></a>

```csharp
public double AutodbMaxDbConnectionsInput { get; }
```

- *Type:* double

---

##### `AutodbPoolModeInput`<sup>Optional</sup> <a name="AutodbPoolModeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolModeInput"></a>

```csharp
public string AutodbPoolModeInput { get; }
```

- *Type:* string

---

##### `AutodbPoolSizeInput`<sup>Optional</sup> <a name="AutodbPoolSizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSizeInput"></a>

```csharp
public double AutodbPoolSizeInput { get; }
```

- *Type:* double

---

##### `IgnoreStartupParametersInput`<sup>Optional</sup> <a name="IgnoreStartupParametersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParametersInput"></a>

```csharp
public string[] IgnoreStartupParametersInput { get; }
```

- *Type:* string[]

---

##### `MinPoolSizeInput`<sup>Optional</sup> <a name="MinPoolSizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSizeInput"></a>

```csharp
public double MinPoolSizeInput { get; }
```

- *Type:* double

---

##### `ServerIdleTimeoutInput`<sup>Optional</sup> <a name="ServerIdleTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeoutInput"></a>

```csharp
public double ServerIdleTimeoutInput { get; }
```

- *Type:* double

---

##### `ServerLifetimeInput`<sup>Optional</sup> <a name="ServerLifetimeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetimeInput"></a>

```csharp
public double ServerLifetimeInput { get; }
```

- *Type:* double

---

##### `ServerResetQueryAlwaysInput`<sup>Optional</sup> <a name="ServerResetQueryAlwaysInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlwaysInput"></a>

```csharp
public object ServerResetQueryAlwaysInput { get; }
```

- *Type:* object

---

##### `AutodbIdleTimeout`<sup>Required</sup> <a name="AutodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeout"></a>

```csharp
public double AutodbIdleTimeout { get; }
```

- *Type:* double

---

##### `AutodbMaxDbConnections`<sup>Required</sup> <a name="AutodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnections"></a>

```csharp
public double AutodbMaxDbConnections { get; }
```

- *Type:* double

---

##### `AutodbPoolMode`<sup>Required</sup> <a name="AutodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolMode"></a>

```csharp
public string AutodbPoolMode { get; }
```

- *Type:* string

---

##### `AutodbPoolSize`<sup>Required</sup> <a name="AutodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSize"></a>

```csharp
public double AutodbPoolSize { get; }
```

- *Type:* double

---

##### `IgnoreStartupParameters`<sup>Required</sup> <a name="IgnoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParameters"></a>

```csharp
public string[] IgnoreStartupParameters { get; }
```

- *Type:* string[]

---

##### `MinPoolSize`<sup>Required</sup> <a name="MinPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSize"></a>

```csharp
public double MinPoolSize { get; }
```

- *Type:* double

---

##### `ServerIdleTimeout`<sup>Required</sup> <a name="ServerIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeout"></a>

```csharp
public double ServerIdleTimeout { get; }
```

- *Type:* double

---

##### `ServerLifetime`<sup>Required</sup> <a name="ServerLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetime"></a>

```csharp
public double ServerLifetime { get; }
```

- *Type:* double

---

##### `ServerResetQueryAlways`<sup>Required</sup> <a name="ServerResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlways"></a>

```csharp
public object ServerResetQueryAlways { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabasePostgresqlConfigTimescaledbOutputReference <a name="DatabasePostgresqlConfigTimescaledbOutputReference" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabasePostgresqlConfigTimescaledbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBackgroundWorkers` <a name="ResetMaxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resetMaxBackgroundWorkers"></a>

```csharp
private void ResetMaxBackgroundWorkers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkersInput">MaxBackgroundWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkers">MaxBackgroundWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxBackgroundWorkersInput`<sup>Optional</sup> <a name="MaxBackgroundWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkersInput"></a>

```csharp
public double MaxBackgroundWorkersInput { get; }
```

- *Type:* double

---

##### `MaxBackgroundWorkers`<sup>Required</sup> <a name="MaxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkers"></a>

```csharp
public double MaxBackgroundWorkers { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.internalValue"></a>

```csharp
public DatabasePostgresqlConfigTimescaledb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---



