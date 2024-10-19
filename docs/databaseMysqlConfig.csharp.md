# `databaseMysqlConfig` Submodule <a name="`databaseMysqlConfig` Submodule" id="@cdktf/provider-digitalocean.databaseMysqlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMysqlConfig <a name="DatabaseMysqlConfig" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config digitalocean_database_mysql_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseMysqlConfig(Construct Scope, string Id, DatabaseMysqlConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig">DatabaseMysqlConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackupHour` <a name="ResetBackupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupHour"></a>

```csharp
private void ResetBackupHour()
```

##### `ResetBackupMinute` <a name="ResetBackupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBackupMinute"></a>

```csharp
private void ResetBackupMinute()
```

##### `ResetBinlogRetentionPeriod` <a name="ResetBinlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetBinlogRetentionPeriod"></a>

```csharp
private void ResetBinlogRetentionPeriod()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetDefaultTimeZone` <a name="ResetDefaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetDefaultTimeZone"></a>

```csharp
private void ResetDefaultTimeZone()
```

##### `ResetGroupConcatMaxLen` <a name="ResetGroupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetGroupConcatMaxLen"></a>

```csharp
private void ResetGroupConcatMaxLen()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInformationSchemaStatsExpiry` <a name="ResetInformationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInformationSchemaStatsExpiry"></a>

```csharp
private void ResetInformationSchemaStatsExpiry()
```

##### `ResetInnodbFtMinTokenSize` <a name="ResetInnodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtMinTokenSize"></a>

```csharp
private void ResetInnodbFtMinTokenSize()
```

##### `ResetInnodbFtServerStopwordTable` <a name="ResetInnodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbFtServerStopwordTable"></a>

```csharp
private void ResetInnodbFtServerStopwordTable()
```

##### `ResetInnodbLockWaitTimeout` <a name="ResetInnodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLockWaitTimeout"></a>

```csharp
private void ResetInnodbLockWaitTimeout()
```

##### `ResetInnodbLogBufferSize` <a name="ResetInnodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbLogBufferSize"></a>

```csharp
private void ResetInnodbLogBufferSize()
```

##### `ResetInnodbOnlineAlterLogMaxSize` <a name="ResetInnodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbOnlineAlterLogMaxSize"></a>

```csharp
private void ResetInnodbOnlineAlterLogMaxSize()
```

##### `ResetInnodbPrintAllDeadlocks` <a name="ResetInnodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbPrintAllDeadlocks"></a>

```csharp
private void ResetInnodbPrintAllDeadlocks()
```

##### `ResetInnodbRollbackOnTimeout` <a name="ResetInnodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInnodbRollbackOnTimeout"></a>

```csharp
private void ResetInnodbRollbackOnTimeout()
```

##### `ResetInteractiveTimeout` <a name="ResetInteractiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInteractiveTimeout"></a>

```csharp
private void ResetInteractiveTimeout()
```

##### `ResetInternalTmpMemStorageEngine` <a name="ResetInternalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetInternalTmpMemStorageEngine"></a>

```csharp
private void ResetInternalTmpMemStorageEngine()
```

##### `ResetLongQueryTime` <a name="ResetLongQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetLongQueryTime"></a>

```csharp
private void ResetLongQueryTime()
```

##### `ResetMaxAllowedPacket` <a name="ResetMaxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxAllowedPacket"></a>

```csharp
private void ResetMaxAllowedPacket()
```

##### `ResetMaxHeapTableSize` <a name="ResetMaxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetMaxHeapTableSize"></a>

```csharp
private void ResetMaxHeapTableSize()
```

##### `ResetNetReadTimeout` <a name="ResetNetReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetReadTimeout"></a>

```csharp
private void ResetNetReadTimeout()
```

##### `ResetNetWriteTimeout` <a name="ResetNetWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetNetWriteTimeout"></a>

```csharp
private void ResetNetWriteTimeout()
```

##### `ResetSlowQueryLog` <a name="ResetSlowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSlowQueryLog"></a>

```csharp
private void ResetSlowQueryLog()
```

##### `ResetSortBufferSize` <a name="ResetSortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSortBufferSize"></a>

```csharp
private void ResetSortBufferSize()
```

##### `ResetSqlMode` <a name="ResetSqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlMode"></a>

```csharp
private void ResetSqlMode()
```

##### `ResetSqlRequirePrimaryKey` <a name="ResetSqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetSqlRequirePrimaryKey"></a>

```csharp
private void ResetSqlRequirePrimaryKey()
```

