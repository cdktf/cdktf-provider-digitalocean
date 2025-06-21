# `databaseKafkaConfig` Submodule <a name="`databaseKafkaConfig` Submodule" id="@cdktf/provider-digitalocean.databaseKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseKafkaConfig <a name="DatabaseKafkaConfig" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config digitalocean_database_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseKafkaConfig(Construct Scope, string Id, DatabaseKafkaConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig">DatabaseKafkaConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoCreateTopicsEnable` <a name="ResetAutoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetAutoCreateTopicsEnable"></a>

```csharp
private void ResetAutoCreateTopicsEnable()
```

##### `ResetGroupInitialRebalanceDelayMs` <a name="ResetGroupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupInitialRebalanceDelayMs"></a>

```csharp
private void ResetGroupInitialRebalanceDelayMs()
```

##### `ResetGroupMaxSessionTimeoutMs` <a name="ResetGroupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMaxSessionTimeoutMs"></a>

```csharp
private void ResetGroupMaxSessionTimeoutMs()
```

##### `ResetGroupMinSessionTimeoutMs` <a name="ResetGroupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMinSessionTimeoutMs"></a>

```csharp
private void ResetGroupMinSessionTimeoutMs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogCleanerDeleteRetentionMs` <a name="ResetLogCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerDeleteRetentionMs"></a>

```csharp
private void ResetLogCleanerDeleteRetentionMs()
```

##### `ResetLogCleanerMinCompactionLagMs` <a name="ResetLogCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerMinCompactionLagMs"></a>

```csharp
private void ResetLogCleanerMinCompactionLagMs()
```

##### `ResetLogFlushIntervalMs` <a name="ResetLogFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogFlushIntervalMs"></a>

```csharp
private void ResetLogFlushIntervalMs()
```

##### `ResetLogIndexIntervalBytes` <a name="ResetLogIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogIndexIntervalBytes"></a>

```csharp
private void ResetLogIndexIntervalBytes()
```

##### `ResetLogMessageDownconversionEnable` <a name="ResetLogMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageDownconversionEnable"></a>

```csharp
private void ResetLogMessageDownconversionEnable()
```

##### `ResetLogMessageTimestampDifferenceMaxMs` <a name="ResetLogMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageTimestampDifferenceMaxMs"></a>

```csharp
private void ResetLogMessageTimestampDifferenceMaxMs()
```

##### `ResetLogPreallocate` <a name="ResetLogPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogPreallocate"></a>

```csharp
private void ResetLogPreallocate()
```

##### `ResetLogRetentionBytes` <a name="ResetLogRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionBytes"></a>

```csharp
private void ResetLogRetentionBytes()
```

##### `ResetLogRetentionHours` <a name="ResetLogRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionHours"></a>

```csharp
private void ResetLogRetentionHours()
```

##### `ResetLogRetentionMs` <a name="ResetLogRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionMs"></a>

```csharp
private void ResetLogRetentionMs()
```

##### `ResetLogRollJitterMs` <a name="ResetLogRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRollJitterMs"></a>

```csharp
private void ResetLogRollJitterMs()
```

##### `ResetLogSegmentDeleteDelayMs` <a name="ResetLogSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogSegmentDeleteDelayMs"></a>

```csharp
private void ResetLogSegmentDeleteDelayMs()
```

##### `ResetMessageMaxBytes` <a name="ResetMessageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetMessageMaxBytes"></a>

```csharp
private void ResetMessageMaxBytes()
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

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseKafkaConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseKafkaConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseKafkaConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseKafkaConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseKafkaConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseKafkaConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnableInput">AutoCreateTopicsEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMsInput">GroupInitialRebalanceDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMsInput">GroupMaxSessionTimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMsInput">GroupMinSessionTimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMsInput">LogCleanerDeleteRetentionMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMsInput">LogCleanerMinCompactionLagMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMsInput">LogFlushIntervalMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytesInput">LogIndexIntervalBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnableInput">LogMessageDownconversionEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMsInput">LogMessageTimestampDifferenceMaxMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocateInput">LogPreallocateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytesInput">LogRetentionBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHoursInput">LogRetentionHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMsInput">LogRetentionMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMsInput">LogRollJitterMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMsInput">LogSegmentDeleteDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytesInput">MessageMaxBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnable">AutoCreateTopicsEnable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMs">GroupInitialRebalanceDelayMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMs">GroupMaxSessionTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMs">GroupMinSessionTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMs">LogCleanerDeleteRetentionMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMs">LogCleanerMinCompactionLagMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMs">LogFlushIntervalMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytes">LogIndexIntervalBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnable">LogMessageDownconversionEnable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMs">LogMessageTimestampDifferenceMaxMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocate">LogPreallocate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytes">LogRetentionBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHours">LogRetentionHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMs">LogRetentionMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMs">LogRollJitterMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMs">LogSegmentDeleteDelayMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoCreateTopicsEnableInput`<sup>Optional</sup> <a name="AutoCreateTopicsEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnableInput"></a>

