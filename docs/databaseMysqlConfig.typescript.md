# `digitalocean_database_mysql_config`

Refer to the Terraform Registory for docs: [`digitalocean_database_mysql_config`](https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config).

# `databaseMysqlConfig` Submodule <a name="`databaseMysqlConfig` Submodule" id="@cdktf/provider-digitalocean.databaseMysqlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMysqlConfig <a name="DatabaseMysqlConfig" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config digitalocean_database_mysql_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer"></a>

```typescript
import { databaseMysqlConfig } from '@cdktf/provider-digitalocean'

new databaseMysqlConfig.DatabaseMysqlConfig(scope: Construct, id: string, config: DatabaseMysqlConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig">DatabaseMysqlConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig">DatabaseMysqlConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupHour">resetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupMinute">resetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBinlogRetentionPeriod">resetBinlogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetDefaultTimeZone">resetDefaultTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetGroupConcatMaxLen">resetGroupConcatMaxLen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInformationSchemaStatsExpiry">resetInformationSchemaStatsExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtMinTokenSize">resetInnodbFtMinTokenSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtServerStopwordTable">resetInnodbFtServerStopwordTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLockWaitTimeout">resetInnodbLockWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLogBufferSize">resetInnodbLogBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbOnlineAlterLogMaxSize">resetInnodbOnlineAlterLogMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbPrintAllDeadlocks">resetInnodbPrintAllDeadlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbRollbackOnTimeout">resetInnodbRollbackOnTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInteractiveTimeout">resetInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInternalTmpMemStorageEngine">resetInternalTmpMemStorageEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetLongQueryTime">resetLongQueryTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxAllowedPacket">resetMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxHeapTableSize">resetMaxHeapTableSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetReadTimeout">resetNetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetWriteTimeout">resetNetWriteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSlowQueryLog">resetSlowQueryLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSortBufferSize">resetSortBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlMode">resetSqlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlRequirePrimaryKey">resetSqlRequirePrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetTmpTableSize">resetTmpTableSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetWaitTimeout">resetWaitTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetBackupHour` <a name="resetBackupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupHour"></a>

```typescript
public resetBackupHour(): void
```

##### `resetBackupMinute` <a name="resetBackupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupMinute"></a>

```typescript
public resetBackupMinute(): void
```

##### `resetBinlogRetentionPeriod` <a name="resetBinlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBinlogRetentionPeriod"></a>

```typescript
public resetBinlogRetentionPeriod(): void
```

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetConnectTimeout"></a>

```typescript
public resetConnectTimeout(): void
```

##### `resetDefaultTimeZone` <a name="resetDefaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetDefaultTimeZone"></a>

```typescript
public resetDefaultTimeZone(): void
```

##### `resetGroupConcatMaxLen` <a name="resetGroupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetGroupConcatMaxLen"></a>

```typescript
public resetGroupConcatMaxLen(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInformationSchemaStatsExpiry` <a name="resetInformationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInformationSchemaStatsExpiry"></a>

```typescript
public resetInformationSchemaStatsExpiry(): void
```

##### `resetInnodbFtMinTokenSize` <a name="resetInnodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtMinTokenSize"></a>

```typescript
public resetInnodbFtMinTokenSize(): void
```

##### `resetInnodbFtServerStopwordTable` <a name="resetInnodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtServerStopwordTable"></a>

```typescript
public resetInnodbFtServerStopwordTable(): void
```

##### `resetInnodbLockWaitTimeout` <a name="resetInnodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLockWaitTimeout"></a>

```typescript
public resetInnodbLockWaitTimeout(): void
```

##### `resetInnodbLogBufferSize` <a name="resetInnodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLogBufferSize"></a>

```typescript
public resetInnodbLogBufferSize(): void
```

##### `resetInnodbOnlineAlterLogMaxSize` <a name="resetInnodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbOnlineAlterLogMaxSize"></a>

```typescript
public resetInnodbOnlineAlterLogMaxSize(): void
```

##### `resetInnodbPrintAllDeadlocks` <a name="resetInnodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbPrintAllDeadlocks"></a>

