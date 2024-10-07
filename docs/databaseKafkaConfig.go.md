# `databaseKafkaConfig` Submodule <a name="`databaseKafkaConfig` Submodule" id="@cdktf/provider-digitalocean.databaseKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseKafkaConfig <a name="DatabaseKafkaConfig" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config digitalocean_database_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkaconfig"

databasekafkaconfig.NewDatabaseKafkaConfig(scope Construct, id *string, config DatabaseKafkaConfigConfig) DatabaseKafkaConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig">DatabaseKafkaConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig">DatabaseKafkaConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetAutoCreateTopicsEnable">ResetAutoCreateTopicsEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupInitialRebalanceDelayMs">ResetGroupInitialRebalanceDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMaxSessionTimeoutMs">ResetGroupMaxSessionTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMinSessionTimeoutMs">ResetGroupMinSessionTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerDeleteRetentionMs">ResetLogCleanerDeleteRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerMinCompactionLagMs">ResetLogCleanerMinCompactionLagMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogFlushIntervalMs">ResetLogFlushIntervalMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogIndexIntervalBytes">ResetLogIndexIntervalBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageDownconversionEnable">ResetLogMessageDownconversionEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageTimestampDifferenceMaxMs">ResetLogMessageTimestampDifferenceMaxMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogPreallocate">ResetLogPreallocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionBytes">ResetLogRetentionBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionHours">ResetLogRetentionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionMs">ResetLogRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRollJitterMs">ResetLogRollJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogSegmentDeleteDelayMs">ResetLogSegmentDeleteDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetMessageMaxBytes">ResetMessageMaxBytes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoCreateTopicsEnable` <a name="ResetAutoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetAutoCreateTopicsEnable"></a>

```go
func ResetAutoCreateTopicsEnable()
```

##### `ResetGroupInitialRebalanceDelayMs` <a name="ResetGroupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupInitialRebalanceDelayMs"></a>

```go
func ResetGroupInitialRebalanceDelayMs()
```

##### `ResetGroupMaxSessionTimeoutMs` <a name="ResetGroupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMaxSessionTimeoutMs"></a>

```go
func ResetGroupMaxSessionTimeoutMs()
```

##### `ResetGroupMinSessionTimeoutMs` <a name="ResetGroupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMinSessionTimeoutMs"></a>

```go
func ResetGroupMinSessionTimeoutMs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLogCleanerDeleteRetentionMs` <a name="ResetLogCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerDeleteRetentionMs"></a>

```go
func ResetLogCleanerDeleteRetentionMs()
```

##### `ResetLogCleanerMinCompactionLagMs` <a name="ResetLogCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerMinCompactionLagMs"></a>

```go
func ResetLogCleanerMinCompactionLagMs()
```

##### `ResetLogFlushIntervalMs` <a name="ResetLogFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogFlushIntervalMs"></a>

```go
func ResetLogFlushIntervalMs()
```

##### `ResetLogIndexIntervalBytes` <a name="ResetLogIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogIndexIntervalBytes"></a>

```go
func ResetLogIndexIntervalBytes()
```

##### `ResetLogMessageDownconversionEnable` <a name="ResetLogMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageDownconversionEnable"></a>

```go
func ResetLogMessageDownconversionEnable()
```

##### `ResetLogMessageTimestampDifferenceMaxMs` <a name="ResetLogMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageTimestampDifferenceMaxMs"></a>

```go
func ResetLogMessageTimestampDifferenceMaxMs()
```

##### `ResetLogPreallocate` <a name="ResetLogPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogPreallocate"></a>

```go
func ResetLogPreallocate()
```

##### `ResetLogRetentionBytes` <a name="ResetLogRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionBytes"></a>

```go
func ResetLogRetentionBytes()
```

##### `ResetLogRetentionHours` <a name="ResetLogRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionHours"></a>

```go
func ResetLogRetentionHours()
```

##### `ResetLogRetentionMs` <a name="ResetLogRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionMs"></a>

```go
func ResetLogRetentionMs()
```

##### `ResetLogRollJitterMs` <a name="ResetLogRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRollJitterMs"></a>

```go
func ResetLogRollJitterMs()
```

##### `ResetLogSegmentDeleteDelayMs` <a name="ResetLogSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogSegmentDeleteDelayMs"></a>

```go
func ResetLogSegmentDeleteDelayMs()
```

##### `ResetMessageMaxBytes` <a name="ResetMessageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetMessageMaxBytes"></a>