##### `ResetTmpTableSize` <a name="ResetTmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetTmpTableSize"></a>

```csharp
private void ResetTmpTableSize()
```

##### `ResetWaitTimeout` <a name="ResetWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.resetWaitTimeout"></a>

```csharp
private void ResetWaitTimeout()
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

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseMysqlConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseMysqlConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseMysqlConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DatabaseMysqlConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseMysqlConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMysqlConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMysqlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMysqlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHourInput">BackupHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinuteInput">BackupMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriodInput">BinlogRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZoneInput">DefaultTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLenInput">GroupConcatMaxLenInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiryInput">InformationSchemaStatsExpiryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSizeInput">InnodbFtMinTokenSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTableInput">InnodbFtServerStopwordTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeoutInput">InnodbLockWaitTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSizeInput">InnodbLogBufferSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSizeInput">InnodbOnlineAlterLogMaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocksInput">InnodbPrintAllDeadlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeoutInput">InnodbRollbackOnTimeoutInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeoutInput">InteractiveTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngineInput">InternalTmpMemStorageEngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTimeInput">LongQueryTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacketInput">MaxAllowedPacketInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSizeInput">MaxHeapTableSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeoutInput">NetReadTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeoutInput">NetWriteTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLogInput">SlowQueryLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSizeInput">SortBufferSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlModeInput">SqlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKeyInput">SqlRequirePrimaryKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSizeInput">TmpTableSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeoutInput">WaitTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHour">BackupHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinute">BackupMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriod">BinlogRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZone">DefaultTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLen">GroupConcatMaxLen</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSize">InnodbLogBufferSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSize">InnodbOnlineAlterLogMaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocks">InnodbPrintAllDeadlocks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeout">InnodbRollbackOnTimeout</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngine">InternalTmpMemStorageEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTime">LongQueryTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeout">NetReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLog">SlowQueryLog</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSize">SortBufferSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlMode">SqlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSize">TmpTableSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeout">WaitTimeout</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackupHourInput`<sup>Optional</sup> <a name="BackupHourInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHourInput"></a>

```csharp
public double BackupHourInput { get; }
```

- *Type:* double

---

##### `BackupMinuteInput`<sup>Optional</sup> <a name="BackupMinuteInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinuteInput"></a>

```csharp
public double BackupMinuteInput { get; }
```

- *Type:* double

---

##### `BinlogRetentionPeriodInput`<sup>Optional</sup> <a name="BinlogRetentionPeriodInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriodInput"></a>

