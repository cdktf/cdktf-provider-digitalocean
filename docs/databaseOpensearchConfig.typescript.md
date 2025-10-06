# `databaseOpensearchConfig` Submodule <a name="`databaseOpensearchConfig` Submodule" id="@cdktf/provider-digitalocean.databaseOpensearchConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOpensearchConfig <a name="DatabaseOpensearchConfig" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config digitalocean_database_opensearch_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer"></a>

```typescript
import { databaseOpensearchConfig } from '@cdktf/provider-digitalocean'

new databaseOpensearchConfig.DatabaseOpensearchConfig(scope: Construct, id: string, config: DatabaseOpensearchConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig">DatabaseOpensearchConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig">DatabaseOpensearchConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionAutoCreateIndexEnabled">resetActionAutoCreateIndexEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionDestructiveRequiresName">resetActionDestructiveRequiresName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterMaxShardsPerNode">resetClusterMaxShardsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterRoutingAllocationNodeConcurrentRecoveries">resetClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetEnableSecurityAudit">resetEnableSecurityAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxContentLengthBytes">resetHttpMaxContentLengthBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxHeaderSizeBytes">resetHttpMaxHeaderSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxInitialLineLengthBytes">resetHttpMaxInitialLineLengthBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesFielddataCacheSizePercentage">resetIndicesFielddataCacheSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryIndexBufferSizePercentage">resetIndicesMemoryIndexBufferSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMaxIndexBufferSizeMb">resetIndicesMemoryMaxIndexBufferSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMinIndexBufferSizeMb">resetIndicesMemoryMinIndexBufferSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueriesCacheSizePercentage">resetIndicesQueriesCacheSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueryBoolMaxClauseCount">resetIndicesQueryBoolMaxClauseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxConcurrentFileChunks">resetIndicesRecoveryMaxConcurrentFileChunks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxMbPerSec">resetIndicesRecoveryMaxMbPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmEnabled">resetIsmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryEnabled">resetIsmHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxAgeHours">resetIsmHistoryMaxAgeHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxDocs">resetIsmHistoryMaxDocs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverCheckPeriodHours">resetIsmHistoryRolloverCheckPeriodHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverRetentionPeriodDays">resetIsmHistoryRolloverRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideMainResponseVersion">resetOverrideMainResponseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetPluginsAlertingFilterByBackendRolesEnabled">resetPluginsAlertingFilterByBackendRolesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetReindexRemoteWhitelist">resetReindexRemoteWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetScriptMaxCompilationsRate">resetScriptMaxCompilationsRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetSearchMaxBuckets">resetSearchMaxBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeQueueSize">resetThreadPoolAnalyzeQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeSize">resetThreadPoolAnalyzeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolForceMergeSize">resetThreadPoolForceMergeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetQueueSize">resetThreadPoolGetQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetSize">resetThreadPoolGetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchQueueSize">resetThreadPoolSearchQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchSize">resetThreadPoolSearchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledQueueSize">resetThreadPoolSearchThrottledQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledSize">resetThreadPoolSearchThrottledSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteQueueSize">resetThreadPoolWriteQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteSize">resetThreadPoolWriteSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetActionAutoCreateIndexEnabled` <a name="resetActionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionAutoCreateIndexEnabled"></a>

```typescript
public resetActionAutoCreateIndexEnabled(): void
```

##### `resetActionDestructiveRequiresName` <a name="resetActionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionDestructiveRequiresName"></a>

```typescript
public resetActionDestructiveRequiresName(): void
```

##### `resetClusterMaxShardsPerNode` <a name="resetClusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterMaxShardsPerNode"></a>

```typescript
public resetClusterMaxShardsPerNode(): void
```

##### `resetClusterRoutingAllocationNodeConcurrentRecoveries` <a name="resetClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterRoutingAllocationNodeConcurrentRecoveries"></a>

```typescript
public resetClusterRoutingAllocationNodeConcurrentRecoveries(): void
```

##### `resetEnableSecurityAudit` <a name="resetEnableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetEnableSecurityAudit"></a>

```typescript
public resetEnableSecurityAudit(): void
```

##### `resetHttpMaxContentLengthBytes` <a name="resetHttpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxContentLengthBytes"></a>

```typescript
public resetHttpMaxContentLengthBytes(): void
```

##### `resetHttpMaxHeaderSizeBytes` <a name="resetHttpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxHeaderSizeBytes"></a>

```typescript
public resetHttpMaxHeaderSizeBytes(): void
```

##### `resetHttpMaxInitialLineLengthBytes` <a name="resetHttpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxInitialLineLengthBytes"></a>

```typescript
public resetHttpMaxInitialLineLengthBytes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndicesFielddataCacheSizePercentage` <a name="resetIndicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesFielddataCacheSizePercentage"></a>

```typescript
public resetIndicesFielddataCacheSizePercentage(): void
```

##### `resetIndicesMemoryIndexBufferSizePercentage` <a name="resetIndicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryIndexBufferSizePercentage"></a>

```typescript
public resetIndicesMemoryIndexBufferSizePercentage(): void
```

##### `resetIndicesMemoryMaxIndexBufferSizeMb` <a name="resetIndicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMaxIndexBufferSizeMb"></a>

```typescript
public resetIndicesMemoryMaxIndexBufferSizeMb(): void
```

##### `resetIndicesMemoryMinIndexBufferSizeMb` <a name="resetIndicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMinIndexBufferSizeMb"></a>

```typescript
public resetIndicesMemoryMinIndexBufferSizeMb(): void
```

##### `resetIndicesQueriesCacheSizePercentage` <a name="resetIndicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueriesCacheSizePercentage"></a>

```typescript
public resetIndicesQueriesCacheSizePercentage(): void
```

##### `resetIndicesQueryBoolMaxClauseCount` <a name="resetIndicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueryBoolMaxClauseCount"></a>

```typescript
public resetIndicesQueryBoolMaxClauseCount(): void
```

##### `resetIndicesRecoveryMaxConcurrentFileChunks` <a name="resetIndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxConcurrentFileChunks"></a>

```typescript
public resetIndicesRecoveryMaxConcurrentFileChunks(): void
```

##### `resetIndicesRecoveryMaxMbPerSec` <a name="resetIndicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxMbPerSec"></a>

```typescript
public resetIndicesRecoveryMaxMbPerSec(): void
```

##### `resetIsmEnabled` <a name="resetIsmEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmEnabled"></a>

```typescript
public resetIsmEnabled(): void
```

##### `resetIsmHistoryEnabled` <a name="resetIsmHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryEnabled"></a>

```typescript
public resetIsmHistoryEnabled(): void
```

##### `resetIsmHistoryMaxAgeHours` <a name="resetIsmHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxAgeHours"></a>

```typescript
public resetIsmHistoryMaxAgeHours(): void
```

##### `resetIsmHistoryMaxDocs` <a name="resetIsmHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxDocs"></a>

```typescript
public resetIsmHistoryMaxDocs(): void
```

##### `resetIsmHistoryRolloverCheckPeriodHours` <a name="resetIsmHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverCheckPeriodHours"></a>

```typescript
public resetIsmHistoryRolloverCheckPeriodHours(): void
```

##### `resetIsmHistoryRolloverRetentionPeriodDays` <a name="resetIsmHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverRetentionPeriodDays"></a>

```typescript
public resetIsmHistoryRolloverRetentionPeriodDays(): void
```

##### `resetOverrideMainResponseVersion` <a name="resetOverrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideMainResponseVersion"></a>

```typescript
public resetOverrideMainResponseVersion(): void
```

##### `resetPluginsAlertingFilterByBackendRolesEnabled` <a name="resetPluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetPluginsAlertingFilterByBackendRolesEnabled"></a>

```typescript
public resetPluginsAlertingFilterByBackendRolesEnabled(): void
```

##### `resetReindexRemoteWhitelist` <a name="resetReindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetReindexRemoteWhitelist"></a>

```typescript
public resetReindexRemoteWhitelist(): void
```

##### `resetScriptMaxCompilationsRate` <a name="resetScriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetScriptMaxCompilationsRate"></a>

```typescript
public resetScriptMaxCompilationsRate(): void
```

##### `resetSearchMaxBuckets` <a name="resetSearchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetSearchMaxBuckets"></a>

```typescript
public resetSearchMaxBuckets(): void
```

##### `resetThreadPoolAnalyzeQueueSize` <a name="resetThreadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeQueueSize"></a>

```typescript
public resetThreadPoolAnalyzeQueueSize(): void
```

##### `resetThreadPoolAnalyzeSize` <a name="resetThreadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeSize"></a>

```typescript
public resetThreadPoolAnalyzeSize(): void
```

##### `resetThreadPoolForceMergeSize` <a name="resetThreadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolForceMergeSize"></a>

```typescript
public resetThreadPoolForceMergeSize(): void
```

##### `resetThreadPoolGetQueueSize` <a name="resetThreadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetQueueSize"></a>

```typescript
public resetThreadPoolGetQueueSize(): void
```

##### `resetThreadPoolGetSize` <a name="resetThreadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetSize"></a>

```typescript
public resetThreadPoolGetSize(): void
```

##### `resetThreadPoolSearchQueueSize` <a name="resetThreadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchQueueSize"></a>

```typescript
public resetThreadPoolSearchQueueSize(): void
```

##### `resetThreadPoolSearchSize` <a name="resetThreadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchSize"></a>

```typescript
public resetThreadPoolSearchSize(): void
```

##### `resetThreadPoolSearchThrottledQueueSize` <a name="resetThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledQueueSize"></a>

```typescript
public resetThreadPoolSearchThrottledQueueSize(): void
```

##### `resetThreadPoolSearchThrottledSize` <a name="resetThreadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledSize"></a>

```typescript
public resetThreadPoolSearchThrottledSize(): void
```

##### `resetThreadPoolWriteQueueSize` <a name="resetThreadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteQueueSize"></a>

```typescript
public resetThreadPoolWriteQueueSize(): void
```

