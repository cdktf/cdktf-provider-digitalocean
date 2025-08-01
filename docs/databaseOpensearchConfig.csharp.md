# `databaseOpensearchConfig` Submodule <a name="`databaseOpensearchConfig` Submodule" id="@cdktf/provider-digitalocean.databaseOpensearchConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOpensearchConfig <a name="DatabaseOpensearchConfig" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config digitalocean_database_opensearch_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseOpensearchConfig(Construct Scope, string Id, DatabaseOpensearchConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig">DatabaseOpensearchConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig">DatabaseOpensearchConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionAutoCreateIndexEnabled">ResetActionAutoCreateIndexEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionDestructiveRequiresName">ResetActionDestructiveRequiresName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterMaxShardsPerNode">ResetClusterMaxShardsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterRoutingAllocationNodeConcurrentRecoveries">ResetClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetEnableSecurityAudit">ResetEnableSecurityAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxContentLengthBytes">ResetHttpMaxContentLengthBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxHeaderSizeBytes">ResetHttpMaxHeaderSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxInitialLineLengthBytes">ResetHttpMaxInitialLineLengthBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesFielddataCacheSizePercentage">ResetIndicesFielddataCacheSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryIndexBufferSizePercentage">ResetIndicesMemoryIndexBufferSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMaxIndexBufferSizeMb">ResetIndicesMemoryMaxIndexBufferSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMinIndexBufferSizeMb">ResetIndicesMemoryMinIndexBufferSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueriesCacheSizePercentage">ResetIndicesQueriesCacheSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueryBoolMaxClauseCount">ResetIndicesQueryBoolMaxClauseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxConcurrentFileChunks">ResetIndicesRecoveryMaxConcurrentFileChunks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxMbPerSec">ResetIndicesRecoveryMaxMbPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmEnabled">ResetIsmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryEnabled">ResetIsmHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxAgeHours">ResetIsmHistoryMaxAgeHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxDocs">ResetIsmHistoryMaxDocs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverCheckPeriodHours">ResetIsmHistoryRolloverCheckPeriodHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverRetentionPeriodDays">ResetIsmHistoryRolloverRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideMainResponseVersion">ResetOverrideMainResponseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetPluginsAlertingFilterByBackendRolesEnabled">ResetPluginsAlertingFilterByBackendRolesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetReindexRemoteWhitelist">ResetReindexRemoteWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetScriptMaxCompilationsRate">ResetScriptMaxCompilationsRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetSearchMaxBuckets">ResetSearchMaxBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeQueueSize">ResetThreadPoolAnalyzeQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeSize">ResetThreadPoolAnalyzeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolForceMergeSize">ResetThreadPoolForceMergeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetQueueSize">ResetThreadPoolGetQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetSize">ResetThreadPoolGetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchQueueSize">ResetThreadPoolSearchQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchSize">ResetThreadPoolSearchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledQueueSize">ResetThreadPoolSearchThrottledQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledSize">ResetThreadPoolSearchThrottledSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteQueueSize">ResetThreadPoolWriteQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteSize">ResetThreadPoolWriteSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetActionAutoCreateIndexEnabled` <a name="ResetActionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionAutoCreateIndexEnabled"></a>

```csharp
private void ResetActionAutoCreateIndexEnabled()
```

##### `ResetActionDestructiveRequiresName` <a name="ResetActionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionDestructiveRequiresName"></a>

```csharp
private void ResetActionDestructiveRequiresName()
```

##### `ResetClusterMaxShardsPerNode` <a name="ResetClusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterMaxShardsPerNode"></a>

```csharp
private void ResetClusterMaxShardsPerNode()
```

##### `ResetClusterRoutingAllocationNodeConcurrentRecoveries` <a name="ResetClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterRoutingAllocationNodeConcurrentRecoveries"></a>

```csharp
private void ResetClusterRoutingAllocationNodeConcurrentRecoveries()
```

##### `ResetEnableSecurityAudit` <a name="ResetEnableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetEnableSecurityAudit"></a>

```csharp
private void ResetEnableSecurityAudit()
```

##### `ResetHttpMaxContentLengthBytes` <a name="ResetHttpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxContentLengthBytes"></a>

```csharp
private void ResetHttpMaxContentLengthBytes()
```

##### `ResetHttpMaxHeaderSizeBytes` <a name="ResetHttpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxHeaderSizeBytes"></a>

```csharp
private void ResetHttpMaxHeaderSizeBytes()
```

##### `ResetHttpMaxInitialLineLengthBytes` <a name="ResetHttpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxInitialLineLengthBytes"></a>

```csharp
private void ResetHttpMaxInitialLineLengthBytes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndicesFielddataCacheSizePercentage` <a name="ResetIndicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesFielddataCacheSizePercentage"></a>

```csharp
private void ResetIndicesFielddataCacheSizePercentage()
```

##### `ResetIndicesMemoryIndexBufferSizePercentage` <a name="ResetIndicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryIndexBufferSizePercentage"></a>

```csharp
private void ResetIndicesMemoryIndexBufferSizePercentage()
```

##### `ResetIndicesMemoryMaxIndexBufferSizeMb` <a name="ResetIndicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMaxIndexBufferSizeMb"></a>

```csharp
private void ResetIndicesMemoryMaxIndexBufferSizeMb()
```

##### `ResetIndicesMemoryMinIndexBufferSizeMb` <a name="ResetIndicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMinIndexBufferSizeMb"></a>

```csharp
private void ResetIndicesMemoryMinIndexBufferSizeMb()
```

##### `ResetIndicesQueriesCacheSizePercentage` <a name="ResetIndicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueriesCacheSizePercentage"></a>

```csharp
private void ResetIndicesQueriesCacheSizePercentage()
```

##### `ResetIndicesQueryBoolMaxClauseCount` <a name="ResetIndicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueryBoolMaxClauseCount"></a>

```csharp
private void ResetIndicesQueryBoolMaxClauseCount()
```

##### `ResetIndicesRecoveryMaxConcurrentFileChunks` <a name="ResetIndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxConcurrentFileChunks"></a>

```csharp
private void ResetIndicesRecoveryMaxConcurrentFileChunks()
```

##### `ResetIndicesRecoveryMaxMbPerSec` <a name="ResetIndicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxMbPerSec"></a>

```csharp
private void ResetIndicesRecoveryMaxMbPerSec()
```

##### `ResetIsmEnabled` <a name="ResetIsmEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmEnabled"></a>

```csharp
private void ResetIsmEnabled()
```

##### `ResetIsmHistoryEnabled` <a name="ResetIsmHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryEnabled"></a>

```csharp
private void ResetIsmHistoryEnabled()
```

##### `ResetIsmHistoryMaxAgeHours` <a name="ResetIsmHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxAgeHours"></a>

```csharp
private void ResetIsmHistoryMaxAgeHours()
```

##### `ResetIsmHistoryMaxDocs` <a name="ResetIsmHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxDocs"></a>

```csharp
private void ResetIsmHistoryMaxDocs()
```

##### `ResetIsmHistoryRolloverCheckPeriodHours` <a name="ResetIsmHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverCheckPeriodHours"></a>

```csharp
private void ResetIsmHistoryRolloverCheckPeriodHours()
```

##### `ResetIsmHistoryRolloverRetentionPeriodDays` <a name="ResetIsmHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverRetentionPeriodDays"></a>

```csharp
private void ResetIsmHistoryRolloverRetentionPeriodDays()
```

##### `ResetOverrideMainResponseVersion` <a name="ResetOverrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideMainResponseVersion"></a>

```csharp
private void ResetOverrideMainResponseVersion()
```

##### `ResetPluginsAlertingFilterByBackendRolesEnabled` <a name="ResetPluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetPluginsAlertingFilterByBackendRolesEnabled"></a>

```csharp
private void ResetPluginsAlertingFilterByBackendRolesEnabled()
```

##### `ResetReindexRemoteWhitelist` <a name="ResetReindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetReindexRemoteWhitelist"></a>

```csharp
private void ResetReindexRemoteWhitelist()
```

##### `ResetScriptMaxCompilationsRate` <a name="ResetScriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetScriptMaxCompilationsRate"></a>

```csharp
private void ResetScriptMaxCompilationsRate()
```

##### `ResetSearchMaxBuckets` <a name="ResetSearchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetSearchMaxBuckets"></a>

```csharp
private void ResetSearchMaxBuckets()
```

##### `ResetThreadPoolAnalyzeQueueSize` <a name="ResetThreadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeQueueSize"></a>

```csharp
private void ResetThreadPoolAnalyzeQueueSize()
```

##### `ResetThreadPoolAnalyzeSize` <a name="ResetThreadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeSize"></a>

```csharp
private void ResetThreadPoolAnalyzeSize()
```

##### `ResetThreadPoolForceMergeSize` <a name="ResetThreadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolForceMergeSize"></a>

```csharp
private void ResetThreadPoolForceMergeSize()
```

##### `ResetThreadPoolGetQueueSize` <a name="ResetThreadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetQueueSize"></a>

```csharp
private void ResetThreadPoolGetQueueSize()
```

##### `ResetThreadPoolGetSize` <a name="ResetThreadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetSize"></a>

```csharp
private void ResetThreadPoolGetSize()
```

##### `ResetThreadPoolSearchQueueSize` <a name="ResetThreadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchQueueSize"></a>

```csharp
private void ResetThreadPoolSearchQueueSize()
```

##### `ResetThreadPoolSearchSize` <a name="ResetThreadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchSize"></a>

```csharp
private void ResetThreadPoolSearchSize()
```

##### `ResetThreadPoolSearchThrottledQueueSize` <a name="ResetThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledQueueSize"></a>

```csharp
private void ResetThreadPoolSearchThrottledQueueSize()
```

##### `ResetThreadPoolSearchThrottledSize` <a name="ResetThreadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledSize"></a>

```csharp
private void ResetThreadPoolSearchThrottledSize()
```

##### `ResetThreadPoolWriteQueueSize` <a name="ResetThreadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteQueueSize"></a>

```csharp
private void ResetThreadPoolWriteQueueSize()
```

##### `ResetThreadPoolWriteSize` <a name="ResetThreadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteSize"></a>