```csharp
public double BinlogRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeoutInput"></a>

```csharp
public double ConnectTimeoutInput { get; }
```

- *Type:* double

---

##### `DefaultTimeZoneInput`<sup>Optional</sup> <a name="DefaultTimeZoneInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZoneInput"></a>

```csharp
public string DefaultTimeZoneInput { get; }
```

- *Type:* string

---

##### `GroupConcatMaxLenInput`<sup>Optional</sup> <a name="GroupConcatMaxLenInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLenInput"></a>

```csharp
public double GroupConcatMaxLenInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InformationSchemaStatsExpiryInput`<sup>Optional</sup> <a name="InformationSchemaStatsExpiryInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiryInput"></a>

```csharp
public double InformationSchemaStatsExpiryInput { get; }
```

- *Type:* double

---

##### `InnodbFtMinTokenSizeInput`<sup>Optional</sup> <a name="InnodbFtMinTokenSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSizeInput"></a>

```csharp
public double InnodbFtMinTokenSizeInput { get; }
```

- *Type:* double

---

##### `InnodbFtServerStopwordTableInput`<sup>Optional</sup> <a name="InnodbFtServerStopwordTableInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTableInput"></a>

```csharp
public string InnodbFtServerStopwordTableInput { get; }
```

- *Type:* string

---

##### `InnodbLockWaitTimeoutInput`<sup>Optional</sup> <a name="InnodbLockWaitTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeoutInput"></a>

```csharp
public double InnodbLockWaitTimeoutInput { get; }
```

- *Type:* double

---

##### `InnodbLogBufferSizeInput`<sup>Optional</sup> <a name="InnodbLogBufferSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSizeInput"></a>

```csharp
public double InnodbLogBufferSizeInput { get; }
```

- *Type:* double

---

##### `InnodbOnlineAlterLogMaxSizeInput`<sup>Optional</sup> <a name="InnodbOnlineAlterLogMaxSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSizeInput"></a>

```csharp
public double InnodbOnlineAlterLogMaxSizeInput { get; }
```

- *Type:* double

---

##### `InnodbPrintAllDeadlocksInput`<sup>Optional</sup> <a name="InnodbPrintAllDeadlocksInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocksInput"></a>

```csharp
public object InnodbPrintAllDeadlocksInput { get; }
```

- *Type:* object

---

##### `InnodbRollbackOnTimeoutInput`<sup>Optional</sup> <a name="InnodbRollbackOnTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeoutInput"></a>

```csharp
public object InnodbRollbackOnTimeoutInput { get; }
```

- *Type:* object

---

##### `InteractiveTimeoutInput`<sup>Optional</sup> <a name="InteractiveTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeoutInput"></a>

```csharp
public double InteractiveTimeoutInput { get; }
```

- *Type:* double

---

##### `InternalTmpMemStorageEngineInput`<sup>Optional</sup> <a name="InternalTmpMemStorageEngineInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngineInput"></a>

```csharp
public string InternalTmpMemStorageEngineInput { get; }
```

- *Type:* string

---

##### `LongQueryTimeInput`<sup>Optional</sup> <a name="LongQueryTimeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTimeInput"></a>

```csharp
public double LongQueryTimeInput { get; }
```

- *Type:* double

---

##### `MaxAllowedPacketInput`<sup>Optional</sup> <a name="MaxAllowedPacketInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacketInput"></a>

```csharp
public double MaxAllowedPacketInput { get; }
```

- *Type:* double

---

##### `MaxHeapTableSizeInput`<sup>Optional</sup> <a name="MaxHeapTableSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSizeInput"></a>

```csharp
public double MaxHeapTableSizeInput { get; }
```

- *Type:* double

---

##### `NetReadTimeoutInput`<sup>Optional</sup> <a name="NetReadTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeoutInput"></a>

```csharp
public double NetReadTimeoutInput { get; }
```

- *Type:* double

---

##### `NetWriteTimeoutInput`<sup>Optional</sup> <a name="NetWriteTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeoutInput"></a>

```csharp
public double NetWriteTimeoutInput { get; }
```

- *Type:* double

---

##### `SlowQueryLogInput`<sup>Optional</sup> <a name="SlowQueryLogInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLogInput"></a>

```csharp
public object SlowQueryLogInput { get; }
```

- *Type:* object

---

##### `SortBufferSizeInput`<sup>Optional</sup> <a name="SortBufferSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSizeInput"></a>

```csharp
public double SortBufferSizeInput { get; }
```

- *Type:* double

---

##### `SqlModeInput`<sup>Optional</sup> <a name="SqlModeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlModeInput"></a>

```csharp
public string SqlModeInput { get; }
```

- *Type:* string

---

##### `SqlRequirePrimaryKeyInput`<sup>Optional</sup> <a name="SqlRequirePrimaryKeyInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKeyInput"></a>

```csharp
public object SqlRequirePrimaryKeyInput { get; }
```

- *Type:* object

---

##### `TmpTableSizeInput`<sup>Optional</sup> <a name="TmpTableSizeInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSizeInput"></a>

```csharp
public double TmpTableSizeInput { get; }
```

- *Type:* double

---

##### `WaitTimeoutInput`<sup>Optional</sup> <a name="WaitTimeoutInput" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeoutInput"></a>

```csharp
public double WaitTimeoutInput { get; }
```

- *Type:* double

---

##### `BackupHour`<sup>Required</sup> <a name="BackupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupHour"></a>

```csharp
public double BackupHour { get; }
```

- *Type:* double

---

##### `BackupMinute`<sup>Required</sup> <a name="BackupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.backupMinute"></a>

```csharp
public double BackupMinute { get; }
```

- *Type:* double

---

##### `BinlogRetentionPeriod`<sup>Required</sup> <a name="BinlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.binlogRetentionPeriod"></a>

```csharp
public double BinlogRetentionPeriod { get; }
```

- *Type:* double

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; }
```

- *Type:* double

---

##### `DefaultTimeZone`<sup>Required</sup> <a name="DefaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.defaultTimeZone"></a>

```csharp
public string DefaultTimeZone { get; }
```

- *Type:* string

---

##### `GroupConcatMaxLen`<sup>Required</sup> <a name="GroupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.groupConcatMaxLen"></a>

```csharp
public double GroupConcatMaxLen { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InformationSchemaStatsExpiry`<sup>Required</sup> <a name="InformationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.informationSchemaStatsExpiry"></a>