##### `resetThreadPoolWriteSize` <a name="resetThreadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteSize"></a>

```typescript
public resetThreadPoolWriteSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseOpensearchConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct"></a>

```typescript
import { databaseOpensearchConfig } from '@cdktf/provider-digitalocean'

databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement"></a>

```typescript
import { databaseOpensearchConfig } from '@cdktf/provider-digitalocean'

databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource"></a>

```typescript
import { databaseOpensearchConfig } from '@cdktf/provider-digitalocean'

databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport"></a>

```typescript
import { databaseOpensearchConfig } from '@cdktf/provider-digitalocean'

databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseOpensearchConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseOpensearchConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseOpensearchConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOpensearchConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabledInput">actionAutoCreateIndexEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresNameInput">actionDestructiveRequiresNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNodeInput">clusterMaxShardsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput">clusterRoutingAllocationNodeConcurrentRecoveriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAuditInput">enableSecurityAuditInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytesInput">httpMaxContentLengthBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytesInput">httpMaxHeaderSizeBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytesInput">httpMaxInitialLineLengthBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentageInput">indicesFielddataCacheSizePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentageInput">indicesMemoryIndexBufferSizePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMbInput">indicesMemoryMaxIndexBufferSizeMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMbInput">indicesMemoryMinIndexBufferSizeMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentageInput">indicesQueriesCacheSizePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCountInput">indicesQueryBoolMaxClauseCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunksInput">indicesRecoveryMaxConcurrentFileChunksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSecInput">indicesRecoveryMaxMbPerSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabledInput">ismEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabledInput">ismHistoryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHoursInput">ismHistoryMaxAgeHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocsInput">ismHistoryMaxDocsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHoursInput">ismHistoryRolloverCheckPeriodHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDaysInput">ismHistoryRolloverRetentionPeriodDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersionInput">overrideMainResponseVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabledInput">pluginsAlertingFilterByBackendRolesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelistInput">reindexRemoteWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRateInput">scriptMaxCompilationsRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBucketsInput">searchMaxBucketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSizeInput">threadPoolAnalyzeQueueSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSizeInput">threadPoolAnalyzeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSizeInput">threadPoolForceMergeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSizeInput">threadPoolGetQueueSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSizeInput">threadPoolGetSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSizeInput">threadPoolSearchQueueSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSizeInput">threadPoolSearchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSizeInput">threadPoolSearchThrottledQueueSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSizeInput">threadPoolSearchThrottledSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSizeInput">threadPoolWriteQueueSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSizeInput">threadPoolWriteSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabled">actionAutoCreateIndexEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresName">actionDestructiveRequiresName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNode">clusterMaxShardsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries">clusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAudit">enableSecurityAudit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytes">httpMaxContentLengthBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytes">httpMaxHeaderSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytes">httpMaxInitialLineLengthBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentage">indicesFielddataCacheSizePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentage">indicesMemoryIndexBufferSizePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMb">indicesMemoryMaxIndexBufferSizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMb">indicesMemoryMinIndexBufferSizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentage">indicesQueriesCacheSizePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCount">indicesQueryBoolMaxClauseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunks">indicesRecoveryMaxConcurrentFileChunks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSec">indicesRecoveryMaxMbPerSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabled">ismEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabled">ismHistoryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHours">ismHistoryMaxAgeHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocs">ismHistoryMaxDocs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHours">ismHistoryRolloverCheckPeriodHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDays">ismHistoryRolloverRetentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersion">overrideMainResponseVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabled">pluginsAlertingFilterByBackendRolesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRate">scriptMaxCompilationsRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBuckets">searchMaxBuckets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSize">threadPoolAnalyzeQueueSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSize">threadPoolAnalyzeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSize">threadPoolGetQueueSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSize">threadPoolGetSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSize">threadPoolSearchQueueSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSize">threadPoolSearchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSize">threadPoolSearchThrottledQueueSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSize">threadPoolSearchThrottledSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSize">threadPoolWriteQueueSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSize">threadPoolWriteSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionAutoCreateIndexEnabledInput`<sup>Optional</sup> <a name="actionAutoCreateIndexEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabledInput"></a>

```typescript
public readonly actionAutoCreateIndexEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `actionDestructiveRequiresNameInput`<sup>Optional</sup> <a name="actionDestructiveRequiresNameInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresNameInput"></a>

```typescript
public readonly actionDestructiveRequiresNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `clusterMaxShardsPerNodeInput`<sup>Optional</sup> <a name="clusterMaxShardsPerNodeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNodeInput"></a>

```typescript
public readonly clusterMaxShardsPerNodeInput: number;
```

- *Type:* number

---

##### `clusterRoutingAllocationNodeConcurrentRecoveriesInput`<sup>Optional</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveriesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput"></a>

```typescript
public readonly clusterRoutingAllocationNodeConcurrentRecoveriesInput: number;
```

- *Type:* number

---

##### `enableSecurityAuditInput`<sup>Optional</sup> <a name="enableSecurityAuditInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAuditInput"></a>

