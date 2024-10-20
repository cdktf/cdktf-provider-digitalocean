# `databaseOpensearchConfig` Submodule <a name="`databaseOpensearchConfig` Submodule" id="@cdktf/provider-digitalocean.databaseOpensearchConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOpensearchConfig <a name="DatabaseOpensearchConfig" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config digitalocean_database_opensearch_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseopensearchconfig"

databaseopensearchconfig.NewDatabaseOpensearchConfig(scope Construct, id *string, config DatabaseOpensearchConfigConfig) DatabaseOpensearchConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig">DatabaseOpensearchConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetActionAutoCreateIndexEnabled` <a name="ResetActionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionAutoCreateIndexEnabled"></a>

```go
func ResetActionAutoCreateIndexEnabled()
```

##### `ResetActionDestructiveRequiresName` <a name="ResetActionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetActionDestructiveRequiresName"></a>

```go
func ResetActionDestructiveRequiresName()
```

##### `ResetClusterMaxShardsPerNode` <a name="ResetClusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterMaxShardsPerNode"></a>

```go
func ResetClusterMaxShardsPerNode()
```

##### `ResetClusterRoutingAllocationNodeConcurrentRecoveries` <a name="ResetClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetClusterRoutingAllocationNodeConcurrentRecoveries"></a>

```go
func ResetClusterRoutingAllocationNodeConcurrentRecoveries()
```

##### `ResetEnableSecurityAudit` <a name="ResetEnableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetEnableSecurityAudit"></a>

```go
func ResetEnableSecurityAudit()
```

##### `ResetHttpMaxContentLengthBytes` <a name="ResetHttpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxContentLengthBytes"></a>

```go
func ResetHttpMaxContentLengthBytes()
```

##### `ResetHttpMaxHeaderSizeBytes` <a name="ResetHttpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxHeaderSizeBytes"></a>

```go
func ResetHttpMaxHeaderSizeBytes()
```

##### `ResetHttpMaxInitialLineLengthBytes` <a name="ResetHttpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetHttpMaxInitialLineLengthBytes"></a>

```go
func ResetHttpMaxInitialLineLengthBytes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetIndicesFielddataCacheSizePercentage` <a name="ResetIndicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesFielddataCacheSizePercentage"></a>

```go
func ResetIndicesFielddataCacheSizePercentage()
```

##### `ResetIndicesMemoryIndexBufferSizePercentage` <a name="ResetIndicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryIndexBufferSizePercentage"></a>

```go
func ResetIndicesMemoryIndexBufferSizePercentage()
```

##### `ResetIndicesMemoryMaxIndexBufferSizeMb` <a name="ResetIndicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMaxIndexBufferSizeMb"></a>

```go
func ResetIndicesMemoryMaxIndexBufferSizeMb()
```

##### `ResetIndicesMemoryMinIndexBufferSizeMb` <a name="ResetIndicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesMemoryMinIndexBufferSizeMb"></a>

```go
func ResetIndicesMemoryMinIndexBufferSizeMb()
```

##### `ResetIndicesQueriesCacheSizePercentage` <a name="ResetIndicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueriesCacheSizePercentage"></a>

```go
func ResetIndicesQueriesCacheSizePercentage()
```

##### `ResetIndicesQueryBoolMaxClauseCount` <a name="ResetIndicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesQueryBoolMaxClauseCount"></a>

```go
func ResetIndicesQueryBoolMaxClauseCount()
```

##### `ResetIndicesRecoveryMaxConcurrentFileChunks` <a name="ResetIndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxConcurrentFileChunks"></a>

```go
func ResetIndicesRecoveryMaxConcurrentFileChunks()
```

##### `ResetIndicesRecoveryMaxMbPerSec` <a name="ResetIndicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIndicesRecoveryMaxMbPerSec"></a>

```go
func ResetIndicesRecoveryMaxMbPerSec()
```

##### `ResetIsmEnabled` <a name="ResetIsmEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmEnabled"></a>

```go
func ResetIsmEnabled()
```

##### `ResetIsmHistoryEnabled` <a name="ResetIsmHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryEnabled"></a>

```go
func ResetIsmHistoryEnabled()
```

##### `ResetIsmHistoryMaxAgeHours` <a name="ResetIsmHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxAgeHours"></a>

```go
func ResetIsmHistoryMaxAgeHours()
```

##### `ResetIsmHistoryMaxDocs` <a name="ResetIsmHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryMaxDocs"></a>

```go
func ResetIsmHistoryMaxDocs()
```

##### `ResetIsmHistoryRolloverCheckPeriodHours` <a name="ResetIsmHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverCheckPeriodHours"></a>

```go
func ResetIsmHistoryRolloverCheckPeriodHours()
```

##### `ResetIsmHistoryRolloverRetentionPeriodDays` <a name="ResetIsmHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetIsmHistoryRolloverRetentionPeriodDays"></a>

```go
func ResetIsmHistoryRolloverRetentionPeriodDays()
```

##### `ResetOverrideMainResponseVersion` <a name="ResetOverrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetOverrideMainResponseVersion"></a>

```go
func ResetOverrideMainResponseVersion()
```

##### `ResetPluginsAlertingFilterByBackendRolesEnabled` <a name="ResetPluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetPluginsAlertingFilterByBackendRolesEnabled"></a>

```go
func ResetPluginsAlertingFilterByBackendRolesEnabled()
```

##### `ResetReindexRemoteWhitelist` <a name="ResetReindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetReindexRemoteWhitelist"></a>

```go
func ResetReindexRemoteWhitelist()
```

##### `ResetScriptMaxCompilationsRate` <a name="ResetScriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetScriptMaxCompilationsRate"></a>

```go
func ResetScriptMaxCompilationsRate()
```

##### `ResetSearchMaxBuckets` <a name="ResetSearchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetSearchMaxBuckets"></a>

```go
func ResetSearchMaxBuckets()
```

##### `ResetThreadPoolAnalyzeQueueSize` <a name="ResetThreadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeQueueSize"></a>

```go
func ResetThreadPoolAnalyzeQueueSize()
```

##### `ResetThreadPoolAnalyzeSize` <a name="ResetThreadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolAnalyzeSize"></a>

```go
func ResetThreadPoolAnalyzeSize()
```

##### `ResetThreadPoolForceMergeSize` <a name="ResetThreadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolForceMergeSize"></a>

```go
func ResetThreadPoolForceMergeSize()
```

##### `ResetThreadPoolGetQueueSize` <a name="ResetThreadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetQueueSize"></a>

```go
func ResetThreadPoolGetQueueSize()
```

##### `ResetThreadPoolGetSize` <a name="ResetThreadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolGetSize"></a>

```go
func ResetThreadPoolGetSize()
```

##### `ResetThreadPoolSearchQueueSize` <a name="ResetThreadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchQueueSize"></a>

```go
func ResetThreadPoolSearchQueueSize()
```

##### `ResetThreadPoolSearchSize` <a name="ResetThreadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchSize"></a>

```go
func ResetThreadPoolSearchSize()
```

##### `ResetThreadPoolSearchThrottledQueueSize` <a name="ResetThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledQueueSize"></a>

```go
func ResetThreadPoolSearchThrottledQueueSize()
```

##### `ResetThreadPoolSearchThrottledSize` <a name="ResetThreadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolSearchThrottledSize"></a>

```go
func ResetThreadPoolSearchThrottledSize()
```

##### `ResetThreadPoolWriteQueueSize` <a name="ResetThreadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteQueueSize"></a>

```go
func ResetThreadPoolWriteQueueSize()
```

##### `ResetThreadPoolWriteSize` <a name="ResetThreadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.resetThreadPoolWriteSize"></a>

```go
func ResetThreadPoolWriteSize()
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

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseopensearchconfig"

databaseopensearchconfig.DatabaseOpensearchConfig_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseopensearchconfig"

databaseopensearchconfig.DatabaseOpensearchConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseopensearchconfig"

databaseopensearchconfig.DatabaseOpensearchConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseopensearchconfig"

databaseopensearchconfig.DatabaseOpensearchConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseOpensearchConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseOpensearchConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseOpensearchConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOpensearchConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabledInput">ActionAutoCreateIndexEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresNameInput">ActionDestructiveRequiresNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNodeInput">ClusterMaxShardsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput">ClusterRoutingAllocationNodeConcurrentRecoveriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAuditInput">EnableSecurityAuditInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytesInput">HttpMaxContentLengthBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytesInput">HttpMaxHeaderSizeBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytesInput">HttpMaxInitialLineLengthBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentageInput">IndicesFielddataCacheSizePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentageInput">IndicesMemoryIndexBufferSizePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMbInput">IndicesMemoryMaxIndexBufferSizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMbInput">IndicesMemoryMinIndexBufferSizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentageInput">IndicesQueriesCacheSizePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCountInput">IndicesQueryBoolMaxClauseCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunksInput">IndicesRecoveryMaxConcurrentFileChunksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSecInput">IndicesRecoveryMaxMbPerSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabledInput">IsmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabledInput">IsmHistoryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHoursInput">IsmHistoryMaxAgeHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocsInput">IsmHistoryMaxDocsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHoursInput">IsmHistoryRolloverCheckPeriodHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDaysInput">IsmHistoryRolloverRetentionPeriodDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersionInput">OverrideMainResponseVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabledInput">PluginsAlertingFilterByBackendRolesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelistInput">ReindexRemoteWhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRateInput">ScriptMaxCompilationsRateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBucketsInput">SearchMaxBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSizeInput">ThreadPoolAnalyzeQueueSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSizeInput">ThreadPoolAnalyzeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSizeInput">ThreadPoolForceMergeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSizeInput">ThreadPoolGetQueueSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSizeInput">ThreadPoolGetSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSizeInput">ThreadPoolSearchQueueSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSizeInput">ThreadPoolSearchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSizeInput">ThreadPoolSearchThrottledQueueSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSizeInput">ThreadPoolSearchThrottledSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSizeInput">ThreadPoolWriteQueueSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSizeInput">ThreadPoolWriteSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabled">ActionAutoCreateIndexEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresName">ActionDestructiveRequiresName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNode">ClusterMaxShardsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries">ClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAudit">EnableSecurityAudit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytes">HttpMaxContentLengthBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytes">HttpMaxHeaderSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytes">HttpMaxInitialLineLengthBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentage">IndicesFielddataCacheSizePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentage">IndicesMemoryIndexBufferSizePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMb">IndicesMemoryMaxIndexBufferSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMb">IndicesMemoryMinIndexBufferSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentage">IndicesQueriesCacheSizePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCount">IndicesQueryBoolMaxClauseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunks">IndicesRecoveryMaxConcurrentFileChunks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSec">IndicesRecoveryMaxMbPerSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabled">IsmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabled">IsmHistoryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHours">IsmHistoryMaxAgeHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocs">IsmHistoryMaxDocs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHours">IsmHistoryRolloverCheckPeriodHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDays">IsmHistoryRolloverRetentionPeriodDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersion">OverrideMainResponseVersion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabled">PluginsAlertingFilterByBackendRolesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelist">ReindexRemoteWhitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRate">ScriptMaxCompilationsRate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBuckets">SearchMaxBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSize">ThreadPoolAnalyzeQueueSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSize">ThreadPoolAnalyzeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSize">ThreadPoolForceMergeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSize">ThreadPoolGetQueueSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSize">ThreadPoolGetSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSize">ThreadPoolSearchQueueSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSize">ThreadPoolSearchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSize">ThreadPoolSearchThrottledQueueSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSize">ThreadPoolSearchThrottledSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSize">ThreadPoolWriteQueueSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSize">ThreadPoolWriteSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionAutoCreateIndexEnabledInput`<sup>Optional</sup> <a name="ActionAutoCreateIndexEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabledInput"></a>

