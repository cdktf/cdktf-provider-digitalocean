# `databaseKafkaConfig` Submodule <a name="`databaseKafkaConfig` Submodule" id="@cdktf/provider-digitalocean.databaseKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseKafkaConfig <a name="DatabaseKafkaConfig" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config digitalocean_database_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer"></a>

```typescript
import { databaseKafkaConfig } from '@cdktf/provider-digitalocean'

new databaseKafkaConfig.DatabaseKafkaConfig(scope: Construct, id: string, config: DatabaseKafkaConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig">DatabaseKafkaConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig">DatabaseKafkaConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetAutoCreateTopicsEnable">resetAutoCreateTopicsEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupInitialRebalanceDelayMs">resetGroupInitialRebalanceDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMaxSessionTimeoutMs">resetGroupMaxSessionTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMinSessionTimeoutMs">resetGroupMinSessionTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerDeleteRetentionMs">resetLogCleanerDeleteRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerMinCompactionLagMs">resetLogCleanerMinCompactionLagMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogFlushIntervalMs">resetLogFlushIntervalMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogIndexIntervalBytes">resetLogIndexIntervalBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageDownconversionEnable">resetLogMessageDownconversionEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageTimestampDifferenceMaxMs">resetLogMessageTimestampDifferenceMaxMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogPreallocate">resetLogPreallocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionBytes">resetLogRetentionBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionHours">resetLogRetentionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionMs">resetLogRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRollJitterMs">resetLogRollJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogSegmentDeleteDelayMs">resetLogSegmentDeleteDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetMessageMaxBytes">resetMessageMaxBytes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutoCreateTopicsEnable` <a name="resetAutoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetAutoCreateTopicsEnable"></a>

```typescript
public resetAutoCreateTopicsEnable(): void
```

##### `resetGroupInitialRebalanceDelayMs` <a name="resetGroupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupInitialRebalanceDelayMs"></a>

```typescript
public resetGroupInitialRebalanceDelayMs(): void
```

##### `resetGroupMaxSessionTimeoutMs` <a name="resetGroupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMaxSessionTimeoutMs"></a>

```typescript
public resetGroupMaxSessionTimeoutMs(): void
```

##### `resetGroupMinSessionTimeoutMs` <a name="resetGroupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetGroupMinSessionTimeoutMs"></a>

```typescript
public resetGroupMinSessionTimeoutMs(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogCleanerDeleteRetentionMs` <a name="resetLogCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerDeleteRetentionMs"></a>

```typescript
public resetLogCleanerDeleteRetentionMs(): void
```

##### `resetLogCleanerMinCompactionLagMs` <a name="resetLogCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogCleanerMinCompactionLagMs"></a>

```typescript
public resetLogCleanerMinCompactionLagMs(): void
```

##### `resetLogFlushIntervalMs` <a name="resetLogFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogFlushIntervalMs"></a>

```typescript
public resetLogFlushIntervalMs(): void
```

##### `resetLogIndexIntervalBytes` <a name="resetLogIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogIndexIntervalBytes"></a>

```typescript
public resetLogIndexIntervalBytes(): void
```

##### `resetLogMessageDownconversionEnable` <a name="resetLogMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageDownconversionEnable"></a>

```typescript
public resetLogMessageDownconversionEnable(): void
```

##### `resetLogMessageTimestampDifferenceMaxMs` <a name="resetLogMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogMessageTimestampDifferenceMaxMs"></a>

```typescript
public resetLogMessageTimestampDifferenceMaxMs(): void
```

##### `resetLogPreallocate` <a name="resetLogPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogPreallocate"></a>

```typescript
public resetLogPreallocate(): void
```

##### `resetLogRetentionBytes` <a name="resetLogRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionBytes"></a>

```typescript
public resetLogRetentionBytes(): void
```

##### `resetLogRetentionHours` <a name="resetLogRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionHours"></a>

```typescript
public resetLogRetentionHours(): void
```