```csharp
private void ResetThreadPoolWriteSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseOpensearchConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseOpensearchConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseOpensearchConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseOpensearchConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseOpensearchConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseOpensearchConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseOpensearchConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseOpensearchConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOpensearchConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabledInput">ActionAutoCreateIndexEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresNameInput">ActionDestructiveRequiresNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNodeInput">ClusterMaxShardsPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput">ClusterRoutingAllocationNodeConcurrentRecoveriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAuditInput">EnableSecurityAuditInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytesInput">HttpMaxContentLengthBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytesInput">HttpMaxHeaderSizeBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytesInput">HttpMaxInitialLineLengthBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentageInput">IndicesFielddataCacheSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentageInput">IndicesMemoryIndexBufferSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMbInput">IndicesMemoryMaxIndexBufferSizeMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMbInput">IndicesMemoryMinIndexBufferSizeMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentageInput">IndicesQueriesCacheSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCountInput">IndicesQueryBoolMaxClauseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunksInput">IndicesRecoveryMaxConcurrentFileChunksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSecInput">IndicesRecoveryMaxMbPerSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabledInput">IsmEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabledInput">IsmHistoryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHoursInput">IsmHistoryMaxAgeHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocsInput">IsmHistoryMaxDocsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHoursInput">IsmHistoryRolloverCheckPeriodHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDaysInput">IsmHistoryRolloverRetentionPeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersionInput">OverrideMainResponseVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabledInput">PluginsAlertingFilterByBackendRolesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelistInput">ReindexRemoteWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRateInput">ScriptMaxCompilationsRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBucketsInput">SearchMaxBucketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSizeInput">ThreadPoolAnalyzeQueueSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSizeInput">ThreadPoolAnalyzeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSizeInput">ThreadPoolForceMergeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSizeInput">ThreadPoolGetQueueSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSizeInput">ThreadPoolGetSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSizeInput">ThreadPoolSearchQueueSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSizeInput">ThreadPoolSearchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSizeInput">ThreadPoolSearchThrottledQueueSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSizeInput">ThreadPoolSearchThrottledSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSizeInput">ThreadPoolWriteQueueSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSizeInput">ThreadPoolWriteSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabled">ActionAutoCreateIndexEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresName">ActionDestructiveRequiresName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNode">ClusterMaxShardsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries">ClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAudit">EnableSecurityAudit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytes">HttpMaxContentLengthBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytes">HttpMaxHeaderSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytes">HttpMaxInitialLineLengthBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentage">IndicesFielddataCacheSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentage">IndicesMemoryIndexBufferSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMb">IndicesMemoryMaxIndexBufferSizeMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMb">IndicesMemoryMinIndexBufferSizeMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentage">IndicesQueriesCacheSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCount">IndicesQueryBoolMaxClauseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunks">IndicesRecoveryMaxConcurrentFileChunks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSec">IndicesRecoveryMaxMbPerSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabled">IsmEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabled">IsmHistoryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHours">IsmHistoryMaxAgeHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocs">IsmHistoryMaxDocs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHours">IsmHistoryRolloverCheckPeriodHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDays">IsmHistoryRolloverRetentionPeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersion">OverrideMainResponseVersion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabled">PluginsAlertingFilterByBackendRolesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelist">ReindexRemoteWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRate">ScriptMaxCompilationsRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBuckets">SearchMaxBuckets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSize">ThreadPoolAnalyzeQueueSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSize">ThreadPoolAnalyzeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSize">ThreadPoolForceMergeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSize">ThreadPoolGetQueueSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSize">ThreadPoolGetSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSize">ThreadPoolSearchQueueSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSize">ThreadPoolSearchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSize">ThreadPoolSearchThrottledQueueSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSize">ThreadPoolSearchThrottledSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSize">ThreadPoolWriteQueueSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSize">ThreadPoolWriteSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionAutoCreateIndexEnabledInput`<sup>Optional</sup> <a name="ActionAutoCreateIndexEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabledInput"></a>

```csharp
public object ActionAutoCreateIndexEnabledInput { get; }
```

- *Type:* object

---

##### `ActionDestructiveRequiresNameInput`<sup>Optional</sup> <a name="ActionDestructiveRequiresNameInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresNameInput"></a>

```csharp
public object ActionDestructiveRequiresNameInput { get; }
```