```go
func ActionAutoCreateIndexEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ActionDestructiveRequiresNameInput`<sup>Optional</sup> <a name="ActionDestructiveRequiresNameInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresNameInput"></a>

```go
func ActionDestructiveRequiresNameInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ClusterMaxShardsPerNodeInput`<sup>Optional</sup> <a name="ClusterMaxShardsPerNodeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNodeInput"></a>

```go
func ClusterMaxShardsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `ClusterRoutingAllocationNodeConcurrentRecoveriesInput`<sup>Optional</sup> <a name="ClusterRoutingAllocationNodeConcurrentRecoveriesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput"></a>

```go
func ClusterRoutingAllocationNodeConcurrentRecoveriesInput() *f64
```

- *Type:* *f64

---

##### `EnableSecurityAuditInput`<sup>Optional</sup> <a name="EnableSecurityAuditInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAuditInput"></a>

```go
func EnableSecurityAuditInput() interface{}
```

- *Type:* interface{}

---

##### `HttpMaxContentLengthBytesInput`<sup>Optional</sup> <a name="HttpMaxContentLengthBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytesInput"></a>

```go
func HttpMaxContentLengthBytesInput() *f64
```

- *Type:* *f64

---

##### `HttpMaxHeaderSizeBytesInput`<sup>Optional</sup> <a name="HttpMaxHeaderSizeBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytesInput"></a>

```go
func HttpMaxHeaderSizeBytesInput() *f64
```

- *Type:* *f64

---

##### `HttpMaxInitialLineLengthBytesInput`<sup>Optional</sup> <a name="HttpMaxInitialLineLengthBytesInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytesInput"></a>

```go
func HttpMaxInitialLineLengthBytesInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndicesFielddataCacheSizePercentageInput`<sup>Optional</sup> <a name="IndicesFielddataCacheSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentageInput"></a>

```go
func IndicesFielddataCacheSizePercentageInput() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryIndexBufferSizePercentageInput`<sup>Optional</sup> <a name="IndicesMemoryIndexBufferSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentageInput"></a>

```go
func IndicesMemoryIndexBufferSizePercentageInput() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryMaxIndexBufferSizeMbInput`<sup>Optional</sup> <a name="IndicesMemoryMaxIndexBufferSizeMbInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMbInput"></a>

```go
func IndicesMemoryMaxIndexBufferSizeMbInput() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryMinIndexBufferSizeMbInput`<sup>Optional</sup> <a name="IndicesMemoryMinIndexBufferSizeMbInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMbInput"></a>

```go
func IndicesMemoryMinIndexBufferSizeMbInput() *f64
```

- *Type:* *f64

---

##### `IndicesQueriesCacheSizePercentageInput`<sup>Optional</sup> <a name="IndicesQueriesCacheSizePercentageInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentageInput"></a>

```go
func IndicesQueriesCacheSizePercentageInput() *f64
```

- *Type:* *f64

---

##### `IndicesQueryBoolMaxClauseCountInput`<sup>Optional</sup> <a name="IndicesQueryBoolMaxClauseCountInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCountInput"></a>

```go
func IndicesQueryBoolMaxClauseCountInput() *f64
```

- *Type:* *f64

---

##### `IndicesRecoveryMaxConcurrentFileChunksInput`<sup>Optional</sup> <a name="IndicesRecoveryMaxConcurrentFileChunksInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunksInput"></a>

```go
func IndicesRecoveryMaxConcurrentFileChunksInput() *f64
```

- *Type:* *f64

---

##### `IndicesRecoveryMaxMbPerSecInput`<sup>Optional</sup> <a name="IndicesRecoveryMaxMbPerSecInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSecInput"></a>

```go
func IndicesRecoveryMaxMbPerSecInput() *f64
```

- *Type:* *f64

---

##### `IsmEnabledInput`<sup>Optional</sup> <a name="IsmEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabledInput"></a>

```go
func IsmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsmHistoryEnabledInput`<sup>Optional</sup> <a name="IsmHistoryEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabledInput"></a>

```go
func IsmHistoryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsmHistoryMaxAgeHoursInput`<sup>Optional</sup> <a name="IsmHistoryMaxAgeHoursInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHoursInput"></a>

```go
func IsmHistoryMaxAgeHoursInput() *f64
```

- *Type:* *f64

---

##### `IsmHistoryMaxDocsInput`<sup>Optional</sup> <a name="IsmHistoryMaxDocsInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocsInput"></a>

```go
func IsmHistoryMaxDocsInput() *f64
```

- *Type:* *f64

---

##### `IsmHistoryRolloverCheckPeriodHoursInput`<sup>Optional</sup> <a name="IsmHistoryRolloverCheckPeriodHoursInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHoursInput"></a>

```go
func IsmHistoryRolloverCheckPeriodHoursInput() *f64
```

- *Type:* *f64

---

##### `IsmHistoryRolloverRetentionPeriodDaysInput`<sup>Optional</sup> <a name="IsmHistoryRolloverRetentionPeriodDaysInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDaysInput"></a>

```go
func IsmHistoryRolloverRetentionPeriodDaysInput() *f64
```

- *Type:* *f64

---

##### `OverrideMainResponseVersionInput`<sup>Optional</sup> <a name="OverrideMainResponseVersionInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersionInput"></a>

```go
func OverrideMainResponseVersionInput() interface{}
```

- *Type:* interface{}

---

##### `PluginsAlertingFilterByBackendRolesEnabledInput`<sup>Optional</sup> <a name="PluginsAlertingFilterByBackendRolesEnabledInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabledInput"></a>

```go
func PluginsAlertingFilterByBackendRolesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReindexRemoteWhitelistInput`<sup>Optional</sup> <a name="ReindexRemoteWhitelistInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelistInput"></a>

```go
func ReindexRemoteWhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScriptMaxCompilationsRateInput`<sup>Optional</sup> <a name="ScriptMaxCompilationsRateInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRateInput"></a>

```go
func ScriptMaxCompilationsRateInput() *string
```

- *Type:* *string

---

##### `SearchMaxBucketsInput`<sup>Optional</sup> <a name="SearchMaxBucketsInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBucketsInput"></a>

```go
func SearchMaxBucketsInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolAnalyzeQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolAnalyzeQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSizeInput"></a>