##### `resetLogRetentionMs` <a name="resetLogRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRetentionMs"></a>

```typescript
public resetLogRetentionMs(): void
```

##### `resetLogRollJitterMs` <a name="resetLogRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogRollJitterMs"></a>

```typescript
public resetLogRollJitterMs(): void
```

##### `resetLogSegmentDeleteDelayMs` <a name="resetLogSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetLogSegmentDeleteDelayMs"></a>

```typescript
public resetLogSegmentDeleteDelayMs(): void
```

##### `resetMessageMaxBytes` <a name="resetMessageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.resetMessageMaxBytes"></a>

```typescript
public resetMessageMaxBytes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseKafkaConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isConstruct"></a>

```typescript
import { databaseKafkaConfig } from '@cdktf/provider-digitalocean'

databaseKafkaConfig.DatabaseKafkaConfig.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement"></a>

```typescript
import { databaseKafkaConfig } from '@cdktf/provider-digitalocean'

databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource"></a>

```typescript
import { databaseKafkaConfig } from '@cdktf/provider-digitalocean'

databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport"></a>

```typescript
import { databaseKafkaConfig } from '@cdktf/provider-digitalocean'

databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseKafkaConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseKafkaConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnableInput">autoCreateTopicsEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMsInput">groupInitialRebalanceDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMsInput">groupMaxSessionTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMsInput">groupMinSessionTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMsInput">logCleanerDeleteRetentionMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMsInput">logCleanerMinCompactionLagMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMsInput">logFlushIntervalMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytesInput">logIndexIntervalBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnableInput">logMessageDownconversionEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMsInput">logMessageTimestampDifferenceMaxMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocateInput">logPreallocateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytesInput">logRetentionBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHoursInput">logRetentionHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMsInput">logRetentionMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMsInput">logRollJitterMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMsInput">logSegmentDeleteDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytesInput">messageMaxBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnable">autoCreateTopicsEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMs">groupInitialRebalanceDelayMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMs">groupMaxSessionTimeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMs">groupMinSessionTimeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMs">logCleanerDeleteRetentionMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMs">logCleanerMinCompactionLagMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMs">logFlushIntervalMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytes">logIndexIntervalBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnable">logMessageDownconversionEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMs">logMessageTimestampDifferenceMaxMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocate">logPreallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytes">logRetentionBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHours">logRetentionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMs">logRetentionMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMs">logRollJitterMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMs">logSegmentDeleteDelayMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytes">messageMaxBytes</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoCreateTopicsEnableInput`<sup>Optional</sup> <a name="autoCreateTopicsEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnableInput"></a>

