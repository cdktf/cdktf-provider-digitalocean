# `databaseMongodbConfig` Submodule <a name="`databaseMongodbConfig` Submodule" id="@cdktf/provider-digitalocean.databaseMongodbConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMongodbConfig <a name="DatabaseMongodbConfig" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config digitalocean_database_mongodb_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer"></a>

```typescript
import { databaseMongodbConfig } from '@cdktf/provider-digitalocean'

new databaseMongodbConfig.DatabaseMongodbConfig(scope: Construct, id: string, config: DatabaseMongodbConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig">DatabaseMongodbConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig">DatabaseMongodbConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultReadConcern">resetDefaultReadConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultWriteConcern">resetDefaultWriteConcern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetSlowOpThresholdMs">resetSlowOpThresholdMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetTransactionLifetimeLimitSeconds">resetTransactionLifetimeLimitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetVerbosity">resetVerbosity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultReadConcern` <a name="resetDefaultReadConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultReadConcern"></a>

```typescript
public resetDefaultReadConcern(): void
```

##### `resetDefaultWriteConcern` <a name="resetDefaultWriteConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetDefaultWriteConcern"></a>

```typescript
public resetDefaultWriteConcern(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSlowOpThresholdMs` <a name="resetSlowOpThresholdMs" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetSlowOpThresholdMs"></a>

```typescript
public resetSlowOpThresholdMs(): void
```

##### `resetTransactionLifetimeLimitSeconds` <a name="resetTransactionLifetimeLimitSeconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetTransactionLifetimeLimitSeconds"></a>

```typescript
public resetTransactionLifetimeLimitSeconds(): void
```

##### `resetVerbosity` <a name="resetVerbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.resetVerbosity"></a>

```typescript
public resetVerbosity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMongodbConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct"></a>

```typescript
import { databaseMongodbConfig } from '@cdktf/provider-digitalocean'

databaseMongodbConfig.DatabaseMongodbConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement"></a>

```typescript
import { databaseMongodbConfig } from '@cdktf/provider-digitalocean'

databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource"></a>

```typescript
import { databaseMongodbConfig } from '@cdktf/provider-digitalocean'

databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport"></a>

```typescript
import { databaseMongodbConfig } from '@cdktf/provider-digitalocean'

databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseMongodbConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMongodbConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMongodbConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMongodbConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcernInput">defaultReadConcernInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcernInput">defaultWriteConcernInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMsInput">slowOpThresholdMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSecondsInput">transactionLifetimeLimitSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosityInput">verbosityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcern">defaultReadConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMs">slowOpThresholdMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosity">verbosity</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `defaultReadConcernInput`<sup>Optional</sup> <a name="defaultReadConcernInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcernInput"></a>

```typescript
public readonly defaultReadConcernInput: string;
```

- *Type:* string

---

##### `defaultWriteConcernInput`<sup>Optional</sup> <a name="defaultWriteConcernInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcernInput"></a>

```typescript
public readonly defaultWriteConcernInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `slowOpThresholdMsInput`<sup>Optional</sup> <a name="slowOpThresholdMsInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMsInput"></a>

```typescript
public readonly slowOpThresholdMsInput: number;
```

- *Type:* number

---

##### `transactionLifetimeLimitSecondsInput`<sup>Optional</sup> <a name="transactionLifetimeLimitSecondsInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSecondsInput"></a>

```typescript
public readonly transactionLifetimeLimitSecondsInput: number;
```

- *Type:* number

---

##### `verbosityInput`<sup>Optional</sup> <a name="verbosityInput" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosityInput"></a>

```typescript
public readonly verbosityInput: number;
```

- *Type:* number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `defaultReadConcern`<sup>Required</sup> <a name="defaultReadConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultReadConcern"></a>

```typescript
public readonly defaultReadConcern: string;
```

- *Type:* string

---

##### `defaultWriteConcern`<sup>Required</sup> <a name="defaultWriteConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.defaultWriteConcern"></a>

```typescript
public readonly defaultWriteConcern: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `slowOpThresholdMs`<sup>Required</sup> <a name="slowOpThresholdMs" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.slowOpThresholdMs"></a>

```typescript
public readonly slowOpThresholdMs: number;
```

- *Type:* number

---

##### `transactionLifetimeLimitSeconds`<sup>Required</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.transactionLifetimeLimitSeconds"></a>

```typescript
public readonly transactionLifetimeLimitSeconds: number;
```

- *Type:* number

---

##### `verbosity`<sup>Required</sup> <a name="verbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.verbosity"></a>

```typescript
public readonly verbosity: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMongodbConfigConfig <a name="DatabaseMongodbConfigConfig" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.Initializer"></a>

```typescript
import { databaseMongodbConfig } from '@cdktf/provider-digitalocean'

const databaseMongodbConfigConfig: databaseMongodbConfig.DatabaseMongodbConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultReadConcern">defaultReadConcern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.slowOpThresholdMs">slowOpThresholdMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.transactionLifetimeLimitSeconds">transactionLifetimeLimitSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.verbosity">verbosity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}.

---

##### `defaultReadConcern`<sup>Optional</sup> <a name="defaultReadConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultReadConcern"></a>

```typescript
public readonly defaultReadConcern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}.

---

##### `defaultWriteConcern`<sup>Optional</sup> <a name="defaultWriteConcern" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.defaultWriteConcern"></a>

```typescript
public readonly defaultWriteConcern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `slowOpThresholdMs`<sup>Optional</sup> <a name="slowOpThresholdMs" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.slowOpThresholdMs"></a>

```typescript
public readonly slowOpThresholdMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}.

---

##### `transactionLifetimeLimitSeconds`<sup>Optional</sup> <a name="transactionLifetimeLimitSeconds" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.transactionLifetimeLimitSeconds"></a>

```typescript
public readonly transactionLifetimeLimitSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}.

---

##### `verbosity`<sup>Optional</sup> <a name="verbosity" id="@cdktf/provider-digitalocean.databaseMongodbConfig.DatabaseMongodbConfigConfig.property.verbosity"></a>

```typescript
public readonly verbosity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.57.0/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}.

---