```typescript
public resetInnodbPrintAllDeadlocks(): void
```

##### `resetInnodbRollbackOnTimeout` <a name="resetInnodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbRollbackOnTimeout"></a>

```typescript
public resetInnodbRollbackOnTimeout(): void
```

##### `resetInteractiveTimeout` <a name="resetInteractiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInteractiveTimeout"></a>

```typescript
public resetInteractiveTimeout(): void
```

##### `resetInternalTmpMemStorageEngine` <a name="resetInternalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInternalTmpMemStorageEngine"></a>

```typescript
public resetInternalTmpMemStorageEngine(): void
```

##### `resetLongQueryTime` <a name="resetLongQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetLongQueryTime"></a>

```typescript
public resetLongQueryTime(): void
```

##### `resetMaxAllowedPacket` <a name="resetMaxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxAllowedPacket"></a>

```typescript
public resetMaxAllowedPacket(): void
```

##### `resetMaxHeapTableSize` <a name="resetMaxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxHeapTableSize"></a>

```typescript
public resetMaxHeapTableSize(): void
```

##### `resetNetReadTimeout` <a name="resetNetReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetReadTimeout"></a>

```typescript
public resetNetReadTimeout(): void
```

##### `resetNetWriteTimeout` <a name="resetNetWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetWriteTimeout"></a>

```typescript
public resetNetWriteTimeout(): void
```

##### `resetSlowQueryLog` <a name="resetSlowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSlowQueryLog"></a>

```typescript
public resetSlowQueryLog(): void
```

##### `resetSortBufferSize` <a name="resetSortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSortBufferSize"></a>

```typescript
public resetSortBufferSize(): void
```

##### `resetSqlMode` <a name="resetSqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlMode"></a>

```typescript
public resetSqlMode(): void
```

##### `resetSqlRequirePrimaryKey` <a name="resetSqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlRequirePrimaryKey"></a>

```typescript
public resetSqlRequirePrimaryKey(): void
```

##### `resetTmpTableSize` <a name="resetTmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetTmpTableSize"></a>

```typescript
public resetTmpTableSize(): void
```

##### `resetWaitTimeout` <a name="resetWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetWaitTimeout"></a>

```typescript
public resetWaitTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMysqlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isConstruct"></a>

```typescript
import { databaseMysqlConfig } from '@cdktf/provider-digitalocean'

databaseMysqlConfig.DatabaseMysqlConfig.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement"></a>

```typescript
import { databaseMysqlConfig } from '@cdktf/provider-digitalocean'

databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource"></a>

```typescript
import { databaseMysqlConfig } from '@cdktf/provider-digitalocean'

databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport"></a>

```typescript
import { databaseMysqlConfig } from '@cdktf/provider-digitalocean'

databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseMysqlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMysqlConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMysqlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMysqlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHourInput">backupHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinuteInput">backupMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriodInput">binlogRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZoneInput">defaultTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLenInput">groupConcatMaxLenInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiryInput">informationSchemaStatsExpiryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSizeInput">innodbFtMinTokenSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTableInput">innodbFtServerStopwordTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeoutInput">innodbLockWaitTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSizeInput">innodbLogBufferSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSizeInput">innodbOnlineAlterLogMaxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocksInput">innodbPrintAllDeadlocksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeoutInput">innodbRollbackOnTimeoutInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeoutInput">interactiveTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngineInput">internalTmpMemStorageEngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTimeInput">longQueryTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacketInput">maxAllowedPacketInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSizeInput">maxHeapTableSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeoutInput">netReadTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeoutInput">netWriteTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLogInput">slowQueryLogInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSizeInput">sortBufferSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlModeInput">sqlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKeyInput">sqlRequirePrimaryKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSizeInput">tmpTableSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeoutInput">waitTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHour">backupHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinute">backupMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriod">binlogRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZone">defaultTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLen">groupConcatMaxLen</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSize">innodbLogBufferSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSize">innodbOnlineAlterLogMaxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocks">innodbPrintAllDeadlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeout">innodbRollbackOnTimeout</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeout">interactiveTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngine">internalTmpMemStorageEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTime">longQueryTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeout">netReadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeout">netWriteTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLog">slowQueryLog</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSize">sortBufferSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlMode">sqlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSize">tmpTableSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeout">waitTimeout</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupHourInput`<sup>Optional</sup> <a name="backupHourInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHourInput"></a>