```go
func ResetMessageMaxBytes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseKafkaConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkaconfig"

databasekafkaconfig.DatabaseKafkaConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkaconfig"

databasekafkaconfig.DatabaseKafkaConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkaconfig"

databasekafkaconfig.DatabaseKafkaConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkaconfig"

databasekafkaconfig.DatabaseKafkaConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseKafkaConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseKafkaConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnableInput">AutoCreateTopicsEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMsInput">GroupInitialRebalanceDelayMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMsInput">GroupMaxSessionTimeoutMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMsInput">GroupMinSessionTimeoutMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMsInput">LogCleanerDeleteRetentionMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMsInput">LogCleanerMinCompactionLagMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMsInput">LogFlushIntervalMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytesInput">LogIndexIntervalBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnableInput">LogMessageDownconversionEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMsInput">LogMessageTimestampDifferenceMaxMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocateInput">LogPreallocateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytesInput">LogRetentionBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHoursInput">LogRetentionHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMsInput">LogRetentionMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMsInput">LogRollJitterMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMsInput">LogSegmentDeleteDelayMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytesInput">MessageMaxBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnable">AutoCreateTopicsEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMs">GroupInitialRebalanceDelayMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMs">GroupMaxSessionTimeoutMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMs">GroupMinSessionTimeoutMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMs">LogCleanerDeleteRetentionMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMs">LogCleanerMinCompactionLagMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMs">LogFlushIntervalMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytes">LogIndexIntervalBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnable">LogMessageDownconversionEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMs">LogMessageTimestampDifferenceMaxMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocate">LogPreallocate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytes">LogRetentionBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHours">LogRetentionHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMs">LogRetentionMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMs">LogRollJitterMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMs">LogSegmentDeleteDelayMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoCreateTopicsEnableInput`<sup>Optional</sup> <a name="AutoCreateTopicsEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnableInput"></a>

```go
func AutoCreateTopicsEnableInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `GroupInitialRebalanceDelayMsInput`<sup>Optional</sup> <a name="GroupInitialRebalanceDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMsInput"></a>

```go
func GroupInitialRebalanceDelayMsInput() *f64
```

- *Type:* *f64

---

##### `GroupMaxSessionTimeoutMsInput`<sup>Optional</sup> <a name="GroupMaxSessionTimeoutMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMsInput"></a>

```go
func GroupMaxSessionTimeoutMsInput() *f64
```

- *Type:* *f64

---

##### `GroupMinSessionTimeoutMsInput`<sup>Optional</sup> <a name="GroupMinSessionTimeoutMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMsInput"></a>

```go
func GroupMinSessionTimeoutMsInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogCleanerDeleteRetentionMsInput`<sup>Optional</sup> <a name="LogCleanerDeleteRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMsInput"></a>

```go
func LogCleanerDeleteRetentionMsInput() *f64
```

- *Type:* *f64

---

##### `LogCleanerMinCompactionLagMsInput`<sup>Optional</sup> <a name="LogCleanerMinCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMsInput"></a>

```go
func LogCleanerMinCompactionLagMsInput() *string
```

- *Type:* *string

---

##### `LogFlushIntervalMsInput`<sup>Optional</sup> <a name="LogFlushIntervalMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMsInput"></a>

```go
func LogFlushIntervalMsInput() *string
```

- *Type:* *string

---

##### `LogIndexIntervalBytesInput`<sup>Optional</sup> <a name="LogIndexIntervalBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytesInput"></a>

```go
func LogIndexIntervalBytesInput() *f64
```

- *Type:* *f64

---

##### `LogMessageDownconversionEnableInput`<sup>Optional</sup> <a name="LogMessageDownconversionEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnableInput"></a>

```go
func LogMessageDownconversionEnableInput() interface{}
```

- *Type:* interface{}

---

##### `LogMessageTimestampDifferenceMaxMsInput`<sup>Optional</sup> <a name="LogMessageTimestampDifferenceMaxMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMsInput"></a>

```go
func LogMessageTimestampDifferenceMaxMsInput() *string
```

- *Type:* *string

---

##### `LogPreallocateInput`<sup>Optional</sup> <a name="LogPreallocateInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocateInput"></a>

```go
func LogPreallocateInput() interface{}
```

- *Type:* interface{}

---

##### `LogRetentionBytesInput`<sup>Optional</sup> <a name="LogRetentionBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytesInput"></a>

```go
func LogRetentionBytesInput() *string
```

- *Type:* *string

---

##### `LogRetentionHoursInput`<sup>Optional</sup> <a name="LogRetentionHoursInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHoursInput"></a>

```go
func LogRetentionHoursInput() *f64
```

- *Type:* *f64

---

##### `LogRetentionMsInput`<sup>Optional</sup> <a name="LogRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMsInput"></a>

```go
func LogRetentionMsInput() *string
```

- *Type:* *string

---

##### `LogRollJitterMsInput`<sup>Optional</sup> <a name="LogRollJitterMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMsInput"></a>

```go
func LogRollJitterMsInput() *string
```

- *Type:* *string

---

##### `LogSegmentDeleteDelayMsInput`<sup>Optional</sup> <a name="LogSegmentDeleteDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMsInput"></a>

```go
func LogSegmentDeleteDelayMsInput() *f64
```

- *Type:* *f64

---

##### `MessageMaxBytesInput`<sup>Optional</sup> <a name="MessageMaxBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytesInput"></a>

```go
func MessageMaxBytesInput() *f64
```

- *Type:* *f64

---

##### `AutoCreateTopicsEnable`<sup>Required</sup> <a name="AutoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnable"></a>

```go
func AutoCreateTopicsEnable() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `GroupInitialRebalanceDelayMs`<sup>Required</sup> <a name="GroupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMs"></a>