```go
func ThreadPoolAnalyzeQueueSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolAnalyzeSizeInput`<sup>Optional</sup> <a name="ThreadPoolAnalyzeSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSizeInput"></a>

```go
func ThreadPoolAnalyzeSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolForceMergeSizeInput`<sup>Optional</sup> <a name="ThreadPoolForceMergeSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSizeInput"></a>

```go
func ThreadPoolForceMergeSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolGetQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolGetQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSizeInput"></a>

```go
func ThreadPoolGetQueueSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolGetSizeInput`<sup>Optional</sup> <a name="ThreadPoolGetSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSizeInput"></a>

```go
func ThreadPoolGetSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSizeInput"></a>

```go
func ThreadPoolSearchQueueSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSizeInput"></a>

```go
func ThreadPoolSearchSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchThrottledQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSizeInput"></a>

```go
func ThreadPoolSearchThrottledQueueSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchThrottledSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSizeInput"></a>

```go
func ThreadPoolSearchThrottledSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolWriteQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolWriteQueueSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSizeInput"></a>

```go
func ThreadPoolWriteQueueSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolWriteSizeInput`<sup>Optional</sup> <a name="ThreadPoolWriteSizeInput" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSizeInput"></a>

```go
func ThreadPoolWriteSizeInput() *f64
```

- *Type:* *f64

---

##### `ActionAutoCreateIndexEnabled`<sup>Required</sup> <a name="ActionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionAutoCreateIndexEnabled"></a>

```go
func ActionAutoCreateIndexEnabled() interface{}
```

- *Type:* interface{}

---

##### `ActionDestructiveRequiresName`<sup>Required</sup> <a name="ActionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.actionDestructiveRequiresName"></a>

```go
func ActionDestructiveRequiresName() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterMaxShardsPerNode`<sup>Required</sup> <a name="ClusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterMaxShardsPerNode"></a>

```go
func ClusterMaxShardsPerNode() *f64
```

- *Type:* *f64

---