```typescript
public readonly backupHourInput: number;
```

- *Type:* number

---

##### `backupMinuteInput`<sup>Optional</sup> <a name="backupMinuteInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinuteInput"></a>

```typescript
public readonly backupMinuteInput: number;
```

- *Type:* number

---

##### `binlogRetentionPeriodInput`<sup>Optional</sup> <a name="binlogRetentionPeriodInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriodInput"></a>

```typescript
public readonly binlogRetentionPeriodInput: number;
```

- *Type:* number

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeoutInput"></a>

```typescript
public readonly connectTimeoutInput: number;
```

- *Type:* number

---

##### `defaultTimeZoneInput`<sup>Optional</sup> <a name="defaultTimeZoneInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZoneInput"></a>

```typescript
public readonly defaultTimeZoneInput: string;
```

- *Type:* string

---

##### `groupConcatMaxLenInput`<sup>Optional</sup> <a name="groupConcatMaxLenInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLenInput"></a>

```typescript
public readonly groupConcatMaxLenInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `informationSchemaStatsExpiryInput`<sup>Optional</sup> <a name="informationSchemaStatsExpiryInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiryInput"></a>

```typescript
public readonly informationSchemaStatsExpiryInput: number;
```

- *Type:* number

---

##### `innodbFtMinTokenSizeInput`<sup>Optional</sup> <a name="innodbFtMinTokenSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSizeInput"></a>

```typescript
public readonly innodbFtMinTokenSizeInput: number;
```

- *Type:* number

---

##### `innodbFtServerStopwordTableInput`<sup>Optional</sup> <a name="innodbFtServerStopwordTableInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTableInput"></a>

```typescript
public readonly innodbFtServerStopwordTableInput: string;
```

- *Type:* string

---

##### `innodbLockWaitTimeoutInput`<sup>Optional</sup> <a name="innodbLockWaitTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeoutInput"></a>

```typescript
public readonly innodbLockWaitTimeoutInput: number;
```

- *Type:* number

---

##### `innodbLogBufferSizeInput`<sup>Optional</sup> <a name="innodbLogBufferSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSizeInput"></a>

```typescript
public readonly innodbLogBufferSizeInput: number;
```

- *Type:* number

---

##### `innodbOnlineAlterLogMaxSizeInput`<sup>Optional</sup> <a name="innodbOnlineAlterLogMaxSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSizeInput"></a>

```typescript
public readonly innodbOnlineAlterLogMaxSizeInput: number;
```

- *Type:* number

---

##### `innodbPrintAllDeadlocksInput`<sup>Optional</sup> <a name="innodbPrintAllDeadlocksInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocksInput"></a>

```typescript
public readonly innodbPrintAllDeadlocksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `innodbRollbackOnTimeoutInput`<sup>Optional</sup> <a name="innodbRollbackOnTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeoutInput"></a>