```typescript
public readonly enableSecurityAuditInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpMaxContentLengthBytesInput`<sup>Optional</sup> <a name="httpMaxContentLengthBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytesInput"></a>

```typescript
public readonly httpMaxContentLengthBytesInput: number;
```

- *Type:* number

---

##### `httpMaxHeaderSizeBytesInput`<sup>Optional</sup> <a name="httpMaxHeaderSizeBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytesInput"></a>

```typescript
public readonly httpMaxHeaderSizeBytesInput: number;
```

- *Type:* number

---

##### `httpMaxInitialLineLengthBytesInput`<sup>Optional</sup> <a name="httpMaxInitialLineLengthBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytesInput"></a>

```typescript
public readonly httpMaxInitialLineLengthBytesInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indicesFielddataCacheSizePercentageInput`<sup>Optional</sup> <a name="indicesFielddataCacheSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentageInput"></a>

```typescript
public readonly indicesFielddataCacheSizePercentageInput: number;
```

- *Type:* number

---

##### `indicesMemoryIndexBufferSizePercentageInput`<sup>Optional</sup> <a name="indicesMemoryIndexBufferSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentageInput"></a>

```typescript
public readonly indicesMemoryIndexBufferSizePercentageInput: number;
```

- *Type:* number

---

##### `indicesMemoryMaxIndexBufferSizeMbInput`<sup>Optional</sup> <a name="indicesMemoryMaxIndexBufferSizeMbInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMbInput"></a>

```typescript
public readonly indicesMemoryMaxIndexBufferSizeMbInput: number;
```

- *Type:* number

---

##### `indicesMemoryMinIndexBufferSizeMbInput`<sup>Optional</sup> <a name="indicesMemoryMinIndexBufferSizeMbInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMbInput"></a>

```typescript
public readonly indicesMemoryMinIndexBufferSizeMbInput: number;
```

- *Type:* number

---

##### `indicesQueriesCacheSizePercentageInput`<sup>Optional</sup> <a name="indicesQueriesCacheSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentageInput"></a>

```typescript
public readonly indicesQueriesCacheSizePercentageInput: number;
```

- *Type:* number

---

##### `indicesQueryBoolMaxClauseCountInput`<sup>Optional</sup> <a name="indicesQueryBoolMaxClauseCountInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCountInput"></a>

```typescript
public readonly indicesQueryBoolMaxClauseCountInput: number;
```

- *Type:* number

---

##### `indicesRecoveryMaxConcurrentFileChunksInput`<sup>Optional</sup> <a name="indicesRecoveryMaxConcurrentFileChunksInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunksInput"></a>

```typescript
public readonly indicesRecoveryMaxConcurrentFileChunksInput: number;
```

- *Type:* number

---

##### `indicesRecoveryMaxMbPerSecInput`<sup>Optional</sup> <a name="indicesRecoveryMaxMbPerSecInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSecInput"></a>

```typescript
public readonly indicesRecoveryMaxMbPerSecInput: number;
```

- *Type:* number

---

##### `ismEnabledInput`<sup>Optional</sup> <a name="ismEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabledInput"></a>

```typescript
public readonly ismEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ismHistoryEnabledInput`<sup>Optional</sup> <a name="ismHistoryEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabledInput"></a>

```typescript
public readonly ismHistoryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ismHistoryMaxAgeHoursInput`<sup>Optional</sup> <a name="ismHistoryMaxAgeHoursInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHoursInput"></a>

```typescript
public readonly ismHistoryMaxAgeHoursInput: number;
```

- *Type:* number

---

##### `ismHistoryMaxDocsInput`<sup>Optional</sup> <a name="ismHistoryMaxDocsInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocsInput"></a>

```typescript
public readonly ismHistoryMaxDocsInput: number;
```

- *Type:* number

---

##### `ismHistoryRolloverCheckPeriodHoursInput`<sup>Optional</sup> <a name="ismHistoryRolloverCheckPeriodHoursInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHoursInput"></a>

```typescript
public readonly ismHistoryRolloverCheckPeriodHoursInput: number;
```

- *Type:* number

---

##### `ismHistoryRolloverRetentionPeriodDaysInput`<sup>Optional</sup> <a name="ismHistoryRolloverRetentionPeriodDaysInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDaysInput"></a>

```typescript
public readonly ismHistoryRolloverRetentionPeriodDaysInput: number;
```

- *Type:* number

---

##### `overrideMainResponseVersionInput`<sup>Optional</sup> <a name="overrideMainResponseVersionInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersionInput"></a>

```typescript
public readonly overrideMainResponseVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pluginsAlertingFilterByBackendRolesEnabledInput`<sup>Optional</sup> <a name="pluginsAlertingFilterByBackendRolesEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabledInput"></a>

```typescript
public readonly pluginsAlertingFilterByBackendRolesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reindexRemoteWhitelistInput`<sup>Optional</sup> <a name="reindexRemoteWhitelistInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelistInput"></a>

```typescript
public readonly reindexRemoteWhitelistInput: string[];
```

- *Type:* string[]

---

