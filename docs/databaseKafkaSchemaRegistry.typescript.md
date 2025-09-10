# `databaseKafkaSchemaRegistry` Submodule <a name="`databaseKafkaSchemaRegistry` Submodule" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseKafkaSchemaRegistry <a name="DatabaseKafkaSchemaRegistry" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry digitalocean_database_kafka_schema_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.Initializer"></a>

```typescript
import { databaseKafkaSchemaRegistry } from '@cdktf/provider-digitalocean'

new databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry(scope: Construct, id: string, config: DatabaseKafkaSchemaRegistryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig">DatabaseKafkaSchemaRegistryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig">DatabaseKafkaSchemaRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseKafkaSchemaRegistry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isConstruct"></a>

```typescript
import { databaseKafkaSchemaRegistry } from '@cdktf/provider-digitalocean'

databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isTerraformElement"></a>

```typescript
import { databaseKafkaSchemaRegistry } from '@cdktf/provider-digitalocean'

databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isTerraformResource"></a>

```typescript
import { databaseKafkaSchemaRegistry } from '@cdktf/provider-digitalocean'

databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.generateConfigForImport"></a>

```typescript
import { databaseKafkaSchemaRegistry } from '@cdktf/provider-digitalocean'

databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseKafkaSchemaRegistry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseKafkaSchemaRegistry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseKafkaSchemaRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseKafkaSchemaRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.schemaTypeInput">schemaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.subjectNameInput">subjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.schemaType">schemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.subjectName">subjectName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `schemaTypeInput`<sup>Optional</sup> <a name="schemaTypeInput" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.schemaTypeInput"></a>

```typescript
public readonly schemaTypeInput: string;
```

- *Type:* string

---

##### `subjectNameInput`<sup>Optional</sup> <a name="subjectNameInput" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.subjectNameInput"></a>

```typescript
public readonly subjectNameInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

---

##### `subjectName`<sup>Required</sup> <a name="subjectName" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.subjectName"></a>

```typescript
public readonly subjectName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseKafkaSchemaRegistryConfig <a name="DatabaseKafkaSchemaRegistryConfig" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.Initializer"></a>

```typescript
import { databaseKafkaSchemaRegistry } from '@cdktf/provider-digitalocean'

const databaseKafkaSchemaRegistryConfig: databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#cluster_id DatabaseKafkaSchemaRegistry#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#schema DatabaseKafkaSchemaRegistry#schema}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.schemaType">schemaType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#schema_type DatabaseKafkaSchemaRegistry#schema_type}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.subjectName">subjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#subject_name DatabaseKafkaSchemaRegistry#subject_name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#id DatabaseKafkaSchemaRegistry#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#cluster_id DatabaseKafkaSchemaRegistry#cluster_id}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#schema DatabaseKafkaSchemaRegistry#schema}.

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#schema_type DatabaseKafkaSchemaRegistry#schema_type}.

---

##### `subjectName`<sup>Required</sup> <a name="subjectName" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.subjectName"></a>

```typescript
public readonly subjectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#subject_name DatabaseKafkaSchemaRegistry#subject_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaSchemaRegistry.DatabaseKafkaSchemaRegistryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#id DatabaseKafkaSchemaRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



