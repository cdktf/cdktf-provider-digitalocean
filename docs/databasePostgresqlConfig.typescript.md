# `databasePostgresqlConfig` Submodule <a name="`databasePostgresqlConfig` Submodule" id="@cdktf/provider-digitalocean.databasePostgresqlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePostgresqlConfig <a name="DatabasePostgresqlConfig" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config digitalocean_database_postgresql_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer"></a>

```typescript
import { databasePostgresqlConfig } from '@cdktf/provider-digitalocean'

new databasePostgresqlConfig.DatabasePostgresqlConfig(scope: Construct, id: string, config: DatabasePostgresqlConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig">DatabasePostgresqlConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig">DatabasePostgresqlConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer">putPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb">putTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeScaleFactor">resetAutovacuumAnalyzeScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeThreshold">resetAutovacuumAnalyzeThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumFreezeMaxAge">resetAutovacuumFreezeMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumMaxWorkers">resetAutovacuumMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumNaptime">resetAutovacuumNaptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostDelay">resetAutovacuumVacuumCostDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostLimit">resetAutovacuumVacuumCostLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumScaleFactor">resetAutovacuumVacuumScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumThreshold">resetAutovacuumVacuumThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupHour">resetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupMinute">resetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterDelay">resetBgwriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterFlushAfter">resetBgwriterFlushAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMaxpages">resetBgwriterLruMaxpages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMultiplier">resetBgwriterLruMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDeadlockTimeout">resetDeadlockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDefaultToastCompression">resetDefaultToastCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetIdleInTransactionSessionTimeout">resetIdleInTransactionSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetJit">resetJit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogAutovacuumMinDuration">resetLogAutovacuumMinDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogErrorVerbosity">resetLogErrorVerbosity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogLinePrefix">resetLogLinePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogMinDurationStatement">resetLogMinDurationStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxFilesPerProcess">resetMaxFilesPerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLocksPerTransaction">resetMaxLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLogicalReplicationWorkers">resetMaxLogicalReplicationWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkers">resetMaxParallelWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkersPerGather">resetMaxParallelWorkersPerGather</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPredLocksPerTransaction">resetMaxPredLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPreparedTransactions">resetMaxPreparedTransactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxReplicationSlots">resetMaxReplicationSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStackDepth">resetMaxStackDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyArchiveDelay">resetMaxStandbyArchiveDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyStreamingDelay">resetMaxStandbyStreamingDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWalSenders">resetMaxWalSenders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWorkerProcesses">resetMaxWorkerProcesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgbouncer">resetPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwInterval">resetPgPartmanBgwInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwRole">resetPgPartmanBgwRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgStatStatementsTrack">resetPgStatStatementsTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetSharedBuffersPercentage">resetSharedBuffersPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTempFileLimit">resetTempFileLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimescaledb">resetTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackActivityQuerySize">resetTrackActivityQuerySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackCommitTimestamp">resetTrackCommitTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackFunctions">resetTrackFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackIoTiming">resetTrackIoTiming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalSenderTimeout">resetWalSenderTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalWriterDelay">resetWalWriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWorkMem">resetWorkMem</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPgbouncer` <a name="putPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer"></a>