##### `scriptMaxCompilationsRateInput`<sup>Optional</sup> <a name="scriptMaxCompilationsRateInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRateInput"></a>

```typescript
public readonly scriptMaxCompilationsRateInput: string;
```

- *Type:* string

---

##### `searchMaxBucketsInput`<sup>Optional</sup> <a name="searchMaxBucketsInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBucketsInput"></a>

```typescript
public readonly searchMaxBucketsInput: number;
```

- *Type:* number

---

##### `threadPoolAnalyzeQueueSizeInput`<sup>Optional</sup> <a name="threadPoolAnalyzeQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSizeInput"></a>

```typescript
public readonly threadPoolAnalyzeQueueSizeInput: number;
```

- *Type:* number

---

##### `threadPoolAnalyzeSizeInput`<sup>Optional</sup> <a name="threadPoolAnalyzeSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSizeInput"></a>

```typescript
public readonly threadPoolAnalyzeSizeInput: number;
```

- *Type:* number

---

##### `threadPoolForceMergeSizeInput`<sup>Optional</sup> <a name="threadPoolForceMergeSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSizeInput"></a>

```typescript
public readonly threadPoolForceMergeSizeInput: number;
```

- *Type:* number

---

##### `threadPoolGetQueueSizeInput`<sup>Optional</sup> <a name="threadPoolGetQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSizeInput"></a>

```typescript
public readonly threadPoolGetQueueSizeInput: number;
```

- *Type:* number

---

##### `threadPoolGetSizeInput`<sup>Optional</sup> <a name="threadPoolGetSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSizeInput"></a>

```typescript
public readonly threadPoolGetSizeInput: number;
```

- *Type:* number

---

##### `threadPoolSearchQueueSizeInput`<sup>Optional</sup> <a name="threadPoolSearchQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSizeInput"></a>

```typescript
public readonly threadPoolSearchQueueSizeInput: number;
```

- *Type:* number

---

##### `threadPoolSearchSizeInput`<sup>Optional</sup> <a name="threadPoolSearchSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSizeInput"></a>

```typescript
public readonly threadPoolSearchSizeInput: number;
```

- *Type:* number

---

##### `threadPoolSearchThrottledQueueSizeInput`<sup>Optional</sup> <a name="threadPoolSearchThrottledQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSizeInput"></a>

```typescript
public readonly threadPoolSearchThrottledQueueSizeInput: number;
```

- *Type:* number

---

##### `threadPoolSearchThrottledSizeInput`<sup>Optional</sup> <a name="threadPoolSearchThrottledSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSizeInput"></a>

```typescript
public readonly threadPoolSearchThrottledSizeInput: number;
```

- *Type:* number

---

##### `threadPoolWriteQueueSizeInput`<sup>Optional</sup> <a name="threadPoolWriteQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSizeInput"></a>

```typescript
public readonly threadPoolWriteQueueSizeInput: number;
```

- *Type:* number

---

##### `threadPoolWriteSizeInput`<sup>Optional</sup> <a name="threadPoolWriteSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSizeInput"></a>

```typescript
public readonly threadPoolWriteSizeInput: number;
```

- *Type:* number

---

##### `actionAutoCreateIndexEnabled`<sup>Required</sup> <a name="actionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabled"></a>

```typescript
public readonly actionAutoCreateIndexEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `actionDestructiveRequiresName`<sup>Required</sup> <a name="actionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresName"></a>

```typescript
public readonly actionDestructiveRequiresName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `clusterMaxShardsPerNode`<sup>Required</sup> <a name="clusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNode"></a>

```typescript
public readonly clusterMaxShardsPerNode: number;
```

- *Type:* number

---