##### `ClusterRoutingAllocationNodeConcurrentRecoveries`<sup>Required</sup> <a name="ClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```go
func ClusterRoutingAllocationNodeConcurrentRecoveries() *f64
```

- *Type:* *f64

---

##### `EnableSecurityAudit`<sup>Required</sup> <a name="EnableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.enableSecurityAudit"></a>

```go
func EnableSecurityAudit() interface{}
```

- *Type:* interface{}

---

##### `HttpMaxContentLengthBytes`<sup>Required</sup> <a name="HttpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxContentLengthBytes"></a>

```go
func HttpMaxContentLengthBytes() *f64
```

- *Type:* *f64

---

##### `HttpMaxHeaderSizeBytes`<sup>Required</sup> <a name="HttpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxHeaderSizeBytes"></a>

```go
func HttpMaxHeaderSizeBytes() *f64
```

- *Type:* *f64

---

##### `HttpMaxInitialLineLengthBytes`<sup>Required</sup> <a name="HttpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.httpMaxInitialLineLengthBytes"></a>

```go
func HttpMaxInitialLineLengthBytes() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndicesFielddataCacheSizePercentage`<sup>Required</sup> <a name="IndicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesFielddataCacheSizePercentage"></a>

```go
func IndicesFielddataCacheSizePercentage() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryIndexBufferSizePercentage`<sup>Required</sup> <a name="IndicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryIndexBufferSizePercentage"></a>

```go
func IndicesMemoryIndexBufferSizePercentage() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryMaxIndexBufferSizeMb`<sup>Required</sup> <a name="IndicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMaxIndexBufferSizeMb"></a>

```go
func IndicesMemoryMaxIndexBufferSizeMb() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryMinIndexBufferSizeMb`<sup>Required</sup> <a name="IndicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesMemoryMinIndexBufferSizeMb"></a>

```go
func IndicesMemoryMinIndexBufferSizeMb() *f64
```

- *Type:* *f64

---

##### `IndicesQueriesCacheSizePercentage`<sup>Required</sup> <a name="IndicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueriesCacheSizePercentage"></a>

```go
func IndicesQueriesCacheSizePercentage() *f64
```

- *Type:* *f64

---

##### `IndicesQueryBoolMaxClauseCount`<sup>Required</sup> <a name="IndicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesQueryBoolMaxClauseCount"></a>

```go
func IndicesQueryBoolMaxClauseCount() *f64
```

- *Type:* *f64

---

##### `IndicesRecoveryMaxConcurrentFileChunks`<sup>Required</sup> <a name="IndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```go
func IndicesRecoveryMaxConcurrentFileChunks() *f64
```

- *Type:* *f64

---

##### `IndicesRecoveryMaxMbPerSec`<sup>Required</sup> <a name="IndicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.indicesRecoveryMaxMbPerSec"></a>

```go
func IndicesRecoveryMaxMbPerSec() *f64
```

- *Type:* *f64

---

##### `IsmEnabled`<sup>Required</sup> <a name="IsmEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismEnabled"></a>

```go
func IsmEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsmHistoryEnabled`<sup>Required</sup> <a name="IsmHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryEnabled"></a>

```go
func IsmHistoryEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsmHistoryMaxAgeHours`<sup>Required</sup> <a name="IsmHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxAgeHours"></a>

```go
func IsmHistoryMaxAgeHours() *f64
```

- *Type:* *f64

---

##### `IsmHistoryMaxDocs`<sup>Required</sup> <a name="IsmHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryMaxDocs"></a>

```go
func IsmHistoryMaxDocs() *f64
```

- *Type:* *f64

---

##### `IsmHistoryRolloverCheckPeriodHours`<sup>Required</sup> <a name="IsmHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverCheckPeriodHours"></a>

```go
func IsmHistoryRolloverCheckPeriodHours() *f64
```

- *Type:* *f64

---

##### `IsmHistoryRolloverRetentionPeriodDays`<sup>Required</sup> <a name="IsmHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.ismHistoryRolloverRetentionPeriodDays"></a>

```go
func IsmHistoryRolloverRetentionPeriodDays() *f64
```

- *Type:* *f64

---

##### `OverrideMainResponseVersion`<sup>Required</sup> <a name="OverrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.overrideMainResponseVersion"></a>

```go
func OverrideMainResponseVersion() interface{}
```

- *Type:* interface{}

---

##### `PluginsAlertingFilterByBackendRolesEnabled`<sup>Required</sup> <a name="PluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.pluginsAlertingFilterByBackendRolesEnabled"></a>

```go
func PluginsAlertingFilterByBackendRolesEnabled() interface{}
```

- *Type:* interface{}

---

##### `ReindexRemoteWhitelist`<sup>Required</sup> <a name="ReindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.reindexRemoteWhitelist"></a>

```go
func ReindexRemoteWhitelist() *[]*string
```

- *Type:* *[]*string

---

##### `ScriptMaxCompilationsRate`<sup>Required</sup> <a name="ScriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.scriptMaxCompilationsRate"></a>

```go
func ScriptMaxCompilationsRate() *string
```

- *Type:* *string

---

##### `SearchMaxBuckets`<sup>Required</sup> <a name="SearchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.searchMaxBuckets"></a>

```go
func SearchMaxBuckets() *f64
```

- *Type:* *f64

---

##### `ThreadPoolAnalyzeQueueSize`<sup>Required</sup> <a name="ThreadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeQueueSize"></a>

```go
func ThreadPoolAnalyzeQueueSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolAnalyzeSize`<sup>Required</sup> <a name="ThreadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolAnalyzeSize"></a>

```go
func ThreadPoolAnalyzeSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolForceMergeSize`<sup>Required</sup> <a name="ThreadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolForceMergeSize"></a>

```go
func ThreadPoolForceMergeSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolGetQueueSize`<sup>Required</sup> <a name="ThreadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetQueueSize"></a>

```go
func ThreadPoolGetQueueSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolGetSize`<sup>Required</sup> <a name="ThreadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolGetSize"></a>

```go
func ThreadPoolGetSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchQueueSize`<sup>Required</sup> <a name="ThreadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchQueueSize"></a>

```go
func ThreadPoolSearchQueueSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchSize`<sup>Required</sup> <a name="ThreadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchSize"></a>

```go
func ThreadPoolSearchSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchThrottledQueueSize`<sup>Required</sup> <a name="ThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledQueueSize"></a>

```go
func ThreadPoolSearchThrottledQueueSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchThrottledSize`<sup>Required</sup> <a name="ThreadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolSearchThrottledSize"></a>

```go
func ThreadPoolSearchThrottledSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolWriteQueueSize`<sup>Required</sup> <a name="ThreadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteQueueSize"></a>

```go
func ThreadPoolWriteQueueSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolWriteSize`<sup>Required</sup> <a name="ThreadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.threadPoolWriteSize"></a>

```go
func ThreadPoolWriteSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOpensearchConfigConfig <a name="DatabaseOpensearchConfigConfig" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/databaseopensearchconfig"