```typescript
public readonly autoCreateTopicsEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `groupInitialRebalanceDelayMsInput`<sup>Optional</sup> <a name="groupInitialRebalanceDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMsInput"></a>

```typescript
public readonly groupInitialRebalanceDelayMsInput: number;
```

- *Type:* number

---

##### `groupMaxSessionTimeoutMsInput`<sup>Optional</sup> <a name="groupMaxSessionTimeoutMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMsInput"></a>

```typescript
public readonly groupMaxSessionTimeoutMsInput: number;
```

- *Type:* number

---

##### `groupMinSessionTimeoutMsInput`<sup>Optional</sup> <a name="groupMinSessionTimeoutMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMsInput"></a>

```typescript
public readonly groupMinSessionTimeoutMsInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logCleanerDeleteRetentionMsInput`<sup>Optional</sup> <a name="logCleanerDeleteRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMsInput"></a>

```typescript
public readonly logCleanerDeleteRetentionMsInput: number;
```

- *Type:* number

---

##### `logCleanerMinCompactionLagMsInput`<sup>Optional</sup> <a name="logCleanerMinCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMsInput"></a>

```typescript
public readonly logCleanerMinCompactionLagMsInput: string;
```

- *Type:* string

---

##### `logFlushIntervalMsInput`<sup>Optional</sup> <a name="logFlushIntervalMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMsInput"></a>

```typescript
public readonly logFlushIntervalMsInput: string;
```

- *Type:* string

---

##### `logIndexIntervalBytesInput`<sup>Optional</sup> <a name="logIndexIntervalBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytesInput"></a>

```typescript
public readonly logIndexIntervalBytesInput: number;
```

- *Type:* number

---

##### `logMessageDownconversionEnableInput`<sup>Optional</sup> <a name="logMessageDownconversionEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnableInput"></a>

```typescript
public readonly logMessageDownconversionEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logMessageTimestampDifferenceMaxMsInput`<sup>Optional</sup> <a name="logMessageTimestampDifferenceMaxMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMsInput"></a>

```typescript
public readonly logMessageTimestampDifferenceMaxMsInput: string;
```

- *Type:* string

---

##### `logPreallocateInput`<sup>Optional</sup> <a name="logPreallocateInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocateInput"></a>

```typescript
public readonly logPreallocateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logRetentionBytesInput`<sup>Optional</sup> <a name="logRetentionBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytesInput"></a>

```typescript
public readonly logRetentionBytesInput: string;
```

- *Type:* string

---

##### `logRetentionHoursInput`<sup>Optional</sup> <a name="logRetentionHoursInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHoursInput"></a>

```typescript
public readonly logRetentionHoursInput: number;
```

- *Type:* number

---

##### `logRetentionMsInput`<sup>Optional</sup> <a name="logRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMsInput"></a>

```typescript
public readonly logRetentionMsInput: string;
```

- *Type:* string

---

##### `logRollJitterMsInput`<sup>Optional</sup> <a name="logRollJitterMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMsInput"></a>

```typescript
public readonly logRollJitterMsInput: string;
```

- *Type:* string

---

##### `logSegmentDeleteDelayMsInput`<sup>Optional</sup> <a name="logSegmentDeleteDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMsInput"></a>

```typescript
public readonly logSegmentDeleteDelayMsInput: number;
```

- *Type:* number

---

##### `messageMaxBytesInput`<sup>Optional</sup> <a name="messageMaxBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytesInput"></a>

```typescript
public readonly messageMaxBytesInput: number;
```

- *Type:* number

---

##### `autoCreateTopicsEnable`<sup>Required</sup> <a name="autoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.autoCreateTopicsEnable"></a>

```typescript
public readonly autoCreateTopicsEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `groupInitialRebalanceDelayMs`<sup>Required</sup> <a name="groupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupInitialRebalanceDelayMs"></a>

```typescript
public readonly groupInitialRebalanceDelayMs: number;
```

- *Type:* number

---

##### `groupMaxSessionTimeoutMs`<sup>Required</sup> <a name="groupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMaxSessionTimeoutMs"></a>

```typescript
public readonly groupMaxSessionTimeoutMs: number;
```

- *Type:* number

---

##### `groupMinSessionTimeoutMs`<sup>Required</sup> <a name="groupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.groupMinSessionTimeoutMs"></a>

```typescript
public readonly groupMinSessionTimeoutMs: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logCleanerDeleteRetentionMs`<sup>Required</sup> <a name="logCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerDeleteRetentionMs"></a>

```typescript
public readonly logCleanerDeleteRetentionMs: number;
```

- *Type:* number

---

##### `logCleanerMinCompactionLagMs`<sup>Required</sup> <a name="logCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logCleanerMinCompactionLagMs"></a>

```typescript
public readonly logCleanerMinCompactionLagMs: string;
```

- *Type:* string

---

##### `logFlushIntervalMs`<sup>Required</sup> <a name="logFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logFlushIntervalMs"></a>

```typescript
public readonly logFlushIntervalMs: string;
```

- *Type:* string

---

##### `logIndexIntervalBytes`<sup>Required</sup> <a name="logIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logIndexIntervalBytes"></a>

```typescript
public readonly logIndexIntervalBytes: number;
```

- *Type:* number

---

