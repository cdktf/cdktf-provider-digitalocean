# `genaiIndexingJobCancel` Submodule <a name="`genaiIndexingJobCancel` Submodule" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiIndexingJobCancel <a name="GenaiIndexingJobCancel" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_indexing_job_cancel digitalocean_genai_indexing_job_cancel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer"></a>

```typescript
import { genaiIndexingJobCancel } from '@cdktf/provider-digitalocean'

new genaiIndexingJobCancel.GenaiIndexingJobCancel(scope: Construct, id: string, config: GenaiIndexingJobCancelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig">GenaiIndexingJobCancelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig">GenaiIndexingJobCancelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiIndexingJobCancel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isConstruct"></a>

```typescript
import { genaiIndexingJobCancel } from '@cdktf/provider-digitalocean'

genaiIndexingJobCancel.GenaiIndexingJobCancel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformElement"></a>

```typescript
import { genaiIndexingJobCancel } from '@cdktf/provider-digitalocean'

genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformResource"></a>

```typescript
import { genaiIndexingJobCancel } from '@cdktf/provider-digitalocean'

genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport"></a>

```typescript
import { genaiIndexingJobCancel } from '@cdktf/provider-digitalocean'

genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GenaiIndexingJobCancel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenaiIndexingJobCancel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenaiIndexingJobCancel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_indexing_job_cancel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenaiIndexingJobCancel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.completedDatasources">completedDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dataSourceUuids">dataSourceUuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.finishedAt">finishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.startedAt">startedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalDatasources">totalDatasources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsFailed">totalItemsFailed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsIndexed">totalItemsIndexed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsSkipped">totalItemsSkipped</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `completedDatasources`<sup>Required</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.completedDatasources"></a>

```typescript
public readonly completedDatasources: number;
```

- *Type:* number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataSourceUuids`<sup>Required</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.dataSourceUuids"></a>

```typescript
public readonly dataSourceUuids: string[];
```

- *Type:* string[]

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.finishedAt"></a>

```typescript
public readonly finishedAt: string;
```

- *Type:* string

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.knowledgeBaseUuid"></a>

```typescript
public readonly knowledgeBaseUuid: string;
```

- *Type:* string

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.startedAt"></a>

```typescript
public readonly startedAt: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `totalDatasources`<sup>Required</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalDatasources"></a>

```typescript
public readonly totalDatasources: number;
```

- *Type:* number

---

##### `totalItemsFailed`<sup>Required</sup> <a name="totalItemsFailed" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsFailed"></a>

```typescript
public readonly totalItemsFailed: number;
```

- *Type:* number

---

##### `totalItemsIndexed`<sup>Required</sup> <a name="totalItemsIndexed" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsIndexed"></a>

```typescript
public readonly totalItemsIndexed: number;
```

- *Type:* number

---

##### `totalItemsSkipped`<sup>Required</sup> <a name="totalItemsSkipped" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.totalItemsSkipped"></a>

```typescript
public readonly totalItemsSkipped: number;
```

- *Type:* number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiIndexingJobCancelConfig <a name="GenaiIndexingJobCancelConfig" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.Initializer"></a>

```typescript
import { genaiIndexingJobCancel } from '@cdktf/provider-digitalocean'

const genaiIndexingJobCancelConfig: genaiIndexingJobCancel.GenaiIndexingJobCancelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.uuid">uuid</a></code> | <code>string</code> | The UUID of the indexing job to cancel. |
| <code><a href="#@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_indexing_job_cancel#id GenaiIndexingJobCancel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID of the indexing job to cancel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_indexing_job_cancel#uuid GenaiIndexingJobCancel#uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiIndexingJobCancel.GenaiIndexingJobCancelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_indexing_job_cancel#id GenaiIndexingJobCancel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