- *Type:* object

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ClusterMaxShardsPerNodeInput`<sup>Optional</sup> <a name="ClusterMaxShardsPerNodeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNodeInput"></a>

```csharp
public double ClusterMaxShardsPerNodeInput { get; }
```

- *Type:* double

---

##### `ClusterRoutingAllocationNodeConcurrentRecoveriesInput`<sup>Optional</sup> <a name="ClusterRoutingAllocationNodeConcurrentRecoveriesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput"></a>

```csharp
public double ClusterRoutingAllocationNodeConcurrentRecoveriesInput { get; }
```

- *Type:* double

---

##### `EnableSecurityAuditInput`<sup>Optional</sup> <a name="EnableSecurityAuditInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAuditInput"></a>

```csharp
public object EnableSecurityAuditInput { get; }
```

- *Type:* object

---

##### `HttpMaxContentLengthBytesInput`<sup>Optional</sup> <a name="HttpMaxContentLengthBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytesInput"></a>

```csharp
public double HttpMaxContentLengthBytesInput { get; }
```

- *Type:* double

---

##### `HttpMaxHeaderSizeBytesInput`<sup>Optional</sup> <a name="HttpMaxHeaderSizeBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytesInput"></a>

```csharp
public double HttpMaxHeaderSizeBytesInput { get; }
```

- *Type:* double

---

##### `HttpMaxInitialLineLengthBytesInput`<sup>Optional</sup> <a name="HttpMaxInitialLineLengthBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytesInput"></a>

```csharp
public double HttpMaxInitialLineLengthBytesInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndicesFielddataCacheSizePercentageInput`<sup>Optional</sup> <a name="IndicesFielddataCacheSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentageInput"></a>

```csharp
public double IndicesFielddataCacheSizePercentageInput { get; }
```

- *Type:* double

---

##### `IndicesMemoryIndexBufferSizePercentageInput`<sup>Optional</sup> <a name="IndicesMemoryIndexBufferSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentageInput"></a>

```csharp
public double IndicesMemoryIndexBufferSizePercentageInput { get; }
```

- *Type:* double

---

##### `IndicesMemoryMaxIndexBufferSizeMbInput`<sup>Optional</sup> <a name="IndicesMemoryMaxIndexBufferSizeMbInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMbInput"></a>

```csharp
public double IndicesMemoryMaxIndexBufferSizeMbInput { get; }
```

- *Type:* double

---

##### `IndicesMemoryMinIndexBufferSizeMbInput`<sup>Optional</sup> <a name="IndicesMemoryMinIndexBufferSizeMbInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMbInput"></a>

```csharp
public double IndicesMemoryMinIndexBufferSizeMbInput { get; }
```

- *Type:* double

---

##### `IndicesQueriesCacheSizePercentageInput`<sup>Optional</sup> <a name="IndicesQueriesCacheSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentageInput"></a>

```csharp
public double IndicesQueriesCacheSizePercentageInput { get; }
```

- *Type:* double

---

##### `IndicesQueryBoolMaxClauseCountInput`<sup>Optional</sup> <a name="IndicesQueryBoolMaxClauseCountInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCountInput"></a>

```csharp
public double IndicesQueryBoolMaxClauseCountInput { get; }
```

- *Type:* double

---

##### `IndicesRecoveryMaxConcurrentFileChunksInput`<sup>Optional</sup> <a name="IndicesRecoveryMaxConcurrentFileChunksInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunksInput"></a>

```csharp
public double IndicesRecoveryMaxConcurrentFileChunksInput { get; }
```

- *Type:* double

---

##### `IndicesRecoveryMaxMbPerSecInput`<sup>Optional</sup> <a name="IndicesRecoveryMaxMbPerSecInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSecInput"></a>

```csharp
public double IndicesRecoveryMaxMbPerSecInput { get; }
```

- *Type:* double

---

##### `IsmEnabledInput`<sup>Optional</sup> <a name="IsmEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabledInput"></a>

```csharp
public object IsmEnabledInput { get; }
```

- *Type:* object

---

##### `IsmHistoryEnabledInput`<sup>Optional</sup> <a name="IsmHistoryEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabledInput"></a>

```csharp
public object IsmHistoryEnabledInput { get; }
```

- *Type:* object

---

##### `IsmHistoryMaxAgeHoursInput`<sup>Optional</sup> <a name="IsmHistoryMaxAgeHoursInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHoursInput"></a>

```csharp
public double IsmHistoryMaxAgeHoursInput { get; }
```

- *Type:* double

---

##### `IsmHistoryMaxDocsInput`<sup>Optional</sup> <a name="IsmHistoryMaxDocsInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocsInput"></a>

```csharp
public double IsmHistoryMaxDocsInput { get; }
```

- *Type:* double

---

##### `IsmHistoryRolloverCheckPeriodHoursInput`<sup>Optional</sup> <a name="IsmHistoryRolloverCheckPeriodHoursInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHoursInput"></a>

```csharp
public double IsmHistoryRolloverCheckPeriodHoursInput { get; }
```

- *Type:* double

---

##### `IsmHistoryRolloverRetentionPeriodDaysInput`<sup>Optional</sup> <a name="IsmHistoryRolloverRetentionPeriodDaysInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDaysInput"></a>

```csharp
public double IsmHistoryRolloverRetentionPeriodDaysInput { get; }
```

- *Type:* double

---

##### `OverrideMainResponseVersionInput`<sup>Optional</sup> <a name="OverrideMainResponseVersionInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersionInput"></a>

```csharp
public object OverrideMainResponseVersionInput { get; }
```

- *Type:* object

---

##### `PluginsAlertingFilterByBackendRolesEnabledInput`<sup>Optional</sup> <a name="PluginsAlertingFilterByBackendRolesEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabledInput"></a>

```csharp
public object PluginsAlertingFilterByBackendRolesEnabledInput { get; }
```

- *Type:* object

---

##### `ReindexRemoteWhitelistInput`<sup>Optional</sup> <a name="ReindexRemoteWhitelistInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelistInput"></a>

```csharp
public string[] ReindexRemoteWhitelistInput { get; }
```

- *Type:* string[]

---

##### `ScriptMaxCompilationsRateInput`<sup>Optional</sup> <a name="ScriptMaxCompilationsRateInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRateInput"></a>

```csharp
public string ScriptMaxCompilationsRateInput { get; }
```

- *Type:* string

---

##### `SearchMaxBucketsInput`<sup>Optional</sup> <a name="SearchMaxBucketsInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBucketsInput"></a>

```csharp
public double SearchMaxBucketsInput { get; }
```

- *Type:* double

---

##### `ThreadPoolAnalyzeQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolAnalyzeQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSizeInput"></a>

```csharp
public double ThreadPoolAnalyzeQueueSizeInput { get; }
```

- *Type:* double

---

##### `ThreadPoolAnalyzeSizeInput`<sup>Optional</sup> <a name="ThreadPoolAnalyzeSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSizeInput"></a>

```csharp
public double ThreadPoolAnalyzeSizeInput { get; }
```

- *Type:* double