```typescript
public putPgbouncer(value: IResolvable | DatabasePostgresqlConfigPgbouncer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putPgbouncer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>[]

---

##### `putTimescaledb` <a name="putTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb"></a>

```typescript
public putTimescaledb(value: DatabasePostgresqlConfigTimescaledb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.putTimescaledb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---

##### `resetAutovacuumAnalyzeScaleFactor` <a name="resetAutovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeScaleFactor"></a>

```typescript
public resetAutovacuumAnalyzeScaleFactor(): void
```

##### `resetAutovacuumAnalyzeThreshold` <a name="resetAutovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumAnalyzeThreshold"></a>

```typescript
public resetAutovacuumAnalyzeThreshold(): void
```

##### `resetAutovacuumFreezeMaxAge` <a name="resetAutovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumFreezeMaxAge"></a>

```typescript
public resetAutovacuumFreezeMaxAge(): void
```

##### `resetAutovacuumMaxWorkers` <a name="resetAutovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumMaxWorkers"></a>

```typescript
public resetAutovacuumMaxWorkers(): void
```

##### `resetAutovacuumNaptime` <a name="resetAutovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumNaptime"></a>

```typescript
public resetAutovacuumNaptime(): void
```

##### `resetAutovacuumVacuumCostDelay` <a name="resetAutovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostDelay"></a>

```typescript
public resetAutovacuumVacuumCostDelay(): void
```

##### `resetAutovacuumVacuumCostLimit` <a name="resetAutovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumCostLimit"></a>

```typescript
public resetAutovacuumVacuumCostLimit(): void
```

##### `resetAutovacuumVacuumScaleFactor` <a name="resetAutovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumScaleFactor"></a>

```typescript
public resetAutovacuumVacuumScaleFactor(): void
```

##### `resetAutovacuumVacuumThreshold` <a name="resetAutovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetAutovacuumVacuumThreshold"></a>

```typescript
public resetAutovacuumVacuumThreshold(): void
```

##### `resetBackupHour` <a name="resetBackupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupHour"></a>

```typescript
public resetBackupHour(): void
```

##### `resetBackupMinute` <a name="resetBackupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBackupMinute"></a>

```typescript
public resetBackupMinute(): void
```

##### `resetBgwriterDelay` <a name="resetBgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterDelay"></a>

```typescript
public resetBgwriterDelay(): void
```

##### `resetBgwriterFlushAfter` <a name="resetBgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterFlushAfter"></a>

```typescript
public resetBgwriterFlushAfter(): void
```

##### `resetBgwriterLruMaxpages` <a name="resetBgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMaxpages"></a>

```typescript
public resetBgwriterLruMaxpages(): void
```

##### `resetBgwriterLruMultiplier` <a name="resetBgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetBgwriterLruMultiplier"></a>

```typescript
public resetBgwriterLruMultiplier(): void
```

##### `resetDeadlockTimeout` <a name="resetDeadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDeadlockTimeout"></a>

```typescript
public resetDeadlockTimeout(): void
```

##### `resetDefaultToastCompression` <a name="resetDefaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetDefaultToastCompression"></a>

```typescript
public resetDefaultToastCompression(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdleInTransactionSessionTimeout` <a name="resetIdleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetIdleInTransactionSessionTimeout"></a>

```typescript
public resetIdleInTransactionSessionTimeout(): void
```

##### `resetJit` <a name="resetJit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetJit"></a>

```typescript
public resetJit(): void
```

##### `resetLogAutovacuumMinDuration` <a name="resetLogAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogAutovacuumMinDuration"></a>

```typescript
public resetLogAutovacuumMinDuration(): void
```

##### `resetLogErrorVerbosity` <a name="resetLogErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogErrorVerbosity"></a>

```typescript
public resetLogErrorVerbosity(): void
```

##### `resetLogLinePrefix` <a name="resetLogLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogLinePrefix"></a>

```typescript
public resetLogLinePrefix(): void
```

##### `resetLogMinDurationStatement` <a name="resetLogMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetLogMinDurationStatement"></a>

```typescript
public resetLogMinDurationStatement(): void
```

##### `resetMaxFilesPerProcess` <a name="resetMaxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxFilesPerProcess"></a>

```typescript
public resetMaxFilesPerProcess(): void
```

##### `resetMaxLocksPerTransaction` <a name="resetMaxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLocksPerTransaction"></a>

```typescript
public resetMaxLocksPerTransaction(): void
```

##### `resetMaxLogicalReplicationWorkers` <a name="resetMaxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxLogicalReplicationWorkers"></a>

```typescript
public resetMaxLogicalReplicationWorkers(): void
```

##### `resetMaxParallelWorkers` <a name="resetMaxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkers"></a>

```typescript
public resetMaxParallelWorkers(): void
```

##### `resetMaxParallelWorkersPerGather` <a name="resetMaxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxParallelWorkersPerGather"></a>

```typescript
public resetMaxParallelWorkersPerGather(): void
```

##### `resetMaxPredLocksPerTransaction` <a name="resetMaxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPredLocksPerTransaction"></a>

```typescript
public resetMaxPredLocksPerTransaction(): void
```

##### `resetMaxPreparedTransactions` <a name="resetMaxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxPreparedTransactions"></a>

```typescript
public resetMaxPreparedTransactions(): void
```

##### `resetMaxReplicationSlots` <a name="resetMaxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxReplicationSlots"></a>

```typescript
public resetMaxReplicationSlots(): void
```

##### `resetMaxStackDepth` <a name="resetMaxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStackDepth"></a>

```typescript
public resetMaxStackDepth(): void
```

##### `resetMaxStandbyArchiveDelay` <a name="resetMaxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyArchiveDelay"></a>

```typescript
public resetMaxStandbyArchiveDelay(): void
```

##### `resetMaxStandbyStreamingDelay` <a name="resetMaxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxStandbyStreamingDelay"></a>

```typescript
public resetMaxStandbyStreamingDelay(): void
```

##### `resetMaxWalSenders` <a name="resetMaxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWalSenders"></a>

```typescript
public resetMaxWalSenders(): void
```

##### `resetMaxWorkerProcesses` <a name="resetMaxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetMaxWorkerProcesses"></a>

```typescript
public resetMaxWorkerProcesses(): void
```

##### `resetPgbouncer` <a name="resetPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgbouncer"></a>

```typescript
public resetPgbouncer(): void
```

##### `resetPgPartmanBgwInterval` <a name="resetPgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwInterval"></a>

```typescript
public resetPgPartmanBgwInterval(): void
```

##### `resetPgPartmanBgwRole` <a name="resetPgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgPartmanBgwRole"></a>

```typescript
public resetPgPartmanBgwRole(): void
```

##### `resetPgStatStatementsTrack` <a name="resetPgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetPgStatStatementsTrack"></a>

```typescript
public resetPgStatStatementsTrack(): void
```

##### `resetSharedBuffersPercentage` <a name="resetSharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetSharedBuffersPercentage"></a>

```typescript
public resetSharedBuffersPercentage(): void
```

##### `resetTempFileLimit` <a name="resetTempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTempFileLimit"></a>

```typescript
public resetTempFileLimit(): void
```

##### `resetTimescaledb` <a name="resetTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimescaledb"></a>

```typescript
public resetTimescaledb(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetTrackActivityQuerySize` <a name="resetTrackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackActivityQuerySize"></a>

```typescript
public resetTrackActivityQuerySize(): void
```

##### `resetTrackCommitTimestamp` <a name="resetTrackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackCommitTimestamp"></a>

```typescript
public resetTrackCommitTimestamp(): void
```

##### `resetTrackFunctions` <a name="resetTrackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackFunctions"></a>

```typescript
public resetTrackFunctions(): void
```

##### `resetTrackIoTiming` <a name="resetTrackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetTrackIoTiming"></a>

```typescript
public resetTrackIoTiming(): void
```

##### `resetWalSenderTimeout` <a name="resetWalSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalSenderTimeout"></a>

```typescript
public resetWalSenderTimeout(): void
```

##### `resetWalWriterDelay` <a name="resetWalWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWalWriterDelay"></a>

```typescript
public resetWalWriterDelay(): void
```

##### `resetWorkMem` <a name="resetWorkMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.resetWorkMem"></a>

```typescript
public resetWorkMem(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabasePostgresqlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct"></a>

```typescript
import { databasePostgresqlConfig } from '@cdktf/provider-digitalocean'

databasePostgresqlConfig.DatabasePostgresqlConfig.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement"></a>

```typescript
import { databasePostgresqlConfig } from '@cdktf/provider-digitalocean'

databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource"></a>

```typescript
import { databasePostgresqlConfig } from '@cdktf/provider-digitalocean'

databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport"></a>

```typescript
import { databasePostgresqlConfig } from '@cdktf/provider-digitalocean'

databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabasePostgresqlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabasePostgresqlConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabasePostgresqlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePostgresqlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncer">pgbouncer</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList">DatabasePostgresqlConfigPgbouncerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference">DatabasePostgresqlConfigTimescaledbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactorInput">autovacuumAnalyzeScaleFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThresholdInput">autovacuumAnalyzeThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAgeInput">autovacuumFreezeMaxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkersInput">autovacuumMaxWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptimeInput">autovacuumNaptimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelayInput">autovacuumVacuumCostDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimitInput">autovacuumVacuumCostLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactorInput">autovacuumVacuumScaleFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThresholdInput">autovacuumVacuumThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHourInput">backupHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinuteInput">backupMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelayInput">bgwriterDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfterInput">bgwriterFlushAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpagesInput">bgwriterLruMaxpagesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplierInput">bgwriterLruMultiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeoutInput">deadlockTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompressionInput">defaultToastCompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeoutInput">idleInTransactionSessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jitInput">jitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDurationInput">logAutovacuumMinDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosityInput">logErrorVerbosityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefixInput">logLinePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatementInput">logMinDurationStatementInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcessInput">maxFilesPerProcessInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransactionInput">maxLocksPerTransactionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkersInput">maxLogicalReplicationWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersInput">maxParallelWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGatherInput">maxParallelWorkersPerGatherInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransactionInput">maxPredLocksPerTransactionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactionsInput">maxPreparedTransactionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlotsInput">maxReplicationSlotsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepthInput">maxStackDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelayInput">maxStandbyArchiveDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelayInput">maxStandbyStreamingDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSendersInput">maxWalSendersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcessesInput">maxWorkerProcessesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncerInput">pgbouncerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwIntervalInput">pgPartmanBgwIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRoleInput">pgPartmanBgwRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrackInput">pgStatStatementsTrackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentageInput">sharedBuffersPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimitInput">tempFileLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledbInput">timescaledbInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySizeInput">trackActivityQuerySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestampInput">trackCommitTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctionsInput">trackFunctionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTimingInput">trackIoTimingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeoutInput">walSenderTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelayInput">walWriterDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMemInput">workMemInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactor">autovacuumAnalyzeScaleFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThreshold">autovacuumAnalyzeThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAge">autovacuumFreezeMaxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkers">autovacuumMaxWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptime">autovacuumNaptime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelay">autovacuumVacuumCostDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimit">autovacuumVacuumCostLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactor">autovacuumVacuumScaleFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThreshold">autovacuumVacuumThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHour">backupHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinute">backupMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelay">bgwriterDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfter">bgwriterFlushAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpages">bgwriterLruMaxpages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplier">bgwriterLruMultiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeout">deadlockTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompression">defaultToastCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jit">jit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDuration">logAutovacuumMinDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosity">logErrorVerbosity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefix">logLinePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatement">logMinDurationStatement</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcess">maxFilesPerProcess</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransaction">maxLocksPerTransaction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkers">maxLogicalReplicationWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkers">maxParallelWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGather">maxParallelWorkersPerGather</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransaction">maxPredLocksPerTransaction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactions">maxPreparedTransactions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlots">maxReplicationSlots</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepth">maxStackDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelay">maxStandbyArchiveDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelay">maxStandbyStreamingDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSenders">maxWalSenders</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcesses">maxWorkerProcesses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwInterval">pgPartmanBgwInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRole">pgPartmanBgwRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrack">pgStatStatementsTrack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentage">sharedBuffersPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimit">tempFileLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySize">trackActivityQuerySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestamp">trackCommitTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctions">trackFunctions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTiming">trackIoTiming</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeout">walSenderTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelay">walWriterDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMem">workMem</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pgbouncer`<sup>Required</sup> <a name="pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncer"></a>

```typescript
public readonly pgbouncer: DatabasePostgresqlConfigPgbouncerList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList">DatabasePostgresqlConfigPgbouncerList</a>

---

##### `timescaledb`<sup>Required</sup> <a name="timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledb"></a>

```typescript
public readonly timescaledb: DatabasePostgresqlConfigTimescaledbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference">DatabasePostgresqlConfigTimescaledbOutputReference</a>

---

##### `autovacuumAnalyzeScaleFactorInput`<sup>Optional</sup> <a name="autovacuumAnalyzeScaleFactorInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactorInput"></a>

```typescript
public readonly autovacuumAnalyzeScaleFactorInput: number;
```

- *Type:* number

---

##### `autovacuumAnalyzeThresholdInput`<sup>Optional</sup> <a name="autovacuumAnalyzeThresholdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThresholdInput"></a>

```typescript
public readonly autovacuumAnalyzeThresholdInput: number;
```

- *Type:* number

---

##### `autovacuumFreezeMaxAgeInput`<sup>Optional</sup> <a name="autovacuumFreezeMaxAgeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAgeInput"></a>

```typescript
public readonly autovacuumFreezeMaxAgeInput: number;
```

- *Type:* number

---

##### `autovacuumMaxWorkersInput`<sup>Optional</sup> <a name="autovacuumMaxWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkersInput"></a>

```typescript
public readonly autovacuumMaxWorkersInput: number;
```

- *Type:* number

---

##### `autovacuumNaptimeInput`<sup>Optional</sup> <a name="autovacuumNaptimeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptimeInput"></a>

```typescript
public readonly autovacuumNaptimeInput: number;
```

- *Type:* number

---

##### `autovacuumVacuumCostDelayInput`<sup>Optional</sup> <a name="autovacuumVacuumCostDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelayInput"></a>

```typescript
public readonly autovacuumVacuumCostDelayInput: number;
```

- *Type:* number

---

##### `autovacuumVacuumCostLimitInput`<sup>Optional</sup> <a name="autovacuumVacuumCostLimitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimitInput"></a>

```typescript
public readonly autovacuumVacuumCostLimitInput: number;
```

- *Type:* number

---

##### `autovacuumVacuumScaleFactorInput`<sup>Optional</sup> <a name="autovacuumVacuumScaleFactorInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactorInput"></a>

```typescript
public readonly autovacuumVacuumScaleFactorInput: number;
```

- *Type:* number

---

##### `autovacuumVacuumThresholdInput`<sup>Optional</sup> <a name="autovacuumVacuumThresholdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThresholdInput"></a>

```typescript
public readonly autovacuumVacuumThresholdInput: number;
```

- *Type:* number

---

##### `backupHourInput`<sup>Optional</sup> <a name="backupHourInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHourInput"></a>

```typescript
public readonly backupHourInput: number;
```

- *Type:* number

---

##### `backupMinuteInput`<sup>Optional</sup> <a name="backupMinuteInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinuteInput"></a>

```typescript
public readonly backupMinuteInput: number;
```

- *Type:* number

---

##### `bgwriterDelayInput`<sup>Optional</sup> <a name="bgwriterDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelayInput"></a>

```typescript
public readonly bgwriterDelayInput: number;
```

- *Type:* number

---

##### `bgwriterFlushAfterInput`<sup>Optional</sup> <a name="bgwriterFlushAfterInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfterInput"></a>

```typescript
public readonly bgwriterFlushAfterInput: number;
```

- *Type:* number

---

##### `bgwriterLruMaxpagesInput`<sup>Optional</sup> <a name="bgwriterLruMaxpagesInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpagesInput"></a>

```typescript
public readonly bgwriterLruMaxpagesInput: number;
```

- *Type:* number

---

##### `bgwriterLruMultiplierInput`<sup>Optional</sup> <a name="bgwriterLruMultiplierInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplierInput"></a>

```typescript
public readonly bgwriterLruMultiplierInput: number;
```

- *Type:* number

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `deadlockTimeoutInput`<sup>Optional</sup> <a name="deadlockTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeoutInput"></a>

```typescript
public readonly deadlockTimeoutInput: number;
```

- *Type:* number

---

##### `defaultToastCompressionInput`<sup>Optional</sup> <a name="defaultToastCompressionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompressionInput"></a>

```typescript
public readonly defaultToastCompressionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="idleInTransactionSessionTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeoutInput"></a>

```typescript
public readonly idleInTransactionSessionTimeoutInput: number;
```

- *Type:* number

---

##### `jitInput`<sup>Optional</sup> <a name="jitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jitInput"></a>

```typescript
public readonly jitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logAutovacuumMinDurationInput`<sup>Optional</sup> <a name="logAutovacuumMinDurationInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDurationInput"></a>

```typescript
public readonly logAutovacuumMinDurationInput: number;
```

- *Type:* number

---

##### `logErrorVerbosityInput`<sup>Optional</sup> <a name="logErrorVerbosityInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosityInput"></a>

```typescript
public readonly logErrorVerbosityInput: string;
```

- *Type:* string

---

##### `logLinePrefixInput`<sup>Optional</sup> <a name="logLinePrefixInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefixInput"></a>

```typescript
public readonly logLinePrefixInput: string;
```

- *Type:* string

---

##### `logMinDurationStatementInput`<sup>Optional</sup> <a name="logMinDurationStatementInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatementInput"></a>

```typescript
public readonly logMinDurationStatementInput: number;
```

- *Type:* number

---

##### `maxFilesPerProcessInput`<sup>Optional</sup> <a name="maxFilesPerProcessInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcessInput"></a>

```typescript
public readonly maxFilesPerProcessInput: number;
```

- *Type:* number

---

##### `maxLocksPerTransactionInput`<sup>Optional</sup> <a name="maxLocksPerTransactionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransactionInput"></a>

```typescript
public readonly maxLocksPerTransactionInput: number;
```

- *Type:* number

---

##### `maxLogicalReplicationWorkersInput`<sup>Optional</sup> <a name="maxLogicalReplicationWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkersInput"></a>

```typescript
public readonly maxLogicalReplicationWorkersInput: number;
```

- *Type:* number

---

##### `maxParallelWorkersInput`<sup>Optional</sup> <a name="maxParallelWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersInput"></a>

```typescript
public readonly maxParallelWorkersInput: number;
```

- *Type:* number

---

##### `maxParallelWorkersPerGatherInput`<sup>Optional</sup> <a name="maxParallelWorkersPerGatherInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGatherInput"></a>

```typescript
public readonly maxParallelWorkersPerGatherInput: number;
```

- *Type:* number

---

##### `maxPredLocksPerTransactionInput`<sup>Optional</sup> <a name="maxPredLocksPerTransactionInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransactionInput"></a>

```typescript
public readonly maxPredLocksPerTransactionInput: number;
```

- *Type:* number

---

##### `maxPreparedTransactionsInput`<sup>Optional</sup> <a name="maxPreparedTransactionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactionsInput"></a>

```typescript
public readonly maxPreparedTransactionsInput: number;
```

- *Type:* number

---

##### `maxReplicationSlotsInput`<sup>Optional</sup> <a name="maxReplicationSlotsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlotsInput"></a>

```typescript
public readonly maxReplicationSlotsInput: number;
```

- *Type:* number

---

##### `maxStackDepthInput`<sup>Optional</sup> <a name="maxStackDepthInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepthInput"></a>

```typescript
public readonly maxStackDepthInput: number;
```

- *Type:* number

---

##### `maxStandbyArchiveDelayInput`<sup>Optional</sup> <a name="maxStandbyArchiveDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelayInput"></a>

```typescript
public readonly maxStandbyArchiveDelayInput: number;
```

- *Type:* number

---

##### `maxStandbyStreamingDelayInput`<sup>Optional</sup> <a name="maxStandbyStreamingDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelayInput"></a>

```typescript
public readonly maxStandbyStreamingDelayInput: number;
```

- *Type:* number

---

##### `maxWalSendersInput`<sup>Optional</sup> <a name="maxWalSendersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSendersInput"></a>

```typescript
public readonly maxWalSendersInput: number;
```

- *Type:* number

---

##### `maxWorkerProcessesInput`<sup>Optional</sup> <a name="maxWorkerProcessesInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcessesInput"></a>

```typescript
public readonly maxWorkerProcessesInput: number;
```

- *Type:* number

---

##### `pgbouncerInput`<sup>Optional</sup> <a name="pgbouncerInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgbouncerInput"></a>

```typescript
public readonly pgbouncerInput: IResolvable | DatabasePostgresqlConfigPgbouncer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>[]

---

##### `pgPartmanBgwIntervalInput`<sup>Optional</sup> <a name="pgPartmanBgwIntervalInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwIntervalInput"></a>

```typescript
public readonly pgPartmanBgwIntervalInput: number;
```

- *Type:* number

---

##### `pgPartmanBgwRoleInput`<sup>Optional</sup> <a name="pgPartmanBgwRoleInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRoleInput"></a>

```typescript
public readonly pgPartmanBgwRoleInput: string;
```

- *Type:* string

---

##### `pgStatStatementsTrackInput`<sup>Optional</sup> <a name="pgStatStatementsTrackInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrackInput"></a>

```typescript
public readonly pgStatStatementsTrackInput: string;
```

- *Type:* string

---

##### `sharedBuffersPercentageInput`<sup>Optional</sup> <a name="sharedBuffersPercentageInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentageInput"></a>

```typescript
public readonly sharedBuffersPercentageInput: number;
```

- *Type:* number

---

##### `tempFileLimitInput`<sup>Optional</sup> <a name="tempFileLimitInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimitInput"></a>

```typescript
public readonly tempFileLimitInput: number;
```

- *Type:* number

---

##### `timescaledbInput`<sup>Optional</sup> <a name="timescaledbInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timescaledbInput"></a>

```typescript
public readonly timescaledbInput: DatabasePostgresqlConfigTimescaledb;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `trackActivityQuerySizeInput`<sup>Optional</sup> <a name="trackActivityQuerySizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySizeInput"></a>

```typescript
public readonly trackActivityQuerySizeInput: number;
```

- *Type:* number

---

##### `trackCommitTimestampInput`<sup>Optional</sup> <a name="trackCommitTimestampInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestampInput"></a>

```typescript
public readonly trackCommitTimestampInput: string;
```

- *Type:* string

---

##### `trackFunctionsInput`<sup>Optional</sup> <a name="trackFunctionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctionsInput"></a>

```typescript
public readonly trackFunctionsInput: string;
```

- *Type:* string

---

##### `trackIoTimingInput`<sup>Optional</sup> <a name="trackIoTimingInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTimingInput"></a>

```typescript
public readonly trackIoTimingInput: string;
```

- *Type:* string

---

##### `walSenderTimeoutInput`<sup>Optional</sup> <a name="walSenderTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeoutInput"></a>

```typescript
public readonly walSenderTimeoutInput: number;
```

- *Type:* number

---

##### `walWriterDelayInput`<sup>Optional</sup> <a name="walWriterDelayInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelayInput"></a>

```typescript
public readonly walWriterDelayInput: number;
```

- *Type:* number

---

##### `workMemInput`<sup>Optional</sup> <a name="workMemInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMemInput"></a>

```typescript
public readonly workMemInput: number;
```

- *Type:* number

---

##### `autovacuumAnalyzeScaleFactor`<sup>Required</sup> <a name="autovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeScaleFactor"></a>

```typescript
public readonly autovacuumAnalyzeScaleFactor: number;
```

- *Type:* number

---

##### `autovacuumAnalyzeThreshold`<sup>Required</sup> <a name="autovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumAnalyzeThreshold"></a>

```typescript
public readonly autovacuumAnalyzeThreshold: number;
```

- *Type:* number

---

##### `autovacuumFreezeMaxAge`<sup>Required</sup> <a name="autovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumFreezeMaxAge"></a>

```typescript
public readonly autovacuumFreezeMaxAge: number;
```

- *Type:* number

---

##### `autovacuumMaxWorkers`<sup>Required</sup> <a name="autovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumMaxWorkers"></a>

```typescript
public readonly autovacuumMaxWorkers: number;
```

- *Type:* number

---

##### `autovacuumNaptime`<sup>Required</sup> <a name="autovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumNaptime"></a>

```typescript
public readonly autovacuumNaptime: number;
```

- *Type:* number

---

##### `autovacuumVacuumCostDelay`<sup>Required</sup> <a name="autovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostDelay"></a>

```typescript
public readonly autovacuumVacuumCostDelay: number;
```

- *Type:* number

---

##### `autovacuumVacuumCostLimit`<sup>Required</sup> <a name="autovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumCostLimit"></a>

```typescript
public readonly autovacuumVacuumCostLimit: number;
```

- *Type:* number

---

##### `autovacuumVacuumScaleFactor`<sup>Required</sup> <a name="autovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumScaleFactor"></a>

```typescript
public readonly autovacuumVacuumScaleFactor: number;
```

- *Type:* number

---

##### `autovacuumVacuumThreshold`<sup>Required</sup> <a name="autovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.autovacuumVacuumThreshold"></a>

```typescript
public readonly autovacuumVacuumThreshold: number;
```

- *Type:* number

---

##### `backupHour`<sup>Required</sup> <a name="backupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupHour"></a>

```typescript
public readonly backupHour: number;
```

- *Type:* number

---

##### `backupMinute`<sup>Required</sup> <a name="backupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.backupMinute"></a>

```typescript
public readonly backupMinute: number;
```

- *Type:* number

---

##### `bgwriterDelay`<sup>Required</sup> <a name="bgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterDelay"></a>

```typescript
public readonly bgwriterDelay: number;
```

- *Type:* number

---

##### `bgwriterFlushAfter`<sup>Required</sup> <a name="bgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterFlushAfter"></a>

```typescript
public readonly bgwriterFlushAfter: number;
```

- *Type:* number

---

##### `bgwriterLruMaxpages`<sup>Required</sup> <a name="bgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMaxpages"></a>

```typescript
public readonly bgwriterLruMaxpages: number;
```

- *Type:* number

---

##### `bgwriterLruMultiplier`<sup>Required</sup> <a name="bgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.bgwriterLruMultiplier"></a>

```typescript
public readonly bgwriterLruMultiplier: number;
```

- *Type:* number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `deadlockTimeout`<sup>Required</sup> <a name="deadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.deadlockTimeout"></a>

```typescript
public readonly deadlockTimeout: number;
```

- *Type:* number

---

##### `defaultToastCompression`<sup>Required</sup> <a name="defaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.defaultToastCompression"></a>

```typescript
public readonly defaultToastCompression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idleInTransactionSessionTimeout`<sup>Required</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.idleInTransactionSessionTimeout"></a>

```typescript
public readonly idleInTransactionSessionTimeout: number;
```

- *Type:* number

---

##### `jit`<sup>Required</sup> <a name="jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.jit"></a>

```typescript
public readonly jit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logAutovacuumMinDuration`<sup>Required</sup> <a name="logAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logAutovacuumMinDuration"></a>

```typescript
public readonly logAutovacuumMinDuration: number;
```

- *Type:* number

---

##### `logErrorVerbosity`<sup>Required</sup> <a name="logErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logErrorVerbosity"></a>

```typescript
public readonly logErrorVerbosity: string;
```

- *Type:* string

---

##### `logLinePrefix`<sup>Required</sup> <a name="logLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logLinePrefix"></a>

```typescript
public readonly logLinePrefix: string;
```

- *Type:* string

---

##### `logMinDurationStatement`<sup>Required</sup> <a name="logMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.logMinDurationStatement"></a>

```typescript
public readonly logMinDurationStatement: number;
```

- *Type:* number

---

##### `maxFilesPerProcess`<sup>Required</sup> <a name="maxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxFilesPerProcess"></a>

```typescript
public readonly maxFilesPerProcess: number;
```

- *Type:* number

---

##### `maxLocksPerTransaction`<sup>Required</sup> <a name="maxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLocksPerTransaction"></a>

```typescript
public readonly maxLocksPerTransaction: number;
```

- *Type:* number

---

##### `maxLogicalReplicationWorkers`<sup>Required</sup> <a name="maxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxLogicalReplicationWorkers"></a>

```typescript
public readonly maxLogicalReplicationWorkers: number;
```

- *Type:* number

---

##### `maxParallelWorkers`<sup>Required</sup> <a name="maxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkers"></a>

```typescript
public readonly maxParallelWorkers: number;
```

- *Type:* number

---

##### `maxParallelWorkersPerGather`<sup>Required</sup> <a name="maxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxParallelWorkersPerGather"></a>

```typescript
public readonly maxParallelWorkersPerGather: number;
```

- *Type:* number

---

##### `maxPredLocksPerTransaction`<sup>Required</sup> <a name="maxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPredLocksPerTransaction"></a>

```typescript
public readonly maxPredLocksPerTransaction: number;
```

- *Type:* number

---

##### `maxPreparedTransactions`<sup>Required</sup> <a name="maxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxPreparedTransactions"></a>

```typescript
public readonly maxPreparedTransactions: number;
```

- *Type:* number

---

##### `maxReplicationSlots`<sup>Required</sup> <a name="maxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxReplicationSlots"></a>

```typescript
public readonly maxReplicationSlots: number;
```

- *Type:* number

---

##### `maxStackDepth`<sup>Required</sup> <a name="maxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStackDepth"></a>

```typescript
public readonly maxStackDepth: number;
```

- *Type:* number

---

##### `maxStandbyArchiveDelay`<sup>Required</sup> <a name="maxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyArchiveDelay"></a>

```typescript
public readonly maxStandbyArchiveDelay: number;
```

- *Type:* number

---

##### `maxStandbyStreamingDelay`<sup>Required</sup> <a name="maxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxStandbyStreamingDelay"></a>

```typescript
public readonly maxStandbyStreamingDelay: number;
```

- *Type:* number

---

##### `maxWalSenders`<sup>Required</sup> <a name="maxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWalSenders"></a>

```typescript
public readonly maxWalSenders: number;
```

- *Type:* number

---

##### `maxWorkerProcesses`<sup>Required</sup> <a name="maxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.maxWorkerProcesses"></a>

```typescript
public readonly maxWorkerProcesses: number;
```

- *Type:* number

---

##### `pgPartmanBgwInterval`<sup>Required</sup> <a name="pgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwInterval"></a>

```typescript
public readonly pgPartmanBgwInterval: number;
```

- *Type:* number

---

##### `pgPartmanBgwRole`<sup>Required</sup> <a name="pgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgPartmanBgwRole"></a>

```typescript
public readonly pgPartmanBgwRole: string;
```

- *Type:* string

---

##### `pgStatStatementsTrack`<sup>Required</sup> <a name="pgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.pgStatStatementsTrack"></a>

```typescript
public readonly pgStatStatementsTrack: string;
```

- *Type:* string

---

##### `sharedBuffersPercentage`<sup>Required</sup> <a name="sharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.sharedBuffersPercentage"></a>

```typescript
public readonly sharedBuffersPercentage: number;
```

- *Type:* number

---

##### `tempFileLimit`<sup>Required</sup> <a name="tempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tempFileLimit"></a>

```typescript
public readonly tempFileLimit: number;
```

- *Type:* number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `trackActivityQuerySize`<sup>Required</sup> <a name="trackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackActivityQuerySize"></a>

```typescript
public readonly trackActivityQuerySize: number;
```

- *Type:* number

---

##### `trackCommitTimestamp`<sup>Required</sup> <a name="trackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackCommitTimestamp"></a>

```typescript
public readonly trackCommitTimestamp: string;
```

- *Type:* string

---

##### `trackFunctions`<sup>Required</sup> <a name="trackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackFunctions"></a>

```typescript
public readonly trackFunctions: string;
```

- *Type:* string

---

##### `trackIoTiming`<sup>Required</sup> <a name="trackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.trackIoTiming"></a>

```typescript
public readonly trackIoTiming: string;
```

- *Type:* string

---

##### `walSenderTimeout`<sup>Required</sup> <a name="walSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walSenderTimeout"></a>

```typescript
public readonly walSenderTimeout: number;
```

- *Type:* number

---

##### `walWriterDelay`<sup>Required</sup> <a name="walWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.walWriterDelay"></a>

```typescript
public readonly walWriterDelay: number;
```

- *Type:* number

---

##### `workMem`<sup>Required</sup> <a name="workMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.workMem"></a>

```typescript
public readonly workMem: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePostgresqlConfigConfig <a name="DatabasePostgresqlConfigConfig" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.Initializer"></a>

```typescript
import { databasePostgresqlConfig } from '@cdktf/provider-digitalocean'

const databasePostgresqlConfigConfig: databasePostgresqlConfig.DatabasePostgresqlConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeScaleFactor">autovacuumAnalyzeScaleFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeThreshold">autovacuumAnalyzeThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumFreezeMaxAge">autovacuumFreezeMaxAge</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumMaxWorkers">autovacuumMaxWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumNaptime">autovacuumNaptime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostDelay">autovacuumVacuumCostDelay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostLimit">autovacuumVacuumCostLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumScaleFactor">autovacuumVacuumScaleFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumThreshold">autovacuumVacuumThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupHour">backupHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupMinute">backupMinute</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterDelay">bgwriterDelay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterFlushAfter">bgwriterFlushAfter</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMaxpages">bgwriterLruMaxpages</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMultiplier">bgwriterLruMultiplier</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.deadlockTimeout">deadlockTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.defaultToastCompression">defaultToastCompression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.jit">jit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logAutovacuumMinDuration">logAutovacuumMinDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logErrorVerbosity">logErrorVerbosity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logLinePrefix">logLinePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logMinDurationStatement">logMinDurationStatement</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxFilesPerProcess">maxFilesPerProcess</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLocksPerTransaction">maxLocksPerTransaction</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLogicalReplicationWorkers">maxLogicalReplicationWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkers">maxParallelWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkersPerGather">maxParallelWorkersPerGather</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPredLocksPerTransaction">maxPredLocksPerTransaction</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPreparedTransactions">maxPreparedTransactions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxReplicationSlots">maxReplicationSlots</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStackDepth">maxStackDepth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyArchiveDelay">maxStandbyArchiveDelay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyStreamingDelay">maxStandbyStreamingDelay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWalSenders">maxWalSenders</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWorkerProcesses">maxWorkerProcesses</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgbouncer">pgbouncer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>[]</code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwInterval">pgPartmanBgwInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwRole">pgPartmanBgwRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgStatStatementsTrack">pgStatStatementsTrack</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.sharedBuffersPercentage">sharedBuffersPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.tempFileLimit">tempFileLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | timescaledb block. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackActivityQuerySize">trackActivityQuerySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackCommitTimestamp">trackCommitTimestamp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackFunctions">trackFunctions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackIoTiming">trackIoTiming</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walSenderTimeout">walSenderTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walWriterDelay">walWriterDelay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.workMem">workMem</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#cluster_id DatabasePostgresqlConfig#cluster_id}.

---

##### `autovacuumAnalyzeScaleFactor`<sup>Optional</sup> <a name="autovacuumAnalyzeScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeScaleFactor"></a>

```typescript
public readonly autovacuumAnalyzeScaleFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_analyze_scale_factor DatabasePostgresqlConfig#autovacuum_analyze_scale_factor}.

---

##### `autovacuumAnalyzeThreshold`<sup>Optional</sup> <a name="autovacuumAnalyzeThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumAnalyzeThreshold"></a>

```typescript
public readonly autovacuumAnalyzeThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_analyze_threshold DatabasePostgresqlConfig#autovacuum_analyze_threshold}.

---

##### `autovacuumFreezeMaxAge`<sup>Optional</sup> <a name="autovacuumFreezeMaxAge" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumFreezeMaxAge"></a>

```typescript
public readonly autovacuumFreezeMaxAge: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_freeze_max_age DatabasePostgresqlConfig#autovacuum_freeze_max_age}.

---

##### `autovacuumMaxWorkers`<sup>Optional</sup> <a name="autovacuumMaxWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumMaxWorkers"></a>

```typescript
public readonly autovacuumMaxWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_max_workers DatabasePostgresqlConfig#autovacuum_max_workers}.

---

##### `autovacuumNaptime`<sup>Optional</sup> <a name="autovacuumNaptime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumNaptime"></a>

```typescript
public readonly autovacuumNaptime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_naptime DatabasePostgresqlConfig#autovacuum_naptime}.

---

##### `autovacuumVacuumCostDelay`<sup>Optional</sup> <a name="autovacuumVacuumCostDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostDelay"></a>

```typescript
public readonly autovacuumVacuumCostDelay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_delay DatabasePostgresqlConfig#autovacuum_vacuum_cost_delay}.

---

##### `autovacuumVacuumCostLimit`<sup>Optional</sup> <a name="autovacuumVacuumCostLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumCostLimit"></a>

```typescript
public readonly autovacuumVacuumCostLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_vacuum_cost_limit DatabasePostgresqlConfig#autovacuum_vacuum_cost_limit}.

---

##### `autovacuumVacuumScaleFactor`<sup>Optional</sup> <a name="autovacuumVacuumScaleFactor" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumScaleFactor"></a>

```typescript
public readonly autovacuumVacuumScaleFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_vacuum_scale_factor DatabasePostgresqlConfig#autovacuum_vacuum_scale_factor}.

---

##### `autovacuumVacuumThreshold`<sup>Optional</sup> <a name="autovacuumVacuumThreshold" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.autovacuumVacuumThreshold"></a>

```typescript
public readonly autovacuumVacuumThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autovacuum_vacuum_threshold DatabasePostgresqlConfig#autovacuum_vacuum_threshold}.

---

##### `backupHour`<sup>Optional</sup> <a name="backupHour" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupHour"></a>

```typescript
public readonly backupHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#backup_hour DatabasePostgresqlConfig#backup_hour}.

---

##### `backupMinute`<sup>Optional</sup> <a name="backupMinute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.backupMinute"></a>

```typescript
public readonly backupMinute: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#backup_minute DatabasePostgresqlConfig#backup_minute}.

---

##### `bgwriterDelay`<sup>Optional</sup> <a name="bgwriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterDelay"></a>

```typescript
public readonly bgwriterDelay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#bgwriter_delay DatabasePostgresqlConfig#bgwriter_delay}.

---

##### `bgwriterFlushAfter`<sup>Optional</sup> <a name="bgwriterFlushAfter" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterFlushAfter"></a>

```typescript
public readonly bgwriterFlushAfter: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#bgwriter_flush_after DatabasePostgresqlConfig#bgwriter_flush_after}.

---

##### `bgwriterLruMaxpages`<sup>Optional</sup> <a name="bgwriterLruMaxpages" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMaxpages"></a>

```typescript
public readonly bgwriterLruMaxpages: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#bgwriter_lru_maxpages DatabasePostgresqlConfig#bgwriter_lru_maxpages}.

---

##### `bgwriterLruMultiplier`<sup>Optional</sup> <a name="bgwriterLruMultiplier" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.bgwriterLruMultiplier"></a>

```typescript
public readonly bgwriterLruMultiplier: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#bgwriter_lru_multiplier DatabasePostgresqlConfig#bgwriter_lru_multiplier}.

---

##### `deadlockTimeout`<sup>Optional</sup> <a name="deadlockTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.deadlockTimeout"></a>

```typescript
public readonly deadlockTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#deadlock_timeout DatabasePostgresqlConfig#deadlock_timeout}.

---

##### `defaultToastCompression`<sup>Optional</sup> <a name="defaultToastCompression" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.defaultToastCompression"></a>

```typescript
public readonly defaultToastCompression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#default_toast_compression DatabasePostgresqlConfig#default_toast_compression}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#id DatabasePostgresqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleInTransactionSessionTimeout`<sup>Optional</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.idleInTransactionSessionTimeout"></a>

```typescript
public readonly idleInTransactionSessionTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#idle_in_transaction_session_timeout DatabasePostgresqlConfig#idle_in_transaction_session_timeout}.

---

##### `jit`<sup>Optional</sup> <a name="jit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.jit"></a>

```typescript
public readonly jit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#jit DatabasePostgresqlConfig#jit}.

---

##### `logAutovacuumMinDuration`<sup>Optional</sup> <a name="logAutovacuumMinDuration" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logAutovacuumMinDuration"></a>

```typescript
public readonly logAutovacuumMinDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#log_autovacuum_min_duration DatabasePostgresqlConfig#log_autovacuum_min_duration}.

---

##### `logErrorVerbosity`<sup>Optional</sup> <a name="logErrorVerbosity" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logErrorVerbosity"></a>

```typescript
public readonly logErrorVerbosity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#log_error_verbosity DatabasePostgresqlConfig#log_error_verbosity}.

---

##### `logLinePrefix`<sup>Optional</sup> <a name="logLinePrefix" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logLinePrefix"></a>

```typescript
public readonly logLinePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#log_line_prefix DatabasePostgresqlConfig#log_line_prefix}.

---

##### `logMinDurationStatement`<sup>Optional</sup> <a name="logMinDurationStatement" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.logMinDurationStatement"></a>

```typescript
public readonly logMinDurationStatement: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#log_min_duration_statement DatabasePostgresqlConfig#log_min_duration_statement}.

---

##### `maxFilesPerProcess`<sup>Optional</sup> <a name="maxFilesPerProcess" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxFilesPerProcess"></a>

```typescript
public readonly maxFilesPerProcess: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_files_per_process DatabasePostgresqlConfig#max_files_per_process}.

---

##### `maxLocksPerTransaction`<sup>Optional</sup> <a name="maxLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLocksPerTransaction"></a>

```typescript
public readonly maxLocksPerTransaction: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_locks_per_transaction DatabasePostgresqlConfig#max_locks_per_transaction}.

---

##### `maxLogicalReplicationWorkers`<sup>Optional</sup> <a name="maxLogicalReplicationWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxLogicalReplicationWorkers"></a>

```typescript
public readonly maxLogicalReplicationWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_logical_replication_workers DatabasePostgresqlConfig#max_logical_replication_workers}.

---

##### `maxParallelWorkers`<sup>Optional</sup> <a name="maxParallelWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkers"></a>

```typescript
public readonly maxParallelWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_parallel_workers DatabasePostgresqlConfig#max_parallel_workers}.

---

##### `maxParallelWorkersPerGather`<sup>Optional</sup> <a name="maxParallelWorkersPerGather" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxParallelWorkersPerGather"></a>

```typescript
public readonly maxParallelWorkersPerGather: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_parallel_workers_per_gather DatabasePostgresqlConfig#max_parallel_workers_per_gather}.

---

##### `maxPredLocksPerTransaction`<sup>Optional</sup> <a name="maxPredLocksPerTransaction" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPredLocksPerTransaction"></a>

```typescript
public readonly maxPredLocksPerTransaction: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_pred_locks_per_transaction DatabasePostgresqlConfig#max_pred_locks_per_transaction}.

---

##### `maxPreparedTransactions`<sup>Optional</sup> <a name="maxPreparedTransactions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxPreparedTransactions"></a>

```typescript
public readonly maxPreparedTransactions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_prepared_transactions DatabasePostgresqlConfig#max_prepared_transactions}.

---

##### `maxReplicationSlots`<sup>Optional</sup> <a name="maxReplicationSlots" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxReplicationSlots"></a>

```typescript
public readonly maxReplicationSlots: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_replication_slots DatabasePostgresqlConfig#max_replication_slots}.

---

##### `maxStackDepth`<sup>Optional</sup> <a name="maxStackDepth" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStackDepth"></a>

```typescript
public readonly maxStackDepth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_stack_depth DatabasePostgresqlConfig#max_stack_depth}.

---

##### `maxStandbyArchiveDelay`<sup>Optional</sup> <a name="maxStandbyArchiveDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyArchiveDelay"></a>

```typescript
public readonly maxStandbyArchiveDelay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_standby_archive_delay DatabasePostgresqlConfig#max_standby_archive_delay}.

---

##### `maxStandbyStreamingDelay`<sup>Optional</sup> <a name="maxStandbyStreamingDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxStandbyStreamingDelay"></a>

```typescript
public readonly maxStandbyStreamingDelay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_standby_streaming_delay DatabasePostgresqlConfig#max_standby_streaming_delay}.

---

##### `maxWalSenders`<sup>Optional</sup> <a name="maxWalSenders" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWalSenders"></a>

```typescript
public readonly maxWalSenders: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_wal_senders DatabasePostgresqlConfig#max_wal_senders}.

---

##### `maxWorkerProcesses`<sup>Optional</sup> <a name="maxWorkerProcesses" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.maxWorkerProcesses"></a>

```typescript
public readonly maxWorkerProcesses: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_worker_processes DatabasePostgresqlConfig#max_worker_processes}.

---

##### `pgbouncer`<sup>Optional</sup> <a name="pgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgbouncer"></a>

```typescript
public readonly pgbouncer: IResolvable | DatabasePostgresqlConfigPgbouncer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>[]

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#pgbouncer DatabasePostgresqlConfig#pgbouncer}

---

##### `pgPartmanBgwInterval`<sup>Optional</sup> <a name="pgPartmanBgwInterval" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwInterval"></a>

```typescript
public readonly pgPartmanBgwInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#pg_partman_bgw_interval DatabasePostgresqlConfig#pg_partman_bgw_interval}.

---

##### `pgPartmanBgwRole`<sup>Optional</sup> <a name="pgPartmanBgwRole" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgPartmanBgwRole"></a>

```typescript
public readonly pgPartmanBgwRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#pg_partman_bgw_role DatabasePostgresqlConfig#pg_partman_bgw_role}.

---

##### `pgStatStatementsTrack`<sup>Optional</sup> <a name="pgStatStatementsTrack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.pgStatStatementsTrack"></a>

```typescript
public readonly pgStatStatementsTrack: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#pg_stat_statements_track DatabasePostgresqlConfig#pg_stat_statements_track}.

---

##### `sharedBuffersPercentage`<sup>Optional</sup> <a name="sharedBuffersPercentage" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.sharedBuffersPercentage"></a>

```typescript
public readonly sharedBuffersPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#shared_buffers_percentage DatabasePostgresqlConfig#shared_buffers_percentage}.

---

##### `tempFileLimit`<sup>Optional</sup> <a name="tempFileLimit" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.tempFileLimit"></a>

```typescript
public readonly tempFileLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#temp_file_limit DatabasePostgresqlConfig#temp_file_limit}.

---

##### `timescaledb`<sup>Optional</sup> <a name="timescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timescaledb"></a>

```typescript
public readonly timescaledb: DatabasePostgresqlConfigTimescaledb;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#timescaledb DatabasePostgresqlConfig#timescaledb}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#timezone DatabasePostgresqlConfig#timezone}.

---

##### `trackActivityQuerySize`<sup>Optional</sup> <a name="trackActivityQuerySize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackActivityQuerySize"></a>

```typescript
public readonly trackActivityQuerySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#track_activity_query_size DatabasePostgresqlConfig#track_activity_query_size}.

---

##### `trackCommitTimestamp`<sup>Optional</sup> <a name="trackCommitTimestamp" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackCommitTimestamp"></a>

```typescript
public readonly trackCommitTimestamp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#track_commit_timestamp DatabasePostgresqlConfig#track_commit_timestamp}.

---

##### `trackFunctions`<sup>Optional</sup> <a name="trackFunctions" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackFunctions"></a>

```typescript
public readonly trackFunctions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#track_functions DatabasePostgresqlConfig#track_functions}.

---

##### `trackIoTiming`<sup>Optional</sup> <a name="trackIoTiming" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.trackIoTiming"></a>

```typescript
public readonly trackIoTiming: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#track_io_timing DatabasePostgresqlConfig#track_io_timing}.

---

##### `walSenderTimeout`<sup>Optional</sup> <a name="walSenderTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walSenderTimeout"></a>

```typescript
public readonly walSenderTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#wal_sender_timeout DatabasePostgresqlConfig#wal_sender_timeout}.

---

##### `walWriterDelay`<sup>Optional</sup> <a name="walWriterDelay" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.walWriterDelay"></a>

```typescript
public readonly walWriterDelay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#wal_writer_delay DatabasePostgresqlConfig#wal_writer_delay}.

---

##### `workMem`<sup>Optional</sup> <a name="workMem" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigConfig.property.workMem"></a>

```typescript
public readonly workMem: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#work_mem DatabasePostgresqlConfig#work_mem}.

---

### DatabasePostgresqlConfigPgbouncer <a name="DatabasePostgresqlConfigPgbouncer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.Initializer"></a>

```typescript
import { databasePostgresqlConfig } from '@cdktf/provider-digitalocean'

const databasePostgresqlConfigPgbouncer: databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbIdleTimeout">autodbIdleTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autodb_idle_timeout DatabasePostgresqlConfig#autodb_idle_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbMaxDbConnections">autodbMaxDbConnections</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autodb_max_db_connections DatabasePostgresqlConfig#autodb_max_db_connections}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolMode">autodbPoolMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autodb_pool_mode DatabasePostgresqlConfig#autodb_pool_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolSize">autodbPoolSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autodb_pool_size DatabasePostgresqlConfig#autodb_pool_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.ignoreStartupParameters">ignoreStartupParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#ignore_startup_parameters DatabasePostgresqlConfig#ignore_startup_parameters}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.minPoolSize">minPoolSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#min_pool_size DatabasePostgresqlConfig#min_pool_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverIdleTimeout">serverIdleTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#server_idle_timeout DatabasePostgresqlConfig#server_idle_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverLifetime">serverLifetime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#server_lifetime DatabasePostgresqlConfig#server_lifetime}. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverResetQueryAlways">serverResetQueryAlways</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#server_reset_query_always DatabasePostgresqlConfig#server_reset_query_always}. |

---

##### `autodbIdleTimeout`<sup>Optional</sup> <a name="autodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbIdleTimeout"></a>

```typescript
public readonly autodbIdleTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autodb_idle_timeout DatabasePostgresqlConfig#autodb_idle_timeout}.

---

##### `autodbMaxDbConnections`<sup>Optional</sup> <a name="autodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbMaxDbConnections"></a>

```typescript
public readonly autodbMaxDbConnections: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autodb_max_db_connections DatabasePostgresqlConfig#autodb_max_db_connections}.

---

##### `autodbPoolMode`<sup>Optional</sup> <a name="autodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolMode"></a>

```typescript
public readonly autodbPoolMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autodb_pool_mode DatabasePostgresqlConfig#autodb_pool_mode}.

---

##### `autodbPoolSize`<sup>Optional</sup> <a name="autodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.autodbPoolSize"></a>

```typescript
public readonly autodbPoolSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#autodb_pool_size DatabasePostgresqlConfig#autodb_pool_size}.

---

##### `ignoreStartupParameters`<sup>Optional</sup> <a name="ignoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.ignoreStartupParameters"></a>

```typescript
public readonly ignoreStartupParameters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#ignore_startup_parameters DatabasePostgresqlConfig#ignore_startup_parameters}.

---

##### `minPoolSize`<sup>Optional</sup> <a name="minPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.minPoolSize"></a>

```typescript
public readonly minPoolSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#min_pool_size DatabasePostgresqlConfig#min_pool_size}.

---

##### `serverIdleTimeout`<sup>Optional</sup> <a name="serverIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverIdleTimeout"></a>

```typescript
public readonly serverIdleTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#server_idle_timeout DatabasePostgresqlConfig#server_idle_timeout}.

---

##### `serverLifetime`<sup>Optional</sup> <a name="serverLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverLifetime"></a>

```typescript
public readonly serverLifetime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#server_lifetime DatabasePostgresqlConfig#server_lifetime}.

---

##### `serverResetQueryAlways`<sup>Optional</sup> <a name="serverResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer.property.serverResetQueryAlways"></a>

```typescript
public readonly serverResetQueryAlways: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#server_reset_query_always DatabasePostgresqlConfig#server_reset_query_always}.

---

### DatabasePostgresqlConfigTimescaledb <a name="DatabasePostgresqlConfigTimescaledb" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.Initializer"></a>

```typescript
import { databasePostgresqlConfig } from '@cdktf/provider-digitalocean'

const databasePostgresqlConfigTimescaledb: databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.property.maxBackgroundWorkers">maxBackgroundWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_background_workers DatabasePostgresqlConfig#max_background_workers}. |

---

##### `maxBackgroundWorkers`<sup>Optional</sup> <a name="maxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb.property.maxBackgroundWorkers"></a>

```typescript
public readonly maxBackgroundWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/database_postgresql_config#max_background_workers DatabasePostgresqlConfig#max_background_workers}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePostgresqlConfigPgbouncerList <a name="DatabasePostgresqlConfigPgbouncerList" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer"></a>

```typescript
import { databasePostgresqlConfig } from '@cdktf/provider-digitalocean'

new databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get"></a>

```typescript
public get(index: number): DatabasePostgresqlConfigPgbouncerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabasePostgresqlConfigPgbouncer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>[]

---


### DatabasePostgresqlConfigPgbouncerOutputReference <a name="DatabasePostgresqlConfigPgbouncerOutputReference" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer"></a>

```typescript
import { databasePostgresqlConfig } from '@cdktf/provider-digitalocean'

new databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbIdleTimeout">resetAutodbIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbMaxDbConnections">resetAutodbMaxDbConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolMode">resetAutodbPoolMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolSize">resetAutodbPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetIgnoreStartupParameters">resetIgnoreStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetMinPoolSize">resetMinPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerIdleTimeout">resetServerIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerLifetime">resetServerLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerResetQueryAlways">resetServerResetQueryAlways</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutodbIdleTimeout` <a name="resetAutodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbIdleTimeout"></a>

```typescript
public resetAutodbIdleTimeout(): void
```

##### `resetAutodbMaxDbConnections` <a name="resetAutodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbMaxDbConnections"></a>

```typescript
public resetAutodbMaxDbConnections(): void
```

##### `resetAutodbPoolMode` <a name="resetAutodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolMode"></a>

```typescript
public resetAutodbPoolMode(): void
```

##### `resetAutodbPoolSize` <a name="resetAutodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetAutodbPoolSize"></a>

```typescript
public resetAutodbPoolSize(): void
```

##### `resetIgnoreStartupParameters` <a name="resetIgnoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetIgnoreStartupParameters"></a>

```typescript
public resetIgnoreStartupParameters(): void
```

##### `resetMinPoolSize` <a name="resetMinPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetMinPoolSize"></a>

```typescript
public resetMinPoolSize(): void
```

##### `resetServerIdleTimeout` <a name="resetServerIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerIdleTimeout"></a>

```typescript
public resetServerIdleTimeout(): void
```

##### `resetServerLifetime` <a name="resetServerLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerLifetime"></a>

```typescript
public resetServerLifetime(): void
```

##### `resetServerResetQueryAlways` <a name="resetServerResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.resetServerResetQueryAlways"></a>

```typescript
public resetServerResetQueryAlways(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeoutInput">autodbIdleTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnectionsInput">autodbMaxDbConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolModeInput">autodbPoolModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSizeInput">autodbPoolSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParametersInput">ignoreStartupParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSizeInput">minPoolSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeoutInput">serverIdleTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetimeInput">serverLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlwaysInput">serverResetQueryAlwaysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeout">autodbIdleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnections">autodbMaxDbConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolMode">autodbPoolMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSize">autodbPoolSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParameters">ignoreStartupParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSize">minPoolSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeout">serverIdleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetime">serverLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlways">serverResetQueryAlways</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autodbIdleTimeoutInput`<sup>Optional</sup> <a name="autodbIdleTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeoutInput"></a>

```typescript
public readonly autodbIdleTimeoutInput: number;
```

- *Type:* number

---

##### `autodbMaxDbConnectionsInput`<sup>Optional</sup> <a name="autodbMaxDbConnectionsInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnectionsInput"></a>

```typescript
public readonly autodbMaxDbConnectionsInput: number;
```

- *Type:* number

---

##### `autodbPoolModeInput`<sup>Optional</sup> <a name="autodbPoolModeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolModeInput"></a>

```typescript
public readonly autodbPoolModeInput: string;
```

- *Type:* string

---

##### `autodbPoolSizeInput`<sup>Optional</sup> <a name="autodbPoolSizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSizeInput"></a>

```typescript
public readonly autodbPoolSizeInput: number;
```

- *Type:* number

---

##### `ignoreStartupParametersInput`<sup>Optional</sup> <a name="ignoreStartupParametersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParametersInput"></a>

```typescript
public readonly ignoreStartupParametersInput: string[];
```

- *Type:* string[]

---

##### `minPoolSizeInput`<sup>Optional</sup> <a name="minPoolSizeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSizeInput"></a>

```typescript
public readonly minPoolSizeInput: number;
```

- *Type:* number

---

##### `serverIdleTimeoutInput`<sup>Optional</sup> <a name="serverIdleTimeoutInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeoutInput"></a>

```typescript
public readonly serverIdleTimeoutInput: number;
```

- *Type:* number

---

##### `serverLifetimeInput`<sup>Optional</sup> <a name="serverLifetimeInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetimeInput"></a>

```typescript
public readonly serverLifetimeInput: number;
```

- *Type:* number

---

##### `serverResetQueryAlwaysInput`<sup>Optional</sup> <a name="serverResetQueryAlwaysInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlwaysInput"></a>

```typescript
public readonly serverResetQueryAlwaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autodbIdleTimeout`<sup>Required</sup> <a name="autodbIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbIdleTimeout"></a>

```typescript
public readonly autodbIdleTimeout: number;
```

- *Type:* number

---

##### `autodbMaxDbConnections`<sup>Required</sup> <a name="autodbMaxDbConnections" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbMaxDbConnections"></a>

```typescript
public readonly autodbMaxDbConnections: number;
```

- *Type:* number

---

##### `autodbPoolMode`<sup>Required</sup> <a name="autodbPoolMode" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolMode"></a>

```typescript
public readonly autodbPoolMode: string;
```

- *Type:* string

---

##### `autodbPoolSize`<sup>Required</sup> <a name="autodbPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.autodbPoolSize"></a>

```typescript
public readonly autodbPoolSize: number;
```

- *Type:* number

---

##### `ignoreStartupParameters`<sup>Required</sup> <a name="ignoreStartupParameters" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.ignoreStartupParameters"></a>

```typescript
public readonly ignoreStartupParameters: string[];
```

- *Type:* string[]

---

##### `minPoolSize`<sup>Required</sup> <a name="minPoolSize" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.minPoolSize"></a>

```typescript
public readonly minPoolSize: number;
```

- *Type:* number

---

##### `serverIdleTimeout`<sup>Required</sup> <a name="serverIdleTimeout" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverIdleTimeout"></a>

```typescript
public readonly serverIdleTimeout: number;
```

- *Type:* number

---

##### `serverLifetime`<sup>Required</sup> <a name="serverLifetime" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverLifetime"></a>

```typescript
public readonly serverLifetime: number;
```

- *Type:* number

---

##### `serverResetQueryAlways`<sup>Required</sup> <a name="serverResetQueryAlways" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.serverResetQueryAlways"></a>

```typescript
public readonly serverResetQueryAlways: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabasePostgresqlConfigPgbouncer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigPgbouncer">DatabasePostgresqlConfigPgbouncer</a>

---


### DatabasePostgresqlConfigTimescaledbOutputReference <a name="DatabasePostgresqlConfigTimescaledbOutputReference" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer"></a>

```typescript
import { databasePostgresqlConfig } from '@cdktf/provider-digitalocean'

new databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resetMaxBackgroundWorkers">resetMaxBackgroundWorkers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBackgroundWorkers` <a name="resetMaxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.resetMaxBackgroundWorkers"></a>

```typescript
public resetMaxBackgroundWorkers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkersInput">maxBackgroundWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkers">maxBackgroundWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxBackgroundWorkersInput`<sup>Optional</sup> <a name="maxBackgroundWorkersInput" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkersInput"></a>

```typescript
public readonly maxBackgroundWorkersInput: number;
```

- *Type:* number

---

##### `maxBackgroundWorkers`<sup>Required</sup> <a name="maxBackgroundWorkers" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.maxBackgroundWorkers"></a>

```typescript
public readonly maxBackgroundWorkers: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePostgresqlConfigTimescaledb;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databasePostgresqlConfig.DatabasePostgresqlConfigTimescaledb">DatabasePostgresqlConfigTimescaledb</a>

---