```typescript
public readonly innodbRollbackOnTimeoutInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `interactiveTimeoutInput`<sup>Optional</sup> <a name="interactiveTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeoutInput"></a>

```typescript
public readonly interactiveTimeoutInput: number;
```

- *Type:* number

---

##### `internalTmpMemStorageEngineInput`<sup>Optional</sup> <a name="internalTmpMemStorageEngineInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngineInput"></a>

```typescript
public readonly internalTmpMemStorageEngineInput: string;
```

- *Type:* string

---

##### `longQueryTimeInput`<sup>Optional</sup> <a name="longQueryTimeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTimeInput"></a>

```typescript
public readonly longQueryTimeInput: number;
```

- *Type:* number

---

##### `maxAllowedPacketInput`<sup>Optional</sup> <a name="maxAllowedPacketInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacketInput"></a>

```typescript
public readonly maxAllowedPacketInput: number;
```

- *Type:* number

---

##### `maxHeapTableSizeInput`<sup>Optional</sup> <a name="maxHeapTableSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSizeInput"></a>

```typescript
public readonly maxHeapTableSizeInput: number;
```

- *Type:* number

---

##### `netReadTimeoutInput`<sup>Optional</sup> <a name="netReadTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeoutInput"></a>

```typescript
public readonly netReadTimeoutInput: number;
```

- *Type:* number

---

##### `netWriteTimeoutInput`<sup>Optional</sup> <a name="netWriteTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeoutInput"></a>

```typescript
public readonly netWriteTimeoutInput: number;
```

- *Type:* number

---

##### `slowQueryLogInput`<sup>Optional</sup> <a name="slowQueryLogInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLogInput"></a>

```typescript
public readonly slowQueryLogInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sortBufferSizeInput`<sup>Optional</sup> <a name="sortBufferSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSizeInput"></a>

```typescript
public readonly sortBufferSizeInput: number;
```

- *Type:* number

---

##### `sqlModeInput`<sup>Optional</sup> <a name="sqlModeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlModeInput"></a>

```typescript
public readonly sqlModeInput: string;
```

- *Type:* string

---

##### `sqlRequirePrimaryKeyInput`<sup>Optional</sup> <a name="sqlRequirePrimaryKeyInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKeyInput"></a>

```typescript
public readonly sqlRequirePrimaryKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tmpTableSizeInput`<sup>Optional</sup> <a name="tmpTableSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSizeInput"></a>

```typescript
public readonly tmpTableSizeInput: number;
```

- *Type:* number

---

##### `waitTimeoutInput`<sup>Optional</sup> <a name="waitTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeoutInput"></a>

```typescript
public readonly waitTimeoutInput: number;
```

- *Type:* number

---

##### `backupHour`<sup>Required</sup> <a name="backupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHour"></a>

```typescript
public readonly backupHour: number;
```

- *Type:* number

---

##### `backupMinute`<sup>Required</sup> <a name="backupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinute"></a>

```typescript
public readonly backupMinute: number;
```

- *Type:* number

---

##### `binlogRetentionPeriod`<sup>Required</sup> <a name="binlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriod"></a>

```typescript
public readonly binlogRetentionPeriod: number;
```

- *Type:* number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

---

##### `defaultTimeZone`<sup>Required</sup> <a name="defaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZone"></a>

```typescript
public readonly defaultTimeZone: string;
```

- *Type:* string

---

##### `groupConcatMaxLen`<sup>Required</sup> <a name="groupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLen"></a>

```typescript
public readonly groupConcatMaxLen: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `informationSchemaStatsExpiry`<sup>Required</sup> <a name="informationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiry"></a>

```typescript
public readonly informationSchemaStatsExpiry: number;
```

- *Type:* number

---

##### `innodbFtMinTokenSize`<sup>Required</sup> <a name="innodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSize"></a>

```typescript
public readonly innodbFtMinTokenSize: number;
```

- *Type:* number

---

##### `innodbFtServerStopwordTable`<sup>Required</sup> <a name="innodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTable"></a>

```typescript
public readonly innodbFtServerStopwordTable: string;
```

- *Type:* string

---

##### `innodbLockWaitTimeout`<sup>Required</sup> <a name="innodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeout"></a>

```typescript
public readonly innodbLockWaitTimeout: number;
```

- *Type:* number

---

##### `innodbLogBufferSize`<sup>Required</sup> <a name="innodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSize"></a>

```typescript
public readonly innodbLogBufferSize: number;
```

- *Type:* number

---

##### `innodbOnlineAlterLogMaxSize`<sup>Required</sup> <a name="innodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSize"></a>

```typescript
public readonly innodbOnlineAlterLogMaxSize: number;
```

- *Type:* number

---