---

##### `ThreadPoolForceMergeSizeInput`<sup>Optional</sup> <a name="ThreadPoolForceMergeSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSizeInput"></a>

```csharp
public double ThreadPoolForceMergeSizeInput { get; }
```

- *Type:* double

---

##### `ThreadPoolGetQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolGetQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSizeInput"></a>

```csharp
public double ThreadPoolGetQueueSizeInput { get; }
```

- *Type:* double

---

##### `ThreadPoolGetSizeInput`<sup>Optional</sup> <a name="ThreadPoolGetSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSizeInput"></a>

```csharp
public double ThreadPoolGetSizeInput { get; }
```

- *Type:* double

---

##### `ThreadPoolSearchQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSizeInput"></a>

```csharp
public double ThreadPoolSearchQueueSizeInput { get; }
```

- *Type:* double

---

##### `ThreadPoolSearchSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSizeInput"></a>

```csharp
public double ThreadPoolSearchSizeInput { get; }
```

- *Type:* double

---

##### `ThreadPoolSearchThrottledQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSizeInput"></a>

```csharp
public double ThreadPoolSearchThrottledQueueSizeInput { get; }
```

- *Type:* double

---

##### `ThreadPoolSearchThrottledSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSizeInput"></a>

```csharp
public double ThreadPoolSearchThrottledSizeInput { get; }
```

- *Type:* double

---

##### `ThreadPoolWriteQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolWriteQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSizeInput"></a>

```csharp
public double ThreadPoolWriteQueueSizeInput { get; }
```

- *Type:* double

---

##### `ThreadPoolWriteSizeInput`<sup>Optional</sup> <a name="ThreadPoolWriteSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSizeInput"></a>

```csharp
public double ThreadPoolWriteSizeInput { get; }
```

- *Type:* double

---

##### `ActionAutoCreateIndexEnabled`<sup>Required</sup> <a name="ActionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabled"></a>

```csharp
public object ActionAutoCreateIndexEnabled { get; }
```

- *Type:* object

---

##### `ActionDestructiveRequiresName`<sup>Required</sup> <a name="ActionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresName"></a>

```csharp
public object ActionDestructiveRequiresName { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ClusterMaxShardsPerNode`<sup>Required</sup> <a name="ClusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNode"></a>

```csharp
public double ClusterMaxShardsPerNode { get; }
```

- *Type:* double

---