&databaseopensearchconfig.DatabaseOpensearchConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	ActionAutoCreateIndexEnabled: interface{},
	ActionDestructiveRequiresName: interface{},
	ClusterMaxShardsPerNode: *f64,
	ClusterRoutingAllocationNodeConcurrentRecoveries: *f64,
	EnableSecurityAudit: interface{},
	HttpMaxContentLengthBytes: *f64,
	HttpMaxHeaderSizeBytes: *f64,
	HttpMaxInitialLineLengthBytes: *f64,
	Id: *string,
	IndicesFielddataCacheSizePercentage: *f64,
	IndicesMemoryIndexBufferSizePercentage: *f64,
	IndicesMemoryMaxIndexBufferSizeMb: *f64,
	IndicesMemoryMinIndexBufferSizeMb: *f64,
	IndicesQueriesCacheSizePercentage: *f64,
	IndicesQueryBoolMaxClauseCount: *f64,
	IndicesRecoveryMaxConcurrentFileChunks: *f64,
	IndicesRecoveryMaxMbPerSec: *f64,
	IsmEnabled: interface{},
	IsmHistoryEnabled: interface{},
	IsmHistoryMaxAgeHours: *f64,
	IsmHistoryMaxDocs: *f64,
	IsmHistoryRolloverCheckPeriodHours: *f64,
	IsmHistoryRolloverRetentionPeriodDays: *f64,
	OverrideMainResponseVersion: interface{},
	PluginsAlertingFilterByBackendRolesEnabled: interface{},
	ReindexRemoteWhitelist: *[]*string,
	ScriptMaxCompilationsRate: *string,
	SearchMaxBuckets: *f64,
	ThreadPoolAnalyzeQueueSize: *f64,
	ThreadPoolAnalyzeSize: *f64,
	ThreadPoolForceMergeSize: *f64,
	ThreadPoolGetQueueSize: *f64,
	ThreadPoolGetSize: *f64,
	ThreadPoolSearchQueueSize: *f64,
	ThreadPoolSearchSize: *f64,
	ThreadPoolSearchThrottledQueueSize: *f64,
	ThreadPoolSearchThrottledSize: *f64,
	ThreadPoolWriteQueueSize: *f64,
	ThreadPoolWriteSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionAutoCreateIndexEnabled">ActionAutoCreateIndexEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionDestructiveRequiresName">ActionDestructiveRequiresName</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterMaxShardsPerNode">ClusterMaxShardsPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries">ClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.enableSecurityAudit">EnableSecurityAudit</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxContentLengthBytes">HttpMaxContentLengthBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxHeaderSizeBytes">HttpMaxHeaderSizeBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxInitialLineLengthBytes">HttpMaxInitialLineLengthBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesFielddataCacheSizePercentage">IndicesFielddataCacheSizePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryIndexBufferSizePercentage">IndicesMemoryIndexBufferSizePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMaxIndexBufferSizeMb">IndicesMemoryMaxIndexBufferSizeMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMinIndexBufferSizeMb">IndicesMemoryMinIndexBufferSizeMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueriesCacheSizePercentage">IndicesQueriesCacheSizePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueryBoolMaxClauseCount">IndicesQueryBoolMaxClauseCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxConcurrentFileChunks">IndicesRecoveryMaxConcurrentFileChunks</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxMbPerSec">IndicesRecoveryMaxMbPerSec</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismEnabled">IsmEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryEnabled">IsmHistoryEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxAgeHours">IsmHistoryMaxAgeHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxDocs">IsmHistoryMaxDocs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverCheckPeriodHours">IsmHistoryRolloverCheckPeriodHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverRetentionPeriodDays">IsmHistoryRolloverRetentionPeriodDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.overrideMainResponseVersion">OverrideMainResponseVersion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.pluginsAlertingFilterByBackendRolesEnabled">PluginsAlertingFilterByBackendRolesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.reindexRemoteWhitelist">ReindexRemoteWhitelist</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.scriptMaxCompilationsRate">ScriptMaxCompilationsRate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.searchMaxBuckets">SearchMaxBuckets</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeQueueSize">ThreadPoolAnalyzeQueueSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeSize">ThreadPoolAnalyzeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolForceMergeSize">ThreadPoolForceMergeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetQueueSize">ThreadPoolGetQueueSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetSize">ThreadPoolGetSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchQueueSize">ThreadPoolSearchQueueSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchSize">ThreadPoolSearchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledQueueSize">ThreadPoolSearchThrottledQueueSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledSize">ThreadPoolSearchThrottledSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteQueueSize">ThreadPoolWriteQueueSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteSize">ThreadPoolWriteSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#cluster_id DatabaseOpensearchConfig#cluster_id}.

---

##### `ActionAutoCreateIndexEnabled`<sup>Optional</sup> <a name="ActionAutoCreateIndexEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionAutoCreateIndexEnabled"></a>

```go
ActionAutoCreateIndexEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#action_auto_create_index_enabled DatabaseOpensearchConfig#action_auto_create_index_enabled}.

---

##### `ActionDestructiveRequiresName`<sup>Optional</sup> <a name="ActionDestructiveRequiresName" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.actionDestructiveRequiresName"></a>

```go
ActionDestructiveRequiresName interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#action_destructive_requires_name DatabaseOpensearchConfig#action_destructive_requires_name}.

---

##### `ClusterMaxShardsPerNode`<sup>Optional</sup> <a name="ClusterMaxShardsPerNode" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterMaxShardsPerNode"></a>