##### `innodbPrintAllDeadlocks`<sup>Required</sup> <a name="innodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocks"></a>

```typescript
public readonly innodbPrintAllDeadlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `innodbRollbackOnTimeout`<sup>Required</sup> <a name="innodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeout"></a>

```typescript
public readonly innodbRollbackOnTimeout: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `interactiveTimeout`<sup>Required</sup> <a name="interactiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeout"></a>

```typescript
public readonly interactiveTimeout: number;
```

- *Type:* number

---

##### `internalTmpMemStorageEngine`<sup>Required</sup> <a name="internalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngine"></a>

```typescript
public readonly internalTmpMemStorageEngine: string;
```

- *Type:* string

---

##### `longQueryTime`<sup>Required</sup> <a name="longQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTime"></a>

```typescript
public readonly longQueryTime: number;
```

- *Type:* number

---

##### `maxAllowedPacket`<sup>Required</sup> <a name="maxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacket"></a>

```typescript
public readonly maxAllowedPacket: number;
```

- *Type:* number

---

##### `maxHeapTableSize`<sup>Required</sup> <a name="maxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSize"></a>

```typescript
public readonly maxHeapTableSize: number;
```

- *Type:* number

---

##### `netReadTimeout`<sup>Required</sup> <a name="netReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeout"></a>

```typescript
public readonly netReadTimeout: number;
```

- *Type:* number

---

##### `netWriteTimeout`<sup>Required</sup> <a name="netWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeout"></a>

```typescript
public readonly netWriteTimeout: number;
```

- *Type:* number

---

##### `slowQueryLog`<sup>Required</sup> <a name="slowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLog"></a>

```typescript
public readonly slowQueryLog: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sortBufferSize`<sup>Required</sup> <a name="sortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSize"></a>

```typescript
public readonly sortBufferSize: number;
```

- *Type:* number

---

##### `sqlMode`<sup>Required</sup> <a name="sqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlMode"></a>

```typescript
public readonly sqlMode: string;
```

- *Type:* string

---

##### `sqlRequirePrimaryKey`<sup>Required</sup> <a name="sqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKey"></a>

```typescript
public readonly sqlRequirePrimaryKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tmpTableSize`<sup>Required</sup> <a name="tmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSize"></a>

```typescript
public readonly tmpTableSize: number;
```

- *Type:* number

---

##### `waitTimeout`<sup>Required</sup> <a name="waitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeout"></a>

```typescript
public readonly waitTimeout: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMysqlConfigConfig <a name="DatabaseMysqlConfigConfig" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.Initializer"></a>

```typescript
import { databaseMysqlConfig } from '@cdktf/provider-digitalocean'

const databaseMysqlConfigConfig: databaseMysqlConfig.DatabaseMysqlConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupHour">backupHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupMinute">backupMinute</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.binlogRetentionPeriod">binlogRetentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.defaultTimeZone">defaultTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.groupConcatMaxLen">groupConcatMaxLen</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLogBufferSize">innodbLogBufferSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbOnlineAlterLogMaxSize">innodbOnlineAlterLogMaxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbPrintAllDeadlocks">innodbPrintAllDeadlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbRollbackOnTimeout">innodbRollbackOnTimeout</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.interactiveTimeout">interactiveTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.internalTmpMemStorageEngine">internalTmpMemStorageEngine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.longQueryTime">longQueryTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netReadTimeout">netReadTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netWriteTimeout">netWriteTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.slowQueryLog">slowQueryLog</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sortBufferSize">sortBufferSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlMode">sqlMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.tmpTableSize">tmpTableSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.waitTimeout">waitTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}.

---

##### `backupHour`<sup>Optional</sup> <a name="backupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupHour"></a>

```typescript
public readonly backupHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}.

---

##### `backupMinute`<sup>Optional</sup> <a name="backupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupMinute"></a>

```typescript
public readonly backupMinute: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}.

---

##### `binlogRetentionPeriod`<sup>Optional</sup> <a name="binlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.binlogRetentionPeriod"></a>