##### `ClusterRoutingAllocationNodeConcurrentRecoveries`<sup>Required</sup> <a name="ClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```csharp
public double ClusterRoutingAllocationNodeConcurrentRecoveries { get; }
```

- *Type:* double

---

##### `EnableSecurityAudit`<sup>Required</sup> <a name="EnableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAudit"></a>

```csharp
public object EnableSecurityAudit { get; }
```

- *Type:* object

---

##### `HttpMaxContentLengthBytes`<sup>Required</sup> <a name="HttpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytes"></a>

```csharp
public double HttpMaxContentLengthBytes { get; }
```

- *Type:* double

---

##### `HttpMaxHeaderSizeBytes`<sup>Required</sup> <a name="HttpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytes"></a>

```csharp
public double HttpMaxHeaderSizeBytes { get; }
```

- *Type:* double

---

##### `HttpMaxInitialLineLengthBytes`<sup>Required</sup> <a name="HttpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytes"></a>

```csharp
public double HttpMaxInitialLineLengthBytes { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndicesFielddataCacheSizePercentage`<sup>Required</sup> <a name="IndicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentage"></a>

```csharp
public double IndicesFielddataCacheSizePercentage { get; }
```

- *Type:* double

---

##### `IndicesMemoryIndexBufferSizePercentage`<sup>Required</sup> <a name="IndicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentage"></a>

```csharp
public double IndicesMemoryIndexBufferSizePercentage { get; }
```

- *Type:* double

---

##### `IndicesMemoryMaxIndexBufferSizeMb`<sup>Required</sup> <a name="IndicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMb"></a>

```csharp
public double IndicesMemoryMaxIndexBufferSizeMb { get; }
```

- *Type:* double

---

##### `IndicesMemoryMinIndexBufferSizeMb`<sup>Required</sup> <a name="IndicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMb"></a>

```csharp
public double IndicesMemoryMinIndexBufferSizeMb { get; }
```

- *Type:* double

---

##### `IndicesQueriesCacheSizePercentage`<sup>Required</sup> <a name="IndicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentage"></a>

```csharp
public double IndicesQueriesCacheSizePercentage { get; }
```

- *Type:* double

---

##### `IndicesQueryBoolMaxClauseCount`<sup>Required</sup> <a name="IndicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCount"></a>

```csharp
public double IndicesQueryBoolMaxClauseCount { get; }
```

- *Type:* double

---

##### `IndicesRecoveryMaxConcurrentFileChunks`<sup>Required</sup> <a name="IndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```csharp
public double IndicesRecoveryMaxConcurrentFileChunks { get; }
```

- *Type:* double

---

##### `IndicesRecoveryMaxMbPerSec`<sup>Required</sup> <a name="IndicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSec"></a>

```csharp
public double IndicesRecoveryMaxMbPerSec { get; }
```

- *Type:* double

---

##### `IsmEnabled`<sup>Required</sup> <a name="IsmEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabled"></a>

```csharp
public object IsmEnabled { get; }
```

- *Type:* object

---

##### `IsmHistoryEnabled`<sup>Required</sup> <a name="IsmHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabled"></a>

```csharp
public object IsmHistoryEnabled { get; }
```

- *Type:* object

---

##### `IsmHistoryMaxAgeHours`<sup>Required</sup> <a name="IsmHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHours"></a>

```csharp
public double IsmHistoryMaxAgeHours { get; }
```

- *Type:* double

---

##### `IsmHistoryMaxDocs`<sup>Required</sup> <a name="IsmHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocs"></a>

```csharp
public double IsmHistoryMaxDocs { get; }
```

- *Type:* double

---

##### `IsmHistoryRolloverCheckPeriodHours`<sup>Required</sup> <a name="IsmHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHours"></a>

```csharp
public double IsmHistoryRolloverCheckPeriodHours { get; }
```

- *Type:* double

---

##### `IsmHistoryRolloverRetentionPeriodDays`<sup>Required</sup> <a name="IsmHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDays"></a>

```csharp
public double IsmHistoryRolloverRetentionPeriodDays { get; }
```

- *Type:* double

---

##### `OverrideMainResponseVersion`<sup>Required</sup> <a name="OverrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersion"></a>

```csharp
public object OverrideMainResponseVersion { get; }
```

- *Type:* object

---

##### `PluginsAlertingFilterByBackendRolesEnabled`<sup>Required</sup> <a name="PluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabled"></a>

```csharp
public object PluginsAlertingFilterByBackendRolesEnabled { get; }
```

- *Type:* object

---

##### `ReindexRemoteWhitelist`<sup>Required</sup> <a name="ReindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelist"></a>

```csharp
public string[] ReindexRemoteWhitelist { get; }
```

- *Type:* string[]

---

##### `ScriptMaxCompilationsRate`<sup>Required</sup> <a name="ScriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRate"></a>

```csharp
public string ScriptMaxCompilationsRate { get; }
```

- *Type:* string

---

##### `SearchMaxBuckets`<sup>Required</sup> <a name="SearchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBuckets"></a>

```csharp
public double SearchMaxBuckets { get; }
```

- *Type:* double

---

##### `ThreadPoolAnalyzeQueueSize`<sup>Required</sup> <a name="ThreadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSize"></a>

```csharp
public double ThreadPoolAnalyzeQueueSize { get; }
```

- *Type:* double

---

##### `ThreadPoolAnalyzeSize`<sup>Required</sup> <a name="ThreadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSize"></a>

```csharp
public double ThreadPoolAnalyzeSize { get; }
```

- *Type:* double

---

##### `ThreadPoolForceMergeSize`<sup>Required</sup> <a name="ThreadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSize"></a>

```csharp
public double ThreadPoolForceMergeSize { get; }
```

- *Type:* double

---

##### `ThreadPoolGetQueueSize`<sup>Required</sup> <a name="ThreadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSize"></a>

```csharp
public double ThreadPoolGetQueueSize { get; }
```

- *Type:* double

---

##### `ThreadPoolGetSize`<sup>Required</sup> <a name="ThreadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSize"></a>

```csharp
public double ThreadPoolGetSize { get; }
```

- *Type:* double

---

##### `ThreadPoolSearchQueueSize`<sup>Required</sup> <a name="ThreadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSize"></a>

```csharp
public double ThreadPoolSearchQueueSize { get; }
```

- *Type:* double

---

##### `ThreadPoolSearchSize`<sup>Required</sup> <a name="ThreadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSize"></a>

```csharp
public double ThreadPoolSearchSize { get; }
```

- *Type:* double

---

##### `ThreadPoolSearchThrottledQueueSize`<sup>Required</sup> <a name="ThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSize"></a>

```csharp
public double ThreadPoolSearchThrottledQueueSize { get; }
```

- *Type:* double

---

##### `ThreadPoolSearchThrottledSize`<sup>Required</sup> <a name="ThreadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSize"></a>

```csharp
public double ThreadPoolSearchThrottledSize { get; }
```

- *Type:* double

---

##### `ThreadPoolWriteQueueSize`<sup>Required</sup> <a name="ThreadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSize"></a>

```csharp
public double ThreadPoolWriteQueueSize { get; }
```

- *Type:* double

---

##### `ThreadPoolWriteSize`<sup>Required</sup> <a name="ThreadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSize"></a>

```csharp
public double ThreadPoolWriteSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOpensearchConfigConfig <a name="DatabaseOpensearchConfigConfig" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseOpensearchConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    object ActionAutoCreateIndexEnabled = null,
    object ActionDestructiveRequiresName = null,
    double ClusterMaxShardsPerNode = null,
    double ClusterRoutingAllocationNodeConcurrentRecoveries = null,
    object EnableSecurityAudit = null,
    double HttpMaxContentLengthBytes = null,
    double HttpMaxHeaderSizeBytes = null,
    double HttpMaxInitialLineLengthBytes = null,
    string Id = null,
    double IndicesFielddataCacheSizePercentage = null,
    double IndicesMemoryIndexBufferSizePercentage = null,
    double IndicesMemoryMaxIndexBufferSizeMb = null,
    double IndicesMemoryMinIndexBufferSizeMb = null,
    double IndicesQueriesCacheSizePercentage = null,
    double IndicesQueryBoolMaxClauseCount = null,
    double IndicesRecoveryMaxConcurrentFileChunks = null,
    double IndicesRecoveryMaxMbPerSec = null,
    object IsmEnabled = null,
    object IsmHistoryEnabled = null,
    double IsmHistoryMaxAgeHours = null,
    double IsmHistoryMaxDocs = null,
    double IsmHistoryRolloverCheckPeriodHours = null,
    double IsmHistoryRolloverRetentionPeriodDays = null,
    object OverrideMainResponseVersion = null,
    object PluginsAlertingFilterByBackendRolesEnabled = null,
    string[] ReindexRemoteWhitelist = null,
    string ScriptMaxCompilationsRate = null,
    double SearchMaxBuckets = null,
    double ThreadPoolAnalyzeQueueSize = null,
    double ThreadPoolAnalyzeSize = null,
    double ThreadPoolForceMergeSize = null,
    double ThreadPoolGetQueueSize = null,
    double ThreadPoolGetSize = null,
    double ThreadPoolSearchQueueSize = null,
    double ThreadPoolSearchSize = null,
    double ThreadPoolSearchThrottledQueueSize = null,
    double ThreadPoolSearchThrottledSize = null,
    double ThreadPoolWriteQueueSize = null,
    double ThreadPoolWriteSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionAutoCreateIndexEnabled">ActionAutoCreateIndexEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionDestructiveRequiresName">ActionDestructiveRequiresName</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterMaxShardsPerNode">ClusterMaxShardsPerNode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries">ClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.enableSecurityAudit">EnableSecurityAudit</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxContentLengthBytes">HttpMaxContentLengthBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxHeaderSizeBytes">HttpMaxHeaderSizeBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxInitialLineLengthBytes">HttpMaxInitialLineLengthBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesFielddataCacheSizePercentage">IndicesFielddataCacheSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryIndexBufferSizePercentage">IndicesMemoryIndexBufferSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMaxIndexBufferSizeMb">IndicesMemoryMaxIndexBufferSizeMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMinIndexBufferSizeMb">IndicesMemoryMinIndexBufferSizeMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueriesCacheSizePercentage">IndicesQueriesCacheSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueryBoolMaxClauseCount">IndicesQueryBoolMaxClauseCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxConcurrentFileChunks">IndicesRecoveryMaxConcurrentFileChunks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxMbPerSec">IndicesRecoveryMaxMbPerSec</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismEnabled">IsmEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryEnabled">IsmHistoryEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxAgeHours">IsmHistoryMaxAgeHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxDocs">IsmHistoryMaxDocs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverCheckPeriodHours">IsmHistoryRolloverCheckPeriodHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverRetentionPeriodDays">IsmHistoryRolloverRetentionPeriodDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.overrideMainResponseVersion">OverrideMainResponseVersion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.pluginsAlertingFilterByBackendRolesEnabled">PluginsAlertingFilterByBackendRolesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.reindexRemoteWhitelist">ReindexRemoteWhitelist</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.scriptMaxCompilationsRate">ScriptMaxCompilationsRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.searchMaxBuckets">SearchMaxBuckets</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeQueueSize">ThreadPoolAnalyzeQueueSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeSize">ThreadPoolAnalyzeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolForceMergeSize">ThreadPoolForceMergeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetQueueSize">ThreadPoolGetQueueSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetSize">ThreadPoolGetSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchQueueSize">ThreadPoolSearchQueueSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchSize">ThreadPoolSearchSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledQueueSize">ThreadPoolSearchThrottledQueueSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledSize">ThreadPoolSearchThrottledSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteQueueSize">ThreadPoolWriteQueueSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteSize">ThreadPoolWriteSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}.