##### `clusterRoutingAllocationNodeConcurrentRecoveries`<sup>Required</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```typescript
public readonly clusterRoutingAllocationNodeConcurrentRecoveries: number;
```

- *Type:* number

---

##### `enableSecurityAudit`<sup>Required</sup> <a name="enableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAudit"></a>

```typescript
public readonly enableSecurityAudit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpMaxContentLengthBytes`<sup>Required</sup> <a name="httpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytes"></a>

```typescript
public readonly httpMaxContentLengthBytes: number;
```

- *Type:* number

---

##### `httpMaxHeaderSizeBytes`<sup>Required</sup> <a name="httpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytes"></a>

```typescript
public readonly httpMaxHeaderSizeBytes: number;
```

- *Type:* number

---

##### `httpMaxInitialLineLengthBytes`<sup>Required</sup> <a name="httpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytes"></a>

```typescript
public readonly httpMaxInitialLineLengthBytes: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indicesFielddataCacheSizePercentage`<sup>Required</sup> <a name="indicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentage"></a>

```typescript
public readonly indicesFielddataCacheSizePercentage: number;
```

- *Type:* number

---

##### `indicesMemoryIndexBufferSizePercentage`<sup>Required</sup> <a name="indicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentage"></a>

```typescript
public readonly indicesMemoryIndexBufferSizePercentage: number;
```

- *Type:* number

---

##### `indicesMemoryMaxIndexBufferSizeMb`<sup>Required</sup> <a name="indicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMb"></a>

```typescript
public readonly indicesMemoryMaxIndexBufferSizeMb: number;
```

- *Type:* number

---

##### `indicesMemoryMinIndexBufferSizeMb`<sup>Required</sup> <a name="indicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMb"></a>

```typescript
public readonly indicesMemoryMinIndexBufferSizeMb: number;
```

- *Type:* number

---

##### `indicesQueriesCacheSizePercentage`<sup>Required</sup> <a name="indicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentage"></a>

```typescript
public readonly indicesQueriesCacheSizePercentage: number;
```

- *Type:* number

---

##### `indicesQueryBoolMaxClauseCount`<sup>Required</sup> <a name="indicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCount"></a>

```typescript
public readonly indicesQueryBoolMaxClauseCount: number;
```

- *Type:* number

---

##### `indicesRecoveryMaxConcurrentFileChunks`<sup>Required</sup> <a name="indicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```typescript
public readonly indicesRecoveryMaxConcurrentFileChunks: number;
```

- *Type:* number

---

##### `indicesRecoveryMaxMbPerSec`<sup>Required</sup> <a name="indicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSec"></a>

```typescript
public readonly indicesRecoveryMaxMbPerSec: number;
```

- *Type:* number

---

##### `ismEnabled`<sup>Required</sup> <a name="ismEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabled"></a>

```typescript
public readonly ismEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ismHistoryEnabled`<sup>Required</sup> <a name="ismHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabled"></a>

```typescript
public readonly ismHistoryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ismHistoryMaxAgeHours`<sup>Required</sup> <a name="ismHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHours"></a>

```typescript
public readonly ismHistoryMaxAgeHours: number;
```

- *Type:* number

---

##### `ismHistoryMaxDocs`<sup>Required</sup> <a name="ismHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocs"></a>

```typescript
public readonly ismHistoryMaxDocs: number;
```

- *Type:* number

---

##### `ismHistoryRolloverCheckPeriodHours`<sup>Required</sup> <a name="ismHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHours"></a>

```typescript
public readonly ismHistoryRolloverCheckPeriodHours: number;
```

- *Type:* number

---

##### `ismHistoryRolloverRetentionPeriodDays`<sup>Required</sup> <a name="ismHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDays"></a>

```typescript
public readonly ismHistoryRolloverRetentionPeriodDays: number;
```

- *Type:* number

---

##### `overrideMainResponseVersion`<sup>Required</sup> <a name="overrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersion"></a>

```typescript
public readonly overrideMainResponseVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pluginsAlertingFilterByBackendRolesEnabled`<sup>Required</sup> <a name="pluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabled"></a>

```typescript
public readonly pluginsAlertingFilterByBackendRolesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reindexRemoteWhitelist`<sup>Required</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelist"></a>

```typescript
public readonly reindexRemoteWhitelist: string[];
```

- *Type:* string[]

---

##### `scriptMaxCompilationsRate`<sup>Required</sup> <a name="scriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRate"></a>

```typescript
public readonly scriptMaxCompilationsRate: string;
```

- *Type:* string

---

##### `searchMaxBuckets`<sup>Required</sup> <a name="searchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBuckets"></a>

```typescript
public readonly searchMaxBuckets: number;
```

- *Type:* number

---

##### `threadPoolAnalyzeQueueSize`<sup>Required</sup> <a name="threadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSize"></a>

```typescript
public readonly threadPoolAnalyzeQueueSize: number;
```

- *Type:* number

---

##### `threadPoolAnalyzeSize`<sup>Required</sup> <a name="threadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSize"></a>

```typescript
public readonly threadPoolAnalyzeSize: number;
```

- *Type:* number

---

##### `threadPoolForceMergeSize`<sup>Required</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSize"></a>

```typescript
public readonly threadPoolForceMergeSize: number;
```

- *Type:* number

---

##### `threadPoolGetQueueSize`<sup>Required</sup> <a name="threadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSize"></a>

```typescript
public readonly threadPoolGetQueueSize: number;
```

- *Type:* number

---

##### `threadPoolGetSize`<sup>Required</sup> <a name="threadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSize"></a>

```typescript
public readonly threadPoolGetSize: number;
```

- *Type:* number

---

##### `threadPoolSearchQueueSize`<sup>Required</sup> <a name="threadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSize"></a>

```typescript
public readonly threadPoolSearchQueueSize: number;
```

- *Type:* number

---

##### `threadPoolSearchSize`<sup>Required</sup> <a name="threadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSize"></a>

```typescript
public readonly threadPoolSearchSize: number;
```

- *Type:* number

---

##### `threadPoolSearchThrottledQueueSize`<sup>Required</sup> <a name="threadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSize"></a>

```typescript
public readonly threadPoolSearchThrottledQueueSize: number;
```

- *Type:* number

---

##### `threadPoolSearchThrottledSize`<sup>Required</sup> <a name="threadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSize"></a>

```typescript
public readonly threadPoolSearchThrottledSize: number;
```

- *Type:* number

---

##### `threadPoolWriteQueueSize`<sup>Required</sup> <a name="threadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSize"></a>

```typescript
public readonly threadPoolWriteQueueSize: number;
```

- *Type:* number

---

##### `threadPoolWriteSize`<sup>Required</sup> <a name="threadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSize"></a>

```typescript
public readonly threadPoolWriteSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOpensearchConfigConfig <a name="DatabaseOpensearchConfigConfig" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.Initializer"></a>