```typescript
public readonly binlogRetentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}.

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}.

---

##### `defaultTimeZone`<sup>Optional</sup> <a name="defaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.defaultTimeZone"></a>

```typescript
public readonly defaultTimeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}.

---

##### `groupConcatMaxLen`<sup>Optional</sup> <a name="groupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.groupConcatMaxLen"></a>

```typescript
public readonly groupConcatMaxLen: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `informationSchemaStatsExpiry`<sup>Optional</sup> <a name="informationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.informationSchemaStatsExpiry"></a>

```typescript
public readonly informationSchemaStatsExpiry: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}.

---

##### `innodbFtMinTokenSize`<sup>Optional</sup> <a name="innodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtMinTokenSize"></a>

```typescript
public readonly innodbFtMinTokenSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}.

---

##### `innodbFtServerStopwordTable`<sup>Optional</sup> <a name="innodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtServerStopwordTable"></a>

```typescript
public readonly innodbFtServerStopwordTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}.

---

##### `innodbLockWaitTimeout`<sup>Optional</sup> <a name="innodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLockWaitTimeout"></a>

```typescript
public readonly innodbLockWaitTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}.

---

##### `innodbLogBufferSize`<sup>Optional</sup> <a name="innodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLogBufferSize"></a>

```typescript
public readonly innodbLogBufferSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}.

---

##### `innodbOnlineAlterLogMaxSize`<sup>Optional</sup> <a name="innodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbOnlineAlterLogMaxSize"></a>

```typescript
public readonly innodbOnlineAlterLogMaxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}.

---

##### `innodbPrintAllDeadlocks`<sup>Optional</sup> <a name="innodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbPrintAllDeadlocks"></a>

```typescript
public readonly innodbPrintAllDeadlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}.

---

##### `innodbRollbackOnTimeout`<sup>Optional</sup> <a name="innodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbRollbackOnTimeout"></a>

```typescript
public readonly innodbRollbackOnTimeout: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}.

---

##### `interactiveTimeout`<sup>Optional</sup> <a name="interactiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.interactiveTimeout"></a>

```typescript
public readonly interactiveTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}.

---

##### `internalTmpMemStorageEngine`<sup>Optional</sup> <a name="internalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.internalTmpMemStorageEngine"></a>

```typescript
public readonly internalTmpMemStorageEngine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}.

---

##### `longQueryTime`<sup>Optional</sup> <a name="longQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.longQueryTime"></a>

```typescript
public readonly longQueryTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}.

---

##### `maxAllowedPacket`<sup>Optional</sup> <a name="maxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxAllowedPacket"></a>

```typescript
public readonly maxAllowedPacket: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}.

---

##### `maxHeapTableSize`<sup>Optional</sup> <a name="maxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxHeapTableSize"></a>

```typescript
public readonly maxHeapTableSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}.

---

##### `netReadTimeout`<sup>Optional</sup> <a name="netReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netReadTimeout"></a>

```typescript
public readonly netReadTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}.

---

##### `netWriteTimeout`<sup>Optional</sup> <a name="netWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netWriteTimeout"></a>

```typescript
public readonly netWriteTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}.

---

##### `slowQueryLog`<sup>Optional</sup> <a name="slowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.slowQueryLog"></a>

```typescript
public readonly slowQueryLog: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}.

---

##### `sortBufferSize`<sup>Optional</sup> <a name="sortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sortBufferSize"></a>

```typescript
public readonly sortBufferSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}.

---

##### `sqlMode`<sup>Optional</sup> <a name="sqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlMode"></a>

```typescript
public readonly sqlMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}.

---

##### `sqlRequirePrimaryKey`<sup>Optional</sup> <a name="sqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlRequirePrimaryKey"></a>

```typescript
public readonly sqlRequirePrimaryKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}.

---

##### `tmpTableSize`<sup>Optional</sup> <a name="tmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.tmpTableSize"></a>

```typescript
public readonly tmpTableSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}.

---

##### `waitTimeout`<sup>Optional</sup> <a name="waitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.waitTimeout"></a>

```typescript
public readonly waitTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}.

---



