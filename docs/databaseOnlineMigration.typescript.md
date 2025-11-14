# `databaseOnlineMigration` Submodule <a name="`databaseOnlineMigration` Submodule" id="@cdktf/provider-digitalocean.databaseOnlineMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOnlineMigration <a name="DatabaseOnlineMigration" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration digitalocean_database_online_migration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer"></a>

```typescript
import { databaseOnlineMigration } from '@cdktf/provider-digitalocean'

new databaseOnlineMigration.DatabaseOnlineMigration(scope: Construct, id: string, config: DatabaseOnlineMigrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig">DatabaseOnlineMigrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig">DatabaseOnlineMigrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetDisableSsl">resetDisableSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetIgnoreDbs">resetIgnoreDbs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource"></a>

```typescript
public putSource(value: DatabaseOnlineMigrationSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---

##### `resetDisableSsl` <a name="resetDisableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetDisableSsl"></a>

```typescript
public resetDisableSsl(): void
```

##### `resetIgnoreDbs` <a name="resetIgnoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.resetIgnoreDbs"></a>

```typescript
public resetIgnoreDbs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseOnlineMigration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct"></a>

```typescript
import { databaseOnlineMigration } from '@cdktf/provider-digitalocean'

databaseOnlineMigration.DatabaseOnlineMigration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement"></a>

```typescript
import { databaseOnlineMigration } from '@cdktf/provider-digitalocean'

databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource"></a>

```typescript
import { databaseOnlineMigration } from '@cdktf/provider-digitalocean'

databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport"></a>

```typescript
import { databaseOnlineMigration } from '@cdktf/provider-digitalocean'

databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseOnlineMigration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseOnlineMigration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseOnlineMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOnlineMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.source">source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference">DatabaseOnlineMigrationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSslInput">disableSslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbsInput">ignoreDbsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSsl">disableSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbs">ignoreDbs</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.source"></a>

```typescript
public readonly source: DatabaseOnlineMigrationSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference">DatabaseOnlineMigrationSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `disableSslInput`<sup>Optional</sup> <a name="disableSslInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSslInput"></a>

```typescript
public readonly disableSslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreDbsInput`<sup>Optional</sup> <a name="ignoreDbsInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbsInput"></a>

```typescript
public readonly ignoreDbsInput: string[];
```

- *Type:* string[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.sourceInput"></a>

```typescript
public readonly sourceInput: DatabaseOnlineMigrationSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `disableSsl`<sup>Required</sup> <a name="disableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.disableSsl"></a>

```typescript
public readonly disableSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreDbs`<sup>Required</sup> <a name="ignoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.ignoreDbs"></a>

```typescript
public readonly ignoreDbs: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOnlineMigrationConfig <a name="DatabaseOnlineMigrationConfig" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.Initializer"></a>

```typescript
import { databaseOnlineMigration } from '@cdktf/provider-digitalocean'

const databaseOnlineMigrationConfig: databaseOnlineMigration.DatabaseOnlineMigrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.disableSsl">disableSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disables SSL encryption when connecting to the source database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.ignoreDbs">ignoreDbs</a></code> | <code>string[]</code> | The list of databases to be ignored during the migration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.source"></a>

```typescript
public readonly source: DatabaseOnlineMigrationSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration#source DatabaseOnlineMigration#source}

---

##### `disableSsl`<sup>Optional</sup> <a name="disableSsl" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.disableSsl"></a>

```typescript
public readonly disableSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disables SSL encryption when connecting to the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration#disable_ssl DatabaseOnlineMigration#disable_ssl}

---

##### `ignoreDbs`<sup>Optional</sup> <a name="ignoreDbs" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationConfig.property.ignoreDbs"></a>

```typescript
public readonly ignoreDbs: string[];
```

- *Type:* string[]

The list of databases to be ignored during the migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration#ignore_dbs DatabaseOnlineMigration#ignore_dbs}

---

### DatabaseOnlineMigrationSource <a name="DatabaseOnlineMigrationSource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.Initializer"></a>

```typescript
import { databaseOnlineMigration } from '@cdktf/provider-digitalocean'

const databaseOnlineMigrationSource: databaseOnlineMigration.DatabaseOnlineMigrationSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.dbName">dbName</a></code> | <code>string</code> | The name of the default database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.host">host</a></code> | <code>string</code> | The FQDN pointing to the database cluster's current primary node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.password">password</a></code> | <code>string</code> | The password of the database. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.port">port</a></code> | <code>number</code> | The port on which the database cluster is listening. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.username">username</a></code> | <code>string</code> | The default user of the database. |

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

The name of the default database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration#db_name DatabaseOnlineMigration#db_name}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The FQDN pointing to the database cluster's current primary node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration#host DatabaseOnlineMigration#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration#password DatabaseOnlineMigration#password}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port on which the database cluster is listening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration#port DatabaseOnlineMigration#port}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The default user of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/database_online_migration#username DatabaseOnlineMigration#username}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseOnlineMigrationSourceOutputReference <a name="DatabaseOnlineMigrationSourceOutputReference" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer"></a>

```typescript
import { databaseOnlineMigration } from '@cdktf/provider-digitalocean'

new databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseOnlineMigrationSource;
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseOnlineMigration.DatabaseOnlineMigrationSource">DatabaseOnlineMigrationSource</a>

---