```go
ClusterMaxShardsPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#cluster_max_shards_per_node DatabaseOpensearchConfig#cluster_max_shards_per_node}.

---

##### `ClusterRoutingAllocationNodeConcurrentRecoveries`<sup>Optional</sup> <a name="ClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```go
ClusterRoutingAllocationNodeConcurrentRecoveries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#cluster_routing_allocation_node_concurrent_recoveries DatabaseOpensearchConfig#cluster_routing_allocation_node_concurrent_recoveries}.

---

##### `EnableSecurityAudit`<sup>Optional</sup> <a name="EnableSecurityAudit" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.enableSecurityAudit"></a>

```go
EnableSecurityAudit interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#enable_security_audit DatabaseOpensearchConfig#enable_security_audit}.

---

##### `HttpMaxContentLengthBytes`<sup>Optional</sup> <a name="HttpMaxContentLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxContentLengthBytes"></a>

```go
HttpMaxContentLengthBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#http_max_content_length_bytes DatabaseOpensearchConfig#http_max_content_length_bytes}.

---

##### `HttpMaxHeaderSizeBytes`<sup>Optional</sup> <a name="HttpMaxHeaderSizeBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxHeaderSizeBytes"></a>

```go
HttpMaxHeaderSizeBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#http_max_header_size_bytes DatabaseOpensearchConfig#http_max_header_size_bytes}.

---

##### `HttpMaxInitialLineLengthBytes`<sup>Optional</sup> <a name="HttpMaxInitialLineLengthBytes" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.httpMaxInitialLineLengthBytes"></a>

```go
HttpMaxInitialLineLengthBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#http_max_initial_line_length_bytes DatabaseOpensearchConfig#http_max_initial_line_length_bytes}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#id DatabaseOpensearchConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndicesFielddataCacheSizePercentage`<sup>Optional</sup> <a name="IndicesFielddataCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesFielddataCacheSizePercentage"></a>

```go
IndicesFielddataCacheSizePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_fielddata_cache_size_percentage DatabaseOpensearchConfig#indices_fielddata_cache_size_percentage}.

---

##### `IndicesMemoryIndexBufferSizePercentage`<sup>Optional</sup> <a name="IndicesMemoryIndexBufferSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryIndexBufferSizePercentage"></a>

```go
IndicesMemoryIndexBufferSizePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_memory_index_buffer_size_percentage DatabaseOpensearchConfig#indices_memory_index_buffer_size_percentage}.

---

##### `IndicesMemoryMaxIndexBufferSizeMb`<sup>Optional</sup> <a name="IndicesMemoryMaxIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMaxIndexBufferSizeMb"></a>

```go
IndicesMemoryMaxIndexBufferSizeMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_memory_max_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_max_index_buffer_size_mb}.

---

##### `IndicesMemoryMinIndexBufferSizeMb`<sup>Optional</sup> <a name="IndicesMemoryMinIndexBufferSizeMb" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesMemoryMinIndexBufferSizeMb"></a>

```go
IndicesMemoryMinIndexBufferSizeMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_memory_min_index_buffer_size_mb DatabaseOpensearchConfig#indices_memory_min_index_buffer_size_mb}.

---

##### `IndicesQueriesCacheSizePercentage`<sup>Optional</sup> <a name="IndicesQueriesCacheSizePercentage" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueriesCacheSizePercentage"></a>

```go
IndicesQueriesCacheSizePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_queries_cache_size_percentage DatabaseOpensearchConfig#indices_queries_cache_size_percentage}.

---

##### `IndicesQueryBoolMaxClauseCount`<sup>Optional</sup> <a name="IndicesQueryBoolMaxClauseCount" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesQueryBoolMaxClauseCount"></a>

```go
IndicesQueryBoolMaxClauseCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_query_bool_max_clause_count DatabaseOpensearchConfig#indices_query_bool_max_clause_count}.

---

##### `IndicesRecoveryMaxConcurrentFileChunks`<sup>Optional</sup> <a name="IndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```go
IndicesRecoveryMaxConcurrentFileChunks *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_recovery_max_concurrent_file_chunks DatabaseOpensearchConfig#indices_recovery_max_concurrent_file_chunks}.

---

##### `IndicesRecoveryMaxMbPerSec`<sup>Optional</sup> <a name="IndicesRecoveryMaxMbPerSec" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.indicesRecoveryMaxMbPerSec"></a>

```go
IndicesRecoveryMaxMbPerSec *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#indices_recovery_max_mb_per_sec DatabaseOpensearchConfig#indices_recovery_max_mb_per_sec}.

---

##### `IsmEnabled`<sup>Optional</sup> <a name="IsmEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismEnabled"></a>

```go
IsmEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_enabled DatabaseOpensearchConfig#ism_enabled}.

---

##### `IsmHistoryEnabled`<sup>Optional</sup> <a name="IsmHistoryEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryEnabled"></a>

```go
IsmHistoryEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_history_enabled DatabaseOpensearchConfig#ism_history_enabled}.

---

##### `IsmHistoryMaxAgeHours`<sup>Optional</sup> <a name="IsmHistoryMaxAgeHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxAgeHours"></a>

```go
IsmHistoryMaxAgeHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_history_max_age_hours DatabaseOpensearchConfig#ism_history_max_age_hours}.

---

##### `IsmHistoryMaxDocs`<sup>Optional</sup> <a name="IsmHistoryMaxDocs" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryMaxDocs"></a>