```csharp
public double InformationSchemaStatsExpiry { get; }
```

- *Type:* double

---

##### `InnodbFtMinTokenSize`<sup>Required</sup> <a name="InnodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtMinTokenSize"></a>

```csharp
public double InnodbFtMinTokenSize { get; }
```

- *Type:* double

---

##### `InnodbFtServerStopwordTable`<sup>Required</sup> <a name="InnodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbFtServerStopwordTable"></a>

```csharp
public string InnodbFtServerStopwordTable { get; }
```

- *Type:* string

---

##### `InnodbLockWaitTimeout`<sup>Required</sup> <a name="InnodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLockWaitTimeout"></a>

```csharp
public double InnodbLockWaitTimeout { get; }
```

- *Type:* double

---

##### `InnodbLogBufferSize`<sup>Required</sup> <a name="InnodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbLogBufferSize"></a>

```csharp
public double InnodbLogBufferSize { get; }
```

- *Type:* double

---

##### `InnodbOnlineAlterLogMaxSize`<sup>Required</sup> <a name="InnodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbOnlineAlterLogMaxSize"></a>

```csharp
public double InnodbOnlineAlterLogMaxSize { get; }
```

- *Type:* double

---

##### `InnodbPrintAllDeadlocks`<sup>Required</sup> <a name="InnodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbPrintAllDeadlocks"></a>

```csharp
public object InnodbPrintAllDeadlocks { get; }
```

- *Type:* object

---

##### `InnodbRollbackOnTimeout`<sup>Required</sup> <a name="InnodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.innodbRollbackOnTimeout"></a>

```csharp
public object InnodbRollbackOnTimeout { get; }
```

- *Type:* object

---

##### `InteractiveTimeout`<sup>Required</sup> <a name="InteractiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.interactiveTimeout"></a>

```csharp
public double InteractiveTimeout { get; }
```

- *Type:* double

---

##### `InternalTmpMemStorageEngine`<sup>Required</sup> <a name="InternalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.internalTmpMemStorageEngine"></a>

```csharp
public string InternalTmpMemStorageEngine { get; }
```

- *Type:* string

---

##### `LongQueryTime`<sup>Required</sup> <a name="LongQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.longQueryTime"></a>

```csharp
public double LongQueryTime { get; }
```

- *Type:* double

---

##### `MaxAllowedPacket`<sup>Required</sup> <a name="MaxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxAllowedPacket"></a>

```csharp
public double MaxAllowedPacket { get; }
```

- *Type:* double

---

##### `MaxHeapTableSize`<sup>Required</sup> <a name="MaxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.maxHeapTableSize"></a>

```csharp
public double MaxHeapTableSize { get; }
```

- *Type:* double

---

##### `NetReadTimeout`<sup>Required</sup> <a name="NetReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netReadTimeout"></a>

```csharp
public double NetReadTimeout { get; }
```

- *Type:* double

---

##### `NetWriteTimeout`<sup>Required</sup> <a name="NetWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.netWriteTimeout"></a>

```csharp
public double NetWriteTimeout { get; }
```

- *Type:* double

---

##### `SlowQueryLog`<sup>Required</sup> <a name="SlowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.slowQueryLog"></a>

```csharp
public object SlowQueryLog { get; }
```

- *Type:* object

---

##### `SortBufferSize`<sup>Required</sup> <a name="SortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sortBufferSize"></a>

```csharp
public double SortBufferSize { get; }
```

- *Type:* double

---

##### `SqlMode`<sup>Required</sup> <a name="SqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlMode"></a>

```csharp
public string SqlMode { get; }
```

- *Type:* string

---

##### `SqlRequirePrimaryKey`<sup>Required</sup> <a name="SqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.sqlRequirePrimaryKey"></a>

```csharp
public object SqlRequirePrimaryKey { get; }
```

- *Type:* object

---

##### `TmpTableSize`<sup>Required</sup> <a name="TmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tmpTableSize"></a>

```csharp
public double TmpTableSize { get; }
```

- *Type:* double

---

##### `WaitTimeout`<sup>Required</sup> <a name="WaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.waitTimeout"></a>

