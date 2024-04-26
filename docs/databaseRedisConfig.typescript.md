# `databaseRedisConfig` Submodule <a name="`databaseRedisConfig` Submodule" id="@cdktf/provider-digitalocean.databaseRedisConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseRedisConfig <a name="DatabaseRedisConfig" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config digitalocean_database_redis_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer"></a>

```typescript
import { databaseRedisConfig } from '@cdktf/provider-digitalocean'

new databaseRedisConfig.DatabaseRedisConfig(scope: Construct, id: string, config: DatabaseRedisConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig">DatabaseRedisConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig">DatabaseRedisConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetAclChannelsDefault">resetAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetIoThreads">resetIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuDecayTime">resetLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuLogFactor">resetLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetMaxmemoryPolicy">resetMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNotifyKeyspaceEvents">resetNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNumberOfDatabases">resetNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPersistence">resetPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPubsubClientOutputBufferLimit">resetPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAclChannelsDefault` <a name="resetAclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetAclChannelsDefault"></a>

```typescript
public resetAclChannelsDefault(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIoThreads` <a name="resetIoThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetIoThreads"></a>

```typescript
public resetIoThreads(): void
```

##### `resetLfuDecayTime` <a name="resetLfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuDecayTime"></a>

```typescript
public resetLfuDecayTime(): void
```

##### `resetLfuLogFactor` <a name="resetLfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetLfuLogFactor"></a>

```typescript
public resetLfuLogFactor(): void
```

##### `resetMaxmemoryPolicy` <a name="resetMaxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetMaxmemoryPolicy"></a>

```typescript
public resetMaxmemoryPolicy(): void
```

##### `resetNotifyKeyspaceEvents` <a name="resetNotifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNotifyKeyspaceEvents"></a>

```typescript
public resetNotifyKeyspaceEvents(): void
```

##### `resetNumberOfDatabases` <a name="resetNumberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetNumberOfDatabases"></a>

```typescript
public resetNumberOfDatabases(): void
```

##### `resetPersistence` <a name="resetPersistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPersistence"></a>

```typescript
public resetPersistence(): void
```

##### `resetPubsubClientOutputBufferLimit` <a name="resetPubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetPubsubClientOutputBufferLimit"></a>