```go
func GroupInitialRebalanceDelayMs() *f64
```

- *Type:* *f64

---

##### `GroupMaxSessionTimeoutMs`<sup>Required</sup> <a name="GroupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMs"></a>

```go
func GroupMaxSessionTimeoutMs() *f64
```

- *Type:* *f64

---

##### `GroupMinSessionTimeoutMs`<sup>Required</sup> <a name="GroupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMs"></a>

```go
func GroupMinSessionTimeoutMs() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogCleanerDeleteRetentionMs`<sup>Required</sup> <a name="LogCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMs"></a>

```go
func LogCleanerDeleteRetentionMs() *f64
```

- *Type:* *f64

---

##### `LogCleanerMinCompactionLagMs`<sup>Required</sup> <a name="LogCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMs"></a>

```go
func LogCleanerMinCompactionLagMs() *string
```

- *Type:* *string

---

##### `LogFlushIntervalMs`<sup>Required</sup> <a name="LogFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMs"></a>

```go
func LogFlushIntervalMs() *string
```

- *Type:* *string

---

##### `LogIndexIntervalBytes`<sup>Required</sup> <a name="LogIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytes"></a>

```go
func LogIndexIntervalBytes() *f64
```

- *Type:* *f64

---

##### `LogMessageDownconversionEnable`<sup>Required</sup> <a name="LogMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnable"></a>

```go
func LogMessageDownconversionEnable() interface{}
```

- *Type:* interface{}

---

##### `LogMessageTimestampDifferenceMaxMs`<sup>Required</sup> <a name="LogMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMs"></a>

```go
func LogMessageTimestampDifferenceMaxMs() *string
```

- *Type:* *string

---

##### `LogPreallocate`<sup>Required</sup> <a name="LogPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocate"></a>

```go
func LogPreallocate() interface{}
```

- *Type:* interface{}

---

##### `LogRetentionBytes`<sup>Required</sup> <a name="LogRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytes"></a>

```go
func LogRetentionBytes() *string
```

- *Type:* *string

---

##### `LogRetentionHours`<sup>Required</sup> <a name="LogRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHours"></a>

```go
func LogRetentionHours() *f64
```

- *Type:* *f64

---

##### `LogRetentionMs`<sup>Required</sup> <a name="LogRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMs"></a>

```go
func LogRetentionMs() *string
```

- *Type:* *string

---

##### `LogRollJitterMs`<sup>Required</sup> <a name="LogRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMs"></a>

```go
func LogRollJitterMs() *string
```

- *Type:* *string

---

##### `LogSegmentDeleteDelayMs`<sup>Required</sup> <a name="LogSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMs"></a>

```go
func LogSegmentDeleteDelayMs() *f64
```

- *Type:* *f64

---

##### `MessageMaxBytes`<sup>Required</sup> <a name="MessageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytes"></a>