##### `logMessageDownconversionEnable`<sup>Required</sup> <a name="logMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageDownconversionEnable"></a>

```typescript
public readonly logMessageDownconversionEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logMessageTimestampDifferenceMaxMs`<sup>Required</sup> <a name="logMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logMessageTimestampDifferenceMaxMs"></a>

```typescript
public readonly logMessageTimestampDifferenceMaxMs: string;
```

- *Type:* string

---

##### `logPreallocate`<sup>Required</sup> <a name="logPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logPreallocate"></a>

```typescript
public readonly logPreallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logRetentionBytes`<sup>Required</sup> <a name="logRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionBytes"></a>

```typescript
public readonly logRetentionBytes: string;
```

- *Type:* string

---

##### `logRetentionHours`<sup>Required</sup> <a name="logRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionHours"></a>

```typescript
public readonly logRetentionHours: number;
```

- *Type:* number

---

##### `logRetentionMs`<sup>Required</sup> <a name="logRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRetentionMs"></a>

```typescript
public readonly logRetentionMs: string;
```

- *Type:* string

---

##### `logRollJitterMs`<sup>Required</sup> <a name="logRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logRollJitterMs"></a>

```typescript
public readonly logRollJitterMs: string;
```

- *Type:* string

---

##### `logSegmentDeleteDelayMs`<sup>Required</sup> <a name="logSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.logSegmentDeleteDelayMs"></a>

```typescript
public readonly logSegmentDeleteDelayMs: number;
```

- *Type:* number

---

##### `messageMaxBytes`<sup>Required</sup> <a name="messageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.messageMaxBytes"></a>

```typescript
public readonly messageMaxBytes: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseKafkaConfigConfig <a name="DatabaseKafkaConfigConfig" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.Initializer"></a>

```typescript
import { databaseKafkaConfig } from '@cdktf/provider-digitalocean'

const databaseKafkaConfigConfig: databaseKafkaConfig.DatabaseKafkaConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.autoCreateTopicsEnable">autoCreateTopicsEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupInitialRebalanceDelayMs">groupInitialRebalanceDelayMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMaxSessionTimeoutMs">groupMaxSessionTimeoutMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMinSessionTimeoutMs">groupMinSessionTimeoutMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerDeleteRetentionMs">logCleanerDeleteRetentionMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerMinCompactionLagMs">logCleanerMinCompactionLagMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logFlushIntervalMs">logFlushIntervalMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logIndexIntervalBytes">logIndexIntervalBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageDownconversionEnable">logMessageDownconversionEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageTimestampDifferenceMaxMs">logMessageTimestampDifferenceMaxMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logPreallocate">logPreallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionBytes">logRetentionBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionHours">logRetentionHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionMs">logRetentionMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRollJitterMs">logRollJitterMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logSegmentDeleteDelayMs">logSegmentDeleteDelayMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.messageMaxBytes">messageMaxBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#cluster_id DatabaseKafkaConfig#cluster_id}.

---

##### `autoCreateTopicsEnable`<sup>Optional</sup> <a name="autoCreateTopicsEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.autoCreateTopicsEnable"></a>

```typescript
public readonly autoCreateTopicsEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#auto_create_topics_enable DatabaseKafkaConfig#auto_create_topics_enable}.

---

##### `groupInitialRebalanceDelayMs`<sup>Optional</sup> <a name="groupInitialRebalanceDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupInitialRebalanceDelayMs"></a>

```typescript
public readonly groupInitialRebalanceDelayMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#group_initial_rebalance_delay_ms DatabaseKafkaConfig#group_initial_rebalance_delay_ms}.

---

##### `groupMaxSessionTimeoutMs`<sup>Optional</sup> <a name="groupMaxSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMaxSessionTimeoutMs"></a>

```typescript
public readonly groupMaxSessionTimeoutMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#group_max_session_timeout_ms DatabaseKafkaConfig#group_max_session_timeout_ms}.

---

##### `groupMinSessionTimeoutMs`<sup>Optional</sup> <a name="groupMinSessionTimeoutMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.groupMinSessionTimeoutMs"></a>

```typescript
public readonly groupMinSessionTimeoutMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#group_min_session_timeout_ms DatabaseKafkaConfig#group_min_session_timeout_ms}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#id DatabaseKafkaConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logCleanerDeleteRetentionMs`<sup>Optional</sup> <a name="logCleanerDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerDeleteRetentionMs"></a>

```typescript
public readonly logCleanerDeleteRetentionMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_cleaner_delete_retention_ms DatabaseKafkaConfig#log_cleaner_delete_retention_ms}.

---

##### `logCleanerMinCompactionLagMs`<sup>Optional</sup> <a name="logCleanerMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logCleanerMinCompactionLagMs"></a>

```typescript
public readonly logCleanerMinCompactionLagMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_cleaner_min_compaction_lag_ms DatabaseKafkaConfig#log_cleaner_min_compaction_lag_ms}.

---

##### `logFlushIntervalMs`<sup>Optional</sup> <a name="logFlushIntervalMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logFlushIntervalMs"></a>

```typescript
public readonly logFlushIntervalMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_flush_interval_ms DatabaseKafkaConfig#log_flush_interval_ms}.

---

##### `logIndexIntervalBytes`<sup>Optional</sup> <a name="logIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logIndexIntervalBytes"></a>

```typescript
public readonly logIndexIntervalBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_index_interval_bytes DatabaseKafkaConfig#log_index_interval_bytes}.

---

##### `logMessageDownconversionEnable`<sup>Optional</sup> <a name="logMessageDownconversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageDownconversionEnable"></a>

```typescript
public readonly logMessageDownconversionEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_message_downconversion_enable DatabaseKafkaConfig#log_message_downconversion_enable}.

---

##### `logMessageTimestampDifferenceMaxMs`<sup>Optional</sup> <a name="logMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logMessageTimestampDifferenceMaxMs"></a>

```typescript
public readonly logMessageTimestampDifferenceMaxMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_message_timestamp_difference_max_ms DatabaseKafkaConfig#log_message_timestamp_difference_max_ms}.

---

##### `logPreallocate`<sup>Optional</sup> <a name="logPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logPreallocate"></a>

```typescript
public readonly logPreallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_preallocate DatabaseKafkaConfig#log_preallocate}.

---

##### `logRetentionBytes`<sup>Optional</sup> <a name="logRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionBytes"></a>

```typescript
public readonly logRetentionBytes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_retention_bytes DatabaseKafkaConfig#log_retention_bytes}.

---

##### `logRetentionHours`<sup>Optional</sup> <a name="logRetentionHours" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionHours"></a>

```typescript
public readonly logRetentionHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_retention_hours DatabaseKafkaConfig#log_retention_hours}.

---

##### `logRetentionMs`<sup>Optional</sup> <a name="logRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRetentionMs"></a>

```typescript
public readonly logRetentionMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_retention_ms DatabaseKafkaConfig#log_retention_ms}.

---

##### `logRollJitterMs`<sup>Optional</sup> <a name="logRollJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logRollJitterMs"></a>

```typescript
public readonly logRollJitterMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_roll_jitter_ms DatabaseKafkaConfig#log_roll_jitter_ms}.

---

##### `logSegmentDeleteDelayMs`<sup>Optional</sup> <a name="logSegmentDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.logSegmentDeleteDelayMs"></a>

```typescript
public readonly logSegmentDeleteDelayMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#log_segment_delete_delay_ms DatabaseKafkaConfig#log_segment_delete_delay_ms}.

---

##### `messageMaxBytes`<sup>Optional</sup> <a name="messageMaxBytes" id="@cdktf/provider-digitalocean.databaseKafkaConfig.DatabaseKafkaConfigConfig.property.messageMaxBytes"></a>

```typescript
public readonly messageMaxBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/database_kafka_config#message_max_bytes DatabaseKafkaConfig#message_max_bytes}.

---