```csharp
public object AutoCreateTopicsEnableInput { get; }
```

- *Type:* object

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `GroupInitialRebalanceDelayMsInput`<sup>Optional</sup> <a name="GroupInitialRebalanceDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMsInput"></a>

```csharp
public double GroupInitialRebalanceDelayMsInput { get; }
```

- *Type:* double

---

##### `GroupMaxSessionTimeoutMsInput`<sup>Optional</sup> <a name="GroupMaxSessionTimeoutMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMsInput"></a>

```csharp
public double GroupMaxSessionTimeoutMsInput { get; }
```

- *Type:* double

---

##### `GroupMinSessionTimeoutMsInput`<sup>Optional</sup> <a name="GroupMinSessionTimeoutMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMsInput"></a>

```csharp
public double GroupMinSessionTimeoutMsInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogCleanerDeleteRetentionMsInput`<sup>Optional</sup> <a name="LogCleanerDeleteRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMsInput"></a>

```csharp
public double LogCleanerDeleteRetentionMsInput { get; }
```

- *Type:* double

---

##### `LogCleanerMinCompactionLagMsInput`<sup>Optional</sup> <a name="LogCleanerMinCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMsInput"></a>

```csharp
public string LogCleanerMinCompactionLagMsInput { get; }
```

- *Type:* string

---

##### `LogFlushIntervalMsInput`<sup>Optional</sup> <a name="LogFlushIntervalMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMsInput"></a>

```csharp
public string LogFlushIntervalMsInput { get; }
```

- *Type:* string

---

##### `LogIndexIntervalBytesInput`<sup>Optional</sup> <a name="LogIndexIntervalBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytesInput"></a>

```csharp
public double LogIndexIntervalBytesInput { get; }
```

- *Type:* double

---

##### `LogMessageDownconversionEnableInput`<sup>Optional</sup> <a name="LogMessageDownconversionEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnableInput"></a>

```csharp
public object LogMessageDownconversionEnableInput { get; }
```

- *Type:* object

---

##### `LogMessageTimestampDifferenceMaxMsInput`<sup>Optional</sup> <a name="LogMessageTimestampDifferenceMaxMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMsInput"></a>

```csharp
public string LogMessageTimestampDifferenceMaxMsInput { get; }
```

- *Type:* string

---

##### `LogPreallocateInput`<sup>Optional</sup> <a name="LogPreallocateInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocateInput"></a>

```csharp
public object LogPreallocateInput { get; }
```

- *Type:* object

---

##### `LogRetentionBytesInput`<sup>Optional</sup> <a name="LogRetentionBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytesInput"></a>

```csharp
public string LogRetentionBytesInput { get; }
```

- *Type:* string

---

##### `LogRetentionHoursInput`<sup>Optional</sup> <a name="LogRetentionHoursInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHoursInput"></a>

```csharp
public double LogRetentionHoursInput { get; }
```

- *Type:* double

---

##### `LogRetentionMsInput`<sup>Optional</sup> <a name="LogRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMsInput"></a>

```csharp
public string LogRetentionMsInput { get; }
```

- *Type:* string

---

##### `LogRollJitterMsInput`<sup>Optional</sup> <a name="LogRollJitterMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMsInput"></a>

```csharp
public string LogRollJitterMsInput { get; }
```

- *Type:* string

---

##### `LogSegmentDeleteDelayMsInput`<sup>Optional</sup> <a name="LogSegmentDeleteDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMsInput"></a>