---

##### `ActionAutoCreateIndexEnabled`<sup>Optional</sup> <a name="ActionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionAutoCreateIndexEnabled"></a>

```csharp
public object ActionAutoCreateIndexEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}.

---

##### `ActionDestructiveRequiresName`<sup>Optional</sup> <a name="ActionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionDestructiveRequiresName"></a>

```csharp
public object ActionDestructiveRequiresName { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}.

---

##### `ClusterMaxShardsPerNode`<sup>Optional</sup> <a name="ClusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterMaxShardsPerNode"></a>

```csharp
public double ClusterMaxShardsPerNode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}.

---

##### `ClusterRoutingAllocationNodeConcurrentRecoveries`<sup>Optional</sup> <a name="ClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```csharp
public double ClusterRoutingAllocationNodeConcurrentRecoveries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}.

---

##### `EnableSecurityAudit`<sup>Optional</sup> <a name="EnableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.enableSecurityAudit"></a>

```csharp
public object EnableSecurityAudit { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}.

---

##### `HttpMaxContentLengthBytes`<sup>Optional</sup> <a name="HttpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxContentLengthBytes"></a>

```csharp
public double HttpMaxContentLengthBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}.

---

##### `HttpMaxHeaderSizeBytes`<sup>Optional</sup> <a name="HttpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxHeaderSizeBytes"></a>

```csharp
public double HttpMaxHeaderSizeBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}.

---

##### `HttpMaxInitialLineLengthBytes`<sup>Optional</sup> <a name="HttpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxInitialLineLengthBytes"></a>

```csharp
public double HttpMaxInitialLineLengthBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndicesFielddataCacheSizePercentage`<sup>Optional</sup> <a name="IndicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesFielddataCacheSizePercentage"></a>

```csharp
public double IndicesFielddataCacheSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}.

---

##### `IndicesMemoryIndexBufferSizePercentage`<sup>Optional</sup> <a name="IndicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryIndexBufferSizePercentage"></a>

```csharp
public double IndicesMemoryIndexBufferSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}.

---

##### `IndicesMemoryMaxIndexBufferSizeMb`<sup>Optional</sup> <a name="IndicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMaxIndexBufferSizeMb"></a>

```csharp
public double IndicesMemoryMaxIndexBufferSizeMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}.

---

##### `IndicesMemoryMinIndexBufferSizeMb`<sup>Optional</sup> <a name="IndicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMinIndexBufferSizeMb"></a>

```csharp
public double IndicesMemoryMinIndexBufferSizeMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}.

---

##### `IndicesQueriesCacheSizePercentage`<sup>Optional</sup> <a name="IndicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueriesCacheSizePercentage"></a>

```csharp
public double IndicesQueriesCacheSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}.

---

##### `IndicesQueryBoolMaxClauseCount`<sup>Optional</sup> <a name="IndicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueryBoolMaxClauseCount"></a>

```csharp
public double IndicesQueryBoolMaxClauseCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}.

---

##### `IndicesRecoveryMaxConcurrentFileChunks`<sup>Optional</sup> <a name="IndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```csharp
public double IndicesRecoveryMaxConcurrentFileChunks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}.

---

##### `IndicesRecoveryMaxMbPerSec`<sup>Optional</sup> <a name="IndicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxMbPerSec"></a>

```csharp
public double IndicesRecoveryMaxMbPerSec { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}.

---

##### `IsmEnabled`<sup>Optional</sup> <a name="IsmEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismEnabled"></a>

```csharp
public object IsmEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}.

---

##### `IsmHistoryEnabled`<sup>Optional</sup> <a name="IsmHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryEnabled"></a>

```csharp
public object IsmHistoryEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}.

---

##### `IsmHistoryMaxAgeHours`<sup>Optional</sup> <a name="IsmHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxAgeHours"></a>

```csharp
public double IsmHistoryMaxAgeHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}.

---

##### `IsmHistoryMaxDocs`<sup>Optional</sup> <a name="IsmHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxDocs"></a>

```csharp
public double IsmHistoryMaxDocs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}.

---

##### `IsmHistoryRolloverCheckPeriodHours`<sup>Optional</sup> <a name="IsmHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverCheckPeriodHours"></a>

```csharp
public double IsmHistoryRolloverCheckPeriodHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}.

---

##### `IsmHistoryRolloverRetentionPeriodDays`<sup>Optional</sup> <a name="IsmHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverRetentionPeriodDays"></a>

```csharp
public double IsmHistoryRolloverRetentionPeriodDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}.

---

##### `OverrideMainResponseVersion`<sup>Optional</sup> <a name="OverrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.overrideMainResponseVersion"></a>

```csharp
public object OverrideMainResponseVersion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}.

---

##### `PluginsAlertingFilterByBackendRolesEnabled`<sup>Optional</sup> <a name="PluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.pluginsAlertingFilterByBackendRolesEnabled"></a>

```csharp
public object PluginsAlertingFilterByBackendRolesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}.

---

##### `ReindexRemoteWhitelist`<sup>Optional</sup> <a name="ReindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.reindexRemoteWhitelist"></a>

```csharp
public string[] ReindexRemoteWhitelist { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}.

---

##### `ScriptMaxCompilationsRate`<sup>Optional</sup> <a name="ScriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.scriptMaxCompilationsRate"></a>

```csharp
public string ScriptMaxCompilationsRate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}.

---

##### `SearchMaxBuckets`<sup>Optional</sup> <a name="SearchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.searchMaxBuckets"></a>

```csharp
public double SearchMaxBuckets { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}.

---

##### `ThreadPoolAnalyzeQueueSize`<sup>Optional</sup> <a name="ThreadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeQueueSize"></a>

```csharp
public double ThreadPoolAnalyzeQueueSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}.

---

##### `ThreadPoolAnalyzeSize`<sup>Optional</sup> <a name="ThreadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeSize"></a>

```csharp
public double ThreadPoolAnalyzeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}.

---

##### `ThreadPoolForceMergeSize`<sup>Optional</sup> <a name="ThreadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolForceMergeSize"></a>

```csharp
public double ThreadPoolForceMergeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}.

---

##### `ThreadPoolGetQueueSize`<sup>Optional</sup> <a name="ThreadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetQueueSize"></a>

```csharp
public double ThreadPoolGetQueueSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}.

---

##### `ThreadPoolGetSize`<sup>Optional</sup> <a name="ThreadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetSize"></a>

```csharp
public double ThreadPoolGetSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}.

---

##### `ThreadPoolSearchQueueSize`<sup>Optional</sup> <a name="ThreadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchQueueSize"></a>

```csharp
public double ThreadPoolSearchQueueSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}.

---

##### `ThreadPoolSearchSize`<sup>Optional</sup> <a name="ThreadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchSize"></a>

```csharp
public double ThreadPoolSearchSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}.

---

##### `ThreadPoolSearchThrottledQueueSize`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledQueueSize"></a>

```csharp
public double ThreadPoolSearchThrottledQueueSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}.

---

##### `ThreadPoolSearchThrottledSize`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledSize"></a>

```csharp
public double ThreadPoolSearchThrottledSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}.

---

##### `ThreadPoolWriteQueueSize`<sup>Optional</sup> <a name="ThreadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteQueueSize"></a>

```csharp
public double ThreadPoolWriteQueueSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}.

---

##### `ThreadPoolWriteSize`<sup>Optional</sup> <a name="ThreadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteSize"></a>

```csharp
public double ThreadPoolWriteSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}.

---