```go
IsmHistoryMaxDocs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_history_max_docs DatabaseOpensearchConfig#ism_history_max_docs}.

---

##### `IsmHistoryRolloverCheckPeriodHours`<sup>Optional</sup> <a name="IsmHistoryRolloverCheckPeriodHours" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverCheckPeriodHours"></a>

```go
IsmHistoryRolloverCheckPeriodHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_history_rollover_check_period_hours DatabaseOpensearchConfig#ism_history_rollover_check_period_hours}.

---

##### `IsmHistoryRolloverRetentionPeriodDays`<sup>Optional</sup> <a name="IsmHistoryRolloverRetentionPeriodDays" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.ismHistoryRolloverRetentionPeriodDays"></a>

```go
IsmHistoryRolloverRetentionPeriodDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#ism_history_rollover_retention_period_days DatabaseOpensearchConfig#ism_history_rollover_retention_period_days}.

---

##### `OverrideMainResponseVersion`<sup>Optional</sup> <a name="OverrideMainResponseVersion" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.overrideMainResponseVersion"></a>

```go
OverrideMainResponseVersion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#override_main_response_version DatabaseOpensearchConfig#override_main_response_version}.

---

##### `PluginsAlertingFilterByBackendRolesEnabled`<sup>Optional</sup> <a name="PluginsAlertingFilterByBackendRolesEnabled" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.pluginsAlertingFilterByBackendRolesEnabled"></a>

```go
PluginsAlertingFilterByBackendRolesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#plugins_alerting_filter_by_backend_roles_enabled DatabaseOpensearchConfig#plugins_alerting_filter_by_backend_roles_enabled}.

---

##### `ReindexRemoteWhitelist`<sup>Optional</sup> <a name="ReindexRemoteWhitelist" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.reindexRemoteWhitelist"></a>

```go
ReindexRemoteWhitelist *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#reindex_remote_whitelist DatabaseOpensearchConfig#reindex_remote_whitelist}.

---

##### `ScriptMaxCompilationsRate`<sup>Optional</sup> <a name="ScriptMaxCompilationsRate" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.scriptMaxCompilationsRate"></a>

```go
ScriptMaxCompilationsRate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#script_max_compilations_rate DatabaseOpensearchConfig#script_max_compilations_rate}.

---

##### `SearchMaxBuckets`<sup>Optional</sup> <a name="SearchMaxBuckets" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.searchMaxBuckets"></a>

```go
SearchMaxBuckets *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#search_max_buckets DatabaseOpensearchConfig#search_max_buckets}.

---

##### `ThreadPoolAnalyzeQueueSize`<sup>Optional</sup> <a name="ThreadPoolAnalyzeQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeQueueSize"></a>

```go
ThreadPoolAnalyzeQueueSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_analyze_queue_size DatabaseOpensearchConfig#thread_pool_analyze_queue_size}.

---

##### `ThreadPoolAnalyzeSize`<sup>Optional</sup> <a name="ThreadPoolAnalyzeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolAnalyzeSize"></a>

```go
ThreadPoolAnalyzeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_analyze_size DatabaseOpensearchConfig#thread_pool_analyze_size}.

---

##### `ThreadPoolForceMergeSize`<sup>Optional</sup> <a name="ThreadPoolForceMergeSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolForceMergeSize"></a>

```go
ThreadPoolForceMergeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_force_merge_size DatabaseOpensearchConfig#thread_pool_force_merge_size}.

---

##### `ThreadPoolGetQueueSize`<sup>Optional</sup> <a name="ThreadPoolGetQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetQueueSize"></a>

```go
ThreadPoolGetQueueSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_get_queue_size DatabaseOpensearchConfig#thread_pool_get_queue_size}.

---

##### `ThreadPoolGetSize`<sup>Optional</sup> <a name="ThreadPoolGetSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolGetSize"></a>

```go
ThreadPoolGetSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_get_size DatabaseOpensearchConfig#thread_pool_get_size}.

---

##### `ThreadPoolSearchQueueSize`<sup>Optional</sup> <a name="ThreadPoolSearchQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchQueueSize"></a>

```go
ThreadPoolSearchQueueSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_search_queue_size DatabaseOpensearchConfig#thread_pool_search_queue_size}.

---

##### `ThreadPoolSearchSize`<sup>Optional</sup> <a name="ThreadPoolSearchSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchSize"></a>

```go
ThreadPoolSearchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_search_size DatabaseOpensearchConfig#thread_pool_search_size}.

---

##### `ThreadPoolSearchThrottledQueueSize`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledQueueSize"></a>

```go
ThreadPoolSearchThrottledQueueSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_queue_size DatabaseOpensearchConfig#thread_pool_search_throttled_queue_size}.

---

##### `ThreadPoolSearchThrottledSize`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolSearchThrottledSize"></a>

```go
ThreadPoolSearchThrottledSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_search_throttled_size DatabaseOpensearchConfig#thread_pool_search_throttled_size}.

---

##### `ThreadPoolWriteQueueSize`<sup>Optional</sup> <a name="ThreadPoolWriteQueueSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteQueueSize"></a>

```go
ThreadPoolWriteQueueSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_write_queue_size DatabaseOpensearchConfig#thread_pool_write_queue_size}.

---

##### `ThreadPoolWriteSize`<sup>Optional</sup> <a name="ThreadPoolWriteSize" id="@cdktf/provider-digitalocean.databaseOpensearchConfig.DatabaseOpensearchConfigConfig.property.threadPoolWriteSize"></a>

```go
ThreadPoolWriteSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_opensearch_config#thread_pool_write_size DatabaseOpensearchConfig#thread_pool_write_size}.

---