```typescript
import { databaseOpensearchConfig } from '@cdktf/provider-digitalocean'

const databaseOpensearchConfigConfig: databaseOpensearchConfig.DatabaseOpensearchConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionAutoCreateIndexEnabled">actionAutoCreateIndexEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionDestructiveRequiresName">actionDestructiveRequiresName</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterMaxShardsPerNode">clusterMaxShardsPerNode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries">clusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.enableSecurityAudit">enableSecurityAudit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxContentLengthBytes">httpMaxContentLengthBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxHeaderSizeBytes">httpMaxHeaderSizeBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxInitialLineLengthBytes">httpMaxInitialLineLengthBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesFielddataCacheSizePercentage">indicesFielddataCacheSizePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryIndexBufferSizePercentage">indicesMemoryIndexBufferSizePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMaxIndexBufferSizeMb">indicesMemoryMaxIndexBufferSizeMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMinIndexBufferSizeMb">indicesMemoryMinIndexBufferSizeMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueriesCacheSizePercentage">indicesQueriesCacheSizePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueryBoolMaxClauseCount">indicesQueryBoolMaxClauseCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxConcurrentFileChunks">indicesRecoveryMaxConcurrentFileChunks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxMbPerSec">indicesRecoveryMaxMbPerSec</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismEnabled">ismEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryEnabled">ismHistoryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxAgeHours">ismHistoryMaxAgeHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxDocs">ismHistoryMaxDocs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverCheckPeriodHours">ismHistoryRolloverCheckPeriodHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverRetentionPeriodDays">ismHistoryRolloverRetentionPeriodDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.overrideMainResponseVersion">overrideMainResponseVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.pluginsAlertingFilterByBackendRolesEnabled">pluginsAlertingFilterByBackendRolesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.scriptMaxCompilationsRate">scriptMaxCompilationsRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.searchMaxBuckets">searchMaxBuckets</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeQueueSize">threadPoolAnalyzeQueueSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeSize">threadPoolAnalyzeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetQueueSize">threadPoolGetQueueSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetSize">threadPoolGetSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchQueueSize">threadPoolSearchQueueSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchSize">threadPoolSearchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledQueueSize">threadPoolSearchThrottledQueueSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledSize">threadPoolSearchThrottledSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteQueueSize">threadPoolWriteQueueSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteSize">threadPoolWriteSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}.

---

##### `actionAutoCreateIndexEnabled`<sup>Optional</sup> <a name="actionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionAutoCreateIndexEnabled"></a>

```typescript
public readonly actionAutoCreateIndexEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}.

---

##### `actionDestructiveRequiresName`<sup>Optional</sup> <a name="actionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionDestructiveRequiresName"></a>

```typescript
public readonly actionDestructiveRequiresName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}.

---

##### `clusterMaxShardsPerNode`<sup>Optional</sup> <a name="clusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterMaxShardsPerNode"></a>

```typescript
public readonly clusterMaxShardsPerNode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}.

---

##### `clusterRoutingAllocationNodeConcurrentRecoveries`<sup>Optional</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```typescript
public readonly clusterRoutingAllocationNodeConcurrentRecoveries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}.

---

##### `enableSecurityAudit`<sup>Optional</sup> <a name="enableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.enableSecurityAudit"></a>

```typescript
public readonly enableSecurityAudit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}.

---

##### `httpMaxContentLengthBytes`<sup>Optional</sup> <a name="httpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxContentLengthBytes"></a>

```typescript
public readonly httpMaxContentLengthBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}.

---

##### `httpMaxHeaderSizeBytes`<sup>Optional</sup> <a name="httpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxHeaderSizeBytes"></a>

```typescript
public readonly httpMaxHeaderSizeBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}.

---

##### `httpMaxInitialLineLengthBytes`<sup>Optional</sup> <a name="httpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxInitialLineLengthBytes"></a>

```typescript
public readonly httpMaxInitialLineLengthBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indicesFielddataCacheSizePercentage`<sup>Optional</sup> <a name="indicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesFielddataCacheSizePercentage"></a>

```typescript
public readonly indicesFielddataCacheSizePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}.

---

##### `indicesMemoryIndexBufferSizePercentage`<sup>Optional</sup> <a name="indicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryIndexBufferSizePercentage"></a>

```typescript
public readonly indicesMemoryIndexBufferSizePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}.

---

##### `indicesMemoryMaxIndexBufferSizeMb`<sup>Optional</sup> <a name="indicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMaxIndexBufferSizeMb"></a>

```typescript
public readonly indicesMemoryMaxIndexBufferSizeMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}.

---

##### `indicesMemoryMinIndexBufferSizeMb`<sup>Optional</sup> <a name="indicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMinIndexBufferSizeMb"></a>

```typescript
public readonly indicesMemoryMinIndexBufferSizeMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}.

---

##### `indicesQueriesCacheSizePercentage`<sup>Optional</sup> <a name="indicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueriesCacheSizePercentage"></a>

```typescript
public readonly indicesQueriesCacheSizePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}.

---

##### `indicesQueryBoolMaxClauseCount`<sup>Optional</sup> <a name="indicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueryBoolMaxClauseCount"></a>

```typescript
public readonly indicesQueryBoolMaxClauseCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}.

---

##### `indicesRecoveryMaxConcurrentFileChunks`<sup>Optional</sup> <a name="indicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```typescript
public readonly indicesRecoveryMaxConcurrentFileChunks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}.

---

##### `indicesRecoveryMaxMbPerSec`<sup>Optional</sup> <a name="indicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxMbPerSec"></a>

```typescript
public readonly indicesRecoveryMaxMbPerSec: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}.

---

##### `ismEnabled`<sup>Optional</sup> <a name="ismEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismEnabled"></a>

```typescript
public readonly ismEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}.

---

##### `ismHistoryEnabled`<sup>Optional</sup> <a name="ismHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryEnabled"></a>

```typescript
public readonly ismHistoryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}.

---

##### `ismHistoryMaxAgeHours`<sup>Optional</sup> <a name="ismHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxAgeHours"></a>

```typescript
public readonly ismHistoryMaxAgeHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}.

---

##### `ismHistoryMaxDocs`<sup>Optional</sup> <a name="ismHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxDocs"></a>

```typescript
public readonly ismHistoryMaxDocs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}.

---

##### `ismHistoryRolloverCheckPeriodHours`<sup>Optional</sup> <a name="ismHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverCheckPeriodHours"></a>

```typescript
public readonly ismHistoryRolloverCheckPeriodHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}.

---

##### `ismHistoryRolloverRetentionPeriodDays`<sup>Optional</sup> <a name="ismHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverRetentionPeriodDays"></a>

```typescript
public readonly ismHistoryRolloverRetentionPeriodDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}.

---

##### `overrideMainResponseVersion`<sup>Optional</sup> <a name="overrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.overrideMainResponseVersion"></a>

```typescript
public readonly overrideMainResponseVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}.

---

##### `pluginsAlertingFilterByBackendRolesEnabled`<sup>Optional</sup> <a name="pluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.pluginsAlertingFilterByBackendRolesEnabled"></a>

```typescript
public readonly pluginsAlertingFilterByBackendRolesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}.

---

##### `reindexRemoteWhitelist`<sup>Optional</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.reindexRemoteWhitelist"></a>

```typescript
public readonly reindexRemoteWhitelist: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}.

---

##### `scriptMaxCompilationsRate`<sup>Optional</sup> <a name="scriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.scriptMaxCompilationsRate"></a>

```typescript
public readonly scriptMaxCompilationsRate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}.

---

##### `searchMaxBuckets`<sup>Optional</sup> <a name="searchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.searchMaxBuckets"></a>

```typescript
public readonly searchMaxBuckets: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}.

---

##### `threadPoolAnalyzeQueueSize`<sup>Optional</sup> <a name="threadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeQueueSize"></a>

```typescript
public readonly threadPoolAnalyzeQueueSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}.

---

##### `threadPoolAnalyzeSize`<sup>Optional</sup> <a name="threadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeSize"></a>

```typescript
public readonly threadPoolAnalyzeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}.

---

##### `threadPoolForceMergeSize`<sup>Optional</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolForceMergeSize"></a>

```typescript
public readonly threadPoolForceMergeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}.

---

##### `threadPoolGetQueueSize`<sup>Optional</sup> <a name="threadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetQueueSize"></a>

```typescript
public readonly threadPoolGetQueueSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}.

---

##### `threadPoolGetSize`<sup>Optional</sup> <a name="threadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetSize"></a>

```typescript
public readonly threadPoolGetSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}.

---

##### `threadPoolSearchQueueSize`<sup>Optional</sup> <a name="threadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchQueueSize"></a>

```typescript
public readonly threadPoolSearchQueueSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}.

---

##### `threadPoolSearchSize`<sup>Optional</sup> <a name="threadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchSize"></a>

```typescript
public readonly threadPoolSearchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}.

---

##### `threadPoolSearchThrottledQueueSize`<sup>Optional</sup> <a name="threadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledQueueSize"></a>

```typescript
public readonly threadPoolSearchThrottledQueueSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}.

---

##### `threadPoolSearchThrottledSize`<sup>Optional</sup> <a name="threadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledSize"></a>

```typescript
public readonly threadPoolSearchThrottledSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}.

---

##### `threadPoolWriteQueueSize`<sup>Optional</sup> <a name="threadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteQueueSize"></a>

```typescript
public readonly threadPoolWriteQueueSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}.

---

##### `threadPoolWriteSize`<sup>Optional</sup> <a name="threadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteSize"></a>

```typescript
public readonly threadPoolWriteSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}.

---



