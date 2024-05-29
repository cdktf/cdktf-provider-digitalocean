# `databaseKafkaTopic` Submodule <a name="`databaseKafkaTopic` Submodule" id="@cdktf/provider-digitalocean.databaseKafkaTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseKafkaTopic <a name="DatabaseKafkaTopic" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic digitalocean_database_kafka_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer"></a>

```typescript
import { databaseKafkaTopic } from '@cdktf/provider-digitalocean'

new databaseKafkaTopic.DatabaseKafkaTopic(scope: Construct, id: string, config: DatabaseKafkaTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig">DatabaseKafkaTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig">DatabaseKafkaTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetPartitionCount">resetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetReplicationFactor">resetReplicationFactor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig"></a>

```typescript
public putConfig(value: IResolvable | DatabaseKafkaTopicConfigA[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>[]

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPartitionCount` <a name="resetPartitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetPartitionCount"></a>

```typescript
public resetPartitionCount(): void
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetReplicationFactor"></a>

```typescript
public resetReplicationFactor(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseKafkaTopic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct"></a>

```typescript
import { databaseKafkaTopic } from '@cdktf/provider-digitalocean'

databaseKafkaTopic.DatabaseKafkaTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement"></a>

```typescript
import { databaseKafkaTopic } from '@cdktf/provider-digitalocean'

databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource"></a>

```typescript
import { databaseKafkaTopic } from '@cdktf/provider-digitalocean'

databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport"></a>

```typescript
import { databaseKafkaTopic } from '@cdktf/provider-digitalocean'

databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseKafkaTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseKafkaTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseKafkaTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseKafkaTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList">DatabaseKafkaTopicConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.configInput">configInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCountInput">partitionCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactorInput">replicationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCount">partitionCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.config"></a>

```typescript
public readonly config: DatabaseKafkaTopicConfigAList;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList">DatabaseKafkaTopicConfigAList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | DatabaseKafkaTopicConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionCountInput`<sup>Optional</sup> <a name="partitionCountInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCountInput"></a>

```typescript
public readonly partitionCountInput: number;
```

- *Type:* number

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactorInput"></a>

```typescript
public readonly replicationFactorInput: number;
```

- *Type:* number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partitionCount`<sup>Required</sup> <a name="partitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCount"></a>

```typescript
public readonly partitionCount: number;
```

- *Type:* number

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseKafkaTopicConfig <a name="DatabaseKafkaTopicConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.Initializer"></a>

```typescript
import { databaseKafkaTopic } from '@cdktf/provider-digitalocean'

const databaseKafkaTopicConfig: databaseKafkaTopic.DatabaseKafkaTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.config">config</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>[]</code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.partitionCount">partitionCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.config"></a>

```typescript
public readonly config: IResolvable | DatabaseKafkaTopicConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>[]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#config DatabaseKafkaTopic#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionCount`<sup>Optional</sup> <a name="partitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.partitionCount"></a>

```typescript
public readonly partitionCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}.

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}.

---

### DatabaseKafkaTopicConfigA <a name="DatabaseKafkaTopicConfigA" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.Initializer"></a>

```typescript
import { databaseKafkaTopic } from '@cdktf/provider-digitalocean'

const databaseKafkaTopicConfigA: databaseKafkaTopic.DatabaseKafkaTopicConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.cleanupPolicy">cleanupPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#cleanup_policy DatabaseKafkaTopic#cleanup_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.compressionType">compressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#compression_type DatabaseKafkaTopic#compression_type}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.deleteRetentionMs">deleteRetentionMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#delete_retention_ms DatabaseKafkaTopic#delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.fileDeleteDelayMs">fileDeleteDelayMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#file_delete_delay_ms DatabaseKafkaTopic#file_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMessages">flushMessages</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#flush_messages DatabaseKafkaTopic#flush_messages}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMs">flushMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#flush_ms DatabaseKafkaTopic#flush_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.indexIntervalBytes">indexIntervalBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#index_interval_bytes DatabaseKafkaTopic#index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxCompactionLagMs">maxCompactionLagMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#max_compaction_lag_ms DatabaseKafkaTopic#max_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxMessageBytes">maxMessageBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#max_message_bytes DatabaseKafkaTopic#max_message_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageDownConversionEnable">messageDownConversionEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#message_down_conversion_enable DatabaseKafkaTopic#message_down_conversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageFormatVersion">messageFormatVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#message_format_version DatabaseKafkaTopic#message_format_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampDifferenceMaxMs">messageTimestampDifferenceMaxMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#message_timestamp_difference_max_ms DatabaseKafkaTopic#message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampType">messageTimestampType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#message_timestamp_type DatabaseKafkaTopic#message_timestamp_type}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCleanableDirtyRatio">minCleanableDirtyRatio</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#min_cleanable_dirty_ratio DatabaseKafkaTopic#min_cleanable_dirty_ratio}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCompactionLagMs">minCompactionLagMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#min_compaction_lag_ms DatabaseKafkaTopic#min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minInsyncReplicas">minInsyncReplicas</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#min_insync_replicas DatabaseKafkaTopic#min_insync_replicas}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.preallocate">preallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#preallocate DatabaseKafkaTopic#preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionBytes">retentionBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#retention_bytes DatabaseKafkaTopic#retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionMs">retentionMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#retention_ms DatabaseKafkaTopic#retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentBytes">segmentBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#segment_bytes DatabaseKafkaTopic#segment_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentIndexBytes">segmentIndexBytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#segment_index_bytes DatabaseKafkaTopic#segment_index_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentJitterMs">segmentJitterMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#segment_jitter_ms DatabaseKafkaTopic#segment_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentMs">segmentMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#segment_ms DatabaseKafkaTopic#segment_ms}. |

---

##### `cleanupPolicy`<sup>Optional</sup> <a name="cleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.cleanupPolicy"></a>

```typescript
public readonly cleanupPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#cleanup_policy DatabaseKafkaTopic#cleanup_policy}.

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#compression_type DatabaseKafkaTopic#compression_type}.

---

##### `deleteRetentionMs`<sup>Optional</sup> <a name="deleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.deleteRetentionMs"></a>

```typescript
public readonly deleteRetentionMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#delete_retention_ms DatabaseKafkaTopic#delete_retention_ms}.

---

##### `fileDeleteDelayMs`<sup>Optional</sup> <a name="fileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.fileDeleteDelayMs"></a>

```typescript
public readonly fileDeleteDelayMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#file_delete_delay_ms DatabaseKafkaTopic#file_delete_delay_ms}.

---

##### `flushMessages`<sup>Optional</sup> <a name="flushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMessages"></a>

```typescript
public readonly flushMessages: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#flush_messages DatabaseKafkaTopic#flush_messages}.

---

##### `flushMs`<sup>Optional</sup> <a name="flushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMs"></a>

```typescript
public readonly flushMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#flush_ms DatabaseKafkaTopic#flush_ms}.

---

##### `indexIntervalBytes`<sup>Optional</sup> <a name="indexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.indexIntervalBytes"></a>

```typescript
public readonly indexIntervalBytes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#index_interval_bytes DatabaseKafkaTopic#index_interval_bytes}.

---

##### `maxCompactionLagMs`<sup>Optional</sup> <a name="maxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxCompactionLagMs"></a>

```typescript
public readonly maxCompactionLagMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#max_compaction_lag_ms DatabaseKafkaTopic#max_compaction_lag_ms}.

---

##### `maxMessageBytes`<sup>Optional</sup> <a name="maxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxMessageBytes"></a>

```typescript
public readonly maxMessageBytes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#max_message_bytes DatabaseKafkaTopic#max_message_bytes}.

---

##### `messageDownConversionEnable`<sup>Optional</sup> <a name="messageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageDownConversionEnable"></a>

```typescript
public readonly messageDownConversionEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#message_down_conversion_enable DatabaseKafkaTopic#message_down_conversion_enable}.

---

##### `messageFormatVersion`<sup>Optional</sup> <a name="messageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageFormatVersion"></a>

```typescript
public readonly messageFormatVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#message_format_version DatabaseKafkaTopic#message_format_version}.

---

##### `messageTimestampDifferenceMaxMs`<sup>Optional</sup> <a name="messageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampDifferenceMaxMs"></a>

```typescript
public readonly messageTimestampDifferenceMaxMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#message_timestamp_difference_max_ms DatabaseKafkaTopic#message_timestamp_difference_max_ms}.

---

##### `messageTimestampType`<sup>Optional</sup> <a name="messageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampType"></a>

```typescript
public readonly messageTimestampType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#message_timestamp_type DatabaseKafkaTopic#message_timestamp_type}.

---

##### `minCleanableDirtyRatio`<sup>Optional</sup> <a name="minCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCleanableDirtyRatio"></a>

```typescript
public readonly minCleanableDirtyRatio: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#min_cleanable_dirty_ratio DatabaseKafkaTopic#min_cleanable_dirty_ratio}.

---

##### `minCompactionLagMs`<sup>Optional</sup> <a name="minCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCompactionLagMs"></a>

```typescript
public readonly minCompactionLagMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#min_compaction_lag_ms DatabaseKafkaTopic#min_compaction_lag_ms}.

---

##### `minInsyncReplicas`<sup>Optional</sup> <a name="minInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minInsyncReplicas"></a>

```typescript
public readonly minInsyncReplicas: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#min_insync_replicas DatabaseKafkaTopic#min_insync_replicas}.

---

##### `preallocate`<sup>Optional</sup> <a name="preallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.preallocate"></a>

```typescript
public readonly preallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#preallocate DatabaseKafkaTopic#preallocate}.

---

##### `retentionBytes`<sup>Optional</sup> <a name="retentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionBytes"></a>

```typescript
public readonly retentionBytes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#retention_bytes DatabaseKafkaTopic#retention_bytes}.

---

##### `retentionMs`<sup>Optional</sup> <a name="retentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionMs"></a>

```typescript
public readonly retentionMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#retention_ms DatabaseKafkaTopic#retention_ms}.

---

##### `segmentBytes`<sup>Optional</sup> <a name="segmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentBytes"></a>

```typescript
public readonly segmentBytes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#segment_bytes DatabaseKafkaTopic#segment_bytes}.

---

##### `segmentIndexBytes`<sup>Optional</sup> <a name="segmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentIndexBytes"></a>

```typescript
public readonly segmentIndexBytes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#segment_index_bytes DatabaseKafkaTopic#segment_index_bytes}.

---

##### `segmentJitterMs`<sup>Optional</sup> <a name="segmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentJitterMs"></a>

```typescript
public readonly segmentJitterMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#segment_jitter_ms DatabaseKafkaTopic#segment_jitter_ms}.

---

##### `segmentMs`<sup>Optional</sup> <a name="segmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentMs"></a>

```typescript
public readonly segmentMs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.0/docs/resources/database_kafka_topic#segment_ms DatabaseKafkaTopic#segment_ms}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseKafkaTopicConfigAList <a name="DatabaseKafkaTopicConfigAList" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer"></a>

```typescript
import { databaseKafkaTopic } from '@cdktf/provider-digitalocean'

new databaseKafkaTopic.DatabaseKafkaTopicConfigAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get"></a>

```typescript
public get(index: number): DatabaseKafkaTopicConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseKafkaTopicConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>[]

---


### DatabaseKafkaTopicConfigAOutputReference <a name="DatabaseKafkaTopicConfigAOutputReference" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer"></a>

```typescript
import { databaseKafkaTopic } from '@cdktf/provider-digitalocean'

new databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCleanupPolicy">resetCleanupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetDeleteRetentionMs">resetDeleteRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFileDeleteDelayMs">resetFileDeleteDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMessages">resetFlushMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMs">resetFlushMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetIndexIntervalBytes">resetIndexIntervalBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxCompactionLagMs">resetMaxCompactionLagMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxMessageBytes">resetMaxMessageBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageDownConversionEnable">resetMessageDownConversionEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageFormatVersion">resetMessageFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampDifferenceMaxMs">resetMessageTimestampDifferenceMaxMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampType">resetMessageTimestampType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCleanableDirtyRatio">resetMinCleanableDirtyRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCompactionLagMs">resetMinCompactionLagMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinInsyncReplicas">resetMinInsyncReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetPreallocate">resetPreallocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionBytes">resetRetentionBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionMs">resetRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentBytes">resetSegmentBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentIndexBytes">resetSegmentIndexBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentJitterMs">resetSegmentJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentMs">resetSegmentMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCleanupPolicy` <a name="resetCleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCleanupPolicy"></a>

```typescript
public resetCleanupPolicy(): void
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCompressionType"></a>

```typescript
public resetCompressionType(): void
```

##### `resetDeleteRetentionMs` <a name="resetDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetDeleteRetentionMs"></a>

```typescript
public resetDeleteRetentionMs(): void
```

##### `resetFileDeleteDelayMs` <a name="resetFileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFileDeleteDelayMs"></a>

```typescript
public resetFileDeleteDelayMs(): void
```

##### `resetFlushMessages` <a name="resetFlushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMessages"></a>

```typescript
public resetFlushMessages(): void
```

##### `resetFlushMs` <a name="resetFlushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMs"></a>

```typescript
public resetFlushMs(): void
```

##### `resetIndexIntervalBytes` <a name="resetIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetIndexIntervalBytes"></a>

```typescript
public resetIndexIntervalBytes(): void
```

##### `resetMaxCompactionLagMs` <a name="resetMaxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxCompactionLagMs"></a>

```typescript
public resetMaxCompactionLagMs(): void
```

##### `resetMaxMessageBytes` <a name="resetMaxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxMessageBytes"></a>

```typescript
public resetMaxMessageBytes(): void
```

##### `resetMessageDownConversionEnable` <a name="resetMessageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageDownConversionEnable"></a>

```typescript
public resetMessageDownConversionEnable(): void
```

##### `resetMessageFormatVersion` <a name="resetMessageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageFormatVersion"></a>

```typescript
public resetMessageFormatVersion(): void
```

##### `resetMessageTimestampDifferenceMaxMs` <a name="resetMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampDifferenceMaxMs"></a>

```typescript
public resetMessageTimestampDifferenceMaxMs(): void
```

##### `resetMessageTimestampType` <a name="resetMessageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampType"></a>

```typescript
public resetMessageTimestampType(): void
```

##### `resetMinCleanableDirtyRatio` <a name="resetMinCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCleanableDirtyRatio"></a>

```typescript
public resetMinCleanableDirtyRatio(): void
```

##### `resetMinCompactionLagMs` <a name="resetMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCompactionLagMs"></a>

```typescript
public resetMinCompactionLagMs(): void
```

##### `resetMinInsyncReplicas` <a name="resetMinInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinInsyncReplicas"></a>

```typescript
public resetMinInsyncReplicas(): void
```

##### `resetPreallocate` <a name="resetPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetPreallocate"></a>

```typescript
public resetPreallocate(): void
```

##### `resetRetentionBytes` <a name="resetRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionBytes"></a>

```typescript
public resetRetentionBytes(): void
```

##### `resetRetentionMs` <a name="resetRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionMs"></a>

```typescript
public resetRetentionMs(): void
```

##### `resetSegmentBytes` <a name="resetSegmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentBytes"></a>

```typescript
public resetSegmentBytes(): void
```

##### `resetSegmentIndexBytes` <a name="resetSegmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentIndexBytes"></a>

```typescript
public resetSegmentIndexBytes(): void
```

##### `resetSegmentJitterMs` <a name="resetSegmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentJitterMs"></a>

```typescript
public resetSegmentJitterMs(): void
```

##### `resetSegmentMs` <a name="resetSegmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentMs"></a>

```typescript
public resetSegmentMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicyInput">cleanupPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMsInput">deleteRetentionMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMsInput">fileDeleteDelayMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessagesInput">flushMessagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMsInput">flushMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytesInput">indexIntervalBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMsInput">maxCompactionLagMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytesInput">maxMessageBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnableInput">messageDownConversionEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersionInput">messageFormatVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMsInput">messageTimestampDifferenceMaxMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampTypeInput">messageTimestampTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatioInput">minCleanableDirtyRatioInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMsInput">minCompactionLagMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicasInput">minInsyncReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocateInput">preallocateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytesInput">retentionBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMsInput">retentionMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytesInput">segmentBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytesInput">segmentIndexBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMsInput">segmentJitterMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMsInput">segmentMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicy">cleanupPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionType">compressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMs">deleteRetentionMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMs">fileDeleteDelayMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessages">flushMessages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMs">flushMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytes">indexIntervalBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMs">maxCompactionLagMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytes">maxMessageBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnable">messageDownConversionEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersion">messageFormatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMs">messageTimestampDifferenceMaxMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampType">messageTimestampType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatio">minCleanableDirtyRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMs">minCompactionLagMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicas">minInsyncReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocate">preallocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytes">retentionBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMs">retentionMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytes">segmentBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytes">segmentIndexBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMs">segmentJitterMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMs">segmentMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cleanupPolicyInput`<sup>Optional</sup> <a name="cleanupPolicyInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicyInput"></a>

```typescript
public readonly cleanupPolicyInput: string;
```

- *Type:* string

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionTypeInput"></a>

```typescript
public readonly compressionTypeInput: string;
```

- *Type:* string

---

##### `deleteRetentionMsInput`<sup>Optional</sup> <a name="deleteRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMsInput"></a>

```typescript
public readonly deleteRetentionMsInput: string;
```

- *Type:* string

---

##### `fileDeleteDelayMsInput`<sup>Optional</sup> <a name="fileDeleteDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMsInput"></a>

```typescript
public readonly fileDeleteDelayMsInput: string;
```

- *Type:* string

---

##### `flushMessagesInput`<sup>Optional</sup> <a name="flushMessagesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessagesInput"></a>

```typescript
public readonly flushMessagesInput: string;
```

- *Type:* string

---

##### `flushMsInput`<sup>Optional</sup> <a name="flushMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMsInput"></a>

```typescript
public readonly flushMsInput: string;
```

- *Type:* string

---

##### `indexIntervalBytesInput`<sup>Optional</sup> <a name="indexIntervalBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytesInput"></a>

```typescript
public readonly indexIntervalBytesInput: string;
```

- *Type:* string

---

##### `maxCompactionLagMsInput`<sup>Optional</sup> <a name="maxCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMsInput"></a>

```typescript
public readonly maxCompactionLagMsInput: string;
```

- *Type:* string

---

##### `maxMessageBytesInput`<sup>Optional</sup> <a name="maxMessageBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytesInput"></a>

```typescript
public readonly maxMessageBytesInput: string;
```

- *Type:* string

---

##### `messageDownConversionEnableInput`<sup>Optional</sup> <a name="messageDownConversionEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnableInput"></a>

```typescript
public readonly messageDownConversionEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormatVersionInput`<sup>Optional</sup> <a name="messageFormatVersionInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersionInput"></a>

```typescript
public readonly messageFormatVersionInput: string;
```

- *Type:* string

---

##### `messageTimestampDifferenceMaxMsInput`<sup>Optional</sup> <a name="messageTimestampDifferenceMaxMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMsInput"></a>

```typescript
public readonly messageTimestampDifferenceMaxMsInput: string;
```

- *Type:* string

---

##### `messageTimestampTypeInput`<sup>Optional</sup> <a name="messageTimestampTypeInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampTypeInput"></a>

```typescript
public readonly messageTimestampTypeInput: string;
```

- *Type:* string

---

##### `minCleanableDirtyRatioInput`<sup>Optional</sup> <a name="minCleanableDirtyRatioInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatioInput"></a>

```typescript
public readonly minCleanableDirtyRatioInput: number;
```

- *Type:* number

---

##### `minCompactionLagMsInput`<sup>Optional</sup> <a name="minCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMsInput"></a>

```typescript
public readonly minCompactionLagMsInput: string;
```

- *Type:* string

---

##### `minInsyncReplicasInput`<sup>Optional</sup> <a name="minInsyncReplicasInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicasInput"></a>

```typescript
public readonly minInsyncReplicasInput: number;
```

- *Type:* number

---

##### `preallocateInput`<sup>Optional</sup> <a name="preallocateInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocateInput"></a>

```typescript
public readonly preallocateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionBytesInput`<sup>Optional</sup> <a name="retentionBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytesInput"></a>

```typescript
public readonly retentionBytesInput: string;
```

- *Type:* string

---

##### `retentionMsInput`<sup>Optional</sup> <a name="retentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMsInput"></a>

```typescript
public readonly retentionMsInput: string;
```

- *Type:* string

---

##### `segmentBytesInput`<sup>Optional</sup> <a name="segmentBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytesInput"></a>

```typescript
public readonly segmentBytesInput: string;
```

- *Type:* string

---

##### `segmentIndexBytesInput`<sup>Optional</sup> <a name="segmentIndexBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytesInput"></a>

```typescript
public readonly segmentIndexBytesInput: string;
```

- *Type:* string

---

##### `segmentJitterMsInput`<sup>Optional</sup> <a name="segmentJitterMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMsInput"></a>

```typescript
public readonly segmentJitterMsInput: string;
```

- *Type:* string

---

##### `segmentMsInput`<sup>Optional</sup> <a name="segmentMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMsInput"></a>

```typescript
public readonly segmentMsInput: string;
```

- *Type:* string

---

##### `cleanupPolicy`<sup>Required</sup> <a name="cleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicy"></a>

```typescript
public readonly cleanupPolicy: string;
```

- *Type:* string

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

---

##### `deleteRetentionMs`<sup>Required</sup> <a name="deleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMs"></a>

```typescript
public readonly deleteRetentionMs: string;
```

- *Type:* string

---

##### `fileDeleteDelayMs`<sup>Required</sup> <a name="fileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMs"></a>

```typescript
public readonly fileDeleteDelayMs: string;
```

- *Type:* string

---

##### `flushMessages`<sup>Required</sup> <a name="flushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessages"></a>

```typescript
public readonly flushMessages: string;
```

- *Type:* string

---

##### `flushMs`<sup>Required</sup> <a name="flushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMs"></a>

```typescript
public readonly flushMs: string;
```

- *Type:* string

---

##### `indexIntervalBytes`<sup>Required</sup> <a name="indexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytes"></a>

```typescript
public readonly indexIntervalBytes: string;
```

- *Type:* string

---

##### `maxCompactionLagMs`<sup>Required</sup> <a name="maxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMs"></a>

```typescript
public readonly maxCompactionLagMs: string;
```

- *Type:* string

---

##### `maxMessageBytes`<sup>Required</sup> <a name="maxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytes"></a>

```typescript
public readonly maxMessageBytes: string;
```

- *Type:* string

---

##### `messageDownConversionEnable`<sup>Required</sup> <a name="messageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnable"></a>

```typescript
public readonly messageDownConversionEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormatVersion`<sup>Required</sup> <a name="messageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersion"></a>

```typescript
public readonly messageFormatVersion: string;
```

- *Type:* string

---

##### `messageTimestampDifferenceMaxMs`<sup>Required</sup> <a name="messageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMs"></a>

```typescript
public readonly messageTimestampDifferenceMaxMs: string;
```

- *Type:* string

---

##### `messageTimestampType`<sup>Required</sup> <a name="messageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampType"></a>

```typescript
public readonly messageTimestampType: string;
```

- *Type:* string

---

##### `minCleanableDirtyRatio`<sup>Required</sup> <a name="minCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatio"></a>

```typescript
public readonly minCleanableDirtyRatio: number;
```

- *Type:* number

---

##### `minCompactionLagMs`<sup>Required</sup> <a name="minCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMs"></a>

```typescript
public readonly minCompactionLagMs: string;
```

- *Type:* string

---

##### `minInsyncReplicas`<sup>Required</sup> <a name="minInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicas"></a>

```typescript
public readonly minInsyncReplicas: number;
```

- *Type:* number

---

##### `preallocate`<sup>Required</sup> <a name="preallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocate"></a>

```typescript
public readonly preallocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionBytes`<sup>Required</sup> <a name="retentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytes"></a>

```typescript
public readonly retentionBytes: string;
```

- *Type:* string

---

##### `retentionMs`<sup>Required</sup> <a name="retentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMs"></a>

```typescript
public readonly retentionMs: string;
```

- *Type:* string

---

##### `segmentBytes`<sup>Required</sup> <a name="segmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytes"></a>

```typescript
public readonly segmentBytes: string;
```

- *Type:* string

---

##### `segmentIndexBytes`<sup>Required</sup> <a name="segmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytes"></a>

```typescript
public readonly segmentIndexBytes: string;
```

- *Type:* string

---

##### `segmentJitterMs`<sup>Required</sup> <a name="segmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMs"></a>

```typescript
public readonly segmentJitterMs: string;
```

- *Type:* string

---

##### `segmentMs`<sup>Required</sup> <a name="segmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMs"></a>

```typescript
public readonly segmentMs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseKafkaTopicConfigA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>

---