```csharp
public double LogSegmentDeleteDelayMsInput { get; }
```

- *Type:* double

---

##### `MessageMaxBytesInput`<sup>Optional</sup> <a name="MessageMaxBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytesInput"></a>

```csharp
public double MessageMaxBytesInput { get; }
```

- *Type:* double

---

##### `AutoCreateTopicsEnable`<sup>Required</sup> <a name="AutoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnable"></a>

```csharp
public object AutoCreateTopicsEnable { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `GroupInitialRebalanceDelayMs`<sup>Required</sup> <a name="GroupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMs"></a>

```csharp
public double GroupInitialRebalanceDelayMs { get; }
```

- *Type:* double

---

##### `GroupMaxSessionTimeoutMs`<sup>Required</sup> <a name="GroupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMs"></a>

```csharp
public double GroupMaxSessionTimeoutMs { get; }
```

- *Type:* double

---

##### `GroupMinSessionTimeoutMs`<sup>Required</sup> <a name="GroupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMs"></a>

```csharp
public double GroupMinSessionTimeoutMs { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogCleanerDeleteRetentionMs`<sup>Required</sup> <a name="LogCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMs"></a>

```csharp
public double LogCleanerDeleteRetentionMs { get; }
```

- *Type:* double

---

##### `LogCleanerMinCompactionLagMs`<sup>Required</sup> <a name="LogCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMs"></a>

```csharp
public string LogCleanerMinCompactionLagMs { get; }
```

- *Type:* string

---

##### `LogFlushIntervalMs`<sup>Required</sup> <a name="LogFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMs"></a>

```csharp
public string LogFlushIntervalMs { get; }
```

- *Type:* string

---

##### `LogIndexIntervalBytes`<sup>Required</sup> <a name="LogIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytes"></a>

```csharp
public double LogIndexIntervalBytes { get; }
```

- *Type:* double

---

##### `LogMessageDownconversionEnable`<sup>Required</sup> <a name="LogMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnable"></a>

```csharp
public object LogMessageDownconversionEnable { get; }
```

- *Type:* object

---

##### `LogMessageTimestampDifferenceMaxMs`<sup>Required</sup> <a name="LogMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMs"></a>

```csharp
public string LogMessageTimestampDifferenceMaxMs { get; }
```

- *Type:* string

---

##### `LogPreallocate`<sup>Required</sup> <a name="LogPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocate"></a>

```csharp
public object LogPreallocate { get; }
```

- *Type:* object

---

##### `LogRetentionBytes`<sup>Required</sup> <a name="LogRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytes"></a>

```csharp
public string LogRetentionBytes { get; }
```

- *Type:* string

---

##### `LogRetentionHours`<sup>Required</sup> <a name="LogRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHours"></a>

```csharp
public double LogRetentionHours { get; }
```

- *Type:* double

---

##### `LogRetentionMs`<sup>Required</sup> <a name="LogRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMs"></a>

```csharp
public string LogRetentionMs { get; }
```

- *Type:* string

---

##### `LogRollJitterMs`<sup>Required</sup> <a name="LogRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMs"></a>

```csharp
public string LogRollJitterMs { get; }
```

- *Type:* string

---

##### `LogSegmentDeleteDelayMs`<sup>Required</sup> <a name="LogSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMs"></a>

```csharp
public double LogSegmentDeleteDelayMs { get; }
```

- *Type:* double

---

##### `MessageMaxBytes`<sup>Required</sup> <a name="MessageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytes"></a>

```csharp
public double MessageMaxBytes { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseKafkaConfigConfig <a name="DatabaseKafkaConfigConfig" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseKafkaConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    object AutoCreateTopicsEnable = null,
    double GroupInitialRebalanceDelayMs = null,
    double GroupMaxSessionTimeoutMs = null,
    double GroupMinSessionTimeoutMs = null,
    string Id = null,
    double LogCleanerDeleteRetentionMs = null,
    string LogCleanerMinCompactionLagMs = null,
    string LogFlushIntervalMs = null,
    double LogIndexIntervalBytes = null,
    object LogMessageDownconversionEnable = null,
    string LogMessageTimestampDifferenceMaxMs = null,
    object LogPreallocate = null,
    string LogRetentionBytes = null,
    double LogRetentionHours = null,
    string LogRetentionMs = null,
    string LogRollJitterMs = null,
    double LogSegmentDeleteDelayMs = null,
    double MessageMaxBytes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.autoCreateTopicsEnable">AutoCreateTopicsEnable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupInitialRebalanceDelayMs">GroupInitialRebalanceDelayMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMaxSessionTimeoutMs">GroupMaxSessionTimeoutMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMinSessionTimeoutMs">GroupMinSessionTimeoutMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerDeleteRetentionMs">LogCleanerDeleteRetentionMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerMinCompactionLagMs">LogCleanerMinCompactionLagMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logFlushIntervalMs">LogFlushIntervalMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logIndexIntervalBytes">LogIndexIntervalBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageDownconversionEnable">LogMessageDownconversionEnable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageTimestampDifferenceMaxMs">LogMessageTimestampDifferenceMaxMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logPreallocate">LogPreallocate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionBytes">LogRetentionBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionHours">LogRetentionHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionMs">LogRetentionMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRollJitterMs">LogRollJitterMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logSegmentDeleteDelayMs">LogSegmentDeleteDelayMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}.

---

##### `AutoCreateTopicsEnable`<sup>Optional</sup> <a name="AutoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.autoCreateTopicsEnable"></a>

```csharp
public object AutoCreateTopicsEnable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}.

---

##### `GroupInitialRebalanceDelayMs`<sup>Optional</sup> <a name="GroupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupInitialRebalanceDelayMs"></a>

```csharp
public double GroupInitialRebalanceDelayMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}.