```csharp
public double WaitTimeout { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMysqlConfigConfig <a name="DatabaseMysqlConfigConfig" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DatabaseMysqlConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    double BackupHour = null,
    double BackupMinute = null,
    double BinlogRetentionPeriod = null,
    double ConnectTimeout = null,
    string DefaultTimeZone = null,
    double GroupConcatMaxLen = null,
    string Id = null,
    double InformationSchemaStatsExpiry = null,
    double InnodbFtMinTokenSize = null,
    string InnodbFtServerStopwordTable = null,
    double InnodbLockWaitTimeout = null,
    double InnodbLogBufferSize = null,
    double InnodbOnlineAlterLogMaxSize = null,
    object InnodbPrintAllDeadlocks = null,
    object InnodbRollbackOnTimeout = null,
    double InteractiveTimeout = null,
    string InternalTmpMemStorageEngine = null,
    double LongQueryTime = null,
    double MaxAllowedPacket = null,
    double MaxHeapTableSize = null,
    double NetReadTimeout = null,
    double NetWriteTimeout = null,
    object SlowQueryLog = null,
    double SortBufferSize = null,
    string SqlMode = null,
    object SqlRequirePrimaryKey = null,
    double TmpTableSize = null,
    double WaitTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupHour">BackupHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupMinute">BackupMinute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.binlogRetentionPeriod">BinlogRetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.defaultTimeZone">DefaultTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.groupConcatMaxLen">GroupConcatMaxLen</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLogBufferSize">InnodbLogBufferSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbOnlineAlterLogMaxSize">InnodbOnlineAlterLogMaxSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbPrintAllDeadlocks">InnodbPrintAllDeadlocks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbRollbackOnTimeout">InnodbRollbackOnTimeout</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.internalTmpMemStorageEngine">InternalTmpMemStorageEngine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.longQueryTime">LongQueryTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netReadTimeout">NetReadTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.slowQueryLog">SlowQueryLog</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sortBufferSize">SortBufferSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlMode">SqlMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.tmpTableSize">TmpTableSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.waitTimeout">WaitTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#cluster_id DatabaseMysqlConfig#cluster_id}.

---

##### `BackupHour`<sup>Optional</sup> <a name="BackupHour" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupHour"></a>

```csharp
public double BackupHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#backup_hour DatabaseMysqlConfig#backup_hour}.

---

##### `BackupMinute`<sup>Optional</sup> <a name="BackupMinute" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.backupMinute"></a>

```csharp
public double BackupMinute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#backup_minute DatabaseMysqlConfig#backup_minute}.

---

##### `BinlogRetentionPeriod`<sup>Optional</sup> <a name="BinlogRetentionPeriod" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.binlogRetentionPeriod"></a>

```csharp
public double BinlogRetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#binlog_retention_period DatabaseMysqlConfig#binlog_retention_period}.

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#connect_timeout DatabaseMysqlConfig#connect_timeout}.

---

##### `DefaultTimeZone`<sup>Optional</sup> <a name="DefaultTimeZone" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.defaultTimeZone"></a>