```typescript
public resetPubsubClientOutputBufferLimit(): void
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetSsl"></a>

```typescript
public resetSsl(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseRedisConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct"></a>

```typescript
import { databaseRedisConfig } from '@cdktf/provider-digitalocean'

databaseRedisConfig.DatabaseRedisConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement"></a>

```typescript
import { databaseRedisConfig } from '@cdktf/provider-digitalocean'

databaseRedisConfig.DatabaseRedisConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource"></a>

```typescript
import { databaseRedisConfig } from '@cdktf/provider-digitalocean'

databaseRedisConfig.DatabaseRedisConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport"></a>

```typescript
import { databaseRedisConfig } from '@cdktf/provider-digitalocean'

databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseRedisConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseRedisConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseRedisConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseRedisConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefaultInput">aclChannelsDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreadsInput">ioThreadsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTimeInput">lfuDecayTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactorInput">lfuLogFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicyInput">maxmemoryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEventsInput">notifyKeyspaceEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabasesInput">numberOfDatabasesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistenceInput">persistenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimitInput">pubsubClientOutputBufferLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.sslInput">sslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefault">aclChannelsDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreads">ioThreads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTime">lfuDecayTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactor">lfuLogFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicy">maxmemoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabases">numberOfDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistence">persistence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimit">pubsubClientOutputBufferLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ssl">ssl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aclChannelsDefaultInput`<sup>Optional</sup> <a name="aclChannelsDefaultInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefaultInput"></a>

```typescript
public readonly aclChannelsDefaultInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ioThreadsInput`<sup>Optional</sup> <a name="ioThreadsInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreadsInput"></a>

```typescript
public readonly ioThreadsInput: number;
```

- *Type:* number

---

##### `lfuDecayTimeInput`<sup>Optional</sup> <a name="lfuDecayTimeInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTimeInput"></a>

```typescript
public readonly lfuDecayTimeInput: number;
```

- *Type:* number

---

##### `lfuLogFactorInput`<sup>Optional</sup> <a name="lfuLogFactorInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactorInput"></a>

```typescript
public readonly lfuLogFactorInput: number;
```

- *Type:* number

---

##### `maxmemoryPolicyInput`<sup>Optional</sup> <a name="maxmemoryPolicyInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicyInput"></a>

```typescript
public readonly maxmemoryPolicyInput: string;
```

- *Type:* string

---

##### `notifyKeyspaceEventsInput`<sup>Optional</sup> <a name="notifyKeyspaceEventsInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEventsInput"></a>

```typescript
public readonly notifyKeyspaceEventsInput: string;
```

- *Type:* string

---

##### `numberOfDatabasesInput`<sup>Optional</sup> <a name="numberOfDatabasesInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabasesInput"></a>

```typescript
public readonly numberOfDatabasesInput: number;
```

- *Type:* number

---

##### `persistenceInput`<sup>Optional</sup> <a name="persistenceInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistenceInput"></a>

```typescript
public readonly persistenceInput: string;
```

- *Type:* string

---

##### `pubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="pubsubClientOutputBufferLimitInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimitInput"></a>

```typescript
public readonly pubsubClientOutputBufferLimitInput: number;
```

- *Type:* number

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.sslInput"></a>

```typescript
public readonly sslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `aclChannelsDefault`<sup>Required</sup> <a name="aclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.aclChannelsDefault"></a>

```typescript
public readonly aclChannelsDefault: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ioThreads`<sup>Required</sup> <a name="ioThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ioThreads"></a>

```typescript
public readonly ioThreads: number;
```

- *Type:* number

---

##### `lfuDecayTime`<sup>Required</sup> <a name="lfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuDecayTime"></a>

```typescript
public readonly lfuDecayTime: number;
```

- *Type:* number

---

##### `lfuLogFactor`<sup>Required</sup> <a name="lfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.lfuLogFactor"></a>

```typescript
public readonly lfuLogFactor: number;
```

- *Type:* number

---

##### `maxmemoryPolicy`<sup>Required</sup> <a name="maxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.maxmemoryPolicy"></a>

```typescript
public readonly maxmemoryPolicy: string;
```

- *Type:* string

---

##### `notifyKeyspaceEvents`<sup>Required</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.notifyKeyspaceEvents"></a>

```typescript
public readonly notifyKeyspaceEvents: string;
```

- *Type:* string

---

##### `numberOfDatabases`<sup>Required</sup> <a name="numberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.numberOfDatabases"></a>

```typescript
public readonly numberOfDatabases: number;
```

- *Type:* number

---

##### `persistence`<sup>Required</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.persistence"></a>

```typescript
public readonly persistence: string;
```

- *Type:* string

---

##### `pubsubClientOutputBufferLimit`<sup>Required</sup> <a name="pubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.pubsubClientOutputBufferLimit"></a>

```typescript
public readonly pubsubClientOutputBufferLimit: number;
```

- *Type:* number

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.ssl"></a>

```typescript
public readonly ssl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseRedisConfigConfig <a name="DatabaseRedisConfigConfig" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.Initializer"></a>

```typescript
import { databaseRedisConfig } from '@cdktf/provider-digitalocean'

const databaseRedisConfigConfig: databaseRedisConfig.DatabaseRedisConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.aclChannelsDefault">aclChannelsDefault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#id DatabaseRedisConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ioThreads">ioThreads</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuDecayTime">lfuDecayTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuLogFactor">lfuLogFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.maxmemoryPolicy">maxmemoryPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.numberOfDatabases">numberOfDatabases</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.persistence">persistence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.pubsubClientOutputBufferLimit">pubsubClientOutputBufferLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ssl">ssl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}.

---

##### `aclChannelsDefault`<sup>Optional</sup> <a name="aclChannelsDefault" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.aclChannelsDefault"></a>

```typescript
public readonly aclChannelsDefault: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#id DatabaseRedisConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ioThreads`<sup>Optional</sup> <a name="ioThreads" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ioThreads"></a>

```typescript
public readonly ioThreads: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}.

---

##### `lfuDecayTime`<sup>Optional</sup> <a name="lfuDecayTime" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuDecayTime"></a>

```typescript
public readonly lfuDecayTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}.

---

##### `lfuLogFactor`<sup>Optional</sup> <a name="lfuLogFactor" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.lfuLogFactor"></a>

```typescript
public readonly lfuLogFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}.

---

##### `maxmemoryPolicy`<sup>Optional</sup> <a name="maxmemoryPolicy" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.maxmemoryPolicy"></a>

```typescript
public readonly maxmemoryPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}.

---

##### `notifyKeyspaceEvents`<sup>Optional</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.notifyKeyspaceEvents"></a>

```typescript
public readonly notifyKeyspaceEvents: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}.

---

##### `numberOfDatabases`<sup>Optional</sup> <a name="numberOfDatabases" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.numberOfDatabases"></a>

```typescript
public readonly numberOfDatabases: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}.

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.persistence"></a>

```typescript
public readonly persistence: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}.

---

##### `pubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="pubsubClientOutputBufferLimit" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.pubsubClientOutputBufferLimit"></a>

```typescript
public readonly pubsubClientOutputBufferLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.ssl"></a>

```typescript
public readonly ssl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-digitalocean.databaseRedisConfig.DatabaseRedisConfigConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.37.1/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}.

---