---

##### `GroupMaxSessionTimeoutMs`<sup>Optional</sup> <a name="GroupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMaxSessionTimeoutMs"></a>

```csharp
public double GroupMaxSessionTimeoutMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}.

---

##### `GroupMinSessionTimeoutMs`<sup>Optional</sup> <a name="GroupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMinSessionTimeoutMs"></a>

```csharp
public double GroupMinSessionTimeoutMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogCleanerDeleteRetentionMs`<sup>Optional</sup> <a name="LogCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerDeleteRetentionMs"></a>

```csharp
public double LogCleanerDeleteRetentionMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}.

---

##### `LogCleanerMinCompactionLagMs`<sup>Optional</sup> <a name="LogCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerMinCompactionLagMs"></a>

```csharp
public string LogCleanerMinCompactionLagMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}.

---

##### `LogFlushIntervalMs`<sup>Optional</sup> <a name="LogFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logFlushIntervalMs"></a>

```csharp
public string LogFlushIntervalMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}.

---

##### `LogIndexIntervalBytes`<sup>Optional</sup> <a name="LogIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logIndexIntervalBytes"></a>

```csharp
public double LogIndexIntervalBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}.

---

##### `LogMessageDownconversionEnable`<sup>Optional</sup> <a name="LogMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageDownconversionEnable"></a>

```csharp
public object LogMessageDownconversionEnable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}.

---

##### `LogMessageTimestampDifferenceMaxMs`<sup>Optional</sup> <a name="LogMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageTimestampDifferenceMaxMs"></a>

```csharp
public string LogMessageTimestampDifferenceMaxMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}.

---

##### `LogPreallocate`<sup>Optional</sup> <a name="LogPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logPreallocate"></a>

```csharp
public object LogPreallocate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}.

---

##### `LogRetentionBytes`<sup>Optional</sup> <a name="LogRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionBytes"></a>

```csharp
public string LogRetentionBytes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}.

---

##### `LogRetentionHours`<sup>Optional</sup> <a name="LogRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionHours"></a>

```csharp
public double LogRetentionHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}.

---

##### `LogRetentionMs`<sup>Optional</sup> <a name="LogRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionMs"></a>

```csharp
public string LogRetentionMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}.

---

##### `LogRollJitterMs`<sup>Optional</sup> <a name="LogRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRollJitterMs"></a>

```csharp
public string LogRollJitterMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}.

---

##### `LogSegmentDeleteDelayMs`<sup>Optional</sup> <a name="LogSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logSegmentDeleteDelayMs"></a>

```csharp
public double LogSegmentDeleteDelayMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}.

---

##### `MessageMaxBytes`<sup>Optional</sup> <a name="MessageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.messageMaxBytes"></a>

```csharp
public double MessageMaxBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}.

---