```csharp
public string DefaultTimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#default_time_zone DatabaseMysqlConfig#default_time_zone}.

---

##### `GroupConcatMaxLen`<sup>Optional</sup> <a name="GroupConcatMaxLen" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.groupConcatMaxLen"></a>

```csharp
public double GroupConcatMaxLen { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#group_concat_max_len DatabaseMysqlConfig#group_concat_max_len}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#id DatabaseMysqlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InformationSchemaStatsExpiry`<sup>Optional</sup> <a name="InformationSchemaStatsExpiry" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.informationSchemaStatsExpiry"></a>

```csharp
public double InformationSchemaStatsExpiry { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#information_schema_stats_expiry DatabaseMysqlConfig#information_schema_stats_expiry}.

---

##### `InnodbFtMinTokenSize`<sup>Optional</sup> <a name="InnodbFtMinTokenSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtMinTokenSize"></a>

```csharp
public double InnodbFtMinTokenSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_ft_min_token_size DatabaseMysqlConfig#innodb_ft_min_token_size}.

---

##### `InnodbFtServerStopwordTable`<sup>Optional</sup> <a name="InnodbFtServerStopwordTable" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbFtServerStopwordTable"></a>

```csharp
public string InnodbFtServerStopwordTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_ft_server_stopword_table DatabaseMysqlConfig#innodb_ft_server_stopword_table}.

---

##### `InnodbLockWaitTimeout`<sup>Optional</sup> <a name="InnodbLockWaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLockWaitTimeout"></a>

```csharp
public double InnodbLockWaitTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_lock_wait_timeout DatabaseMysqlConfig#innodb_lock_wait_timeout}.

---

##### `InnodbLogBufferSize`<sup>Optional</sup> <a name="InnodbLogBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbLogBufferSize"></a>

```csharp
public double InnodbLogBufferSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_log_buffer_size DatabaseMysqlConfig#innodb_log_buffer_size}.

---

##### `InnodbOnlineAlterLogMaxSize`<sup>Optional</sup> <a name="InnodbOnlineAlterLogMaxSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbOnlineAlterLogMaxSize"></a>

```csharp
public double InnodbOnlineAlterLogMaxSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_online_alter_log_max_size DatabaseMysqlConfig#innodb_online_alter_log_max_size}.

---

##### `InnodbPrintAllDeadlocks`<sup>Optional</sup> <a name="InnodbPrintAllDeadlocks" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbPrintAllDeadlocks"></a>

```csharp
public object InnodbPrintAllDeadlocks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_print_all_deadlocks DatabaseMysqlConfig#innodb_print_all_deadlocks}.

---

##### `InnodbRollbackOnTimeout`<sup>Optional</sup> <a name="InnodbRollbackOnTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.innodbRollbackOnTimeout"></a>

```csharp
public object InnodbRollbackOnTimeout { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#innodb_rollback_on_timeout DatabaseMysqlConfig#innodb_rollback_on_timeout}.

---

##### `InteractiveTimeout`<sup>Optional</sup> <a name="InteractiveTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.interactiveTimeout"></a>

```csharp
public double InteractiveTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#interactive_timeout DatabaseMysqlConfig#interactive_timeout}.

---

##### `InternalTmpMemStorageEngine`<sup>Optional</sup> <a name="InternalTmpMemStorageEngine" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.internalTmpMemStorageEngine"></a>

```csharp
public string InternalTmpMemStorageEngine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#internal_tmp_mem_storage_engine DatabaseMysqlConfig#internal_tmp_mem_storage_engine}.

---

##### `LongQueryTime`<sup>Optional</sup> <a name="LongQueryTime" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.longQueryTime"></a>

```csharp
public double LongQueryTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#long_query_time DatabaseMysqlConfig#long_query_time}.

---

##### `MaxAllowedPacket`<sup>Optional</sup> <a name="MaxAllowedPacket" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxAllowedPacket"></a>

```csharp
public double MaxAllowedPacket { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#max_allowed_packet DatabaseMysqlConfig#max_allowed_packet}.

---

##### `MaxHeapTableSize`<sup>Optional</sup> <a name="MaxHeapTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.maxHeapTableSize"></a>

```csharp
public double MaxHeapTableSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#max_heap_table_size DatabaseMysqlConfig#max_heap_table_size}.

---

##### `NetReadTimeout`<sup>Optional</sup> <a name="NetReadTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netReadTimeout"></a>

```csharp
public double NetReadTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#net_read_timeout DatabaseMysqlConfig#net_read_timeout}.

---

##### `NetWriteTimeout`<sup>Optional</sup> <a name="NetWriteTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.netWriteTimeout"></a>

```csharp
public double NetWriteTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#net_write_timeout DatabaseMysqlConfig#net_write_timeout}.

---

##### `SlowQueryLog`<sup>Optional</sup> <a name="SlowQueryLog" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.slowQueryLog"></a>

```csharp
public object SlowQueryLog { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#slow_query_log DatabaseMysqlConfig#slow_query_log}.

---

##### `SortBufferSize`<sup>Optional</sup> <a name="SortBufferSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sortBufferSize"></a>

```csharp
public double SortBufferSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#sort_buffer_size DatabaseMysqlConfig#sort_buffer_size}.

---

##### `SqlMode`<sup>Optional</sup> <a name="SqlMode" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlMode"></a>

```csharp
public string SqlMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#sql_mode DatabaseMysqlConfig#sql_mode}.

---

##### `SqlRequirePrimaryKey`<sup>Optional</sup> <a name="SqlRequirePrimaryKey" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.sqlRequirePrimaryKey"></a>

```csharp
public object SqlRequirePrimaryKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#sql_require_primary_key DatabaseMysqlConfig#sql_require_primary_key}.

---

##### `TmpTableSize`<sup>Optional</sup> <a name="TmpTableSize" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.tmpTableSize"></a>

```csharp
public double TmpTableSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#tmp_table_size DatabaseMysqlConfig#tmp_table_size}.

---

##### `WaitTimeout`<sup>Optional</sup> <a name="WaitTimeout" id="@cdktf/provider-digitalocean.databaseMysqlConfig.DatabaseMysqlConfigConfig.property.waitTimeout"></a>

```csharp
public double WaitTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/database_mysql_config#wait_timeout DatabaseMysqlConfig#wait_timeout}.

---