```go
func MessageMaxBytes() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseKafkaConfigConfig <a name="DatabaseKafkaConfigConfig" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkaconfig"

&databasekafkaconfig.DatabaseKafkaConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	AutoCreateTopicsEnable: interface{},
	GroupInitialRebalanceDelayMs: *f64,
	GroupMaxSessionTimeoutMs: *f64,
	GroupMinSessionTimeoutMs: *f64,
	Id: *string,
	LogCleanerDeleteRetentionMs: *f64,
	LogCleanerMinCompactionLagMs: *string,
	LogFlushIntervalMs: *string,
	LogIndexIntervalBytes: *f64,
	LogMessageDownconversionEnable: interface{},
	LogMessageTimestampDifferenceMaxMs: *string,
	LogPreallocate: interface{},
	LogRetentionBytes: *string,
	LogRetentionHours: *f64,
	LogRetentionMs: *string,
	LogRollJitterMs: *string,
	LogSegmentDeleteDelayMs: *f64,
	MessageMaxBytes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.autoCreateTopicsEnable">AutoCreateTopicsEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupInitialRebalanceDelayMs">GroupInitialRebalanceDelayMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMaxSessionTimeoutMs">GroupMaxSessionTimeoutMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMinSessionTimeoutMs">GroupMinSessionTimeoutMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerDeleteRetentionMs">LogCleanerDeleteRetentionMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerMinCompactionLagMs">LogCleanerMinCompactionLagMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logFlushIntervalMs">LogFlushIntervalMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logIndexIntervalBytes">LogIndexIntervalBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageDownconversionEnable">LogMessageDownconversionEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageTimestampDifferenceMaxMs">LogMessageTimestampDifferenceMaxMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logPreallocate">LogPreallocate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionBytes">LogRetentionBytes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionHours">LogRetentionHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionMs">LogRetentionMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRollJitterMs">LogRollJitterMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logSegmentDeleteDelayMs">LogSegmentDeleteDelayMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}.

---

##### `AutoCreateTopicsEnable`<sup>Optional</sup> <a name="AutoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.autoCreateTopicsEnable"></a>

```go
AutoCreateTopicsEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}.

---

##### `GroupInitialRebalanceDelayMs`<sup>Optional</sup> <a name="GroupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupInitialRebalanceDelayMs"></a>

```go
GroupInitialRebalanceDelayMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}.

---

##### `GroupMaxSessionTimeoutMs`<sup>Optional</sup> <a name="GroupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMaxSessionTimeoutMs"></a>

```go
GroupMaxSessionTimeoutMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}.

---

##### `GroupMinSessionTimeoutMs`<sup>Optional</sup> <a name="GroupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMinSessionTimeoutMs"></a>

```go
GroupMinSessionTimeoutMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogCleanerDeleteRetentionMs`<sup>Optional</sup> <a name="LogCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerDeleteRetentionMs"></a>

```go
LogCleanerDeleteRetentionMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}.

---

##### `LogCleanerMinCompactionLagMs`<sup>Optional</sup> <a name="LogCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerMinCompactionLagMs"></a>

```go
LogCleanerMinCompactionLagMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}.

---

##### `LogFlushIntervalMs`<sup>Optional</sup> <a name="LogFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logFlushIntervalMs"></a>

```go
LogFlushIntervalMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}.

---

##### `LogIndexIntervalBytes`<sup>Optional</sup> <a name="LogIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logIndexIntervalBytes"></a>

```go
LogIndexIntervalBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}.

---

##### `LogMessageDownconversionEnable`<sup>Optional</sup> <a name="LogMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageDownconversionEnable"></a>

```go
LogMessageDownconversionEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}.

---

##### `LogMessageTimestampDifferenceMaxMs`<sup>Optional</sup> <a name="LogMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageTimestampDifferenceMaxMs"></a>

```go
LogMessageTimestampDifferenceMaxMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}.

---

##### `LogPreallocate`<sup>Optional</sup> <a name="LogPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logPreallocate"></a>

```go
LogPreallocate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}.

---

##### `LogRetentionBytes`<sup>Optional</sup> <a name="LogRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionBytes"></a>

```go
LogRetentionBytes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}.

---

##### `LogRetentionHours`<sup>Optional</sup> <a name="LogRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionHours"></a>

```go
LogRetentionHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}.

---

##### `LogRetentionMs`<sup>Optional</sup> <a name="LogRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionMs"></a>

```go
LogRetentionMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}.

---

##### `LogRollJitterMs`<sup>Optional</sup> <a name="LogRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRollJitterMs"></a>

```go
LogRollJitterMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}.

---

##### `LogSegmentDeleteDelayMs`<sup>Optional</sup> <a name="LogSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logSegmentDeleteDelayMs"></a>

```go
LogSegmentDeleteDelayMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}.

---

##### `MessageMaxBytes`<sup>Optional</sup> <a name="MessageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.messageMaxBytes"></a>

```go
MessageMaxBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.42.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}.

---



